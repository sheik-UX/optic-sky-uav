import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070806] text-white border-t border-neutral-900 pt-20 pb-12">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Column 1: Brand Wordmark & Narrative */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assets/branding/logo.png"
                alt="Optic Sky UAV Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="font-display tracking-tight text-xl font-bold uppercase text-white">
                OPTIC SKY UAV
              </span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed font-normal mb-6 max-w-sm">
              Commercial aerial photography and drone cinematography revealing the character, progress, and architectural scale of properties from above.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FFB800]">
              <ShieldCheck size={14} className="text-[#FFB800]" />
              <span>FAA PART 107 CERTIFIED // $5M INSURED</span>
            </div>
          </div>

          {/* Column 2: Capabilities / Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs uppercase tracking-widest text-neutral-300 font-bold mb-5">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm font-normal text-neutral-400">
              <li>
                <a href="#services" className="hover:text-[#FFB800] transition-colors">
                  Golf Course Flyovers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFB800] transition-colors">
                  Commercial Real Estate
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFB800] transition-colors">
                  Construction Milestone Audits
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFB800] transition-colors">
                  Precision Orthomosaic Mapping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFB800] transition-colors">
                  4K 60FPS Cinematic Film
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Portfolio & Production */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs uppercase tracking-widest text-neutral-300 font-bold mb-5">
              Portfolio
            </h4>
            <ul className="space-y-3 text-sm font-normal text-neutral-400">
              <li>
                <a href="#work" className="hover:text-[#FFB800] transition-colors">
                  Whistling Straits
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#FFB800] transition-colors">
                  Cascata Water
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#FFB800] transition-colors">
                  Serket Construction
                </a>
              </li>
              <li>
                <a href="#case-study" className="hover:text-[#FFB800] transition-colors">
                  Flight Case Studies
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFB800] transition-colors">
                  Flight Protocols & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Dispatch */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs uppercase tracking-widest text-neutral-300 font-bold mb-5">
              Flight Operations
            </h4>
            <ul className="space-y-3 text-sm font-normal text-neutral-400">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-[#FFB800] shrink-0" />
                <span>Las Vegas, NV (Nationwide)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#FFB800] shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#FFB800] shrink-0" />
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-white transition-colors">
                  {BRAND.phone}
                </a>
              </li>
              <li className="text-xs font-mono text-neutral-500 pt-2">
                HOURS: 06:00 - 18:00 PST // MON - SAT
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2026 Optic Sky UAV. All rights reserved. • Domain: opticskyuav.com
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-[#FFB800] transition-colors"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
