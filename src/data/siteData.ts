// src/data/siteData.ts

export const SITE_CONFIG = {
  name: "GUN Uniform",
  fullName: "Garda Uniform Nusantara",
  tagline: "STANDAR NASIONAL SERAGAM SATPAM",
  subTagline: "ELEGANCE & PROTECTION IN EVERY THREAD",
  whatsappNumber: "62895388150193",
};

export const PRODUCTS = [
  {
    id: "pdh-satpam",
    name: "Seragam PDH Satpam",
    category: "Pakaian Utama",
    desc: "Pakaian Dinas Harian standar resmi dengan potongan tailored modern yang elegan untuk pelayanan indoor.",
    badge: "Best Seller",
    spec: {
      bahan: "American Drill Premium / Japan Drill",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "Bordir Komputer Presisi Tinggi",
      fitur: "Tahan Kusut, Adem, Warna Tahan Lama",
    },
  },
  {
    id: "pdl-satpam",
    name: "Seragam PDL Satpam",
    category: "Pakaian Utama",
    desc: "Pakaian Dinas Lapangan berkekuatan tinggi, tahan gesekan, serta dirancang untuk pergerakan taktis.",
    badge: "Taktis & Kuat",
    spec: {
      bahan: "Ripstop Premium / Drill Tebal Heavy Duty",
      ukuran: "S, M, L, XL, XXL, XXXL",
      bordir: "Bordir Timbul / Taktis Velcro",
      fitur: "Jahitan Rantai Ganda, Anti Sobek",
    },
  },
  {
    id: "diklat-satpam",
    name: "Seragam Diklat Satpam",
    category: "Pendidikan",
    desc: "Perlengkapan seragam resmi untuk siswa pelatihan Gada Pratama, Gada Madya, dan Gada Utama.",
    badge: "Standar Polri",
    spec: {
      bahan: "Kain Keras Ekstra Tahan Gesekan",
      ukuran: "S, M, L, XL, XXL",
      bordir: "Atribut Lengkap Kualifikasi",
      fitur: "Dirancang Khusus Kegiatan Lapangan Berat",
    },
  },
  {
    id: "sepatu-pdh-pdl",
    name: "Sepatu PDH & PDL Taktis",
    category: "Alas Kaki",
    desc: "Sepatu PDH kilap tanpa semir & Sepatu PDL PDL Taktis out-sole anti slip berdaya tahan tinggi.",
    badge: "Premium Quality",
    spec: {
      bahan: "Kulit Sapi Asli / Synthetic Patent Leather",
      ukuran: "39 - 45",
      bordir: "Logo Emboss Custom",
      fitur: "Sol Anti Selip, Nyaman Dipakai Seharian",
    },
  },
  {
    id: "jaket-rompi-satpam",
    name: "Jaket & Rompi Operasional",
    category: "Outerwear",
    desc: "Jaket Windbreaker & Rompi Taktis dengan skotlet reflektif High-Visibility untuk patroli malam.",
    badge: "Safety & Glow",
    spec: {
      bahan: "Taslan Waterproof / Double Mesh Premium",
      ukuran: "S - XXXL",
      bordir: "Skotlet 3M Reflektif High-Vis",
      fitur: "Waterproof, Windproof & Reflektif",
    },
  },
  {
    id: "aksesoris-atribut",
    name: "Atribut & Perlengkapan Kopel",
    category: "Aksesoris",
    desc: "Kelengkapan atribut bordir, pet, dahrim, sabuk kopel rim, dan perlengkapan satpam profesional.",
    badge: "Lengkap",
    spec: {
      bahan: "Nylon Taktis, Kuningan & Kulit Sintetis",
      ukuran: "Standard / Adjustable Size",
      bordir: "Lambang BUJP & Polda Custom",
      fitur: "Finishing Rapi, Standar Regulasi",
    },
  },
  {
    id: "custom-corporate",
    name: "Custom Corporate Uniform",
    category: "Special Project",
    desc: "Solusi seragam khusus manajemen, driver, cleaning service, & staf operasional perusahaan.",
    badge: "Custom Design",
    spec: {
      bahan: "Bisa Disesuaikan Permintaan Client",
      ukuran: "Tailored Custom Size Available",
      bordir: "Bordir & Cetak Brand Perusahaan",
      fitur: "Free Desain & Pembuatan Sampel",
    },
  },
];

export const generateWAUrl = (customText?: string) => {
  const defaultText = `Halo GUN Uniform, saya ingin konsultasi kebutuhan seragam Satpam.

Nama/Perusahaan: 
Jumlah kebutuhan: 
Jenis seragam: 
Lokasi pengiriman: 
Waktu kebutuhan: `;

  const textToEncode = customText || defaultText;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(textToEncode)}`;
};

export const ADVANTAGES = [
  {
    num: "01",
    title: "Quality Control Multi-Stage",
    desc: "Pemeriksaan ketat dari bahan mentah, proses jahit, hingga finishing akhir demi presisi 100%.",
  },
  {
    num: "02",
    title: "Skema Pengadaan Terencana",
    desc: "Siap melayani pengadaan berkala bertahap sesuai kebutuhan operasional dan budget perusahaan.",
  },
  {
    num: "03",
    title: "Kapasitas Ribuan Set / Bulan",
    desc: "Dukungan konveksi berstandar industri untuk menangani order skala kecil hingga puluhan ribu set.",
  },
  {
    num: "04",
    title: "Pengiriman Aman Seluruh Nusantara",
    desc: "Jaringan logistik terpercaya sampai ke pelosok proyek operasional Anda di seluruh Indonesia.",
  },
  {
    num: "05",
    title: "Layanan Sampel & Garansi",
    desc: "Fasilitas sampel pra-produksi dan jaminan garansi penggantian jika terdapat ketidaksesuaian.",
  },
];

export const ORDER_STEPS = [
  { step: "01", title: "Konsultasi Kebutuhan", desc: "Diskusi spesifikasi, jumlah, dan jadwalkan timeline pengadaan." },
  { step: "02", title: "Penawaran Resmi", desc: "Kami terbitkan Surat Penawaran Harga (SPH) & opsi sampel bahan." },
  { step: "03", title: "Persetujuan Sampel", desc: "Pembuatan & konfirmasi sampel fisik sebelum produksi massal." },
  { step: "04", title: "Produksi Massal", desc: "Proses jahit & bordir dengan pengawasan standar QC ketat." },
  { step: "05", title: "Final Inspection", desc: "Pengecekan jumlah, ukuran, dan kelayakan paking per set." },
  { step: "06", title: "Pengiriman & Serah Terima", desc: "Ekspedisi aman hingga sampai di lokasi tujuan tepat waktu." },
];

export const FAQS = [
  {
    q: "Apakah GUN Uniform menyediakan garansi retur jika ukuran tidak sesuai?",
    a: "Ya, kami memberikan garansi penggantian jika ada cacat produksi atau ketidaksesuaian spesifikasi dari sampel yang telah disetujui bersama.",
  },
  {
    q: "Berapa lama proses pembuatan sampel dan produksi massal?",
    a: "Pembuatan sampel memakan waktu 3–5 hari kerja, sedangkan produksi massal berkisar antara 14–30 hari tergantung jumlah pesanan.",
  },
  {
    q: "Apakah bisa request bordir logo BUJP dan Polda lokal?",
    a: "Sangat bisa. Kami memproduksi atribut bordir komputer berpresisi tinggi sesuai regulasi daerah dan identitas BUJP Anda.",
  },
];