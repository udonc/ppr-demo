import { Product } from '@/types';

interface ProductStaticInfoProps {
  product: Product;
}

export function ProductStaticInfo({ product }: ProductStaticInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {product.name}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          カテゴリー: {product.category}
        </p>
      </div>

      <div className="prose prose-sm dark:prose-invert">
        <p>{product.description}</p>
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
  );
}