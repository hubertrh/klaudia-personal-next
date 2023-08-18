'use client';

type HamburgerProps = {
  isHamburgerOpen: boolean;
  onHamburgerClick: () => void;
};

export default function Hamburger({
  isHamburgerOpen,
  onHamburgerClick,
}: HamburgerProps) {
  const beforeClasses = `before:absolute before:left-1/2 before:top-0 before:h-[1.5px] before:w-full before:-translate-x-1/2 before:bg-primary before:transition-all before:duration-300 before:ease-out before:content-[''] ${
    isHamburgerOpen
      ? 'before:translate-y-4 before:-rotate-45'
      : 'before:translate-y-2'
  }`;
  const afterClasses = `after:absolute after:left-1/2 after:top-0 after:h-[1.5px] after:w-full after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 after:ease-out after:content-[''] ${
    isHamburgerOpen
      ? 'after:translate-y-4 after:rotate-45'
      : 'after:translate-y-6'
  }`;

  return (
    <button
      id="hamburger"
      className={`relative z-10 mx-3 h-8 w-8 ${beforeClasses} ${afterClasses}`}
      onClick={onHamburgerClick}
    ></button>
  );
}
