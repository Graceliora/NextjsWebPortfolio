import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/header'
import Chatbot from '@/components/chatbot'
import useServerDarkMode from '@/hooks/use-server-dark-mode'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Gracella Noveliora',
    default: 'Gracella Noveliora'
  },
};

export default function RootLayout({ children }) {
  const theme = useServerDarkMode()

  return (
    <html lang="en" className={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Header />
        <main className="mt-12">
          {children}
        </main>

        <Chatbot />
      </body>
    </html>
  )
}
