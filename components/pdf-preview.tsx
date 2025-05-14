"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

interface PdfPreviewProps {
  pdfUrl: string | null
}

export default function PdfPreview({ pdfUrl }: PdfPreviewProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (pdfUrl) {
      setIsLoading(true)
    }
  }, [pdfUrl])

  if (!pdfUrl) return null

  return (
    <div className="mt-6 rounded-lg backdrop-blur-md bg-white/30 border border-white/40 p-4 shadow-lg">
      <h3 className="mb-4 text-xl font-medium text-gray-900">PDF Preview</h3>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-gray-200 bg-white">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        <iframe
          src={`${pdfUrl}#toolbar=0`}
          className="h-full w-full"
          onLoad={() => setIsLoading(false)}
          title="PDF Preview"
        />
      </div>
    </div>
  )
}
