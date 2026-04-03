import { useState } from "react";
import { Settings, Package, MessageSquare, Home, Moon, Sun, Globe } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import AdminProducts from "./AdminProducts";
import AdminMessages from "./AdminMessages";

const AdminDashboard = () => {
  const { settings, updateSettings } = useAppContext();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      {/* Sidebar */}
      <aside className="fixed top-0 right-0 h-full w-64 glass border-l border-glass-border/20 p-6 z-50">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
            <Settings className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">لوحة التحكم</p>
            <p className="text-xs text-muted-foreground">Spark Swarder</p>
          </div>
        </div>

        <nav className="space-y-2">
          {[
            { id: "overview", icon: Home, label: "نظرة عامة" },
            { id: "products", icon: Package, label: "المنتجات" },
            { id: "messages", icon: MessageSquare, label: "الرسائل" },
            { id: "settings", icon: Settings, label: "الإعدادات" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="mr-64 p-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="glass p-1">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="products">المنتجات</TabsTrigger>
            <TabsTrigger value="messages">الرسائل</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardDescription>إجمالي المنتجات</CardDescription>
                  <CardTitle className="text-3xl gradient-text">8</CardTitle>
                </CardHeader>
              </Card>
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardDescription>الرسائل الواردة</CardDescription>
                  <CardTitle className="text-3xl gradient-text">12</CardTitle>
                </CardHeader>
              </Card>
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardDescription>الطلبات الجديدة</CardDescription>
                  <CardTitle className="text-3xl gradient-text">5</CardTitle>
                </CardHeader>
              </Card>
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardDescription>الزوار اليوم</CardDescription>
                  <CardTitle className="text-3xl gradient-text">234</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products">
            <AdminProducts />
          </TabsContent>

          <TabsContent value="messages">
            <AdminMessages />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>إعدادات الموقع</CardTitle>
                <CardDescription>تخصيص مظهر ومعلومات الموقع</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">اسم الموقع / الشركة</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => updateSettings({ siteName: e.target.value })}
                      className="bg-secondary/50 border-glass-border/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="siteTagline">الشعار اللفظي</Label>
                    <Input
                      id="siteTagline"
                      value={settings.siteTagline}
                      onChange={(e) => updateSettings({ siteTagline: e.target.value })}
                      className="bg-secondary/50 border-glass-border/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">رقم واتساب للتواصل</Label>
                  <Input
                    id="whatsapp"
                    value={settings.whatsappNumber}
                    onChange={(e) => updateSettings({ whatsappNumber: e.target.value })}
                    className="bg-secondary/50 border-glass-border/30"
                    dir="ltr"
                    placeholder="+90 500 123 45 67"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="primaryColor">لون الأساسي</Label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        id="primaryColor"
                        value={settings.primaryColor}
                        onChange={(e) => updateSettings({ primaryColor: e.target.value })}
                        className="w-12 h-10 rounded-lg cursor-pointer bg-transparent border border-glass-border/30"
                      />
                      <Input
                        value={settings.primaryColor}
                        onChange={(e) => updateSettings({ primaryColor: e.target.value })}
                        className="bg-secondary/50 border-glass-border/30 flex-1"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondaryColor">لون الثانوي</Label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        id="secondaryColor"
                        value={settings.secondaryColor}
                        onChange={(e) => updateSettings({ secondaryColor: e.target.value })}
                        className="w-12 h-10 rounded-lg cursor-pointer bg-transparent border border-glass-border/30"
                      />
                      <Input
                        value={settings.secondaryColor}
                        onChange={(e) => updateSettings({ secondaryColor: e.target.value })}
                        className="bg-secondary/50 border-glass-border/30 flex-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between p-4 glass rounded-lg">
                    <div className="flex items-center gap-3">
                      {settings.theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                      <div>
                        <p className="text-sm font-medium">الوضع الداكن</p>
                        <p className="text-xs text-muted-foreground">تبديل بين الوضع الفاتح والداكن</p>
                      </div>
                    </div>
                    <Switch
                      checked={settings.theme === "dark"}
                      onCheckedChange={(checked) => updateSettings({ theme: checked ? "dark" : "light" })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 glass rounded-lg">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5" />
                      <div>
                        <p className="text-sm font-medium">اللغة</p>
                        <p className="text-xs text-muted-foreground">العربية أو التركية</p>
                      </div>
                    </div>
                    <Switch
                      checked={settings.language === "tr"}
                      onCheckedChange={(checked) => updateSettings({ language: checked ? "tr" : "ar" })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
