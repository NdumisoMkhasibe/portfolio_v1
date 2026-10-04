import type { ReactNode, SVGProps } from 'react';

export type IconName =
  | 'home'
  | 'about'
  | 'work'
  | 'experience'
  | 'contact'
  | 'play'
  | 'github'
  | 'linkedin'
  | 'arrow'
  | 'external'
  | 'menu'
  | 'close'
  | 'mail'
  | 'phone'
  | 'pin';

const paths: Record<IconName, ReactNode> = {
  home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></>,
  about: <><circle cx="12" cy="8" r="3.2" /><path d="M5.5 20c.6-3.2 2.8-5 6.5-5s5.9 1.8 6.5 5" /></>,
  work: <><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M8 6V4h8v2M3 11h18M10 11v2h4v-2" /></>,
  experience: <><path d="M5 4h14M5 12h14M5 20h14" /><circle cx="3" cy="4" r="1" /><circle cx="3" cy="12" r="1" /><circle cx="3" cy="20" r="1" /></>,
  contact: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  play: <><path d="M8 5v14l11-7z" /></>,
  github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.6a5.1 5.1 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.2-.4-3.7 1.4a13 13 0 0 0-6.8 0C5.7 1.5 4.5 1.9 4.5 1.9a4.7 4.7 0 0 0-.1 3.5A5.1 5.1 0 0 0 3 8.9c0 5.1 3.1 6.3 6.1 6.6a3.4 3.4 0 0 0-.9 2.6V22" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.1M12 17v-7h3a3 3 0 0 1 3 3v4M12 13a3 3 0 0 1 3-3" /></>,
  arrow: <><path d="M5 12h14M13 5l7 7-7 7" /></>,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  phone: <><path d="M7 3h3l1.4 4-2 1.5a15 15 0 0 0 6.1 6.1l1.5-2L21 14v3c0 1.1-.9 2-2 2C10 19 5 14 5 5c0-1.1.9-2 2-2Z" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
};

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
