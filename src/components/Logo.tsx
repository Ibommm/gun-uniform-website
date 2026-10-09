// src/components/Logo.tsx
import Image from "next/image";

interface LogoProps {
  showText?: boolean;
}

export default function Logo({ showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3.5">
      {/* Container Gambar Logo - Diperbesar jadi w-14 h-14 & diberi efek glow */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.35)]">
        <Image
          src="/images/logo/Logo_Gun.png" // Sesuaikan dengan path logo kamu
          alt="GUN Uniform Logo"
          fill
          sizes="(max-width: 768px) 48px, 56px"
          className="object-contain"
          priority
        />
      </div>

      {/* Teks Brand */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-black text-xl md:text-2xl tracking-wider text-white leading-tight">
            GUN <span className="text-amber-400">UNIFORM</span>
          </span>
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-amber-400/90 uppercase">
            Garda Uniform Nusantara
          </span>
        </div>
      )}
    </div>
  );
}