import React from 'react';
import { Compass, Camera } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="approach" className="py-28 sm:py-36 bg-[#13140e] relative border-t border-[#404040] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Client Photography Integration */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-none overflow-hidden border border-[#404040]">
              <img
                src="/assets/serket/serket-07.jpg"
                alt="Optic Sky UAV production aerial framing over landscape"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13140e]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-none bg-[#13140e]/90 backdrop-blur-md border border-[#404040]">
                <p className="text-xs uppercase font-mono tracking-widest text-[#ebfc72] mb-1">
                  Field Capture Method
                </p>
                <p className="text-sm font-sans text-[#f4f3e8]">
                  Calibrated flight paths tailored to geographical topography and natural sunlight.
                </p>
              </div>
            </div>

            {/* Overlapping secondary frame */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 h-48 rounded-none overflow-hidden border border-[#404040]">
              <img
                src="/assets/whistling-straits/whistling-04.jpg"
                alt="Vertical course approach detail"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Production Approach Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#ebfc72] font-mono mb-3">
              <span className="w-6 h-[1px] bg-[#ebfc72]" />
              <span>PRODUCTION APPROACH</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f4f3e8] tracking-[-0.03em] leading-[0.95] mb-6">
              UNDERSTANDING THE PLACE, <br />
              <span className="text-[#84837b]">BEFORE WE FLY.</span>
            </h2>

            <div className="space-y-4 text-base text-[#f4f3e8]/90 font-normal leading-[1.62] mb-8">
              <p>
                Every project starts with understanding the place, the intended audience, and how the imagery will be used. The goal is to create useful, visually compelling material that communicates the character and detail of each location.
              </p>
              <p className="text-sm text-[#84837b] leading-[1.62]">
                Whether documenting multi-month infrastructure progression or producing cinematic marketing sweeps for championship resort courses, we align pre-flight angles with your exact storytelling goals.
              </p>
            </div>

            {/* Factual Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#404040]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-[3.6px] bg-[#13140e] border border-[#404040] text-[#ebfc72] shrink-0">
                  <Compass size={16} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider font-normal text-[#f4f3e8] mb-1">
                    Deliberate Planning
                  </h4>
                  <p className="text-xs text-[#84837b] leading-[1.62]">
                    Solar positioning, flight corridor clearance, and angle pre-visualization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-[3.6px] bg-[#13140e] border border-[#404040] text-[#ebfc72] shrink-0">
                  <Camera size={16} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider font-normal text-[#f4f3e8] mb-1">
                    Editorial Delivery
                  </h4>
                  <p className="text-xs text-[#84837b] leading-[1.62]">
                    Preserving authentic textures and color fidelity without artificial distortion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
