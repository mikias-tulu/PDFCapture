import ApiDocumentation from "@/components/api-documentation"

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">API Documentation</h1>
            <p className="text-xl text-gray-600">Integrate URL to PDF conversion directly into your applications</p>
          </div>

          <ApiDocumentation />
        </div>
      </div>
    </div>
  )
}
