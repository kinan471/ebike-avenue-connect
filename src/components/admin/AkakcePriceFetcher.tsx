import { useState } from "react";
import { Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppContext } from "@/contexts/AppContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AkakcePriceFetcher = () => {
  const { addProduct } = useAppContext();
  const [akakceUrl, setAkakceUrl] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fetchPriceFromAkakce = async () => {
    setIsFetching(true);
    try {
      // Note: In a real implementation, you would need a backend proxy to fetch from Akakce
      // due to CORS restrictions. This is a simulation.
      
      // Simulated fetch - in production you'd call your backend API
      const response = await fetch(`/api/fetch-akakce?url=${encodeURIComponent(akakceUrl)}`);
      const data = await response.json();
      
      if (data.success) {
        // Add product with fetched data
        addProduct({
          id: Date.now().toString(),
          name: data.name,
          price: data.price,
          priceNum: data.priceNum,
          image: data.image,
          category: "ebike",
          categoryLabel: "دراجات كهربائية",
          rating: 5,
          brand: data.brand || "Unknown",
          specs: {
            battery: data.specs?.battery || "",
            range: data.specs?.range || "",
            speed: data.specs?.speed || "",
            weight: data.specs?.weight || "",
            motor: data.specs?.motor || "",
            chargeTime: data.specs?.chargeTime || "",
          },
          description: data.description || "",
          images: [data.image],
        });
      }
    } catch (error) {
      console.error("Error fetching from Akakce:", error);
      alert("تعذر جلب السعر من Akakce. يرجى إدخال المنتج يدوياً.");
    } finally {
      setIsFetching(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(true)}>
        <TrendingUp className="w-4 h-4" />
        جلب من Akakce
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>جلب سعر من Akakce</DialogTitle>
            <DialogDescription>
              أدخل رابط منتج من موقع Akakce.com.tr لجلب السعر والمعلومات تلقائياً
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="akakceUrl">رابط المنتج</Label>
              <Input
                id="akakceUrl"
                placeholder="https://www.akakce.com/..."
                value={akakceUrl}
                onChange={(e) => setAkakceUrl(e.target.value)}
                dir="ltr"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant="hero" 
                onClick={fetchPriceFromAkakce} 
                disabled={!akakceUrl || isFetching}
                className="flex-1"
              >
                {isFetching ? "جاري الجلب..." : "جلب البيانات"}
              </Button>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                إلغاء
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              ملاحظة: تتطلب هذه الميزة خادم خلفي (backend) للتعامل مع قيود CORS
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AkakcePriceFetcher;
