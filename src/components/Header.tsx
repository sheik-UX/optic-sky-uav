import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { BRAND } from '../data/content';

interface HeaderProps {
  onNavigate?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#121512]/90 backdrop-blur-md border-b border-[#2D3A31]/50 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#121512]/80 via-[#121512]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A676] rounded-sm"
            aria-label="Optic Sky UAV Home"
          >
            <img
              src="/assets/branding/logo.png"
              alt="Optic Sky UAV Logo"
              className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif tracking-widest uppercase text-base md:text-lg font-medium text-[#F4F0E7]">
                Optic Sky
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C2A676] font-sans -mt-1 font-semibold">
                UAV Production
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#D9D5CA] hover:text-[#F4F0E7] transition-colors relative py-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A676] rounded-sm"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C2A676] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Header Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="text-xs font-sans text-[#D9D5CA] hover:text-[#C2A676] transition-colors flex items-center gap-1.5 px-3 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A676] rounded-sm"
              title="Call Optic Sky UAV"
            >
              <Phone size={13} className="text-[#C2A676]" />
              <span className="tracking-wider">{BRAND.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold bg-[#19352A] hover:bg-[#224839] text-[#F4F0E7] border border-[#2D4D3D] px-4 py-2.5 rounded-sm transition-all duration-300 shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A676]"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight size={14} className="text-[#C2A676]" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F4F0E7] hover:text-[#C2A676] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A676] rounded-sm transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#121512]/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-center px-8 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C2A676] font-semibold">
            Navigation Index
          </p>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-serif text-3xl text-[#F4F0E7] hover:text-[#C2A676] transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-[#2D3A31] mt-4 flex flex-col gap-4">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="text-sm text-[#D9D5CA] flex items-center justify-center gap-2"
            >
              <Phone size={15} className="text-[#C2A676]" />
              <span>{BRAND.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold bg-[#19352A] text-[#F4F0E7] py-3.5 px-6 rounded-sm border border-[#2D4D3D]"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight size={15} className="text-[#C2A676]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
