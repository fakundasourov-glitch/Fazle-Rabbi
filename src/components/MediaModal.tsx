import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Share2, Check, Clapperboard, Aperture, Sliders, Film } from 'lucide-react';
import { WorkProject, PhotoItem } from '../types';

type InspectableItem = WorkProject | PhotoItem;

interface MediaModalProps {
  item: InspectableItem | null;
  itemsList?: InspectableItem[];
  onClose: () => void;
  onNavigate?: (item: InspectableItem) => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({
  item,
  itemsList = [],
  onClose,
  onNavigate,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (itemsList.length > 1 && onNavigate && item) {
        const currentIndex = itemsList.findIndex((i) => i.id === item.id);
        if (e.key === 'ArrowRight' && currentIndex < itemsList.length - 1) {
          onNavigate(itemsList[currentIndex + 1]);
        }
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          onNavigate(itemsList[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, itemsList, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = itemsList.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < itemsList.length - 1;

  const isPhoto = 'exif' in item;
  const isWork = 'discipline' in item;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e0e0e]/95 backdrop-blur-2xl p-3 sm:p-6 overflow-hidden">
      {/* Top Controls Bar */}
      <div className="absolute top-0 left-0 right-0 h-16 px-4 sm:px-8 flex items-center justify-between border-b border-[#4d463a]/30 bg-[#0e0e0e]/80 z-20">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#e5c484]"></span>
          <span className="font-tech-mono text-[11px] text-[#e5c484] uppercase tracking-widest">
            {isPhoto ? (item as PhotoItem).series : (item as WorkProject).discipline}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 text-[#d0c5b5] hover:text-[#e5c484] hover:bg-[#201f1f] transition-all cursor-pointer"
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
          </button>

          <button
            onClick={handleShare}
            className="p-2 text-[#d0c5b5] hover:text-[#e5c484] hover:bg-[#201f1f] transition-all cursor-pointer flex items-center gap-1 font-tech-mono text-[11px]"
            title="Share Artwork"
          >
            {copied ? <Check size={18} className="text-[#e5c484]" /> : <Share2 size={18} />}
          </button>

          <button
            onClick={onClose}
            className="p-2 text-[#d0c5b5] hover:text-[#e5c484] hover:bg-[#201f1f] transition-all cursor-pointer"
            title="Close (Esc)"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {hasPrev && onNavigate && (
        <button
          onClick={() => onNavigate(itemsList[currentIndex - 1])}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#1c1b1b]/80 border border-[#e5c484]/30 text-[#e5e2e1] hover:bg-[#e5c484] hover:text-[#131313] transition-all flex items-center justify-center cursor-pointer shadow-2xl"
          title="Previous Artwork"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {hasNext && onNavigate && (
        <button
          onClick={() => onNavigate(itemsList[currentIndex + 1])}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#1c1b1b]/80 border border-[#e5c484]/30 text-[#e5e2e1] hover:bg-[#e5c484] hover:text-[#131313] transition-all flex items-center justify-center cursor-pointer shadow-2xl"
          title="Next Artwork"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Main Content Area */}
      <div className="w-full h-full pt-16 flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto items-center justify-center overflow-y-auto">
        {/* Visual Frame or Slate Monitor */}
        <div
          className={`flex-1 w-full flex items-center justify-center p-2 sm:p-4 max-h-[75vh] lg:max-h-[85vh] transition-transform duration-300 ${
            isZoomed ? 'scale-110' : ''
          }`}
        >
          {item.imageUrl && !('isTextOnly' in item && (item as WorkProject).isTextOnly) ? (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-w-full max-h-[70vh] lg:max-h-[80vh] object-contain shadow-2xl border border-[#4d463a]/30 cursor-zoom-in"
              onClick={() => setIsZoomed(!isZoomed)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full max-w-2xl bg-[#141414] border border-[#e5c484]/40 p-8 shadow-2xl relative flex flex-col gap-6">
              {/* Corner reticles */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#e5c484]"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#e5c484]"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#e5c484]"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#e5c484]"></div>

              <div className="flex items-center justify-between border-b border-[#4d463a]/30 pb-3">
                <div className="flex items-center gap-2 text-red-400 font-tech-mono text-[11px] font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span>RECORDING SLATE // 4K CINEMA DNG RAW</span>
                </div>
                <span className="font-tech-mono text-[11px] text-[#e5c484]">TC 00:02:45:18</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-tech-mono text-[11px] text-[#e5c484] uppercase tracking-widest flex items-center gap-1.5">
                  <Clapperboard size={14} />
                  <span>DIRECTORIAL LOGLINE &amp; NARRATIVE TREATMENT</span>
                </span>
                <h4 className="font-serif-display text-2xl text-[#e5e2e1]">{item.title}</h4>
                <p className="font-body text-[14px] text-[#c7c6c6] font-light leading-relaxed">
                  {'synopsis' in item && (item as WorkProject).synopsis
                    ? (item as WorkProject).synopsis
                    : 'description' in item
                    ? (item as WorkProject).description
                    : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#4d463a]/30 font-tech-mono text-[11px]">
                <div className="flex items-start gap-2 text-[#998f81]">
                  <Aperture size={15} className="text-[#e5c484] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#e5c484] block font-semibold">CAMERA RIG &amp; OPTICS</span>
                    <span className="text-[#d0c5b5]">
                      {'technicalRig' in item && (item as WorkProject).technicalRig
                        ? (item as WorkProject).technicalRig
                        : 'ARRI Alexa Mini LF • Cooke Anamorphic/i 40mm T2.3'}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-[#998f81]">
                  <Sliders size={15} className="text-[#e5c484] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#e5c484] block font-semibold">COLOR GRADING</span>
                    <span className="text-[#d0c5b5]">
                      {'colorGradeScience' in item && (item as WorkProject).colorGradeScience
                        ? (item as WorkProject).colorGradeScience
                        : 'Custom Photochemical Grain Emulation LUT'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="font-tech-mono text-[10px] text-[#998f81] uppercase tracking-widest">
                  PURE DESCRIPTIVE PRODUCTION SLATE • NO COMPRESSED PREVIEWS
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="w-full lg:w-96 bg-[#1c1b1b] border border-[#4d463a]/30 p-6 flex flex-col justify-between max-h-[80vh] shadow-2xl overflow-y-auto">
          <div>
            <div className="flex items-center justify-between font-tech-mono text-[11px] text-[#998f81] mb-2">
              <span className="text-[#e5c484] tracking-widest uppercase">
                {isPhoto ? 'STILL ARCHIVE' : 'CURATED EXHIBITION'}
              </span>
              <span>
                {currentIndex >= 0 && itemsList.length > 0
                  ? `${currentIndex + 1} / ${itemsList.length}`
                  : 'ARCHIVE'}
              </span>
            </div>

            <h3 className="font-serif-display text-2xl text-[#e5e2e1] mt-1 mb-3">
              {item.title}
            </h3>

            {'description' in item && (
              <p className="font-body text-[14px] text-[#c7c6c6] font-light leading-relaxed mb-4">
                {(item as WorkProject).description}
              </p>
            )}

            {'subtitle' in item && (item as PhotoItem).subtitle && (
              <p className="font-body text-[14px] text-[#c7c6c6] font-light leading-relaxed mb-4">
                {(item as PhotoItem).subtitle}
              </p>
            )}

            {/* Technical Specs Breakdown */}
            <div className="space-y-3 pt-3 border-t border-[#4d463a]/20">
              {isPhoto && (
                <div>
                  <span className="font-tech-mono text-[10px] text-[#998f81] uppercase tracking-wider block">
                    OPTICAL EXIF DATA
                  </span>
                  <p className="font-tech-mono text-[12px] text-[#e5c484] mt-0.5">
                    {(item as PhotoItem).exif}
                  </p>
                </div>
              )}

              {isWork && (item as WorkProject).specs && (
                <div>
                  <span className="font-tech-mono text-[10px] text-[#998f81] uppercase tracking-wider block">
                    PRODUCTION SPECS
                  </span>
                  <p className="font-tech-mono text-[12px] text-[#e5c484] mt-0.5">
                    {(item as WorkProject).specs}
                  </p>
                </div>
              )}

              {isWork && (item as WorkProject).client && (
                <div>
                  <span className="font-tech-mono text-[10px] text-[#998f81] uppercase tracking-wider block">
                    CLIENT / PRODUCTION
                  </span>
                  <p className="font-body text-[13px] text-[#e5e2e1] mt-0.5">
                    {(item as WorkProject).client}
                  </p>
                </div>
              )}

              {isWork && (item as WorkProject).tags && (
                <div>
                  <span className="font-tech-mono text-[10px] text-[#998f81] uppercase tracking-wider block mb-1.5">
                    DISCIPLINE TAGS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(item as WorkProject).tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#2a2a2a] text-[#c7c6c6] font-tech-mono text-[10px] uppercase border border-[#4d463a]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-[#4d463a]/25 mt-6">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full block text-center py-2.5 bg-[#c8a96b] text-[#131313] font-tech-mono text-[11px] uppercase tracking-widest font-semibold hover:bg-[#e5c484] transition-all cursor-pointer"
            >
              COMMISSION SIMILAR PROJECT →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
