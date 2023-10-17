'use client';

import Link from 'next/link';
import { CurrentUser } from '@/types';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/shared/mode-toogle';

const Navbar = ({ currentUser }: { currentUser: CurrentUser }) => {
  const scrolled = useScroll(50);

  return (
    <header
      className={cn(
        'sticky top-0 z-30 w-full bg-transparent ',
        scrolled
          ? ' h-14 border-b backdrop-blur-2xl transition-all duration-300 ease-in-out'
          : ' h-20'
      )}
    >
      <div className="container mx-auto flex items-center justify-between p-3">
        <Link href="/" className="text-xl font-bold">
          Biprodas Roy
        </Link>
        <nav className="space-x-4">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/works">Works</Link>
          <Link href="/teams">My Team</Link>
          <Link href="/contact">Contact</Link>
          <ModeToggle />
          <Link href="/contact">Join</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
