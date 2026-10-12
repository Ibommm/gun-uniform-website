
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Grid2X2,
  List,
  SlidersHorizontal,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Shirt,
  Footprints,
  Award,
  BriefcaseBusiness,
  Package,
  MessageCircle,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";

import Footer from "@/components/Footer";
import { PRODUCTS } from "@/data/products";
import type { Product } from "@/data/products";
import { generateWAUrl } from "@/data/siteData";

import {
  getCategory,
  formatRupiah,
  getMaterial,
  getSizes,
  getProductImage,
} from "@/data/catalogUtils";

const CATEGORIES = [
  { label: "Semua", value: "Semua", icon: Grid2X2 },
  { label: "Seragam Satpam", value: "Seragam Satpam", icon: Shirt },
  { label: "Sepatu", value: "Sepatu", icon: Footprints },
  { label: "Atribut & Aksesori", value: "Atribut & Aksesori", icon: Award },
  {
    label: "Pakaian Operasional",
    value: "Pakaian Operasional",
    icon: BriefcaseBusiness,
  },
  {
    label: "Perlengkapan Lainnya",
    value: "Perlengkapan Lainnya",
    icon: Package,
  },
];

const MATERIALS = [
  "American Drill",
  "Tactical Ripstop",
  "Polyester",
  "Kulit Asli",
  "Canvas",
];

const SIZES = ["S", "M", "L", "XL", "XXL", "Custom"];
const ITEMS_PER_PAGE = 12;

type FilterSection = {
  kategori: boolean;
  harga: boolean;
  bahan: boolean;
  ukuran: boolean;
};

