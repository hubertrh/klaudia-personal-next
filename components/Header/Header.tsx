import Navigation from './Navigation';
import SocialIcons from '../Common/SocialIcons';

export default function header() {
  return (
    <header className="fixed top-0 z-10 flex w-full max-w-screen-xl justify-between bg-white px-12">
      <Navigation />
      <SocialIcons />
    </header>
  );
}
