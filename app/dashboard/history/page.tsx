"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, ExternalLink, Search, Trash2 } from "lucide-react"

// Mock conversion history data
const initialConversions = Array.from({ length: 20 }, (_, i) => ({
  id: `conv-${i + 1}`,
  url: `https://example.com/page-${i + 1}`,
  createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
  status: Math.random() > 0.1 ? "completed" : "failed",
  pdfUrl: Math.random() > 0.1 ? `https://storage.example.com/pdf-${i + 1}.pdf` : null,
  pageSize: ["A4", "Letter", "Legal"][Math.floor(Math.random() * 3)],
  orientation: Math.random() > 0.5 ? "portrait" : "landscape",
}))

export default function HistoryPage() {
  const [conversions, setConversions] = useState(initialConversions)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [timeFilter, setTimeFilter] = useState("all")

  // Filter conversions based on search query and filters
  const filteredConversions = conversions.filter((conversion) => {
    // Search filter
    if (searchQuery && !conversion.url.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Status filter
    if (statusFilter !== "all" && conversion.status !== statusFilter) {
      return false
    }

    // Time filter
    if (timeFilter !== "all") {
      const now = new Date()
      const convDate = new Date(conversion.createdAt)
      const diffDays = Math.floor((now.getTime() - convDate.getTime()) / (1000 * 60 * 60 * 24))

      if (timeFilter === "today" && diffDays > 0) return false
      if (timeFilter === "week" && diffDays > 7) return false
      if (timeFilter === "month" && diffDays > 30) return false
    }

    return true
  })

  const handleDeleteConversion = (id: string) => {
    setConversions((prev) => prev.filter((conv) => conv.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Conversion History</h1>
      </div>

      <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
        <CardHeader>
          <CardTitle>Your Conversions</CardTitle>
          <CardDescription>View and manage your URL to PDF conversions</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="mb-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search by URL..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 bg-white/50 border-white/40"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px] bg-white/50 border-white/40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-[180px] bg-white/50 border-white/40">
                <SelectValue placeholder="Filter by time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Conversions Table */}
          <div className="rounded-md border border-white/40 bg-white/50">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>URL</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Format</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredConversions.length > 0 ? (
                  filteredConversions.map((conversion) => (
                    <TableRow key={conversion.id}>
                      <TableCell className="font-medium truncate max-w-[200px]">{conversion.url}</TableCell>
                      <TableCell>{conversion.createdAt.toLocaleDateString()}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            conversion.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {conversion.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        {conversion.pageSize}, {conversion.orientation}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          {conversion.status === "completed" && (
                            <>
                              <Button variant="ghost" size="icon" title="View PDF">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" title="Download PDF">
                                <Download className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            title="Delete"
                            onClick={() => handleDeleteConversion(conversion.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      No conversions found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
