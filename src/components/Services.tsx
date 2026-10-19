import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/content';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-28 sm:py-36 bg-[#141713] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C2A676] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#C2A676]" />
            <span>DISCIPLINES & CAPABILITIES</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F4F0E7] leading-tight mb-4">
            COMMERCIAL AERIAL <br />
            <span className="italic font-normal text-[#D9D5CA]">SERVICES</span>
          </h2>
          <p className="text-base text-[#D9D5CA]/80 font-light leading-relaxed">
            Tailored visual storytelling and rigorous aerial documentation delivered with commercial precision.
          </p>
        </div>

        {/* 3 Editorial Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="group relative flex flex-col bg-[#181D18] border border-[#273229] hover:border-[#C2A676]/60 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#19352A]/20"
            >
              {/* Media Preview Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#111]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181D18] via-[#181D18]/40 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#121512]/80 backdrop-blur-md border border-[#2D3A31] rounded-sm">
                  <span className="font-serif text-sm font-semibold tracking-widest text-[#C2A676]">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[#F4F0E7] mb-2 group-hover:text-[#C2A676] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#C2A676] font-medium mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[#D9D5CA]/80 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5 pt-4 border-t border-[#263128] mb-6">
                    {service.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#8E8A80]">
                        <CheckCircle2 size={13} className="text-[#C2A676] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#D9D5CA] group-hover:text-[#C2A676] transition-colors pt-4 border-t border-[#263128]"
                >
                  <span>Inquire for {service.title.split('&')[0].trim()}</span>
                  <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
