export interface Product {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  image: string;
  category: "ebike" | "scooter" | "mountain" | "accessory";
  categoryLabel: string;
  rating: number;
  isNew?: boolean;
  brand: string;
  specs: {
    battery: string;
    range: string;
    speed: string;
    weight: string;
    motor: string;
    chargeTime: string;
  };
  description: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: "city-pro-1",
    name: "دراجة كهربائية سيتي برو",
    price: "₺15,990",
    priceNum: 15990,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=450&fit=crop",
    category: "ebike",
    categoryLabel: "دراجات كهربائية",
    rating: 5,
    isNew: true,
    brand: "CityRide",
    specs: {
      battery: "48V 13Ah ليثيوم",
      range: "60-80 كم",
      speed: "25 كم/س",
      weight: "22 كجم",
      motor: "350W بدون فرش",
      chargeTime: "4-5 ساعات",
    },
    description: "دراجة كهربائية مثالية للتنقل اليومي في المدينة. تصميم أنيق وخفيف مع بطارية ليثيوم عالية الأداء توفر مدى يصل إلى 80 كم بشحنة واحدة.",
    images: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "xiaomi-pro-2",
    name: "سكوتر شاومي برو 2",
    price: "₺8,490",
    priceNum: 8490,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop",
    category: "scooter",
    categoryLabel: "سكوترات",
    rating: 4,
    isNew: true,
    brand: "Xiaomi",
    specs: {
      battery: "36V 12.8Ah",
      range: "45 كم",
      speed: "25 كم/س",
      weight: "14.2 كجم",
      motor: "300W",
      chargeTime: "8.5 ساعات",
    },
    description: "سكوتر شاومي الأكثر مبيعاً عالمياً. تصميم قابل للطي مع نظام كبح مزدوج وإضاءة LED أمامية قوية.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1604868189265-219ba935035e?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "mountain-x1",
    name: "دراجة جبلية كهربائية X1",
    price: "₺22,500",
    priceNum: 22500,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=450&fit=crop",
    category: "mountain",
    categoryLabel: "دراجات جبلية",
    rating: 5,
    brand: "TrailMax",
    specs: {
      battery: "48V 17.5Ah",
      range: "80-120 كم",
      speed: "32 كم/س",
      weight: "26 كجم",
      motor: "750W منتصف",
      chargeTime: "5-6 ساعات",
    },
    description: "دراجة جبلية كهربائية مصممة للتضاريس الوعرة. موتور قوي 750 واط مع نظام تعليق أمامي وخلفي متطور.",
    images: [
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "ninebot-max",
    name: "سكوتر ناينبوت ماكس",
    price: "₺12,990",
    priceNum: 12990,
    image: "https://images.unsplash.com/photo-1604868189265-219ba935035e?w=600&h=450&fit=crop",
    category: "scooter",
    categoryLabel: "سكوترات",
    rating: 4,
    brand: "Segway-Ninebot",
    specs: {
      battery: "36V 15.3Ah",
      range: "65 كم",
      speed: "30 كم/س",
      weight: "19.1 كجم",
      motor: "350W",
      chargeTime: "6 ساعات",
    },
    description: "سكوتر ناينبوت ماكس يوفر أطول مدى في فئته مع إطارات 10 بوصة مقاومة للثقب وبنية متينة.",
    images: [
      "https://images.unsplash.com/photo-1604868189265-219ba935035e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "urban-fold",
    name: "دراجة كهربائية قابلة للطي",
    price: "₺11,200",
    priceNum: 11200,
    image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600&h=450&fit=crop",
    category: "ebike",
    categoryLabel: "دراجات كهربائية",
    rating: 4,
    brand: "UrbanFold",
    specs: {
      battery: "36V 10Ah",
      range: "40-55 كم",
      speed: "25 كم/س",
      weight: "18 كجم",
      motor: "250W",
      chargeTime: "3-4 ساعات",
    },
    description: "دراجة كهربائية قابلة للطي مثالية للتخزين في المساحات الضيقة. خفيفة الوزن وسهلة الحمل.",
    images: [
      "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "turbo-s",
    name: "سكوتر تيربو S كهربائي",
    price: "₺18,750",
    priceNum: 18750,
    image: "https://images.unsplash.com/photo-1659019063004-40be820e0379?w=600&h=450&fit=crop",
    category: "scooter",
    categoryLabel: "سكوترات",
    rating: 5,
    isNew: true,
    brand: "TurboRide",
    specs: {
      battery: "48V 20Ah",
      range: "70-90 كم",
      speed: "45 كم/س",
      weight: "23 كجم",
      motor: "800W مزدوج",
      chargeTime: "7 ساعات",
    },
    description: "سكوتر كهربائي عالي الأداء مع محرك مزدوج وبطارية كبيرة. مثالي للرحلات الطويلة والتنقل السريع.",
    images: [
      "https://images.unsplash.com/photo-1659019063004-40be820e0379?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1604868189265-219ba935035e?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "helmet-pro",
    name: "خوذة ذكية مع إضاءة LED",
    price: "₺1,290",
    priceNum: 1290,
    image: "https://images.unsplash.com/photo-1557803175-2dfee6fe7564?w=600&h=450&fit=crop",
    category: "accessory",
    categoryLabel: "إكسسوارات",
    rating: 4,
    brand: "SafeRide",
    specs: {
      battery: "USB قابلة للشحن",
      range: "20 ساعة إضاءة",
      speed: "-",
      weight: "350 جرام",
      motor: "-",
      chargeTime: "2 ساعة",
    },
    description: "خوذة ذكية مع إضاءة LED خلفية وأمامية وإشارات انعطاف لاسلكية. حماية متقدمة بتصميم عصري.",
    images: [
      "https://images.unsplash.com/photo-1557803175-2dfee6fe7564?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "lock-smart",
    name: "قفل ذكي مقاوم للسرقة",
    price: "₺890",
    priceNum: 890,
    image: "https://images.unsplash.com/photo-1582639590011-532f7b7b5c02?w=600&h=450&fit=crop",
    category: "accessory",
    categoryLabel: "إكسسوارات",
    rating: 5,
    isNew: true,
    brand: "LockTech",
    specs: {
      battery: "بطارية داخلية 6 أشهر",
      range: "-",
      speed: "-",
      weight: "1.2 كجم",
      motor: "-",
      chargeTime: "3 ساعات",
    },
    description: "قفل ذكي يعمل بالبلوتوث وبصمة الإصبع مع إنذار مدمج 110 ديسيبل. حماية قصوى لمركبتك الكهربائية.",
    images: [
      "https://images.unsplash.com/photo-1582639590011-532f7b7b5c02?w=800&h=600&fit=crop",
    ],
  },
];

export const categories = [
  { id: "all", label: "الكل" },
  { id: "ebike", label: "دراجات كهربائية" },
  { id: "scooter", label: "سكوترات" },
  { id: "mountain", label: "دراجات جبلية" },
  { id: "accessory", label: "إكسسوارات" },
];
