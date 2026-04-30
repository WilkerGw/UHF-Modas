"use client";

import Image from "next/image";
import { MessageCircle, ShieldCheck, Zap, MoveRight } from "lucide-react";

export default function KennerHighlight() {
  return (
    <section className="relative w-full py-24 bg-uhf-black overflow-hidden group">
      {/* Decorative Background Elements */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-uhf-gray/5 skew-x-12 transform translate-x-32" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-uhf-light/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image Side with "Mockup" feel */}
          <div className="relative w-full lg:w-1/2 aspect-[4/5] md:aspect-square">
            <div className="absolute inset-0 border border-white/10 transform rotate-3 translate-x-4 translate-y-4 transition-transform group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 duration-700" />
            <div className="relative h-full w-full overflow-hidden bg-uhf-gray shadow-2xl">
              <Image
                src="/images/kenner-img.webp"
                alt="Kenner Exclusive Edition"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-uhf-black/60 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-8 left-8 bg-white text-uhf-black px-4 py-2 font-bold uppercase tracking-widest text-[10px] animate-pulse">
                Drop Exclusivo
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-white/20" />
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-white/50">Destaque de Temporada</span>
            </div>

            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-8">
              Kenner <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">
                Original
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-12 max-w-lg leading-relaxed">
              O ícone da cultura urbana está de volta. Design robusto, tecnologia de absorção de impacto e o grip inconfundível. Feito para quem domina a rua.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm mb-1">Durabilidade</h4>
                  <p className="text-xs text-gray-500">Solado vulcanizado de alta resistência.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm mb-1">Conforto</h4>
                  <p className="text-xs text-gray-500">Palmilha extra macia com memória.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <a
                href="https://wa.me/5511945007634?text=Olá! Quero reservar a Sandália Kenner Destaque do site."
                target="_blank"
                className="group relative w-full sm:w-auto bg-white text-uhf-black px-10 py-6 font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 overflow-hidden transition-all hover:pr-14 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Reservar Agora
                </span>
                <MoveRight className="absolute right-6 w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>

              <div className="flex items-center gap-2 text-white/30">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-uhf-black bg-uhf-gray flex items-center justify-center text-[10px] font-bold overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold">+12 Reservas hoje</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
