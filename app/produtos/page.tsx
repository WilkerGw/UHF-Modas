"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { PRODUCTS, Audience, Category } from "@/lib/data";
import ProductCard from "@/components/products/ProductCard";



export default function ProductsPage() {
  const [activeAudience, setActiveAudience] = useState<Audience | "todos">("todos");
  const [activeCategory, setActiveCategory] = useState<Category | "todas">("todas");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchAudience = activeAudience === "todos" || product.audience === activeAudience;
      const matchCategory = activeCategory === "todas" || product.category === activeCategory;
      return matchAudience && matchCategory;
    });
  }, [activeAudience, activeCategory]);

  const audiences: { value: Audience | "todos"; label: string }[] = [
    { value: "todos", label: "Todos" },
    { value: "masculino", label: "Masculino" },
    { value: "feminino", label: "Feminino" },
    { value: "infantil", label: "Infantil" },
  ];

  const categories: { value: Category | "todas"; label: string }[] = [
    { value: "todas", label: "Todas as Peças" },
    { value: "camisas", label: "Camisas" },
    { value: "blusas", label: "Blusas" },
    { value: "bermudas", label: "Bermudas" },
    { value: "calças", label: "Calças" },
    { value: "saias", label: "Saias" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-uhf-light text-uhf-black pt-8">
      
      {/* Header da Página */}
      <div className="px-6 pb-8 border-b border-gray-200">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-uhf-black transition-colors mb-4 group"
        >
          <ChevronLeft className="w-3 h-3 transform group-hover:-translate-x-1 transition-transform" />
          Voltar ao Início
        </Link>
        <h1 className="font-display text-5xl uppercase tracking-tighter mb-2">Catálogo</h1>
        <p className="text-gray-500">Mostrando {filteredProducts.length} itens.</p>
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        
        {/* Filtros Mobile (Scroll Horizontal) */}
        <div className="md:hidden flex flex-col gap-4 p-6 border-b border-gray-200 bg-white sticky top-[72px] z-30 shadow-sm">
          <div className="flex flex-row overflow-x-auto no-scrollbar gap-2 pb-2">
            {audiences.map((aud) => (
              <button
                key={aud.value}
                onClick={() => setActiveAudience(aud.value)}
                className={`flex-none px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors border ${
                  activeAudience === aud.value 
                    ? "bg-uhf-black text-white border-uhf-black" 
                    : "bg-transparent text-gray-500 border-gray-300 hover:border-gray-500"
                }`}
              >
                {aud.label}
              </button>
            ))}
          </div>
          <div className="flex flex-row overflow-x-auto no-scrollbar gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex-none px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors border ${
                  activeCategory === cat.value 
                    ? "bg-uhf-black text-white border-uhf-black" 
                    : "bg-transparent text-gray-500 border-gray-300 hover:border-gray-500"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filtros Desktop (Sidebar) */}
        <aside className="hidden md:flex w-64 flex-col gap-10 p-8 border-r border-gray-200 bg-white sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto">
          <div>
            <h3 className="font-display text-xl uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Público</h3>
            <div className="flex flex-col gap-3">
              {audiences.map((aud) => (
                <button
                  key={aud.value}
                  onClick={() => setActiveAudience(aud.value)}
                  className={`text-left uppercase text-sm tracking-wider font-semibold transition-colors flex items-center justify-between group ${
                    activeAudience === aud.value ? "text-uhf-black" : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {aud.label}
                  {activeAudience === aud.value && <span className="w-1.5 h-1.5 bg-uhf-black rounded-full" />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Categoria</h3>
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`text-left uppercase text-sm tracking-wider font-semibold transition-colors flex items-center justify-between group ${
                    activeCategory === cat.value ? "text-uhf-black" : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {cat.label}
                  {activeCategory === cat.value && <span className="w-1.5 h-1.5 bg-uhf-black rounded-full" />}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Vitrine de Produtos (Sem CSS Grid, Apenas Flexbox) */}
        <main className="flex-1 p-6 md:p-8 bg-uhf-light">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <p className="text-xl text-gray-500 font-medium">Nenhum produto encontrado para estes filtros.</p>
              <button 
                onClick={() => { setActiveAudience("todos"); setActiveCategory("todas"); }}
                className="mt-6 uppercase tracking-wider text-sm font-bold border-b-2 border-uhf-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div className="flex flex-row flex-wrap gap-6 md:gap-8 justify-start">
              {filteredProducts.map((prod) => (
                <ProductCard 
                  key={prod.id} 
                  prod={prod}
                  className="flex-none w-[calc(50%-12px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)]"
                />
              ))}
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
