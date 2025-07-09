import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/components/CartContext";
import { useUser } from "@/components/UserContext";
import { useToast } from "@/components/ui/use-toast";
import { CartDrawerContext } from "@/components/CartContext";

interface Candle {
  id: number;
  name: string;
  price: number;
  special?: string;
  image_url: string;
  description?: string;
  scent?: string;
  benefit?: string;
  reason?: string;
  emoji?: string;
  category?: string;
}

// Dummy data for features, ingredients, gallery, etc.
const DUMMY_GALLERY = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
];
const DUMMY_FEATURES = [
  { icon: "⏳", title: "Long-Lasting", desc: "Up to 60 hours burn time." },
  { icon: "🌱", title: "Sustainable", desc: "Natural, biodegradable plant wax." },
  { icon: "💧", title: "Concentrated Fragrance", desc: "Hand-poured, intense scent." },
  { icon: "🕯️", title: "Clean Burn", desc: "Cotton wick, less soot." }
];
const DUMMY_INGREDIENTS = [
  { name: "Chamomile", img: "/chamomile.png", desc: "Soothes and relaxes, gentle floral aroma." },
  { name: "Lavender", img: "/lavender.png", desc: "Relieves stress, classic calming scent." },
  { name: "Sage", img: "/sage.png", desc: "Herbal, earthy, and slightly peppery aroma." }
];
const DUMMY_FRAGRANCE_NOTES = "Top: Chamomile, Middle: Lavender, Base: Sage.";
const DUMMY_PRODUCT_DETAILS = "Hand-poured in small batches. Vegan. No parabens or phthalates.";
const DUMMY_REVIEWS = [
  { user: "Linh N.", rating: 5, comment: "Hương thơm rất dễ chịu, thư giãn cực kỳ!" },
  { user: "Minh T.", rating: 4, comment: "Đốt lâu, không bị đau đầu, sẽ mua lại." }
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [candle, setCandle] = useState<Candle | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isLoggedIn } = useUser();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const { openCart } = useContext(CartDrawerContext);

  useEffect(() => {
    fetch("/data/candles.json")
      .then((res) => res.json())
      .then((data: Candle[]) => {
        const found = data.find((c) => c.id === Number(id));
        setCandle(found || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-20">Đang tải...</div>;
  if (!candle) return <div className="text-center py-20">Không tìm thấy sản phẩm.</div>;

  // Gallery: nếu có nhiều ảnh thì dùng, không thì tạo mảng với ảnh chính + dummy
  const gallery = [candle.image_url, ...(DUMMY_GALLERY.filter((url) => url !== candle.image_url).slice(0,2))];

  return (
    <div className="min-h-screen bg-[#F8F6F3] flex flex-col items-center py-4 px-4">
      <div className="w-full max-w-4xl mx-auto pt-2">
        <button
          className="mb-4 ml-2 px-4 py-2 bg-muted text-foreground rounded hover:bg-primary hover:text-primary-foreground transition flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <span className="text-lg">←</span> Quay lại
        </button>
        <hr className="border-t border-gray-200 mb-2" />
      </div>
      <div className="bg-card rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 max-w-4xl w-full">
        {/* Gallery */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src={gallery[0]}
            alt={candle.name}
            className="w-full max-w-xs h-72 object-contain rounded-lg shadow mb-4 transition-transform duration-200 hover:scale-105 cursor-zoom-in"
          />
          <div className="flex gap-2 justify-center">
            {gallery.map((img, idx) => (
              <img key={idx} src={img} alt="gallery" className="w-16 h-16 object-cover rounded border" />
            ))}
          </div>
        </div>
        {/* Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{candle.name}</h1>
          {candle.special && (
            <span className="inline-block bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold mb-2">
              {candle.special}
            </span>
          )}
          <div className="text-xl font-semibold mb-2">${candle.price}</div>
          <div className="text-base text-muted-foreground mb-4">
            {candle.description || "Sản phẩm nến thơm cao cấp, mang lại không gian thư giãn và sang trọng."}
          </div>
          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-6">
            {DUMMY_FEATURES.map((f, idx) => (
              <div key={idx} className="flex flex-col items-center w-28">
                <span className="text-2xl mb-1">{f.icon}</span>
                <span className="font-semibold text-sm mb-0.5">{f.title}</span>
                <span className="text-xs text-muted-foreground text-center">{f.desc}</span>
              </div>
            ))}
          </div>
          {/* Accordion: Product Details, Fragrance Notes */}
          <details className="mb-2">
            <summary className="font-semibold cursor-pointer">Product Details</summary>
            <div className="text-sm text-muted-foreground mt-1">{DUMMY_PRODUCT_DETAILS}</div>
          </details>
          <details>
            <summary className="font-semibold cursor-pointer">Fragrance Notes</summary>
            <div className="text-sm text-muted-foreground mt-1">{DUMMY_FRAGRANCE_NOTES}</div>
          </details>
          <div className="flex items-center gap-3 mb-4">
            <label htmlFor="quantity" className="text-base font-medium">Số lượng:</label>
            <input id="quantity" type="number" min={1} value={quantity} onChange={e => setQuantity(Math.max(1, Number(e.target.value)))} className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D08B2A] text-base" />
            <button
              className="flex items-center gap-2 px-5 py-2 bg-[#D08B2A] hover:bg-[#b97a22] text-white font-semibold rounded-md shadow-lg transition"
              onClick={() => {
                const ok = addToCart({
                  product_id: candle.id,
                  name: candle.name,
                  price: candle.price,
                  quantity,
                  image_url: candle.image_url
                });
                if (ok) {
                  toast({
                    title: "Đã thêm vào giỏ hàng !",
                    duration: 800,
                    className: "max-w-xs mx-auto"
                  });
                }
              }}
            >
              {/* <CartIcon className="w-5 h-5" /> */}
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
      {/* Ingredients */}
      <div className="max-w-4xl w-full mt-12">
        <h2 className="text-xl font-bold mb-4">Ingredients Within the Fragrance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DUMMY_INGREDIENTS.map((ing, idx) => (
            <div key={idx} className="flex flex-col items-center bg-card rounded-lg p-4 shadow">
              <img src={ing.img} alt={ing.name} className="w-20 h-20 object-cover rounded-full mb-2" />
              <div className="font-semibold mb-1">{ing.name}</div>
              <div className="text-xs text-muted-foreground text-center">{ing.desc}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Reviews */}
      <div className="max-w-4xl w-full mt-12">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        <div className="space-y-4">
          {DUMMY_REVIEWS.map((r, idx) => (
            <div key={idx} className="bg-card rounded-lg p-4 shadow flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-semibold">{r.user}</span>
              <span className="text-yellow-500">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
              <span className="text-sm text-muted-foreground">{r.comment}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 