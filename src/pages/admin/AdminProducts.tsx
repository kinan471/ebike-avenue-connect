import { useState } from "react";
import { Plus, Edit, Trash2, Search, TrendingUp } from "lucide-react";
import { useAppContext, Product } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AkakcePriceFetcher from "@/components/admin/AkakcePriceFetcher";

const AdminProducts = () => {
  const { products, deleteProduct, addProduct, updateProduct } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(
    (p) => p.name.includes(searchQuery) || p.brand.includes(searchQuery)
  );

  const emptyProduct: Product = {
    id: "",
    name: "",
    price: "",
    priceNum: 0,
    image: "",
    category: "ebike",
    categoryLabel: "دراجات كهربائية",
    rating: 5,
    brand: "",
    specs: {
      battery: "",
      range: "",
      speed: "",
      weight: "",
      motor: "",
      chargeTime: "",
    },
    description: "",
    images: [],
  };

  const [formData, setFormData] = useState<Product>(emptyProduct);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(formData);
      setEditingProduct(null);
    } else {
      formData.id = Date.now().toString();
      addProduct(formData);
    }
    setIsAddOpen(false);
    setFormData(emptyProduct);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData(product);
    setIsAddOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
      deleteProduct(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative w-72">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="بحث عن منتج..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pe-10 bg-secondary/50 border-glass-border/30"
          />
        </div>
        <Dialog open={isAddOpen} onOpenChange={(open) => {
          setIsAddOpen(open);
          if (!open) {
            setEditingProduct(null);
            setFormData(emptyProduct);
          }
        }}>
          <DialogTrigger asChild>
            <Button variant="hero">
              <Plus className="w-4 h-4" />
              إضافة منتج
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProduct ? "تعديل المنتج" : "إضافة منتج جديد"}</DialogTitle>
              <DialogDescription>
                {editingProduct ? "قم بتعديل معلومات المنتج" : "أدخل معلومات المنتج الجديد"}
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2 mb-4 p-3 bg-primary/10 rounded-lg">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">يمكنك جلب السعر تلقائياً من Akakce</span>
              <AkakcePriceFetcher />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">اسم المنتج</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="brand">العلامة التجارية</Label>
                  <Input
                    id="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">السعر (₺)</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priceNum">السعر (رقم)</Label>
                  <Input
                    id="priceNum"
                    type="number"
                    value={formData.priceNum}
                    onChange={(e) => setFormData({ ...formData, priceNum: parseInt(e.target.value) || 0 })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">الفئة</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value: typeof formData.category) => {
                      const labels: Record<string, string> = {
                        ebike: "دراجات كهربائية",
                        scooter: "سكوترات",
                        mountain: "دراجات جبلية",
                        accessory: "إكسسوارات",
                      };
                      setFormData({ ...formData, category: value, categoryLabel: labels[value] });
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ebike">دراجات كهربائية</SelectItem>
                      <SelectItem value="scooter">سكوترات</SelectItem>
                      <SelectItem value="mountain">دراجات جبلية</SelectItem>
                      <SelectItem value="accessory">إكسسوارات</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating">التقييم</Label>
                  <Select
                    value={formData.rating.toString()}
                    onValueChange={(value) => setFormData({ ...formData, rating: parseInt(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[5, 4, 3, 2, 1].map((r) => (
                        <SelectItem key={r} value={r.toString()}>{r} نجوم</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">رابط الصورة الرئيسية</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">الوصف</Label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 rounded-md bg-secondary/50 border border-glass-border/30"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(formData.specs).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <Label htmlFor={`spec-${key}`}>{key}</Label>
                    <Input
                      id={`spec-${key}`}
                      value={value}
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        specs: { ...formData.specs, [key]: e.target.value } 
                      })}
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-4">
                <Button type="submit" variant="hero" className="flex-1">
                  {editingProduct ? "حفظ التعديلات" : "إضافة المنتج"}
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  onClick={() => setIsAddOpen(false)}
                >
                  إلغاء
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="glass-card rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>الصورة</TableHead>
              <TableHead>الاسم</TableHead>
              <TableHead>الفئة</TableHead>
              <TableHead>السعر</TableHead>
              <TableHead>التقييم</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead className="text-left">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg" />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.categoryLabel}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.rating} ⭐</TableCell>
                <TableCell>
                  {product.isNew && <Badge variant="default">جديد</Badge>}
                </TableCell>
                <TableCell className="text-left">
                  <div className="flex gap-2 justify-end">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminProducts;
