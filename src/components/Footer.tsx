import React from 'react';
import { ArrowUp, Phone, MapPin, Mail } from 'lucide-react';
import { BRAND, PROJECTS } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e110e] text-[#D9D5CA] border-t border-[#232D24] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#202720]">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/branding/logo.png"
                alt="Optic Sky UAV Logo"
                className="h-9 w-auto object-contain"
              />
              <div>
                <span className="font-serif tracking-widest uppercase text-xl font-medium text-[#F4F0E7] block">
                  Optic Sky
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2A676] font-sans block -mt-1 font-semibold">
                  Aerial Visual Studio
                </span>
              </div>
            </div>

            <p className="text-sm text-[#8E8A80] font-light leading-relaxed max-w-sm mb-6">
              Optic Sky UAV delivers premium aerial photography and cinematic videography tailored for championship golf courses, active civil construction, and commercial real estate presentations.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#C2A676]">
              <span className="w-2 h-2 rounded-full bg-[#19352A] border border-[#C2A676]" />
              <span>FAA Part 107 Commercial Drone Operations</span>
            </div>
          </div>

          {/* Featured Projects Nav */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C2A676] font-semibold mb-4">
              Featured Work
            </p>
            <ul className="space-y-2.5 text-sm">
              {PROJECTS.map((p) => (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    className="text-[#D9D5CA] hover:text-[#F4F0E7] hover:underline transition-colors flex items-center justify-between group"
                  >
                    <span>{p.title}</span>
                    <span className="text-[10px] text-[#8E8A80] font-mono group-hover:text-[#C2A676]">
                      {p.photos.length} Plates
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C2A676] font-semibold mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#work" className="text-[#8E8A80] hover:text-[#F4F0E7] transition-colors">
                  Portfolio Index
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#8E8A80] hover:text-[#F4F0E7] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#8E8A80] hover:text-[#F4F0E7] transition-colors">
                  About & Perspective
                </a>
              </li>
              <li>
                <a href="#approach" className="text-[#8E8A80] hover:text-[#F4F0E7] transition-colors">
                  Production Approach
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#8E8A80] hover:text-[#F4F0E7] transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Contact Info */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C2A676] font-semibold mb-4">
              Contact & Studio
            </p>
            <div className="space-y-3 text-xs text-[#8E8A80]">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-[#C2A676] shrink-0 mt-0.5" />
                <span>{BRAND.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#C2A676] shrink-0" />
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-[#F4F0E7] transition-colors">
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#C2A676] shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-[#F4F0E7] transition-colors">
                  {BRAND.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8A80]">
          <div>
            © {BRAND.copyrightYear} {BRAND.name}. All Rights Reserved. Client Work Protected Under Exclusive Copyright.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D9D5CA] hover:text-[#C2A676] transition-colors group"
          >
            <span>Back to Top</span>
            <div className="p-1.5 rounded-full bg-[#181D18] border border-[#263128] group-hover:border-[#C2A676]">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
