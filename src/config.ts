const url = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const apiBaseUrl = process.env.API_URL || 'http://localhost:3900';

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
};

export type AppConfig = typeof appConfig;
