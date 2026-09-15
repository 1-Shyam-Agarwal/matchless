/* Inline SVG icon set — no icon library, no extra network request.
   All icons are 24x24, stroke-based, and inherit `currentColor`. */

const paths = {
  arrowRight: <path d="M4 12h15m0 0-6-6m6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7m0 0H8m9 0v9" />,
  check: <path d="m4 12.5 5 5L20 6.5" />,
  phone: (
    <path d="M6.6 3h2.6l1.4 4-2 1.4a12 12 0 0 0 5.4 5.4l1.4-2 4 1.4v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </>
  ),
  whatsapp: (
    <path d="M3.5 20.5 5 16.3a8 8 0 1 1 3 2.9l-4.5 1.3ZM9 8.6c-.3 0-.6.1-.8.4-.3.3-.9.9-.9 2s.9 2.3 1 2.5c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.5.7 3 .6.5-.1 1.5-.6 1.7-1.3.2-.6.2-1.2.1-1.3l-.7-.4c-.3-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.6.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4 0-.5.1-.7l.5-.6c.1-.2.1-.3 0-.5l-.8-1.8c-.2-.3-.3-.3-.5-.3H9Z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5 7 21l5-2.4L17 21l-1.5-7.5" />
    </>
  ),
  badge: (
    <>
      <path d="M12 2.8 14.2 6l3.8.5-2.6 2.8.7 3.8-3.6-1.8L8.9 13l.7-3.8L7 6.4 10.8 6 12 2.8Z" />
      <path d="M8.5 14v7l3.5-2 3.5 2v-7" />
    </>
  ),
  sparkle: (
    <path d="M12 2.5 13.9 9l6.5 1.9-6.5 1.9L12 19.3l-1.9-6.5L3.6 11l6.5-2L12 2.5ZM19 16.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
  ),
  handshake: (
    <path d="m8 12 2.5-2.5a2 2 0 0 1 2.8 0l4.2 4.2M3 10l4-4h3l3 3M21 10l-4-4h-3M6.5 14.5l2 2M9.5 12.5l4 4M12.5 10.5l4 4" />
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h7A1.5 1.5 0 0 1 14 5.5V21M14 10h4.5A1.5 1.5 0 0 1 20 11.5V21M2.5 21h19" />
      <path d="M7 8h4M7 12h4M7 16h4M17 14h1M17 17.5h1" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5M8.5 21.5h7" />
    </>
  ),
  box: (
    <>
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z" />
      <path d="M3.5 7.5 12 12m0 0 8.5-4.5M12 12v9" />
    </>
  ),
  crown: <path d="M3 18h18M4 16 2.5 7l5 3.5L12 4l4.5 6.5 5-3.5L20 16H4Z" />,
  megaphone: (
    <>
      <path d="M3.5 10v4a1.5 1.5 0 0 0 1.5 1.5h2L17 20.5v-17L7 8.5H5A1.5 1.5 0 0 0 3.5 10Z" />
      <path d="M20 9.5a3.5 3.5 0 0 1 0 5M7 15.5V20a1.5 1.5 0 0 0 3 0v-3.6" />
    </>
  ),
  gem: <path d="m3 9.5 3.2-5h11.6L21 9.5 12 21 3 9.5Zm0 0h18M8 4.5 12 21 16 4.5" />,
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-1 .8-1.7 1.7-1.7h2A4.6 4.6 0 0 0 21 10.4C21 6.3 16.9 3 12 3Z" />
      <circle cx="7.5" cy="11" r="1.1" />
      <circle cx="11" cy="7.5" r="1.1" />
      <circle cx="15.5" cy="8.5" r="1.1" />
    </>
  ),
  layers: (
    <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Zm9 9-9 4.5L3 12m18 4.5L12 21l-9-4.5" />
  ),
  truck: (
    <>
      <path d="M2.5 6.5h11v10h-11zM13.5 10H17l3.5 3v3.5h-7" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="16.5" cy="18" r="1.8" />
    </>
  ),
  headset: (
    <path d="M4 14v-2a8 8 0 0 1 16 0v2m-16 0v2.5A1.5 1.5 0 0 0 5.5 18H7v-5.5H5.5A1.5 1.5 0 0 0 4 14Zm16 0v2.5a1.5 1.5 0 0 1-1.5 1.5H17v-5.5h1.5A1.5 1.5 0 0 1 20 14Zm-2 4.5v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 6.75V12l3.5 2" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M7.5 10.5V17M7.5 7.3v.1M11.5 17v-3.6a2 2 0 0 1 4 0V17M11.5 17v-6.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8v.1" />
    </>
  ),
};

export default function Icon({ name, size = 24, className, ...rest }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {d}
    </svg>
  );
}
