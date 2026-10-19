import React from 'react';
import { DIFFERENCE_POINTS } from '../data/content';

export const Difference: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#13140e] relative border-t border-[#404040]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#ebfc72] font-mono mb-3">
            <span className="w-6 h-[1px] bg-[#ebfc72]" />
            <span>VALUE & ARTISTRY</span>
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-normal text-[#f4f3e8] tracking-[-0.03em] leading-[0.95] mb-4">
            THE DIFFERENCE IS <br />
            <span className="text-[#84837b]">THE PERSPECTIVE.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#ebfc72] font-mono uppercase tracking-widest font-normal mb-4">
            We turn aerial perspectives into visual stories that make places stand out.
          </p>
          <p className="text-sm sm:text-base text-[#f4f3e8]/80 font-normal leading-[1.62] max-w-2xl">
            Optic Sky combines disciplined flight operations with commercial editorial direction, ensuring every asset serves your marketing, documentation, or architectural requirements.
          </p>
        </div>

        {/* 5 Distinct Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENCE_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-none bg-[#13140e] border border-[#404040] hover:border-[#ebfc72]/70 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#ebfc72] font-normal block mb-4">
                  {item.num}
                </span>
                <h3 className="font-sans text-2xl text-[#f4f3e8] font-normal tracking-[-0.03em] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#84837b] leading-[1.62] font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#404040] flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#84837b]">
                <span>OPTIC SKY UAV</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ebfc72]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
