import React, { useEffect } from 'react';
import { X, Film, ExternalLink, HardDrive } from 'lucide-react';
import type { VideoItem } from '../types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
  projectTitle: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, projectTitle }) => {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [video, onClose]);

  if (!video) return null;

  const embedUrl = `https://drive.google.com/file/d/${video.driveId}/preview`;
  const directDriveUrl = `https://drive.google.com/file/d/${video.driveId}/view?usp=sharing`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0a0d0a]/95 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Play video: ${video.title}`}
    >
      {/* Backdrop click area */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-[#141814] border border-[#2D3A31] rounded-sm shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#232D24] bg-[#121512]">
          <div className="flex items-center gap-3">
            <Film size={18} className="text-[#C2A676]" />
            <div>
              <h3 className="text-base font-serif font-medium text-[#F4F0E7]">
                {video.title}
              </h3>
              <p className="text-xs text-[#8E8A80]">
                {projectTitle} • {video.originalName} ({video.fileSize})
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#D9D5CA] hover:text-[#F4F0E7] bg-[#192019] hover:bg-[#253025] rounded-full border border-[#2D3A31] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A676]"
            aria-label="Close video player"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player Embed Stage */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>

        {/* Modal Footer & Description */}
        <div className="p-6 bg-[#161B16] border-t border-[#232D24] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#D9D5CA]/90 font-light max-w-xl">
            {video.description}
          </p>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={directDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#D9D5CA] hover:text-[#C2A676] bg-[#1C231C] hover:bg-[#253025] border border-[#2D3A31] px-4 py-2 rounded-sm transition-colors"
            >
              <HardDrive size={13} className="text-[#C2A676]" />
              <span>Drive Source ({video.fileSize})</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
