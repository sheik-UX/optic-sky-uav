import React, { useRef, useState, useEffect } from 'react';

interface HeroProps {
  onExploreWork: () => void;
  onDiscussProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onDiscussProject }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (prefersReducedMotion) {
        videoRef.current.pause();
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay policy prevented playback; poster image remains gracefully visible
          });
        }
      }
    }
  }, [prefersReducedMotion]);

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-end overflow-hidden pt-28 pb-16 sm:pb-20 lg:pb-24">
      {/* 1. Full-Bleed Video & Poster Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Poster Image (Fallback, Pre-load, and Static View for Reduced Motion) */}
        <img
          src="/assets/video/hero-poster.jpg"
          alt="Optic Sky UAV Aerial Coastal Golf Course Panorama"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded && !prefersReducedMotion ? 'opacity-0' : 'opacity-100'
          }`}
          loading="eager"
        />

        {/* Continuous Looping Video Element (Autoplay, Loop, Muted, PlaysInline) */}
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/assets/video/hero-poster.jpg"
            onCanPlayThrough={() => setVideoLoaded(true)}
            onPlaying={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="/assets/video/hero-background-seamless.mp4" type="video/mp4" />
            <source src="/assets/video/hero-background.mp4" type="video/mp4" />
          </video>
        )}

        {/* 2. Carefully Balanced Cinematic Gradient Overlays */}
        {/* Soft bottom vignette allowing full coastline & golf course visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
        {/* Left vignette for text legibility without darkening the center/right landscape */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
        {/* Subtle global atmospheric film grade */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* 3. Bottom-Left Aligned Content Container Matching Reference */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl flex flex-col items-start text-left">
          
          {/* Eyebrow Label matching Reference Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20 mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-neutral-200">
              ULTRA-HIGH DEFINITION CINEMATIC UAV PRODUCTION
            </span>
          </div>

          {/* Bold Futuristic Editorial Headline: Exactly 2 Lines on Desktop Matching Reference */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-[44px] lg:text-[54px] xl:text-[58px] font-extrabold uppercase text-white tracking-[-0.02em] leading-[1.04] mb-5">
            SEE YOUR PROPERTY FROM <br className="hidden sm:inline" />
            A NEW PERSPECTIVE.
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base lg:text-[17px] text-neutral-200/95 font-normal leading-[1.65] max-w-2xl mb-8 text-balance">
            Premium aerial photography and cinematic drone video for championship golf courses, luxury resorts, structural engineering milestones, and exceptional destinations worldwide.
          </p>

          {/* Two CTA Buttons Matching Reference */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {/* Primary Yellow Button: VIEW PORTFOLIO */}
            <button
              type="button"
              onClick={onExploreWork}
              className="inline-flex items-center justify-center bg-[#FFB800] hover:bg-yellow-400 text-black font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-yellow-500/20 active:scale-95 cursor-pointer"
            >
              <span>VIEW PORTFOLIO</span>
            </button>

            {/* Secondary Outlined Button: BOOK MISSION */}
            <button
              type="button"
              onClick={onDiscussProject}
              className="inline-flex items-center justify-center bg-black/30 hover:bg-black/60 text-white border border-white/30 hover:border-white text-xs uppercase tracking-wider font-semibold px-8 py-3.5 rounded-full backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>BOOK MISSION</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
