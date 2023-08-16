'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', name: 'home' },
    { href: '/#aboutme', name: 'about me' },
    { href: '/#contact', name: 'contact' },
    { href: '/portfolio', name: 'portfolio' },
  ];

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   function checkSize() {
  //     setIsMobile(window.innerWidth <= 768);
  //   }
  //   checkSize();

  //   window.addEventListener('resize', checkSize);

  //   // Clean up event listener on unmount
  //   return () => window.removeEventListener('resize', checkSize);
  // }, []);

  return (
    <div className="relative mx-3 h-[8vw] w-[8vw] bg-slate-100 before:absolute before:bottom-2 before:left-1/2 before:h-[1.5px] before:w-full before:-translate-x-1/2 before:bg-primary before:transition-all before:duration-300 before:ease-out before:content-[''] after:absolute after:left-1/2 after:top-2 after:h-[1.5px] after:w-full after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 after:ease-out after:content-['']"></div>

    // <nav className="nav text-xl sm:flex">
    //   {navLinks.map((link) => {
    //     const isActive = pathname === link.href;
    //     return (
    //       <Link
    //         key={link.name}
    //         href={link.href}
    //         className={`${isActive ? 'text-primary' : ''}`}
    //       >
    //         {link.name}
    //       </Link>
    //     );
    //   })}
    // </nav>
  );
}
