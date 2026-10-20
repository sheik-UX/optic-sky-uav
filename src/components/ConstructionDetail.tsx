import React from 'react';

export const ConstructionDetail: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0c0d0a] text-white border-b border-neutral-800">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#FFB800]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] font-semibold text-[#FFB800]">
                SITE DOCUMENTATION & PROGRESS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-semibold uppercase tracking-[-0.015em] text-white leading-[1.15]">
              FROM GROUND- <br />
              BREAKING TO FINAL <br />
              DETAIL
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-[17px] lg:text-[18px] text-neutral-300 leading-[1.65] font-normal">
              Precision progress tracking, high-altitude structural documentation, and investor marketing assets for general contractors, engineering firms, and commercial developers.
            </p>
          </div>
        </div>

        {/* Large Twilight Construction Panoramic Image Matching Reference */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 mb-14 group">
          <img
            src="/assets/serket/serket-02.jpg"
            alt="Optic Sky UAV Construction Site at Twilight with Tower Cranes"
            className="w-full h-[360px] sm:h-[460px] md:h-[540px] object-cover object-center transform transition-transform duration-1000 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

          {/* Telemetry Badge Overlay */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-[#FFB800] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
              SERKET // HIGH-RISE SITE DOCUMENTATION
            </span>
          </div>
        </div>

        {/* 3 Yellow-Labeled Feature Cards Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="bg-[#13140e] border border-neutral-800 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all">
            <div>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-[#FFB800] tracking-widest uppercase block mb-3">
                PROGRESS MONITORING
              </span>
              <h3 className="font-display text-lg sm:text-xl lg:text-[22px] font-semibold text-white mb-2 leading-[1.25]">
                Scheduled Flight Cadence
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                Repeatable automated waypoint flights for weekly or monthly milestone audits, site safety compliance, and dispute prevention.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs font-mono text-neutral-500">
              CADENCE: REPEATABLE GPS WAYPOINTS
            </div>
          </div>

          <div className="bg-[#13140e] border border-neutral-800 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all">
            <div>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-[#FFB800] tracking-widest uppercase block mb-3">
                AS-BUILT ACCURACY
              </span>
              <h3 className="font-display text-lg sm:text-xl lg:text-[22px] font-semibold text-white mb-2 leading-[1.25]">
                Orthomosaics & 3D Scans
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                High-density point clouds and georeferenced orthophotos ready for direct integration into Autodesk Civil 3D, Revit, and BIM workflows.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs font-mono text-neutral-500">
              ACCURACY: SUB-INCH GEOREFERENCED
            </div>
          </div>

          <div className="bg-[#13140e] border border-neutral-800 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all">
            <div>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-[#FFB800] tracking-widest uppercase block mb-3">
                MARKETING & INVESTORS
              </span>
              <h3 className="font-display text-lg sm:text-xl lg:text-[22px] font-semibold text-white mb-2 leading-[1.25]">
                Twilight Marketing Plates
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                Cinematic dusk flights and high-resolution still plates designed for capital partner reports, leasing brochures, and press releases.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs font-mono text-neutral-500">
              DELIVERY: 10-BIT 4K // READY FOR BROADCAST
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
