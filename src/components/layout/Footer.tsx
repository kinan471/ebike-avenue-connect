import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-glass-border/20 bg-surface">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-lg font-bold gradient-text">Spark Swarder</p>
                <p className="text-xs text-muted-foreground">التنقل الكهربائي</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منصتك الأولى لبيع وشراء وصيانة الدراجات الكهربائية والسكوترات مع عيادة صيانة متخصصة للبطاريات.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">روابط سريعة</h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "المنتجات", href: "/products" },
                { label: "صيانة البطاريات", href: "/maintenance" },
                { label: "تواصل معنا", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">تواصل معنا</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@sparkswarder.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@sparkswarder.com
              </a>
              <a href="tel:+905001234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +90 500 123 45 67
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                إسطنبول، تركيا
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-glass-border/20 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Spark Swarder. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
