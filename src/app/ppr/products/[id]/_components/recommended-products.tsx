import Link from 'next/link';
import Image from 'next/image';
import { getRecommendedProducts } from '@/lib/products';

interface RecommendedProductsProps {
  currentProductId: string;
}

export const RecommendedProducts = async ({ currentProductId }: RecommendedProductsProps) => {
  const recommendedProducts = await getRecommendedProducts(currentProductId);
  
  if (recommendedProducts.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        こちらもおすすめ
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recommendedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group block"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="mt-2 space-y-1">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {product.name}
              </h3>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                ¥{product.price.toLocaleString()}
              </p>
              {product.stock > 0 && product.stock <= 5 && (
                <p className="text-xs text-orange-600 dark:text-orange-400">
                  残り{product.stock}点
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}