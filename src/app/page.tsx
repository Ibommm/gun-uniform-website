// src/app/page.tsx
import Footer from "@/components/Footer";
import { SITE_CONFIG, PRODUCTS, ADVANTAGES, ORDER_STEPS, FAQS, generateWAUrl } from "@/data/siteData";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950">
      <div>
        {/* 1. HERO SECTION ELEGAN */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 border-b border-amber-500/10">
          {/* Background Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-8 shadow-inner shadow-amber-500/10">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              {SITE_CONFIG.tagline}
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.15]">
              SERAGAM SATPAM PROFESIONAL <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                UNTUK INDONESIA
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Membangun kewibawaan dan identitas institusi melalui seragam berstandar nasional. Solusi pengadaan terpercaya untuk BUJP & Perusahaan di seluruh penjuru Nusantara.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={generateWAUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 font-extrabold px-9 py-4 rounded-xl shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 text-base"
              >
                MINTA PENAWARAN SEKARANG
              </a>
              <a
                href="#produk"
                className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold px-9 py-4 rounded-xl border border-slate-700/80 transition-all text-base backdrop-blur-sm"
              >
                LIHAT KATALOG PRODUK
              </a>
            </div>
          </div>
        </section>

        {/* 2. SIAPA GUN UNIFORM? */}
        <section id="tentang" className="py-24 bg-slate-900/30 border-b border-slate-800/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-3 block">
                TENTANG GARDA UNIFORM NUSANTARA
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                LEBIH DARI SEKADAR SERAGAM. KAMI MEMBANGUN STANDAR KUALITAS.
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                GUN Uniform hadir sebagai partner strategis pengadaan seragam satpam dan operasional perusahaan. Berfokus pada 6 pilar utama: <span className="text-amber-400 font-semibold">Kualitas Premium • Ukuran Presisi • Ketepatan Jumlah • Waktu Tepat • Pengiriman Aman • Garansi Resmi</span>.
              </p>
            </div>
          </div>
        </section>

        {/* 3. KATALOG PRODUK LENGKAP */}
        <section id="produk" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-bold text-xs tracking-widest uppercase block mb-2">
              EXCELLENCE & STANDARIZATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">KATALOG PRODUK UTAMA</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Memenuhi standar regulasi resmi dengan spesifikasi material pilihan berdaya tahan tinggi dan kenyamanan maksimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm"
              >
                {/* Badge Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {product.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded">
                    {product.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{product.desc}</p>

                  {/* Rincian Spesifikasi */}
                  <div className="space-y-2 border-t border-slate-800/80 pt-5 text-xs text-slate-300">
                    <p className="flex justify-between">
                      <span className="text-slate-500">Bahan Utama:</span>
                      <span className="font-medium text-slate-200">{product.spec.bahan}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-500">Ukuran:</span>
                      <span className="font-medium text-slate-200">{product.spec.ukuran}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-500">Bordir / Finishing:</span>
                      <span className="font-medium text-slate-200">{product.spec.bordir}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-500">Keunggulan:</span>
                      <span className="font-medium text-amber-400/90">{product.spec.fitur}</span>
                    </p>
                  </div>
                </div>

                <a
                  href={generateWAUrl(`Halo GUN Uniform, saya tertarik dengan produk ${product.name}. Mohon informasi spesifikasi & harga.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full text-center bg-slate-800/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold py-3 rounded-xl transition-all duration-200 text-sm tracking-wide border border-slate-700/60 hover:border-amber-400"
                >
                  Konsultasi Produk Ini
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 4. MENGAPA MEMILIH GUN UNIFORM? */}
        <section id="keunggulan" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase block mb-2">WHY CHOOSE US</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">KEUNGGULAN PENGADAAN KAMI</h2>
              <p className="text-slate-400">Kepastian kualitas & ketepatan pengiriman untuk kelancaran operasional Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {ADVANTAGES.map((item) => (
                <div
                  key={item.num}
                  className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group"
                >
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 block mb-3 group-hover:scale-105 transition-transform">
                    {item.num}
                  </span>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SOLUSI BUJP & SKALA BESAR */}
        <section id="bujp" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/30 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="relative z-10">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase block mb-3">
                UNTUK PERUSAHAAN & BUJP
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                PENGADAAN SKALA 100 HINGGA 10.000+ SET?
              </h2>
              <p className="text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
                Kami berpengalaman melayani pengadaan instansi dan BUJP berskala nasional. Dapatkan Surat Penawaran Resmi, opsi pembayaran fleksibel, serta pengiriman bertahap sesuai jadwal proyek Anda.
              </p>
            </div>
            <a
              href={generateWAUrl("Halo GUN Uniform, saya ingin mengajukan diskusi pengadaan seragam skala BUJP / Perusahaan.")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-8 py-4 rounded-xl text-base shrink-0 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              Diskusi Pengadaan BUJP
            </a>
          </div>
        </section>

        {/* 6. ALUR ORDER */}
        <section id="alur" className="py-24 bg-slate-900/40 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase block mb-2">WORKFLOW</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">ALUR PEMESANAN PRAKTIS</h2>
              <p className="text-slate-400">Transparan, terstruktur, dan terjamin hingga seragam tiba di lokasi Anda.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {ORDER_STEPS.map((step) => (
                <div key={step.step} className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 relative flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md mb-3 inline-block border border-amber-500/20">
                      STEP {step.step}
                    </span>
                    <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">PERTANYAAN UMUM (FAQ)</h2>
            <p className="text-slate-400 text-sm">Informasi seputar garansi, waktu produksi, dan kustomisasi.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-3">
                  <span className="text-amber-400 font-black">Q:</span> {faq.q}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}