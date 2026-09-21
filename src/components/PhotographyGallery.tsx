import React, { useState } from 'react';
import { PHOTOGRAPHY_ITEMS } from '../data/portfolioData';
import { PhotoCategory, PhotoItem } from '../types';

interface PhotographyGalleryProps {
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const PhotographyGallery: React.FC<PhotographyGalleryProps> = ({ onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('ALL');

  const categories: PhotoCategory[] = [
    'ALL',
    'PORTRAIT',
    'NATURE & WILDLIFE',
    'LIFESTYLE',
    'DOCUMENTARY',
    'MACRO',
  ];

  const filteredPhotos =
    activeCategory === 'ALL'
      ? PHOTOGRAPHY_ITEMS
      : PHOTOGRAPHY_ITEMS.filter((p) => p.category === activeCategory);

  return (
    <section id="photography" className="w-full py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-[#131313]">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#4d463a]/30 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#e5c484]"></span>
              <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-[0.25em] uppercase">
                STILL ARCHIVE
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] font-normal">
              PHOTOGRAPHY
            </h2>
            <p className="font-body text-[15px] text-[#c7c6c6] mt-2 font-light max-w-xl">
              Every frame tells a story. I focus on capturing emotion, atmosphere, people and meaningful moments through light and composition.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 font-tech-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2a2a2a] border border-[#e5c484] text-[#e5c484] shadow-[0_0_20px_-5px_rgba(200,169,107,0.25)] font-semibold'
                      : 'bg-[#201f1f] border border-[#4d463a]/30 text-[#d0c5b5] hover:border-[#e5c484]/40 hover:text-[#e5e2e1]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Photographic Gallery Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {filteredPhotos.map((photo) => {
            const colSpan =
              photo.colSpan === 7
                ? 'lg:col-span-7'
                : photo.colSpan === 5
                ? 'lg:col-span-5'
                : photo.colSpan === 6
                ? 'lg:col-span-6'
                : photo.colSpan === 12
                ? 'lg:col-span-12'
                : 'lg:col-span-4';

            return (
              <div
                key={photo.id}
                onClick={() => onSelectPhoto(photo)}
                className={`${colSpan} relative group overflow-hidden bg-[#1c1b1b] border border-[#4d463a]/30 flex flex-col justify-between hover:border-[#e5c484]/50 transition-all duration-500 cursor-pointer shadow-xl`}
              >
                <div
                  className={`relative ${
                    photo.aspectRatio === '16/10'
                      ? 'aspect-[16/10]'
                      : photo.aspectRatio === '2.39/1'
                      ? 'aspect-[2.39/1]'
                      : 'aspect-[4/5]'
                  } overflow-hidden bg-[#0e0e0e]`}
                >
                  <img
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={photo.imageUrl}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {photo.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-[#0e0e0e]/90 backdrop-blur-md text-[#e5c484] font-tech-mono text-[11px] uppercase tracking-widest border border-[#e5c484]/30">
                        {photo.badge}
                      </span>
                    </div>
                  )}

                  {/* Camera EXIF Badge */}
                  <div className="absolute bottom-4 left-4 bg-[#0e0e0e]/90 backdrop-blur-md px-3 py-1.5 border border-[#e5c484]/25">
                    <div className="font-tech-mono text-[11px] text-[#e5c484] tracking-wider uppercase">
                      {photo.series}
                    </div>
                    <div className="font-tech-mono text-[11px] text-[#c7c6c6] mt-0.5">
                      {photo.exif}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#201f1f]">
                  <div>
                    <span className="font-body text-[15px] text-[#e5e2e1] group-hover:text-[#e5c484] transition-colors block font-medium">
                      {photo.title}
                    </span>
                    {photo.subtitle && (
                      <span className="font-body text-[13px] text-[#c7c6c6] font-light mt-0.5 block">
                        {photo.subtitle}
                      </span>
                    )}
                  </div>
                  <span className="font-tech-mono text-[11px] text-[#998f81] tracking-widest whitespace-nowrap">
                    {photo.frameNumber}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
