import { Product } from '@/types';

// カテゴリごとの商品テンプレート
const categoryTemplates = {
  'トップス': {
    items: [
      { name: 'オーガニックコットン Tシャツ', basePrice: 2900, hasColors: true, hasSizes: true },
      { name: 'プレミアム ポロシャツ', basePrice: 4900, hasColors: true, hasSizes: true },
      { name: 'リネン シャツ', basePrice: 6900, hasColors: true, hasSizes: true },
      { name: 'カシミヤ セーター', basePrice: 12900, hasColors: true, hasSizes: true },
      { name: 'フーディー パーカー', basePrice: 5900, hasColors: true, hasSizes: true },
      { name: 'タンクトップ', basePrice: 1900, hasColors: true, hasSizes: true },
      { name: 'ロング スリーブ Tシャツ', basePrice: 3900, hasColors: true, hasSizes: true },
      { name: 'オックスフォード シャツ', basePrice: 7900, hasColors: true, hasSizes: true },
      { name: 'ニット ベスト', basePrice: 8900, hasColors: true, hasSizes: true },
      { name: 'スウェットシャツ', basePrice: 4900, hasColors: true, hasSizes: true }
    ],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&h=800&fit=crop'
    ]
  },
  'ボトムス': {
    items: [
      { name: 'ストレッチ デニム', basePrice: 7900, hasColors: true, hasSizes: true },
      { name: 'チノ パンツ', basePrice: 5900, hasColors: true, hasSizes: true },
      { name: 'プリーツ スカート', basePrice: 6900, hasColors: true, hasSizes: true },
      { name: 'カーゴ パンツ', basePrice: 6900, hasColors: true, hasSizes: true },
      { name: 'ショート パンツ', basePrice: 3900, hasColors: true, hasSizes: true },
      { name: 'ワイド パンツ', basePrice: 7900, hasColors: true, hasSizes: true },
      { name: 'レギンス', basePrice: 2900, hasColors: true, hasSizes: true },
      { name: 'タイト スカート', basePrice: 5900, hasColors: true, hasSizes: true },
      { name: 'スラックス', basePrice: 8900, hasColors: true, hasSizes: true },
      { name: 'ジョガー パンツ', basePrice: 4900, hasColors: true, hasSizes: true }
    ],
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=800&fit=crop'
    ]
  },
  'アウター': {
    items: [
      { name: 'デニム ジャケット', basePrice: 8900, hasColors: true, hasSizes: true },
      { name: 'トレンチ コート', basePrice: 15900, hasColors: true, hasSizes: true },
      { name: 'ダウン ジャケット', basePrice: 19900, hasColors: true, hasSizes: true },
      { name: 'レザー ジャケット', basePrice: 29900, hasColors: true, hasSizes: true },
      { name: 'ウィンドブレーカー', basePrice: 6900, hasColors: true, hasSizes: true },
      { name: 'ブレザー', basePrice: 12900, hasColors: true, hasSizes: true },
      { name: 'ボンバー ジャケット', basePrice: 9900, hasColors: true, hasSizes: true },
      { name: 'パーカー コート', basePrice: 13900, hasColors: true, hasSizes: true },
      { name: 'チェスター コート', basePrice: 16900, hasColors: true, hasSizes: true },
      { name: 'フリース ジャケット', basePrice: 7900, hasColors: true, hasSizes: true }
    ],
    images: [
      'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=800&h=800&fit=crop'
    ]
  },
  'ワンピース': {
    items: [
      { name: 'フローラル ワンピース', basePrice: 8900, hasColors: true, hasSizes: true },
      { name: 'リトル ブラック ドレス', basePrice: 9900, hasColors: false, hasSizes: true },
      { name: 'マキシ ドレス', basePrice: 7900, hasColors: true, hasSizes: true },
      { name: 'シャツ ワンピース', basePrice: 6900, hasColors: true, hasSizes: true },
      { name: 'ニット ワンピース', basePrice: 7900, hasColors: true, hasSizes: true },
      { name: 'カクテル ドレス', basePrice: 12900, hasColors: true, hasSizes: true },
      { name: 'サマー ドレス', basePrice: 5900, hasColors: true, hasSizes: true },
      { name: 'ラップ ドレス', basePrice: 6900, hasColors: true, hasSizes: true },
      { name: 'イブニング ドレス', basePrice: 19900, hasColors: true, hasSizes: true },
      { name: 'ジャンパー スカート', basePrice: 5900, hasColors: true, hasSizes: true }
    ],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=800&h=800&fit=crop'
    ]
  },
  'シューズ': {
    items: [
      { name: 'レザー スニーカー', basePrice: 12900, hasColors: true, hasSizes: true },
      { name: 'ランニング シューズ', basePrice: 9900, hasColors: true, hasSizes: true },
      { name: 'ハイヒール パンプス', basePrice: 8900, hasColors: true, hasSizes: true },
      { name: 'ローファー', basePrice: 10900, hasColors: true, hasSizes: true },
      { name: 'ブーツ', basePrice: 15900, hasColors: true, hasSizes: true },
      { name: 'サンダル', basePrice: 4900, hasColors: true, hasSizes: true },
      { name: 'エスパドリーユ', basePrice: 5900, hasColors: true, hasSizes: true },
      { name: 'モカシン', basePrice: 7900, hasColors: true, hasSizes: true },
      { name: 'バスケットボール シューズ', basePrice: 13900, hasColors: true, hasSizes: true },
      { name: 'フラット シューズ', basePrice: 6900, hasColors: true, hasSizes: true }
    ],
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=800&fit=crop'
    ]
  },
  'バッグ': {
    items: [
      { name: 'レザー トートバッグ', basePrice: 15900, hasColors: true, hasSizes: false },
      { name: 'キャンバス バックパック', basePrice: 6900, hasColors: true, hasSizes: false },
      { name: 'クラッチ バッグ', basePrice: 7900, hasColors: true, hasSizes: false },
      { name: 'メッセンジャー バッグ', basePrice: 8900, hasColors: true, hasSizes: false },
      { name: 'ショルダー バッグ', basePrice: 9900, hasColors: true, hasSizes: false },
      { name: 'ウィークエンド バッグ', basePrice: 12900, hasColors: true, hasSizes: false },
      { name: 'クロスボディ バッグ', basePrice: 7900, hasColors: true, hasSizes: false },
      { name: 'ハンドバッグ', basePrice: 13900, hasColors: true, hasSizes: false },
      { name: 'スポーツ バッグ', basePrice: 5900, hasColors: true, hasSizes: false },
      { name: 'ビジネス バッグ', basePrice: 16900, hasColors: true, hasSizes: false }
    ],
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop'
    ]
  },
  'アクセサリー': {
    items: [
      { name: 'ミニマリスト ウォッチ', basePrice: 15900, hasColors: true, hasSizes: false },
      { name: 'サングラス', basePrice: 7900, hasColors: true, hasSizes: false },
      { name: 'レザー ベルト', basePrice: 5900, hasColors: true, hasSizes: true },
      { name: 'シルバー ネックレス', basePrice: 8900, hasColors: false, hasSizes: false },
      { name: 'ゴールド ブレスレット', basePrice: 12900, hasColors: false, hasSizes: false },
      { name: 'イヤリング', basePrice: 4900, hasColors: false, hasSizes: false },
      { name: 'スカーフ', basePrice: 3900, hasColors: true, hasSizes: false },
      { name: 'キャップ', basePrice: 2900, hasColors: true, hasSizes: false },
      { name: 'レザー ウォレット', basePrice: 9900, hasColors: true, hasSizes: false },
      { name: 'リング セット', basePrice: 6900, hasColors: false, hasSizes: true }
    ],
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&h=800&fit=crop'
    ]
  },
  'スポーツウェア': {
    items: [
      { name: 'ヨガ パンツ', basePrice: 4900, hasColors: true, hasSizes: true },
      { name: 'スポーツ ブラ', basePrice: 3900, hasColors: true, hasSizes: true },
      { name: 'ランニング ショーツ', basePrice: 2900, hasColors: true, hasSizes: true },
      { name: 'トレーニング Tシャツ', basePrice: 2900, hasColors: true, hasSizes: true },
      { name: 'スイムウェア', basePrice: 5900, hasColors: true, hasSizes: true },
      { name: 'コンプレッション タイツ', basePrice: 6900, hasColors: true, hasSizes: true },
      { name: 'ウィンドブレーカー', basePrice: 7900, hasColors: true, hasSizes: true },
      { name: 'ジム バッグ', basePrice: 4900, hasColors: true, hasSizes: false },
      { name: 'トラックスーツ', basePrice: 8900, hasColors: true, hasSizes: true },
      { name: 'サイクリング ジャージ', basePrice: 6900, hasColors: true, hasSizes: true }
    ],
    images: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=800&fit=crop'
    ]
  }
};

