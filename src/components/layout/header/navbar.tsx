'use client'
import { useState } from 'react'
import Link from 'next/link'
import useScroll from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { CurrentUser } from '@/types'
import { ModeToggle } from '@/components/shared/mode-toogle'

const Navbar = ({ currentUser }: { currentUser: CurrentUser }) => {
  const scrolled = useScroll(50)
  const [active, setActive] = useState('home')

  const navItem = [
    { key: 'home', title: 'Home' },
    { key: 'about', title: 'About' },
    { key: 'works', title: 'Works' },
    { key: 'team', title: 'My Team' },
    { key: 'contact', title: 'Contact' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 z-40 h-14 w-full',
        scrolled ? 'shadow backdrop-blur-lg' : 'bg-transparent',
      )}
    >
      <div className="container-fluid mx-auto flex items-center justify-between px-5 py-3 lg:px-14">
        <Link
          href="/"
          className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-xl text-transparent"
        >
          <code>Biprodas R.</code>
        </Link>
        <nav className="flex items-center justify-start gap-5">
          {navItem.map(({ key, title }, idx) => (
            <Link
              onClick={() => setActive(key)}
              key={idx}
              className={`${
                active === key &&
                'text-rose-400 transition-all delay-75 duration-75 ease-linear dark:text-cyan-400'
              } hidden lg:block`}
              href={`/${key}`}
            >
              {title}
            </Link>
          ))}

          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
