"use client"

import { useEffect, useState } from "react"
import { Clock, ExternalLink, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface Conversion {
  id: string
  url: string
  pdfUrl: string
  timestamp: number
}

export default function RecentConversions() {
  const [conversions, setConversions] = useState<Conversion[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Load conversions from localStorage
    const storedConversions = localStorage.getItem("recentConversions")
    if (storedConversions) {
      try {
        setConversions(JSON.parse(storedConversions))
      } catch (error) {
        console.error("Error parsing stored conversions:", error)
      }
    }
  }, [])

  const removeConversion = (id: string) => {
    const updatedConversions = conversions.filter((conversion) => conversion.id !== id)
    setConversions(updatedConversions)
    localStorage.setItem("recentConversions", JSON.stringify(updatedConversions))
  }

  const clearAllConversions = () => {
    setConversions([])
    localStorage.removeItem("recentConversions")
  }

  if (conversions.length === 0) return null

  return (
    <div className="mt-8 backdrop-blur-md bg-white/30 rounded-lg border border-white/40 p-4 shadow-lg">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 p-2">
              <Clock className="h-4 w-4" />
              <span>Recent Conversions ({conversions.length})</span>
              <span className="ml-1">{isOpen ? "▲" : "▼"}</span>
            </Button>
          </CollapsibleTrigger>
          <Button variant="ghost" size="sm" onClick={clearAllConversions} className="text-red-500 hover:text-red-700">
            Clear All
          </Button>
        </div>

        <CollapsibleContent>
          <div className="mt-2 space-y-2">
            {conversions.map((conversion) => (
              <div key={conversion.id} className="flex items-center justify-between rounded-md bg-white/50 p-3">
                <div className="flex-1 truncate">
                  <p className="truncate text-sm font-medium">{conversion.url}</p>
                  <p className="text-xs text-gray-500">{new Date(conversion.timestamp).toLocaleString()}</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(conversion.pdfUrl, "_blank")}
                    className="text-primary hover:text-purple-800"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeConversion(conversion.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
