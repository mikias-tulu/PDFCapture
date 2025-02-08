"use client"

import { useState } from "react"
import { Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export interface PdfOptions {
  pageSize: string
  orientation: string
  scale: number
}

interface PdfOptionsProps {
  options: PdfOptions
  onChange: (options: PdfOptions) => void
}

export default function PdfOptionsComponent({ options, onChange }: PdfOptionsProps) {
  const [open, setOpen] = useState(false)

  const handleChange = (key: keyof PdfOptions, value: string | number) => {
    onChange({ ...options, [key]: value })
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-white/50 border-white/40">
          <Settings2 className="h-4 w-4" />
          <span>PDF Options</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 backdrop-blur-md bg-white/70 border border-white/40">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="page-size">Page Size</Label>
            <Select value={options.pageSize} onValueChange={(value) => handleChange("pageSize", value)}>
              <SelectTrigger id="page-size">
                <SelectValue placeholder="Select page size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A4">A4</SelectItem>
                <SelectItem value="Letter">Letter</SelectItem>
                <SelectItem value="Legal">Legal</SelectItem>
                <SelectItem value="Tabloid">Tabloid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="orientation">Orientation</Label>
            <Select value={options.orientation} onValueChange={(value) => handleChange("orientation", value)}>
              <SelectTrigger id="orientation">
                <SelectValue placeholder="Select orientation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="portrait">Portrait</SelectItem>
                <SelectItem value="landscape">Landscape</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="scale">Scale ({options.scale}x)</Label>
            </div>
            <Slider
              id="scale"
              min={0.5}
              max={2}
              step={0.1}
              value={[options.scale]}
              onValueChange={(value) => handleChange("scale", value[0])}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
