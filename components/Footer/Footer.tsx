import Link from 'next/link';
import SocialIcons from '../Common/SocialIcons';

export default function Footer() {
  return (
    <div className="absolute -bottom-40 w-screen bg-zinc-800 text-zinc-200">
      <div className="mx-auto grid h-40 max-w-screen-xl grid-cols-3 p-3">
        <div className="grid h-full items-end">
          <Link href="#!">Cookie policy</Link>
        </div>
        <div className="grid h-full place-content-center text-center">
          <p className="m-2 text-xl">
            Klaudia Rogala-Haracz &copy; {new Date().getFullYear().toString()}
          </p>
          <SocialIcons isFooter={true} />
        </div>
        <div className="flex h-full flex-col justify-end text-right">
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
    </div>
  );
}
