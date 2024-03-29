import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <GoogleOAuthProvider clientId="1067385508627-a37lt5gcehf5em9tl5cgbhspkf5q6scq.apps.googleusercontent.com">{children}</GoogleOAuthProvider>;
        
        
        </body>
    </html>
  )
}
