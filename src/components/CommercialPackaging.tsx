import React from 'react';
import { COMMERCIAL_PRODUCTS } from '../data/portfolioData';
import { CommercialProduct } from '../types';

interface CommercialPackagingProps {
  onInquireAsset: (product: CommercialProduct) => void;
  onViewProduct: (product: CommercialProduct) => void;
}

export const CommercialPackaging: React.FC<CommercialPackagingProps> = ({
  onInquireAsset,
  onViewProduct,
}) => {
  return (
    <section
      id="commercial-product-design"
      className="w-full py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-[#131313] border-t border-b border-[#4d463a]/30 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e5c484]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#4d463a]/30 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-px bg-[#e5c484]"></span>
              <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-[0.25em] uppercase">
                COMMERCIAL ARCHIVE &amp; PACKAGING
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] font-normal">
              COMMERCIAL PRODUCT DESIGN &amp;{' '}
              <span className="text-[#e5c484] italic">3D PACKAGING</span>
            </h2>
            <p className="font-body text-[15px] text-[#c7c6c6] mt-2 font-light max-w-2xl leading-relaxed">
              High-fidelity commercial product mockups, 3D packaging visualization, and digital matte lighting engineered for prestige luxury houses and cosmetics portfolios.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-[#2a2a2a] border border-[#e5c484]/40 text-[#e5c484] font-tech-mono text-[11px] uppercase">
              3D Packaging
            </span>
            <span className="px-3 py-1 bg-[#201f1f] border border-[#4d463a]/30 text-[#d0c5b5] font-tech-mono text-[11px] uppercase">
              Product Retouch
            </span>
            <a
              className="px-3 py-1 bg-[#201f1f] border border-[#e5c484]/40 text-[#e5c484] font-tech-mono text-[11px] uppercase hover:bg-[#e5c484] hover:text-[#131313] transition-all"
              href="#business-cards-showcase"
            >
              Explore Stationery Systems ↓
            </a>
          </div>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {COMMERCIAL_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="md:col-span-6 group relative overflow-hidden bg-[#1c1b1b] border border-[#4d463a]/30 flex flex-col justify-between hover:border-[#e5c484]/50 transition-all duration-500 shadow-2xl"
            >
              {/* Image Stage */}
              <div
                className="relative aspect-square overflow-hidden bg-[#0e0e0e] cursor-pointer"
                onClick={() => onViewProduct(prod)}
              >
                <img
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={prod.imageUrl}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/90 via-[#0e0e0e]/20 to-transparent opacity-75 group-hover:opacity-50 transition-opacity"></div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#0e0e0e]/90 backdrop-blur-md text-[#e5c484] font-tech-mono text-[11px] uppercase tracking-widest border border-[#e5c484]/30">
                    {prod.badge}
                  </span>
                  <span className="px-2.5 py-1 bg-[#2a2a2a]/80 backdrop-blur-md text-[#c7c6c6] font-tech-mono text-[11px] tracking-wider">
                    {prod.subBadge}
                  </span>
                </div>

                {/* Bottom Specifications */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-tech-mono text-[11px] text-[#d0c5b5] px-2">
                  <span className="text-[#e5c484]">{prod.specLeft}</span>
                  <span>{prod.specRight}</span>
                </div>
              </div>

              {/* Information Card */}
              <div className="p-6 flex flex-col justify-between bg-[#201f1f] flex-1">
                <div>
                  <div className="flex items-center gap-2 font-tech-mono text-[11px] text-[#e5c484] tracking-widest uppercase mb-1.5">
                    <span>{prod.tagline}</span>
                  </div>
                  <h3
                    onClick={() => onViewProduct(prod)}
                    className="font-serif-display text-xl sm:text-2xl text-[#e5e2e1] group-hover:text-[#e5c484] transition-colors cursor-pointer"
                  >
                    {prod.title}
                  </h3>
                  <p className="font-body text-[13px] text-[#c7c6c6] mt-2 font-light leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#4d463a]/25 flex items-center justify-between font-tech-mono text-[11px] text-[#998f81]">
                  <span>CLIENT: {prod.client}</span>
                  <button
                    type="button"
                    onClick={() => onInquireAsset(prod)}
                    className="inline-flex items-center gap-1 font-tech-mono text-[11px] text-[#e5c484] tracking-widest uppercase group-hover:translate-x-1 transition-transform cursor-pointer hover:underline"
                  >
                    <span>INQUIRE ASSET →</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
