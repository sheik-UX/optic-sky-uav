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
        <div className="absolute inset-0 bg-gradient-to-t from-[#13140e] via-[#13140e]/60 to-[#13140e]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#13140e]/40 to-[#13140e]/85" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[3.6px] bg-[#13140e]/90 border border-[#404040] backdrop-blur-md mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ebfc72] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] font-medium text-[#ebfc72]">
            A CLEARER VIEW FROM ABOVE
          </span>
        </div>

        {/* Grand Headline */}
        <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.03em] text-[#f4f3e8] font-normal leading-[0.92] max-w-4xl mb-4">
          AERIAL IMAGERY <br className="hidden sm:block" />
          <span className="text-[#f4f3e8]">WITH PURPOSE</span>
        </h1>

        {/* Supporting Line */}
        <p className="text-sm sm:text-base md:text-lg font-mono uppercase tracking-[0.2em] text-[#ebfc72] font-normal mb-6">
          ELEVATE YOUR VISION.
        </p>

        {/* Supporting Paragraph */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#84837b] font-normal leading-[1.62] mb-10 text-balance">
          Optic Sky UAV captures aerial photography and cinematic video that reveal the character, progress, and potential of places from a different perspective.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            type="button"
            onClick={onExploreWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[3.6px] bg-[#ebfc72] hover:bg-[#bacd31] text-[#13140e] font-mono font-medium text-xs uppercase tracking-[0.18em] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ebfc72]"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowDown size={14} className="text-[#13140e]" />
          </button>

          <button
            type="button"
            onClick={onDiscussProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[3.6px] bg-transparent hover:bg-[#f4f3e8]/10 text-[#f4f3e8] font-mono font-medium text-xs uppercase tracking-[0.18em] border border-[#404040] hover:border-[#f4f3e8] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ebfc72]"
          >
            <span>DISCUSS A PROJECT</span>
            <ArrowUpRight size={14} className="text-[#ebfc72]" />
          </button>
        </div>

        {/* Live Project Perspective Switcher Bar */}
        <div className="mt-14 pt-6 border-t border-[#404040] flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#84837b] mr-2">
            <Compass size={13} className="text-[#ebfc72]" />
            <span>Perspective:</span>
          </div>

          {heroBackgrounds.map((bg, idx) => (
            <button
              key={bg.id}
              type="button"
              onClick={() => setActiveBgIndex(idx)}
              className={`px-3 py-1.5 rounded-[3.6px] text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-2 border ${
                idx === activeBgIndex
                  ? 'bg-[#13140e] text-[#f4f3e8] border-[#ebfc72]'
                  : 'bg-transparent text-[#84837b] hover:text-[#f4f3e8] border-transparent hover:border-[#404040]'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${idx === activeBgIndex ? 'bg-[#ebfc72]' : 'bg-[#404040]'}`} />
              <span className="font-normal">{bg.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Bottom Meta Banner */}
      <div className="absolute bottom-4 left-0 right-0 z-10 px-6 sm:px-12 flex items-center justify-between text-[11px] tracking-widest text-[#84837b] font-mono uppercase">
        <div className="hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ebfc72]" />
          <span>LAS VEGAS, NV // NATIONWIDE MISSION DEPLOYMENT</span>
        </div>

        <div className="mx-auto md:mx-0 flex items-center gap-2 text-[#ebfc72] animate-bounce">
          <ArrowDown size={13} />
          <span className="text-[10px] tracking-[0.25em]">SCROLL TO EXPLORE</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Layers size={13} className="text-[#ebfc72]" />
          <span>CURRENT VIEW: {currentBg.title} [{currentBg.category}]</span>
        </div>
      </div>
    </section>
  );
};

