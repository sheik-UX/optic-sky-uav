import type { ProjectData, ServiceCategory } from '../types';

export const BRAND = {
  name: "Optic Sky UAV",
  tagline: "Aerial Imagery With Purpose",
  phone: "(702) 551-5918",
  phoneRaw: "7025515918",
  location: "Las Vegas, NV 89052",
  domain: "https://opticskyuav.com",
  email: "info@opticskyuav.com",
  established: "2023",
  copyrightYear: 2026,
};

export const SERVICES: ServiceCategory[] = [
  {
    number: "01",
    title: "Golf Courses & Hospitality",
    tagline: "Reveal the drama of the landscape",
    description: "Aerial imagery and cinematic video that showcase course layouts, resort landscapes, amenities, and the experience of a destination.",
    highlights: [
      "Hole-by-hole architectural flight paths",
      "Signature green and fairway elevation surveys",
      "Clubhouse & resort property sweeps",
      "Digital marketing and tournament media packages"
    ],
    image: "/assets/whistling-straits/whistling-01.jpg"
  },
  {
    number: "02",
    title: "Construction & Development",
    tagline: "Verifiable progress from ground-breaking to handover",
    description: "Professional aerial documentation for active job sites, progress tracking, site overviews, and visual records of development.",
    highlights: [
      "Scheduled monthly site progression tracking",
      "High-angle excavation and civil engineering overviews",
      "Subcontractor alignment & milestone reporting",
      "Historical archival records for stakeholders"
    ],
    image: "/assets/cascata-water-reclamation/cascata-01.jpg"
  },
  {
    number: "03",
    title: "Real Estate & Commercial Projects",
    tagline: "Scale, detail, and commercial context",
    description: "Aerial perspectives for properties, developments, marketing materials, and commercial presentations.",
    highlights: [
      "Commercial parcel and urban perimeter surveys",
      "Cinematic orbital footage for commercial portfolios",
      "Infrastructure context and transport corridor views",
      "Architectural showcase imagery for marketing"
    ],
    image: "/assets/serket/serket-01.jpg"
  }
];

