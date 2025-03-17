import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Book, Code, FileText, Server } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Documentation</h1>
            <p className="text-xl text-gray-600">Learn how to use PDFCapture to convert webpages to PDF documents</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Getting Started */}
            <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-900">Getting Started</h2>
              <p className="mb-4 text-gray-600">
                Learn the basics of PDFCapture and how to convert your first webpage to PDF.
              </p>
              <Link href="/docs/getting-started">
                <Button variant="outline" className="flex items-center gap-2">
                  Read Guide <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* API Reference */}
            <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-900">API Reference</h2>
              <p className="mb-4 text-gray-600">
                Detailed documentation for the PDFCapture API endpoints and parameters.
              </p>
              <Link href="/docs/api">
                <Button variant="outline" className="flex items-center gap-2">
                  View Reference <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Examples */}
            <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-900">Examples</h2>
              <p className="mb-4 text-gray-600">
                Code examples in various programming languages to help you integrate PDFCapture.
              </p>
              <Link href="/docs/examples">
                <Button variant="outline" className="flex items-center gap-2">
                  See Examples <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Advanced Usage */}
            <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-900">Advanced Usage</h2>
              <p className="mb-4 text-gray-600">
                Learn about advanced features like custom headers, authentication, and more.
              </p>
              <Link href="/docs/advanced">
                <Button variant="outline" className="flex items-center gap-2">
                  Explore Features <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 backdrop-blur-md rounded-xl bg-primary/20 border border-purple-300/40 p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Need Help?</h2>
            <p className="mb-6 text-gray-700">
              Can't find what you're looking for? Our support team is here to help you with any questions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-purple-700">Contact Support</Button>
              </Link>
              <Link href="https://github.com/yourusername/PDFCapture/issues" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="bg-white hover:bg-gray-50">
                  Report an Issue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
