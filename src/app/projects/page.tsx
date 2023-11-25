import { appConfig } from '@/config'
import Link from 'next/link'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'

const projectData = [{}]

const Projects = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div>
          <Link
            className="group/item flex cursor-pointer items-center text-rose-500 dark:text-cyan-500"
            href="/"
          >
            <BsArrowLeftShort
              size={22}
              className="transition-all delay-100 duration-100 ease-linear group-hover/item:-translate-x-2"
            />
            {appConfig.author.name}
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-400">All Projects</h1>
        </div>
        <table className="my-5 w-full">
          <thead className="sticky top-20 bg-slate-300 py-3 backdrop-blur-md dark:bg-slate-800">
            <tr className="text-slate-600">
              <th className="w-[5%] p-2 text-start">Year</th>
              <th className="w-[35%] p-2 text-start">Project</th>
              <th className="w-[20%] p-2 text-start">Made at</th>
              <th className="w-[20%] p-2 text-start">Build With</th>
              <th className="w-[20%] p-2 text-start">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
            <tr>
              <td className="p-2 text-start">2023</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
              <td className="p-2 text-start">Test</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Projects
