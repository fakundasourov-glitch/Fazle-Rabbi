import React from 'react';
import { Camera, Video, Film, Wand2, Palette } from 'lucide-react';
import { SERVICE_PILLARS } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'photo_camera':
        return <Camera className="w-8 h-8 text-[#998f81] group-hover:text-[#e5c484] transition-colors" />;
      case 'videocam':
        return <Video className="w-8 h-8 text-[#998f81] group-hover:text-[#e5c484] transition-colors" />;
      case 'movie_filter':
        return <Film className="w-8 h-8 text-[#998f81] group-hover:text-[#e5c484] transition-colors" />;
      case 'auto_fix_high':
        return <Wand2 className="w-8 h-8 text-[#998f81] group-hover:text-[#e5c484] transition-colors" />;
      case 'palette':
        return <Palette className="w-8 h-8 text-[#998f81] group-hover:text-[#e5c484] transition-colors" />;
      default:
        return <Camera className="w-8 h-8 text-[#998f81]" />;
    }
  };

  return (
    <section id="services" className="w-full py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-[#131313]">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#4d463a]/30 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#e5c484]"></span>
              <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-[0.25em] uppercase">
                PRACTICE AREAS
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] font-normal">
              SERVICES &amp; <span className="text-[#e5c484] italic">CAPABILITIES</span>
            </h2>
          </div>
          <p className="font-body text-[15px] text-[#c7c6c6] font-light max-w-md">
            End-to-end visual execution from initial brand treatment and camera operation to final archival-grade color grading and print collaterals.
          </p>
        </div>

        {/* 5 Pillars Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_PILLARS.map((pillar) => {
            const isFeatured = pillar.featured;
            return (
              <div
                key={pillar.number}
                onClick={() => onSelectService(pillar.title)}
                className={`group p-8 bg-[#1c1b1b] border border-[#4d463a]/25 hover:border-[#e5c484]/40 transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-widest">
                      {pillar.number}
                    </span>
                    {getIcon(pillar.icon)}
                  </div>
                  <h3 className="font-serif-display text-2xl text-[#e5e2e1] mb-2 group-hover:text-[#e5c484] transition-colors">
                    {pillar.title}
                  </h3>
                  <p
                    className={`font-body text-[14px] text-[#c7c6c6] font-light leading-relaxed ${
                      isFeatured ? 'max-w-2xl' : ''
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#4d463a]/20 flex flex-wrap items-center justify-between gap-2 font-tech-mono text-[11px] text-[#998f81]">
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {pillar.tags.map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        <span className="text-[#d0c5b5]">{tag}</span>
                        {tIdx < pillar.tags.length - 1 && <span>•</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <span className="text-[#e5c484] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-[11px]">
                    INQUIRE →
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
