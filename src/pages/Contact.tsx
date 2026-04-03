import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `مرحباً، رسالة جديدة من الموقع:\nالاسم: ${formData.name}\nالبريد: ${formData.email}\nالهاتف: ${formData.phone}\nالموضوع: ${formData.subject}\nالرسالة: ${formData.message}`
    );
    window.open(`https://wa.me/905001234567?text=${msg}`, "_blank");
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "+90 500 123 45 67",
      href: "https://wa.me/905001234567",
      description: "تواصل مباشر على مدار الساعة",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@sparkswarder.com",
      href: "mailto:info@sparkswarder.com",
      description: "نرد خلال 24 ساعة",
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+90 500 123 45 67",
      href: "tel:+905001234567",
      description: "من 9 صباحاً حتى 8 مساءً",
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "إسطنبول، تركيا",
      href: "#",
      description: "زيارة بموعد مسبق",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-cairo">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h1 className="text-3xl md:text-5xl font-black mb-4">
              تواصل <span className="gradient-text">معنا</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              نسعد بتواصلك معنا لأي استفسار أو طلب. فريقنا جاهز لمساعدتك
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((info, i) => (
              <a
                key={info.title}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card p-6 text-center hover:glow-border transition-all duration-500 group"
                style={{ animation: `slide-up 0.5s ease-out ${i * 0.1}s both` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                <p className="text-sm text-primary font-medium mb-1" dir="ltr">{info.value}</p>
                <p className="text-xs text-muted-foreground">{info.description}</p>
              </a>
            ))}
          </div>

          {/* Form + Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="lg:col-span-2 glass-card p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">
                أرسل لنا <span className="gradient-text">رسالة</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    placeholder="الاسم الكامل"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-11 px-4 bg-secondary/50 border border-glass-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 px-4 bg-secondary/50 border border-glass-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    dir="ltr"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-11 px-4 bg-secondary/50 border border-glass-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    dir="ltr"
                  />
                  <input
                    type="text"
                    required
                    placeholder="الموضوع"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="h-11 px-4 bg-secondary/50 border border-glass-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <textarea
                  required
                  placeholder="رسالتك..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-glass-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
                <Button type="submit" variant="hero" size="lg" className="w-full text-base">
                  <Send className="w-5 h-5" />
                  إرسال عبر واتساب
                </Button>
              </form>
            </div>

            {/* Working hours */}
            <div className="glass-card p-8 h-fit">
              <h3 className="font-bold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                ساعات العمل
              </h3>
              <div className="space-y-4">
                {[
                  { day: "الإثنين - الجمعة", hours: "9:00 ص - 8:00 م" },
                  { day: "السبت", hours: "10:00 ص - 6:00 م" },
                  { day: "الأحد", hours: "مغلق" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center py-2 border-b border-glass-border/15 last:border-0">
                    <span className="text-sm text-foreground">{item.day}</span>
                    <span className={`text-sm font-medium ${item.hours === "مغلق" ? "text-destructive" : "text-primary"}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-glass-border/15">
                <a
                  href="https://wa.me/905001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="glass" className="w-full">
                    <MessageCircle className="w-4 h-4" />
                    دردشة واتساب
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
