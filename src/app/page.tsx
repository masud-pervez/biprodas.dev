import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import WorkSection from '@/components/home/WorkSection'
import TeamSection from '@/components/home/TeamSection'
import AboutSection from '@/components/home/AboutSection'
import PeojectSection from '@/components/home/PeojectSection'
import ContactSection from '@/components/home/ContactSection'
import Header from '@/components/layout/header'
import SideText from '@/components/ui/SideText'
import Footer from '@/components/layout/footer'

const Home = () => {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <PeojectSection />
      <TeamSection />
      <ContactSection />
      <SideText />
      <Footer />
    </main>
  )
}

export default Home
