import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is your standard turnaround time for deliverables?',
      a: 'Our standard deliverable window is 48 hours for processed, color-graded 4K ProRes master video and 48MP high-resolution still plates. Expedited 24-hour delivery is available for urgent marketing and construction audit deadlines.'
    },
    {
      q: 'Are your operations fully FAA certified and insured?',
      a: 'Yes. Every flight is conducted by FAA Part 107 certified commercial remote pilots with active night-flight waivers. We carry $5,000,000 in dedicated commercial UAV aviation liability insurance, with Certificates of Insurance (COI) issued upon request.'
    },
    {
      q: 'Can you fly in restricted or controlled airspace near airports?',
      a: 'Absolutely. Utilizing real-time FAA LAANC (Low Altitude Authorization and Notification Capability) automated systems and pre-filed airspace waivers, we regularly secure lawful authorization in Class B, C, D, and E controlled airspaces nationwide.'
    },
    {
      q: 'What camera sensors and drone platforms do you deploy?',
      a: 'We deploy professional multi-rotor UAV platforms carrying stabilized 48MP HDR image sensors and 4K 60fps 10-bit cinema cameras calibrated for wide dynamic range, architectural accuracy, and accurate color grading.'
    },
    {
      q: 'Do you deliver raw unprocessed files or edited masters?',
      a: 'We provide both. Clients receive fully edited, color-graded 4K master files ready for commercial broadcast or web publication, alongside complete high-resolution RAW photo files and uncompressed video plates.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-36 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Pilot Consultation Card */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#FFB800]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] font-semibold text-neutral-500">
                FAQ & PROTOCOLS
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight mb-8">
              Frequently asked questions about commercial drone operations
            </h2>

            {/* Direct Consultation Card Matching Reference */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Chief UAV Flight Operator"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FFB800]"
                />
                <div>
                  <h4 className="font-display text-sm font-bold uppercase text-neutral-900">
                    Chief Pilot On Duty
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono">
                    Direct flight operations dispatch
                  </p>
                </div>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-5">
                Have specific airspace restrictions, site coordinates, or timeline requirements? We are happy to evaluate your flight parameters.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-yellow-400 text-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-sm active:scale-95"
              >
                <span>Ask a Question</span>
                <ArrowUpRight size={14} className="text-black" />
              </a>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-neutral-900 bg-neutral-50 shadow-sm'
                      : 'border-neutral-200 bg-white hover:border-neutral-400'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-neutral-900 uppercase">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#FFB800] text-black'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0 text-sm text-neutral-600 leading-relaxed font-normal border-t border-neutral-200/60 mt-1">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
