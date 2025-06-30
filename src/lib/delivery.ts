import { getUserLocation, UserLocation } from './location';

export interface DeliveryEstimate {
  minDays: number;
  maxDays: number;
  estimatedDate: Date;
  expressAvailable: boolean;
  location: {
    country: string;
    city: string;
  };
}

// 営業日を計算（土日を除く）
const addBusinessDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  let addedDays = 0;
  
  while (addedDays < days) {
    result.setDate(result.getDate() + 1);
    // 土曜日(6)と日曜日(0)を除く
    if (result.getDay() !== 0 && result.getDay() !== 6) {
      addedDays++;
    }
  }
  
  return result;
};

// 国と都市に基づいて配達日数を計算
const calculateDeliveryDays = (location: UserLocation): { min: number; max: number; express: boolean } => {
  const { country, city } = location;
  
  // 日本国内
  if (country === 'JP') {
    // 主要都市は翌日配達可能
    if (city === 'Tokyo' || city === 'Osaka' || city === 'Yokohama' || city === 'Nagoya') {
      return { min: 1, max: 2, express: true };
    }
    // その他の地域
    return { min: 2, max: 3, express: true };
  }
  
  // アジア圏
  const asianCountries = ['KR', 'CN', 'TW', 'HK', 'SG', 'TH', 'MY', 'PH', 'VN'];
  if (country && asianCountries.includes(country)) {
    return { min: 3, max: 5, express: true };
  }
  
  // 北米
  if (country === 'US' || country === 'CA') {
    return { min: 5, max: 7, express: false };
  }
  
  // ヨーロッパ
  const europeanCountries = ['GB', 'FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'CH', 'AT'];
  if (country && europeanCountries.includes(country)) {
    return { min: 7, max: 10, express: false };
  }
  
  // その他の地域
  return { min: 10, max: 14, express: false };
}

export const getDeliveryEstimate = async (): Promise<DeliveryEstimate> => {
  // APIコールの遅延をシミュレート
  await new Promise(resolve => setTimeout(resolve, 400));
  
  const location = await getUserLocation();
  const deliveryInfo = calculateDeliveryDays(location);
  
  const today = new Date();
  const estimatedDate = addBusinessDays(today, deliveryInfo.min);
  
  return {
    minDays: deliveryInfo.min,
    maxDays: deliveryInfo.max,
    estimatedDate,
    expressAvailable: deliveryInfo.express,
    location: {
      country: location.country || '不明',
      city: location.city || '不明'
    }
  };
}