import { getDeliveryEstimate } from '@/lib/delivery';

export const DeliveryEstimate = async () => {
  const estimate = await getDeliveryEstimate();
  
  // 日付フォーマット（日本語）
  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    const weekday = weekdays[date.getDay()];
    return `${month}月${day}日(${weekday})`;
  };
  
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 space-y-3">
      <div className="flex items-center gap-2">
        <svg
          className="h-5 w-5 text-blue-600 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />
        </svg>
        <h3 className="font-semibold text-gray-900 dark:text-white">
          配送情報
        </h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            最短お届け日
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {formatDate(estimate.estimatedDate)}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            配送目安
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {estimate.minDays}-{estimate.maxDays}営業日
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            お届け先エリア
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {estimate.location.city !== '不明' 
              ? `${estimate.location.city}, ${estimate.location.country}` 
              : estimate.location.country}
          </span>
        </div>
        
        {estimate.expressAvailable && (
          <div className="mt-2 flex items-center gap-1">
            <svg
              className="h-4 w-4 text-green-600 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">
              お急ぎ便対応エリア
            </span>
          </div>
        )}
      </div>
    </div>
  );
}