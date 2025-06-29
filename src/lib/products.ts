import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'クラシック ホワイト Tシャツ',
    price: 2900,
    description: '柔らかく通気性の良い100%オーガニックコットンで作られた、タイムレスなホワイトTシャツ。どんなワードローブにも欠かせないアイテムです。',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop'
    ],
    category: 'トップス',
    stock: 50,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['ホワイト', 'ブラック', 'グレー']
  },
  {
    id: '2',
    name: 'デニム ジャケット',
    price: 8900,
    description: 'ヴィンテージインスパイアのデニムジャケット。プレミアムデニムから作られ、完璧なフィット感を提供します。',
    images: [
      'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&h=800&fit=crop'
    ],
    category: 'アウター',
    stock: 30,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '3',
    name: 'レザー スニーカー',
    price: 12900,
    description: 'プレミアムイタリアンレザーで作られた、快適でスタイリッシュなスニーカー。オールデイウェアに最適です。',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=800&fit=crop'
    ],
    category: 'シューズ',
    stock: 25,
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
    colors: ['ホワイト', 'ブラック', 'ブラウン']
  },
  {
    id: '4',
    name: 'ミニマリスト ウォッチ',
    price: 15900,
    description: 'シンプルで洗練されたデザインの腕時計。日本製クォーツムーブメント搭載。',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=800&fit=crop'
    ],
    category: 'アクセサリー',
    stock: 15,
    colors: ['シルバー', 'ゴールド', 'ローズゴールド']
  },
  {
    id: '5',
    name: 'キャンバス バックパック',
    price: 6900,
    description: '耐久性のあるキャンバス素材で作られた、実用的でスタイリッシュなバックパック。ラップトップポケット付き。',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&h=800&fit=crop'
    ],
    category: 'バッグ',
    stock: 40,
    colors: ['ネイビー', 'ブラック', 'オリーブ', 'グレー']
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(products.map(product => product.category)));
}