// カラーオプション
const colorOptions = {
  basic: ['ホワイト', 'ブラック', 'グレー', 'ネイビー'],
  colorful: ['レッド', 'ブルー', 'グリーン', 'イエロー', 'ピンク', 'パープル'],
  neutral: ['ベージュ', 'ブラウン', 'カーキ', 'オリーブ'],
  denim: ['ライトブルー', 'インディゴ', 'ブラック', 'グレー'],
  leather: ['ブラック', 'ブラウン', 'タン', 'バーガンディー']
};

// サイズオプション
const sizeOptions = {
  clothing: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  shoes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
  accessories: ['フリー'],
  rings: ['5号', '7号', '9号', '11号', '13号', '15号', '17号', '19号'],
  belts: ['70cm', '75cm', '80cm', '85cm', '90cm', '95cm', '100cm']
};

// 商品説明テンプレート
const descriptionTemplates = [
  '高品質な素材を使用し、快適さとスタイルを両立させた{category}です。',
  '日常使いからビジネスシーンまで幅広く活躍する{category}。',
  'トレンドを取り入れながらも、長く愛用できるデザインの{category}です。',
  '職人の技術が光る、こだわりの{category}。',
  'シンプルながらも洗練されたデザインが魅力の{category}です。',
  '機能性とファッション性を兼ね備えた{category}。',
  '素材にこだわり、着心地を追求した{category}です。',
  'どんなスタイルにも合わせやすい、万能な{category}。'
];

