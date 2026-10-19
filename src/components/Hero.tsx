import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Compass, Layers } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onDiscussProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onDiscussProject }) => {
  // Allow switching between the 3 authentic client project views in the hero
  const heroBackgrounds = [
    {
      id: 'whistling',
      title: 'Whistling Straits',
      location: 'Sheboygan, WI',
      category: 'Golf & Hospitality',
      src: '/assets/whistling-straits/whistling-01.jpg',
      alt: 'Whistling Straits coastal championship golf course aerial sweep'
    },
    {
      id: 'serket',
      title: 'Serket',
      location: 'Commercial Development',
      category: 'Architectural & Survey',
      src: '/assets/serket/serket-01.jpg',
      alt: 'Serket architectural high-altitude development survey'
    },
    {
      id: 'cascata',
      title: 'Cascata Water Reclamation',
      location: 'Boulder City, NV',
      category: 'Civil Infrastructure',
      src: '/assets/cascata-water-reclamation/cascata-01.jpg',
      alt: 'Cascata Water Reclamation municipal civil infrastructure facility'
    }
  ];

  const [activeBgIndex, setActiveBgIndex] = useState(0);
  const currentBg = heroBackgrounds[activeBgIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Imagery with Smooth Transition */}
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
              className="w-full h-full object-cover object-center transform transition-transform duration-[12000ms] ease-out scale-105 motion-safe:hover:scale-100"
              loading="eager"
            />
          </div>
        ))}

        {/* Editorial Gradients & Restrained Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121512] via-[#121512]/60 to-[#121512]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#121512]/40 to-[#121512]/80" />
        <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#19352A]/80 border border-[#C2A676]/40 backdrop-blur-md mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C2A676] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#F4F0E7]">
            A CLEARER VIEW FROM ABOVE
          </span>
        </div>

        {/* Grand Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F4F0E7] font-light leading-[1.05] max-w-4xl mb-4">
          AERIAL IMAGERY <br className="hidden sm:block" />
          <span className="italic font-normal text-[#F4F0E7] tracking-normal">WITH PURPOSE</span>
        </h1>

        {/* Supporting Line */}
        <p className="text-sm sm:text-base md:text-lg uppercase tracking-[0.25em] text-[#C2A676] font-medium mb-6">
          ELEVATE YOUR VISION.
        </p>

        {/* Supporting Paragraph */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#D9D5CA] font-light leading-relaxed mb-10 text-balance">
          Optic Sky UAV captures aerial photography and cinematic video that reveal the character, progress, and potential of places from a different perspective.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            type="button"
            onClick={onExploreWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-[#19352A] hover:bg-[#224839] text-[#F4F0E7] font-semibold text-xs uppercase tracking-[0.22em] border border-[#345947] shadow-xl hover:shadow-[#19352A]/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A676]"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowDown size={14} className="text-[#C2A676]" />
          </button>

          <button
            type="button"
            onClick={onDiscussProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-[#181D18]/80 hover:bg-[#202720] text-[#D9D5CA] hover:text-[#F4F0E7] font-semibold text-xs uppercase tracking-[0.22em] border border-[#2D3A31] backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A676]"
          >
            <span>DISCUSS A PROJECT</span>
            <ArrowUpRight size={14} className="text-[#C2A676]" />
          </button>
        </div>

        {/* Live Project Perspective Switcher Bar */}
        <div className="mt-14 pt-6 border-t border-[#2D3A31]/60 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#8E8A80] font-sans mr-2">
            <Compass size={13} className="text-[#C2A676]" />
            <span>Perspective:</span>
          </div>

          {heroBackgrounds.map((bg, idx) => (
            <button
              key={bg.id}
              type="button"
              onClick={() => setActiveBgIndex(idx)}
              className={`px-3 py-1.5 rounded-sm text-xs font-sans tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                idx === activeBgIndex
                  ? 'bg-[#19352A] text-[#F4F0E7] border-[#C2A676]/60 shadow-md'
                  : 'bg-[#181D18]/60 text-[#8E8A80] hover:text-[#D9D5CA] border-transparent hover:border-[#2D3A31]'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${idx === activeBgIndex ? 'bg-[#C2A676]' : 'bg-[#555]'}`} />
              <span className="font-medium">{bg.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Bottom Meta Banner */}
      <div className="absolute bottom-4 left-0 right-0 z-10 px-6 sm:px-12 flex items-center justify-between text-[11px] tracking-[0.2em] text-[#8E8A80] font-sans uppercase">
        <div className="hidden md:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#19352A] border border-[#C2A676]" />
          <span>LAS VEGAS, NV & NATIONWIDE DEPLOYMENT</span>
        </div>

        <div className="mx-auto md:mx-0 flex items-center gap-2 text-[#C2A676]/80 animate-bounce">
          <ArrowDown size={14} />
          <span className="text-[10px] tracking-[0.25em]">SCROLL TO EXPLORE</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Layers size={13} className="text-[#C2A676]" />
          <span>CURRENT VIEW: {currentBg.title} ({currentBg.category})</span>
        </div>
      </div>
    </section>
  );
};
