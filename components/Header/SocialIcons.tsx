import Link from 'next/link';
import Image from 'next/image';
import igIcon from '@/public/icons/ig-icon.svg';
import fbIcon from '@/public/icons/fb-icon.svg';
import ytIcon from '@/public/icons/yt-icon.svg';
import pinIcon from '@/public/icons/pin-icon.svg';

export default function SocialIcons() {
  return (
    <div className="social-icons flex items-center">
      <Link href="https://www.instagram.com/_klaudiarogala/">
        <Image src={igIcon} alt="Instagram icon" />
      </Link>
      <Link href="https://www.facebook.com/klaudiarogalaphotographer/">
        <Image src={fbIcon} alt="Facebook icon" />
      </Link>
      <Link href="https://www.youtube.com/channel/UCyVfMWp16X_wYCG9213YOQw/">
        <Image src={ytIcon} alt="YouTube icon" />
      </Link>
      <Link href="https://www.pinterest.com/zuzannnnaa/">
        <Image src={pinIcon} alt="Pinterest icon" />
      </Link>
      {/* <a class="lang-btn" href="/pl/index.html"><img src="/icons/flag-pl.svg" /></a> */}
    </div>
  );
}
