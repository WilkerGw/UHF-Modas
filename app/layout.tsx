import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "UHF Moda",
  description: "Vestuários, calçados e acessórios para homens, mulheres e crianças",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full w-full overflow-x-hidden antialiased ${inter.variable} ${oswald.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full w-full flex flex-col font-sans pt-[72px] overflow-x-hidden" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
