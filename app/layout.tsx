import type { Metadata } from 'next'
import { Epilogue, Geist, Geist_Mono, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const epilogue = Epilogue({
  variable: '--font-sans',
  subsets: ['latin'],
})

const ibm = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'fernanda vaz',
  description: 'web developer portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${epilogue.variable} ${ibm.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
