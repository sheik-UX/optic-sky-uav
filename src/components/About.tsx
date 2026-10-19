import React from 'react';
import { Compass, Camera } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="approach" className="py-28 sm:py-36 bg-[#121512] relative border-t border-[#232D24] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Client Photography Integration */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#273229] shadow-2xl">
              <img
                src="/assets/serket/serket-07.jpg"
                alt="Optic Sky UAV production aerial framing over landscape"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121512]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#121512]/90 backdrop-blur-md border border-[#2D3A31]">
                <p className="text-xs uppercase tracking-widest text-[#C2A676] font-semibold mb-1">
                  Field Capture Method
                </p>
                <p className="text-sm font-serif text-[#F4F0E7]">
                  Calibrated flight paths tailored to geographical topography and natural sunlight.
                </p>
              </div>
            </div>

            {/* Overlapping secondary frame */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 h-48 rounded-sm overflow-hidden border-2 border-[#121512] shadow-2xl">
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
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C2A676] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#C2A676]" />
              <span>PRODUCTION APPROACH</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F4F0E7] leading-tight mb-6">
              UNDERSTANDING THE PLACE, <br />
              <span className="italic font-normal text-[#D9D5CA]">BEFORE WE FLY.</span>
            </h2>

            <div className="space-y-4 text-base text-[#D9D5CA]/90 font-light leading-relaxed mb-8">
              <p>
                Every project starts with understanding the place, the intended audience, and how the imagery will be used. The goal is to create useful, visually compelling material that communicates the character and detail of each location.
              </p>
              <p className="text-sm text-[#8E8A80]">
                Whether documenting multi-month infrastructure progression or producing cinematic marketing sweeps for championship resort courses, we align pre-flight angles with your exact storytelling goals.
              </p>
            </div>

            {/* Factual Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#232D24]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-[#19352A]/50 border border-[#2D4D3D] text-[#C2A676] shrink-0">
                  <Compass size={16} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F0E7] mb-1">
                    Deliberate Planning
                  </h4>
                  <p className="text-xs text-[#8E8A80]">
                    Solar positioning, flight corridor clearance, and angle pre-visualization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-[#19352A]/50 border border-[#2D4D3D] text-[#C2A676] shrink-0">
                  <Camera size={16} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F0E7] mb-1">
                    Editorial Delivery
                  </h4>
                  <p className="text-xs text-[#8E8A80]">
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
