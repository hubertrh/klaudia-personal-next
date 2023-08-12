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
      <body className={raleway.className}>
        <header className="flex justify-between bg-slate-300 px-10 py-5">
          <nav>
            <Link className="nav-link !pr-14" href="#!">
              home
            </Link>
            <Link className="nav-link" href="#!">
              about me
            </Link>
            <Link className="nav-link" href="#!">
              contact
            </Link>
            <Link className="nav-link" href="/portfolio">
              portfolio
            </Link>
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
