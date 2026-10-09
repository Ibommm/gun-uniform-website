// src/components/Footer.tsx
import { SITE_CONFIG } from "@/data/siteData";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo />
          <p className="text-xs text-slate-500 mt-2">
            Mitra Pengadaan Seragam Satpam & Operasional Perusahaan Berstandar Nasional.
          </p>
        </div>

        <div className="text-center md:text-right text-xs text-slate-500 space-y-1">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights reserved.</p>
          <p className="text-slate-600">Terpercaya • Berkualitas • Tepat Waktu</p>
        </div>
      </div>
    </footer>
  );
}