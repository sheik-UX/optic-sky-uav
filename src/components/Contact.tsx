import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../data/content';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Golf Courses & Hospitality',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission / trigger mailto
    const subject = encodeURIComponent(`Optic Sky UAV Project Inquiry: ${formData.projectType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\nLocation: ${formData.location}\n\nProject Scope:\n${formData.message}`
    );
    // Open mailto fallback
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#141713] relative border-t border-[#232D24]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Confirmed Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C2A676] font-semibold mb-3">
                <span className="w-6 h-[1px] bg-[#C2A676]" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F4F0E7] leading-[1.1] mb-6">
                LET'S MAKE <br />
                THE VIEW <br />
                <span className="italic font-normal text-[#C2A676]">IMPOSSIBLE</span> <br />
                TO FORGET.
              </h2>

              <p className="text-base text-[#D9D5CA]/90 font-light leading-relaxed mb-8 max-w-md">
                Have a course, property, or project worth seeing from a different perspective? Let's discuss your next aerial photography or video project.
              </p>

              {/* Verified Contact Details Box */}
              <div className="space-y-4 pt-6 border-t border-[#263128]">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex items-center gap-3 p-3.5 rounded-sm bg-[#181D18] border border-[#263128] hover:border-[#C2A676]/60 transition-colors group"
                >
                  <div className="p-2 rounded-sm bg-[#19352A] text-[#C2A676] group-hover:scale-110 transition-transform">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E8A80] block font-semibold">
                      Direct Telephone
                    </span>
                    <span className="text-sm font-medium text-[#F4F0E7] group-hover:text-[#C2A676] transition-colors">
                      {BRAND.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-sm bg-[#181D18] border border-[#263128]">
                  <div className="p-2 rounded-sm bg-[#19352A] text-[#C2A676]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E8A80] block font-semibold">
                      Primary Location
                    </span>
                    <span className="text-sm font-medium text-[#F4F0E7]">
                      {BRAND.location}
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-sm bg-[#181D18] border border-[#263128] hover:border-[#C2A676]/60 transition-colors group"
                >
                  <div className="p-2 rounded-sm bg-[#19352A] text-[#C2A676] group-hover:scale-110 transition-transform">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E8A80] block font-semibold">
                      Inquiries
                    </span>
                    <span className="text-sm font-medium text-[#F4F0E7] group-hover:text-[#C2A676] transition-colors">
                      {BRAND.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-8 text-xs text-[#8E8A80] hidden lg:block">
              Deployments available regionally throughout Nevada, California, Arizona, Wisconsin, and nationwide for scheduled commercial productions.
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#181D18] border border-[#273229] p-8 sm:p-10 rounded-sm shadow-2xl relative">
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#19352A] text-[#C2A676] flex items-center justify-center border border-[#C2A676]/40 mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-3xl text-[#F4F0E7] font-medium mb-3">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-[#D9D5CA]/90 font-light max-w-md leading-relaxed mb-8">
                  Thank you for reaching out to Optic Sky UAV. Your project details have been prepared for dispatch to our production team.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-widest text-[#C2A676] hover:underline"
                >
                  Submit another project inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#F4F0E7] font-medium mb-1">
                    Project Discussion
                  </h3>
                  <p className="text-xs text-[#8E8A80]">
                    Tell us about your property, timeline, or documentation requirements.
                  </p>
                </div>

                {/* Project Type Selector */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D9D5CA] font-medium mb-2">
                    Service Sector
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      'Golf Courses & Hospitality',
                      'Construction & Development',
                      'Real Estate & Commercial'
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`p-3 text-left rounded-sm text-xs border transition-all duration-200 ${
                          formData.projectType === type
                            ? 'bg-[#19352A] text-[#F4F0E7] border-[#C2A676]'
                            : 'bg-[#141713] text-[#8E8A80] border-[#263128] hover:text-[#D9D5CA]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D9D5CA] font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#121512] border border-[#273229] focus:border-[#C2A676] rounded-sm px-4 py-3 text-sm text-[#F4F0E7] placeholder-[#555] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D9D5CA] font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#121512] border border-[#273229] focus:border-[#C2A676] rounded-sm px-4 py-3 text-sm text-[#F4F0E7] placeholder-[#555] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D9D5CA] font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#121512] border border-[#273229] focus:border-[#C2A676] rounded-sm px-4 py-3 text-sm text-[#F4F0E7] placeholder-[#555] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D9D5CA] font-medium mb-2">
                      Project Location / Facility
                    </label>
                    <input
                      type="text"
                      placeholder="City, State or Course Name"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#121512] border border-[#273229] focus:border-[#C2A676] rounded-sm px-4 py-3 text-sm text-[#F4F0E7] placeholder-[#555] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D9D5CA] font-medium mb-2">
                    Project Vision & Objectives *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe what you'd like to capture (e.g. hole-by-hole drone sweep, monthly construction progression, commercial real estate marketing stills)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#121512] border border-[#273229] focus:border-[#C2A676] rounded-sm px-4 py-3 text-sm text-[#F4F0E7] placeholder-[#555] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-sm bg-[#19352A] hover:bg-[#224839] text-[#F4F0E7] font-semibold text-xs uppercase tracking-[0.22em] border border-[#345947] shadow-xl hover:shadow-[#19352A]/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A676]"
                >
                  <Send size={14} className="text-[#C2A676]" />
                  <span>DISCUSS YOUR PROJECT</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
