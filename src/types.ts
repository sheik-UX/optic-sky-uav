export interface PhotoItem {
  id: string;
  name: string;
  originalName: string;
  src: string;
  alt: string;
  caption?: string;
  category: 'wide' | 'landscape' | 'portrait' | 'standard';
  width: number;
  height: number;
  aspectRatio: string;
}

export interface VideoItem {
  id: string;
  title: string;
  originalName: string;
  poster: string;
  driveId: string;
  fileSize: string;
  description: string;
  duration?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  eyebrow: string;
  location: string;
  heroImage: PhotoItem;
  description: string;
  keyDetails: string[];
  photos: PhotoItem[];
  videos: VideoItem[];
}

export interface ServiceCategory {
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
}
