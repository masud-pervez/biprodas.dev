/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BiFace } from 'react-icons/bi'

const TeamSection = () => {
  return (
    <section id="team" className="flex items-start py-16">
      <div className="container mx-auto lg:w-3/5">
        <code className="flex gap-2 text-2xl">
          <span className="text-cyan-600 dark:text-cyan-300 ">4. </span>
          <span className="line-arrow font-bold text-slate-900 dark:text-slate-300">
            My Team Mamber
          </span>
        </code>
        <div className="my-5 grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-3">
            <div className="group/item relative overflow-hidden rounded-md border bg-slate-200 shadow-md transition-all delay-75 duration-300 ease-linear dark:bg-slate-700">
              <img src="/bipro.png" className="h-80 w-full" alt="" />
              <div className="absolute bottom-0 left-0 translate-y-48 bg-gradient-to-t from-zinc-600 text-center transition-all delay-200 duration-200 ease-in-out group-hover/item:translate-y-0 dark:from-slate-900">
                <div className="flex h-32 w-64 flex-col justify-end">
                  <div className="py-2">
                    <h1 className="font-mono text-xl font-bold text-slate-300">Biprodas Roy</h1>
                    <h1 className="text-sm font-bold text-slate-400">COO</h1>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 h-80 -translate-x-32 bg-gradient-to-r from-zinc-600 transition-all delay-200 duration-200 ease-in-out group-hover/item:translate-x-0 dark:from-slate-900">
                <div className="flex w-16 flex-col items-center gap-3 py-5">
                  <BiFace />
                  <BiFace />
                  <BiFace />
                  <BiFace />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="group/item relative overflow-hidden rounded-md border bg-slate-200 shadow-md transition-all delay-75 duration-300 ease-linear dark:bg-slate-700">
              <img src="/bipro.png" className="h-80 w-full" alt="" />
              <div className="absolute bottom-0 left-0 translate-y-48 bg-gradient-to-t from-zinc-600 text-center transition-all delay-200 duration-200 ease-in-out group-hover/item:translate-y-0 dark:from-slate-900">
                <div className="flex h-32 w-64 flex-col justify-end">
                  <div className="py-2">
                    <h1 className="font-mono text-xl font-bold text-slate-300">Biprodas Roy</h1>
                    <h1 className="text-sm font-bold text-slate-400">COO</h1>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 h-80 -translate-x-32 bg-gradient-to-r from-zinc-600 transition-all delay-200 duration-200 ease-in-out group-hover/item:translate-x-0 dark:from-slate-900">
                <div className="flex w-16 flex-col items-center gap-3 py-5">
                  <BiFace />
                  <BiFace />
                  <BiFace />
                  <BiFace />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="group/item relative overflow-hidden rounded-md border bg-slate-200 shadow-md transition-all delay-75 duration-300 ease-linear dark:bg-slate-700">
              <img src="/bipro.png" className="h-80 w-full" alt="" />
              <div className="absolute bottom-0 left-0 translate-y-48 bg-gradient-to-t from-zinc-600 text-center transition-all delay-200 duration-200 ease-in-out group-hover/item:translate-y-0 dark:from-slate-900">
                <div className="flex h-32 w-64 flex-col justify-end">
                  <div className="py-2">
                    <h1 className="font-mono text-xl font-bold text-slate-300">Biprodas Roy</h1>
                    <h1 className="text-sm font-bold text-slate-400">COO</h1>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 h-80 -translate-x-32 bg-gradient-to-r from-zinc-600 transition-all delay-200 duration-200 ease-in-out group-hover/item:translate-x-0 dark:from-slate-900">
                <div className="flex w-16 flex-col items-center gap-3 py-5">
                  <BiFace />
                  <BiFace />
                  <BiFace />
                  <BiFace />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="group/item relative overflow-hidden rounded-md border bg-slate-200 shadow-md transition-all delay-75 duration-300 ease-linear dark:bg-slate-700">
              <img src="/bipro.png" className="h-80 w-full" alt="" />
              <div className="absolute bottom-0 left-0 translate-y-48 bg-gradient-to-t from-zinc-600 text-center transition-all delay-200 duration-200 ease-in-out group-hover/item:translate-y-0 dark:from-slate-900">
                <div className="flex h-32 w-64 flex-col justify-end">
                  <div className="py-2">
                    <h1 className="font-mono text-xl font-bold text-slate-300">Biprodas Roy</h1>
                    <h1 className="text-sm font-bold text-slate-400">COO</h1>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 h-80 -translate-x-32 bg-gradient-to-r from-zinc-600 transition-all delay-200 duration-200 ease-in-out group-hover/item:translate-x-0 dark:from-slate-900">
                <div className="flex w-16 flex-col items-center gap-3 py-5">
                  <BiFace />
                  <BiFace />
                  <BiFace />
                  <BiFace />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
