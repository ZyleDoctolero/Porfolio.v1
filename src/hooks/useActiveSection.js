// src/hooks/useActiveSection.js
import { useEffect, useState } from 'react';

export const SECTIONS = [
  { name: 'Work', id: 'work' },
  { name: 'Experience', id: 'experience' },
  { name: 'About', id: 'about' },
  { name: 'Stack', id: 'stack' },
  { name: 'Contact', id: 'contact' },
];

/** Returns the id of the section crossing the middle band of the viewport. */
export function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}
