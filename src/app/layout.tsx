// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // <-- Cek import ini
import FloatingWA from "@/components/FloatingWA";
// src/app/layout.tsx

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GUN Uniform | Garda Uniform Nusantara - Produsen Seragam Satpam",
  description: "PT Garda Uniform Nusantara (GUN Uniform) adalah produsen & konveksi seragam satpam resmi, PDH, PDL, sepatu, dan atribut BUJP berstandar nasional.",
  keywords: ["PT GUN", "GUN Uniform", "Garda Uniform Nusantara", "Seragam Satpam", "Konveksi Seragam BUJP"],
  openGraph: {
    title: "GUN Uniform | Garda Uniform Nusantara",
    description: "Produsen & Konveksi Seragam Satpam Resmi Berstandar Nasional.",
    url: "https://domain-kamu.com", // Ganti dengan domain asli
    siteName: "GUN Uniform",
    images: [
      {
        url: "/images/logo/Logo-Gun.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased relative`}>
        <Navbar /> {/* <-- Cek keberadaan komponen ini */}
        <main>{children}</main>
        <FloatingWA />
      </body>
    </html>
  );
}