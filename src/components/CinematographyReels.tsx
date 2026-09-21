import React, { useState } from 'react';
import { Film, Sliders, Volume2, Layers, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { FILM_REELS } from '../data/portfolioData';
import { FilmReel } from '../types';

interface CinematographyReelsProps {
  onPlayReel?: (reel: FilmReel) => void;
}

export const CinematographyReels: React.FC<CinematographyReelsProps> = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'documentary' | 'fashion' | 'commercial'>('all');
  const [expandedReelId, setExpandedReelId] = useState<string>('reel-1');

  const filteredReels = FILM_REELS.filter((reel) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'documentary') return reel.category.toLowerCase().includes('documentary') || reel.category.toLowerCase().includes('nature');
    if (activeTab === 'fashion') return reel.category.toLowerCase().includes('fashion');
    if (activeTab === 'commercial') return reel.category.toLowerCase().includes('commercial');
    return true;
  });

  const primaryReel = FILM_REELS[0];
  const catalogReels = filteredReels.filter((r) => r.id !== primaryReel.id);

  return (
    <section id="cinema" className="w-full py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-[#0e0e0e]">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#4d463a]/30">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#e5c484]"></span>
              <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-[0.25em] uppercase">
                DIRECTORIAL TREATMENTS &amp; MOTION DOSSIER
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] font-normal">
              CINEMATOGRAPHY &amp; <span className="text-[#e5c484] italic">VIDEOGRAPHY</span>
            </h2>
            <p className="font-body text-[15px] text-[#c7c6c6] font-light leading-relaxed">
              Narrative treatment, color science design, and technical camera configurations crafted for emotional cadence, organic film grain, and high fidelity.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'ALL TREATMENTS' },
              { id: 'documentary', label: 'DOCUMENTARY' },
              { id: 'fashion', label: 'FASHION & COLOR' },
              { id: 'commercial', label: 'COMMERCIAL' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 font-tech-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#e5c484] text-[#131313] font-bold shadow-[0_0_15px_rgba(229,196,132,0.3)]'
                    : 'bg-[#1c1b1b] border border-[#4d463a]/30 text-[#c7c6c6] hover:text-[#e5e2e1] hover:border-[#e5c484]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED CINEMA DOSSIER: Production Slate Monitor (No Picture - Pure Description) */}
        {primaryReel && (
          <div className="relative bg-[#151414] border border-[#4d463a]/50 shadow-2xl overflow-hidden">
            {/* Fine corner gold calibration marks */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#e5c484]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#e5c484]"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#e5c484]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#e5c484]"></div>

            {/* Top Film Monitor Header Bar */}
            <div className="px-6 py-3 bg-[#0a0a0a] border-b border-[#4d463a]/35 flex flex-wrap items-center justify-between gap-4 font-tech-mono text-[12px]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[#e5e2e1] tracking-widest font-bold">
                  ● SLATE DOSSIER: {primaryReel.format}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-[#998f81]">
                <span>FPS: <strong className="text-[#e5e2e1]">{primaryReel.fps || '24.00'}</strong></span>
                <span>•</span>
                <span>SHUTTER: <strong className="text-[#e5e2e1]">{primaryReel.shutter || '180°'}</strong></span>
                <span>•</span>
                <span>SCOPE: <strong className="text-[#e5c484]">{primaryReel.scopeSpec}</strong></span>
                <span>•</span>
                <span className="text-[#e5c484] font-semibold">{primaryReel.timecode}</span>
              </div>
            </div>

            {/* Main Treatment Body */}
            <div className="p-6 sm:p-10 flex flex-col gap-8">
              {/* Title & Role Metadata */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#4d463a]/25">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-tech-mono text-[11px] text-[#e5c484] uppercase tracking-widest">
                    <span>{primaryReel.category}</span>
                    <span>✦</span>
                    <span>{primaryReel.role}</span>
                  </div>
                  <h3 className="font-serif-display text-2xl sm:text-4xl text-[#e5e2e1] font-normal tracking-tight">
                    {primaryReel.title}
                  </h3>
                  <p className="font-body text-[16px] text-[#c7c6c6] font-light max-w-3xl leading-relaxed">
                    {primaryReel.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 self-start">
                  <span className="px-3.5 py-1.5 bg-[#201f1f] border border-[#e5c484]/40 font-tech-mono text-[11px] text-[#e5c484] uppercase tracking-wider">
                    {primaryReel.audioSpec}
                  </span>
                  <span className="px-3.5 py-1.5 bg-[#201f1f] border border-[#4d463a]/40 font-tech-mono text-[11px] text-[#c7c6c6] uppercase tracking-wider">
                    {primaryReel.scopeSpec}
                  </span>
                </div>
              </div>

              {/* Narrative & Treatment Narrative Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Narrative Synopsis */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-[#e5c484]" />
                    <h4 className="font-tech-mono text-[12px] text-[#e5c484] tracking-[0.2em] uppercase font-semibold">
                      LOGLINE &amp; NARRATIVE SYNOPSIS
                    </h4>
                  </div>
                  <p className="font-body text-[15px] text-[#e5e2e1] font-light leading-relaxed bg-[#1c1b1b]/70 p-5 border-l-2 border-[#e5c484]">
                    {primaryReel.synopsis || primaryReel.description}
                  </p>

                  {/* Production Directives */}
                  {primaryReel.treatmentNotes && primaryReel.treatmentNotes.length > 0 && (
                    <div className="flex flex-col gap-3 pt-2">
                      <span className="font-tech-mono text-[11px] text-[#998f81] uppercase tracking-widest">
                        DIRECTORIAL EXECUTION DIRECTIVES
                      </span>
                      <ul className="space-y-2.5">
                        {primaryReel.treatmentNotes.map((note, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[14px] text-[#c7c6c6] font-light">
                            <CheckCircle2 size={16} className="text-[#e5c484] mt-0.5 shrink-0" />
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right: Technical & Color Science Architecture */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Visual Atmosphere Box */}
                  <div className="p-4 bg-[#1c1b1b] border border-[#4d463a]/30 flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-tech-mono text-[11px] text-[#e5c484] uppercase tracking-wider">
                      <Sparkles size={14} />
                      <span>VISUAL ATMOSPHERE &amp; LIGHTING</span>
                    </div>
                    <p className="font-body text-[13px] text-[#c7c6c6] leading-relaxed">
                      {primaryReel.visualAtmosphere || 'Naturalistic available dawn ambient luminance, silver river fog reflections, and anamorphic flares.'}
                    </p>
                  </div>

                  {/* Camera Rig Box */}
                  <div className="p-4 bg-[#1c1b1b] border border-[#4d463a]/30 flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-tech-mono text-[11px] text-[#e5c484] uppercase tracking-wider">
                      <Sliders size={14} />
                      <span>CAMERA RIG &amp; OPTICS</span>
                    </div>
                    <p className="font-body text-[13px] text-[#c7c6c6] leading-relaxed">
                      {primaryReel.technicalRig || 'Cinema DNG RAW • Cooke Anamorphic/i Prime set • Low-profile stabilizer on country boat.'}
                    </p>
                  </div>

                  {/* Color Science Box */}
                  <div className="p-4 bg-[#1c1b1b] border border-[#4d463a]/30 flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-tech-mono text-[11px] text-[#e5c484] uppercase tracking-wider">
                      <Layers size={14} />
                      <span>COLOR GRADING TREATMENT</span>
                    </div>
                    <p className="font-body text-[13px] text-[#c7c6c6] leading-relaxed">
                      {primaryReel.colorGradeScience || 'Custom Film LUT tailored to preserve subtle mist tones and deep neutral blacks.'}
                    </p>
                  </div>

                  {/* Audio Specs Box */}
                  <div className="p-4 bg-[#1c1b1b] border border-[#4d463a]/30 flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-tech-mono text-[11px] text-[#e5c484] uppercase tracking-wider">
                      <Volume2 size={14} />
                      <span>ACOUSTIC SOUNDSCAPE</span>
                    </div>
                    <p className="font-body text-[13px] text-[#c7c6c6] leading-relaxed">
                      Spatial field recordings of river currents, paddle strokes, and authentic monsoon ambience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags Ribbon */}
              {primaryReel.tags && (
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#4d463a]/25">
                  <span className="font-tech-mono text-[10px] text-[#998f81] uppercase tracking-widest mr-2">
                    SERIES TAGS:
                  </span>
                  {primaryReel.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#201f1f] border border-[#4d463a]/30 font-tech-mono text-[10px] text-[#d0c5b5] uppercase tracking-wider"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ADDITIONAL MOTION ESSAYS & COMMERCIAL REELS (Pure Text Dossiers - No Picture) */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Film size={16} className="text-[#e5c484]" />
              <h3 className="font-tech-mono text-[12px] text-[#e5c484] tracking-[0.2em] uppercase font-semibold">
                CATALOG OF MOTION TREATMENTS ({catalogReels.length})
              </h3>
            </div>
            <span className="font-tech-mono text-[11px] text-[#998f81]">
              DESCRIPTIVE SPECIFICATIONS // NO VISUAL ARTIFACTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogReels.map((reel) => {
              const isExpanded = expandedReelId === reel.id;
              return (
                <div
                  key={reel.id}
                  className="bg-[#151414] border border-[#4d463a]/35 p-6 flex flex-col justify-between hover:border-[#e5c484]/50 transition-all duration-300 shadow-xl group"
                >
                  <div className="flex flex-col gap-4">
                    {/* Slate Header Ribbon */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#4d463a]/25 font-tech-mono text-[11px]">
                      <span className="text-[#e5c484] font-bold">{reel.timecode}</span>
                      <span className="text-[#998f81]">{reel.format}</span>
                    </div>

                    {/* Role & Category */}
                    <div className="flex items-center gap-2 font-tech-mono text-[10px] text-[#e5c484] uppercase tracking-widest">
                      <span>{reel.category}</span>
                      <span>•</span>
                      <span>{reel.role}</span>
                    </div>

                    {/* Title */}
                    <h4 className="font-serif-display text-xl text-[#e5e2e1] group-hover:text-[#e5c484] transition-colors leading-snug">
                      {reel.title}
                    </h4>

                    {/* Synopsis Description */}
                    <p className="font-body text-[14px] text-[#c7c6c6] font-light leading-relaxed">
                      {reel.synopsis || reel.description}
                    </p>

                    {/* Expanded Detailed Breakdown */}
                    {isExpanded && (
                      <div className="mt-2 pt-3 border-t border-[#4d463a]/20 space-y-3 font-body text-[13px] text-[#c7c6c6]">
                        {reel.visualAtmosphere && (
                          <div>
                            <span className="font-tech-mono text-[10px] text-[#e5c484] uppercase tracking-wider block mb-1">
                              VISUAL DIRECTION:
                            </span>
                            <p className="text-[#b0aeac]">{reel.visualAtmosphere}</p>
                          </div>
                        )}
                        {reel.technicalRig && (
                          <div>
                            <span className="font-tech-mono text-[10px] text-[#e5c484] uppercase tracking-wider block mb-1">
                              CAMERA &amp; OPTICS:
                            </span>
                            <p className="text-[#b0aeac]">{reel.technicalRig}</p>
                          </div>
                        )}
                        {reel.colorGradeScience && (
                          <div>
                            <span className="font-tech-mono text-[10px] text-[#e5c484] uppercase tracking-wider block mb-1">
                              COLOR SCIENCE:
                            </span>
                            <p className="text-[#b0aeac]">{reel.colorGradeScience}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Footer Bar */}
                  <div className="mt-6 pt-4 border-t border-[#4d463a]/25 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 font-tech-mono text-[10px] text-[#998f81]">
                      <span className="px-2 py-0.5 bg-[#1c1b1b] border border-[#4d463a]/30">
                        {reel.audioSpec}
                      </span>
                      <span className="px-2 py-0.5 bg-[#1c1b1b] border border-[#4d463a]/30">
                        {reel.scopeSpec}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setExpandedReelId(isExpanded ? '' : reel.id)}
                      className="font-tech-mono text-[11px] text-[#e5c484] hover:underline uppercase tracking-wider cursor-pointer"
                    >
                      {isExpanded ? 'LESS DETAILS ↑' : 'FULL SPECS ↓'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Technical Note */}
        <div className="p-4 bg-[#151414] border border-[#4d463a]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[#998f81] font-tech-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e5c484]"></span>
            <span>CINEMATIC ARCHIVE 2024 / 2025 // POST-PRODUCTION &amp; DIRECTION LOG</span>
          </div>
          <div className="flex items-center gap-4 text-[#c7c6c6]">
            <span>COLOR SPACES: ARRI LOG-C / REDCODE RAW</span>
            <span>•</span>
            <span>MONITORING: CALIBRATED REC.709 &amp; DCI-P3</span>
          </div>
        </div>
      </div>
    </section>
  );
};

