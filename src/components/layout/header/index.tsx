import React from 'react'
import Navbar from './navbar'

const Header = () => {
  const currentUser = {
    id: '1',
    name: 'Biprodas Roy',
    username: 'biprodas',
    email: 'email',
    shortBio: 'Sr. Software Engineer',
    image: '',
  }
  return <Navbar currentUser={currentUser} />
}

export default Header
