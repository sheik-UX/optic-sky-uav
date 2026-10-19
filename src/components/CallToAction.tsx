import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface CallToActionProps {
  onDiscussProject: () => void;
  onExploreWork: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onDiscussProject,
  onExploreWork
}) => {
  return (
    <section className="relative py-32 sm:py-44 overflow-hidden flex items-center justify-center text-center">
      {/* Background Twilight Fairway Imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/whistling-straits/whistling-02.jpg"
          alt="Coastal fairway at dusk"
          className="w-full h-full object-cover object-center filter brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-6 h-[2px] bg-[#FFB800]" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] font-semibold text-[#FFB800]">
            TAKE FLIGHT WITH US
          </span>
          <span className="w-6 h-[2px] bg-[#FFB800]" />
        </div>

        {/* Display Headline Matching Reference Screenshot */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white tracking-tight leading-[1.05] mb-6">
          HAVE A PROPERTY WORTH <br />
          BEING SEEN FROM ABOVE?
        </h2>

        {/* Subhead */}
        <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl mb-12 text-balance">
          Schedule your commercial flight consultation today. Our certified flight team handles airspace authorization, optimal sun alignment, and complete 4K cinema master delivery.
        </p>

        {/* Dual Pill Buttons Matching Reference */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <button
            type="button"
            onClick={onDiscussProject}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#FFB800] text-black font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-200 shadow-xl active:scale-95"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={16} className="text-black" />
          </button>

          <button
            type="button"
            onClick={onExploreWork}
            className="inline-flex items-center gap-2 bg-transparent border border-white/30 hover:border-white text-white font-medium text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/10 active:scale-95"
          >
            <span>Explore Our Work</span>
            <ArrowDown size={14} className="text-white/80" />
          </button>
        </div>
      </div>
    </section>
  );
};