// 商品ID生成
let productIdCounter = 1;

// ランダム要素選択
function randomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// ランダム価格調整（±20%）
function randomPrice(basePrice: number): number {
  const variation = 0.8 + Math.random() * 0.4;
  return Math.round(basePrice * variation);
}

// ランダム在庫数
function randomStock(): number {
  return Math.floor(Math.random() * 101); // 0-100
}

// カラー選択
function selectColors(hasColors: boolean, category: string): string[] | undefined {
  if (!hasColors) return undefined;
  
  const colorSet = category.includes('デニム') ? colorOptions.denim :
                   category.includes('レザー') ? colorOptions.leather :
                   Math.random() > 0.5 ? [...colorOptions.basic, ...randomElement([colorOptions.colorful, colorOptions.neutral]).slice(0, 2)] :
                   colorOptions.basic;
  
  return colorSet.slice(0, 3 + Math.floor(Math.random() * 3));
}

// サイズ選択
function selectSizes(hasSizes: boolean, category: string): string[] | undefined {
  if (!hasSizes) return undefined;
  
  if (category === 'シューズ') return sizeOptions.shoes;
  if (category.includes('リング')) return sizeOptions.rings;
  if (category.includes('ベルト')) return sizeOptions.belts;
  if (category === 'アクセサリー' && hasSizes) return sizeOptions.accessories;
  
  return sizeOptions.clothing;
}

// 商品生成関数
export function generateProducts(): Product[] {
  const products: Product[] = [];
  
  Object.entries(categoryTemplates).forEach(([category, template]) => {
    template.items.forEach((item) => {
      // 各アイテムを2-3個のバリエーションで生成
      const variations = 2 + Math.floor(Math.random() * 2);
      
      for (let v = 0; v < variations; v++) {
        const id = productIdCounter.toString();
        productIdCounter++;
        
        const product: Product = {
          id,
          name: v === 0 ? item.name : `${item.name} ${v === 1 ? 'プレミアム' : 'リミテッド'}`,
          price: randomPrice(item.basePrice * (1 + v * 0.3)), // バリエーションごとに価格上昇
          description: randomElement(descriptionTemplates).replace('{category}', item.name),
          images: [
            randomElement(template.images),
            ...template.images.filter(() => Math.random() > 0.5).slice(0, 2)
          ],
          category,
          stock: randomStock(),
          sizes: selectSizes(item.hasSizes, category),
          colors: selectColors(item.hasColors, item.name)
        };
        
        products.push(product);
      }
    });
  });
  
  return products;
}