// src/components/Navbar.tsx
"use client";

import { generateWAUrl } from "@/data/siteData";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-amber-500/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Logo />
        </a>

        {/* Menu Navigasi Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-slate-300">
          <a href="#tentang" className="hover:text-amber-400 transition-colors">
            TENTANG GUN
          </a>
          <a href="#produk" className="hover:text-amber-400 transition-colors">
            PRODUK
          </a>
          <a href="#keunggulan" className="hover:text-amber-400 transition-colors">
            KEUNGGULAN
          </a>
          <a href="#bujp" className="hover:text-amber-400 transition-colors">
            SOLUSI BUJP
          </a>
          <a href="#alur" className="hover:text-amber-400 transition-colors">
            ALUR PESAN
          </a>
        </nav>

        {/* Tombol CTA */}
        <a
          href={generateWAUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-lg group bg-gradient-to-br from-amber-400 to-amber-600 group-hover:from-amber-400 group-hover:to-amber-500 hover:text-white text-slate-950 shadow-lg shadow-amber-500/20"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-amber-400 hover:bg-opacity-0 rounded-md">
            MINTA PENAWARAN
          </span>
        </a>
      </div>
    </header>
  );
}