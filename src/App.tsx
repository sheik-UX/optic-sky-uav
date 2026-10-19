import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { ProjectIndex } from './components/ProjectIndex';
import { ProjectSection } from './components/ProjectSection';
import { Difference } from './components/Difference';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { VideoModal } from './components/VideoModal';

import { PROJECTS } from './data/content';
import type { PhotoItem, VideoItem } from './types';

export const App: React.FC = () => {
  // Lightbox State
  const [lightboxPhotos, setLightboxPhotos] = useState<PhotoItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxProjectTitle, setLightboxProjectTitle] = useState<string>('');

  // Video Modal State
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [videoProjectTitle, setVideoProjectTitle] = useState<string>('');

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.registerPlugin(ScrollTrigger);

    if (!prefersReducedMotion) {
      // Initialize Lenis
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      lenis.on('scroll', ScrollTrigger.update);

      const tickerCallback = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(tickerCallback);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  // Handlers for Lightbox
  const handleOpenLightbox = (photos: PhotoItem[], index: number, title: string) => {
    setLightboxPhotos(photos);
    setLightboxIndex(index);
    setLightboxProjectTitle(title);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  // Handlers for Video Playback
  const handlePlayVideo = (video: VideoItem, title: string) => {
    setActiveVideo(video);
    setVideoProjectTitle(title);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  const handleScrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121512] text-[#F4F0E7] flex flex-col selection:bg-[#19352A] selection:text-[#F4F0E7]">
      {/* Top Header Navigation */}
      <Header onNavigate={handleScrollTo} />

      <main className="flex-1 flex flex-col">
        {/* Section 02 — Hero */}
        <Hero
          onExploreWork={() => handleScrollTo('work')}
          onDiscussProject={() => handleScrollTo('contact')}
        />

        {/* Section 03 — Introduction */}
        <Introduction />

        {/* Section 04 — Services */}
        <Services />

        {/* Section 05 — Featured Work Introduction & Project Index */}
        <ProjectIndex />

        {/* Section 06 — Project One: Serket */}
        <ProjectSection
          project={PROJECTS[0]}
          projectNumber="01"
          onOpenLightbox={handleOpenLightbox}
          onPlayVideo={handlePlayVideo}
        />

        {/* Section 07 — Project Two: Cascata Water Reclamation */}
        <ProjectSection
          project={PROJECTS[1]}
          projectNumber="02"
          onOpenLightbox={handleOpenLightbox}
          onPlayVideo={handlePlayVideo}
        />

        {/* Section 08 — Project Three: Whistling Straits */}
        <ProjectSection
          project={PROJECTS[2]}
          projectNumber="03"
          onOpenLightbox={handleOpenLightbox}
          onPlayVideo={handlePlayVideo}
        />

        {/* Section 09 — The Optic Sky Difference */}
        <Difference />

        {/* Section 10 — About / Production Approach */}
        <About />

        {/* Section 11 — Contact CTA & Inquiry Form */}
        <Contact />
      </main>

      {/* Section 12 — Footer */}
      <Footer />

      {/* Accessible Photo Lightbox Modal */}
      <Lightbox
        photos={lightboxPhotos}
        currentIndex={lightboxIndex}
        projectTitle={lightboxProjectTitle}
        onClose={handleCloseLightbox}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

      {/* Independent Video Player Modal */}
      <VideoModal
        video={activeVideo}
        projectTitle={videoProjectTitle}
        onClose={handleCloseVideo}
      />
    </div>
  );
};

export default App;
