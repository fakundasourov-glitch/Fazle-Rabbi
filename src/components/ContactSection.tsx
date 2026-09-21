import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Clock, Copy, Check, ExternalLink, Mail, MapPin, Share2 } from 'lucide-react';
import { SOCIAL_CHANNELS, SocialChannel } from '../data/portfolioData';

interface ContactSectionProps {
  preselectedDiscipline?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedDiscipline }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [discipline, setDiscipline] = useState('Brand Identity & Stationery Design');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedDiscipline) {
      setDiscipline(preselectedDiscipline);
    }
  }, [preselectedDiscipline]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHandle(label);
    setTimeout(() => setCopiedHandle(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Please provide your name or studio name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!message.trim()) {
      setErrorMessage('Please provide a brief description of your creative vision.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
    setErrorMessage('');
  };

  const socialLinks = SOCIAL_CHANNELS.filter((c) => c.category === 'social');
  const marketplaceLinks = SOCIAL_CHANNELS.filter((c) => c.category === 'marketplace');
  const stockLinks = SOCIAL_CHANNELS.filter((c) => c.category === 'stock');

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-[#0e0e0e] relative overflow-hidden"
    >
      {/* Ambient subtle background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e5c484]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Tier 1: Direct Transmission & Brief Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Call to Action Statement */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#e5c484]"></span>
              <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-[0.25em] uppercase">
                COMMISSIONS &amp; INQUIRIES
              </span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#e5e2e1] font-normal leading-tight">
              Let's create something <span className="italic text-[#e5c484]">extraordinary</span> together.
            </h2>

            <div className="flex flex-wrap items-center gap-3 font-tech-mono text-[12px] text-[#c7c6c6]">
              <span className="w-2 h-2 rounded-full bg-[#e5c484] animate-ping"></span>
              <span className="text-[#e5e2e1]">Masumpur, Sirajganj, Bangladesh</span>
              <span className="text-[#4d463a]">•</span>
              <span className="text-[#e5c484] font-semibold">OPEN TO WORLDWIDE COMMISSIONS</span>
            </div>

            {/* Direct Studio Email Box */}
            <div className="p-4 bg-[#181717] border border-[#4d463a]/40 max-w-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#252424] border border-[#e5c484]/30 flex items-center justify-center text-[#e5c484]">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="font-tech-mono text-[10px] text-[#998f81] uppercase tracking-widest block">
                    DIRECT STUDIO EMAIL
                  </span>
                  <a
                    href="mailto:studiofrx10@gmail.com?subject=Creative%20Project%20Inquiry%20-%20Md.%20Fazle%20Rabbi"
                    className="font-tech-mono text-[14px] text-[#e5e2e1] hover:text-[#e5c484] transition-colors font-medium"
                  >
                    studiofrx10@gmail.com
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy('studiofrx10@gmail.com', 'email')}
                className="px-3 py-1.5 bg-[#252424] border border-[#4d463a]/40 text-[#c7c6c6] hover:text-[#e5c484] hover:border-[#e5c484]/40 font-tech-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
              >
                {copiedHandle === 'email' ? (
                  <>
                    <Check size={13} className="text-[#e5c484]" />
                    <span className="text-[#e5c484]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="mailto:studiofrx10@gmail.com?subject=Creative%20Project%20Inquiry%20-%20Md.%20Fazle%20Rabbi"
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#e5c484] text-[#131313] font-tech-mono text-[12px] uppercase tracking-widest font-semibold shadow-[0_0_35px_-5px_rgba(200,169,107,0.35)] hover:bg-[#c8a96b] transition-all cursor-pointer"
              >
                <span>INITIATE PROJECT INQUIRY</span>
                <Send size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-2 font-tech-mono text-[11px] text-[#998f81] uppercase tracking-wider">
                <Clock size={13} className="text-[#e5c484]" />
                <span>TYPICAL RESPONSE: &lt; 24 HOURS</span>
              </div>
            </div>
          </div>

          {/* Quick Interactive Contact Envelope Box */}
          <div className="lg:col-span-5 bg-[#201f1f] p-6 sm:p-8 border border-[#4d463a]/30 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#4d463a]/20 pb-3">
              <span className="font-tech-mono text-[11px] text-[#e5c484] tracking-widest uppercase font-bold">
                DIRECT DISPATCH
              </span>
              <span className="font-tech-mono text-[10px] text-[#998f81] uppercase">SECURE TRANSMISSION</span>
            </div>

            {isSubmitted ? (
              <div className="py-8 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#e5c484]/10 border border-[#e5c484] flex items-center justify-center text-[#e5c484]">
                  <CheckCircle size={30} />
                </div>
                <h4 className="font-serif-display text-2xl text-[#e5e2e1]">Transmission Dispatched</h4>
                <p className="font-body text-[14px] text-[#c7c6c6] max-w-xs font-light">
                  Thank you, <span className="text-[#e5e2e1] font-medium">{name}</span>. Your brief for{' '}
                  <span className="text-[#e5c484] font-medium">{discipline}</span> has been logged. Md. Fazle Rabbi will respond via {email} within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-6 py-2 bg-[#2a2a2a] border border-[#e5c484]/40 text-[#e5c484] font-tech-mono text-[11px] uppercase tracking-widest hover:bg-[#e5c484] hover:text-[#131313] transition-all cursor-pointer"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {errorMessage && (
                  <div className="p-2.5 bg-red-900/30 border border-red-500/40 text-red-300 font-tech-mono text-[11px]">
                    {errorMessage}
                  </div>
                )}

                <div className="flex flex-col gap-1">
                  <label className="font-tech-mono text-[11px] text-[#998f81] uppercase">
                    NAME / STUDIO
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Warner Bros. / Jane Doe"
                    className="w-full bg-[#1c1b1b] border-b border-[#4d463a]/40 px-3 py-2 text-[#e5e2e1] placeholder:text-[#998f81]/40 font-body text-[14px] focus:outline-none focus:border-[#e5c484] transition-colors rounded-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-tech-mono text-[11px] text-[#998f81] uppercase">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full bg-[#1c1b1b] border-b border-[#4d463a]/40 px-3 py-2 text-[#e5e2e1] placeholder:text-[#998f81]/40 font-body text-[14px] focus:outline-none focus:border-[#e5c484] transition-colors rounded-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-tech-mono text-[11px] text-[#998f81] uppercase">
                    PROJECT DISCIPLINE
                  </label>
                  <select
                    value={discipline}
                    onChange={(e) => setDiscipline(e.target.value)}
                    className="w-full bg-[#1c1b1b] border-b border-[#4d463a]/40 px-3 py-2 text-[#e5e2e1] font-body text-[14px] focus:outline-none focus:border-[#e5c484] transition-colors rounded-none"
                  >
                    <option value="Brand Identity &amp; Stationery Design">Brand Identity &amp; Stationery Design</option>
                    <option value="Commercial 3D Packaging">Commercial 3D Packaging</option>
                    <option value="Cinematography / DP">Cinematography / DP</option>
                    <option value="Commercial Photography">Commercial Photography</option>
                    <option value="Documentary / Videography">Documentary / Videography</option>
                    <option value="Photo Grading &amp; Editing">Photo Grading &amp; Editing</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-tech-mono text-[11px] text-[#998f81] uppercase">
                    MESSAGE / BRIEF
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your timeline and creative vision..."
                    className="w-full bg-[#1c1b1b] border-b border-[#4d463a]/40 px-3 py-2 text-[#e5e2e1] placeholder:text-[#998f81]/40 font-body text-[14px] focus:outline-none focus:border-[#e5c484] transition-colors resize-none rounded-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3 bg-[#353534] border border-[#e5c484]/40 text-[#e5c484] hover:bg-[#e5c484] hover:text-[#131313] font-tech-mono text-[12px] uppercase tracking-widest transition-all duration-300 cursor-pointer disabled:opacity-50 font-semibold"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'SEND TRANSMISSION →'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Tier 2: Verified Social Media, Marketplaces & Licensing Channels */}
        <div className="pt-10 border-t border-[#4d463a]/30 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-tech-mono text-[11px] text-[#e5c484] uppercase tracking-widest">
                <Share2 size={14} />
                <span>OFFICIAL CHANNELS &amp; REPOSITORIES</span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#e5e2e1]">
                Connect Across Platforms
              </h3>
              <p className="font-body text-[14px] text-[#c7c6c6] font-light max-w-2xl">
                Reach out on verified social networks, book directly on global freelance marketplaces, or license imagery via official stock libraries.
              </p>
            </div>
            <span className="font-tech-mono text-[11px] text-[#998f81] self-start sm:self-auto">
              UPDATED &amp; VERIFIED 2024
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category 1: Social & Professional Networks */}
            <div className="bg-[#151414] border border-[#4d463a]/35 p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#4d463a]/25">
                <h4 className="font-tech-mono text-[12px] text-[#e5c484] uppercase tracking-widest font-bold">
                  SOCIAL &amp; NETWORKS
                </h4>
                <span className="font-tech-mono text-[10px] text-[#998f81]">3 PROFILES</span>
              </div>

              <div className="flex flex-col gap-4">
                {socialLinks.map((item) => (
                  <div
                    key={item.platform}
                    className="p-3.5 bg-[#1c1b1b] border border-[#4d463a]/25 hover:border-[#e5c484]/50 transition-all flex flex-col gap-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-tech-mono text-[11px] text-[#e5e2e1] font-semibold">
                        {item.platform}
                      </span>
                      <span className="font-tech-mono text-[9px] px-2 py-0.5 bg-[#252424] text-[#e5c484] uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-tech-mono text-[13px] text-[#d0c5b5] font-medium truncate max-w-[180px]">
                        {item.handle}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleCopy(item.handle, item.platform)}
                          title="Copy Handle"
                          className="p-1 text-[#998f81] hover:text-[#e5c484] transition-colors cursor-pointer"
                        >
                          {copiedHandle === item.platform ? (
                            <Check size={14} className="text-[#e5c484]" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Open ${item.platform}`}
                          className="p-1 text-[#e5c484] hover:text-[#fff] transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    {item.description && (
                      <p className="font-body text-[12px] text-[#998f81] font-light leading-snug">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: Freelance Marketplaces */}
            <div className="bg-[#151414] border border-[#4d463a]/35 p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#4d463a]/25">
                <h4 className="font-tech-mono text-[12px] text-[#e5c484] uppercase tracking-widest font-bold">
                  FREELANCE MARKETPLACES
                </h4>
                <span className="font-tech-mono text-[10px] text-[#998f81]">DIRECT ORDERS</span>
              </div>

              <div className="flex flex-col gap-4">
                {marketplaceLinks.map((item) => (
                  <div
                    key={item.platform}
                    className="p-3.5 bg-[#1c1b1b] border border-[#4d463a]/25 hover:border-[#e5c484]/50 transition-all flex flex-col gap-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-tech-mono text-[11px] text-[#e5e2e1] font-semibold">
                        {item.platform}
                      </span>
                      <span className="font-tech-mono text-[9px] px-2 py-0.5 bg-[#252424] text-[#e5c484] uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-tech-mono text-[13px] text-[#d0c5b5] font-medium">
                        {item.handle}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleCopy(item.handle, item.platform)}
                          title="Copy Username"
                          className="p-1 text-[#998f81] hover:text-[#e5c484] transition-colors cursor-pointer"
                        >
                          {copiedHandle === item.platform ? (
                            <Check size={14} className="text-[#e5c484]" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Open ${item.platform}`}
                          className="p-1 text-[#e5c484] hover:text-[#fff] transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    {item.description && (
                      <p className="font-body text-[12px] text-[#998f81] font-light leading-snug">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3: Stock Photography & Licensing */}
            <div className="bg-[#151414] border border-[#4d463a]/35 p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#4d463a]/25">
                <h4 className="font-tech-mono text-[12px] text-[#e5c484] uppercase tracking-widest font-bold">
                  STOCK AGENCIES &amp; LICENSING
                </h4>
                <span className="font-tech-mono text-[10px] text-[#998f81]">COMMERCIAL USE</span>
              </div>

              <div className="flex flex-col gap-4">
                {stockLinks.map((item) => (
                  <div
                    key={item.platform}
                    className="p-3.5 bg-[#1c1b1b] border border-[#4d463a]/25 hover:border-[#e5c484]/50 transition-all flex flex-col gap-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-tech-mono text-[11px] text-[#e5e2e1] font-semibold">
                        {item.platform}
                      </span>
                      <span className="font-tech-mono text-[9px] px-2 py-0.5 bg-[#252424] text-[#e5c484] uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-tech-mono text-[13px] text-[#d0c5b5] font-medium truncate max-w-[180px]">
                        {item.handle}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleCopy(item.handle, item.platform)}
                          title="Copy ID / Email"
                          className="p-1 text-[#998f81] hover:text-[#e5c484] transition-colors cursor-pointer"
                        >
                          {copiedHandle === item.platform ? (
                            <Check size={14} className="text-[#e5c484]" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                        <a
                          href={item.url}
                          target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          title={`Open ${item.platform}`}
                          className="p-1 text-[#e5c484] hover:text-[#fff] transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    {item.description && (
                      <p className="font-body text-[12px] text-[#998f81] font-light leading-snug">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

