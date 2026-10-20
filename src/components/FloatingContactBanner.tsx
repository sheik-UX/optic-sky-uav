import React, { useState } from 'react';
import { MapPin, Camera, ShieldCheck, Zap, Mail, Phone, Check } from 'lucide-react';
import { BRAND } from '../data/content';

export const FloatingContactBanner: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setFormSubmitted(true);
    }
  };

  const advantages = [
    'Full Commercial Rights & Raw Files Included',
    'Pre-Flight Solar Azimuth & Sightline Analysis',
    'Multi-Angle 3D Orthomosaic Mapping Ready',
    'LAANC Airspace Approvals & Waivers Handled',
    'Color-Graded 4K 10-Bit D-Log Master Video',
    'Custom Flight Trajectories Tailored to Your Site'
  ];

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background Forest Aerial Image with Dark Overlay Matching Reference */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/whistling-straits/whistling-06.jpg"
          alt="Aerial forest canopy background"
          className="w-full h-full object-cover object-center filter brightness-[0.4] saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Floating White Card Container */}
      <div className="relative z-10 max-w-[1080px] mx-auto px-6 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl border border-white/20">
          
          {/* Card Top Title */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] font-semibold text-neutral-500 block mb-2">
              FLIGHT OPERATIONS & DISPATCH
            </span>
            <h2 className="font-display text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-semibold uppercase tracking-[-0.015em] text-neutral-950 leading-[1.18]">
              ALL-INCLUSIVE AERIAL PRODUCTION
            </h2>
          </div>

          {/* Dual Column Content: Left Info Column + Right Dark Advantage Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (White) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-900 border border-neutral-200 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold uppercase text-neutral-900">
                    Las Vegas, Nevada
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">
                    Primary hub with nationwide commercial flight deployment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-900 border border-neutral-200 shrink-0">
                  <Camera size={18} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold uppercase text-neutral-900">
                    4K/60FPS ProRes & 48MP HDR
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">
                    Dual aerial camera platforms for cinema video and still plates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-900 border border-neutral-200 shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold uppercase text-neutral-900">
                    FAA Part 107 & $5M Insured
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">
                    Certified pilots, night waivers, and commercial liability protection
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-900 border border-neutral-200 shrink-0">
                  <Zap size={18} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold uppercase text-neutral-900">
                    Rapid 48-Hour Turnaround
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">
                    Color-graded deliverables ready for marketing and engineering teams
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-700">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 hover:text-[#FFB800] transition-colors"
                >
                  <Mail size={14} className="text-[#FFB800]" />
                  <span>{BRAND.email}</span>
                </a>
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-[#FFB800] transition-colors"
                >
                  <Phone size={14} className="text-[#FFB800]" />
                  <span>{BRAND.phone}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Dark Black Container with Yellow Checkmarks Matching Reference */}
            <div className="lg:col-span-6 bg-[#13140e] text-white p-8 sm:p-9 rounded-2xl border border-neutral-800 shadow-xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#FFB800] font-semibold block mb-4">
                OPERATIONAL ADVANTAGE
              </span>

              <ul className="space-y-4 mb-8">
                {advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FFB800]/20 border border-[#FFB800]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#FFB800] stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-200 font-normal leading-snug">
                      {adv}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Instant Quote Form */}
              {formSubmitted ? (
                <div className="p-4 rounded-xl bg-white/10 text-center font-mono text-xs text-[#FFB800]">
                  ✓ Flight inquiry received. Dispatch will reply within 4 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email for flight quote..."
                    className="flex-1 bg-black/60 border border-neutral-700 rounded-full px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFB800]"
                  />
                  <button
                    type="submit"
                    className="bg-[#FFB800] hover:bg-yellow-400 text-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shrink-0 active:scale-95"
                  >
                    Send
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
