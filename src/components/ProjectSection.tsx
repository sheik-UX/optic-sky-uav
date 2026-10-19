import React from 'react';
import { Play, Maximize2, MapPin, Film, HardDrive, CheckCircle2 } from 'lucide-react';
import type { ProjectData, PhotoItem, VideoItem } from '../types';

interface ProjectSectionProps {
  project: ProjectData;
  projectNumber: string;
  onOpenLightbox: (photos: PhotoItem[], index: number, title: string) => void;
  onPlayVideo: (video: VideoItem, title: string) => void;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  project,
  projectNumber,
  onOpenLightbox,
  onPlayVideo,
}) => {
  return (
    <article
      id={project.id}
      className="py-24 sm:py-32 border-t border-[#232D24] relative bg-[#121512] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Project Header Info */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#C2A676] font-semibold mb-3">
              <span className="font-mono text-sm">{projectNumber}</span>
              <span className="w-6 h-[1px] bg-[#C2A676]" />
              <span>{project.eyebrow}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F4F0E7] tracking-tight mb-4">
              {project.title}
            </h2>

            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8E8A80] mb-6 font-sans">
              <MapPin size={13} className="text-[#C2A676]" />
              <span>{project.location}</span>
            </div>

            <p className="text-base sm:text-lg text-[#D9D5CA]/90 font-light leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Project Highlights / Metadata */}
          <div className="flex flex-col gap-2 p-5 rounded-sm bg-[#161B16] border border-[#232D24] shrink-0 lg:max-w-xs w-full">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E8A80] font-semibold">
              Project Scope & Assets
            </span>
            <ul className="space-y-1.5 pt-2 border-t border-[#232D24]">
              {project.keyDetails.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-center gap-2 text-xs text-[#D9D5CA] font-light">
                  <CheckCircle2 size={12} className="text-[#C2A676] shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 1. Dominant Hero Opening Image */}
        <div className="mb-14 sm:mb-18">
          <div
            onClick={() => onOpenLightbox(project.photos, 0, project.title)}
            className="group relative w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] rounded-sm overflow-hidden bg-[#181D18] cursor-pointer border border-[#273229] hover:border-[#C2A676]/60 transition-all duration-500 shadow-2xl"
          >
            <img
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121512]/90 via-[#121512]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 z-10">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-xs bg-[#19352A]/90 text-[#F4F0E7] text-[10px] uppercase tracking-[0.2em] font-semibold border border-[#C2A676]/40 mb-2">
                  Dominant Hero Plate
                </span>
                <p className="text-sm sm:text-base md:text-lg font-serif text-[#F4F0E7] font-medium drop-shadow-md">
                  {project.heroImage.caption}
                </p>
                <p className="text-xs text-[#8E8A80] font-mono mt-0.5">
                  Resolution: {project.heroImage.width} × {project.heroImage.height}px • Ratio: {project.heroImage.aspectRatio}
                </p>
              </div>

              <div className="p-3 rounded-full bg-[#121512]/80 backdrop-blur-md text-[#F4F0E7] border border-[#2D3A31] group-hover:bg-[#19352A] group-hover:text-[#C2A676] transition-colors shrink-0">
                <Maximize2 size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Asymmetrical Editorial Photo Gallery */}
        <div className="mb-20 sm:mb-24">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#232D24]">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F4F0E7]">
              Editorial Photo Gallery
            </h3>
            <span className="text-xs font-mono text-[#8E8A80]">
              {project.photos.length} Verified High-Resolution Plates
            </span>
          </div>

          {/* Asymmetrical Layout Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
            {project.photos.map((photo, pIdx) => {
              // Asymmetrical rhythm:
              // For a 12-column grid:
              // Wide photos get 8 cols or 12 cols
              // Vertical portrait photos get 4 cols
              // Standard landscape photos get 6 cols or 4 cols
              let colSpan = "sm:col-span-1 lg:col-span-6";
              let heightClass = "h-72 sm:h-80 md:h-96";

              if (photo.category === 'portrait') {
                colSpan = "sm:col-span-1 lg:col-span-4";
                heightClass = "h-80 sm:h-96 lg:h-[480px]";
              } else if (pIdx === 2 || pIdx === 6) {
                colSpan = "sm:col-span-2 lg:col-span-8";
                heightClass = "h-80 sm:h-96 lg:h-[480px]";
              } else if (pIdx === 4 || pIdx === 9) {
                colSpan = "sm:col-span-2 lg:col-span-12";
                heightClass = "h-80 sm:h-[440px] lg:h-[520px]";
              } else if (photo.category === 'wide') {
                colSpan = "sm:col-span-1 lg:col-span-6";
                heightClass = "h-72 sm:h-80 lg:h-96";
              } else {
                colSpan = "sm:col-span-1 lg:col-span-4";
                heightClass = "h-72 sm:h-80 lg:h-88";
              }

              return (
                <div
                  key={photo.id}
                  onClick={() => onOpenLightbox(project.photos, pIdx, project.title)}
                  className={`group relative rounded-sm overflow-hidden bg-[#161B16] border border-[#232D24] hover:border-[#C2A676]/60 cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-[#19352A]/20 ${colSpan} ${heightClass}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121512]/95 via-[#121512]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#C2A676] font-medium">
                          Plate {pIdx + 1}
                        </p>
                        <p className="text-sm font-medium text-[#F4F0E7] line-clamp-2">
                          {photo.caption || photo.alt}
                        </p>
                        <p className="text-[10px] text-[#8E8A80] font-mono mt-1">
                          {photo.width} × {photo.height}px ({photo.aspectRatio})
                        </p>
                      </div>

                      <div className="p-2 rounded-full bg-[#19352A] text-[#C2A676] border border-[#C2A676]/40 shrink-0">
                        <Maximize2 size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Corner Plate Identifier */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-xs bg-[#121512]/75 backdrop-blur-sm border border-[#2D3A31] text-[10px] font-mono text-[#D9D5CA] opacity-80 group-hover:opacity-0 transition-opacity">
                    0{pIdx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Independent Video Showcase */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 mb-8 border-b border-[#232D24]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C2A676] font-semibold mb-1">
                <Film size={14} />
                <span>CINEMATIC DRONE FOOTAGE</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F4F0E7]">
                Supplied Video Reels ({project.videos.length})
              </h3>
            </div>
            <p className="text-xs text-[#8E8A80] max-w-md">
              Each supplied video is presented as an independent media element. Original cuts, durations, and aspect ratios preserved without alteration.
            </p>
          </div>

          {/* Videos Grid */}
          <div className={`grid grid-cols-1 ${project.videos.length === 2 ? 'md:grid-cols-2' : project.videos.length > 2 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-1'} gap-6 sm:gap-8`}>
            {project.videos.map((video) => (
              <div
                key={video.id}
                className="group relative flex flex-col bg-[#161B16] border border-[#232D24] hover:border-[#C2A676]/60 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#19352A]/20"
              >
                {/* Video Poster with Play Overlay */}
                <div
                  onClick={() => onPlayVideo(video, project.title)}
                  className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#000] cursor-pointer"
                >
                  <img
                    src={video.poster}
                    alt={`${video.title} poster`}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#19352A]/90 group-hover:bg-[#C2A676] text-[#F4F0E7] group-hover:text-[#121512] flex items-center justify-center border border-[#C2A676]/50 shadow-2xl transform transition-all duration-300 group-hover:scale-110">
                      <Play size={22} className="ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Top Metadata Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-xs bg-[#121512]/80 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-[#F4F0E7] border border-[#2D3A31]">
                      {video.duration || 'Drone Reel'}
                    </span>
                    <span className="px-2.5 py-1 rounded-xs bg-[#19352A]/80 backdrop-blur-md text-[10px] font-mono text-[#C2A676] border border-[#2D4D3D]">
                      {video.fileSize}
                    </span>
                  </div>
                </div>

                {/* Video Info Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#F4F0E7] group-hover:text-[#C2A676] transition-colors mb-2">
                      {video.title}
                    </h4>
                    <p className="text-xs text-[#8E8A80] font-mono mb-3">
                      Source: {video.originalName}
                    </p>
                    <p className="text-xs sm:text-sm text-[#D9D5CA]/80 leading-relaxed font-light mb-6">
                      {video.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#232D24] flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => onPlayVideo(video, project.title)}
                      className="inline-flex items-center gap-2 uppercase tracking-wider font-semibold text-[#C2A676] hover:text-[#F4F0E7] transition-colors"
                    >
                      <Play size={12} className="fill-current" />
                      <span>Play Video</span>
                    </button>

                    <a
                      href={`https://drive.google.com/file/d/${video.driveId}/view?usp=sharing`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#8E8A80] hover:text-[#D9D5CA] transition-colors font-mono"
                      title="Inspect original file in Drive"
                    >
                      <HardDrive size={12} />
                      <span>Drive Source</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
