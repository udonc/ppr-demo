import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getProductById, getProductStock } from '@/lib/products';
import { addToCart } from '@/lib/cart';
import { ProductImage } from './_components/product-image';
import { AddToCart } from './_components/add-to-cart';
import { ProductPrice } from './_components/product-price';
import { ProductStock } from './_components/product-stock';
import { ProductStaticInfo } from './_components/product-static-info';
import { DeliveryEstimate } from './_components/delivery-estimate';
import { RecommendedProducts } from './_components/recommended-products';
import { CartItem } from '@/types';

const PriceSkeleton = () => {
  return (
    <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
  );
};

const StockSkeleton = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    </div>
  );
};

const DeliverySkeleton = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-[140px] animate-pulse" />
  );
};

const RecommendedSkeleton = () => {
  return (
    <div className="mt-12 border-t pt-8">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-2">
            <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  async function addToCartAction(item: CartItem) {
    'use server';
    await addToCart(item);
  }

  // AddToCartコンポーネント用に動的に在庫を取得
  const DynamicAddToCart = async () => {
    const currentStock = await getProductStock(id);
    return (
      <AddToCart
        productId={product!.id}
        availableSizes={product!.sizes}
        availableColors={product!.colors}
        maxQuantity={currentStock}
        addToCartAction={addToCartAction}
      />
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 静的コンテンツ: 商品画像 */}
        <div>
          <ProductImage images={product.images} productName={product.name} />
        </div>
        
        <div className="space-y-6">
          {/* 静的コンテンツ: 商品情報 */}
          <ProductStaticInfo product={product} />

          {/* 動的コンテンツ: 価格 */}
          <Suspense fallback={<PriceSkeleton />}>
            <ProductPrice productId={id} />
          </Suspense>

          <div className="border-t pt-6">
            {/* 動的コンテンツ: 在庫状況 */}
            <div className="mb-4">
              <Suspense fallback={<StockSkeleton />}>
                <ProductStock productId={id} />
              </Suspense>
            </div>

            {/* 動的コンテンツ: カートに追加ボタン */}
            <Suspense fallback={<div className="h-[200px] bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />}>
              <DynamicAddToCart />
            </Suspense>
          </div>

          {/* 動的コンテンツ: 配送情報 */}
          <Suspense fallback={<DeliverySkeleton />}>
            <DeliveryEstimate />
          </Suspense>
        </div>
      </div>
      
      {/* 動的コンテンツ: おすすめ商品 */}
      <Suspense fallback={<RecommendedSkeleton />}>
        <RecommendedProducts currentProductId={id} />
      </Suspense>
    </div>
  );
};

export default ProductPage;