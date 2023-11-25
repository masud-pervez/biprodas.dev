import React from 'react'
import Link from 'next/link'
import { appConfig } from '@/config'

const SideText = () => {
  return (
    <div className="hidden xl:block">
      <div className="gamil-link vertical-rl fixed bottom-14 left-16 flex flex-row gap-5">
        {appConfig.social.map((item, idx) => {
          return (
            <Link
              key={idx}
              href={item.link}
              className="text-slate-700 transition-all delay-75 duration-100 ease-linear hover:-translate-y-1 dark:text-slate-400"
            >
              <item.icon size={20} />
            </Link>
          )
        })}
      </div>
      <div className="vertical-rl fixed bottom-14 right-16">
        <div className="gamil-link flex items-center gap-5 ">
          <Link
            href=""
            className="text-slate-700 transition-all delay-75 duration-100 ease-linear hover:-translate-y-1 dark:text-slate-400"
          >
            <code>{appConfig.email}</code>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideText
