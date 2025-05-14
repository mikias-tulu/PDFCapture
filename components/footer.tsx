import Link from "next/link"
import { Github, Mail, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-white/30 border-t border-white/40 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">About PDFCapture</h3>
            <p className="mb-4 text-sm text-gray-600">
              PDFCapture is a powerful web service that converts any webpage into a beautifully formatted PDF document.
              Perfect for archiving, sharing, or offline reading.
            </p>
            <Link href="/about" className="text-sm text-primary hover:text-primary/90">
              Learn more about us
            </Link>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/docs" className="hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs/api" className="hover:text-primary">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/docs/examples" className="hover:text-primary">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Developer</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <Github className="mr-2 h-4 w-4" />
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <Link href="/docs/contribute" className="hover:text-primary">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/docs/changelog" className="hover:text-primary">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-primary">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <a href="mailto:contact@PDFCapture.com" className="hover:text-primary">
                  contact@PDFCapture.com
                </a>
              </li>
              <li className="flex items-center">
                <Twitter className="mr-2 h-4 w-4" />
                <a
                  href="https://twitter.com/PDFCapture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  @PDFCapture
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin className="mr-2 h-4 w-4" />
                <a
                  href="https://linkedin.com/company/PDFCapture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} PDFCapture. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
