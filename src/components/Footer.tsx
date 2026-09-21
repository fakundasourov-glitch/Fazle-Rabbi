import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { SOCIAL_CHANNELS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#4d463a]/30 py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-serif-display text-2xl text-[#e5e2e1] tracking-wide uppercase">
                MD. FAZLE RABBI
              </span>
              <span className="w-2 h-2 rounded-full bg-[#e5c484]"></span>
            </div>
            <div className="flex items-center gap-2 font-tech-mono text-[12px] text-[#d0c5b5]">
              <MapPin size={13} className="text-[#e5c484]" />
              <span>Masumpur, Sirajganj, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 font-tech-mono text-[12px] text-[#c7c6c6]">
              <Mail size={13} className="text-[#e5c484]" />
              <a
                href="mailto:studiofrx10@gmail.com"
                className="hover:text-[#e5c484] transition-colors"
              >
                studiofrx10@gmail.com
              </a>
            </div>
            <p className="font-body text-[13px] text-[#998f81] mt-1 font-light">
              Available for global commissions, brand systems &amp; freelance cinematography.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-wrap md:justify-end items-center gap-x-6 gap-y-3 pt-1">
            {SOCIAL_CHANNELS.map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="font-tech-mono text-[11px] text-[#d0c5b5] hover:text-[#e5c484] transition-colors tracking-widest uppercase hover:underline"
              >
                {item.platform}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-[#4d463a]/25"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-tech-mono text-[11px] text-[#998f81]">
          <p>© 2024 MD. FAZLE RABBI. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest uppercase text-[#c7c6c6]">
            CINEMATOGRAPHY • BRAND SYSTEMS • STILL EXHIBITION
          </p>
        </div>
      </div>
    </footer>
  );
};

