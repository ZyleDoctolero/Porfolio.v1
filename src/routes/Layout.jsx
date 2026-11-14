// src/routes/Layout.jsx — shared shell: nav on top, contact block at the bottom.
import { Outlet } from 'react-router-dom';
import ActionBar from '../components/ui/ActionBar';
import ContactPanel from '../components/ui/ContactPanel';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-ink focus:text-on-ink focus:px-4 focus:py-2 focus:rounded-full text-sm"
      >
        Skip to content
      </a>
      <ActionBar />
      <main id="main" className="flex-1 w-full max-w-[1400px] mx-auto px-5 sm:px-10 pb-28 sm:pb-40">
        <Outlet />
      </main>
      <ContactPanel />
    </div>
  );
}
