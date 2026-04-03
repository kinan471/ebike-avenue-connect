import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProductsSection = () => {
  const featured = products.filter((p) => p.isNew || p.rating === 5).slice(0, 4);

  return (
    <section className="py-20 bg-surface relative">
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-glow-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            أحدث <span className="gradient-text">المنتجات</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            تصفّح مجموعتنا المتميزة من الدراجات والسكوترات الكهربائية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <div style={{ animation: `slide-up 0.6s ease-out ${index * 0.1}s both` }}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.categoryLabel}
                  rating={product.rating}
                  isNew={product.isNew}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products">
            <Button variant="glass" size="lg" className="text-base group">
              عرض جميع المنتجات
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
