'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="nav flex text-xl">
      <Link className="!ml-0 !mr-10 text-primary" href="/">
        home
      </Link>
      <Link href="/#!">about me</Link>
      <Link href="/#!">contact</Link>
      <Link href="/portfolio">portfolio</Link>
      <p>{pathname}</p>
    </nav>
  );
}
