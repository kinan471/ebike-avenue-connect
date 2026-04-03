import ProductCard from "./ProductCard";

const sampleProducts = [
  {
    name: "دراجة كهربائية سيتي برو",
    price: "₺15,990",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=450&fit=crop",
    category: "دراجات كهربائية",
    rating: 5,
    isNew: true,
  },
  {
    name: "سكوتر شاومي برو 2",
    price: "₺8,490",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop",
    category: "سكوترات",
    rating: 4,
    isNew: true,
  },
  {
    name: "دراجة جبلية كهربائية X1",
    price: "₺22,500",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=450&fit=crop",
    category: "دراجات جبلية",
    rating: 5,
  },
  {
    name: "سكوتر ناينبوت ماكس",
    price: "₺12,990",
    image: "https://images.unsplash.com/photo-1604868189265-219ba935035e?w=600&h=450&fit=crop",
    category: "سكوترات",
    rating: 4,
  },
];

const ProductsSection = () => {
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
          {sampleProducts.map((product, index) => (
            <div key={product.name} style={{ animation: `slide-up 0.6s ease-out ${index * 0.1}s both` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
