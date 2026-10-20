import React from 'react';
import { Flag, Building, HardHat, Compass, Map, Video } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      icon: <Flag className="w-6 h-6 text-[#FFB800]" />,
      number: '01',
      title: 'Golf Course Flyovers & Scoring Views',
      description: 'Hole-by-hole cinematic orbital flyovers, tee-to-green yardage lines, and high-resolution agronomy turf inspections for championship courses and private clubs.'
    },
    {
      icon: <Building className="w-6 h-6 text-[#FFB800]" />,
      number: '02',
      title: 'Commercial Real Estate & Architecture',
      description: 'Stunning exterior plate photography, sightline verifications, and property boundary overlays designed to accelerate leasing and high-value property sales.'
    },
    {
      icon: <HardHat className="w-6 h-6 text-[#FFB800]" />,
      number: '03',
      title: 'Construction Milestone Documentation',
      description: 'Regular aerial progress audits, earthwork volume tracking, crane inspections, and georeferenced audit trails for general contractors and capital partners.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#FFB800]" />,
      number: '04',
      title: 'Resort & Luxury Hospitality Storytelling',
      description: 'Golden-hour and twilight aerial cinematography highlighting resort scale, poolside amenities, surrounding topography, and guest experience.'
    },
    {
      icon: <Map className="w-6 h-6 text-[#FFB800]" />,
      number: '05',
      title: 'Precision 3D Scans & Orthomosaics',
      description: 'Sub-centimeter georeferenced aerial surveys, digital surface models (DSM), and high-density point clouds ready for CAD and GIS workflows.'
    },
    {
      icon: <Video className="w-6 h-6 text-[#FFB800]" />,
      number: '06',
      title: 'Cinematic Film, Broadcast & Commercials',
      description: 'FAA Part 107.29 daylight and night-waiver operations delivering 10-bit D-Log ProRes footage tailored for television commercials and branded documentaries.'
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-36 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Centered Section Header Matching Reference */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FFB800]" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] font-semibold text-neutral-500">
              SERVICES & CAPABILITIES
            </span>
            <span className="w-6 h-[2px] bg-[#FFB800]" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-semibold uppercase tracking-[-0.015em] text-neutral-950 leading-[1.15]">
            WHAT WE CAPTURE — AERIAL <br />
            IMAGERY WITH PURPOSE
          </h2>
        </div>

        {/* 6-Grid Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div
              key={service.number}
              className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 hover:border-neutral-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white shadow-sm border border-neutral-200 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400 tracking-widest">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg lg:text-[20px] font-semibold text-neutral-900 mb-3 leading-[1.3]">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>COMMERCIAL GRADE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
