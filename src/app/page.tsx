import { ModeToggle } from '@/components/shared/mode-toogle'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div>
      Biprodas R.<Button className="mx-3">Click me</Button>
      <ModeToggle />
    </div>
  )
}

export default Home
