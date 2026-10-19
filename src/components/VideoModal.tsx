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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#13140e]/95 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Play video: ${video.title}`}
    >
      {/* Backdrop click area */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-[#13140e] border border-[#404040] rounded-none shadow-none overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#404040] bg-[#13140e]">
          <div className="flex items-center gap-3">
            <Film size={18} className="text-[#ebfc72]" />
            <div>
              <h3 className="text-base font-sans font-normal text-[#f4f3e8] tracking-[-0.03em]">
                {video.title}
              </h3>
              <p className="text-xs font-mono text-[#84837b]">
                {projectTitle} • {video.originalName} ({video.fileSize})
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#84837b] hover:text-[#ebfc72] bg-[#13140e] rounded-[3.6px] border border-[#404040] transition-colors focus:outline-none"
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
        <div className="p-6 bg-[#13140e] border-t border-[#404040] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#f4f3e8]/90 font-normal leading-[1.62] max-w-xl">
            {video.description}
          </p>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={directDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#84837b] hover:text-[#ebfc72] hover:border-[#ebfc72] bg-[#13140e] border border-[#404040] px-4 py-2 rounded-[3.6px] transition-colors"
            >
              <HardDrive size={13} className="text-[#ebfc72]" />
              <span>Drive Source ({video.fileSize})</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
