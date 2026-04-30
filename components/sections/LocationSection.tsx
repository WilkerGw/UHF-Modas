"use client";

import { MapPin, Train, ArrowUpRight, MoveRight } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="relative w-full py-24 bg-uhf-black text-white overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-8">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Localização Estratégica</span>
            </div>

            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-8">
              Estamos a um <br />
              <span className="text-gray-600">passo de você.</span>
            </h2>

            <p className="text-lg text-gray-400 mb-12 max-w-md">
              Visite nossa loja física e confira as coleções exclusivas de perto. Experiência completa com atendimento personalizado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm hover:border-gray-600/50 transition-colors group">
                <Train className="w-8 h-8 text-gray-600 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Vila Tolstói</h4>
                <p className="text-2xl font-display uppercase tracking-tight">Estação Monotrilho</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm hover:border-gray-600/50 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Apenas</span>
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-2">200 Metros</h4>
                <p className="text-2xl font-display uppercase tracking-tight italic">3 Min. de Caminhada</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=UHF+Moda+Vila+Tolstoi"
              target="_blank"
              className="group inline-flex items-center gap-4 bg-white text-uhf-black px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-gray-600 hover:text-white transition-all duration-300"
            >
              Abrir no Maps
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
          </div>

          {/* Visual Path Representation */}
          <div className="w-full lg:w-1/2 relative aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
            <div className="relative w-full h-full border border-white/5 flex items-center justify-center">
              {/* Stylized Path Illustration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-[80%] h-[80%] border-2 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
              </div>

              <div className="relative text-center">
                <div className="relative z-10 bg-uhf-black p-12 border-2 border-gray-600/20 shadow-[0_0_50px_rgba(34,197,94,0.1)]">
                  <div className="text-[120px] md:text-[180px] font-display font-bold leading-none tracking-tighter text-white/5 absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none select-none">
                    200M
                  </div>
                  <div className="relative">
                    <span className="block text-sm uppercase tracking-[0.5em] text-gray-600 font-bold mb-4">UHF Store</span>
                    <h3 className="text-4xl md:text-5xl font-display uppercase tracking-tighter mb-6">Próximo à <br /> Vila Tolstói</h3>
                    <div className="flex items-center justify-center gap-3 py-3 border-y border-white/10 italic text-gray-400">
                      <span>Rápido</span>
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                      <span>Fácil</span>
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                      <span>Seguro</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monorail Icon Floating */}
              <div className="absolute top-12 right-12 p-4 bg-gray-600 text-white rounded-full shadow-lg animate-bounce">
                <Train className="w-6 h-6" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
