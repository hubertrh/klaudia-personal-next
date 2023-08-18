'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Hamburger from './Hamburger';
import NavigationMobile from './NavigationMobile';

export default function Navigation() {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', name: 'home' },
    { href: '/#aboutme', name: 'about me' },
    { href: '/#contact', name: 'contact' },
    { href: '/portfolio', name: 'portfolio' },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const onHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    function checkSize() {
      setIsMobile(window.innerWidth < 640);
    }
    checkSize();

    window.addEventListener('resize', checkSize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  if (isMobile) {
    return (
      <>
        <Hamburger
          isHamburgerOpen={isHamburgerOpen}
          onHamburgerClick={onHamburgerClick}
        />
        <NavigationMobile isHamburgerOpen={isHamburgerOpen} />
      </>
    );
  } else {
    return (
      <nav id="nav" className="nav text-xl sm:flex">
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
}
