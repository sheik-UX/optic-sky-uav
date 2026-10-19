import React from 'react';
import { DIFFERENCE_POINTS } from '../data/content';

export const Difference: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#141713] relative border-t border-[#232D24]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C2A676] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#C2A676]" />
            <span>VALUE & ARTISTRY</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F4F0E7] leading-tight mb-4">
            THE DIFFERENCE IS <br />
            <span className="italic font-normal text-[#D9D5CA]">THE PERSPECTIVE.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#C2A676] uppercase tracking-[0.18em] font-medium mb-4">
            We turn aerial perspectives into visual stories that make places stand out.
          </p>
          <p className="text-sm sm:text-base text-[#D9D5CA]/80 font-light leading-relaxed max-w-2xl">
            Optic Sky combines disciplined flight operations with commercial editorial direction, ensuring every asset serves your marketing, documentation, or architectural requirements.
          </p>
        </div>

        {/* 5 Distinct Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENCE_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-sm bg-[#181D18] border border-[#273229] hover:border-[#C2A676]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-sm text-[#C2A676] font-medium block mb-4">
                  {item.num}
                </span>
                <h3 className="font-serif text-2xl text-[#F4F0E7] font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D9D5CA]/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#232D24] flex items-center justify-between text-[11px] uppercase tracking-wider text-[#8E8A80]">
                <span>OPTIC SKY UAV</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#19352A]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
