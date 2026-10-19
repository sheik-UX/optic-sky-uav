import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/content';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-28 sm:py-36 bg-[#13140e] relative border-t border-[#404040]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#ebfc72] font-mono mb-3">
            <span className="w-6 h-[1px] bg-[#ebfc72]" />
            <span>DISCIPLINES & CAPABILITIES</span>
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-normal text-[#f4f3e8] tracking-[-0.03em] leading-[0.95] mb-4">
            COMMERCIAL AERIAL <br />
            <span className="text-[#84837b]">SERVICES</span>
          </h2>
          <p className="text-base text-[#f4f3e8]/80 font-normal leading-[1.62]">
            Tailored visual storytelling and rigorous aerial documentation delivered with commercial precision.
          </p>
        </div>

        {/* 3 Editorial Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="group relative flex flex-col bg-[#13140e] border border-[#404040] hover:border-[#ebfc72]/80 rounded-none overflow-hidden transition-all duration-500"
            >
              {/* Media Preview Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#13140e]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13140e] via-[#13140e]/40 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#13140e]/90 backdrop-blur-md border border-[#404040] rounded-[3.6px]">
                  <span className="font-mono text-xs font-normal tracking-widest text-[#ebfc72]">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans text-2xl lg:text-3xl font-normal text-[#f4f3e8] tracking-[-0.03em] mb-2 group-hover:text-[#ebfc72] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#ebfc72] mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[#84837b] leading-[1.62] font-normal mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5 pt-4 border-t border-[#404040] mb-6">
                    {service.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#84837b] font-mono">
                        <CheckCircle2 size={13} className="text-[#ebfc72] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#f4f3e8] group-hover:text-[#ebfc72] transition-colors pt-4 border-t border-[#404040]"
                >
                  <span>Inquire for {service.title.split('&')[0].trim()}</span>
                  <ArrowUpRight size={13} className="text-[#ebfc72] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
