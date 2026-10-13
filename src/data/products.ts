
export type Product = {
  id: string | number;
  name: string;
  category: string;
  desc: string;
  price: number;
  badge: string;
  image: string;
  spec: {
    outsole?: string;
    insole?: string;
    bahan: string;
    ukuran: string;
    bordir: string;
    fitur: string;
  };
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Seragam PDH Satpam",
    category: "Seragam Satpam",
    desc: "Pakaian Dinas Harian standar resmi dengan potongan tailored modern yang elegan untuk pelayanan indoor.",
    price: 350000,
    badge: "Best Seller",
    image: "/images/seragam-pdh.jpg",
    spec: {
      bahan: "American Drill Premium / Japan Drill",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "Bordir Komputer Presisi Tinggi",
      fitur: "Tahan Kusut, Adem, Warna Tahan Lama",
    },
  },
  {
    id: 2,
    name: "Seragam PDL Satpam",
    category: "Seragam Satpam",
    desc: "Pakaian Dinas Lapangan berkekuatan tinggi, tahan gesekan, serta dirancang untuk pergerakan taktis.",
    price: 400000,
    badge: "Taktis & Kuat",
    image: "/images/seragam-pdl.jpg",
    spec: {
      bahan: "Ripstop Premium / Drill Tebal Heavy Duty",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "Bordir Timbul / Taktis Velcro",
      fitur: "Jahitan Rantai Ganda, Anti Sobek",
    },
  },
  {
    id: 3,
    name: "Seragam Diklat Satpam",
    category: "Seragam Satpam",
    desc: "Perlengkapan seragam resmi untuk siswa pelatihan Gada Pratama, Gada Madya, dan Gada Utama.",
    price: 375000,
    badge: "Standar Polri",
    image: "/images/seragam-diklat.jpg",
    spec: {
      bahan: "Kain Keras Ekstra Tahan Gesekan",
      ukuran: "S, M, L, XL, XXL",
      bordir: "Atribut Lengkap Kualifikasi",
      fitur: "Dirancang Khusus Kegiatan Lapangan Berat",
    },
  },
  {
    id: 4,
    name: "Sepatu PDH Upper Kulit Lack, Slip On, Outsole Rubber, Zipper/Tali",
    category: "Sepatu",
    desc: "Tampilan Black Glossy (mengkilap tanpa perlu disemir), cocok dan elegan untuk area indoor maupun kegiatan dinas harian.",
    price: 285000,
    badge: "Premium Quality",
    image: "/images/product/sepatu pdh lak.jpeg",
    spec: {
      bahan: "Kulit Sapi Asli Finishing Lak (Patent Leather)",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Karet (Rubber) Anti-Selip & Jahit Melingkar",
      insole: "Busa Empuk Lapis Merry Mesh (Nyaman & Adem)",
      fitur: "Tali & Resleting Samping (Praktis), Bebas Semir (Cukup Dilap)",
      bordir: "Logo Emboss Custom",
    },
  },
  {
    id: 5,
    name: "Sepatu PDH Upper Kulit, Slip On, Outsole Rubber, Zipper/Tali, Grade A.",
    category: "Sepatu",
    desc: "Tampilan Black Doff/Matte yang dapat disemir, kuat dan tangguh untuk penggunaan area indoor maupun outdoor.",
    price: 240000,
    badge: "Grade A",
    image: "/images/product/pdh doff.jpeg",
    spec: {
      bahan: "Kulit Sapi Asli Grade A Finishing Doff (Matte)",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Karet (Rubber) Anti-Selip & Jahit Melingkar",
      insole: "Busa Empuk Lapis Merry Mesh",
      fitur: "Bisa Disemir, Resleting Samping (Praktis), Awet Lapangan",
      bordir: "Logo Emboss Custom",
    },
  },
  {
    id: 6,
    name: "Sepatu PDH Upper Kulit, Slip On, Outsole Rubber, Zipper/Tali, Grade B.",
    category: "Sepatu",
    desc: "Tampilan Black Doff/Matte yang cocok untuk area indoor maupun outdoor.",
    price: 180000,
    badge: "Grade B",
    image: "/images/product/pdh doff grade b.jpeg",
    spec: {
      bahan: "Upper Kulit, Finishing Black Doff (Matte), Grade B",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Karet (Rubber)",
      insole: "Busa Empuk",
      fitur: "Slip On, Pilihan Resleting Samping atau Tali, Cocok untuk Area Indoor dan Outdoor",
      bordir: "Logo Emboss Custom",
    },
  },
  {
    id: 7,
    name: "Sepatu PDH Upper Synthetic, Slip On, Outsole Rubber, Zipper/Tali.",
    category: "Sepatu",
    desc: "Sepatu PDH berbahan upper synthetic dengan tampilan Black Doff, cocok untuk penggunaan area indoor maupun outdoor.",
    price: 140000,
    badge: "Synthetic",
    image: "/images/product/pdh diklat sintetis.jpeg",
    spec: {
      bahan: "Upper Synthetic, Finishing Black Doff (Matte)",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      outsole: "Karet (Rubber)",
      insole: "Busa Empuk",
      fitur: "Model Slip On, Pilihan Resleting Samping atau Tali, Cocok untuk Area Indoor dan Outdoor",
      bordir: "Logo Emboss Custom",
    },
  },
  {
    id: 8,
    name: "Sepatu PDH & PDL Taktis",
    category: "Sepatu",
    desc: "Sepatu PDH kilap tanpa semir dan sepatu PDL taktis dengan outsole anti-slip berdaya tahan tinggi.",
    price: 450000,
    badge: "Premium Quality",
    image: "/images/product/pdl baretta non safety.jpeg",
    spec: {
      bahan: "Kulit Sapi Asli / Synthetic Patent Leather",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      bordir: "Logo Emboss Custom",
      fitur: "Sol Anti Selip, Nyaman Dipakai Seharian",
    },
  },
  {
    id: 9,
    name: "Sepatu PDH & PDL Taktis",
    category: "Sepatu",
    desc: "Sepatu PDH kilap tanpa semir dan sepatu PDL taktis dengan outsole anti-slip berdaya tahan tinggi.",
    price: 450000,
    badge: "Premium Quality",
    image: "/images/product/pdl baretta safety.jpeg",
    spec: {
      bahan: "Kulit Sapi Asli / Synthetic Patent Leather",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      bordir: "Logo Emboss Custom",
      fitur: "Sol Anti Selip, Nyaman Dipakai Seharian",
    },
  },
  {
    id: 10,
    name: "Sepatu PDH & PDL Taktis",
    category: "Sepatu",
    desc: "Sepatu PDH kilap tanpa semir dan sepatu PDL taktis dengan outsole anti-slip berdaya tahan tinggi.",
    price: 450000,
    badge: "Premium Quality",
    image: "/images/product/pdl diklat kulit jeruk.jpeg",
    spec: {
      bahan: "Kulit Sapi Asli / Synthetic Patent Leather",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      bordir: "Logo Emboss Custom",
      fitur: "Sol Anti Selip, Nyaman Dipakai Seharian",
    },
  },
  {
    id: 11,
    name: "Sepatu PDH & PDL Taktis",
    category: "Sepatu",
    desc: "Sepatu PDH kilap tanpa semir dan sepatu PDL taktis dengan outsole anti-slip berdaya tahan tinggi.",
    price: 450000,
    badge: "Premium Quality",
    image: "/images/product/pdl mbj safety.jpeg",
    spec: {
      bahan: "Kulit Sapi Asli / Synthetic Patent Leather",
      ukuran: "39, 40, 41, 42, 43, 44, 45",
      bordir: "Logo Emboss Custom",
      fitur: "Sol Anti Selip, Nyaman Dipakai Seharian",
    },
  },
  {
    id: 12,
    name: "Jaket & Rompi Operasional",
    category: "Pakaian Operasional",
    desc: "Jaket Windbreaker dan rompi taktis dengan skotlet reflektif High-Visibility untuk patroli malam.",
    price: 300000,
    badge: "Safety & Glow",
    image: "/images/jaket-rompi.jpg",
    spec: {
      bahan: "Taslan Waterproof / Double Mesh Premium",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "Skotlet 3M Reflektif High-Vis",
      fitur: "Waterproof, Windproof & Reflektif",
    },
  },
  {
    id: 13,
    name: "Atribut & Perlengkapan Kopel",
    category: "Atribut & Aksesori",
    desc: "Kelengkapan atribut bordir, pet, dahrim, sabuk kopel rim, dan perlengkapan satpam profesional.",
    price: 150000,
    badge: "Lengkap",
    image: "/images/atribut-satpam.jpg",
    spec: {
      bahan: "Nylon Taktis, Kuningan & Kulit Sintetis",
      ukuran: "Standard / Adjustable Size",
      bordir: "Lambang BUJP & Polda Custom",
      fitur: "Finishing Rapi, Standar Regulasi",
    },
  },
  {
    id: 14,
    name: "Custom Corporate Uniform",
    category: "Perlengkapan Lainnya",
    desc: "Solusi seragam khusus manajemen, driver, cleaning service, dan staf operasional perusahaan.",
    price: 350000,
    badge: "Custom Design",
    image: "/images/custom-corporate.jpg",
    spec: {
      bahan: "Bisa Disesuaikan Permintaan Client",
      ukuran: "Tailored Custom Size Available",
      bordir: "Bordir & Cetak Brand Perusahaan",
      fitur: "Free Desain & Pembuatan Sampel",
    },
  },
];