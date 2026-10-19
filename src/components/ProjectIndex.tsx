import React from 'react';
import { ArrowDown, MapPin, Eye } from 'lucide-react';
import { PROJECTS } from '../data/content';

export const ProjectIndex: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-24 sm:py-28 bg-[#121512] border-t border-[#222A23] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Intro Copy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-12 border-b border-[#222A23]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C2A676] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#C2A676]" />
              <span>SELECTED PROJECTS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F4F0E7] leading-tight mb-4">
              PLACES, SEEN <br />
              <span className="italic font-normal text-[#D9D5CA]">FROM ABOVE.</span>
            </h2>
            <p className="text-base text-[#D9D5CA]/80 font-light leading-relaxed">
              A selection of aerial photography and video created to reveal the scale, detail, and character of each place.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#8E8A80]">
            <Eye size={14} className="text-[#C2A676]" />
            <span>3 FEATURED CASE STUDIES — SINGLE PAGE PORTFOLIO</span>
          </div>
        </div>

        {/* Project Quick-Jump Index Navigation Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((proj, idx) => (
            <a
              key={proj.id}
              href={`#${proj.id}`}
              onClick={(e) => handleScrollTo(e, proj.id)}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-sm bg-[#161B16] border border-[#232D24] hover:border-[#C2A676] transition-all duration-300 hover:shadow-xl hover:shadow-[#19352A]/20"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-sans tracking-widest text-[#8E8A80] mb-4">
                  <span className="text-[#C2A676] font-mono font-medium">0{idx + 1}</span>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#8E8A80]">
                    <MapPin size={11} className="text-[#C2A676]" />
                    <span className="truncate">{proj.location}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl lg:text-3xl text-[#F4F0E7] group-hover:text-[#C2A676] transition-colors duration-300 mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#8E8A80] line-clamp-2 leading-relaxed mb-6 font-light">
                  {proj.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#232D24] text-xs uppercase tracking-[0.2em] text-[#D9D5CA] group-hover:text-[#F4F0E7]">
                <span className="text-[11px]">Jump to Section</span>
                <ArrowDown size={13} className="text-[#C2A676] transform group-hover:translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
