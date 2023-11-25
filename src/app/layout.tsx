import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { appConfig } from '@/config'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideText from '@/components/ui/SideText'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: appConfig.title,
  description: appConfig.description,
  keywords: ['Biprodas', 'Roy', 'bipro10', 'Software', 'Engineer', 'Web', 'Developer', 'ERP'],
  authors: [
    {
      name: appConfig.author.name,
      url: appConfig.author.website,
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: appConfig.url,
    title: appConfig.title,
    description: appConfig.description,
    siteName: appConfig.name,
    images: [],
  },
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL(appConfig.url),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed h-screen w-full overflow-auto bg-gradient-to-br from-indigo-100 via-slate-100 to-cyan-100 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800" />
          <div className="cscroll relative z-10 flex min-h-screen flex-col overflow-auto">
            <main className="flex-grow">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
