import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <section className="lg:py-16">
      <div className="mx-auto min-h-screen max-w-screen-xl py-12 font-sans md:py-20 lg:py-0">
        <Link
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
          href="/about"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Biprodas Roy
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          All Projects
        </h1>
        <table id="content" className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                Made at
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                Built with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(
              (item, idx) => (
                <tr key={idx} className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pr-4 align-top text-sm">
                    <div className="translate-y-px">2022</div>
                  </td>
                  <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                    <div>
                      <div className="block sm:hidden">
                        <span>Harvard Business School Design System</span>
                      </div>
                      <div className="hidden sm:block">Harvard Business School Design System</div>
                    </div>
                  </td>
                  <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                    <div className="translate-y-px whitespace-nowrap">Upstatement</div>
                  </td>
                  <td className="hidden py-4 pr-4 align-top lg:table-cell">
                    <ul className="flex -translate-y-1.5 flex-wrap">
                      <li className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          Storybook
                        </div>
                      </li>
                      <li className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          React
                        </div>
                      </li>
                      <li className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          TypeScript
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td className="hidden py-4 align-top sm:table-cell"></td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Projects
