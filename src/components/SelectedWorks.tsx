import React, { useState } from 'react';
import { ArrowRight, Star, Film, Clapperboard, Sliders, Aperture } from 'lucide-react';
import { SELECTED_WORKS } from '../data/portfolioData';
import { WorkCategory, WorkProject } from '../types';

interface SelectedWorksProps {
  onSelectProject: (project: WorkProject) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('ALL');

  const categories: WorkCategory[] = [
    'ALL',
    'PHOTOGRAPHY',
    'CINEMATOGRAPHY',
    'VIDEOGRAPHY',
    '3D PACKAGING',
    'BUSINESS CARDS & BRANDING',
  ];

  const filteredProjects =
    activeCategory === 'ALL'
      ? SELECTED_WORKS
      : SELECTED_WORKS.filter((p) => p.category === activeCategory);

  return (
    <section id="selected-works" className="w-full py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-[#0e0e0e]">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#4d463a]/30 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#e5c484]"></span>
              <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-[0.25em] uppercase">
                CURATED EXHIBITION
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] font-normal">
              SELECTED <span className="text-[#e5c484] italic">WORKS</span>
            </h2>
            <p className="font-body text-[15px] text-[#c7c6c6] mt-2 font-light max-w-xl">
              A curated collection of photography, films, videos, editing, business card stationery systems and commercial 3D design.
            </p>
          </div>

          {/* Interactive Category Filters */}
          <div className="flex flex-wrap gap-1.5 bg-[#1c1b1b] p-1.5 border border-[#4d463a]/30">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    if (cat === '3D PACKAGING') {
                      const el = document.getElementById('commercial-product-design');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (cat === 'BUSINESS CARDS & BRANDING') {
                      const el = document.getElementById('business-cards-showcase');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`px-3 py-1.5 font-tech-mono text-[11px] tracking-widest uppercase transition-all ${
                    isActive
                      ? 'bg-[#e5c484] text-[#131313] font-bold shadow-[0_0_12px_rgba(229,196,132,0.3)]'
                      : 'text-[#d0c5b5] hover:text-[#e5e2e1] hover:bg-[#2a2a2a]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Masonry Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredProjects.map((project) => {
            const isWide = project.colSpanDesktop === 8;
            return (
              <div
                key={project.id}
                className={`${
                  isWide ? 'md:col-span-8' : 'md:col-span-4'
                } group relative overflow-hidden bg-[#201f1f] border border-[#4d463a]/30 flex flex-col justify-between hover:border-[#e5c484]/50 transition-all duration-500 shadow-xl`}
              >
                {/* Media or Slate Container */}
                {project.imageUrl && !project.isTextOnly ? (
                  <div
                    className="relative w-full overflow-hidden bg-[#0e0e0e] cursor-pointer"
                    onClick={() => onSelectProject(project)}
                  >
                    <div
                      className={`${
                        isWide
                          ? 'aspect-[16/9]'
                          : project.aspectRatio === '4/5'
                          ? 'aspect-[4/5]'
                          : 'aspect-[16/10]'
                      } w-full overflow-hidden relative`}
                    >
                      <img
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        src={project.imageUrl}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/25 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>

                      {/* Top Badges */}
                      {project.badge && (
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="px-2.5 py-1 bg-[#0e0e0e]/90 backdrop-blur-md text-[#e5c484] font-tech-mono text-[11px] uppercase tracking-widest border border-[#e5c484]/30 flex items-center gap-1.5">
                            <Star size={11} className="fill-[#e5c484]" />
                            {project.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Typographic Production Slate Monitor (Strictly No Photo) */
                  <div
                    className="relative w-full bg-[#141414] border-b border-[#4d463a]/30 p-6 sm:p-8 cursor-pointer flex flex-col justify-between overflow-hidden"
                    onClick={() => onSelectProject(project)}
                  >
                    {/* Viewfinder Corner Reticles */}
                    <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#e5c484]/50 pointer-events-none"></div>
                    <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#e5c484]/50 pointer-events-none"></div>
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#e5c484]/50 pointer-events-none"></div>
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#e5c484]/50 pointer-events-none"></div>

                    {/* Top Telemetry Slate Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#4d463a]/30 pb-3 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 text-red-400 font-tech-mono text-[11px] font-bold tracking-widest uppercase">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                          REC // 4K CINEMA DNG RAW
                        </span>
                        <span className="hidden sm:inline text-[#4d463a]">•</span>
                        <span className="font-tech-mono text-[11px] text-[#998f81]">
                          TC 00:02:45:18
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.badge && (
                          <span className="px-2.5 py-0.5 bg-[#252424] text-[#e5c484] font-tech-mono text-[10px] uppercase tracking-widest border border-[#e5c484]/30 flex items-center gap-1">
                            <Star size={10} className="fill-[#e5c484]" />
                            {project.badge}
                          </span>
                        )}
                        <span className="font-tech-mono text-[10px] px-2 py-0.5 bg-[#1b1b1b] text-[#c7c6c6] border border-[#4d463a]/40">
                          2.39:1 SCOPE
                        </span>
                      </div>
                    </div>

                    {/* Editorial Logline & Treatment Synopsis */}
                    <div className="flex flex-col gap-3 my-2">
                      <div className="flex items-center gap-2 text-[#e5c484] font-tech-mono text-[10px] uppercase tracking-widest">
                        <Clapperboard size={13} />
                        <span>DIRECTORIAL PRODUCTION DOSSIER</span>
                      </div>
                      <p className="font-body text-[14px] sm:text-[15px] text-[#e5e2e1] font-light leading-relaxed">
                        {project.synopsis || project.description}
                      </p>
                    </div>

                    {/* Camera Rig & Optical Science Matrix */}
                    <div className="mt-6 pt-4 border-t border-[#4d463a]/25 grid grid-cols-1 sm:grid-cols-2 gap-3 font-tech-mono text-[11px]">
                      <div className="flex items-start gap-2 text-[#998f81]">
                        <Aperture size={14} className="text-[#e5c484] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[#e5c484] block font-semibold">OPTICS &amp; SENSOR</span>
                          <span className="text-[#d0c5b5]">{project.technicalRig || 'ARRI Alexa Mini LF • Cooke Anamorphic/i 40mm T2.3'}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-[#998f81]">
                        <Sliders size={14} className="text-[#e5c484] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[#e5c484] block font-semibold">COLOR SCIENCE</span>
                          <span className="text-[#d0c5b5]">{project.colorGradeScience || 'Custom Low-Contrast Monsoonal Print LUT'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Details */}
                <div className="p-6 flex flex-col justify-between flex-1 bg-[#201f1f]">
                  <div>
                    <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-widest uppercase block mb-1">
                      {project.discipline}
                    </span>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className={`font-serif-display ${
                        isWide ? 'text-2xl sm:text-3xl' : 'text-xl'
                      } text-[#e5e2e1] group-hover:text-[#e5c484] transition-colors cursor-pointer`}
                    >
                      {project.title}
                    </h3>
                    <p className="font-body text-[13px] text-[#c7c6c6] mt-2 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#4d463a]/25 flex items-center justify-between">
                    {project.specs ? (
                      <span className="font-tech-mono text-[11px] text-[#998f81]">
                        {project.specs}
                      </span>
                    ) : (
                      <span className="font-tech-mono text-[11px] text-[#998f81]">
                        CLIENT: {project.client || 'ARCHIVE'}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 font-tech-mono text-[11px] text-[#e5c484] tracking-widest uppercase group-hover:translate-x-1 transition-transform cursor-pointer hover:underline"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
