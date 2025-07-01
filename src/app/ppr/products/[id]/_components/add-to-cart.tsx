'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { CartItem } from '@/types';

interface AddToCartProps {
  productId: string;
  availableSizes?: string[];
  availableColors?: string[];
  maxQuantity: number;
  addToCartAction: (item: CartItem) => Promise<void>;
}

export const AddToCart = ({ 
  productId, 
  availableSizes, 
  availableColors, 
  maxQuantity,
  addToCartAction
}: AddToCartProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(availableSizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(availableColors?.[0] || '');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = async () => {
    const cartItem: CartItem = {
      productId,
      quantity,
      ...(selectedSize && { size: selectedSize }),
      ...(selectedColor && { color: selectedColor })
    };

    startTransition(async () => {
      await addToCartAction(cartItem);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      router.refresh();
    });
  };

  return (
    <div className="space-y-4">
      {availableSizes && availableSizes.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            サイズ
          </label>
          <div className="flex flex-wrap gap-2">
            {availableSizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedSize === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {availableColors && availableColors.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            カラー
          </label>
          <div className="flex flex-wrap gap-2">
            {availableColors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedColor === color
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          数量
        </label>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center"
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value) && value >= 1 && value <= maxQuantity) {
                setQuantity(value);
              }
            }}
            className="w-16 text-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            min="1"
            max={maxQuantity}
          />
          <button
            onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
            className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center"
            disabled={quantity >= maxQuantity}
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={isPending || maxQuantity === 0}
        className="w-full py-3 px-6 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors relative"
      >
        {isPending ? (
          'カートに追加中...'
        ) : maxQuantity === 0 ? (
          '在庫切れ'
        ) : (
          'カートに追加'
        )}
        {showSuccess && (
          <span className="absolute inset-0 flex items-center justify-center bg-green-600 rounded-md">
            ✓ 追加しました
          </span>
        )}
      </button>
    </div>
  );
}