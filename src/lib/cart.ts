import { cookies } from 'next/headers';
import { Cart, CartItem } from '@/types';

const CART_COOKIE_NAME = 'cart';

export async function getCart(): Promise<Cart> {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get(CART_COOKIE_NAME);
  
  if (!cartCookie) {
    return { items: [], updatedAt: new Date().toISOString() };
  }
  
  try {
    return JSON.parse(cartCookie.value);
  } catch {
    return { items: [], updatedAt: new Date().toISOString() };
  }
}

export async function addToCart(item: CartItem): Promise<void> {
  const cart = await getCart();
  
  const existingItemIndex = cart.items.findIndex(
    (cartItem) =>
      cartItem.productId === item.productId &&
      cartItem.size === item.size &&
      cartItem.color === item.color
  );
  
  if (existingItemIndex > -1) {
    cart.items[existingItemIndex].quantity += item.quantity;
  } else {
    cart.items.push(item);
  }
  
  cart.updatedAt = new Date().toISOString();
  
  const cookieStore = await cookies();
  cookieStore.set(CART_COOKIE_NAME, JSON.stringify(cart), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 1 week
  });
}

export async function updateCartItem(productId: string, quantity: number, size?: string, color?: string): Promise<void> {
  const cart = await getCart();
  
  const itemIndex = cart.items.findIndex(
    (item) =>
      item.productId === productId &&
      item.size === size &&
      item.color === color
  );
  
  if (itemIndex > -1) {
    if (quantity <= 0) {
      cart.items.splice(itemIndex, 1);
    } else {
      cart.items[itemIndex].quantity = quantity;
    }
    
    cart.updatedAt = new Date().toISOString();
    
    const cookieStore = await cookies();
    cookieStore.set(CART_COOKIE_NAME, JSON.stringify(cart), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7
    });
  }
}

export async function removeFromCart(productId: string, size?: string, color?: string): Promise<void> {
  await updateCartItem(productId, 0, size, color);
}

export async function clearCart(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(CART_COOKIE_NAME);
}

export async function getCartItemsCount(): Promise<number> {
  const cart = await getCart();
  return cart.items.reduce((total, item) => total + item.quantity, 0);
}