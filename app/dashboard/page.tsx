import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import UsageGraph from "@/components/usage-graph"
import UsageStatistics from "@/components/usage-statistics"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Link href="/">
          <Button className="bg-primary hover:bg-purple-700">Convert New URL</Button>
        </Link>
      </div>

      {/* Usage Statistics */}
      <UsageStatistics />

      {/* Usage Graph */}
      <UsageGraph />

      {/* Recent Conversions */}
      <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
        <CardHeader>
          <CardTitle>Recent Conversions</CardTitle>
          <CardDescription>Your most recent URL to PDF conversions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-white/50 p-3">
                <div className="flex-1 truncate">
                  <p className="truncate font-medium">https://example.com/article-{i}</p>
                  <p className="text-sm text-gray-500">{new Date().toLocaleDateString()}</p>
                </div>
                <Button variant="outline" size="sm" className="ml-2 bg-white">
                  View PDF
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/dashboard/history" className="w-full">
            <Button variant="outline" className="w-full">
              View All Conversions
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
            <CardDescription>Manage your API keys for integration</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">You have 3 active API keys. Your primary key was last used 2 hours ago.</p>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/api-keys" className="w-full">
              <Button variant="outline" className="w-full">
                Manage API Keys <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Update your profile and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Your account is on the Pro plan, renewing on {new Date().toLocaleDateString()}.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/settings" className="w-full">
              <Button variant="outline" className="w-full">
                Account Settings <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
