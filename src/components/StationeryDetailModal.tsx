import React, { useEffect, useState } from 'react';
import { X, Layers, Printer, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { BusinessCardItem, CommercialProduct } from '../types';

interface StationeryDetailModalProps {
  cardItem: BusinessCardItem | null;
  productItem: CommercialProduct | null;
  onClose: () => void;
  onRequestCommission: (discipline: string) => void;
}

export const StationeryDetailModal: React.FC<StationeryDetailModalProps> = ({
  cardItem,
  productItem,
  onClose,
  onRequestCommission,
}) => {
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'PRINT_SPECS' | 'FINISHES'>('OVERVIEW');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cardItem && !productItem) return null;

  const title = cardItem ? cardItem.title : productItem!.title;
  const subtitle = cardItem ? cardItem.category : productItem!.tagline;
  const description = cardItem ? cardItem.description : productItem!.description;
  const imageUrl = cardItem ? cardItem.imageUrl : productItem!.imageUrl;
  const badge = cardItem ? cardItem.badge : productItem!.badge;
  const format = cardItem ? cardItem.format : `${productItem!.specLeft} • ${productItem!.specRight}`;
  const finishType = cardItem ? cardItem.finishType : productItem!.subBadge;

  const handleCommissionClick = () => {
    onClose();
    onRequestCommission(cardItem ? 'Brand Identity & Stationery Design' : 'Commercial 3D Packaging');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e0e0e]/95 backdrop-blur-2xl p-3 sm:p-6 overflow-hidden">
      <div className="w-full max-w-5xl bg-[#131313] border border-[#4d463a]/40 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#0e0e0e] border-b border-[#4d463a]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#e5c484]"></span>
            <span className="font-tech-mono text-[11px] text-[#e5c484] uppercase tracking-widest">
              {cardItem ? 'STATIONERY & IDENTITY SHOWCASE' : 'COMMERCIAL 3D ARCHIVE'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#d0c5b5] hover:text-[#e5c484] transition-colors cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 overflow-y-auto">
          {/* Left Visual Presentation */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative aspect-square overflow-hidden bg-[#0e0e0e] border border-[#4d463a]/30 shadow-2xl">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#0e0e0e]/90 backdrop-blur-md text-[#e5c484] font-tech-mono text-[11px] uppercase tracking-widest border border-[#e5c484]/30">
                  {badge}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between font-tech-mono text-[11px] text-[#998f81] px-1">
              <span>{format}</span>
              <span className="text-[#e5c484]">{finishType}</span>
            </div>
          </div>

          {/* Right Information & Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-tech-mono text-[11px] text-[#e5c484] uppercase tracking-wider block mb-1">
                {subtitle}
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#e5e2e1] mb-3">
                {title}
              </h3>

              {/* Subtabs */}
              <div className="flex border-b border-[#4d463a]/30 mb-4">
                <button
                  onClick={() => setActiveTab('OVERVIEW')}
                  className={`pb-2 px-3 font-tech-mono text-[11px] uppercase tracking-wider cursor-pointer ${
                    activeTab === 'OVERVIEW'
                      ? 'border-b-2 border-[#e5c484] text-[#e5c484] font-bold'
                      : 'text-[#d0c5b5] hover:text-[#e5e2e1]'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('PRINT_SPECS')}
                  className={`pb-2 px-3 font-tech-mono text-[11px] uppercase tracking-wider cursor-pointer ${
                    activeTab === 'PRINT_SPECS'
                      ? 'border-b-2 border-[#e5c484] text-[#e5c484] font-bold'
                      : 'text-[#d0c5b5] hover:text-[#e5e2e1]'
                  }`}
                >
                  Specs
                </button>
                <button
                  onClick={() => setActiveTab('FINISHES')}
                  className={`pb-2 px-3 font-tech-mono text-[11px] uppercase tracking-wider cursor-pointer ${
                    activeTab === 'FINISHES'
                      ? 'border-b-2 border-[#e5c484] text-[#e5c484] font-bold'
                      : 'text-[#d0c5b5] hover:text-[#e5e2e1]'
                  }`}
                >
                  Finishes
                </button>
              </div>

              {activeTab === 'OVERVIEW' && (
                <div className="space-y-3 font-body text-[14px] text-[#c7c6c6] font-light leading-relaxed">
                  <p>{description}</p>
                  <p className="text-[13px] text-[#d0c5b5]">
                    Designed by <strong className="text-[#e5e2e1]">Md. Fazle Rabbi</strong> with mathematical grid ratios, balanced optical margins, and refined tactile physical finishes.
                  </p>
                </div>
              )}

              {activeTab === 'PRINT_SPECS' && (
                <div className="space-y-3 font-tech-mono text-[12px]">
                  <div className="flex items-center justify-between py-1 border-b border-[#4d463a]/20">
                    <span className="text-[#998f81]">RESOLUTION</span>
                    <span className="text-[#e5e2e1]">300 DPI Archival CMYK</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#4d463a]/20">
                    <span className="text-[#998f81]">PAPER STOCK</span>
                    <span className="text-[#e5e2e1]">350 GSM Cotton / Linen</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#4d463a]/20">
                    <span className="text-[#998f81]">BLEED / MARGINS</span>
                    <span className="text-[#e5e2e1]">0.125 in (3.175 mm)</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#4d463a]/20">
                    <span className="text-[#998f81]">COLOR PROFILES</span>
                    <span className="text-[#e5e2e1]">FOGRA39 / GRACoL 2006</span>
                  </div>
                </div>
              )}

              {activeTab === 'FINISHES' && (
                <div className="space-y-2.5 font-body text-[13px] text-[#c7c6c6]">
                  <div className="flex items-start gap-2.5 p-2 bg-[#1c1b1b] border border-[#4d463a]/25">
                    <Sparkles size={16} className="text-[#e5c484] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-tech-mono text-[11px] text-[#e5c484] uppercase block">
                        Hot Metallic Foil &amp; Deboss
                      </span>
                      <span>Precision micro-stamping for emblems and metallic typographic rules.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-2 bg-[#1c1b1b] border border-[#4d463a]/25">
                    <Layers size={16} className="text-[#e5c484] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-tech-mono text-[11px] text-[#e5c484] uppercase block">
                        Tactile Velvet Soft-Touch
                      </span>
                      <span>Silken protective laminate preventing fingerprint grease &amp; glare.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-4 border-t border-[#4d463a]/30">
              <button
                type="button"
                onClick={handleCommissionClick}
                className="w-full py-3 bg-[#c8a96b] text-[#131313] font-tech-mono text-[12px] uppercase tracking-widest font-semibold hover:bg-[#e5c484] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>REQUEST THIS SYSTEM →</span>
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
