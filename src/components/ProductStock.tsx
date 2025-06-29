import { getProductStock } from '@/lib/products';

interface ProductStockProps {
  productId: string;
}

export async function ProductStock({ productId }: ProductStockProps) {
  // 実際のAPIコールをシミュレート（動的データ取得）
  const stock = await getProductStock(productId);
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        在庫状況:
      </span>
      {stock > 0 ? (
        <span className="text-sm text-green-600 dark:text-green-400">
          在庫あり ({stock}個)
        </span>
      ) : (
        <span className="text-sm text-red-600 dark:text-red-400">
          在庫切れ
        </span>
      )}
    </div>
  );
}