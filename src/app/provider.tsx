"use client"

import { SessionProvider } from "next-auth/react"
import {ThemeProvider} from "@/components/themes-provider"

export default function Providers({children}: {children: React.ReactNode} ,) {

 
  return (
    <SessionProvider>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
    </SessionProvider>
  )
}