import Image from 'next/image';
import klaudiaHero from '@/public/images/klaudia-hero.jpg';

export default function Hero() {
  return (
    <section className="grid h-screen place-items-center">
      <Image
        className="h-min max-h-[60vh] w-min max-w-[60vw] translate-y-5 object-contain"
        src={klaudiaHero}
        alt="Picture of Klaudia"
        fill={false}
        placeholder="blur"
        priority
      />
    </section>
  );
}
