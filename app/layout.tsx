import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { DecorativePattern } from "@/components/ui/decorative-patterns"

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"] 
})

export const metadata: Metadata = {
  title: "Pal' Mar - Evento Exclusivo en la Riviera Maya",
  description:
    "Pal' Mar es un evento exclusivo que reúne a profesionales y entusiastas en un entorno paradisíaco para compartir experiencias, establecer conexiones y disfrutar de momentos únicos.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen">
            <DecorativePattern variant="palmar-gold" className="opacity-10" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}