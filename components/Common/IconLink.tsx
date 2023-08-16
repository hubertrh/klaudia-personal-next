import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Image from 'next/image';

type IconLinkProps = {
  href: string;
  src: StaticImageData;
  alt: string;
  isFooter?: boolean | undefined;
};

export default function IconLink({ href, src, alt, isFooter }: IconLinkProps) {
  let IconLinkVariantClass = '';

  isFooter
    ? (IconLinkVariantClass = 'grayscale brightness-500 hover:brightness-700')
    : (IconLinkVariantClass =
        'brightness-100 hover:rotate-12 hover:brightness-75');

  return (
    <Link
      href={href}
      className={`scale-110 px-4 py-3 duration-200 sm:px-6 ${IconLinkVariantClass}`}
    >
      <Image src={src} alt={alt} />
    </Link>
  );
}
