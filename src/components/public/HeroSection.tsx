import { Button } from "@/components/ui/button";
import { Zap, ChevronLeft } from "lucide-react";
import heroBg from "@/assets/hero-bikes.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="دراجات كهربائية حديثة"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-glow-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8" style={{ animation: 'slide-up 0.8s ease-out' }}>
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-primary font-medium">
            <Zap className="w-4 h-4" />
            مستقبل التنقل الكهربائي
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-foreground">انطلق نحو</span>
            <br />
            <span className="gradient-text glow-text">المستقبل الكهربائي</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            اكتشف أحدث الدراجات والسكوترات الكهربائية مع خدمة صيانة متخصصة للبطاريات. تسوّق بثقة واحصل على أفضل الأسعار.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-base px-8">
              <Zap className="w-5 h-5" />
              تسوّق الآن
            </Button>
            <Button variant="glass" size="lg" className="text-base px-8 group">
              عيادة البطاريات
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto pt-8">
            {[
              { value: "500+", label: "منتج متوفر" },
              { value: "24/7", label: "دعم فني" },
              { value: "98%", label: "رضا العملاء" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
