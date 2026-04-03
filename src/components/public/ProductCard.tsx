import { Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/AppContext";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  id?: string;
}

const ProductCard = ({ name, price, image, category, rating, isNew, id }: ProductCardProps) => {
  const { settings } = useAppContext();
  const whatsappMsg = encodeURIComponent(`مرحباً، أود الاستفسار عن: ${name} - ${price}`);

  return (
    <div className="glass-card overflow-hidden group hover:glow-border transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {isNew && (
          <div className="absolute top-3 start-3 gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            جديد
          </div>
        )}
        <div className="absolute top-3 end-3 glass text-xs px-2 py-1 rounded-full text-foreground">
          {category}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 space-y-3">
        <h3 className="font-bold text-foreground text-lg line-clamp-1 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ms-1">({rating}.0)</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl font-black gradient-text">{price}</p>
          <a
            href={`https://wa.me/${settings.whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="sm">
              <MessageCircle className="w-4 h-4" />
              اطلب الآن
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
