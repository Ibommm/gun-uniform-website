// src/components/FloatingWA.tsx
"use client";

import { generateWAUrl } from "@/data/siteData";
import { MessageCircle } from "lucide-react";

export default function FloatingWA() {
  return (
    <a
      href={generateWAUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 transition-transform hover:scale-105 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-bold pr-1">
        Konsultasi WA
      </span>
    </a>
  );
}