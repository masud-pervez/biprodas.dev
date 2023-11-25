const url = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
const apiBaseUrl = process.env.API_URL || 'http://localhost:3900'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { AiFillFacebook } from 'react-icons/ai'
import { LiaHackerrank } from 'react-icons/lia'

export const appConfig = {
  name: 'Biprodas Roy',
  title: 'Biprodas R.',
  description: 'Fullstack Software Engineer',
  url,
  apiBaseUrl,
  author: {
    name: 'Biprodas Roy',
    email: 'biprodas.cse@gmail.com',
    website: 'https://biprodas.dev',
  },
  links: {
    linkedIn: 'https://www.linkedin.com/in/biprodas-roy',
    github: 'https://github.com/biprodas/biprodas.dev',
  },
  introdata: {
    title: 'Hi, my name is',
    animated: {
      first: 'Sr. Software Engineer',
      second: 'Competitive Programmer',
      third: 'Founder & COO at Semicolon It Solutions',
    },
    description:
      'Dedicated technology enthusiast with an insatiable curiosity for unraveling the complexities of our digital world.',
  },
  email: 'biprodas.cse@gmail.com',
  social: [
    {
      name: 'Github',
      icon: FiGithub,
      link: 'https://github.com/masud-pervez',
    },
    {
      name: 'Linkedin',
      icon: FiLinkedin,
      link: 'https://www.linkedin.com/in/masud-pervez-/',
    },
    {
      name: 'Facebook',
      icon: AiFillFacebook,
      link: 'https://www.facebook.com/masud.pervez.31337',
    },
    {
      name: 'HackerRank',
      icon: LiaHackerrank,
      link: 'https://www.instagram.com/_masud_pervez_/',
    },
  ],
  projectData: [
    {
      project: {
        name: 'Project Name 1',
        link: '',
      },
      siteLink: '',
      githubLink: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ipsam harum necessitatibus totam, aliquam quod.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ipsam harum necessitatibus totam, aliquam quod.',
      float: true,
      tags: ['Heroku', 'React', 'Nest', 'PgAdmin'],
      img: '/project/project1.jpg',
    },
    {
      project: {
        name: 'Project Name 1',
        link: '',
      },
      siteLink: '',
      githubLink: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ipsam harum necessitatibus totam, aliquam quod.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ipsam harum necessitatibus totam, aliquam quod.',
      float: false,
      tags: ['Heroku', 'React', 'Nest', 'PgAdmin'],
      img: '/project/project2.png',
    },
    {
      project: {
        name: 'Project Name 1',
        link: '',
      },
      siteLink: '',
      githubLink: '',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ipsam harum necessitatibus totam, aliquam quod.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ipsam harum necessitatibus totam, aliquam quod.',
      float: true,
      tags: ['Heroku', 'React', 'Nest', 'PgAdmin'],
      img: '/project/project1.jpg',
    },
  ],
}

export type AppConfig = typeof appConfig
