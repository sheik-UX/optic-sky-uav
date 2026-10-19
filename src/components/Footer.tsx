import React from 'react';
import { ArrowUp, Phone, MapPin, Mail } from 'lucide-react';
import { BRAND, PROJECTS } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#13140e] text-[#f4f3e8] border-t border-[#404040] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#404040]">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/branding/logo.png"
                alt="Optic Sky UAV Logo"
                className="h-9 w-auto object-contain"
              />
              <div>
                <span className="font-sans tracking-[-0.03em] uppercase text-xl font-normal text-[#f4f3e8] block">
                  Optic Sky
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#ebfc72] block -mt-0.5">
                  Aerial Visual Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-[#84837b] leading-[1.62] max-w-sm mb-6">
              Optic Sky UAV delivers premium aerial photography and cinematic videography tailored for championship golf courses, active civil construction, and commercial real estate presentations.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#ebfc72]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ebfc72]" />
              <span>FAA Part 107 Commercial Drone Operations</span>
            </div>
          </div>

          {/* Featured Projects Nav */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase font-mono tracking-widest text-[#ebfc72] mb-4">
              Featured Work
            </p>
            <ul className="space-y-2.5 text-xs font-mono">
              {PROJECTS.map((p) => (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    className="text-[#84837b] hover:text-[#f4f3e8] transition-colors flex items-center justify-between group"
                  >
                    <span>{p.title}</span>
                    <span className="text-[10px] text-[#84837b] font-mono group-hover:text-[#ebfc72]">
                      {p.photos.length} Plates
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase font-mono tracking-widest text-[#ebfc72] mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#work" className="text-[#84837b] hover:text-[#f4f3e8] transition-colors">
                  Portfolio Index
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#84837b] hover:text-[#f4f3e8] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#84837b] hover:text-[#f4f3e8] transition-colors">
                  About & Perspective
                </a>
              </li>
              <li>
                <a href="#approach" className="text-[#84837b] hover:text-[#f4f3e8] transition-colors">
                  Production Approach
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#84837b] hover:text-[#f4f3e8] transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Contact Info */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase font-mono tracking-widest text-[#ebfc72] mb-4">
              Contact & Studio
            </p>
            <div className="space-y-3 text-xs font-mono text-[#84837b]">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-[#ebfc72] shrink-0 mt-0.5" />
                <span>{BRAND.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#ebfc72] shrink-0" />
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-[#f4f3e8] transition-colors">
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#ebfc72] shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-[#f4f3e8] transition-colors">
                  {BRAND.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#84837b]">
          <div>
            © {BRAND.copyrightYear} {BRAND.name}. All Rights Reserved. Client Work Protected Under Exclusive Copyright.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#84837b] hover:text-[#ebfc72] transition-colors group"
          >
            <span>Back to Top</span>
            <div className="p-1.5 rounded-[3.6px] bg-[#13140e] border border-[#404040] group-hover:border-[#ebfc72] text-[#ebfc72]">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
