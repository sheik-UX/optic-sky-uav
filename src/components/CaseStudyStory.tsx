import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyStoryProps {
  onOpenCaseStudy?: () => void;
}

export const CaseStudyStory: React.FC<CaseStudyStoryProps> = ({ onOpenCaseStudy }) => {
  const steps = [
    {
      step: 'STEP 01',
      title: 'SITE ANALYSIS & SIGHTLINES',
      detail: 'Pre-flight solar trajectory modeling, elevation contour analysis, and LAANC airspace clearances.'
    },
    {
      step: 'STEP 02',
      title: 'CAPTURE FROM ABOVE',
      detail: 'Calibrated orbital sweeps, 48MP still plates, and high-frame-rate 4K 60fps cinematic video paths.'
    },
    {
      step: 'STEP 03',
      title: 'DELIVERING THE STORY',
      detail: 'Color-graded 10-bit D-Log master video, full-resolution RAW photo files, and cloud client delivery.'
    }
  ];

  return (
    <section id="case-study" className="py-24 sm:py-36 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Centered Section Header Matching Reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FFB800]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] font-semibold text-neutral-500">
              PRODUCTION CASE STUDY
            </span>
            <span className="w-6 h-[2px] bg-[#FFB800]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-neutral-950 leading-[1.08]">
            THE ART OF AERIAL <br />
            STORYTELLING: BRINGING <br />
            PLACES TO LIFE FROM ABOVE
          </h2>
        </div>

        {/* Panoramic Aerial Feature with 3 Step Overlays Matching Reference */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 mb-10 group">
          <img
            src="/assets/whistling-straits/whistling-04.jpg"
            alt="Whistling Straits aerial green complex and fairway topography"
            className="w-full h-[400px] sm:h-[500px] md:h-[580px] object-cover object-center transform transition-transform duration-1000 group-hover:scale-102"
          />

          {/* Bottom Gradient for Step Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

          {/* 3 Step Overlays Along Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="bg-black/60 backdrop-blur-md border border-white/15 rounded-xl p-6 text-white hover:border-[#FFB800] transition-colors"
                >
                  <span className="inline-block px-2.5 py-1 rounded bg-[#FFB800] text-black font-mono text-[10px] font-black tracking-widest uppercase mb-3">
                    {s.step}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-white mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Actions */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenCaseStudy}
            className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-yellow-400 text-black font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-200 shadow-md active:scale-95"
          >
            <span>View Full Case Study</span>
            <ArrowUpRight size={15} className="text-black" />
          </button>
        </div>

      </div>
    </section>
  );
};