export default function KatalogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(50000);
  const [maxPrice, setMaxPrice] = useState(5000000);
  const [sort, setSort] = useState("terbaru");
  const [page, setPage] = useState(1);
  const [gridView, setGridView] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [openFilters, setOpenFilters] = useState<FilterSection>({
    kategori: true,
    harga: true,
    bahan: true,
    ukuran: true,
  });

  // Gunakan tipe Product langsung dari products.ts.
  // Tidak perlu casting ProductItem atau unknown.
  const products: readonly Product[] = PRODUCTS;

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const category = getCategory(product);
      const name = product.name.toLowerCase();
      const desc = product.desc.toLowerCase();
      const query = search.trim().toLowerCase();
      const material = getMaterial(product).toLowerCase();
      const sizes = getSizes(product);
      const price = product.price;

      const matchesCategory =
        activeCategory === "Semua" || category === activeCategory;

      const matchesSearch =
        !query ||
        name.includes(query) ||
        desc.includes(query) ||
        category.toLowerCase().includes(query);

      const matchesMaterial =
        selectedMaterials.length === 0 ||
        selectedMaterials.some((item) =>
          material.includes(item.toLowerCase())
        );

      const productSizes = product.spec.ukuran.toLowerCase();

      const matchesSize =
        selectedSizes.length === 0 ||
        selectedSizes.some(
          (item) =>
            sizes.some(
              (size) => size.toLowerCase() === item.toLowerCase()
            ) ||
            (item === "Custom" && productSizes.includes("custom"))
        );

      const matchesPrice =
        price >= minPrice && price <= maxPrice;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesMaterial &&
        matchesSize &&
        matchesPrice
      );
    });

    if (sort === "nama") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name, "id")
      );
    } else if (sort === "termurah") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "termahal") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [
    products,
    activeCategory,
    search,
    selectedMaterials,
    selectedSizes,
    minPrice,
    maxPrice,
    sort,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  );

  const currentPage = Math.min(page, totalPages);

  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function toggleArrayValue(
    value: string,
    values: string[],
    setter: (value: string[]) => void
  ) {
    setter(
      values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value]
    );

    setPage(1);
  }

  function toggleFilter(name: keyof FilterSection) {
    setOpenFilters((previous) => ({
      ...previous,
      [name]: !previous[name],
    }));
  }

  function resetFilters() {
    setActiveCategory("Semua");
    setSearch("");
    setSelectedMaterials([]);
    setSelectedSizes([]);
    setMinPrice(50000);
    setMaxPrice(5000000);
    setSort("terbaru");
    setPage(1);
  }

  function selectCategory(category: string) {
    setActiveCategory(category);
    setPage(1);
  }

  function getCategoryCount(category: string) {
    if (category === "Semua") return products.length;

    return products.filter(
      (product) => getCategory(product) === category
    ).length;
  }

  function FilterHeading({
    title,
    name,
  }: {
    title: string;
    name: keyof FilterSection;
  }) {
    return (
      <button
        type="button"
        onClick={() => toggleFilter(name)}
        className="flex w-full items-center justify-between py-1 text-left text-sm font-bold text-white"
      >
        {title}

        {openFilters[name] ? (
          <ChevronUp size={16} />
        ) : (
          <ChevronDown size={16} />
        )}
      </button>
    );
  }

  function FilterCheckbox({
    label,
    checked,
    onChange,
  }: {
    label: string;
    checked: boolean;
    onChange: () => void;
  }) {
    return (
      <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-amber-400">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 accent-amber-400"
        />

        <span>{label}</span>
      </label>
    );
  }

  function SidebarFilters() {
    return (
      <div className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div>
          <FilterHeading title="Kategori" name="kategori" />

          {openFilters.kategori && (
            <div className="mt-3 space-y-3">
              <FilterCheckbox
                label={`Semua Kategori (${products.length})`}
                checked={activeCategory === "Semua"}
                onChange={() => selectCategory("Semua")}
              />

              {CATEGORIES.filter(
                (category) => category.value !== "Semua"
              ).map((category) => (
                <FilterCheckbox
                  key={category.value}
                  label={`${category.label} (${getCategoryCount(
                    category.value
                  )})`}
                  checked={activeCategory === category.value}
                  onChange={() => selectCategory(category.value)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-slate-800 pt-4">
          <FilterHeading title="Harga" name="harga" />

          {openFilters.harga && (
            <div className="mt-4 space-y-4">
              <div>
                <label className="mb-1 block text-xs text-slate-400">
                  Harga minimum
                </label>

                <input
                  type="number"
                  min={0}
                  value={minPrice}
                  onChange={(event) => {
                    setMinPrice(Number(event.target.value));
                    setPage(1);
                  }}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs text-slate-400">
                  Harga maksimum
                </label>

                <input
                  type="number"
                  min={0}
                  value={maxPrice}
                  onChange={(event) => {
                    setMaxPrice(Number(event.target.value));
                    setPage(1);
                  }}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex justify-between gap-2 text-[11px] text-slate-400">
                <span>{formatRupiah(minPrice)}</span>
                <span>{formatRupiah(maxPrice)}</span>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-slate-800 pt-4">
          <FilterHeading title="Bahan" name="bahan" />

          {openFilters.bahan && (
            <div className="mt-3 space-y-3">
              {MATERIALS.map((material) => (
                <FilterCheckbox
                  key={material}
                  label={material}
                  checked={selectedMaterials.includes(material)}
                  onChange={() =>
                    toggleArrayValue(
                      material,
                      selectedMaterials,
                      setSelectedMaterials
                    )
                  }
                />
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-slate-800 pt-4">
          <FilterHeading title="Ukuran" name="ukuran" />

          {openFilters.ukuran && (
            <div className="mt-3 grid grid-cols-2 gap-3">
              {SIZES.map((size) => (
                <FilterCheckbox
                  key={size}
                  label={size}
                  checked={selectedSizes.includes(size)}
                  onChange={() =>
                    toggleArrayValue(
                      size,
                      selectedSizes,
                      setSelectedSizes
                    )
                  }
                />
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={resetFilters}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-500/60 px-4 py-3 text-sm font-bold text-amber-400 transition-colors hover:bg-amber-400 hover:text-slate-950"
        >
          <RotateCcw size={15} />
          Reset Filter
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-100">
      <main className="flex-1">
        {/* Hero katalog */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="pointer-events-none absolute -right-10 -top-20 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />

          <div className="relative mx-auto max-w-[1600px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-amber-400 transition-colors hover:text-amber-300"
            >
              <ArrowLeft size={16} />
              Kembali ke Beranda
            </Link>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Katalog Produk
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Katalog Produk{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                GUN Uniform
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Temukan berbagai pilihan seragam satpam dan perlengkapan
              keamanan serta operasional dengan kualitas terbaik.
            </p>
          </div>
        </section>

        {/* Kategori horizontal */}
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto flex max-w-[1600px] gap-2 overflow-x-auto px-4 py-4 sm:px-6 lg:px-8">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => selectCategory(category.value)}
                  className={`flex shrink-0 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-xs font-bold transition-all sm:px-5 sm:text-sm ${
                    active
                      ? "border-amber-400 bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/10"
                      : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-amber-500/50 hover:text-amber-400"
                  }`}
                >
                  <Icon size={18} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Isi katalog */}
        <section className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mb-5 flex items-center justify-between gap-3 lg:hidden">
            <p className="text-sm text-slate-400">
              {filteredProducts.length} produk ditemukan
            </p>

            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-bold text-white"
            >
              <SlidersHorizontal size={16} />
              Filter
            </button>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[245px_minmax(0,1fr)] xl:grid-cols-[270px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <SidebarFilters />
            </aside>

            <div className="min-w-0">
              {/* Pencarian dan sorting */}
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="hidden text-sm text-slate-400 sm:block">
                  Menampilkan{" "}
                  <span className="font-bold text-white">
                    {filteredProducts.length === 0
                      ? 0
                      : (currentPage - 1) * ITEMS_PER_PAGE + 1}
                    {"–"}
                    {Math.min(
                      currentPage * ITEMS_PER_PAGE,
                      filteredProducts.length
                    )}
                  </span>{" "}
                  dari {filteredProducts.length} produk
                </p>

                <div className="flex flex-1 gap-2 sm:max-w-2xl sm:justify-end">
                  <div className="relative min-w-0 flex-1">
                    <Search
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="search"
                      value={search}
                      onChange={(event) => {
                        setSearch(event.target.value);
                        setPage(1);
                      }}
                      placeholder="Cari produk..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/70 py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                    />
                  </div>

                  <select
                    value={sort}
                    onChange={(event) => {
                      setSort(event.target.value);
                      setPage(1);
                    }}
                    className="max-w-[155px] rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-xs text-white outline-none focus:border-amber-400 sm:max-w-none sm:text-sm"
                    aria-label="Urutkan produk"
                  >
                    <option value="terbaru">Urutkan: Terbaru</option>
                    <option value="nama">Nama Produk</option>
                    <option value="termurah">Harga Terendah</option>
                    <option value="termahal">Harga Tertinggi</option>
                  </select>

                  <button
                    type="button"
                    onClick={() => setGridView(true)}
                    aria-label="Tampilan grid"
                    className={`hidden rounded-xl border p-3 sm:block ${
                      gridView
                        ? "border-amber-400 bg-amber-400/10 text-amber-400"
                        : "border-slate-700 text-slate-400"
                    }`}
                  >
                    <Grid2X2 size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setGridView(false)}
                    aria-label="Tampilan daftar"
                    className={`hidden rounded-xl border p-3 sm:block ${
                      !gridView
                        ? "border-amber-400 bg-amber-400/10 text-amber-400"
                        : "border-slate-700 text-slate-400"
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>

              {/* Kartu produk */}
              {visibleProducts.length > 0 ? (
                <div
                  className={
                    gridView
                      ? "grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 2xl:grid-cols-4"
                      : "grid grid-cols-1 gap-4"
                  }
                >
                  {visibleProducts.map((product) => {
                    const category = getCategory(product);
                    const image = getProductImage(product);
                    const price = formatRupiah(product.price);

                    return (
                      <article
                        key={product.id}
                        className={`group flex overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5 ${
                          gridView ? "flex-col" : "flex-row"
                        }`}
                      >
                        <div
                          className={`relative overflow-hidden bg-slate-900 ${
                            gridView
                              ? "aspect-square w-full"
                              : "h-36 w-32 shrink-0 sm:h-48 sm:w-48"
                          }`}
                        >
                          {image ? (
                            <img
                              src={image}
                              alt={product.name}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-800 to-slate-950 text-slate-600">
                              <Package size={38} strokeWidth={1.2} />
                              <span className="px-2 text-center text-[10px] uppercase tracking-widest">
                                Foto Produk
                              </span>
                            </div>
                          )}

                          <span className="absolute left-2 top-2 max-w-[90%] rounded-full border border-amber-300/30 bg-amber-400 px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-slate-950 sm:left-3 sm:top-3 sm:text-[10px]">
                            {category}
                          </span>
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-4">
                          {product.badge && (
                            <span className="mb-2 self-start rounded bg-slate-800 px-2 py-1 text-[9px] font-semibold text-slate-300 sm:text-[10px]">
                              {product.badge}
                            </span>
                          )}

                          <h3 className="line-clamp-2 text-sm font-extrabold leading-snug text-white transition-colors group-hover:text-amber-300 sm:text-base">
                            {product.name}
                          </h3>

                          <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-slate-400 sm:text-xs">
                            {product.desc}
                          </p>

                          <div className="mt-3 border-t border-slate-800 pt-3">
                            <p className="line-clamp-2 text-[10px] text-slate-500 sm:text-xs">
                              Bahan: {product.spec.bahan || "-"}
                            </p>

                            <p className="mt-1 line-clamp-1 text-[10px] text-slate-500 sm:text-xs">
                              Ukuran: {product.spec.ukuran || "-"}
                            </p>
                          </div>

                          <div className="mt-auto pt-4">
                            <p className="mb-3 text-sm font-black text-white sm:text-base">
                              {price}
                              <span className="ml-1 text-[10px] font-normal text-slate-400">
                                / sesuai satuan
                              </span>
                            </p>

                            <a
                              href={generateWAUrl(
                                `Halo GUN Uniform, saya tertarik dengan produk ${product.name}. Mohon informasi harga, spesifikasi, pilihan ukuran, dan ketersediaan produk.`
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-amber-500/80 px-2 py-2.5 text-center text-[10px] font-bold text-amber-400 transition-all hover:bg-amber-400 hover:text-slate-950 sm:gap-2 sm:text-xs"
                            >
                              <MessageCircle size={14} />
                              Konsultasi Produk
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 px-5 py-16 text-center">
                  <Search
                    size={36}
                    className="mx-auto mb-4 text-slate-600"
                  />

                  <h3 className="text-lg font-bold text-white">
                    Produk tidak ditemukan
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Coba ubah kata pencarian atau sesuaikan filter produk.
                  </p>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-5 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-amber-300"
                  >
                    Reset Filter
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredProducts.length > ITEMS_PER_PAGE && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => {
                      setPage((previous) => Math.max(1, previous - 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="rounded-lg border border-slate-800 bg-slate-900 p-2.5 text-slate-300 transition-colors hover:border-amber-400 hover:text-amber-400 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Halaman sebelumnya"
                  >
                    <ArrowLeft size={17} />
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  )
                    .filter(
                      (number) =>
                        number === 1 ||
                        number === totalPages ||
                        Math.abs(number - currentPage) <= 2
                    )
                    .map((number, index, array) => (
                      <span key={number} className="contents">
                        {index > 0 &&
                          number - array[index - 1] > 1 && (
                            <span className="px-1 text-slate-500">
                              ...
                            </span>
                          )}

                        <button
                          type="button"
                          onClick={() => {
                            setPage(number);
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                          }}
                          className={`min-w-10 rounded-lg border px-3 py-2.5 text-sm font-bold transition-colors ${
                            currentPage === number
                              ? "border-amber-400 bg-amber-400 text-slate-950"
                              : "border-slate-800 bg-slate-900 text-slate-300 hover:border-amber-400"
                          }`}
                        >
                          {number}
                        </button>
                      </span>
                    ))}

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => {
                      setPage((previous) =>
                        Math.min(totalPages, previous + 1)
                      );
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="rounded-lg border border-slate-800 bg-slate-900 p-2.5 text-slate-300 transition-colors hover:border-amber-400 hover:text-amber-400 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Halaman selanjutnya"
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA pengadaan skala besar */}
        <section className="border-y border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="hidden shrink-0 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-400 sm:block">
                <ShieldCheck size={38} />
              </div>

              <div>
                <h2 className="text-xl font-black text-white sm:text-2xl">
                  Butuh Produk Custom atau Pengadaan Skala Besar?
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
                  Konsultasikan kebutuhan Anda untuk mendapatkan penawaran
                  terbaik dan solusi pengadaan yang tepat.
                </p>
              </div>
            </div>

            <a
              href={generateWAUrl(
                "Halo GUN Uniform, saya ingin berkonsultasi mengenai pengadaan seragam dan perlengkapan satpam skala besar."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 text-sm font-extrabold text-slate-950 transition-all hover:bg-amber-300"
            >
              <MessageCircle size={18} />
              Hubungi Kami Sekarang
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Filter mobile */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Tutup filter"
            onClick={() => setMobileFilterOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-slate-800 bg-slate-950 p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-black text-white">
                Filter Produk
              </h2>

              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="rounded-lg border border-slate-800 p-2 text-slate-300 hover:text-white"
                aria-label="Tutup"
              >
                <X size={20} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto">
              <SidebarFilters />
            </div>

            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="mt-4 w-full rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950"
            >
              Tampilkan {filteredProducts.length} Produk
            </button>
          </div>
        </div>
      )}
    </div>
  );
}