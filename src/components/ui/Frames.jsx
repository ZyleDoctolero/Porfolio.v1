// src/components/ui/Frames.jsx
// Device frames for project screenshots.

export function PhoneFrame({ src, alt, className = '' }) {
  return (
    <div
      className={`aspect-[9/20] rounded-[1.6rem] border-[5px] border-[#2A2D33] bg-black overflow-hidden shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)] ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover object-top" />
    </div>
  );
}

export function BrowserFrame({ src, alt, label, className = '' }) {
  return (
    <div className={`rounded-xl bg-white overflow-hidden shadow-[0_40px_80px_-30px_rgb(21_23_26/0.45)] ${className}`}>
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-black/10">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
        </span>
        {label && <span className="font-mono text-[11px] text-black/50 truncate">{label}</span>}
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full block" />
    </div>
  );
}
