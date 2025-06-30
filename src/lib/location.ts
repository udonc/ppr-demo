import { headers } from 'next/headers';

export interface UserLocation {
  country: string | null;
  city: string | null;
  region: string | null;
  latitude: string | null;
  longitude: string | null;
  timezone: string | null;
}

export const getUserLocation = async (): Promise<UserLocation> => {
  const headersList = await headers();
  
  // Vercelのジオロケーションヘッダーから情報を取得
  const country = headersList.get('x-vercel-ip-country');
  const city = headersList.get('x-vercel-ip-city');
  const region = headersList.get('x-vercel-ip-country-region');
  const latitude = headersList.get('x-vercel-ip-latitude');
  const longitude = headersList.get('x-vercel-ip-longitude');
  const timezone = headersList.get('x-vercel-ip-timezone');
  
  // ローカル開発環境用のフォールバック
  if (!country && process.env.NODE_ENV === 'development') {
    return {
      country: 'JP',
      city: 'Tokyo',
      region: '13',
      latitude: '35.6762',
      longitude: '139.6503',
      timezone: 'Asia/Tokyo'
    };
  }
  
  return {
    country,
    city,
    region,
    latitude,
    longitude,
    timezone
  };
}