
/** The built-in mark; replace it (and public/icon.svg) with the client logo. */
export function DefaultMark({ className = 'size-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="mark-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d98f3a" />
          <stop offset="1" stopColor="#5a2f13" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#mark-g)" />
      <path d="M12 44c-1-11 8-20 20-20s21 9 20 20z" fill="#fdf6ec" />
      <path d="M24 29l-4 9M33 27l-4 11M42 29l-4 9" fill="none" stroke="#b8691f" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="48" cy="17" r="5" fill="#ec6f8c" />
    </svg>
  )
}

/** Logo next to the site name. `dark` is for use on the dark footer. */
export function SiteLogo({ settings, dark = false }: { settings: { site_name: string }; dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <DefaultMark />
      <span className={`font-display text-lg font-bold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>{settings.site_name}</span>
    </span>
  )
}
