'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationMobileProps = {
  isHamburgerOpen: boolean;
};

export default function NavigationMobile({
  isHamburgerOpen,
}: NavigationMobileProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', name: 'home' },
    { href: '/#aboutme', name: 'about me' },
    { href: '/#contact', name: 'contact' },
    { href: '/portfolio', name: 'portfolio' },
  ];

  return (
    <nav
      id="nav-mobile"
      className={`nav fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-6 bg-zinc-50 text-2xl transition-all duration-300 ${
        isHamburgerOpen ? '' : '-translate-y-full opacity-0'
      }`}
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${isActive ? 'text-primary' : ''}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
