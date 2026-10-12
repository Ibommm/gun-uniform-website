
import type { PRODUCTS } from "./products";

type Product = (typeof PRODUCTS)[number];

export function getCategory(product: Product): string {
  const category = String(product.category ?? "").toLowerCase();
  const name = String(product.name ?? "").toLowerCase();

  if (
    category.includes("sepatu") ||
    name.includes("sepatu") ||
    name.includes("boots")
  ) {
    return "Sepatu";
  }

  if (
    category.includes("atribut") ||
    category.includes("aksesori") ||
    category.includes("aksesoris") ||
    name.includes("topi") ||
    name.includes("emblem") ||
    name.includes("pangkat") ||
    name.includes("badge") ||
    name.includes("pin")
  ) {
    return "Atribut & Aksesori";
  }

  if (
    category.includes("operasional") ||
    name.includes("jaket") ||
    name.includes("rompi") ||
    name.includes("jas hujan")
  ) {
    return "Pakaian Operasional";
  }

  if (
    category.includes("seragam") ||
    name.includes("seragam") ||
    name.includes("pdh") ||
    name.includes("pdl") ||
    name.includes("kemeja satpam")
  ) {
    return "Seragam Satpam";
  }

  return "Perlengkapan Lainnya";
}

export function formatRupiah(price?: number) {
  if (price == null || !Number.isFinite(price)) {
    return null;
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getMaterial(product: Product) {
  return String(product.spec?.bahan ?? "");
}

export function getSizes(product: Product) {
  return String(product.spec?.ukuran ?? "")
    .toUpperCase()
    .split(/[,/|]/)
    .map((size) => size.trim())
    .filter(Boolean);
}


type ProductImageFields = {
  image?: string;
  imageUrl?: string;
  images?: string[];
};

export function getProductImage(product: ProductImageFields) {
  return product.image || product.imageUrl || product.images?.[0] || "";
}