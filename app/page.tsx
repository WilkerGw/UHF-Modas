"use client";
import Image from "next/image";

import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";

import Link from "next/link";
import AboutSection from "@/components/sections/AboutSection";
import KennerHighlight from "@/components/sections/KennerHighlight";
import BolsaHighlight from "@/components/sections/BolsaHighlight";
import LocationSection from "@/components/sections/LocationSection";
import ProductCard from "@/components/products/ProductCard";

import { MOCK_MASC, MOCK_FEM, MOCK_INFANTIL } from "@/lib/data";

// Reusable Carousel Component for Emphasis
const EmphasisCarousel = ({ title, items, bgColor, href = "/produtos" }: { title: string, items: { title: string, subtitle: string, img: string }[], bgColor: string, href?: string }) => (
  <section className={`py-16 ${bgColor}`}>
    <div className="px-6 mb-8 flex justify-between items-end">
      <h2 className="font-display text-4xl uppercase tracking-tighter">{title}</h2>
      <Link href={href} className="group flex items-center gap-2 text-sm uppercase tracking-wider font-semibold hover:text-gray-500 transition-colors">
        Ver Tudo <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
    <div className="flex flex-row flex-nowrap overflow-x-auto w-full no-scrollbar gap-6 px-6 pb-8 snap-x snap-mandatory">
      {items.map((item, idx) => (
        <div key={idx} className="flex-none w-[85vw] md:w-[400px] snap-center flex flex-col gap-4">
          <div className="relative aspect-[3/4] bg-uhf-gray w-full overflow-hidden">
            <Image src={item.img} alt={item.title} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-display text-2xl uppercase">{item.title}</h3>
            <p className="text-gray-500">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Reusable Carousel Component for Products
const ProductCarousel = ({ title, products, href = "/produtos" }: { title: string, products: any[], href?: string }) => (
  <div className="mb-16">
    <div className="px-6 mb-6 flex justify-between items-end">
      <h3 className="font-display text-2xl uppercase tracking-wide text-uhf-black/80">{title}</h3>
      <Link href={href} className="group flex items-center gap-2 text-xs uppercase tracking-wider font-bold hover:text-gray-500 transition-colors opacity-60 hover:opacity-100">
        Ver Tudo <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
    <div className="flex flex-row flex-nowrap overflow-x-auto w-full no-scrollbar gap-4 px-6 pb-4 snap-x snap-mandatory">
      {products.map((prod, idx) => (
        <ProductCard key={idx} prod={prod} className="flex-none w-[65vw] md:w-[300px] snap-start" />
      ))}
    </div>
  </div>
);



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full max-w-full bg-uhf-light text-uhf-black overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full bg-uhf-black text-white flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/bg-hero.webp"
            alt="UHF Moda Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-uhf-black via-transparent to-transparent" />

        {/* Social Icons Sidebar */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6 hidden md:flex">
          <a href="https://www.instagram.com/uhfmodatop/" target="_blank" className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white hover:text-uhf-black transition-all group">
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
              className="group-hover:scale-110 transition-transform"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://wa.me/5511945007634" target="_blank" className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white hover:text-uhf-black transition-all group">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <div className="w-px h-32 bg-gradient-to-b from-white/20 to-transparent mx-auto mt-4" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 mt-20">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase font-bold tracking-tighter leading-none mb-6 drop-shadow-lg">
            Rua.<br />Rotina.<br />Rebelião.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-md mb-10 drop-shadow-md">
            A nova coleção drop 04 já está disponível.
          </p>
          <Link href="/produtos" className="group bg-white text-uhf-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 flex items-center gap-3">
            Explorar Coleção
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* About & Contact Section */}

      <AboutSection />

      {/* Masculino: Look & Shoes Emphasis */}
      <div id="masculino">
        <EmphasisCarousel
          title="Looks Masc"
          bgColor="bg-white"
          href="/produtos?audience=masculino"
          items={[
            { title: "Drop 04 - Core", subtitle: "Peças essenciais de streetwear", img: "/images/masc-calcas/01.webp" },
            { title: "Techwear Base", subtitle: "Funcionalidade e estilo", img: "/images/masc-calcas/03.webp" },
            { title: "Techwear Base", subtitle: "Funcionalidade e estilo", img: "/images/masc-calcas/05.webp" },
            { title: "Techwear Base", subtitle: "Funcionalidade e estilo", img: "/images/masc-calcas/07.webp" }
          ]}
        />
        <EmphasisCarousel
          title="Shoes Masc"
          bgColor="bg-uhf-light"
          href="/produtos?audience=masculino"
          items={[
            { title: "Sneaker 01", subtitle: "Silhueta clássica", img: "/images/masc-shoes/01.webp" },
            { title: "Chunky Force", subtitle: "Sola tratorada", img: "/images/masc-shoes/02.webp" },
            { title: "Chunky Force", subtitle: "Sola tratorada", img: "/images/masc-shoes/03.webp" }
          ]}
        />
      </div>

      {/* Kenner Exclusive Highlight */}
      <KennerHighlight />

      {/* Feminino: Look & Shoes Emphasis */}
      <div id="feminino">
        <EmphasisCarousel
          title="Looks Fem"
          bgColor="bg-white"
          href="/produtos?audience=feminino"
          items={[
            { title: "Essence Drop", subtitle: "Caimento perfeito", img: "/images/fem-blusas/05.webp" },
            { title: "Night Out", subtitle: "All black everything", img: "/images/fem-blusas/07.webp" },
            { title: "Night Out", subtitle: "All black everything", img: "/images/fem-blusas/09.webp" },
            { title: "Night Out", subtitle: "All black everything", img: "/images/fem-blusas/03.webp" }
          ]}
        />
        <EmphasisCarousel
          title="Shoes Fem"
          bgColor="bg-uhf-light"
          href="/produtos?audience=feminino"
          items={[
            { title: "Platform X", subtitle: "Altura e conforto", img: "/images/fem-shoes/01.webp" },
            { title: "Slip-on Dark", subtitle: "Praticidade minimal", img: "/images/fem-shoes/02.webp" },
            { title: "Chunky Force", subtitle: "Sola tratorada", img: "/images/fem-shoes/03.webp" }
          ]}
        />
      </div>

      {/* Luxury Bolsa Highlight */}
      <BolsaHighlight />

      {/* Physical Store Location */}
      <LocationSection />

      <section className="py-20 bg-white">
        <div className="px-6 mb-12 flex flex-col-reverse md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-5xl uppercase tracking-tighter mb-4">Todos os Produtos</h2>
            <p className="text-gray-500">Deslize para ver as categorias.</p>
          </div>
          <div className="bg-uhf-black text-white p-4 rounded-sm flex items-center gap-4 max-w-sm">
            <div className="bg-green-500/20 p-2 rounded-full">
              <MessageCircle className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-[10px] uppercase tracking-widest leading-relaxed">
              <span className="font-bold block text-white/60 mb-1">Reserva WhatsApp</span>
              Escolha suas peças e clique no botão para reservar diretamente conosco.
            </p>
          </div>
        </div>


        <ProductCarousel title="Masculino" products={MOCK_MASC} href="/produtos?audience=masculino" />
        <ProductCarousel title="Feminino" products={MOCK_FEM} href="/produtos?audience=feminino" />
        <ProductCarousel title="Infantil" products={MOCK_INFANTIL} href="/produtos?audience=infantil" />
      </section>
    </main>
  );
}
