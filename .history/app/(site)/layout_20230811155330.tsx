import '../globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Link from 'next/link';

const raleway = Raleway({ weight: '300', subsets: ['latin'] });

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
      <body className={`${raleway.className} text-xl`}>
        <header className="flex justify-between bg-slate-200 px-16 py-8">
          <nav className="nav">
            <Link className="!ml-0 !mr-10 px-2 text-primary" href="/">
              home
            </Link>
            <Link href="#!">about me</Link>
            <Link href="#!">contact</Link>
            <Link href="/portfolio">portfolio</Link>
          </nav>
          <div>
            <Link
              className="social-icon"
              href="https://www.instagram.com/_klaudiarogala/"
            >
              IG
            </Link>
            <Link
              className="social-icon"
              href="https://www.facebook.com/klaudiarogalaphotographer/"
            >
              FB
            </Link>
            <Link
              className="social-icon"
              href="https://www.youtube.com/channel/UCyVfMWp16X_wYCG9213YOQw/"
            >
              YT
            </Link>
            <Link
              className="social-icon"
              href="https://www.pinterest.com/zuzannnnaa/"
            >
              PIN
            </Link>
            {/* <a class="lang-btn" href="/pl/index.html"><img src="/icons/flag-pl.svg" /></a> */}
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
