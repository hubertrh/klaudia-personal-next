import Link from 'next/link';
import SocialIcons from '../Common/SocialIcons';

export default function Footer() {
  return (
    <footer className="absolute top-full w-screen bg-zinc-800 text-zinc-200">
      <div className="mx-auto flex h-40 max-w-screen-xl flex-col p-3">
        <div className="grid h-full place-content-center text-center">
          <p className="p-0 sm:m-2 sm:text-xl">
            Klaudia Rogala-Haracz &copy; {new Date().getFullYear().toString()}
          </p>
          <SocialIcons isFooter={true} />
        </div>
        <div className="flex items-end justify-between text-xs sm:text-base">
          <div className="grid items-end text-xs sm:text-base">
            <Link href="#!">Cookie policy</Link>
          </div>
          <Link
            className="text-zinc-400"
            href="https://github.com/rogalaharacz/"
          >
            Created by{' '}
            <span className="text-zinc-200 hover:underline hover:underline-offset-4">
              Hubert Rogala-Haracz
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
