import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const WorkSection = () => {
  return (
    <section id="works" className="flex min-h-[100vh] items-start py-16">
      <div className="container mx-auto lg:w-3/5">
        <code className="flex gap-2 text-2xl">
          <span className="text-cyan-600 dark:text-cyan-300 ">2. </span>
          <span className="line-arrow font-bold text-slate-900 dark:text-slate-300">
            Where I’ve Worked
          </span>
        </code>
        <div className="my-5 grid grid-cols-6 items-start gap-5">
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
                  deleniti distinctio culpa voluptatibus sunt adipisci quidem nisi, ipsa eligendi?
                  Ducimus cumque necessitatibus eligendi ab voluptatem voluptatum autem accusantium.
                </p>
                <div className="flex flex-wrap gap-5">
                  <span className="my-3 rounded-lg border bg-cyan-400 px-2 py-1 text-sm font-bold text-slate-100">
                    html
                  </span>
                  <span className="my-3 rounded-lg border bg-cyan-400 px-2 py-1 text-sm font-bold text-slate-100">
                    html
                  </span>
                  <span className="my-3 rounded-lg border bg-cyan-400 px-2 py-1 text-sm font-bold text-slate-100">
                    html
                  </span>
                  <span className="my-3 rounded-lg border bg-cyan-400 px-2 py-1 text-sm font-bold text-slate-100">
                    html
                  </span>
                </div>
              </div>
            </Link>
          ))}
          <div className="col-span-6">
            <h1 className="flex cursor-pointer items-center font-bold text-slate-600 transition-all delay-75 duration-75 ease-linear hover:gap-2 hover:underline dark:text-slate-400">
              View Full Resume <FiArrowUpRight className="stroke-2" />
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection
