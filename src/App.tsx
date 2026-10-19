import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ElevateDestinations } from './components/ElevateDestinations';
import { SelectedWork } from './components/SelectedWork';
import { ConstructionDetail } from './components/ConstructionDetail';
import { Services } from './components/Services';
import { VisualTrioBanner } from './components/VisualTrioBanner';
import { CaseStudyStory } from './components/CaseStudyStory';
import { FloatingContactBanner } from './components/FloatingContactBanner';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { CallToAction } from './components/CallToAction';
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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.registerPlugin(ScrollTrigger);

    if (!prefersReducedMotion) {
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

  const handlePlayFeaturedVideo = () => {
    if (PROJECTS[2]?.videos?.[0]) {
      handlePlayVideo(PROJECTS[2].videos[0], PROJECTS[2].title);
    }
  };

  const handleScrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col selection:bg-[#FFB800] selection:text-black font-sans antialiased">
      {/* 01 — Fixed Header Navigation */}
      <Header onNavigate={handleScrollTo} />

      <main className="flex-1 flex flex-col">
        {/* 02 — Hero Section: Coastal Golf, Wide Headline, Dual Pill Buttons */}
        <Hero
          onExploreWork={() => handleScrollTo('work')}
          onDiscussProject={() => handleScrollTo('contact')}
        />

        {/* 03 — Elevate Destinations: White section with panoramic player showcase and 3 cards */}
        <ElevateDestinations onPlayVideo={handlePlayFeaturedVideo} />

        {/* 04 — Selected Work: Dark section with 4 horizontal project cards */}
        <SelectedWork
          onOpenLightbox={handleOpenLightbox}
          onPlayVideo={handlePlayVideo}
        />

        {/* 05 — Construction Detail: Dark section with twilight Serket cranes and 3 cards */}
        <ConstructionDetail />

        {/* 06 — Services: White section with 6-grid capability cards */}
        <Services />

        {/* 07 — Visual Trio Banner: Dark section with 3 photos and yellow marquee ticker */}
        <VisualTrioBanner
          onDiscussProject={() => handleScrollTo('contact')}
          onExploreServices={() => handleScrollTo('services')}
        />

        {/* 08 — Case Study Story: White section with 3-step panoramic storytelling */}
        <CaseStudyStory
          onOpenCaseStudy={() => {
            if (PROJECTS[2]) {
              handleOpenLightbox(PROJECTS[2].photos, 0, PROJECTS[2].title);
            }
          }}
        />

        {/* 09 — Floating Contact Banner: Aerial forest background with centered floating card */}
        <FloatingContactBanner />

        {/* 10 — Testimonials: Light section with 6 verified reviews */}
        <Testimonials />

        {/* 11 — FAQ Section: White section with pilot consultation card & interactive accordion */}
        <FAQSection />

        {/* 12 — Call to Action: Dark coastal twilight background with dual pill buttons */}
        <CallToAction
          onDiscussProject={() => handleScrollTo('contact')}
          onExploreWork={() => handleScrollTo('work')}
        />
      </main>

      {/* 13 — Comprehensive 4-Column Footer */}
      <Footer />

      {/* Interactive Photo Lightbox Modal */}
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
