// src/routes/index.jsx — home page
import { useEffect } from 'react';
import Hero from '../components/ui/Hero';
import ProjectsPanel from '../components/ui/ProjectsPanel';
import ExperiencePanel from '../components/ui/ExperiencePanel';
import AboutPanel from '../components/ui/AboutPanel';
import StackPanel from '../components/ui/StackPanel';

export default function HomePage() {
  // Arriving from another page with a hash (/#work): the section exists only after render,
  // so the browser's own jump misses it. Scroll to it once here.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return (
    <div className="space-y-32 sm:space-y-48">
      <title>Zyle Doctolero | Full Stack Developer (React, TypeScript, Supabase)</title>
      <Hero />
      <ProjectsPanel />
      <ExperiencePanel />
      <AboutPanel />
      <StackPanel />
    </div>
  );
}
