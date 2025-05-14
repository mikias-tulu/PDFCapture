import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, FileText, Zap } from "lucide-react"

export default function UsageStatistics() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-500">Monthly Usage</CardTitle>
            <Zap className="h-4 w-4 text-amber-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">8,532</span>
              <span className="text-sm text-gray-500">/ 10,000 requests</span>
            </div>
            <Progress value={85.32} className="h-2" />
            <p className="text-xs text-amber-600">85.32% of your monthly limit</p>
          </div>
        </CardContent>
      </Card>

      <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-500">Average Response Time</CardTitle>
            <Clock className="h-4 w-4 text-green-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">1.2s</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">Fast</span>
            </div>
            <Progress value={20} className="h-2 bg-gray-100">
              <div className="h-full bg-green-500 rounded-full" />
            </Progress>
            <p className="text-xs text-green-600">20% faster than last week</p>
          </div>
        </CardContent>
      </Card>

      <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-gray-500">Success Rate</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">99.8%</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Excellent</span>
            </div>
            <Progress value={99.8} className="h-2" />
            <p className="text-xs text-blue-600">12 failed requests this month</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
