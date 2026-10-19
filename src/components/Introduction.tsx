import React from 'react';
import { Camera, ShieldCheck, Film, Compass } from 'lucide-react';

export const Introduction: React.FC = () => {
  const standards = [
    {
      icon: <Camera size={18} className="text-[#ebfc72]" />,
      label: "Ultra-High Resolution",
      detail: "20MP to 48MP high-dynamic-range aerial still photography"
    },
    {
      icon: <Film size={18} className="text-[#ebfc72]" />,
      label: "4K Cinematic Motion",
      detail: "Fluid orbital sweeps, terrain reveals, and architectural flight paths"
    },
    {
      icon: <ShieldCheck size={18} className="text-[#ebfc72]" />,
      label: "FAA Part 107 Licensed",
      detail: "Fully certified commercial UAV pilot operations & safe flight protocols"
    },
    {
      icon: <Compass size={18} className="text-[#ebfc72]" />,
      label: "Purposeful Planning",
      detail: "Pre-flight solar path analysis and client-aligned camera angles"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#13140e] relative border-y border-[#404040]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#ebfc72] font-mono mb-4">
              <span className="w-8 h-[1px] bg-[#ebfc72]" />
              <span>THE PERSPECTIVE</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#f4f3e8] tracking-[-0.03em] leading-[0.95] mb-6">
              A DIFFERENT PERSPECTIVE <br />
              <span className="text-[#84837b]">CHANGES EVERYTHING.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#f4f3e8]/90 font-normal leading-[1.62] max-w-xl text-balance">
              From expansive golf landscapes to detailed construction progress, aerial imagery helps people understand places in ways ground-level photography cannot.
            </p>

            <div className="mt-8 pt-8 border-t border-[#404040] flex items-center gap-6 text-xs font-mono tracking-widest text-[#84837b]">
              <span>LAS VEGAS, NV</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ebfc72]" />
              <span>COMMERCIAL AERIAL PORTFOLIO</span>
            </div>
          </div>

          {/* Right Column: Operational Standards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {standards.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-none bg-[#13140e] border border-[#404040] hover:border-[#ebfc72]/60 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-[3.6px] bg-[#13140e] border border-[#404040]">
                    {item.icon}
                  </div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#f4f3e8]">
                    {item.label}
                  </h3>
                </div>
                <p className="text-xs text-[#84837b] leading-[1.62] pl-11">
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
