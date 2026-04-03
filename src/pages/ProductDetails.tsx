import { useParams, Link } from "react-router-dom";
import { ArrowRight, Battery, Gauge, Weight, Zap, Clock, MessageCircle, Star, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useState } from "react";

const specIcons: Record<string, typeof Battery> = {
  battery: Battery,
  range: Gauge,
  speed: Zap,
  weight: Weight,
  motor: Zap,
  chargeTime: Clock,
};

const specLabels: Record<string, string> = {
  battery: "البطارية",
  range: "المدى",
  speed: "السرعة القصوى",
  weight: "الوزن",
  motor: "المحرك",
  chargeTime: "وقت الشحن",
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background font-cairo">
        <Navbar />
        <div className="pt-32 text-center">
          <p className="text-2xl text-muted-foreground">المنتج غير موجود</p>
          <Link to="/products" className="text-primary mt-4 inline-block hover:underline">
            العودة للمنتجات
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(`مرحباً، أود الاستفسار عن: ${product.name} - ${product.price}`);

  return (
    <div className="min-h-screen bg-background font-cairo">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <ArrowRight className="w-3 h-3 rotate-180" />
            <Link to="/products" className="hover:text-primary transition-colors">المنتجات</Link>
            <ArrowRight className="w-3 h-3 rotate-180" />
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Gallery */}
            <div className="space-y-4" style={{ animation: "fade-in 0.5s ease-out" }}>
              <div className="glass-card overflow-hidden aspect-[4/3]">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === i ? "border-primary glow-border" : "border-glass-border/30 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6" style={{ animation: "slide-up 0.6s ease-out" }}>
              <div>
                {product.isNew && (
                  <span className="inline-block gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                    جديد
                  </span>
                )}
                <p className="text-sm text-muted-foreground mb-1">{product.brand} • {product.categoryLabel}</p>
                <h1 className="text-3xl md:text-4xl font-black text-foreground">{product.name}</h1>
              </div>

              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < product.rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
                  />
                ))}
                <span className="text-muted-foreground text-sm">({product.rating}.0)</span>
              </div>

              <p className="text-4xl font-black gradient-text">{product.price}</p>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Specs */}
              <div className="glass-card p-5">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  المواصفات التقنية
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => {
                    if (value === "-") return null;
                    const Icon = specIcons[key] || Zap;
                    return (
                      <div key={key} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{specLabels[key]}</p>
                          <p className="text-sm font-semibold text-foreground">{value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/905001234567?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="hero" size="lg" className="w-full text-base">
                    <MessageCircle className="w-5 h-5" />
                    اطلب عبر واتساب
                  </Button>
                </a>
                <Button variant="glass" size="lg" className="flex-1 text-base">
                  <Zap className="w-5 h-5" />
                  أضف للمفضلة
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
