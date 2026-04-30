"use client";

import Image from "next/image";
import { useState } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { Product } from "@/lib/data";

interface ProductCardProps {
  prod: Product;
  className?: string;
}

export default function ProductCard({ prod, className = "" }: ProductCardProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const images = [prod.img, prod.imgHover].filter(Boolean);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    e?.preventDefault();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    e?.preventDefault();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div className={`flex flex-col gap-3 group cursor-pointer ${className}`}>
        <div 
          className="relative aspect-[4/5] bg-uhf-light w-full overflow-hidden group"
          onClick={openLightbox}
        >
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`${prod.name} - ${idx + 1}`}
              fill
              className={`object-cover transition-all duration-700 ease-in-out transform ${
                idx === currentIdx ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-105 translate-x-4"
              }`}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ))}

          {/* Quick Info Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
              <Maximize2 className="w-5 h-5 text-black" />
            </div>
          </div>

          {/* Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 transition-all duration-300 ${
                    idx === currentIdx ? "w-6 bg-white" : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="flex flex-col" onClick={openLightbox}>
          <span className="font-medium text-sm text-uhf-black truncate group-hover:text-gray-500 transition-colors">{prod.name}</span>
          <span className="text-gray-500 text-sm mt-1">{prod.price}</span>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white p-2 z-[120] bg-black/20 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-all"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* "Mockup" Container */}
          <div 
            className="relative w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] md:aspect-[16/10] bg-white flex flex-col md:flex-row overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="relative flex-1 bg-uhf-gray overflow-hidden group/lightbox">
              {images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`${prod.name} Full - ${idx + 1}`}
                  fill
                  className={`object-cover md:object-contain transition-all duration-500 ease-in-out ${
                    idx === currentIdx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  quality={100}
                  priority
                />
              ))}

              {/* Navigation Arrows (All Devices - Desktop hover, Mobile tap areas) */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-0 top-0 bottom-0 w-1/4 flex items-center justify-start pl-4 group/btn z-10"
                  >
                    <div className="bg-black/20 backdrop-blur-md text-white p-4 rounded-full opacity-0 group-hover/btn:opacity-100 md:group-hover/lightbox:opacity-100 transition-all">
                      <ChevronLeft className="w-6 h-6" />
                    </div>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-0 top-0 bottom-0 w-1/4 flex items-center justify-end pr-4 group/btn z-10"
                  >
                    <div className="bg-black/20 backdrop-blur-md text-white p-4 rounded-full opacity-0 group-hover/btn:opacity-100 md:group-hover/lightbox:opacity-100 transition-all">
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </button>
                </>
              )}

              {/* Indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {images.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-1.5 transition-all duration-300 ${
                        idx === currentIdx ? "w-12 bg-white" : "w-4 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Floating WhatsApp Button (Mobile Only) */}
              <div className="absolute bottom-16 inset-x-6 md:hidden z-20">
                <a 
                  href={`https://wa.me/5511945007634?text=Olá! Gostaria de reservar o produto: ${prod.name}`}
                  target="_blank"
                  className="w-full bg-black/40 backdrop-blur-xl text-white py-5 px-6 flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] text-[10px] border border-white/10 rounded-xl shadow-2xl active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Reservar Agora
                </a>
              </div>
            </div>

            {/* Sidebar Section (Details - Desktop Only) */}
            <div className="hidden md:flex w-[350px] bg-white p-10 flex-col justify-between border-l border-gray-100">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">UHF / Editorial</span>
                  <span className="text-sm font-mono text-uhf-black opacity-30">#{prod.id.split('-').pop()}</span>
                </div>
                <h2 className="font-display text-4xl uppercase tracking-tighter mb-4 text-uhf-black leading-none">{prod.name}</h2>
                <p className="text-3xl font-light text-gray-500 mb-10">{prod.price}</p>
                
                <div className="space-y-6">
                  <div className="h-px bg-gray-100 w-12" />
                  <p className="text-xs text-gray-400 uppercase tracking-widest leading-relaxed">
                    Visualizando galeria de alta resolução. <br/>
                    Clique nas laterais ou use os indicadores para navegar.
                  </p>
                  <div className="flex gap-3">
                    {images.map((img, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentIdx(idx)}
                        className={`relative w-20 aspect-[3/4] overflow-hidden border-2 transition-all duration-300 ${
                          idx === currentIdx ? "border-uhf-black scale-105 shadow-xl" : "border-transparent opacity-40 hover:opacity-100"
                        }`}
                      >
                        <Image src={img} alt="Thumbnail" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <a 
                  href={`https://wa.me/5511945007634?text=Olá! Gostaria de reservar o produto: ${prod.name}`}
                  target="_blank"
                  className="w-full bg-uhf-black text-white py-6 px-8 flex items-center justify-center gap-4 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-gray-900 transition-all shadow-lg active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  Reservar via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

