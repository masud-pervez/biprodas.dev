import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import WorkSection from '@/components/home/WorkSection'
import TeamSection from '@/components/home/TeamSection'
import AboutSection from '@/components/home/AboutSection'
import PeojectSection from '@/components/home/PeojectSection'
import ContactSection from '@/components/home/ContactSection'

const Home = () => {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <PeojectSection />
      <TeamSection />
      <ContactSection />
    </main>
  )
}

export default Home
