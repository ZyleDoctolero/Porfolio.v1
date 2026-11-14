// src/components/ui/AvailabilityBadge.jsx
export default function AvailabilityBadge() {
  return (
    <span className="inline-flex items-center gap-2 label text-ink-soft">
      <span className="w-2 h-2 rounded-full bg-ok" aria-hidden="true" />
      Open to work
    </span>
  );
}
