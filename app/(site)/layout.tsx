import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Kalam, Raleway } from 'next/font/google';
import '../globals.css';

const raleway = Raleway({ weight: '300', subsets: ['latin'] });
const kalam = Kalam({
  weight: '300',
  variable: '--font-kalam',
  subsets: ['latin'],
});

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
    <html lang="en" className={`${kalam.variable}`}>
      <body className={`${raleway.className} relative min-h-screen`}>
        <div className="mx-auto max-w-screen-xl">
          <Header />
          <main className="mx-auto sm:max-w-[70vw]">{children}</main>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
