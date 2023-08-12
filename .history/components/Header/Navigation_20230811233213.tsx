import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="nav flex text-xl">
      <Link className="!ml-0 !mr-10 text-primary" href="/">
        home
      </Link>
      <Link href="#!">about me</Link>
      <Link href="#!">contact</Link>
      <Link href="/portfolio">portfolio</Link>
    </nav>
  );
}
