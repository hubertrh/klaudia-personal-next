import klaudiaAboutImage from '@/public/images/klaudia-about.jpg';
import { getContactEntry } from '@/sanity/sanity-utils';
import { ContactEntry } from '@/types/ContactEntry';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default async function Contact() {
  const contactEntry: ContactEntry | null = await getContactEntry();

  return (
    <section
      id="contact"
      className="grid h-screen grid-flow-col items-center justify-center text-justify"
    >
      <div className="mr-[8vw] max-w-prose">
        <h2 className="py-4 text-4xl text-primary">
          {contactEntry?.contactMeTitle}
        </h2>
        {contactEntry ? (
          <PortableText value={contactEntry.contactMeDescription} />
        ) : (
          <p>Loading details...</p>
        )}
      </div>
      <Image
        className="opacity-50"
        src={klaudiaAboutImage}
        alt="Picture of Klaudia"
        fill={false}
        placeholder="blur"
        loading="eager"
      />
    </section>
  );
}
