import React, { useRef, useEffect, useCallback } from 'react';
import { Camera, Film, ShieldCheck } from 'lucide-react';

interface ElevateDestinationsProps {
  onPlayVideo?: () => void;
}

const TOTAL_FRAMES = 300;
const FRAME_PREFIX = '/assets/aerial-sequence/ezgif-frame-';

function getFrameUrl(index: number): string {
  const frameNum = String(index + 1).padStart(3, '0');
  return `${FRAME_PREFIX}${frameNum}.jpg`;
}

export const ElevateDestinations: React.FC<ElevateDestinationsProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef(0);

  // Draw frame to canvas with high-quality object-fit: cover scaling
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find requested frame or nearest loaded frame to eliminate any blank flashes
    let img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = frameIdx - offset;
        if (prev >= 0 && imagesRef.current[prev]?.complete && imagesRef.current[prev]?.naturalWidth) {
          img = imagesRef.current[prev];
          break;
        }
        const next = frameIdx + offset;
        if (next < TOTAL_FRAMES && imagesRef.current[next]?.complete && imagesRef.current[next]?.naturalWidth) {
          img = imagesRef.current[next];
          break;
        }
      }
    }

    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const imgRatio = iw / ih;
    const canvasRatio = cw / ch;

    let renderW = cw;
    let renderH = ch;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderH = cw / imgRatio;
      offsetY = (ch - renderH) / 2;
    } else {
      renderW = ch * imgRatio;
      offsetX = (cw - renderW) / 2;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  }, []);

  // Canvas resize handler matching device pixel ratio (capped at 2 for performance)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (rect.width > 0 && rect.height > 0) {
        const newW = Math.round(rect.width * dpr);
        const newH = Math.round(rect.height * dpr);
        if (canvas.width !== newW || canvas.height !== newH) {
          canvas.width = newW;
          canvas.height = newH;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
          }
          drawFrame(currentFrameRef.current);
        }
      }
    };

    updateCanvasSize();
    const ro = new ResizeObserver(updateCanvasSize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [drawFrame]);

  // Intelligent prioritized frame preloader
  useEffect(() => {
    let isCancelled = false;

    // 1. Immediately load frame 0 for instant initial view
    const frame0 = new Image();
    frame0.src = getFrameUrl(0);
    frame0.onload = () => {
      if (isCancelled) return;
      imagesRef.current[0] = frame0;
      if (currentFrameRef.current === 0) {
        drawFrame(0);
      }
    };

    // 2. Load keyframes (stride of 5) across the sequence
    const keyframeIndices: number[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i += 5) {
      if (i !== 0) keyframeIndices.push(i);
    }
    if (!keyframeIndices.includes(TOTAL_FRAMES - 1)) {
      keyframeIndices.push(TOTAL_FRAMES - 1);
    }

    const loadBatch = async (indices: number[], concurrency = 8) => {
      let idx = 0;
      const loadNext = (): Promise<void> => {
        if (idx >= indices.length || isCancelled) return Promise.resolve();
        const currentIdx = indices[idx++];
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = getFrameUrl(currentIdx);
          img.onload = () => {
            if (!isCancelled) {
              imagesRef.current[currentIdx] = img;
              if (currentIdx === currentFrameRef.current) {
                drawFrame(currentIdx);
              }
            }
            resolve();
          };
          img.onerror = () => resolve();
        }).then(loadNext);
      };

      const workers = Array.from({ length: concurrency }, () => loadNext());
      await Promise.all(workers);
    };

    (async () => {
      await loadBatch(keyframeIndices, 8);
      if (isCancelled) return;

      // 3. Fill in all remaining interstitial frames
      const remaining: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!imagesRef.current[i]) remaining.push(i);
      }
      await loadBatch(remaining, 8);
    })();

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  // Synchronous Scroll Engine: continuous RAF loop synchronized with both Lenis and native scroll
  const updateProgress = useCallback((p: number) => {
    // 1. Frame Scrubbing (0 to 299)
    // Frames progress from p = 0.00 to p = 0.96; holds frame 299 for p in [0.96, 1.00]
    const frameP = Math.min(1, Math.max(0, p / 0.96));
    const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(frameP * (TOTAL_FRAMES - 1))));

    if (frameIdx !== currentFrameRef.current) {
      currentFrameRef.current = frameIdx;
      drawFrame(frameIdx);
    }

    // 2. Phase 1 & 2: Heading Animation
    // - p in [0.00, 0.08]: Smooth fade-in (opacity 0 -> 1, translateY 20px -> 0px)
    // - p in [0.08, 0.28]: Fully visible as drone approaches house
    // - p in [0.28, 0.40]: Smooth fade-out (opacity 1 -> 0, translateY 0px -> -25px) as drone enters doorway
    // - p >= 0.40: Completely hidden during interior hallway & chandelier sequence
    if (headerRef.current) {
      let headerOpacity = 0;
      let headerTranslateY = 0;

      if (p <= 0.08) {
        const fadeInP = Math.max(0, p / 0.08);
        headerOpacity = fadeInP;
        headerTranslateY = (1 - fadeInP) * 20;
      } else if (p <= 0.28) {
        headerOpacity = 1;
        headerTranslateY = 0;
      } else if (p <= 0.40) {
        const fadeOutP = (p - 0.28) / (0.40 - 0.28);
        headerOpacity = Math.max(0, 1 - fadeOutP);
        headerTranslateY = -fadeOutP * 25;
      } else {
        headerOpacity = 0;
        headerTranslateY = -25;
      }

      headerRef.current.style.opacity = String(headerOpacity);
      headerRef.current.style.transform = `translateY(${headerTranslateY}px)`;
      headerRef.current.style.pointerEvents = headerOpacity > 0.05 ? 'auto' : 'none';
    }

    // 3. Phase 3 & 4: 3 Feature Cards Animation
    // - p < 0.70: Completely hidden during interior flight
    // - p in [0.70, 0.80]: Smooth slide-up & fade-in (opacity 0 -> 1, translateY 40px -> 0px) as drone emerges onto golf course
    // - p in [0.80, 0.90]: Resting in place, fully readable across the lower portion of panoramic golf course
    // - p in [0.90, 0.97]: Smooth fade-out & slide-down (opacity 1 -> 0, translateY 0px -> 20px) before release
    // - p in [0.97, 1.00]: Completely hidden (opacity 0), clean release into Selected Work section
    if (cardsRef.current) {
      let cardOpacity = 0;
      let cardTranslateY = 0;

      if (p < 0.70) {
        cardOpacity = 0;
        cardTranslateY = 40;
      } else if (p <= 0.80) {
        const fadeInP = (p - 0.70) / (0.80 - 0.70);
        cardOpacity = fadeInP;
        cardTranslateY = (1 - fadeInP) * 40;
      } else if (p <= 0.90) {
        cardOpacity = 1;
        cardTranslateY = 0;
      } else if (p <= 0.97) {
        const fadeOutP = (p - 0.90) / (0.97 - 0.90);
        cardOpacity = Math.max(0, 1 - fadeOutP);
        cardTranslateY = fadeOutP * 20;
      } else {
        cardOpacity = 0;
        cardTranslateY = 20;
      }

      cardsRef.current.style.opacity = String(cardOpacity);
      cardsRef.current.style.transform = `translateY(${cardTranslateY}px)`;
      cardsRef.current.style.pointerEvents = cardOpacity > 0.1 ? 'auto' : 'none';
    }
  }, [drawFrame]);

  // High-performance RAF animation loop ensuring real-time scroll sync with Lenis
  useEffect(() => {
    let isRunning = true;
    let lastProgress = -1;

    const checkScroll = () => {
      if (!isRunning) return;

      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if section is within the viewport range
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          const scrollableDistance = section.offsetHeight - window.innerHeight;
          if (scrollableDistance > 0) {
            const rawProgress = -rect.top / scrollableDistance;
            const p = Math.min(1, Math.max(0, rawProgress));
            if (Math.abs(p - lastProgress) > 0.0001) {
              lastProgress = p;
              updateProgress(p);
            }
          }
        }
      }

      requestAnimationFrame(checkScroll);
    };

    const rafId = requestAnimationFrame(checkScroll);
    return () => {
      isRunning = false;
      cancelAnimationFrame(rafId);
    };
  }, [updateProgress]);

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="relative w-full bg-black text-white selection:bg-[#FFB800] selection:text-black"
      style={{ height: '450vh' }}
    >
      {/* Sticky Stage Container: Exactly 100svh full-bleed cinematic viewport */}
      <div className="sticky top-0 h-screen h-[100svh] w-full overflow-hidden">
        {/* Full-Bleed Hardware-Accelerated High-Fidelity Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
          style={{ imageRendering: 'auto' }}
        />

        {/* Ambient Depth Scrim Gradients for Contrast & Framing */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/50 pointer-events-none" />

        {/* Phase 1 & 2: Top Heading Overlay (Exterior approach to house; fades out before interior) */}
        <div
          ref={headerRef}
          data-testid="section-header"
          className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 px-6 sm:px-10 max-w-7xl mx-auto pointer-events-none will-change-transform z-10 transition-transform duration-75"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-6 h-[2px] bg-[#FFB800]" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] font-semibold text-neutral-300 drop-shadow">
              AERIAL VISUALIZATION & CAPTURE
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold uppercase tracking-tight text-white leading-[1.08] drop-shadow-2xl">
            AERIAL PERSPECTIVES THAT <br className="hidden sm:inline" />
            ELEVATE DESTINATIONS
          </h2>
        </div>

        {/* Phase 3 & 4: 3 Feature Cards (Revealed as drone bursts onto the golf course; fades out before release) */}
        <div
          ref={cardsRef}
          data-testid="feature-cards"
          className="absolute bottom-5 sm:bottom-8 md:bottom-12 left-0 right-0 px-4 sm:px-8 md:px-10 max-w-7xl mx-auto z-10 will-change-transform transition-transform duration-75"
          style={{ opacity: 0, transform: 'translateY(40px)', pointerEvents: 'none' }}
        >
          <div className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-1 px-1">
            {/* Card 1 — Course & Turf Fidelity (Light Editorial Card) */}
            <div className="w-[84vw] sm:w-[360px] md:w-auto shrink-0 snap-center bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl p-4 sm:p-6 lg:p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:bg-white hover:border-neutral-300">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <span className="font-mono text-xs font-bold text-neutral-400 tracking-widest">
                    01
                  </span>
                  <Camera size={18} className="text-neutral-800" />
                </div>
                <h3 className="font-display text-base sm:text-xl lg:text-[22px] font-semibold text-neutral-900 mb-1.5 sm:mb-2 leading-[1.2]">
                  Course & Turf Fidelity
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  48MP high-dynamic-range aerial still photography capturing green contours, architectural boundaries, and landscape details.
                </p>
              </div>
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-neutral-200 text-[10px] sm:text-xs font-mono text-neutral-500 font-medium">
                SENSOR: 48MP HDR // 8064 × 6048
              </div>
            </div>

            {/* Card 2 — Cinematic Trajectories (Light Editorial Card) */}
            <div className="w-[84vw] sm:w-[360px] md:w-auto shrink-0 snap-center bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl p-4 sm:p-6 lg:p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:bg-white hover:border-neutral-300">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <span className="font-mono text-xs font-bold text-neutral-400 tracking-widest">
                    02
                  </span>
                  <Film size={18} className="text-neutral-800" />
                </div>
                <h3 className="font-display text-base sm:text-xl lg:text-[22px] font-semibold text-neutral-900 mb-1.5 sm:mb-2 leading-[1.2]">
                  Cinematic Trajectories
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  Fluid orbital reveals, low-altitude sweeps, and custom trajectory flights pre-planned around optimal sun azimuths.
                </p>
              </div>
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-neutral-200 text-[10px] sm:text-xs font-mono text-neutral-500 font-medium">
                CINEMA: 4K 60FPS // 10-BIT D-LOG
              </div>
            </div>

            {/* Card 3 — Operational Compliance (Dark Signature Card with Gold Accents) */}
            <div className="w-[84vw] sm:w-[360px] md:w-auto shrink-0 snap-center bg-[#11120e]/95 backdrop-blur-md border border-neutral-700/80 rounded-2xl p-4 sm:p-6 lg:p-7 flex flex-col justify-between shadow-2xl text-[#f4f3e8] transition-all duration-300 hover:border-[#FFB800]/50">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <span className="px-2.5 py-0.5 sm:py-1 rounded-full bg-[#FFB800]/15 text-[#FFB800] border border-[#FFB800]/30 font-mono text-[9px] sm:text-[11px] tracking-widest uppercase font-semibold">
                    FAA PART 107 CERTIFIED
                  </span>
                  <ShieldCheck size={20} className="text-[#FFB800]" />
                </div>
                <h3 className="font-display text-base sm:text-xl lg:text-[22px] font-semibold text-white mb-1.5 sm:mb-2 leading-[1.2]">
                  Operational Compliance
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  Fully licensed commercial UAV pilots with instant LAANC automated airspace authorization and $5,000,000 commercial liability coverage.
                </p>
              </div>
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-neutral-800 text-[10px] sm:text-xs font-mono text-[#FFB800] flex items-center justify-between font-medium">
                <span>AIRSPACE READY // NATIONWIDE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
