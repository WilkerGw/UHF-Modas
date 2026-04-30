export type Audience = "masculino" | "feminino" | "infantil";
export type Category = "camisas" | "blusas" | "bermudas" | "calças" | "saias";

export interface Product {
  id: string;
  name: string;
  price: string;
  img: string;
  imgHover?: string;
  audience: Audience;
  category: Category;
}

const generateProducts = (
  prefix: string,
  folder: string,
  name: string,
  price: string,
  audience: Audience,
  category: Category,
  totalImages: number
): Product[] => {
  const productCount = totalImages / 2;
  return Array(productCount)
    .fill(null)
    .map((_, i) => {
      const imgIndex1 = i * 2 + 1;
      const imgIndex2 = i * 2 + 2;
      return {
        id: `${prefix}-${category}-${i + 1}`,
        name: `${name} ${i + 1}`,
        price: price,
        img: `/images/${folder}/${String(imgIndex1).padStart(2, "0")}.webp`,
        imgHover: `/images/${folder}/${String(imgIndex2).padStart(2, "0")}.webp`,
        audience,
        category,
      };
    });
};

export const PRODUCTS: Product[] = [
  // Masculino
  ...generateProducts("m", "masc-camisetas", "Camisa Masculina", "R$ 149", "masculino", "camisas", 10),
  ...generateProducts("m", "masc-bermudas", "Bermuda Masculina", "R$ 199", "masculino", "bermudas", 10),
  ...generateProducts("m", "masc-calcas", "Calça Masculina", "R$ 299", "masculino", "calças", 10),
  
  // Feminino
  ...generateProducts("f", "fem-blusas", "Blusa Feminina", "R$ 119", "feminino", "blusas", 10),
  ...generateProducts("f", "fem-saias", "Saia Feminina", "R$ 179", "feminino", "saias", 10),
  ...generateProducts("f", "fem-calcas", "Calça Feminina", "R$ 259", "feminino", "calças", 10),
  
  // Infantil
  ...generateProducts("i", "inf-camisetas", "Camisa Infantil", "R$ 89", "infantil", "camisas", 6),
  ...generateProducts("i", "inf-bermudas", "Bermuda Infantil", "R$ 119", "infantil", "bermudas", 6),
  ...generateProducts("i", "inf-calcas", "Calça Infantil", "R$ 159", "infantil", "calças", 6),
];

export const MOCK_MASC = PRODUCTS.filter(p => p.audience === "masculino");
export const MOCK_FEM = PRODUCTS.filter(p => p.audience === "feminino");
export const MOCK_INFANTIL = PRODUCTS.filter(p => p.audience === "infantil");
