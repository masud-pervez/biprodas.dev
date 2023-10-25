'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bn3"
    >
      <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-indigo-600 transition-all dark:-rotate-90 dark:scale-0" />
      <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-yellow-300 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
