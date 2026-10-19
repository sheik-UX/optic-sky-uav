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
    <section id="work" className="py-24 sm:py-28 bg-[#13140e] border-t border-[#404040] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Intro Copy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-12 border-b border-[#404040]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#ebfc72] font-mono mb-3">
              <span className="w-6 h-[1px] bg-[#ebfc72]" />
              <span>SELECTED PROJECTS</span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-normal text-[#f4f3e8] tracking-[-0.03em] leading-[0.95] mb-4">
              PLACES, SEEN <br />
              <span className="text-[#84837b]">FROM ABOVE.</span>
            </h2>
            <p className="text-base text-[#f4f3e8]/80 font-normal leading-[1.62]">
              A selection of aerial photography and video created to reveal the scale, detail, and character of each place.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#84837b]">
            <Eye size={14} className="text-[#ebfc72]" />
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
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-none bg-[#13140e] border border-[#404040] hover:border-[#ebfc72] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#84837b] mb-4">
                  <span className="text-[#ebfc72] font-mono font-normal">0{idx + 1}</span>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#84837b]">
                    <MapPin size={11} className="text-[#ebfc72]" />
                    <span className="truncate">{proj.location}</span>
                  </div>
                </div>

                <h3 className="font-sans text-2xl lg:text-3xl font-normal text-[#f4f3e8] group-hover:text-[#ebfc72] transition-colors duration-300 mb-2 tracking-[-0.03em]">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#84837b] line-clamp-2 leading-[1.62] mb-6 font-normal">
                  {proj.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#404040] text-xs font-mono uppercase tracking-widest text-[#84837b] group-hover:text-[#f4f3e8]">
                <span className="text-[11px]">Jump to Section</span>
                <ArrowDown size={13} className="text-[#ebfc72] transform group-hover:translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
