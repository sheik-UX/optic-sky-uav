import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';
import type { PhotoItem } from '../types';

interface LightboxProps {
  photos: PhotoItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  projectTitle: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
  projectTitle
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prev = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(prev);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const next = (currentIndex + 1) % photos.length;
    onNavigate(next);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#13140e]/95 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged photo: ${currentPhoto.alt}`}
    >
      {/* Top Bar: Project Title, Counter, and Close Button */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#404040] z-20">
        <div className="flex items-center gap-3">
          <Camera size={16} className="text-[#ebfc72]" />
          <span className="font-sans text-lg text-[#f4f3e8] font-normal tracking-[-0.03em]">
            {projectTitle}
          </span>
          <span className="text-[#84837b] text-xs font-mono">
            Plate {currentIndex + 1} of {photos.length}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#84837b] hover:text-[#ebfc72] bg-[#13140e] rounded-[3.6px] border border-[#404040] transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-4 sm:left-6 z-20 p-3 sm:p-4 text-[#f4f3e8] hover:text-[#13140e] hover:bg-[#ebfc72] hover:border-[#ebfc72] bg-[#13140e]/90 rounded-[3.6px] border border-[#404040] backdrop-blur-md transition-all duration-300 focus:outline-none"
          aria-label="Previous photograph"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Displayed Image */}
        <div className="relative max-w-full max-h-[75vh] flex items-center justify-center">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="max-w-full max-h-[75vh] object-contain rounded-none shadow-none transition-transform duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-4 sm:right-6 z-20 p-3 sm:p-4 text-[#f4f3e8] hover:text-[#13140e] hover:bg-[#ebfc72] hover:border-[#ebfc72] bg-[#13140e]/90 rounded-[3.6px] border border-[#404040] backdrop-blur-md transition-all duration-300 focus:outline-none"
          aria-label="Next photograph"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Bottom Bar: Caption, Metadata, and Dimensions */}
      <div className="px-6 py-4 border-t border-[#404040] bg-[#13140e]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 z-20">
        <div>
          <p className="text-sm font-sans font-normal text-[#f4f3e8]">
            {currentPhoto.caption || currentPhoto.alt}
          </p>
          <p className="text-xs text-[#84837b] font-mono">
            Source: {currentPhoto.originalName}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#84837b]">
          <span>Resolution: {currentPhoto.width} × {currentPhoto.height}px</span>
          <span className="hidden sm:inline">•</span>
          <span>Ratio: {currentPhoto.aspectRatio}</span>
          <a
            href={currentPhoto.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#ebfc72] hover:underline ml-2"
          >
            <Maximize2 size={12} />
            <span>Full Resolution</span>
          </a>
        </div>
      </div>
    </div>
  );
};
