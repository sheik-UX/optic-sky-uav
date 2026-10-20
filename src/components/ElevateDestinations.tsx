import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Volume2, Maximize, ShieldCheck, Camera, Film } from 'lucide-react';

interface ElevateDestinationsProps {
  onPlayVideo?: () => void;
}

const TOTAL_FRAMES = 300;
const FRAME_PREFIX = '/assets/aerial-sequence/ezgif-frame-';

function getFrameUrl(index: number): string {
  const frameNum = String(index + 1).padStart(3, '0');
  return `${FRAME_PREFIX}${frameNum}.jpg`;
}

export const ElevateDestinations: React.FC<ElevateDestinationsProps> = ({ onPlayVideo }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const playerBarRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef(0);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Draw frame to canvas with object-fit: cover logic
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find requested frame or nearest loaded frame
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

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  }, []);

  // Canvas resize handler maintaining device pixel ratio
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

    // 1. Immediately load frame 0 for zero-delay initial view
    const frame0 = new Image();
    frame0.src = getFrameUrl(0);
    frame0.onload = () => {
      if (isCancelled) return;
      imagesRef.current[0] = frame0;
      drawFrame(0);
    };

    // 2. Load keyframes (stride of 6) to span the whole animation in <500ms
    const keyframeIndices: number[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i += 6) {
      if (i !== 0) keyframeIndices.push(i);
    }
    if (!keyframeIndices.includes(TOTAL_FRAMES - 1)) {
      keyframeIndices.push(TOTAL_FRAMES - 1);
    }

    const loadBatch = async (indices: number[], concurrency = 6) => {
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
      await loadBatch(keyframeIndices, 6);
      if (isCancelled) return;

      // 3. Fill in all remaining interstitial frames
      const remaining: number[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!imagesRef.current[i]) remaining.push(i);
      }
      await loadBatch(remaining, 6);
    })();

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  // Scroll synchronization engine using GSAP ScrollTrigger & native scroll fallback
  useEffect(() => {
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    const updateProgress = (p: number) => {
      // 1. Frame Scrubbing (0 to 299)
      // Frames advance from p = 0.0 to p = 0.94, resting at frame 299 for final state
      const frameP = Math.min(1, Math.max(0, p / 0.94));
      const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(frameP * (TOTAL_FRAMES - 1))));

      if (frameIdx !== currentFrameRef.current) {
        currentFrameRef.current = frameIdx;
        drawFrame(frameIdx);
      }

      // 2. Animate Header Row (State A -> State B)
      // Fully visible at p = 0.0, smoothly fades out by p = 0.16
      if (headerRef.current) {
        const headerFadeEnd = 0.16;
        const headerP = Math.min(1, Math.max(0, p / headerFadeEnd));
        const headerOpacity = Math.max(0, 1 - headerP);
        const headerTranslateY = -headerP * 35;
        headerRef.current.style.opacity = String(headerOpacity);
        headerRef.current.style.transform = `translateY(${headerTranslateY}px)`;
        headerRef.current.style.pointerEvents = headerOpacity > 0.1 ? 'auto' : 'none';
      }

      // 3. Animate Play Button & Video Player Bar Overlay
      // Fades out promptly upon scrolling (by p = 0.08)
      const overlayFadeEnd = 0.08;
      const overlayP = Math.min(1, Math.max(0, p / overlayFadeEnd));
      const overlayOpacity = Math.max(0, 1 - overlayP);

      if (playButtonRef.current) {
        playButtonRef.current.style.opacity = String(overlayOpacity);
        playButtonRef.current.style.pointerEvents = overlayOpacity > 0.1 ? 'auto' : 'none';
      }
      if (playerBarRef.current) {
        playerBarRef.current.style.opacity = String(overlayOpacity);
        playerBarRef.current.style.pointerEvents = overlayOpacity > 0.1 ? 'auto' : 'none';
      }

      // 4. Animate 3 Feature Cards (State B -> State C)
      // Hidden until p = 0.70, smoothly slides up into resting position by p = 0.94
      if (cardsRef.current) {
        const cardsStart = 0.70;
        const cardsEnd = 0.94;
        const cardP = Math.min(1, Math.max(0, (p - cardsStart) / (cardsEnd - cardsStart)));
        const cardOpacity = cardP;
        const cardTranslateY = (1 - cardP) * 70;
        cardsRef.current.style.opacity = String(cardOpacity);
        cardsRef.current.style.transform = `translateY(${cardTranslateY}px)`;
        cardsRef.current.style.pointerEvents = cardP > 0.7 ? 'auto' : 'none';
      }
    };

    // Calculate progress directly from bounding rect
    const calculateProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return 0;
      const rawProgress = -rect.top / scrollableDistance;
      return Math.min(1, Math.max(0, rawProgress));
    };

    const handleScroll = () => {
      const p = calculateProgress();
      updateProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [drawFrame, prefersReducedMotion]);

  // Reduced motion static fallback
  if (prefersReducedMotion) {
    return (
      <section className="py-24 sm:py-32 bg-white text-neutral-900 border-b border-neutral-200">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-[#FFB800]" />
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] font-semibold text-neutral-500">
                  AERIAL VISUALIZATION & CAPTURE
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-semibold uppercase tracking-[-0.015em] text-neutral-950 leading-[1.15]">
                AERIAL PERSPECTIVES THAT <br />
                ELEVATE DESTINATIONS
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-[17px] lg:text-[18px] text-neutral-600 leading-[1.65] font-normal">
                From championship fairways to landmark commercial architecture, our ultra-high-definition aerial cinematography captures the true scale, contours, and character that ground-level photography cannot convey.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 mb-14 aspect-video">
            <img
              src={getFrameUrl(299)}
              alt="Optic Sky UAV Aerial Championship Golf Course Showcase"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 3 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-neutral-50 border border-neutral-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-neutral-400 tracking-widest">01</span>
                  <Camera size={18} className="text-neutral-700" />
                </div>
                <h3 className="font-display text-lg sm:text-xl lg:text-[22px] font-semibold text-neutral-900 mb-2 leading-[1.25]">
                  Course & Turf Fidelity
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  48MP high-dynamic-range aerial still photography capturing green contours, architectural boundaries, and landscape details.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-mono text-neutral-500">
                SENSOR: 48MP HDR // 8064 × 6048
              </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-neutral-400 tracking-widest">02</span>
                  <Film size={18} className="text-neutral-700" />
                </div>
                <h3 className="font-display text-lg sm:text-xl lg:text-[22px] font-semibold text-neutral-900 mb-2 leading-[1.25]">
                  Cinematic Trajectories
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  Fluid orbital reveals, low-altitude sweeps, and custom trajectory flights pre-planned around optimal sun azimuths.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-mono text-neutral-500">
                CINEMA: 4K 60FPS // 10-BIT D-LOG
              </div>
            </div>

            <div className="bg-[#11120e] text-[#f4f3e8] border border-neutral-800 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FFB800]/15 text-[#FFB800] border border-[#FFB800]/30 font-mono text-[10px] tracking-widest uppercase font-semibold">
                    FAA PART 107 CERTIFIED
                  </span>
                  <ShieldCheck size={20} className="text-[#FFB800]" />
                </div>
                <h3 className="font-display text-lg sm:text-xl lg:text-[22px] font-semibold text-white mb-2 leading-[1.25]">
                  Operational Compliance
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  Fully licensed commercial UAV pilots with instant LAANC automated airspace authorization and $5,000,000 commercial liability coverage.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs font-mono text-[#FFB800] flex items-center justify-between">
                <span>AIRSPACE READY // NATIONWIDE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-neutral-900 border-b border-neutral-200"
      style={{ height: '320vh' }}
    >
      {/* Sticky Stage Container: Exactly 100vh with Clean Framing & Navbar Clearance */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 flex-1 flex flex-col justify-between">
          
          {/* State A: Top Header Row (Transitions smoothly out of view during scroll) */}
          <div
            ref={headerRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end mb-3 sm:mb-4 transition-transform duration-75 will-change-transform shrink-0"
          >
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="w-6 h-[2px] bg-[#FFB800]" />
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] font-semibold text-neutral-500">
                  AERIAL VISUALIZATION & CAPTURE
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-semibold uppercase tracking-[-0.015em] text-neutral-950 leading-[1.15]">
                AERIAL PERSPECTIVES THAT <br className="hidden sm:inline" />
                ELEVATE DESTINATIONS
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base lg:text-[17px] text-neutral-600 leading-[1.6] font-normal">
                From championship fairways to landmark commercial architecture, our ultra-high-definition aerial cinematography captures the true scale, contours, and character that ground-level photography cannot convey.
              </p>
            </div>
          </div>

          {/* State B: Cinematic Image Sequence Canvas Showcase */}
          <div className="relative flex-1 min-h-[200px] max-h-[380px] sm:max-h-[420px] lg:max-h-[440px] w-full rounded-2xl overflow-hidden shadow-2xl bg-neutral-950 my-1 sm:my-2 group">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-cover block"
            />

            {/* Subtle Vignette Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none" />

            {/* Initial Centered Play Button (Visible in State A, fades out on scroll) */}
            <div
              ref={playButtonRef}
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-auto"
            >
              <button
                type="button"
                onClick={onPlayVideo}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-[#FFB800] text-black flex items-center justify-center shadow-2xl backdrop-blur-md transform transition-all duration-300 hover:scale-110 active:scale-95 group/btn cursor-pointer"
                aria-label="Play featured cinematography reel"
              >
                <Play size={28} className="ml-1 text-black fill-black transition-transform group-hover/btn:scale-110" />
              </button>
            </div>

            {/* Media Player Control Bar Overlay (Visible in State A, fades out on scroll) */}
            <div
              ref={playerBarRef}
              className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300"
            >
              <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 text-white">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onPlayVideo}
                    className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
                  >
                    <Play size={14} className="fill-white" />
                  </button>
                  <span className="font-mono text-xs tracking-wider text-neutral-300">
                    01:24 / 04:15
                  </span>
                </div>

                {/* Progress Bar Line */}
                <div className="flex-1 mx-4 h-1.5 bg-white/20 rounded-full overflow-hidden relative">
                  <div className="h-full bg-[#FFB800] w-1/3 rounded-full" />
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-neutral-300">
                  <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] tracking-widest text-[#FFB800] border border-white/10">
                    4K 60FPS HDR
                  </span>
                  <Volume2 size={15} className="cursor-pointer hover:text-white" />
                  <Maximize size={15} className="cursor-pointer hover:text-white" onClick={onPlayVideo} />
                </div>
              </div>
            </div>
          </div>

          {/* State C: 3 Feature Cards (Slides up smoothly into view near end of sequence) */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 mt-1 sm:mt-2 shrink-0 transition-transform duration-75 will-change-transform"
            style={{ opacity: 0, transform: 'translateY(70px)', pointerEvents: 'none' }}
          >
            {/* Card 1 — Light */}
            <div className="bg-neutral-50 border border-neutral-200/90 rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between hover:border-neutral-400 transition-all shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-neutral-400 tracking-widest">
                    01
                  </span>
                  <Camera size={18} className="text-neutral-700" />
                </div>
                <h3 className="font-display text-base sm:text-[17px] lg:text-[19px] font-semibold text-neutral-900 mb-1.5 leading-[1.25]">
                  Course & Turf Fidelity
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                  48MP high-dynamic-range aerial still photography capturing green contours, architectural boundaries, and landscape details.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-neutral-200 text-[10px] sm:text-[11px] font-mono text-neutral-500">
                SENSOR: 48MP HDR // 8064 × 6048
              </div>
            </div>

            {/* Card 2 — Light */}
            <div className="bg-neutral-50 border border-neutral-200/90 rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between hover:border-neutral-400 transition-all shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-neutral-400 tracking-widest">
                    02
                  </span>
                  <Film size={18} className="text-neutral-700" />
                </div>
                <h3 className="font-display text-base sm:text-[17px] lg:text-[19px] font-semibold text-neutral-900 mb-1.5 leading-[1.25]">
                  Cinematic Trajectories
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                  Fluid orbital reveals, low-altitude sweeps, and custom trajectory flights pre-planned around optimal sun azimuths.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-neutral-200 text-[10px] sm:text-[11px] font-mono text-neutral-500">
                CINEMA: 4K 60FPS // 10-BIT D-LOG
              </div>
            </div>

            {/* Card 3 — Dark Black Feature Card Matching Reference */}
            <div className="bg-[#11120e] text-[#f4f3e8] border border-neutral-800 rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#FFB800]/15 text-[#FFB800] border border-[#FFB800]/30 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold">
                    FAA PART 107 CERTIFIED
                  </span>
                  <ShieldCheck size={18} className="text-[#FFB800]" />
                </div>
                <h3 className="font-display text-base sm:text-[17px] lg:text-[19px] font-semibold text-white mb-1.5 leading-[1.25]">
                  Operational Compliance
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-normal">
                  Fully licensed commercial UAV pilots with instant LAANC automated airspace authorization and $5,000,000 commercial liability coverage.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-neutral-800 text-[10px] sm:text-[11px] font-mono text-[#FFB800] flex items-center justify-between">
                <span>AIRSPACE READY // NATIONWIDE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
