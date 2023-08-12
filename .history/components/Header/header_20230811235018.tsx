import Image from 'next/image';
import Link from 'next/link';
import fbIcon from '@/public/icons/fb-icon.svg';
import igIcon from '@/public/icons/ig-icon.svg';
import pinIcon from '@/public/icons/pin-icon.svg';
import ytIcon from '@/public/icons/yt-icon.svg';
import Navigation from './Navigation';
import SocialIcons from './SocialIcons';

export default function header() {
  return (
    <header className="sticky top-0 flex justify-between bg-slate-200 px-14">
      <Navigation />
      <SocialIcons />
    </header>
  );
}
