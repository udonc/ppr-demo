import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/products';
import { addToCart } from '@/lib/cart';
import { ProductImage } from '@/components/ProductImage';
import { AddToCart } from '@/components/AddToCart';
import { CartItem } from '@/types';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  async function addToCartAction(item: CartItem) {
    'use server';
    await addToCart(item);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ProductImage images={product.images} productName={product.name} />
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              カテゴリー: {product.category}
            </p>
          </div>

          <div className="text-2xl font-semibold text-gray-900 dark:text-white">
            ¥{product.price.toLocaleString()}
          </div>

          <div className="prose prose-sm dark:prose-invert">
            <p>{product.description}</p>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                在庫状況:
              </span>
              {product.stock > 0 ? (
                <span className="text-sm text-green-600 dark:text-green-400">
                  在庫あり ({product.stock}個)
                </span>
              ) : (
                <span className="text-sm text-red-600 dark:text-red-400">
                  在庫切れ
                </span>
              )}
            </div>

            <AddToCart
              productId={product.id}
              availableSizes={product.sizes}
              availableColors={product.colors}
              maxQuantity={product.stock}
              addToCartAction={addToCartAction}
            />
          </div>

          <div className="border-t pt-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              商品情報
            </h3>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-sm text-gray-600 dark:text-gray-400">商品ID</dt>
                <dd className="text-sm text-gray-900 dark:text-white">{product.id}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-gray-600 dark:text-gray-400">カテゴリー</dt>
                <dd className="text-sm text-gray-900 dark:text-white">{product.category}</dd>
              </div>
              {product.sizes && (
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600 dark:text-gray-400">サイズ展開</dt>
                  <dd className="text-sm text-gray-900 dark:text-white">
                    {product.sizes.join(', ')}
                  </dd>
                </div>
              )}
              {product.colors && (
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600 dark:text-gray-400">カラー展開</dt>
                  <dd className="text-sm text-gray-900 dark:text-white">
                    {product.colors.join(', ')}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}