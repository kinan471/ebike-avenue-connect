import { Battery, Bike, Shield, Wrench, Truck, CreditCard } from "lucide-react";

const features = [
  {
    icon: Bike,
    title: "دراجات كهربائية",
    description: "أحدث موديلات الدراجات الكهربائية من أفضل العلامات التجارية العالمية",
  },
  {
    icon: Battery,
    title: "عيادة البطاريات",
    description: "خدمة صيانة وإصلاح متخصصة لبطاريات الدراجات والسكوترات الكهربائية",
  },
  {
    icon: Shield,
    title: "ضمان شامل",
    description: "ضمان شامل على جميع المنتجات مع خدمة ما بعد البيع المميزة",
  },
  {
    icon: Wrench,
    title: "صيانة دورية",
    description: "خدمات صيانة دورية احترافية للحفاظ على أداء مركبتك الكهربائية",
  },
  {
    icon: Truck,
    title: "شحن سريع",
    description: "توصيل سريع وآمن لجميع الطلبات إلى باب منزلك في تركيا",
  },
  {
    icon: CreditCard,
    title: "دفع آمن",
    description: "خيارات دفع متعددة وآمنة مع إمكانية التقسيط المريح",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-glow/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            لماذا <span className="gradient-text">Spark Swarder</span>؟
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم لك تجربة تسوّق استثنائية مع خدمات متكاملة في عالم التنقل الكهربائي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 hover:glow-border transition-all duration-500 group"
              style={{ animation: `slide-up 0.6s ease-out ${index * 0.1}s both` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
