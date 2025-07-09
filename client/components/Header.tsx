import { useState, useEffect } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useUser } from "@/components/UserContext";
import { useCart } from "@/components/CartContext";
import CartDrawer from "@/components/CartDrawer";
import { CartDrawerContext } from "@/components/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { user, isLoggedIn, login, logout } = useUser();
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  // Scroll đến section theo id
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handler = () => setCartOpen(true);
    window.addEventListener('open-cart', handler);
    return () => window.removeEventListener('open-cart', handler);
  }, []);

  return (
    <CartDrawerContext.Provider value={{ openCart: () => setCartOpen(true) }}>
    <>
      {/* Promotional Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium relative overflow-hidden">
        <div className="animate-pulse">
          Miễn Phí Giao Hàng Toàn Quốc - Đơn Hàng Từ 500K
        </div>
      </div>
      {/* Main Navigation */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('nen-thom')} className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none cursor-pointer">Nến Thơm</button>
              <button onClick={() => scrollToSection('phu-kien')} className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none cursor-pointer">Phụ Kiện</button>
              <button onClick={() => scrollToSection('bo-qua-tang')} className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none cursor-pointer">Bộ Quà Tặng</button>
              <button onClick={() => scrollToSection('huong-dan')} className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none cursor-pointer">Hướng Dẫn</button>
            </nav>
            {/* Logo - Center */}
            <div className="flex-shrink-0 flex items-center justify-center min-w-[160px] gap-2">
              <img
                src="/logo-saas.png"
                alt="Logo SaaS"
                className="w-12 h-12 object-contain"
              />
              <h1
                className="text-3xl font-extrabold tracking-wide"
                style={{
                  color: '#d97706',
                  textShadow: '0 1px 4px #fff',
                  margin: 0,
                  padding: 0
                }}
              >
                SaaS
              </h1>
            </div>
            {/* Right Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('ve-chung-toi')} className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none cursor-pointer">Về Chúng Tôi</button>
              <button onClick={() => scrollToSection('lien-he')} className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none cursor-pointer">Liên Hệ</button>
              <button className="text-foreground hover:text-primary transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-foreground hover:text-primary transition-colors flex items-center relative" onClick={() => setCartOpen(true)}>
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D08B2A] text-white rounded-full px-2 py-0.5 text-xs font-bold shadow">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('nen-thom')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium w-full text-left bg-transparent border-none cursor-pointer">Nến Thơm</button>
              <button onClick={() => scrollToSection('phu-kien')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium w-full text-left bg-transparent border-none cursor-pointer">Phụ Kiện</button>
              <button onClick={() => scrollToSection('bo-qua-tang')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium w-full text-left bg-transparent border-none cursor-pointer">Bộ Quà Tặng</button>
              <button onClick={() => scrollToSection('huong-dan')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium w-full text-left bg-transparent border-none cursor-pointer">Hướng Dẫn</button>
              <button onClick={() => scrollToSection('ve-chung-toi')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium w-full text-left bg-transparent border-none cursor-pointer">Về Chúng Tôi</button>
              <button onClick={() => scrollToSection('lien-he')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium w-full text-left bg-transparent border-none cursor-pointer">Liên Hệ</button>
              <div className="flex items-center space-x-4 py-2">
                <button className="text-foreground hover:text-primary transition-colors">
                  <Search className="h-5 w-5" />
                </button>
                <button className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="text-sm">(0)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </>
    </CartDrawerContext.Provider>
  );
}
