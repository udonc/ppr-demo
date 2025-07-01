import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          EC Demo Shop へようこそ
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          厳選された商品をお楽しみください
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          商品一覧
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/dynamic/products/${product.id}`}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={product.images[0] || '/placeholder.png'}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {product.category}
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    ¥{product.price.toLocaleString()}
                  </p>
                  {product.stock === 0 && (
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                      在庫切れ
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
