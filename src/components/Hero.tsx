import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_BACKDROP } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 md:px-16 bg-[#0e0e0e] overflow-hidden"
    >
      {/* Immersive Cinematic Backdrop with scrim */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out scale-[1.02]"
        style={{ backgroundImage: `url('${HERO_BACKDROP}')` }}
      />

      {/* Layered filmic radial scrim for pristine legibility and vivid depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/55 to-[#0e0e0e]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#131313]/50 to-[#0e0e0e]/85" />

      {/* Top Metadata Ribbon (Inside Hero) */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-b border-[#4d463a]/25 pb-4 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#201f1f]/60 backdrop-blur-md border border-[#e5c484]/30">
          <span className="inline-block w-2 h-2 rounded-full bg-[#e5c484] animate-pulse"></span>
          <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-[0.2em] uppercase">
            BASED IN SIRAJGANJ, BANGLADESH
          </span>
        </div>

        <div className="font-tech-mono text-[12px] text-[#d0c5b5] flex flex-wrap items-center gap-2 sm:gap-3">
          <span>LAT: 24.4534° N</span>
          <span className="text-[#4d463a]">•</span>
          <span>LON: 89.7008° E</span>
          <span className="text-[#4d463a]">•</span>
          <span className="text-[#e5c484] font-medium">AVAILABLE WORLDWIDE</span>
        </div>
      </div>

      {/* Central Majestic Hero Typography */}
      <div className="relative z-10 my-auto py-12 md:py-20 flex flex-col max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-px bg-[#e5c484]"></span>
          <p className="font-tech-mono text-[11px] sm:text-[12px] tracking-[0.3em] text-[#e5c484] uppercase">
            AUTEUR CINEMATOGRAPHY &amp; STILL EXHIBITION
          </p>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] text-[#e5e2e1] uppercase tracking-tight leading-[0.95] mb-4 font-normal">
          MD. FAZLE <span className="text-[#e5c484] italic">RABBI</span>
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-tech-mono text-[11px] sm:text-[13px] text-[#c7c6c6] tracking-[0.25em] uppercase mb-6">
          <span className="hover:text-[#e5e2e1] transition-colors">PHOTOGRAPHER</span>
          <span className="text-[#e5c484] font-bold">✦</span>
          <span className="hover:text-[#e5e2e1] transition-colors">FILMMAKER</span>
          <span className="text-[#e5c484] font-bold">✦</span>
          <span className="hover:text-[#e5e2e1] transition-colors">VISUAL &amp; BRAND DESIGNER</span>
        </div>

        <p className="font-body text-[16px] sm:text-[18px] text-[#c7c6c6] max-w-2xl font-light mb-8 leading-relaxed">
          Capturing moments. Creating stories. Designing visual experiences through calculated light, anamorphic textures, brand identity systems, and poetic framing.
        </p>

        {/* CTA Action Bar */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#selected-works"
            onClick={(e) => {
              e.preventDefault();
              onExploreClick();
            }}
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#c8a96b] text-[#131313] font-tech-mono text-[12px] uppercase tracking-widest font-semibold rounded-none shadow-[0_0_35px_-5px_rgba(200,169,107,0.35)] hover:bg-[#e5c484] transition-all duration-300 cursor-pointer"
          >
            <span>VIEW MY WORK</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#201f1f]/40 backdrop-blur-md border border-[#e5c484]/30 text-[#e5e2e1] font-tech-mono text-[12px] uppercase tracking-widest hover:border-[#e5c484] hover:bg-[#201f1f] transition-all duration-300 cursor-pointer"
          >
            <span>CONTACT ME</span>
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Camera Specs */}
      <div className="relative z-10 w-full flex items-end justify-between border-t border-[#4d463a]/25 pt-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-tech-mono text-[11px] text-[#998f81]">
          <span className="w-1.5 h-1.5 bg-[#e5c484]/70 rounded-full"></span>
          <span className="tracking-[0.2em] text-[#c7c6c6]">ARCHIVE 2024 / 2025</span>
        </div>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="font-tech-mono text-[11px] text-[#d0c5b5] group-hover:text-[#e5c484] tracking-[0.25em] transition-colors uppercase">
            SCROLL TO EXPLORE
          </span>
          <div className="w-px h-8 bg-[#4d463a]/50 relative overflow-hidden">
            <div className="w-full h-1/2 bg-[#e5c484] animate-bounce"></div>
          </div>
        </a>

        <div className="hidden sm:flex items-center gap-2 font-tech-mono text-[12px] text-[#d0c5b5]">
          <span>FILM STOCK // 2.39:1 CINEMATIC</span>
        </div>
      </div>
    </section>
  );
};
