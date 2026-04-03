import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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

interface SiteSettings {
  siteName: string;
  siteTagline: string;
  whatsappNumber: string;
  primaryColor: string;
  secondaryColor: string;
  theme: "light" | "dark";
  language: "ar" | "tr";
}

interface Messages {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

interface AppContextType {
  products: Product[];
  setProducts: (products: Product[]) => void;
  settings: SiteSettings;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  messages: Messages[];
  addMessage: (message: Omit<Messages, "id" | "date" | "read">) => void;
  markMessageAsRead: (id: string) => void;
  deleteProduct: (id: string) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
}

const defaultSettings: SiteSettings = {
  siteName: "Spark Swarder",
  siteTagline: "التنقل الكهربائي",
  whatsappNumber: "905001234567",
  primaryColor: "#06b6d4",
  secondaryColor: "#8b5cf6",
  theme: "dark",
  language: "ar",
};

const defaultProducts: Product[] = [
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
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("spark_products");
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem("spark_settings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const [messages, setMessages] = useState<Messages[]>(() => {
    const saved = localStorage.getItem("spark_messages");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("spark_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("spark_settings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem("spark_messages", JSON.stringify(messages));
  }, [messages]);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const addMessage = (message: Omit<Messages, "id" | "date" | "read">) => {
    const newMessage: Messages = {
      ...message,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      read: false,
    };
    setMessages((prev) => [newMessage, ...prev]);
  };

  const markMessageAsRead = (id: string) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true } : m)));
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const updateProduct = (product: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)));
  };

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        settings,
        updateSettings,
        messages,
        addMessage,
        markMessageAsRead,
        deleteProduct,
        addProduct,
        updateProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
