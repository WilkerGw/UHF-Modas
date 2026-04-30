"use client";

import Link from "next/link";
import { MessageCircle, Mail, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-uhf-black text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="inline-block group">
              <h2 className="font-display text-4xl uppercase tracking-tighter leading-none group-hover:text-gray-400 transition-colors">
                UHF<br/>Moda
              </h2>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed uppercase tracking-wider">
              Streetwear, calçados e acessórios selecionados para quem vive a rua. Do clássico ao disruptivo.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-uhf-black transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-uhf-black transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-12 lg:col-span-2">
            <div className="flex flex-col gap-6">
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-white/40">Coleções</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium uppercase tracking-widest">
                <li><Link href="/produtos?cat=masculino" className="hover:text-gray-400 transition-colors">Masculino</Link></li>
                <li><Link href="/produtos?cat=feminino" className="hover:text-gray-400 transition-colors">Feminino</Link></li>
                <li><Link href="/produtos?cat=infantil" className="hover:text-gray-400 transition-colors">Infantil</Link></li>
                <li><Link href="/produtos" className="hover:text-gray-400 transition-colors">Ver Tudo</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-white/40">Institucional</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium uppercase tracking-widest">
                <li><Link href="/#sobre" className="hover:text-gray-400 transition-colors">Sobre Nós</Link></li>
                <li><Link href="/#localizacao" className="hover:text-gray-400 transition-colors">Localização</Link></li>
                <li><Link href="#" className="hover:text-gray-400 transition-colors">Trocas e Devoluções</Link></li>
                <li><Link href="#" className="hover:text-gray-400 transition-colors">Privacidade</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-8">
            <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] text-white/40">Onde Estamos</h4>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-gray-600 shrink-0" />
                <p className="text-sm text-gray-400 leading-relaxed uppercase tracking-wider">
                  Próximo à Estação Vila Tolstói (Monotrilho)<br/>
                  São Paulo - SP
                </p>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="w-5 h-5 text-gray-600 shrink-0" />
                <a href="tel:+5511945007634" className="text-sm hover:text-gray-400 transition-colors font-bold tracking-widest">
                  (11) 94500-7634
                </a>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-gray-600 shrink-0" />
                <a href="mailto:contato@uhfmoda.com.br" className="text-sm hover:text-gray-400 transition-colors uppercase tracking-widest">
                  contato@uhfmoda.com.br
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">
            <p>© {new Date().getFullYear()} UHF MODA. Todos os direitos reservados.</p>
            <span className="hidden md:block">|</span>
            <p>CNPJ: 00.000.000/0000-00</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 hover:text-white transition-colors"
          >
            Voltar ao topo
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Background Brand Mark (Huge text) */}
      <div className="hidden lg:block absolute -bottom-16 right-0 text-[20vw] font-display uppercase font-bold text-white/[0.02] leading-none pointer-events-none select-none">
        UHF
      </div>
    </footer>
  );
}
