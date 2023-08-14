import klaudiaHeroImage from '@/public/images/klaudia-hero.jpg';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="grid h-screen place-items-center">
      <Image
        className="h-min max-h-[60vh] w-min max-w-[60vw] translate-y-5 object-contain"
        src={klaudiaHeroImage}
        alt="Main picture of Klaudia"
        fill={false}
        placeholder="blur"
        loading="eager"
        priority
      />
    </section>
  );
}
