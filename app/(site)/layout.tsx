import '../globals.css';
import type { Metadata } from 'next';
import { Raleway, Kalam } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

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
          <main className="mx-auto max-w-[70vw]">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
