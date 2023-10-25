/* eslint-disable @next/next/no-img-element */
import { appConfig } from '@/config'
import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'

const AboutSection = () => {
  return (
    <section id="about" className="relative flex min-h-[70vh] items-center py-16">
      <div className="container mx-auto lg:w-3/5">
        <div className="grid grid-cols-6 items-center gap-5">
          <div className="order-2 col-span-6 m-0 px-0 lg:order-1 lg:col-span-3">
            <code className="flex gap-2 text-2xl">
              <span className="text-cyan-600 dark:text-cyan-300 ">1. </span>
              <span className="line-arrow font-bold text-slate-900 dark:text-slate-300">About</span>
            </code>
            <p className="my-3 text-lg text-slate-600 dark:text-slate-400">
              Hello! My name is {appConfig.author.name} and I enjoy creating things that live on the
              internet. My interest in web development started back in 2020.
            </p>
            <p className="my-3 text-lg text-slate-600 dark:text-slate-400">
              Hello! My name is {appConfig.author.name} and I enjoy creating things that live on the
              internet. My interest in web development started back in 2020.
            </p>
            <p className="my-3 text-lg text-slate-600 dark:text-slate-400">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="my-3 flex items-center gap-x-10">
              <ul className="">
                <li className="flex cursor-pointer items-center gap-3 transition-all delay-75 duration-75 hover:-translate-y-1 dark:text-cyan-300">
                  <BiArrowToRight />
                  <code className="text-sm">JavaScript (ES6+)</code>
                </li>
                <li className="flex cursor-pointer items-center gap-3 transition-all delay-75 duration-75 hover:-translate-y-1 dark:text-cyan-300">
                  <BiArrowToRight />
                  <code className="text-sm">React</code>
                </li>
                <li className="flex cursor-pointer items-center gap-3 transition-all delay-75 duration-75 hover:-translate-y-1 dark:text-cyan-300">
                  <BiArrowToRight />
                  <code className="text-sm">Node.js</code>
                </li>
              </ul>
              <ul className="">
                <li className="flex cursor-pointer items-center gap-3 transition-all delay-75 duration-75 hover:-translate-y-1 dark:text-cyan-300">
                  <BiArrowToRight />
                  <code className="text-sm">TypeScript</code>
                </li>
                <li className="flex cursor-pointer items-center gap-3 transition-all delay-75 duration-75 hover:-translate-y-1 dark:text-cyan-300">
                  <BiArrowToRight />
                  <code className="text-sm">PgAdmin</code>
                </li>
                <li className="flex cursor-pointer items-center gap-3 transition-all delay-75 duration-75 hover:-translate-y-1 dark:text-cyan-300">
                  <BiArrowToRight />
                  <code className="text-sm">Nest.js</code>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 col-span-6 m-0 px-0 lg:order-2 lg:col-span-3">
            <div className="flex justify-center md:justify-end">
              <div className="h-auto w-80 overflow-hidden rounded-3xl bg-slate-50 ring-cyan-400 drop-shadow dark:bg-slate-800 dark:ring-2">
                <img src="/bipro.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
