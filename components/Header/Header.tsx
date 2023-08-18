import Navigation from './Navigation';
import SocialIcons from '../Common/SocialIcons';
import NavigationMobile from './NavigationMobile';

export default function header() {
  return (
    <header className="fixed top-0 z-10 flex w-full max-w-screen-xl items-center justify-between bg-zinc-50 px-4 py-3 sm:px-12 sm:py-0">
      <Navigation />
      <SocialIcons />
    </header>
  );
}
