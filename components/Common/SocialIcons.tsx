import Link from 'next/link';
import Image from 'next/image';
import igIcon from '@/public/icons/ig-icon.svg';
import fbIcon from '@/public/icons/fb-icon.svg';
import ytIcon from '@/public/icons/yt-icon.svg';
import pinIcon from '@/public/icons/pin-icon.svg';
import IconLink from './IconLink';

type SocialIconsProps = {
  isFooter?: boolean;
};

export default function SocialIcons({ isFooter }: SocialIconsProps) {
  return (
    <div className="flex items-center justify-center">
      <IconLink
        href="https://www.instagram.com/_klaudiarogala/"
        src={igIcon}
        alt="Instagram icon"
        isFooter={isFooter}
      />
      <IconLink
        href="https://www.facebook.com/klaudiarogalaphotographer/"
        src={fbIcon}
        alt="Facebook icon"
        isFooter={isFooter}
      />
      <IconLink
        href="https://www.youtube.com/channel/UCyVfMWp16X_wYCG9213YOQw/"
        src={ytIcon}
        alt="YouTube icon"
        isFooter={isFooter}
      />
      <IconLink
        href="https://www.pinterest.com/zuzannnnaa/"
        src={pinIcon}
        alt="Pinterest icon"
        isFooter={isFooter}
      />
    </div>
  );
}
