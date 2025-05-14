"use client"
import { Button } from "@/components/ui/button"
import { FileDown, ExternalLink, Share2, Copy } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface PdfResultProps {
  pdfUrl: string | null
  isLoading: boolean
}

export default function PdfResult({ pdfUrl, isLoading }: PdfResultProps) {
  const { toast } = useToast()

  const handleCopyLink = async () => {
    if (!pdfUrl) return

    try {
      await navigator.clipboard.writeText(pdfUrl)
      toast({
        title: "Link copied!",
        description: "PDF link has been copied to clipboard",
      })
    } catch (error) {
      console.error("Failed to copy link:", error)
      toast({
        title: "Failed to copy",
        description: "Could not copy the link to clipboard",
        variant: "destructive",
      })
    }
  }

  const handleShare = async () => {
    if (!pdfUrl) return

    if (navigator.share) {
      try {
        await navigator.share({
          title: "PDF Conversion",
          text: "Check out this PDF I created",
          url: pdfUrl,
        })
        toast({
          title: "Shared successfully!",
          description: "PDF has been shared",
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      handleCopyLink()
    }
  }

  // We'll handle loading state in the parent component now
  if (isLoading || !pdfUrl) return null

  return (
    <div className="mt-6 rounded-lg backdrop-blur-md bg-white/30 border border-white/40 p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-medium text-gray-900">Your PDF is ready!</h3>

      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => window.open(pdfUrl, "_blank")}
          className="flex items-center bg-primary hover:bg-primary/90"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View PDF
        </Button>

        <Button
          onClick={() => {
            const link = document.createElement("a")
            link.href = pdfUrl
            link.download = `converted-${Date.now()}.pdf`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }}
          variant="outline"
          className="flex items-center bg-white hover:bg-gray-50"
        >
          <FileDown className="mr-2 h-4 w-4" />
          Download PDF
        </Button>

        <Button onClick={handleCopyLink} variant="outline" className="flex items-center bg-white hover:bg-gray-50">
          <Copy className="mr-2 h-4 w-4" />
          Copy Link
        </Button>

        {navigator.share && (
          <Button onClick={handleShare} variant="outline" className="flex items-center bg-white hover:bg-gray-50">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        )}
      </div>
    </div>
  )
}
