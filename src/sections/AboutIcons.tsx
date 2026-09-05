const ICON_PROPS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function WebIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="7" y1="6.5" x2="7.01" y2="6.5" />
      <line x1="10" y1="6.5" x2="10.01" y2="6.5" />
    </svg>
  )
}

export function MobileIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  )
}

export function XrIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="2" y="8" width="20" height="9" rx="4" />
      <circle cx="8.5" cy="12.5" r="2" />
      <circle cx="15.5" cy="12.5" r="2" />
    </svg>
  )
}

export function LanguageIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3c2.4 2.6 2.4 15.4 0 18" />
      <path d="M12 3c-2.4 2.6 -2.4 15.4 0 18" />
    </svg>
  )
}
