import klaudiaHeroImage from '@/public/images/klaudia-hero.jpg';
import { getHeroEntry } from '@/sanity/sanity-utils';
import { HeroEntry } from '@/types/HeroEntry';
import Image from 'next/image';

export default async function Hero() {
  const heroEntry: HeroEntry | null = await getHeroEntry();

  return (
    <section className="grid h-dvh place-items-center">
      <Image
        className="h-min max-h-[60vh] w-min translate-y-5 object-contain sm:max-w-[60vw]"
        src={heroEntry?.heroImage.url || klaudiaHeroImage}
        alt={heroEntry?.heroImage.alt || 'Main picture of Klaudia'}
        width={heroEntry?.heroImage.metadata.dimensions.width}
        height={heroEntry?.heroImage.metadata.dimensions.height}
        fill={false}
        placeholder="blur"
        blurDataURL={heroEntry?.heroImage.metadata.lqip}
        loading="eager"
        priority
      />
    </section>
  );
}
