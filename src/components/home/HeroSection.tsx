'use client'
import { appConfig } from '@/config'
import Link from 'next/link'
import React, { useState } from 'react'
import Tracker from '../ui/Tracker'
import Typewriter from 'typewriter-effect'

const HeroSection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }
  const { name, introdata } = appConfig
  return (
    <section
      id="#home"
      className="relative overflow-hidden" // dark:bg-[url('/bg.svg')]
      onMouseMove={handleMouseMove}
    >
      <div className="container flex min-h-[100vh] items-center md:min-h-[95vh] xl:w-3/5 ">
        <div className="lg:w-4/5">
          <code className="mb-2 text-xl text-cyan-600 dark:text-cyan-300 md:text-2xl">
            {introdata.title}
          </code>
          <h1 className="mx-0 mb-5 text-4xl font-bold text-slate-800 dark:text-[#ccd6f6] md:text-5xl lg:text-7xl">
            {name}
          </h1>
          <div className="my-5 bg-gradient-to-r from-rose-400 to-violet-500  bg-clip-text text-xl font-bold text-transparent dark:from-green-400 md:text-2xl">
            <Typewriter
              options={{
                strings: [
                  introdata.animated.first,
                  introdata.animated.second,
                  introdata.animated.third,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 5,
              }}
            />
          </div>
          <p className="mb-10 text-slate-600 dark:text-slate-500">
            Im a software engineer specializing in building (and occasionally designing) exceptional
            digital experiences. Currently, Im focused on building accessible, human-centered
            products at .
          </p>

          <Link
            href="/projects"
            className="bn32 z-10 rounded-sm text-slate-900 ring-1 hover:text-slate-50 dark:text-slate-100"
          >
            All Projects
          </Link>
        </div>
      </div>
      <Tracker position={position} />
      <div className="absolute right-[48%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-10 blur-3xl filter dark:block dark:opacity-5 lg:-right-60 lg:top-0 lg:h-72 lg:w-[250px] lg:animate-pulse xl:h-80 xl:w-[300px]"></div>
      <div className="absolute bottom-44 left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:-left-20 lg:bottom-24 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
    </section>
  )
}

export default HeroSection