export const PROJECTS: ProjectData[] = [
  {
    id: "serket",
    title: "Serket",
    eyebrow: "Project 01 — Structural & Architectural Survey",
    location: "Commercial Development",
    description: "High-altitude architectural perspectives and orbital aerial documentation capturing structural scale, parcel perimeter, and surrounding environmental context with cinematic fidelity.",
    keyDetails: [
      "10 High-Resolution Aerial Photographs",
      "2 Independent 4K Cinematic Reels",
      "Orbital & High-Altitude Structural Compositions"
    ],
    heroImage: {
      id: "serket-hero",
      name: "serket-01.jpg",
      originalName: "Serket1.JPG",
      src: "/assets/serket/serket-01.jpg",
      alt: "Serket structural aerial perspective overlooking urban terrain",
      caption: "Serket Primary Aerial Survey — 2560px Widescreen Composition",
      category: "wide",
      width: 2560,
      height: 1424,
      aspectRatio: "16:9"
    },
    photos: [
      {
        id: "serket-1",
        name: "serket-01.jpg",
        originalName: "Serket1.JPG",
        src: "/assets/serket/serket-01.jpg",
        alt: "Serket primary aerial panorama",
        caption: "High-altitude overview highlighting structural geometry",
        category: "wide",
        width: 2560,
        height: 1424,
        aspectRatio: "1.80:1"
      },
      {
        id: "serket-2",
        name: "serket-02.jpg",
        originalName: "Copy of Serket2.JPG",
        src: "/assets/serket/serket-02.jpg",
        alt: "Serket site perspective angle 2",
        caption: "Elevated angular approach across site perimeter",
        category: "landscape",
        width: 2560,
        height: 1408,
        aspectRatio: "1.82:1"
      },
      {
        id: "serket-3",
        name: "serket-03.jpg",
        originalName: "Serket5.JPG",
        src: "/assets/serket/serket-03.jpg",
        alt: "Serket architectural elevation",
        caption: "Structural elevation and parcel integration",
        category: "landscape",
        width: 2560,
        height: 1408,
        aspectRatio: "1.82:1"
      },
      {
        id: "serket-4",
        name: "serket-04.jpg",
        originalName: "Copy of DJI_20260524074657_0022_D_FLIGHT1.JPG",
        src: "/assets/serket/serket-04.jpg",
        alt: "Serket flight 1 overhead detail",
        caption: "Direct downward topographical capture",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "serket-5",
        name: "serket-05.jpg",
        originalName: "Screenshot 2026-09-15 at 4.14.22 PM.png",
        src: "/assets/serket/serket-05.jpg",
        alt: "Serket mid-range inspection frame",
        caption: "Mid-altitude horizon and environmental alignment",
        category: "landscape",
        width: 1306,
        height: 712,
        aspectRatio: "1.83:1"
      },
      {
        id: "serket-6",
        name: "serket-06.jpg",
        originalName: "Screenshot 2026-09-15 at 4.23.01 PM.png",
        src: "/assets/serket/serket-06.jpg",
        alt: "Serket orbital sweep frame 1",
        caption: "Orbital sweep framing structural boundaries",
        category: "wide",
        width: 1891,
        height: 1051,
        aspectRatio: "1.80:1"
      },
      {
        id: "serket-7",
        name: "serket-07.jpg",
        originalName: "Screenshot 2026-09-15 at 4.23.42 PM.png",
        src: "/assets/serket/serket-07.jpg",
        alt: "Serket cinematic wide view",
        caption: "Cinematic 2:1 panoramic format revealing surrounding topography",
        category: "wide",
        width: 1909,
        height: 950,
        aspectRatio: "2.01:1"
      },
      {
        id: "serket-8",
        name: "serket-08.jpg",
        originalName: "Screenshot 2026-09-15 at 4.24.58 PM.png",
        src: "/assets/serket/serket-08.jpg",
        alt: "Serket low-angle tracking shot",
        caption: "Architectural line work against open sky",
        category: "landscape",
        width: 1891,
        height: 1044,
        aspectRatio: "1.81:1"
      },
      {
        id: "serket-9",
        name: "serket-09.jpg",
        originalName: "Screenshot 2026-09-15 at 4.32.31 PM.png",
        src: "/assets/serket/serket-09.jpg",
        alt: "Serket daylight progression capture",
        caption: "Late afternoon shadow casting over site topography",
        category: "landscape",
        width: 1895,
        height: 1049,
        aspectRatio: "1.81:1"
      },
      {
        id: "serket-10",
        name: "serket-10.jpg",
        originalName: "DJI_20260524074631_0021_D_FLIGHT1.DNG",
        src: "/assets/serket/serket-10.jpg",
        alt: "Serket high-resolution raw aerial capture",
        caption: "High-dynamic-range survey frame",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      }
    ],
    videos: [
      {
        id: "serket-vid-1",
        title: "Serket Sample Reel",
        originalName: "Serket Sample Reel.mov",
        poster: "/assets/serket/video-poster-1.jpg",
        driveId: "17ioJH4iI6wQKJLZyb7x8pdbFv4qThCFA",
        fileSize: "190.1 MB",
        description: "Vertical cinematic cut showcasing close-proximity architectural tracking and dynamic vertical reveals.",
        duration: "Sample Cut"
      },
      {
        id: "serket-vid-2",
        title: "Serket Sizzle Horizontal",
        originalName: "Serket Sizzle Horizontal.mov",
        poster: "/assets/serket/video-poster-2.jpg",
        driveId: "1IC1auYqQ-h1OhyS3rktQL7zPlAKZo3Y5",
        fileSize: "1,019.3 MB",
        description: "Full widescreen commercial master featuring high-altitude sweeps, orbital rotations, and site boundary context.",
        duration: "Master Reel"
      }
    ]
  },
  {
    id: "cascata",
    title: "Cascata Water Reclamation",
    eyebrow: "Project 02 — Civil Infrastructure Documentation",
    location: "Boulder City, Nevada",
    description: "Multi-month aerial monitoring and industrial civil documentation of the municipal water reclamation facility in Boulder City, Nevada. Tracks extensive retention basin earthworks, concrete infrastructure, and desert site progression.",
    keyDetails: [
      "12 High-Resolution 4:3 Aerial Survey Plates",
      "2 Independent Industrial Drone Reels",
      "Active Multi-Month Progression Records"
    ],
    heroImage: {
      id: "cascata-hero",
      name: "cascata-01.jpg",
      originalName: "DJI_20260612074249_0032_D_FLIGHT1.JPG",
      src: "/assets/cascata-water-reclamation/cascata-01.jpg",
      alt: "Cascata Water Reclamation facility site overview, Boulder City NV",
      caption: "Cascata Water Reclamation — June Milestone Site Overview (2560 × 1920)",
      category: "standard",
      width: 2560,
      height: 1920,
      aspectRatio: "4:3"
    },
    photos: [
      {
        id: "cascata-1",
        name: "cascata-01.jpg",
        originalName: "DJI_20260612074249_0032_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-01.jpg",
        alt: "Facility overview flight 1",
        caption: "June Flight 1: Initial facility layout and surrounding desert terrain",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "cascata-2",
        name: "cascata-02.jpg",
        originalName: "DJI_20260903080535_0163_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-02.jpg",
        alt: "September basin earthworks documentation",
        caption: "September Flight: Water retention basin excavation and containment grading",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "cascata-3",
        name: "cascata-03.jpg",
        originalName: "DJI_20260903081829_0174_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-03.jpg",
        alt: "High-angle facility infrastructure detail",
        caption: "Close-proximity inspection of processing tanks and containment structures",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "cascata-4",
        name: "cascata-04.jpg",
        originalName: "DJI_20260903081836_0175_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-04.jpg",
        alt: "Grading and access road alignment",
        caption: "Heavy equipment staging and access corridor tracking",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "cascata-5",
        name: "cascata-05.jpg",
        originalName: "DJI_20260903081913_0179_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-05.jpg",
        alt: "Retention pond and topography survey",
        caption: "Graded retention perimeter and geological berm contours",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "cascata-6",
        name: "cascata-06.jpg",
        originalName: "DJI_20260903091644_0249_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-06.jpg",
        alt: "Solar array and auxiliary infrastructure",
        caption: "Renewable energy integration and plant auxiliary structures",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "cascata-7",
        name: "cascata-07.jpg",
        originalName: "DJI_20260903091650_0250_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-07.jpg",
        alt: "Civil pipeline and trenching inspection",
        caption: "Subsurface utility conduits and piping alignment documentation",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "cascata-8",
        name: "cascata-08.jpg",
        originalName: "DJI_20260903094258_0262_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-08.jpg",
        alt: "Boulder City mountain context and boundary",
        caption: "Regional mountain context and municipal facility boundary",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "cascata-9",
        name: "cascata-09.jpg",
        originalName: "DJI_20260903094321_0265_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-09.jpg",
        alt: "Water treatment clarifier inspection",
        caption: "Radial clarifiers and sedimentation infrastructure",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "cascata-10",
        name: "cascata-10.jpg",
        originalName: "DJI_20260919091304_0339_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-10.jpg",
        alt: "Mid-September progression flight",
        caption: "Mid-September flight capturing revised basin earthworks",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "cascata-11",
        name: "cascata-11.jpg",
        originalName: "DJI_20260919092544_0345_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-11.jpg",
        alt: "Low-altitude civil inspection",
        caption: "Low-altitude engineering detail of earthwork compacting",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      },
      {
        id: "cascata-12",
        name: "cascata-12.jpg",
        originalName: "DJI_20261008082537_0344_D_FLIGHT1.JPG",
        src: "/assets/cascata-water-reclamation/cascata-12.jpg",
        alt: "October milestone completion status",
        caption: "October Milestone: Autumn operational overview of completed sectors",
        category: "standard",
        width: 2560,
        height: 1920,
        aspectRatio: "4:3"
      }
    ],
    videos: [
      {
        id: "cascata-vid-1",
        title: "Cascata Overview Reel",
        originalName: "Copy of Copy of 1011 (6).mov",
        poster: "/assets/cascata-water-reclamation/video-poster-1.jpg",
        driveId: "1lxUECRKAhuChbHn_w30VjkPFa1im35PZ",
        fileSize: "428 MB",
        description: "Full site survey video documenting active earthmoving, equipment corridors, and facility perimeter.",
        duration: "Site Overview"
      },
      {
        id: "cascata-vid-2",
        title: "Cascata Flight Reel",
        originalName: "Copy of DJI_20260919094032_0350_D_FLIGHT1.MP4",
        poster: "/assets/cascata-water-reclamation/video-poster-2.jpg",
        driveId: "1VbGLYRMf8yLy6_lJ2KbEIsJmelem-vBq",
        fileSize: "681.2 MB",
        description: "Dynamic low-altitude tracking reel following water conduits, treatment structures, and boundary contours.",
        duration: "Inspection Pass"
      }
    ]
  },
  {
    id: "whistling-straits",
    title: "Whistling Straits",
    eyebrow: "Project 03 — Championship Golf Course Portfolio",
    location: "Sheboygan, Wisconsin",
    description: "Bespoke aerial portfolio of Whistling Straits along the dramatic bluffs of Lake Michigan. Showcases Pete Dye's legendary linksland architecture, rugged sand dunes, signature par-3 perched greens, and vast coastal vistas.",
    keyDetails: [
      "15 High-Resolution Editorial Photographs",
      "5 Independent Course Flight Video Reels",
      "Landscape & Vertical Architectural Composition"
    ],
    heroImage: {
      id: "whistling-hero",
      name: "whistling-01.jpg",
      originalName: "Screenshot 2026-10-11 at 9.55.01 AM.png",
      src: "/assets/whistling-straits/whistling-01.jpg",
      alt: "Whistling Straits golf course overlooking Lake Michigan",
      caption: "Whistling Straits — Coastal Dunes & Lake Michigan Horizon",
      category: "wide",
      width: 1866,
      height: 1012,
      aspectRatio: "1.84:1"
    },
    photos: [
      {
        id: "whistling-1",
        name: "whistling-01.jpg",
        originalName: "Screenshot 2026-10-11 at 9.55.01 AM.png",
        src: "/assets/whistling-straits/whistling-01.jpg",
        alt: "Lake Michigan coastal fairway sweep",
        caption: "Coastal cliffside fairways sweeping toward the Lake Michigan horizon",
        category: "wide",
        width: 1866,
        height: 1012,
        aspectRatio: "1.84:1"
      },
      {
        id: "whistling-2",
        name: "whistling-02.jpg",
        originalName: "Screenshot 2026-10-11 at 10.51.45 AM.png",
        src: "/assets/whistling-straits/whistling-02.jpg",
        alt: "Whistling Straits greens and sand hazards",
        caption: "Intricate bunker clusters and undulating greens above the lakeshore",
        category: "landscape",
        width: 1892,
        height: 1029,
        aspectRatio: "1.84:1"
      },
      {
        id: "whistling-3",
        name: "whistling-03.jpg",
        originalName: "Screenshot 2026-10-11 at 10.52.46 AM.png",
        src: "/assets/whistling-straits/whistling-03.jpg",
        alt: "Fairway and flag location",
        caption: "Architectural routing through sculpted fescue mounds",
        category: "landscape",
        width: 1900,
        height: 1033,
        aspectRatio: "1.84:1"
      },
      {
        id: "whistling-4",
        name: "whistling-04.jpg",
        originalName: "Screenshot 2026-10-11 at 10.55.20 AM.png",
        src: "/assets/whistling-straits/whistling-04.jpg",
        alt: "Vertical hole layout perspective",
        caption: "Vertical hole layout showing tee-to-green strategic hazard placement",
        category: "portrait",
        width: 592,
        height: 1035,
        aspectRatio: "0.57:1"
      },
      {
        id: "whistling-5",
        name: "whistling-05.jpg",
        originalName: "Screenshot 2026-10-11 at 10.58.22 AM.png",
        src: "/assets/whistling-straits/whistling-05.jpg",
        alt: "Bunker field detail",
        caption: "Pete Dye's signature expansive sand hazard typography",
        category: "wide",
        width: 1694,
        height: 950,
        aspectRatio: "1.78:1"
      },
      {
        id: "whistling-6",
        name: "whistling-06.jpg",
        originalName: "Screenshot 2026-10-11 at 11.21.35 AM.png",
        src: "/assets/whistling-straits/whistling-06.jpg",
        alt: "Clubhouse and practice grounds approach",
        caption: "Irish-style stone clubhouse and championship practice facilities",
        category: "wide",
        width: 1685,
        height: 939,
        aspectRatio: "1.79:1"
      },
      {
        id: "whistling-7",
        name: "whistling-07.jpg",
        originalName: "Screenshot 2026-10-11 at 11.22.42 AM.png",
        src: "/assets/whistling-straits/whistling-07.jpg",
        alt: "Interlocking fairways aerial view",
        caption: "Interlocking fairways and naturalized grassland ecology",
        category: "wide",
        width: 1679,
        height: 939,
        aspectRatio: "1.79:1"
      },
      {
        id: "whistling-8",
        name: "whistling-08.jpg",
        originalName: "Screenshot 2026-10-11 at 11.31.29 AM.png",
        src: "/assets/whistling-straits/whistling-08.jpg",
        alt: "Vertical pin placement view",
        caption: "Perched green complex overlooking shoreline bluff drop-off",
        category: "portrait",
        width: 539,
        height: 934,
        aspectRatio: "0.58:1"
      },
      {
        id: "whistling-9",
        name: "whistling-09.jpg",
        originalName: "Screenshot 2026-10-13 at 11.16.03 AM.png",
        src: "/assets/whistling-straits/whistling-09.jpg",
        alt: "Lakeview par 3 green complex",
        caption: "Signature par 3 hole nestled along the water's edge",
        category: "wide",
        width: 1682,
        height: 938,
        aspectRatio: "1.79:1"
      },
      {
        id: "whistling-10",
        name: "whistling-10.jpg",
        originalName: "Screenshot 2026-10-15 at 4.12.31 PM.png",
        src: "/assets/whistling-straits/whistling-10.jpg",
        alt: "Sunset shadows across the links",
        caption: "Golden hour sidelight revealing true dune contours and ripples",
        category: "landscape",
        width: 1881,
        height: 1001,
        aspectRatio: "1.88:1"
      },
      {
        id: "whistling-11",
        name: "whistling-11.jpg",
        originalName: "Screenshot 2026-10-15 at 4.13.05 PM.png",
        src: "/assets/whistling-straits/whistling-11.jpg",
        alt: "Water boundary escarpment aerial",
        caption: "Coastal erosion barriers and rocky Lake Michigan shoreline",
        category: "wide",
        width: 1876,
        height: 1040,
        aspectRatio: "1.80:1"
      },
      {
        id: "whistling-12",
        name: "whistling-12.jpg",
        originalName: "Screenshot 2026-10-15 at 4.15.23 PM.png",
        src: "/assets/whistling-straits/whistling-12.jpg",
        alt: "High-sun linksland geometry",
        caption: "Clean geometric contrast between fairway manicuring and wild rough",
        category: "landscape",
        width: 1883,
        height: 1038,
        aspectRatio: "1.81:1"
      },
      {
        id: "whistling-13",
        name: "whistling-13.jpg",
        originalName: "Screenshot 2026-10-15 at 4.16.47 PM.png",
        src: "/assets/whistling-straits/whistling-13.jpg",
        alt: "Approaching the final stretch",
        caption: "The finishing holes routed between inland ponds and coastal bluffs",
        category: "landscape",
        width: 1870,
        height: 1035,
        aspectRatio: "1.81:1"
      },
      {
        id: "whistling-14",
        name: "whistling-14.jpg",
        originalName: "Screenshot 2026-10-15 at 4.21.03 PM.png",
        src: "/assets/whistling-straits/whistling-14.jpg",
        alt: "Vertical water hazard and green perspective",
        caption: "Vertical alignment showing forced water carry on approach",
        category: "portrait",
        width: 589,
        height: 1061,
        aspectRatio: "0.56:1"
      },
      {
        id: "whistling-15",
        name: "whistling-15.jpg",
        originalName: "Screenshot 2026-10-16 at 12.27.12 PM.png",
        src: "/assets/whistling-straits/whistling-15.jpg",
        alt: "Whistling Straits grand panoramic finale",
        caption: "Expansive linksland vista stretching along miles of pristine shoreline",
        category: "landscape",
        width: 1881,
        height: 1031,
        aspectRatio: "1.82:1"
      }
    ],
    videos: [
      {
        id: "whistling-vid-1",
        title: "Whistling Straits Aerial Survey",
        originalName: "DJI_0006.MP4",
        poster: "/assets/whistling-straits/video-poster-1.jpg",
        driveId: "1HD3zXyWBnrfRrr2_dKl3EqICDNXtliBB",
        fileSize: "122.5 MB",
        description: "High-altitude coastal sweep tracking along the Lake Michigan bluffs and dunes.",
        duration: "Coastal Flight"
      },
      {
        id: "whistling-vid-2",
        title: "Whistling Straits Course Flight 1",
        originalName: "DJI_0050.MP4",
        poster: "/assets/whistling-straits/video-poster-2.jpg",
        driveId: "17R1SXHkOTzpzE11_L-TYe68iVwppOEPE",
        fileSize: "103.5 MB",
        description: "Vertical course reel focusing on fairway contouring and bunker cluster navigation.",
        duration: "Hole Tour 1"
      },
      {
        id: "whistling-vid-3",
        title: "Whistling Straits Course Flight 2",
        originalName: "DJI_0055.MP4",
        poster: "/assets/whistling-straits/video-poster-3.jpg",
        driveId: "1JhKCMIFy-X9_EVIYdqTCax_HYsb78xBT",
        fileSize: "143.3 MB",
        description: "Low-altitude glide across fescue grasses approaching the perched green complex.",
        duration: "Hole Tour 2"
      },
      {
        id: "whistling-vid-4",
        title: "Whistling Straits Coastal Sweep",
        originalName: "DJI_0059.MP4",
        poster: "/assets/whistling-straits/video-poster-4.jpg",
        driveId: "1k0TQqAWYl4IFSb70EMvS4X59OwVWNTxe",
        fileSize: "409.3 MB",
        description: "Extended cinema master capturing waves crashing on the shoreline below the course.",
        duration: "Cinema Master"
      },
      {
        id: "whistling-vid-5",
        title: "Whistling Straits Hole Approach",
        originalName: "DJI_0078.MP4",
        poster: "/assets/whistling-straits/video-poster-5.jpg",
        driveId: "1rEER0TW-mUAZ5oy66jAPTvx1XY5dCBNI",
        fileSize: "46.7 MB",
        description: "Focused approach flight tracking the green, flag pin, and Lake Michigan backdrop.",
        duration: "Pin Approach"
      }
    ]
  }
];

export const DIFFERENCE_POINTS = [
  {
    num: "01",
    title: "Cinematic Aerial Storytelling",
    desc: "We don't simply take overhead photos. Every flight is art-directed to reveal architectural line, terrain depth, and the emotional resonance of the landscape."
  },
  {
    num: "02",
    title: "Considered Compositions",
    desc: "Carefully calibrated flight paths and camera tilts that respect golden hour light, true compass orientations, and natural horizon balance."
  },
  {
    num: "03",
    title: "Digital Marketing & Brand Assets",
    desc: "Delivering ready-to-publish high-resolution stills and broadcast-ready video cuts tailored for websites, investor presentations, and print media."
  },
  {
    num: "04",
    title: "Visual Documentation for Development",
    desc: "Systematic multi-phase site documentation providing developers, contractors, and municipal authorities with clear visual verification."
  },
  {
    num: "05",
    title: "Commercial Location Presentations",
    desc: "Compelling visuals that help resort operators, course directors, and property teams communicate the grandeur of their properties to prospective visitors."
  }
];
