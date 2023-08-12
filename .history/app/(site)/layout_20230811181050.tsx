import '../globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import igIcon from '@/public/icons/ig-icon.svg';
import fbIcon from '@/public/icons/fb-icon.svg';
import ytIcon from '@/public/icons/yt-icon.svg';
import pinIcon from '@/public/icons/pin-icon.svg';

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
        <header className="flex h-16 justify-between bg-slate-200 px-16">
          <nav className="nav">
            <Link className="!ml-0 !mr-10 text-primary" href="/">
              home
            </Link>
            <Link href="#!">about me</Link>
            <Link href="#!">contact</Link>
            <Link href="/portfolio">portfolio</Link>
          </nav>
          <div className="social-icons flex items-center">
            <Link href="https://www.instagram.com/_klaudiarogala/">
              <Image src={igIcon} alt="Instagram icon" />
            </Link>
            <Link href="https://www.facebook.com/klaudiarogalaphotographer/">
              <Image src={fbIcon} alt="Facebook icon" />
            </Link>
            <Link href="https://www.youtube.com/channel/UCyVfMWp16X_wYCG9213YOQw/">
              <Image src={ytIcon} alt="YouTube icon" />
            </Link>
            <Link href="https://www.pinterest.com/zuzannnnaa/">
              <Image src={pinIcon} alt="Pinterest icon" />
            </Link>
            {/* <a class="lang-btn" href="/pl/index.html"><img src="/icons/flag-pl.svg" /></a> */}
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
