import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      stars: 5,
      quote: "The 4K hole-by-hole flyovers transformed our member portal and national tournament promotion. The turf detail and lighting are sensational.",
      name: "Marcus Vance",
      role: "Director of Golf & Operations",
      location: "Whistling Straits Partner",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
    },
    {
      stars: 5,
      quote: "Having repeatable bi-weekly aerial orthomosaics kept our general contractors, owners, and municipal inspectors in complete synchronization.",
      name: "Sarah Jenkins",
      role: "Senior Project Manager",
      location: "Serket Construction Project",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80"
    },
    {
      stars: 5,
      quote: "Optic Sky captured the sheer topographic scale and coastal character of our resort better than any ground or aerial team we have ever contracted.",
      name: "David Roth",
      role: "VP of Hospitality Marketing",
      location: "Resort Destination Partner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
    },
    {
      stars: 5,
      quote: "Our commercial listing received multiple institutional offers within two weeks of launching with Optic Sky's twilight aerial plates.",
      name: "Elena Rostova",
      role: "Commercial Real Estate Broker",
      location: "Commercial Advisory Group",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
    },
    {
      stars: 5,
      quote: "The sub-inch orthomosaic files dropped cleanly into our Autodesk Civil 3D templates with zero coordinate drift. Outstanding accuracy.",
      name: "Tyler Hayes",
      role: "Lead Civil Infrastructure Engineer",
      location: "Cascata Water Reclamation",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
    },
    {
      stars: 5,
      quote: "Smooth orbital trajectories, 10-bit D-Log ProRes masters, and flawless airspace waivers handled ahead of shoot day. True pros.",
      name: "Chris Nolan",
      role: "Executive Creative Producer",
      location: "Cinematic Broadcast Agency",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80"
    }
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#f9f9f9] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FFB800]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] font-semibold text-neutral-500">
              CLIENT TESTIMONIALS
            </span>
            <span className="w-6 h-[2px] bg-[#FFB800]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-neutral-950 leading-[1.08]">
            HEAR THE STORIES STRAIGHT <br />
            FROM THE PEOPLE WE'VE SERVED
          </h2>
        </div>

        {/* 6 Testimonial Cards Grid Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200/90 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#FFB800]">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#FFB800]" />
                  ))}
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed font-normal mb-8 italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-neutral-200"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-display text-sm font-bold text-neutral-900 uppercase">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-mono">
                    {rev.role}
                  </p>
                  <p className="text-[10px] text-[#FFB800] font-mono font-medium">
                    {rev.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
