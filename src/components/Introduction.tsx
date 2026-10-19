import React, { useState, useEffect, useRef } from 'react';
import { Camera, ShieldCheck, Film, Compass, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface CapabilityCardProps {
  index: number;
  number: string;
  title: string;
  tagline: string;
  detail: string;
  specs: string;
  icon: React.ReactNode;
  image: string;
  onActive: (index: number) => void;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  index,
  number,
  title,
  tagline,
  detail,
  specs,
  icon,
  image,
  onActive
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    if (isInView) {
      onActive(index);
    }
  }, [isInView, index, onActive]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0.6, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-15% 0px -15% 0px", once: false }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative bg-[#13140e] border transition-all duration-500 rounded-none overflow-hidden ${
        isInView ? 'border-[#ebfc72] shadow-none' : 'border-[#404040] hover:border-[#84837b]'
      }`}
    >
      {/* Reference Video Style Corner Brackets (Survey Crop Marks) */}
      <span className="absolute top-0 left-0 w-7 h-7 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#ebfc72] z-20 pointer-events-none transition-all duration-300 group-hover:scale-105" />
      <span className="absolute top-0 right-0 w-7 h-7 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#ebfc72] z-20 pointer-events-none transition-all duration-300 group-hover:scale-105" />
      <span className="absolute bottom-0 left-0 w-7 h-7 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#ebfc72] z-20 pointer-events-none transition-all duration-300 group-hover:scale-105" />
      <span className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#ebfc72] z-20 pointer-events-none transition-all duration-300 group-hover:scale-105" />

      {/* Media Image Header */}
      <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-[#181d18]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13140e] via-[#13140e]/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="p-2.5 rounded-[3.6px] bg-[#13140e]/90 backdrop-blur-md border border-[#404040] text-[#ebfc72]">
            {icon}
          </div>

          <span className="px-2.5 py-1 rounded-[3.6px] bg-[#13140e]/90 backdrop-blur-md border border-[#404040] font-mono text-xs text-[#ebfc72] tracking-widest">
            {number}
          </span>
        </div>
      </div>

      {/* Card Content Stage */}
      <div className="p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#ebfc72] block mb-2 font-normal">
            {tagline}
          </span>
          <h3 className="font-sans text-2xl sm:text-3xl font-normal text-[#f4f3e8] tracking-[-0.03em] leading-tight mb-4">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-[#f4f3e8]/85 font-normal leading-[1.62] mb-6">
            {detail}
          </p>
        </div>

        {/* Telemetry Footer */}
        <div className="pt-4 border-t border-[#404040] flex items-center justify-between text-xs font-mono text-[#84837b]">
          <span className="truncate">{specs}</span>
          <ChevronRight size={14} className="text-[#ebfc72] shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export const Introduction: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const standards = [
    {
      number: "01",
      icon: <Camera size={20} />,
      title: "Ultra-High Resolution",
      tagline: "SENSOR FIDELITY & STILL PLATES",
      detail: "20MP to 48MP high-dynamic-range aerial still photography capturing microscopic architectural nuances, turf condition textures, and geographic scale.",
      specs: "SENSOR: 48MP HDR // RESOLUTION: 8064 × 6048",
      image: "/assets/whistling-straits/whistling-03.jpg"
    },
    {
      number: "02",
      icon: <Film size={20} />,
      title: "4K Cinematic Motion",
      tagline: "DYNAMIC AIRBORNE TRAJECTORIES",
      detail: "Fluid orbital sweeps, terrain reveals, and architectural flight paths calibrated to showcase topographic contours and commercial scope without vibration.",
      specs: "CODEC: 4K 60FPS // 10-BIT D-LOG-M",
      image: "/assets/cascata-water-reclamation/cascata-01.jpg"
    },
    {
      number: "03",
      icon: <ShieldCheck size={20} />,
      title: "FAA Part 107 Licensed",
      tagline: "COMMERCIAL COMPLIANCE & SAFETY",
      detail: "Fully certified commercial UAV pilot operations, active flight waivers, LAANC automated airspace authorizations, and comprehensive commercial liability protection.",
      specs: "CERTIFICATE: 14 CFR PART 107 // LAANC AUTHORIZED",
      image: "/assets/cascata-water-reclamation/cascata-05.jpg"
    },
    {
      number: "04",
      icon: <Compass size={20} />,
      title: "Purposeful Planning",
      tagline: "SOLAR TRAJECTORY & TOPOGRAPHIC SURVEY",
      detail: "Pre-flight solar path analysis, azimuth alignment, and client-directed sightline pre-visualization to ensure optimal natural illumination across every shoot.",
      specs: "SOLAR AZIMUTH ALIGNMENT // 3D SIGHTLINES",
      image: "/assets/serket/serket-07.jpg"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-36 bg-[#13140e] relative border-y border-[#404040]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* Left Column: Sticky Editorial Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start flex flex-col justify-between py-2">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#ebfc72] font-mono mb-4">
                <span className="w-8 h-[1px] bg-[#ebfc72]" />
                <span>THE PERSPECTIVE</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#f4f3e8] tracking-[-0.03em] leading-[0.95] mb-6">
                A DIFFERENT PERSPECTIVE <br />
                <span className="text-[#84837b]">CHANGES EVERYTHING.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#f4f3e8]/90 font-normal leading-[1.62] max-w-xl text-balance mb-8">
                From expansive golf landscapes to detailed construction progress, aerial imagery helps people understand places in ways ground-level photography cannot.
              </p>

              {/* Interactive Scroll Spy Indicator */}
              <div className="space-y-2 mb-8 hidden lg:block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#84837b] block mb-2">
                  OPERATIONAL PROTOCOLS
                </span>
                <div className="space-y-1.5">
                  {standards.map((s, idx) => (
                    <div
                      key={s.number}
                      className={`flex items-center gap-3 text-xs font-mono transition-colors duration-300 ${
                        activeIndex === idx ? 'text-[#ebfc72]' : 'text-[#84837b]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === idx ? 'bg-[#ebfc72] scale-125' : 'bg-[#404040]'
                      }`} />
                      <span className="w-6">{s.number}</span>
                      <span>{s.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#404040] flex items-center gap-6 text-xs font-mono tracking-widest text-[#84837b]">
              <span>LAS VEGAS, NV</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ebfc72]" />
              <span>COMMERCIAL AERIAL PORTFOLIO</span>
            </div>
          </div>

          {/* Right Column: Scrolling Image Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-12 sm:space-y-16">
            {standards.map((item, idx) => (
              <CapabilityCard
                key={item.number}
                index={idx}
                number={item.number}
                title={item.title}
                tagline={item.tagline}
                detail={item.detail}
                specs={item.specs}
                icon={item.icon}
                image={item.image}
                onActive={setActiveIndex}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
