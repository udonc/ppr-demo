import { getProductPrice } from '@/lib/products';

interface ProductPriceProps {
  productId: string;
}

export async function ProductPrice({ productId }: ProductPriceProps) {
  // 実際のAPIコールをシミュレート（動的データ取得）
  const price = await getProductPrice(productId);
  
  return (
    <div className="text-2xl font-semibold text-gray-900 dark:text-white">
      ¥{price.toLocaleString()}
    </div>
  );
}