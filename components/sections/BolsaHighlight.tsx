"use client";

import Image from "next/image";
import { MessageCircle, Star, Sparkles, MoveRight } from "lucide-react";

export default function BolsaHighlight() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden group">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-uhf-light/50 -skew-x-12 transform -translate-x-24" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-100/30 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">

          {/* Image Side - Elegance Layout */}
          <div className="relative w-full lg:w-1/2 aspect-[4/5]">
            {/* Elegant Floating Frame */}
            <div className="absolute inset-4 border border-uhf-black/5 transform -rotate-2 translate-x-2 translate-y-2" />
            <div className="relative h-full w-full overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-[1.02]">
              <Image
                src="/images/bolsa-img.webp"
                alt="Luxury Inspired Bag"
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
            </div>

            {/* Price/Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-uhf-black text-white p-8 shadow-2xl hidden md:block animate-in slide-in-from-left duration-1000">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-1 opacity-50">Preço sob consulta</p>
              <p className="text-2xl font-light tracking-tighter">Edição Limitada</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-uhf-black/20" />
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-uhf-black/40">Alta Chapelaria & Couro</span>
            </div>

            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8 text-uhf-black">
              Luxury <br />
              <span className="italic font-light text-gray-400">Classics</span>
            </h2>

            <p className="text-lg text-gray-600 mb-12 max-w-lg leading-relaxed italic">
              "A moda passa, o estilo permanece." <br />
              <span className="not-italic text-sm text-gray-400 block mt-4">
                Inspirada no design atemporal das grandes maisons francesas. Acabamento matelassê em couro legítimo e correntes banhadas.
              </span>
            </p>

            {/* Details Grid */}
            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group/item">
                <div className="w-12 h-12 flex items-center justify-center border border-uhf-black/10 rounded-full group-hover/item:bg-uhf-black group-hover/item:text-white transition-all">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Qualidade Premium</h4>
                  <p className="text-[10px] text-gray-400 uppercase">Couro selecionado com textura matelassê.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group/item">
                <div className="w-12 h-12 flex items-center justify-center border border-uhf-black/10 rounded-full group-hover/item:bg-uhf-black group-hover/item:text-white transition-all">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Detalhes em Ouro</h4>
                  <p className="text-[10px] text-gray-400 uppercase">Ferragens com banho especial de alta durabilidade.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <a
                href="https://wa.me/5511945007634?text=Olá! Gostaria de mais informações sobre a Bolsa Luxury Inspired do site."
                target="_blank"
                className="group relative w-full sm:w-auto bg-uhf-black text-white px-12 py-6 font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 transition-all hover:bg-gray-800 active:scale-95 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Reserva
                <MoveRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </a>

              <div className="flex flex-col items-start gap-1">
                <div className="flex gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Best Seller / Limited Stock</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
