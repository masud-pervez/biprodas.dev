import React from 'react'
import Link from 'next/link'
import { BsArrowUp } from 'react-icons/bs'

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container relative mx-auto flex min-h-[60vh] flex-col justify-start text-center lg:w-3/5">
        <code>
          <span className="text-cyan-600 dark:text-cyan-300 ">5. </span>
          <span className="font-bold text-slate-900 dark:text-slate-300">What’s Next?</span>
        </code>
        <h1 className="my-2 text-6xl font-bold text-slate-700  dark:text-slate-300">
          Get In Touch
        </h1>
        <p className="mx-auto my-3 w-full text-slate-800 dark:text-slate-400 lg:w-3/4">
          Although I’m not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <div className="my-5">
          <Link
            href="/project"
            className="bn32 z-10 rounded-sm text-slate-900 ring-1 hover:text-slate-50 dark:text-slate-100"
          >
            Sey Hello
          </Link>
        </div>
        <a
          href="#"
          className="absolute bottom-5 left-[50%] animate-bounce rounded-md border-dotted px-1 py-4 text-slate-700 ring-[0.5px] ring-slate-700 dark:text-cyan-400 dark:ring-cyan-500"
        >
          <BsArrowUp size={25} />
        </a>
      </div>
    </section>
  )
}

export default ContactSection
