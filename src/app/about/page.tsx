/* eslint-disable @next/next/no-img-element */
'use client'
import Tracker from '@/components/ui/Tracker'
import { appConfig } from '@/config'
import Link from 'next/link'
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'

const AboutPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section onMouseMove={handleMouseMove}>
      <div className="mx-auto h-screen w-3/5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 flex h-screen flex-col justify-between py-10 lg:col-span-5">
            <div>
              <img
                className="mb-3 h-60 w-60 rounded-full border object-cover dark:border-none"
                src="/bipro.png"
                alt=""
              />
              <h1 className="mx-0 text-3xl font-bold text-slate-800 dark:text-[#ccd6f6]">
                Biprodas Roy
              </h1>
              <div className="my-2 bg-gradient-to-r from-rose-400 to-violet-500 bg-clip-text text-xl font-bold text-transparent dark:from-green-400 md:text-xl">
                <Typewriter
                  options={{
                    strings: [
                      appConfig.introdata.animated.first,
                      appConfig.introdata.animated.second,
                      appConfig.introdata.animated.third,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 5,
                  }}
                />
              </div>
              <p className="w-4/5 text-gray-500">
                I build exceptional and accessible digital experiences for the web.
              </p>

              <ul className="mt-5 w-max">
                <li>
                  <a className="active group flex items-center py-3" href="#about">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#experience">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Projects
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              {appConfig.social.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    href={item.link}
                    className="text-slate-700 transition-all delay-75 duration-100 ease-linear hover:-translate-y-1 dark:text-slate-400"
                  >
                    <item.icon size={25} />
                  </Link>
                )
              })}
            </div>
          </div>
          <main className="col-span-12 max-h-screen overflow-auto scroll-smooth lg:col-span-7">
            <section className="py-10" id="about">
              <div className="mb-4 text-justify text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique harum mollitia,
                odio magni doloremque labore cupiditate dolore tenetur, est, dolorum animi. Quae
                nihil unde iste aliquam debitis illo natus, doloremque quidem in enim ex iusto minus
                a eius. Itaque laboriosam mollitia delectus amet optio placeat voluptas atque aut
                magni dignissimos.
              </div>
              <div className="mb-4 text-justify text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique harum mollitia,
                odio magni doloremque labore cupiditate dolore tenetur, est, dolorum animi. Quae
                nihil unde iste aliquam debitis illo natus, doloremque quidem in enim ex iusto minus
                a eius. Itaque laboriosam mollitia delectus amet optio placeat voluptas atque aut
                magni dignissimos.
              </div>
              <div className="mb-4 text-justify text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique harum mollitia,
                odio magni doloremque labore cupiditate dolore tenetur, est, dolorum animi. Quae
                nihil unde iste aliquam debitis illo natus, doloremque quidem in enim ex iusto minus
                a eius. Itaque laboriosam mollitia delectus amet optio placeat voluptas atque aut
                magni dignissimos.
              </div>
            </section>
            <section className="min-h-screen py-10" id="experience">
              {[{}, {}, {}].map((item, idx) => (
                <Link
                  href=""
                  key={idx}
                  className="col-span-6 flex rounded-md p-3 transition-all delay-75 duration-75 ease-linear hover:bg-slate-100 hover:shadow-md dark:hover:bg-slate-800"
                >
                  <div className="w-1/5">
                    <span className="text-slate-600 dark:text-slate-500">2018 - Present</span>
                  </div>
                  <div className="w-4/5">
                    <h1 className="text-2xl text-slate-700 dark:text-slate-300">
                      Lorem ipsum dolor sit amet.
                    </h1>
                    <h2 className="my-2 text-lg text-slate-600 dark:text-slate-500">Designetion</h2>
                    <p className="text-sm text-slate-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sit nihil
                      deleniti distinctio culpa voluptatibus sunt adipisci quidem nisi, ipsa
                      eligendi? Ducimus cumque necessitatibus eligendi ab voluptatem voluptatum
                      autem accusantium.
                    </p>
                    <div className="flex flex-wrap gap-5">
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Express
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Spotify API
                          </div>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Heroku
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              ))}
            </section>
          </main>
        </div>
        <Tracker position={position} />
      </div>
    </section>
  )
}

export default AboutPage
