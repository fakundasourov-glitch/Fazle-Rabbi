import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE_AVATAR } from '../data/portfolioData';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        'contact',
        'services',
        'cinema',
        'photography',
        'business-cards-showcase',
        'commercial-product-design',
        'selected-works',
        'about',
        'home',
      ];

      for (const sectionId of sections) {
        if (sectionId === 'home') {
          if (window.scrollY < 300) {
            setActiveSection('home');
            break;
          }
        } else {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140 && rect.bottom >= 140) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'WORK', href: '#selected-works', id: 'selected-works' },
    { name: 'BRAND & DESIGN', href: '#commercial-product-design', id: 'commercial-product-design' },
    { name: 'BUSINESS CARDS', href: '#business-cards-showcase', id: 'business-cards-showcase' },
    { name: 'PHOTOGRAPHY', href: '#photography', id: 'photography' },
    { name: 'CINEMA', href: '#cinema', id: 'cinema' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-[#4d463a]/20 ${
        scrolled
          ? 'bg-[#0e0e0e]/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-0'
          : 'bg-[#0e0e0e]/80 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.4)] py-0'
      }`}
    >
      <div className="h-20 w-full px-4 sm:px-8 md:px-16 flex items-center justify-between gap-6 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center gap-2 group tracking-tight"
          >
            <span className="font-tech-mono text-[11px] sm:text-[12px] tracking-[0.2em] text-[#e5e2e1] uppercase transition-colors group-hover:text-[#e5c484]">
              MD. FAZLE RABBI
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e5c484] shadow-[0_0_8px_rgba(229,196,132,0.8)] animate-pulse"></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-tech-mono text-[11px] tracking-[0.14em] uppercase transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#e5c484] font-bold'
                    : 'text-[#d0c5b5] hover:text-[#e5e2e1]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e5c484]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              if (onContactClick) {
                e.preventDefault();
                onContactClick();
              }
            }}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full border border-[#e5c484]/40 bg-[#201f1f]/60 hover:bg-[#c8a96b] hover:text-[#131313] hover:border-[#e5c484] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(200,169,107,0.25)] font-tech-mono text-[11px] text-[#e5c484] tracking-widest uppercase font-semibold whitespace-nowrap"
          >
            LET'S TALK →
          </a>

          <img
            alt="Md. Fazle Rabbi"
            className="w-9 h-9 rounded-full object-cover object-top ring-1 ring-[#e5c484]/50 cursor-pointer hover:ring-[#e5c484] hover:scale-105 transition-all shadow-[0_0_12px_rgba(229,196,132,0.3)]"
            src={PROFILE_AVATAR}
            referrerPolicy="no-referrer"
            onClick={() => {
              const aboutEl = document.getElementById('about');
              if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Mobile menu trigger */}
          <button
            type="button"
            className="xl:hidden p-2 text-[#d0c5b5] hover:text-[#e5c484] transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e0e0e]/95 backdrop-blur-2xl border-b border-[#4d463a]/30 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-tech-mono text-[12px] tracking-[0.16em] uppercase transition-colors flex items-center justify-between py-1 ${
                    isActive ? 'text-[#e5c484] font-bold' : 'text-[#d0c5b5]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#e5c484]"></span>}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
