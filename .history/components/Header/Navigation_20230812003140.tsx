'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navLinks = [
    { href: '/', name: 'home', id: 'home' },
    { href: '/#aboutme', name: 'about me', id: 'aboutme' },
    { href: '/#contact', name: 'contact', id: 'contact' },
    { href: '/portfolio', name: 'portfolio', id: 'portfolio' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav className="nav flex text-xl">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={activeSection === link.id ? 'text-primary' : ''}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
