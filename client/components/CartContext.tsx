import React, { createContext, useContext, useState, ReactNode } from "react";
import { useUser } from "./UserContext";

export interface CartItem {
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => boolean; // return true nếu thêm thành công, false nếu chưa login
  removeFromCart: (product_id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Context để mở CartDrawer từ bất kỳ đâu
export const CartDrawerContext = createContext({ openCart: () => {} });

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { isLoggedIn } = useUser();

  const addToCart = (item: CartItem) => {
    // Bỏ kiểm tra đăng nhập để demo tự do
    setCart((prev) => {
      const exists = prev.find((c) => c.product_id === item.product_id);
      if (exists) {
        return prev.map((c) =>
          c.product_id === item.product_id ? { ...c, quantity: c.quantity + item.quantity } : c
        );
      }
      return [...prev, item];
    });
    return true;
  };

  const removeFromCart = (product_id: number) => {
    setCart((prev) => prev.filter((c) => c.product_id !== product_id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}; 