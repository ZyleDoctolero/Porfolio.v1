// src/data/projects.js
//
// Adding a project: copy an entry, give it a unique `id` and `slug`, put screenshots in public/images/.
//   frame: 'browser' shows one wide screenshot, 'phone' shows up to three tall ones.
//   stage: background class of the panel the screenshots sit on.
//
// Giving a project its own page at /work/<slug>: add a `caseStudy` object (see HEROCS below).
// Only add one when there is real depth: 4+ screenshots, the problem, and how it works.
//   caseStudy.overview   paragraphs: the problem and who it is for
//   caseStudy.facts      [label, value] pairs shown as a spec table
//   caseStudy.steps      how it works, in order
//   caseStudy.decisions  optional [{ title, body }]: choices YOU made and why. Leave out until written.
//   caseStudy.gallery    extra screenshots, each { src, alt, frame }
export const projects = [
  {
    id: 'p1',
    slug: 'dcwd-gis',
    title: 'DCWD GIS Leak Management',
    role: 'Frontend developer intern · Jan – Mar 2026',
    summary:
      'Internal system the Davao City Water District uses to report, dispatch and track water leaks and day-to-day operations.',
    points: [
      'Built a major operations module end to end',
      'Moved data handling from MobX to TanStack Query, fixing screens that showed outdated data',
      'Built admin tools for accounts and access control, and report forms with printable pages',
    ],
    stack: ['React', 'TypeScript', 'TanStack Query', 'MobX', 'GIS'],
    frame: 'browser',
    frameLabel: 'DCWD GIS Management',
    stage: 'bg-[#D9E0E6]',
    images: [{ src: '/images/herocs/GIS_Management.png', alt: 'Login screen of the DCWD GIS Management system' }],
    repoUrl: 'https://github.com/abllenos/dcwd_dashboard',
    note: 'Internal client system, so only the login screen is shown. The linked repo is the asset dashboard I worked on.',
  },
  {
    id: 'p2',
    slug: 'herocs',
    title: 'HEROCS',
    role: 'Project manager · Thesis team',
    summary:
      'On-device mobile app that spots household hazards through the camera and tells caregivers what to fix.',
    points: [
      'Real-time detection with a YOLOv8 model running on the phone',
      'Trained on 5,373 images across 24 hazard classes from Filipino homes',
      'Scores each room and gives plain safety recommendations',
    ],
    stack: ['Flutter', 'TensorFlow Lite', 'ARCore', 'Computer Vision'],
    frame: 'phone',
    stage: 'bg-ink',
    images: [
      { src: '/images/herocs/herocs-hazard-detail.jpg', alt: 'HEROCS camera view with hazards boxed and labelled' },
      { src: '/images/herocs/herocs-main.jpg', alt: 'HEROCS hazard detail card showing risk level and recommendation' },
      { src: '/images/herocs/herocs-scan-safe.jpg', alt: 'HEROCS home screen with scan modes' },
    ],
    repoUrl: 'https://github.com/riggsybanez/HEROCS-Project',
    caseStudy: {
      overview: [
        'Young children get hurt at home by things adults stop noticing: a bottle of bleach under the sink, a knife left on the counter, a kettle within reach. HEROCS lets a caregiver point a phone at a room and see those hazards marked on screen.',
        'Everything runs on the phone. No image leaves the device, and it works without a connection, which matters in homes where data is costly or unreliable.',
      ],
      facts: [
        ['Type', 'Thesis research project, team'],
        ['My role', 'Project manager'],
        ['Platform', 'Android, built with Flutter and ARCore'],
        ['Model', 'YOLOv8s (11.2M parameters), exported to TensorFlow Lite'],
        ['Dataset', '5,373 images after augmentation, from about 1,500 originals'],
        ['Classes', '24 hazard classes, annotated for Filipino households'],
      ],
      steps: [
        'The caregiver scans a room live through the camera, or picks a photo.',
        'The on-device model finds objects and labels each with a hazard class and a confidence score.',
        "Each hazard gets a risk level based on what it is and whether it is within a child's reach.",
        'The room gets one Household Danger Index score, from safe to critically unsafe.',
        'The app lists plain safety recommendations, most severe first.',
      ],
      gallery: [
        { src: '/images/herocs/herocs-safety-recommendations.jpg', alt: 'HEROCS safety recommendations list', frame: 'phone' },
      ],
    },
  },
  {
    id: 'p4',
    slug: 'alumni-portal',
    title: 'UIC-CCS Alumni Portal',
    role: 'QA and team member',
    summary:
      'Alumni platform for the UIC College of Computer Studies: tracer studies, job postings, news and admin analytics.',
    points: [
      'Tested features as the team’s QA and reported bugs back to the developers',
      'Alumni side: registration with admin approval, profiles, job board, batchmate directory and tracer study',
      'Admin side: approvals, news and gallery management, job posting and tracer study analytics',
    ],
    stack: ['React', 'Supabase', 'QA testing'],
    frame: 'browser',
    frameLabel: 'ccs-alumni-portal-system.vercel.app',
    stage: 'bg-[#E3DCE0]',
    images: [{ src: '/images/projects/alumni-portal.png', alt: 'Home page of the UIC-CCS Alumni Portal' }],
    liveUrl: 'https://ccs-alumni-portal-system.vercel.app/',
  },
  {
    id: 'p3',
    slug: 'solid-roofing',
    title: 'Solid Roofing',
    role: 'Contributor',
    summary:
      'Built the Charlotte Roofing page and the Charlotte location page for a live business site in WordPress.',
    points: ['Responsive page layout matched to the existing site', 'Live pages on a real client domain'],
    stack: ['WordPress', 'CSS', 'Responsive Design'],
    frame: 'browser',
    frameLabel: 'solidroofing.com',
    stage: 'bg-[#E6D9C8]',
    images: [{ src: '/images/projects/solid-roofing.jpg', alt: 'Solid Roofing website page' }],
    liveUrl: 'https://solidroofing.com/',
  },
];
