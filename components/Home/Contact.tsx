import Image from 'next/image';
import klaudiaAboutImage from '@/public/images/klaudia-about.jpg';

export default function Contact() {
  return (
    <section
      id="contact"
      className="grid h-screen grid-flow-col items-center justify-center text-justify"
    >
      <div className="mr-[8vw]">
        <h2 className="py-4 text-4xl text-primary">Contact me!</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum fugiat doloribus voluptate dolorem sed nisi quia nemo at
          itaque, possimus sequi expedita est sapiente labore et laudantium a
          dignissimos quam, vel tempore, vero necessitatibus porro incidunt
          nobis. Harum, eos. Iure, veniam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          ducimus adipisci eveniet sequi omnis, qui consequuntur dolores
          doloribus veniam voluptatibus minus.
        </p>
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
