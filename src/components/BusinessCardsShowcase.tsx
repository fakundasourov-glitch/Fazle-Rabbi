import React, { useState } from 'react';
import { BUSINESS_CARDS } from '../data/portfolioData';
import { BusinessCardItem } from '../types';

interface BusinessCardsShowcaseProps {
  onSelectCard: (card: BusinessCardItem) => void;
  onRequestCustom: () => void;
}

export const BusinessCardsShowcase: React.FC<BusinessCardsShowcaseProps> = ({
  onSelectCard,
  onRequestCustom,
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="business-cards-showcase"
      className="w-full py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-[#0e0e0e] relative overflow-hidden border-b border-[#4d463a]/30"
    >
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#e5c484]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#4d463a]/30 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-px bg-[#e5c484]"></span>
              <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-[0.25em] uppercase">
                STATIONERY &amp; VECTOR IDENTITY
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] font-normal">
              BRAND IDENTITY &amp;{' '}
              <span className="text-[#e5c484] italic">BUSINESS CARD SYSTEMS</span>
            </h2>
            <p className="font-body text-[15px] text-[#c7c6c6] mt-2 font-light max-w-2xl leading-relaxed">
              Comprehensive bespoke stationery design, corporate card collaterals, and identity systems tailored by Md. Fazle Rabbi with tactile minimalism, geometric balance, and fine print finishes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#2a2a2a] border border-[#e5c484] text-[#e5c484] font-tech-mono text-[11px] uppercase shadow-[0_0_15px_-4px_rgba(200,169,107,0.3)]">
              All 10 Mockup Series
            </span>
            <span className="px-3 py-1 bg-[#201f1f] border border-[#4d463a]/30 text-[#c7c6c6] font-tech-mono text-[11px] uppercase">
              Print-Ready 300 DPI
            </span>
          </div>
        </div>

        {/* Editorial Business Card Grid (10 Mockups) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_CARDS.slice(0, 9).map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden bg-[#201f1f] border border-[#4d463a]/30 hover:border-[#e5c484]/60 transition-all duration-500 flex flex-col justify-between shadow-xl"
            >
              {/* Card Image Area */}
              <div
                className="relative aspect-square overflow-hidden bg-[#1c1b1b] cursor-pointer"
                onClick={() => onSelectCard(card)}
              >
                <img
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={card.imageUrl}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201f1f] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-[#0e0e0e]/90 backdrop-blur-md text-[#e5c484] font-tech-mono text-[11px] uppercase tracking-widest border border-[#e5c484]/30">
                    {card.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-4 font-tech-mono text-[11px] text-[#d0c5b5]">
                  {card.seriesNumber}
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-[#201f1f]">
                <div>
                  <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-widest uppercase block mb-1">
                    {card.category}
                  </span>
                  <h3
                    onClick={() => onSelectCard(card)}
                    className="font-serif-display text-xl text-[#e5e2e1] group-hover:text-[#e5c484] transition-colors cursor-pointer"
                  >
                    {card.title}
                  </h3>
                  <p className="font-body text-[13px] text-[#c7c6c6] mt-2 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#4d463a]/25 flex items-center justify-between font-tech-mono text-[11px] text-[#998f81]">
                  <span>{card.format}</span>
                  <span className="text-[#e5c484] font-tech-mono text-[11px]">
                    {card.finishType}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Card 10: Interlocking Amber / Burgundy Ribbon Card (Span across full width on desktop) */}
          {BUSINESS_CARDS[9] && (
            <div className="group relative overflow-hidden bg-[#201f1f] border border-[#4d463a]/30 hover:border-[#e5c484]/60 transition-all duration-500 flex flex-col justify-between shadow-xl md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div
                  className="lg:col-span-7 relative aspect-square sm:aspect-[16/10] lg:aspect-auto lg:h-[380px] overflow-hidden bg-[#1c1b1b] cursor-pointer"
                  onClick={() => onSelectCard(BUSINESS_CARDS[9])}
                >
                  <img
                    alt={BUSINESS_CARDS[9].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={BUSINESS_CARDS[9].imageUrl}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201f1f] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>

                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-[#0e0e0e]/90 backdrop-blur-md text-[#e5c484] font-tech-mono text-[11px] uppercase tracking-widest border border-[#e5c484]/30">
                      {BUSINESS_CARDS[9].badge}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between h-full bg-[#201f1f]">
                  <div>
                    <div className="flex items-center gap-2 font-tech-mono text-[11px] text-[#e5c484] tracking-widest uppercase mb-2">
                      <span>IDENTITY SYSTEM</span>
                      <span>•</span>
                      <span>SERIES 10/10</span>
                    </div>
                    <h3
                      onClick={() => onSelectCard(BUSINESS_CARDS[9])}
                      className="font-serif-display text-2xl sm:text-3xl text-[#e5e2e1] group-hover:text-[#e5c484] transition-colors cursor-pointer"
                    >
                      {BUSINESS_CARDS[9].title}
                    </h3>
                    <p className="font-body text-[15px] text-[#c7c6c6] mt-3 font-light leading-relaxed">
                      {BUSINESS_CARDS[9].description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#4d463a]/30 flex flex-wrap items-center justify-between gap-3">
                    <div className="font-tech-mono text-[11px] text-[#998f81]">
                      <span>{BUSINESS_CARDS[9].format}</span>
                    </div>
                    <button
                      type="button"
                      onClick={onRequestCustom}
                      className="inline-flex items-center gap-1 font-tech-mono text-[11px] text-[#e5c484] tracking-widest uppercase hover:underline cursor-pointer font-semibold"
                    >
                      REQUEST CUSTOM STATIONERY →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
