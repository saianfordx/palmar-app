'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Fix for hydration mismatch
  const [mounted, setMounted] = React.useState(false)
  
  // After hydration, we can show the provider
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return <>{children}</>
  }
  
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
