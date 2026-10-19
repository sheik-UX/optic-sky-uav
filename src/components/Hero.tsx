import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onDiscussProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onDiscussProject }) => {
  const heroBackgrounds = [
    {
      id: 'whistling',
      title: 'Whistling Straits',
      location: 'Sheboygan, WI',
      category: 'Championship Golf Course',
      src: '/assets/whistling-straits/whistling-02.jpg',
      alt: 'Whistling Straits coastal championship golf course aerial sweep'
    },
    {
      id: 'cascata',
      title: 'Cascata Water Reclamation',
      location: 'Boulder City, NV',
      category: 'Civil Infrastructure',
      src: '/assets/cascata-water-reclamation/cascata-01.jpg',
      alt: 'Cascata Water Reclamation municipal civil infrastructure facility'
    },
    {
      id: 'serket',
      title: 'Serket Construction',
      location: 'Las Vegas, NV',
      category: 'Commercial Development',
      src: '/assets/serket/serket-01.jpg',
      alt: 'Serket architectural high-altitude development survey'
    }
  ];

  const [activeBgIndex, setActiveBgIndex] = useState(0);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Imagery with Subtle Zoom */}
      <div className="absolute inset-0 z-0">
        {heroBackgrounds.map((bg, idx) => (
          <div
            key={bg.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              idx === activeBgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={bg.src}
              alt={bg.alt}
              className="w-full h-full object-cover object-center transform transition-transform duration-[12000ms] ease-out scale-105"
              loading="eager"
            />
          </div>
        ))}

        {/* Cinematic Vignette Overlay Matching Reference */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-6 h-[1.5px] bg-[#38BDF8]" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] font-semibold text-[#38BDF8]">
            COMMERCIAL DRONE & AERIAL CINEMATOGRAPHY
          </span>
        </div>

        {/* Bold Futuristic Editorial Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white tracking-[-0.02em] leading-[1.04] max-w-4xl mb-6">
          SEE YOUR PROPERTY FROM <br className="hidden sm:block" />
          A NEW PERSPECTIVE.
        </h1>

        {/* Subtitle Description */}
        <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl mb-10 text-balance">
          High-resolution aerial photography, 4K cinematic video, and precision mapping for commercial properties, championship golf courses, and infrastructure.
        </p>

        {/* Dual Pill CTA Buttons Matching Reference */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14">
          <button
            type="button"
            onClick={onDiscussProject}
            className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-yellow-400 text-black font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-yellow-500/25 active:scale-95"
          >
            <span>Get a Quote</span>
            <ArrowUpRight size={16} className="text-black" />
          </button>

          <button
            type="button"
            onClick={onExploreWork}
            className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/30 hover:border-white text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-full transition-all duration-200 active:scale-95"
          >
            <span>Explore Work</span>
            <ArrowDown size={14} className="text-white/80" />
          </button>
        </div>

        {/* Perspective Switcher Controls */}
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono">
          {heroBackgrounds.map((bg, idx) => (
            <button
              key={bg.id}
              type="button"
              onClick={() => setActiveBgIndex(idx)}
              className={`px-3.5 py-1 rounded-full transition-all duration-300 ${
                activeBgIndex === idx
                  ? 'bg-white/20 text-white font-medium shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {bg.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
