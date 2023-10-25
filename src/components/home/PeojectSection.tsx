/* eslint-disable @next/next/no-img-element */
import { appConfig } from '@/config'
import Link from 'next/link'
import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

const PeojectSection = () => {
  return (
    <section id="project" className="flex items-start py-16">
      <div className="container mx-auto lg:w-3/5">
        <code className="flex gap-2 text-2xl">
          <span className="text-cyan-600 dark:text-cyan-300 ">3. </span>
          <span className="line-arrow font-bold text-slate-900 dark:text-slate-300">
            Some Things I’ve Built
          </span>
        </code>
        <div className="my-5 grid grid-cols-6 gap-5">
          {appConfig.projectData.map((item, idx) => {
            const { float, project, desc, githubLink, siteLink, img, tags } = item
            return (
              <div
                className={`relative col-span-6 mb-10 flex ${
                  float && 'flex-col md:flex-row-reverse'
                } group/item items-center gap-5 overflow-hidden rounded-md transition-all delay-75 duration-75 ease-linear hover:bg-slate-100 hover:shadow-md dark:hover:bg-slate-800`}
                key={idx}
              >
                <article className="order-2 w-full p-3 md:order-1">
                  <span className={`block  ${float && 'text-end'} text-sm text-cyan-400`}>
                    Featured Project
                  </span>
                  <a
                    className={`block ${
                      float && 'text-end'
                    } text-3xl font-bold text-slate-700 hover:underline dark:text-slate-400`}
                    href={project.link}
                  >
                    {project.name}
                  </a>

                  <div
                    className={`z-50 my-3 rounded-md bg-slate-200 p-3 ${
                      float && 'text-end'
                    } text-slate-500 shadow-md dark:bg-slate-900`}
                  >
                    {desc}
                  </div>

                  <div
                    className={`z-50 flex  ${
                      float && 'flex-row-reverse'
                    } flex-wrap gap-5 text-sm text-slate-500`}
                  >
                    {tags.map((item, idx) => (
                      <span key={idx}>{item}</span>
                    ))}
                  </div>

                  <div className={`my-3 flex  ${float && 'flex-row-reverse'} items-center`}>
                    <a target="_blank" href={githubLink} title="Github" className="p-3">
                      <FiGithub />
                    </a>
                    <a target="_blank" href={siteLink} title="External Link" className="p-3">
                      <BsBoxArrowUpRight />
                    </a>
                  </div>
                </article>
                <div className="order-1 w-full bg-cyan-200 transition-all delay-75 duration-75 ease-linear hover:opacity-100 group-hover/item:blur-none dark:blur-sm md:order-2 ">
                  <img className="w-full" src={img} alt="" />
                </div>
              </div>
            )
          })}
          <div className="col-span-6">
            <Link
              href="/project"
              className="flex cursor-pointer items-center font-bold text-slate-600 transition-all delay-75 duration-75 ease-linear hover:gap-2 hover:underline dark:text-slate-400"
            >
              View Full Project Archive <FiArrowUpRight className="stroke-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PeojectSection
