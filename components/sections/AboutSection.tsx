import { MapPin, Phone, Clock, Truck, MessageCircle, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre-a-uhf" className="relative py-24 bg-uhf-black text-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Brand Story */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-5xl md:text-7xl uppercase font-bold tracking-tighter mb-4 leading-none">
                UHF Moda.<br />
                <span className="text-gray-500 italic">Essência Urbana.</span>
              </h2>
              <div className="h-1 w-20 bg-white" />
            </div>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Nascida no coração de São Paulo, a UHF Moda traduz a rebeldia e a rotina das ruas em streetwear de alta performance.
              Não seguimos o ritmo das passarelas, seguimos o pulso da cidade.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-uhf-gray px-4 py-2 rounded-sm text-sm font-semibold uppercase tracking-wider border border-white/5">
                <Truck className="w-4 h-4 text-gray-400" />
                Entrega em todo o Brasil
              </div>
              <div className="flex items-center gap-2 bg-uhf-gray px-4 py-2 rounded-sm text-sm font-semibold uppercase tracking-wider border border-white/5">
                <span className="text-gray-400">📪🛵</span>
                Motoboy / Correios
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Info Card */}
          <div className="bg-white text-uhf-black p-8 md:p-12 shadow-2xl relative">
            {/* Industrial Accent */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-uhf-gray z-0" />

            <h3 className="font-display text-3xl uppercase font-bold mb-10 tracking-tight border-b-2 border-uhf-black pb-4">
              Info & Contato
            </h3>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4 group cursor-pointer">
                <div className="bg-uhf-black text-white p-3 h-fit group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest text-gray-500 mb-1">Endereço</h4>
                  <p className="text-lg font-medium leading-tight">
                    Av Oratório 4862<br />
                    Vila Industrial, São Paulo - SP
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av+Oratório+4862+Vila+Industrial+SP"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase mt-2 hover:underline"
                  >
                    Abrir no Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="text-uhf-black">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest text-gray-500 mb-1">Telefone</h4>
                    <p className="text-lg font-bold">11 2143-3675</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="text-uhf-black">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest text-gray-500 mb-1">Horário</h4>
                    <p className="text-lg font-bold">9:30 às 18:30</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/5511945007634"
                target="_blank"
                className="block group relative bg-uhf-black text-white p-6 overflow-hidden transition-all hover:bg-black active:scale-[0.98]"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-8 h-8 fill-white/20" />
                    <div>
                      <span className="block text-xs uppercase tracking-widest font-bold opacity-60">WhatsApp Oficial</span>
                      <span className="text-2xl font-display font-bold tracking-tight">(11) 94500-7634</span>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                </div>
                {/* Animated Background Pulse */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-0 left-0 text-[15rem] font-display font-bold uppercase text-white/[0.02] leading-none select-none pointer-events-none translate-y-1/2">
        UHF MODA
      </div>
    </section>
  );
}

