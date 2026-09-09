export function BrandMark({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
      focusable="false"
    >
      <rect
        x="9"
        y="17"
        width="46"
        height="38"
        fill="none"
        stroke="#1A1C1E"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M9 47 H55" stroke="#1A1C1E" strokeWidth="4" />
      <path d="M24 21 V51" stroke="#1A1C1E" strokeWidth="4" />
      <path d="M40 21 V51" stroke="#1A1C1E" strokeWidth="4" />
      <path
        d="M23 17 V12 H41 V17"
        fill="none"
        stroke="#1A1C1E"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="16.5" cy="24" r="2.5" fill="#3D6B8C" />
      <circle cx="47.5" cy="24" r="2.5" fill="#3D6B8C" />
    </svg>
  );
}

export function BrandLockup({
  className = "h-8 w-auto",
}: {
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/lockup-header.svg"
      alt="Trunk Crate"
      className={className}
    />
  );
}
