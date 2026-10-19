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
    <section id="contact" className="py-28 sm:py-36 bg-[#13140e] relative border-t border-[#404040]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Confirmed Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#ebfc72] font-mono mb-3">
                <span className="w-6 h-[1px] bg-[#ebfc72]" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-normal text-[#f4f3e8] tracking-[-0.03em] leading-[0.95] mb-6">
                LET'S MAKE <br />
                THE VIEW <br />
                <span className="text-[#ebfc72]">IMPOSSIBLE</span> <br />
                TO FORGET.
              </h2>

              <p className="text-base text-[#f4f3e8]/90 font-normal leading-[1.62] mb-8 max-w-md">
                Have a course, property, or project worth seeing from a different perspective? Let's discuss your next aerial photography or video project.
              </p>

              {/* Verified Contact Details Box */}
              <div className="space-y-4 pt-6 border-t border-[#404040]">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex items-center gap-3 p-3.5 rounded-none bg-[#13140e] border border-[#404040] hover:border-[#ebfc72]/80 transition-colors group"
                >
                  <div className="p-2 rounded-[3.6px] bg-[#13140e] text-[#ebfc72] border border-[#404040] group-hover:bg-[#ebfc72] group-hover:text-[#13140e] transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#84837b] block font-normal">
                      Direct Telephone
                    </span>
                    <span className="text-sm font-sans font-normal text-[#f4f3e8] group-hover:text-[#ebfc72] transition-colors">
                      {BRAND.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-none bg-[#13140e] border border-[#404040]">
                  <div className="p-2 rounded-[3.6px] bg-[#13140e] text-[#ebfc72] border border-[#404040]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#84837b] block font-normal">
                      Primary Location
                    </span>
                    <span className="text-sm font-sans font-normal text-[#f4f3e8]">
                      {BRAND.location}
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-none bg-[#13140e] border border-[#404040] hover:border-[#ebfc72]/80 transition-colors group"
                >
                  <div className="p-2 rounded-[3.6px] bg-[#13140e] text-[#ebfc72] border border-[#404040] group-hover:bg-[#ebfc72] group-hover:text-[#13140e] transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#84837b] block font-normal">
                      Inquiries
                    </span>
                    <span className="text-sm font-sans font-normal text-[#f4f3e8] group-hover:text-[#ebfc72] transition-colors">
                      {BRAND.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-8 text-xs text-[#84837b] font-mono leading-[1.62] hidden lg:block">
              Deployments available regionally throughout Nevada, California, Arizona, Wisconsin, and nationwide for scheduled commercial productions.
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#13140e] border border-[#404040] p-8 sm:p-10 rounded-none relative">
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#13140e] text-[#ebfc72] flex items-center justify-center border border-[#ebfc72]/60 mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-sans text-3xl text-[#f4f3e8] font-normal tracking-[-0.03em] mb-3">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-[#f4f3e8]/90 font-normal max-w-md leading-[1.62] mb-8">
                  Thank you for reaching out to Optic Sky UAV. Your project details have been prepared for dispatch to our production team.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase font-mono tracking-widest text-[#ebfc72] hover:underline"
                >
                  Submit another project inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-sans text-2xl text-[#f4f3e8] font-normal tracking-[-0.03em] mb-1">
                    Project Discussion
                  </h3>
                  <p className="text-xs text-[#84837b] font-normal">
                    Tell us about your property, timeline, or documentation requirements.
                  </p>
                </div>

                {/* Project Type Selector */}
                <div>
                  <label className="block text-xs uppercase font-mono tracking-widest text-[#84837b] mb-2">
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
                        className={`p-3 text-left rounded-[3.6px] text-xs font-mono border transition-all duration-200 ${
                          formData.projectType === type
                            ? 'bg-[#ebfc72] text-[#13140e] border-[#ebfc72] font-medium'
                            : 'bg-[#13140e] text-[#84837b] border-[#404040] hover:text-[#f4f3e8] hover:border-[#84837b]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-widest text-[#84837b] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[#404040] focus:border-[#ebfc72] px-0 py-2.5 text-sm text-[#f4f3e8] placeholder-[#84837b] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-widest text-[#84837b] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#404040] focus:border-[#ebfc72] px-0 py-2.5 text-sm text-[#f4f3e8] placeholder-[#84837b] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-widest text-[#84837b] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-[#404040] focus:border-[#ebfc72] px-0 py-2.5 text-sm text-[#f4f3e8] placeholder-[#84837b] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-widest text-[#84837b] mb-2">
                      Project Location / Facility
                    </label>
                    <input
                      type="text"
                      placeholder="City, State or Course Name"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-transparent border-b border-[#404040] focus:border-[#ebfc72] px-0 py-2.5 text-sm text-[#f4f3e8] placeholder-[#84837b] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-widest text-[#84837b] mb-2">
                    Project Vision & Objectives *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe what you'd like to capture (e.g. hole-by-hole drone sweep, monthly construction progression, commercial real estate marketing stills)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#404040] focus:border-[#ebfc72] px-0 py-2.5 text-sm text-[#f4f3e8] placeholder-[#84837b] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-[3.6px] bg-[#ebfc72] hover:bg-[#bacd31] text-[#13140e] font-mono font-medium text-xs uppercase tracking-widest transition-all duration-300 focus:outline-none"
                >
                  <Send size={14} className="text-[#13140e]" />
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
