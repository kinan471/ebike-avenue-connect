import { useState } from "react";
import { Mail, Phone, MessageSquare, Trash2, Check, Search } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const AdminMessages = () => {
  const { messages, markMessageAsRead } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);

  const filteredMessages = messages.filter(
    (m) =>
      m.name.includes(searchQuery) ||
      m.subject.includes(searchQuery) ||
      m.message.includes(searchQuery)
  );

  const selectedMsg = messages.find((m) => m.id === selectedMessage);

  const handleMarkAsRead = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    markMessageAsRead(id);
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("هل أنت متأكد من حذف هذه الرسالة؟")) {
      // In a real app, you'd have a deleteMessage function
      setSelectedMessage(null);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
      {/* Messages list */}
      <div className="lg:col-span-1 glass-card overflow-hidden flex flex-col">
        <div className="p-4 border-b border-glass-border/20">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="بحث في الرسائل..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pe-10 bg-secondary/50 border-glass-border/30"
            />
          </div>
        </div>
        <ScrollArea className="flex-1">
          <div className="divide-y divide-glass-border/10">
            {filteredMessages.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                لا توجد رسائل
              </div>
            ) : (
              filteredMessages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => setSelectedMessage(msg.id)}
                  className={`w-full p-4 text-right hover:bg-secondary/30 transition-colors ${
                    selectedMessage === msg.id ? "bg-secondary/50" : ""
                  } ${!msg.read ? "bg-primary/5" : ""}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {!msg.read && <div className="w-2 h-2 rounded-full bg-primary" />}
                      <span className={`font-medium ${!msg.read ? "text-foreground" : "text-muted-foreground"}`}>
                        {msg.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(msg.date).toLocaleDateString("ar-TR")}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1 mb-2">{msg.subject}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {msg.phone}
                    </Badge>
                    {!msg.read && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={(e) => handleMarkAsRead(msg.id, e)}
                      >
                        <Check className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Message detail */}
      <div className="lg:col-span-2 glass-card overflow-hidden flex flex-col">
        {selectedMsg ? (
          <>
            <div className="p-6 border-b border-glass-border/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{selectedMsg.subject}</h3>
                  <p className="text-sm text-muted-foreground">من: {selectedMsg.name}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${selectedMsg.phone}?text=${encodeURIComponent(selectedMsg.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" size="sm">
                      <MessageSquare className="w-4 h-4" />
                      رد عبر واتساب
                    </Button>
                  </a>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => handleMarkAsRead(selectedMsg.id, e)}
                  >
                    <Check className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => handleDelete(selectedMsg.id, e)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {selectedMsg.email}
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {selectedMsg.phone}
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {new Date(selectedMsg.date).toLocaleString("ar-TR")}
                </div>
              </div>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-6">
                <p className="text-foreground leading-relaxed whitespace-pre-wrap">{selectedMsg.message}</p>
              </div>
            </ScrollArea>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <Mail className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p>اختر رسالة لعرضها</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;
