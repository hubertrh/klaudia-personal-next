import Header from '@/components/header';
import '../globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Image from 'next/image';
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
        <Header />
        {children}
      </body>
    </html>
  );
}
