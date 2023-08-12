import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Klaudia Rogala-Haracz',
  description: 'Portrait and reportage photography. Based in London.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <Link href="#!">home</Link>
            <Link href="#!">about me</Link>
            <Link href="#!">contact</Link>
            <Link href="/portfolio">portfolio</Link>
          </nav>
          <div>
            <Link href="https://www.instagram.com/_klaudiarogala/"> Insta</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
