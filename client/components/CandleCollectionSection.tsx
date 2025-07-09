import React, { useEffect, useState, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from "react-router-dom";

interface Candle {
  id: number;
  name: string;
  price: number;
  special: string;
  image_url: string;
}

export default function CandleCollectionSection({ id }: { id?: string }) {
  const [candles, setCandles] = useState<Candle[]>([]);
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/data/candles.json")
      .then((res) => res.json())
      .then((data) => setCandles(data.map((c: any) => ({
        id: c.id,
        name: c.name.replace(/^Nến Hương |^Nến /, ""),
        price: c.price,
        special: c.special,
        image_url: c.image_url
      }))));
  }, []);

  return (
    <section id={id} className="bg-[#F8F6F3] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-sans">
            Bộ Sưu Tập Nến Thơm
          </h2>
          <p className="text-xl text-muted-foreground">
            Khám phá đa dạng hương thơm cho mọi không gian
          </p>
        </div>
        <style>{`
          .custom-swiper-nav {
            background: #D08B2A;
            color: #fff;
            border-radius: 9999px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s, color 0.2s, box-shadow 0.2s;
            border: none;
            z-index: 10;
          }
          .custom-swiper-nav:hover {
            background: #b97a22;
            color: #fff;
            box-shadow: 0 4px 16px rgba(208,139,42,0.15);
          }
          .custom-swiper-nav.swiper-button-disabled {
            opacity: 0.3;
            pointer-events: none;
          }
        `}</style>
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }}
          spaceBetween={40}
          slidesPerView={4}
          centeredSlides={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
            1280: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="!pb-10"
          onSwiper={swiper => { swiperRef.current = swiper; }}
        >
          {candles.map((candle) => (
            <SwiperSlide key={candle.id}>
              <div
                className="min-w-[270px] max-w-xs bg-white rounded-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col items-center group relative mx-auto shadow hover:shadow-xl border border-gray-100 hover:-translate-y-2 hover:scale-105"
                style={{ flex: '0 0 270px' }}
                onClick={() => navigate(`/product/${candle.id}`)}
              >
                <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
                  <img
                    src={candle.image_url}
                    alt={candle.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                  />
                  {candle.special && (
                    <span className="absolute top-6 left-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold shadow">
                      {candle.special}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-center py-4">
                  <h3 className="text-lg font-sans font-bold text-foreground mb-1 text-center group-hover:text-primary transition-colors duration-200">
                    {candle.name}
                  </h3>
                  <div className="text-base text-foreground font-semibold mb-1">${candle.price}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button className="custom-swiper-prev custom-swiper-nav absolute left-4 top-1/2 -translate-y-1/2" aria-label="Trước">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="custom-swiper-next custom-swiper-nav absolute right-4 top-1/2 -translate-y-1/2" aria-label="Sau">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </Swiper>
      </div>
    </section>
  );
}
