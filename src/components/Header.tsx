import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { BRAND } from '../data/content';

interface HeaderProps {
  onNavigate?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
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
    { name: 'Case Study', href: '#case-study' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Optic Sky UAV Home"
          >
            <img
              src="/assets/branding/logo.png"
              alt="Optic Sky UAV Logo"
              className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display tracking-tight text-base md:text-lg font-bold text-white uppercase">
                OPTIC SKY
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#FFB800] uppercase -mt-0.5">
                UAV // AERIAL CINEMA
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
                className="text-xs uppercase tracking-widest text-neutral-300 hover:text-white transition-colors relative py-1 font-medium group focus:outline-none"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFB800] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Header Action — Yellow Pill Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="text-xs font-mono text-neutral-400 hover:text-[#FFB800] transition-colors flex items-center gap-1.5 px-3 py-1.5 focus:outline-none"
              title="Call Optic Sky UAV"
            >
              <Phone size={13} className="text-[#FFB800]" />
              <span className="tracking-wider">{BRAND.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold bg-[#FFB800] hover:bg-yellow-400 text-black px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-yellow-500/20 active:scale-95 focus:outline-none"
            >
              <span>Get a Quote</span>
              <ArrowUpRight size={14} className="text-black" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#FFB800] focus:outline-none rounded-sm transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-center px-8 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#FFB800] font-mono">
            Navigation Index
          </p>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-display text-2xl uppercase text-white hover:text-[#FFB800] transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-white/10 mt-4 flex flex-col gap-4">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="text-sm text-neutral-300 flex items-center justify-center gap-2"
            >
              <Phone size={15} className="text-[#FFB800]" />
              <span>{BRAND.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold bg-[#FFB800] text-black py-3.5 px-6 rounded-full"
            >
              <span>Get a Quote</span>
              <ArrowUpRight size={15} className="text-black" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
