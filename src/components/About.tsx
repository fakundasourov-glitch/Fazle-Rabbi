import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ABOUT_PORTRAIT, SOCIAL_CHANNELS } from '../data/portfolioData';

export const About: React.FC = () => {
  const disciplines = [
    { label: 'Photography', highlight: true },
    { label: 'Cinematography', highlight: false },
    { label: 'Photo Grading & Editing', highlight: false },
    { label: 'Brand Identity & Stationery', highlight: false },
    { label: 'Commercial 3D Packaging', highlight: false },
  ];

  return (
    <section id="about" className="relative w-full py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-[#131313]">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Artistic Portrait with Editorial Matting */}
        <div className="lg:col-span-5 relative group">
          {/* Ambient atmospheric glow */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#e5c484]/15 via-transparent to-transparent blur-2xl opacity-60"></div>

          <div className="relative bg-[#1c1b1b] p-3 border border-[#4d463a]/30 shadow-2xl">
            {/* Fine corner gold ticks */}
            <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#e5c484]"></div>
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#e5c484]"></div>
            <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#e5c484]"></div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#e5c484]"></div>

            <div className="overflow-hidden aspect-[3/4] bg-[#1c1b1b] relative">
              <img
                alt="Md. Fazle Rabbi"
                className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500 ease-out"
                src={ABOUT_PORTRAIT}
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-tech-mono text-[12px] text-[#d0c5b5] px-1">
              <span className="uppercase tracking-wider">FIG 01. THE AUTEUR</span>
              <span className="text-[#e5c484] uppercase tracking-widest font-semibold">
                MD. FAZLE RABBI
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Bio & Structured Credentials */}
        <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#e5c484]"></span>
            <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-[0.25em] uppercase">
              ABOUT ME
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#e5e2e1] font-normal leading-tight">
            Hello, I'm <span className="italic text-[#e5c484]">Md. Fazle Rabbi.</span>
          </h2>

          <div className="space-y-4 font-body text-[15px] text-[#c7c6c6] font-light leading-relaxed">
            <p>
              I am a creative visual professional from Masumpur, Sirajganj, Bangladesh, with a passion for photography, filmmaking and visual design.
            </p>
            <p>
              I completed my Honours in Economics from Sirajganj Government College. Alongside my academic background, I have developed my creative career around photography, photo editing, cinematography, videography and graphic design.
            </p>
            <p className="text-[#e5e2e1] font-normal">
              My goal is to transform ordinary moments into meaningful visual stories through composition, light, color, bespoke brand systems and creative storytelling.
            </p>
          </div>

          {/* Academic & Location Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 bg-[#1c1b1b] border border-[#4d463a]/25 flex flex-col justify-between">
              <span className="font-tech-mono text-[11px] text-[#998f81] uppercase tracking-widest">
                LOCATION
              </span>
              <p className="font-body text-[14px] text-[#e5e2e1] mt-2 font-medium">
                Masumpur, Sirajganj, Bangladesh
              </p>
            </div>

            <div className="p-4 bg-[#1c1b1b] border border-[#4d463a]/25 flex flex-col justify-between">
              <span className="font-tech-mono text-[11px] text-[#998f81] uppercase tracking-widest">
                EDUCATION
              </span>
              <p className="font-body text-[14px] text-[#e5e2e1] mt-2 font-medium">
                Honours in Economics
              </p>
            </div>

            <div className="p-4 bg-[#1c1b1b] border border-[#4d463a]/25 flex flex-col justify-between">
              <span className="font-tech-mono text-[11px] text-[#998f81] uppercase tracking-widest">
                INSTITUTION
              </span>
              <p className="font-body text-[14px] text-[#e5e2e1] mt-2 font-medium">
                Sirajganj Govt. College
              </p>
            </div>
          </div>

          {/* Core Disciplines Badges */}
          <div className="pt-2">
            <span className="font-tech-mono text-[11px] text-[#998f81] uppercase tracking-widest block mb-2.5">
              CORE DISCIPLINES
            </span>
            <div className="flex flex-wrap gap-2">
              {disciplines.map((item, idx) => (
                <span
                  key={idx}
                  className={`px-3.5 py-1.5 font-tech-mono text-[11px] uppercase tracking-wider transition-colors cursor-default ${
                    item.highlight
                      ? 'bg-[#2a2a2a] border border-[#e5c484]/50 text-[#e5c484]'
                      : 'bg-[#201f1f] border border-[#4d463a]/30 text-[#e5e2e1] hover:border-[#e5c484]/40'
                  }`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Verified Profiles */}
          <div className="pt-2">
            <span className="font-tech-mono text-[11px] text-[#998f81] uppercase tracking-widest block mb-2.5">
              VERIFIED CHANNELS &amp; MARKETPLACES
            </span>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_CHANNELS.map((item) => (
                <a
                  key={item.platform}
                  href={item.url}
                  target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#1a1919] border border-[#4d463a]/30 hover:border-[#e5c484]/50 text-[#d0c5b5] hover:text-[#e5c484] font-tech-mono text-[10px] uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{item.platform}</span>
                  <ExternalLink size={10} className="text-[#e5c484]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
