import klaudiaAboutImage from '@/public/images/klaudia-about.jpg';
import { getAboutEntry } from '@/sanity/sanity-utils';
import { AboutEntry } from '@/types/AboutEntry';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default async function About() {
  const aboutEntry: AboutEntry | null = await getAboutEntry();

  return (
    <section
      id="aboutme"
      className="mx-auto grid h-screen max-w-[80vw] items-center justify-center text-justify sm:grid-flow-col"
    >
      <div className="mr-[8vw] max-w-prose">
        <h2 className="py-4 text-4xl text-primary">
          {aboutEntry?.aboutMeTitle}
        </h2>
        {aboutEntry ? (
          <PortableText value={aboutEntry.aboutMeDescription} />
        ) : (
          <p>Loading description...</p>
        )}
      </div>
      <Image
        src={aboutEntry?.aboutMeImage.url || klaudiaAboutImage}
        alt={aboutEntry?.aboutMeImage.alt || 'Picture of Klaudia'}
        width={aboutEntry?.aboutMeImage.metadata.dimensions.width}
        height={aboutEntry?.aboutMeImage.metadata.dimensions.height}
        fill={false}
        placeholder="blur"
        blurDataURL={aboutEntry?.aboutMeImage.metadata.lqip}
        loading="eager"
      />
    </section>
  );
}
