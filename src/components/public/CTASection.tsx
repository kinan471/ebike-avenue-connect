import { Button } from "@/components/ui/button";
import { MessageCircle, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-glow-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card p-10 md:p-16 text-center max-w-3xl mx-auto glow-border">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-primary font-medium mb-6">
            <Zap className="w-4 h-4" />
            عروض خاصة
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            جاهز للانطلاق
            <br />
            <span className="gradient-text glow-text">نحو المستقبل؟</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            تواصل معنا الآن عبر واتساب للحصول على أفضل العروض والاستشارات المجانية حول التنقل الكهربائي
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-8">
              <MessageCircle className="w-5 h-5" />
              تواصل عبر واتساب
            </Button>
            <Button variant="glass" size="lg" className="text-base px-8">
              تصفّح المنتجات
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
