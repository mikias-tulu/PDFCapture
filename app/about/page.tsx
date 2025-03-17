import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">About PDFCapture</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            We're on a mission to make web content more accessible and portable through high-quality PDF conversion.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-8 shadow-lg">
              <p className="mb-4 text-lg text-gray-700">
                PDFCapture was born out of a simple need: to save web content reliably for offline reading. What started
                as a personal project in 2020 has grown into a robust service used by thousands of professionals,
                researchers, and casual users worldwide.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                Our team of developers and designers is passionate about creating tools that make the web more
                accessible. We believe that important information should be available to everyone, even without an
                internet connection.
              </p>
              <p className="text-lg text-gray-700">
                Today, PDFCapture processes thousands of conversions daily, helping users archive research, save articles,
                and share web content in a universally accessible format.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Accessibility</h3>
                <p className="text-gray-700">
                  We believe information should be accessible to everyone, regardless of their internet connection or
                  device.
                </p>
              </div>
              <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Quality</h3>
                <p className="text-gray-700">
                  We're committed to producing high-quality PDF documents that preserve the original content's layout
                  and formatting.
                </p>
              </div>
              <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Privacy</h3>
                <p className="text-gray-700">
                  We respect your privacy and do not store the content of converted webpages beyond the necessary
                  processing time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Why Choose PDFCapture</h2>
            <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-8 shadow-lg">
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">High-fidelity PDF conversion that preserves layout and styling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">Fast processing with optimized file sizes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">Customizable output with various page sizes and orientations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">Reliable API with comprehensive documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">Privacy-focused approach with secure processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">Responsive customer support and regular feature updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="mx-auto max-w-2xl backdrop-blur-md rounded-xl bg-primary/20 border border-purple-300/40 p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Ready to try PDFCapture?</h2>
            <p className="mb-6 text-lg text-gray-700">
              Convert your first webpage to PDF for free and experience the quality for yourself.
            </p>
            <Link href="/">
              <Button className="bg-primary hover:bg-purple-700">
                Try It Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
