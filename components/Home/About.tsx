import klaudiaAboutImage from '@/public/images/klaudia-about.jpg';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="aboutme"
      className="grid h-screen grid-flow-col items-center justify-center text-justify"
    >
      <div className="mr-[8vw] max-w-prose">
        <h2 className="py-4 text-4xl text-primary">About me</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum fugiat doloribus voluptate dolorem sed nisi quia nemo at
          itaque, asperiores praesentium eius atque hic voluptas et, odio
          ducimus sequi, tempora accusamus aperiam! Illum sunt excepturi
          accusantium voluptate vero! Voluptatem maiores laudantium, accusamus,
          quia qui fuga excepturi aspernatur possimus sequi expedita est
          sapiente labore et laudantium a dignissimos quam, vel tempore, vero
          necessitatibus porro incidunt nobis. Harum, eos. Iure, veniam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          ducimus id voluptates cumque deserunt, numquam quas autem reiciendis!
          Quo, quaerat aliquam est illo fuga repellendus laboriosam, itaque
          quidem exercitationem eligendi repudiandae, autem minima ullam nobis
          quos? Deserunt, molestias! Recusandae adipisci eveniet sequi omnis,
          qui consequuntur dolores doloribus veniam voluptatibus minus.
        </p>
      </div>
      <Image
        src={klaudiaAboutImage}
        alt="Picture of Klaudia"
        fill={false}
        placeholder="blur"
        loading="eager"
      />
    </section>
  );
}
