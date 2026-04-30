"use client";

import { useState } from "react";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-uhf-black/90 backdrop-blur-md text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <Link href="/" className="font-display text-2xl font-bold tracking-widest uppercase hover:opacity-80 transition-opacity">
          <Image
            src="/images/uhf-logo.webp"
            alt="UHF Moda"
            width={100}
            height={100}
          />
        </Link>

        <a 
          href="https://wa.me/5511945007634" 
          target="_blank"
          className="p-2 -mr-2 hover:bg-white/10 rounded-full transition-colors group relative"
          title="Fale Conosco"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-500 border-2 border-uhf-black rounded-full animate-pulse" />
        </a>

      </nav>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 transition-opacity backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-uhf-black text-white z-50 flex flex-col transform transition-transform duration-300 ease-in-out border-r border-white/10 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <span className="font-display text-2xl font-bold tracking-widest">UHF</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
          <Link
            href="/produtos"
            onClick={() => setIsOpen(false)}
            className="group text-xl font-medium text-white hover:text-gray-400 transition-colors uppercase tracking-wider flex items-center justify-between"
          >
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">Coleção Completa</span>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
          </Link>
          {["Masculino", "Feminino", "Infantil", "Sobre a UHF"].map((item, idx) => (
            <a
              key={item}
              href={`/#${item.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setIsOpen(false)}
              className="group text-xl font-medium text-white hover:text-gray-400 transition-colors uppercase tracking-wider flex items-center justify-between"
            >
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">{item}</span>
              <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="p-6 border-t border-white/10">
          <div className="bg-white/5 p-4 rounded-sm border border-white/10 mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Como Comprar</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Não realizamos vendas diretas pelo site. Escolha seus produtos e reserve via WhatsApp para finalizar seu pedido.
            </p>
          </div>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">© 2026 UHF Moda.</p>
        </div>

      </aside>
    </>
  );
}
