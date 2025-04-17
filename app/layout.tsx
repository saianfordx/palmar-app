import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { DecorativePattern } from "@/components/ui/decorative-patterns"
import { BackgroundMusic } from "@/components/BackgroundMusic"
import ScrollLock from "@/components/ScrollLock"
import Head from "next/head"

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"] 
})

export const metadata: Metadata = {
  title: "Pal' Mar - Evento Exclusivo en la Riviera Maya",
  description:
    "Pal' Mar es un evento exclusivo que reúne a profesionales y entusiastas en un entorno paradisíaco para compartir experiencias, establecer conexiones y disfrutar de momentos únicos.",
  generator: 'v0.dev',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'theme-color': '#10241b'
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: "cover"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className={`${poppins.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ScrollLock />
          <div className="min-h-[100dvh] w-full overflow-x-hidden pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
            <DecorativePattern variant="palmar-gold" className="opacity-10" />
            <BackgroundMusic src="/myaSong.mp3" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}