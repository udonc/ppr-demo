import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
        Welcome to the PPR Demo
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href={"/dynamic"} className="p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">
          PPR: false
        </Link>
        <Link href={"/ppr"} className="p-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors">
          PPR: true
        </Link>
      </div>
    </div>
  );
}

export default Page;