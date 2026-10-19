import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { PROJECTS } from '../data/content';
import type { PhotoItem, VideoItem } from '../types';

interface SelectedWorkProps {
  onOpenLightbox: (photos: PhotoItem[], index: number, title: string) => void;
  onPlayVideo?: (video: VideoItem, title: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'GOLF COURSES', 'CONSTRUCTION', 'CIVIL'];

  const items = [
    {
      id: 'whistling-straits',
      category: 'GOLF COURSES',
      badge: 'GOLF RESORT & HOSPITALITY',
      title: 'WHISTLING STRAITS',
      location: 'SHEBOYGAN, WI // 18-HOLE CHAMPIONSHIP',
      description: 'Comprehensive high-altitude fairways, coastal bluffs, and green scoring angles captured in 48MP raw and 4K cinema D-Log.',
      specs: 'SENSOR: 48MP HDR // 4K 60FPS // SOLAR AZIMUTH CALIBRATED',
      image: '/assets/whistling-straits/whistling-03.jpg',
      projectKey: 'whistling-straits'
    },
    {
      id: 'cascata-water',
      category: 'CIVIL',
      badge: 'CIVIL INFRASTRUCTURE & LANDSCAPE',
      title: 'CASCATA WATER RECLAMATION',
      location: 'BOULDER CITY, NV // MUNICIPAL PROJECT',
      description: 'Engineering site documentation, topographic boundary survey, and water infrastructure asset mapping across arid terrain.',
      specs: 'ORTHOMOSAIC MAPPING // MULTI-ANGLE SIGHTLINES // FAA APPROVED',
      image: '/assets/cascata-water-reclamation/cascata-01.jpg',
      projectKey: 'cascata'
    },
    {
      id: 'mountain-golf',
      category: 'GOLF COURSES',
      badge: 'CHAMPIONSHIP GOLF SANCTUARY',
      title: 'MOUNTAIN VALLEY LINKS',
      location: 'NEVADA CANYON // ELEVATION COURSE',
      description: 'Dynamic orbital sweeps through canyon topography capturing green complexes, elevation transitions, and sunset lighting.',
      specs: 'D-LOG-M 10-BIT // DYNAMIC FLIGHT TRAJECTORIES',
      image: '/assets/whistling-straits/whistling-07.jpg',
      projectKey: 'whistling-straits'
    },
    {
      id: 'serket-construction',
      category: 'CONSTRUCTION',
      badge: 'COMMERCIAL DEVELOPMENT',
      title: 'SERKET CONSTRUCTION',
      location: 'LAS VEGAS, NV // HIGH-RISE STRUCTURAL',
      description: 'Twilight tower crane operations, structural milestone tracking, and high-altitude investor marketing plates.',
      specs: 'NIGHT WAIVER 107.29 // TWILIGHT HDR CAPTURE // BIM READY',
      image: '/assets/serket/serket-01.jpg',
      projectKey: 'serket'
    }
  ];

  const filteredItems = activeFilter === 'ALL'
    ? items
    : items.filter(item => item.category === activeFilter);

  const handleCardClick = (projectKey: string) => {
    const project = PROJECTS.find(p => p.id === projectKey);
    if (project) {
      onOpenLightbox(project.photos, 0, project.title);
    }
  };

  return (
    <section id="work" className="py-24 sm:py-36 bg-[#0a0a0a] text-white border-b border-neutral-800">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#FFB800]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] font-semibold text-[#FFB800]">
                PORTFOLIO SHOWCASE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              SELECTED WORK
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-mono tracking-wider px-4 py-2 rounded-full transition-all uppercase ${
                  activeFilter === cat
                    ? 'bg-[#FFB800] text-black font-bold shadow-md'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Stacked Horizontal Project Cards Matching Reference */}
        <div className="space-y-8 sm:space-y-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#11120e] border border-neutral-800 hover:border-neutral-600 rounded-2xl overflow-hidden transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              {/* Left Column: Metadata & CTA */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20 font-mono text-[10px] tracking-widest uppercase font-semibold mb-4">
                    {item.badge}
                  </span>
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-mono text-neutral-400 tracking-wider uppercase mb-4">
                    {item.location}
                  </p>
                  
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal mb-8">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="mb-6 pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-400">
                    {item.specs}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCardClick(item.projectKey)}
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#FFB800] text-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-200 active:scale-95 group-hover:shadow-lg"
                  >
                    <span>View Gallery</span>
                    <Eye size={14} className="text-black" />
                  </button>
                </div>
              </div>

              {/* Right Column: High-Res Landscape Photograph */}
              <div
                className="lg:col-span-7 h-64 sm:h-80 lg:h-96 relative overflow-hidden bg-neutral-900 cursor-pointer"
                onClick={() => handleCardClick(item.projectKey)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    Click to Open Fullscreen Gallery (10+ Photos)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
