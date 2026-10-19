import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface VisualTrioBannerProps {
  onDiscussProject: () => void;
  onExploreServices: () => void;
}

export const VisualTrioBanner: React.FC<VisualTrioBannerProps> = ({
  onDiscussProject,
  onExploreServices
}) => {
  const tickerItems = [
    'FAA PART 107 LICENSED',
    'FULLY INSURED ($5M LIABILITY)',
    '4K/60FPS HDR CINEMA',
    'NATIONWIDE DEPLOYMENT',
    '48MP SENSOR FIDELITY',
    'LAANC AIRSPACE AUTHORIZED',
    'RAPID 48-HOUR TURNAROUND',
    'RAW & COLOR-GRADED ASSETS'
  ];

  return (
    <section className="pt-20 pb-0 bg-[#0a0a0a] text-white border-b border-neutral-800 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 mb-16">
        
        {/* 3 Rounded Square/Portrait Photos Side-by-Side Matching Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-14">
          
          <div className="rounded-2xl overflow-hidden aspect-square sm:aspect-[4/5] bg-neutral-900 group shadow-lg">
            <img
              src="/assets/serket/serket-05.jpg"
              alt="Aerial top-down site survey plate"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />
          </div>

          <div className="rounded-2xl overflow-hidden aspect-square sm:aspect-[4/5] bg-neutral-900 group shadow-lg">
            <img
              src="/assets/whistling-straits/whistling-05.jpg"
              alt="Aerial landscape and open horizon capture"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />
          </div>

          <div className="rounded-2xl overflow-hidden aspect-square sm:aspect-[4/5] bg-neutral-900 group shadow-lg">
            <img
              src="/assets/whistling-straits/whistling-08.jpg"
              alt="Golden hour fairway approach capture"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />
          </div>

        </div>

        {/* Action Row: Headline Left, Dual Pill Buttons Right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white leading-tight">
            Ready to see your world <br className="hidden sm:block" />
            from above?
          </h3>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onDiscussProject}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FFB800] text-black font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-200 active:scale-95 shadow-md"
            >
              <span>Book a Flight</span>
              <ArrowUpRight size={15} className="text-black" />
            </button>

            <button
              type="button"
              onClick={onExploreServices}
              className="inline-flex items-center gap-2 bg-transparent border border-white/30 hover:border-white text-white font-medium text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-white/10 active:scale-95"
            >
              <span>Explore Services</span>
              <ArrowRight size={14} className="text-white/80" />
            </button>
          </div>
        </div>

      </div>

      {/* Yellow Animated Marquee / Ticker Banner Matching Reference */}
      <div className="w-full bg-[#FFB800] py-3 overflow-hidden border-t border-b border-yellow-500/30">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center mx-4">
              <span className="font-mono text-xs font-black tracking-widest text-black uppercase">
                {item}
              </span>
              <span className="mx-4 text-black text-xs font-bold">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
