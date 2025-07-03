'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductImageProps {
  images: string[];
  productName: string;
}

export const ProductImage = ({ images, productName }: ProductImageProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (images.length === 0) {
    return (
      <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
        <span className="text-gray-400 dark:text-gray-500">No image</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <Image
          src={images[selectedImage]}
          alt={productName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          loading="eager"
        />
      </div>
      
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 ${
                selectedImage === index
                  ? 'ring-2 ring-blue-600'
                  : 'hover:opacity-75'
              }`}
            >
              <Image
                src={image}
                alt={`${productName} ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 10vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}