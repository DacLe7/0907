import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { useCart } from "@/components/CartContext";
import { X, Plus, Minus } from "lucide-react";

export default function CartDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { cart, removeFromCart, addToCart } = useCart();

  // Tính tổng tiền
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Hàm tăng/giảm số lượng
  const handleChangeQty = (item, delta) => {
    if (item.quantity + delta < 1) return;
    addToCart({ ...item, quantity: delta }); // addToCart sẽ cộng dồn quantity
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-2xl flex flex-col z-[100] animate-in slide-in-from-right-32">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-bold text-center mb-2">Your Cart</DrawerTitle>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto px-4">
          {cart.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">Giỏ hàng trống</div>
          ) : (
            cart.map((item) => (
              <div key={item.product_id} className="flex items-center gap-4 py-4 border-b last:border-b-0">
                <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-muted-foreground">${item.price}</div>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => handleChangeQty(item, -1)} className="w-8 h-8 flex items-center justify-center border rounded hover:bg-muted"><Minus size={16} /></button>
                  <span className="px-2 min-w-[24px] text-center">{item.quantity}</span>
                  <button onClick={() => handleChangeQty(item, 1)} className="w-8 h-8 flex items-center justify-center border rounded hover:bg-muted"><Plus size={16} /></button>
                </div>
                <div className="w-16 text-right font-semibold">${item.price * item.quantity}</div>
                <button onClick={() => removeFromCart(item.product_id)} className="ml-2 text-muted-foreground hover:text-destructive"><X size={20} /></button>
              </div>
            ))
          )}
        </div>
        <DrawerFooter className="pb-8">
          <div className="flex flex-col items-center w-full gap-2">
            <div className="flex justify-between w-full max-w-xs text-lg font-bold">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <button className="w-full max-w-xs py-3 rounded-md bg-[#D08B2A] text-white font-semibold text-lg shadow-lg hover:bg-[#b97a22] transition">Checkout</button>
          </div>
        </DrawerFooter>
        <DrawerClose className="absolute top-4 right-4 text-muted-foreground hover:text-destructive"><X size={28} /></DrawerClose>
      </DrawerContent>
    </Drawer>
  );
} 