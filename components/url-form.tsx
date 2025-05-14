"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import PdfResult from "./pdf-result"
import PdfPreview from "./pdf-preview"
import PdfOptionsComponent, { type PdfOptions } from "./pdf-options"
import RecentConversions from "./recent-conversions"
import LoadingAnimation from "./loading-animation"

export default function UrlForm() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const [options, setOptions] = useState<PdfOptions>({
    pageSize: "A4",
    orientation: "portrait",
    scale: 1,
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!url) {
      toast({
        title: "URL required",
        description: "Please enter a URL to convert",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    setPdfUrl(null)

    try {
      // Make the API request to convert URL to PDF
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          pageSize: options.pageSize,
          orientation: options.orientation,
          scale: options.scale,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || "Failed to convert URL to PDF")
      }

      const data = await response.json()
      setPdfUrl(data.pdfUrl)

      // Save to recent conversions
      const newConversion = {
        id: Date.now().toString(),
        url,
        pdfUrl: data.pdfUrl,
        timestamp: Date.now(),
      }

      const storedConversions = localStorage.getItem("recentConversions")
      let conversions = storedConversions ? JSON.parse(storedConversions) : []

      // Limit to 10 most recent conversions
      conversions = [newConversion, ...conversions].slice(0, 10)
      localStorage.setItem("recentConversions", JSON.stringify(conversions))

      toast({
        title: "Success!",
        description: "Your PDF has been generated successfully.",
        variant: "default",
      })
    } catch (error) {
      console.error("Error converting URL to PDF:", error)
      toast({
        title: "Conversion failed",
        description: error instanceof Error ? error.message : "Failed to convert URL to PDF",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative">
        <div className="backdrop-blur-md bg-white/30 rounded-lg p-1 shadow-xl border border-white/40">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <Input
                type="url"
                placeholder="Enter website URL (e.g., https://example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 border-0 bg-transparent px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-0"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="ml-2 bg-primary px-6 text-white hover:bg-primary/90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Converting...
                  </>
                ) : (
                  "Convert to PDF"
                )}
              </Button>
            </div>

            <div className="px-1 pb-1">
              <PdfOptionsComponent options={options} onChange={setOptions} />
            </div>
          </div>
        </div>
      </form>

      {isLoading && <LoadingAnimation />}
      <PdfResult pdfUrl={pdfUrl} isLoading={isLoading} />
      <PdfPreview pdfUrl={pdfUrl} />
      <RecentConversions />
    </div>
  )
}
