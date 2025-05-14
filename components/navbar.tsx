"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, FileText, BookOpen } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="backdrop-blur-md bg-white/30 border-b border-white/40 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <FileText className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900">PDFCapture</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/#how-it-works" className="text-gray-700 hover:text-primary">
                How It Works
              </Link>
              <Link href="/#pricing" className="text-gray-700 hover:text-primary">
                Pricing
              </Link>
              <Link href="/docs/api" className="text-gray-700 hover:text-primary">
                <span className="flex items-center">
                  <BookOpen className="mr-1 h-4 w-4" />
                  Documentation
                </span>
              </Link>
              <Link href="/signin" className="text-gray-700 hover:text-primary">
                Sign In
              </Link>
              <Link href="/signup" className="rounded-full bg-primary px-4 py-2 text-white hover:bg-primary/90">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button type="button" className="text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/#how-it-works"
              className="block rounded-md px-3 py-2 text-gray-700 hover:bg-primary/30"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="block rounded-md px-3 py-2 text-gray-700 hover:bg-primary/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/docs/api"
              className="block rounded-md px-3 py-2 text-gray-700 hover:bg-primary/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              href="/signin"
              className="block rounded-md px-3 py-2 text-gray-700 hover:bg-primary/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="block rounded-md px-3 py-2 text-gray-700 hover:bg-primary/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
