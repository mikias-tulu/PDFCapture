import Link from "next/link"
import { ArrowRight } from "lucide-react"
import UrlForm from "@/components/url-form"
import PricingSection from "@/components/pricing-section"
import HowItWorks from "@/components/how-it-works"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Convert any URL to PDF <span className="text-primary">instantly</span>
            </h1>
            <p className="mb-10 text-xl text-gray-600">
              Transform web pages into beautifully formatted PDF documents with just one click. Perfect for archiving,
              sharing, or offline reading.
            </p>

            {/* URL Input Form */}
            <div className="mx-auto max-w-2xl">
              <UrlForm />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-white transition-all hover:bg-primary/90"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-primary shadow-sm transition-all hover:bg-gray-50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* API Documentation Section */}
        <section id="api-docs" className="py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">Developer API</h2>
            <p className="mb-10 text-xl text-gray-600">
              Integrate URL to PDF conversion directly into your applications with our powerful API
            </p>
            <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-8 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="mb-6 text-left">
                  <h3 className="text-2xl font-bold mb-4">Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span> RESTful API for easy integration
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span> Multiple output formats and customization options
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span> Batch conversion support
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span> Webhook notifications
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span> Comprehensive documentation and examples
                    </li>
                  </ul>
                </div>
                <Link href="/docs/api">
                  <Button className="bg-primary hover:bg-primary/90">
                    View API Documentation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />
      </div>
    </div>
  )
}
