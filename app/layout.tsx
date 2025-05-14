import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PDFCapture - Convert Any Webpage to PDF",
  description: "Transform web pages into beautifully formatted PDF documents with just one click."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Check if the current path is in the dashboard
  const isDashboard = typeof window !== "undefined" && window.location.pathname.startsWith("/dashboard")

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isDashboard && <Navbar />}
        <main>{children}</main>
        {!isDashboard && <Footer />}
        <Toaster />
      </body>
    </html>
  )
}
