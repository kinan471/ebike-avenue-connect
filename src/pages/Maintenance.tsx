import { useState } from "react";
import { Battery, Wrench, CheckCircle, Clock, Shield, Zap, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Battery,
    title: "فحص البطارية",
    description: "فحص شامل لحالة البطارية وقياس السعة والجهد وكفاءة الخلايا",
    price: "₺250",
  },
  {
    icon: Wrench,
    title: "إصلاح البطارية",
    description: "إصلاح واستبدال الخلايا التالفة مع ضمان على القطع المستبدلة",
    price: "₺500 - ₺2,000",
  },
  {
    icon: Zap,
    title: "ترقية البطارية",
    description: "ترقية سعة البطارية لزيادة المدى مع الحفاظ على التوافق",
    price: "₺1,500 - ₺4,000",
  },
  {
    icon: Shield,
    title: "صيانة وقائية",
    description: "صيانة دورية شاملة للبطارية والمحرك والأنظمة الإلكترونية",
    price: "₺350",
  },
];

const steps = [
  { num: "01", title: "حجز موعد", desc: "احجز موعدك عبر الموقع أو واتساب" },
  { num: "02", title: "الفحص والتشخيص", desc: "فحص شامل وتقرير مفصل عن الحالة" },
  { num: "03", title: "عرض السعر", desc: "عرض سعر شفاف قبل البدء بالعمل" },
  { num: "04", title: "الإصلاح والتسليم", desc: "إصلاح احترافي وتسليم مع ضمان" },
];

const Maintenance = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleType: "",
    batteryType: "",
    issue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `مرحباً، أود حجز موعد صيانة:\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nنوع المركبة: ${formData.vehicleType}\nنوع البطارية: ${formData.batteryType}\nالمشكلة: ${formData.issue}`
    );
    window.open(`https://wa.me/905001234567?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background font-cairo">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-glow/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-glow-secondary/8 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-primary font-medium mb-6">
              <Battery className="w-4 h-4" />
              عيادة صيانة البطاريات
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4">
              صيانة <span className="gradient-text glow-text">احترافية</span> لبطاريتك
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              فريق متخصص في صيانة وإصلاح بطاريات الدراجات والسكوترات الكهربائية بأحدث التقنيات
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              خدمات <span className="gradient-text">الصيانة</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="glass-card p-6 hover:glow-border transition-all duration-500 group text-center"
                  style={{ animation: `slide-up 0.5s ease-out ${i * 0.1}s both` }}
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-xl font-bold gradient-text">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              كيف <span className="gradient-text">تعمل</span> العملية؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={step.num} className="text-center relative" style={{ animation: `slide-up 0.5s ease-out ${i * 0.15}s both` }}>
                  <div className="text-5xl font-black gradient-text opacity-30 mb-2">{step.num}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -left-3 w-6 h-0.5 bg-glass-border/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto glass-card p-8 md:p-10">
              <h2 className="text-2xl font-bold text-center mb-2">
                احجز موعد <span className="gradient-text">صيانة</span>
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                سنتواصل معك عبر واتساب لتأكيد الموعد
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">الاسم الكامل</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-4 bg-secondary/50 border border-glass-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-4 bg-secondary/50 border border-glass-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+90 5xx xxx xx xx"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">نوع المركبة</label>
                    <select
                      required
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      className="w-full h-11 px-4 bg-secondary/50 border border-glass-border/30 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">اختر النوع</option>
                      <option value="ebike">دراجة كهربائية</option>
                      <option value="scooter">سكوتر كهربائي</option>
                      <option value="mountain">دراجة جبلية كهربائية</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">نوع البطارية</label>
                    <input
                      type="text"
                      value={formData.batteryType}
                      onChange={(e) => setFormData({ ...formData, batteryType: e.target.value })}
                      className="w-full h-11 px-4 bg-secondary/50 border border-glass-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="مثال: 48V 13Ah ليثيوم"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">وصف المشكلة</label>
                  <textarea
                    required
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary/50 border border-glass-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="صف المشكلة التي تواجهها..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full text-base">
                  <MessageCircle className="w-5 h-5" />
                  إرسال عبر واتساب
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Maintenance;
