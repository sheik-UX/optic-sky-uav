import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export const CinematicReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Responsive expansion calculations:
  // Initial state: centered 9:16 portrait image (approx 300px x 533px on desktop, 220px x 390px on mobile)
  // Final state: 100vw x 100vh full-viewport bleed with zero borders or UI
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.75],
    ['clamp(240px, 24vw, 340px)', '100vw']
  );

  const imageHeight = useTransform(
    scrollYProgress,
    [0, 0.75],
    ['clamp(426px, 42vw, 604px)', '100vh']
  );

  const imageRadius = useTransform(scrollYProgress, [0, 0.65], ['3.6px', '0px']);
  const imageBorderOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Subtle cinematic scale once full-screen is achieved
  const imageScale = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 1.05]);

  // Staggered text disappearance transforms (editorial organized-chaos typography)
  // Top-left coordinate stamp
  const tag1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const tag1Y = useTransform(scrollYProgress, [0, 0.3], [0, -45]);
  const tag1X = useTransform(scrollYProgress, [0, 0.3], [0, -25]);

  // Top-right telemetry & timestamp
  const tag2Opacity = useTransform(scrollYProgress, [0.05, 0.35], [1, 0]);
  const tag2Y = useTransform(scrollYProgress, [0.05, 0.35], [0, -35]);
  const tag2X = useTransform(scrollYProgress, [0.05, 0.35], [0, 45]);

  // Mid-left editorial headline & label
  const tag3Opacity = useTransform(scrollYProgress, [0.1, 0.45], [1, 0]);
  const tag3X = useTransform(scrollYProgress, [0.1, 0.45], [0, -70]);
  const tag3Rotate = useTransform(scrollYProgress, [0.1, 0.45], [-3, -8]);

  // Mid-right rotated annotation
  const tag4Opacity = useTransform(scrollYProgress, [0.15, 0.48], [1, 0]);
  const tag4X = useTransform(scrollYProgress, [0.15, 0.48], [0, 60]);
  const tag4Rotate = useTransform(scrollYProgress, [0.15, 0.48], [90, 100]);

  // Bottom-left flight technical specifications
  const tag5Opacity = useTransform(scrollYProgress, [0.2, 0.55], [1, 0]);
  const tag5Y = useTransform(scrollYProgress, [0.2, 0.55], [0, 50]);

  // Bottom-right mission classification & coordinates
  const tag6Opacity = useTransform(scrollYProgress, [0.25, 0.6], [1, 0]);
  const tag6Y = useTransform(scrollYProgress, [0.25, 0.6], [0, 50]);
  const tag6Scale = useTransform(scrollYProgress, [0.25, 0.6], [1, 0.9]);

  // Center subtle prompt indicator
  const promptOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#000000] text-[#f4f3e8] z-20"
      style={{ height: shouldReduceMotion ? '100vh' : '300vh' }}
      aria-label="Cinematic Portfolio Reveal"
    >
      {/* Pinned Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#000000]">
        
        {/* Background dark grid lines for mission terminal aesthetic (Inversa style) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(to right, #404040 1px, transparent 1px), linear-gradient(to bottom, #404040 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} 
        />

        {/* ============================================================== */}
        {/* EDITORIAL ORGANIZED-CHAOS TYPOGRAPHY AROUND THE PORTRAIT IMAGE  */}
        {/* ============================================================== */}

        {/* 1. Top-Left: Coordinates & Mission Marker */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 1 : tag1Opacity,
            y: shouldReduceMotion ? 0 : tag1Y,
            x: shouldReduceMotion ? 0 : tag1X,
          }}
          className="absolute top-12 left-6 sm:left-12 lg:left-20 z-10 pointer-events-none select-none max-w-xs"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ebfc72] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#ebfc72]">
              43°51'21"N 87°44'02"W
            </span>
          </div>
          <p className="font-mono text-[11px] text-[#84837b] uppercase tracking-wider">
            Sector // Lake Michigan Shoreline Escarpment
          </p>
        </motion.div>

        {/* 2. Top-Right: Flight Telemetry & Sun Angle */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 1 : tag2Opacity,
            y: shouldReduceMotion ? 0 : tag2Y,
            x: shouldReduceMotion ? 0 : tag2X,
          }}
          className="absolute top-12 right-6 sm:right-12 lg:right-20 z-10 pointer-events-none select-none text-right"
        >
          <div className="inline-block border border-[#404040] bg-[#13140e]/90 px-2.5 py-1 rounded-[3.6px] mb-1.5">
            <span className="font-mono text-[11px] text-[#f4f3e8] tracking-widest uppercase">
              ALT: 285 FT AGL • HDG: 042°
            </span>
          </div>
          <p className="font-mono text-[11px] text-[#84837b] uppercase tracking-wider">
            OPTIC SKY MISSION LOG // 03-WS
          </p>
        </motion.div>

        {/* 3. Mid-Left: Editorial Headline & Statement */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 1 : tag3Opacity,
            x: shouldReduceMotion ? 0 : tag3X,
            rotate: shouldReduceMotion ? 0 : tag3Rotate,
          }}
          className="absolute left-6 sm:left-12 lg:left-24 z-10 pointer-events-none select-none max-w-sm hidden sm:block"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#ebfc72] block mb-2">
            [ EXHIBITION PLATE 01 ]
          </span>
          <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-normal text-[#f4f3e8] leading-[1.05] tracking-tight mb-2">
            THE ANATOMY <br />
            OF A PLACE.
          </h3>
          <p className="font-mono text-xs text-[#84837b] leading-relaxed">
            Where natural linksland contours meet architectural golf design.
          </p>
        </motion.div>

        {/* 4. Mid-Right: Rotated Vertical Annotation (Field Instrument Style) */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 1 : tag4Opacity,
            x: shouldReduceMotion ? 0 : tag4X,
            rotate: shouldReduceMotion ? 90 : tag4Rotate,
          }}
          className="absolute right-4 sm:right-10 lg:right-16 z-10 pointer-events-none select-none origin-bottom-right hidden md:block"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1px] bg-[#404040]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#f4f3e8]">
              CALIBRATED SENSOR • RAW DNG HDR
            </span>
          </div>
        </motion.div>

        {/* 5. Bottom-Left: Flight Technical Specs */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 1 : tag5Opacity,
            y: shouldReduceMotion ? 0 : tag5Y,
          }}
          className="absolute bottom-12 left-6 sm:left-12 lg:left-20 z-10 pointer-events-none select-none"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ebfc72]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#f4f3e8]">
              Whistling Straits Coastal Sweep
            </span>
          </div>
          <p className="font-mono text-[11px] text-[#84837b]">
            24mm Equivalent Prime • f/2.8 • 1/1200s • ISO 100
          </p>
        </motion.div>

        {/* 6. Bottom-Right: Discovery Indicator */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 1 : tag6Opacity,
            y: shouldReduceMotion ? 0 : tag6Y,
            scale: shouldReduceMotion ? 1 : tag6Scale,
          }}
          className="absolute bottom-12 right-6 sm:right-12 lg:right-20 z-10 pointer-events-none select-none text-right"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#ebfc72] block mb-1">
            SCROLL REVEAL SEQUENCE
          </span>
          <span className="font-mono text-xs text-[#84837b] tracking-widest">
            EXPANDING TO IMMERSIVE 100VW
          </span>
        </motion.div>

        {/* Scroll Instruction Hint (Disappears quickly) */}
        <motion.div
          style={{ opacity: shouldReduceMotion ? 1 : promptOpacity }}
          className="absolute bottom-6 z-10 pointer-events-none select-none text-center"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#84837b]">
            ↓ SCROLL TO EXPAND DISCOVERY
          </span>
        </motion.div>

        {/* ============================================================== */}
        {/* EXPANDING 9:16 PORTRAIT IMAGE CONTAINER                        */}
        {/* ============================================================== */}
        <motion.div
          style={{
            width: shouldReduceMotion ? '100vw' : imageWidth,
            height: shouldReduceMotion ? '100vh' : imageHeight,
            borderRadius: shouldReduceMotion ? '0px' : imageRadius,
          }}
          className="relative z-0 overflow-hidden shadow-2xl transition-all duration-75 flex items-center justify-center bg-[#0d0f0d]"
        >
          {/* Authentic Client Image: Whistling Straits Coastal Cliff Fairway */}
          <motion.img
            style={{
              scale: shouldReduceMotion ? 1 : imageScale,
            }}
            src="/assets/whistling-straits/whistling-01.jpg"
            alt="Whistling Straits coastal linksland aerial sweep over Lake Michigan"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />

          {/* Hairline Border on initial portrait container */}
          <motion.div
            style={{
              opacity: shouldReduceMotion ? 0 : imageBorderOpacity,
              borderRadius: shouldReduceMotion ? '0px' : imageRadius,
            }}
            className="absolute inset-0 border border-[#404040] pointer-events-none"
          />
        </motion.div>

      </div>
    </section>
  );
};
