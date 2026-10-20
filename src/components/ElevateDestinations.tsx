import React from 'react';
import { Play, Volume2, Maximize, ShieldCheck, Camera, Film } from 'lucide-react';

interface ElevateDestinationsProps {
  onPlayVideo?: () => void;
}

export const ElevateDestinations: React.FC<ElevateDestinationsProps> = ({ onPlayVideo }) => {

  return (
    <section className="py-24 sm:py-32 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Top Header Row: Headline on Left, Editorial on Right */}
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

        {/* Panoramic Video / Media Showcase with Interactive Player Bar */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 mb-14 group">
          <img
            src="/assets/whistling-straits/whistling-01.jpg"
            alt="Optic Sky UAV Aerial Panoramic Resort and Fairway Showcase"
            className="w-full h-[380px] sm:h-[480px] md:h-[560px] object-cover object-center transform transition-transform duration-1000 group-hover:scale-102"
          />

          {/* Subtle Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

          {/* Centered Big Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={onPlayVideo}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 hover:bg-[#FFB800] text-black flex items-center justify-center shadow-2xl backdrop-blur-md transform transition-all duration-300 hover:scale-110 active:scale-95 group/btn"
              aria-label="Play featured cinematography reel"
            >
              <Play size={32} className="ml-1 text-black fill-black transition-transform group-hover/btn:scale-110" />
            </button>
          </div>

          {/* Media Player Control Bar Overlay Matching Reference Screenshot */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 text-white">
              
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onPlayVideo}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                >
                  <Play size={16} className="fill-white" />
                </button>
                <span className="font-mono text-xs tracking-wider text-neutral-300">
                  01:24 / 04:15
                </span>
              </div>

              {/* Progress Bar Line */}
              <div className="flex-1 mx-4 h-1.5 bg-white/20 rounded-full overflow-hidden relative cursor-pointer">
                <div className="h-full bg-[#FFB800] w-1/3 rounded-full" />
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-neutral-300">
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] tracking-widest text-[#FFB800] border border-white/10">
                  4K 60FPS HDR
                </span>
                <Volume2 size={16} className="cursor-pointer hover:text-white" />
                <Maximize size={16} className="cursor-pointer hover:text-white" onClick={onPlayVideo} />
              </div>

            </div>
          </div>
        </div>

        {/* 3-Column Feature Cards: 2 Light Cards + 1 Dark Black Highlight Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1 — Light */}
          <div className="bg-neutral-50 border border-neutral-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-400 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-neutral-400 tracking-widest">
                  01
                </span>
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

          {/* Card 2 — Light */}
          <div className="bg-neutral-50 border border-neutral-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-400 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-neutral-400 tracking-widest">
                  02
                </span>
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

          {/* Card 3 — Dark Black Feature Card Matching Reference */}
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
};
