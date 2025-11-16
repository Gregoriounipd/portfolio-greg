import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Greg - Web Developer | Portfolio',
  description: 'Web Developer specializzato in Next.js, React e Tailwind CSS. Creatore di adorievents.com e soluzioni digitali accessibili.',
  keywords: 'web developer, next.js, react, tailwind css, portfolio, sviluppatore web, italia',
  authors: [{ name: 'Greg' }],
  openGraph: {
    title: 'Greg - Web Developer Portfolio',
    description: 'Trasformo idee in esperienze digitali moderne e accessibili',
    type: 'website',
    locale: 'it_IT',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  )
}