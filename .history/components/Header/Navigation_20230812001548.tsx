'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', name: 'home' },
    { href: '/about', name: 'about me' },
    { href: '/contact', name: 'contact' },
    { href: '/portfolio', name: 'portfolio' },
  ];

  return (
    <nav className="nav flex text-xl">
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
