import React from 'react';
import { Camera, ShieldCheck, Film, Compass } from 'lucide-react';

export const Introduction: React.FC = () => {
  const standards = [
    {
      icon: <Camera size={18} className="text-[#C2A676]" />,
      label: "Ultra-High Resolution",
      detail: "20MP to 48MP high-dynamic-range aerial still photography"
    },
    {
      icon: <Film size={18} className="text-[#C2A676]" />,
      label: "4K Cinematic Motion",
      detail: "Fluid orbital sweeps, terrain reveals, and architectural flight paths"
    },
    {
      icon: <ShieldCheck size={18} className="text-[#C2A676]" />,
      label: "FAA Part 107 Licensed",
      detail: "Fully certified commercial UAV pilot operations & safe flight protocols"
    },
    {
      icon: <Compass size={18} className="text-[#C2A676]" />,
      label: "Purposeful Planning",
      detail: "Pre-flight solar path analysis and client-aligned camera angles"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#121512] relative border-y border-[#202720]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C2A676] font-semibold mb-4">
              <span className="w-8 h-[1px] bg-[#C2A676]" />
              <span>THE PERSPECTIVE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F4F0E7] leading-[1.12] mb-6">
              A DIFFERENT PERSPECTIVE <br />
              <span className="italic font-normal text-[#D9D5CA]">CHANGES EVERYTHING.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#D9D5CA]/90 font-light leading-relaxed max-w-xl text-balance">
              From expansive golf landscapes to detailed construction progress, aerial imagery helps people understand places in ways ground-level photography cannot.
            </p>

            <div className="mt-8 pt-8 border-t border-[#2D3A31]/50 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-[#8E8A80]">
              <span>LAS VEGAS, NV</span>
              <span className="w-1 h-1 rounded-full bg-[#C2A676]" />
              <span>COMMERCIAL AERIAL PORTFOLIO</span>
            </div>
          </div>

          {/* Right Column: Operational Standards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {standards.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-sm bg-[#181D18]/60 border border-[#262F27] hover:border-[#C2A676]/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-sm bg-[#19352A]/50 border border-[#2D4D3D]/50">
                    {item.icon}
                  </div>
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-[#F4F0E7]">
                    {item.label}
                  </h3>
                </div>
                <p className="text-xs text-[#8E8A80] leading-relaxed pl-11">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
