import type React from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
import {
  LayoutDashboard,
  Key,
  History,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  User,
  FileText,
  CreditCard,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NotificationsPopover } from "@/components/notifications-popover"

// This is a mock function to check if user is authenticated
// In a real app, this would use NextAuth or similar
const isAuthenticated = () => {
  // For demo purposes, always return true
  // In a real app, check session/token
  return true
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Check if user is authenticated
  if (!isAuthenticated()) {
    redirect("/signin?callbackUrl=/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="flex min-h-screen flex-col">
        {/* Dashboard Header */}
        <header className="backdrop-blur-md bg-white/50 border-b border-white/40 sticky top-0 z-30">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-gray-900">PDFCapture</span>
              </Link>
              <span className="ml-2 rounded-md bg-primary/30 px-2 py-1 text-xs font-medium text-purple-800">
                Dashboard
              </span>
            </div>

            <div className="flex items-center gap-4">
              <NotificationsPopover />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/30">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <span>John Doe</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/dashboard/profile" className="flex w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/settings" className="flex w-full">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard/billing" className="flex w-full">
                      Billing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/signout" className="flex w-full text-red-500">
                      Sign out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="backdrop-blur-md bg-white/30 border-r border-white/40 w-64 flex-shrink-0">
            <nav className="flex h-full flex-col p-4">
              <div className="space-y-1">
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    data-active={
                      typeof window !== "undefined" && window.location.pathname === "/dashboard" ? "true" : "false"
                    }
                  >
                    <LayoutDashboard className="mr-2 h-5 w-5" />
                    Dashboard
                  </Button>
                </Link>
                <Link href="/dashboard/api-keys">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    data-active={
                      typeof window !== "undefined" && window.location.pathname === "/dashboard/api-keys"
                        ? "true"
                        : "false"
                    }
                  >
                    <Key className="mr-2 h-5 w-5" />
                    API Keys
                  </Button>
                </Link>
                <Link href="/dashboard/history">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    data-active={
                      typeof window !== "undefined" && window.location.pathname === "/dashboard/history"
                        ? "true"
                        : "false"
                    }
                  >
                    <History className="mr-2 h-5 w-5" />
                    Conversion History
                  </Button>
                </Link>
                <Link href="/dashboard/billing">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    data-active={
                      typeof window !== "undefined" && window.location.pathname === "/dashboard/billing"
                        ? "true"
                        : "false"
                    }
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Billing
                  </Button>
                </Link>
                <Link href="/dashboard/notifications">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    data-active={
                      typeof window !== "undefined" && window.location.pathname === "/dashboard/notifications"
                        ? "true"
                        : "false"
                    }
                  >
                    <Bell className="mr-2 h-5 w-5" />
                    Notifications
                  </Button>
                </Link>
                <Link href="/dashboard/settings">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    data-active={
                      typeof window !== "undefined" && window.location.pathname === "/dashboard/settings"
                        ? "true"
                        : "false"
                    }
                  >
                    <Settings className="mr-2 h-5 w-5" />
                    Settings
                  </Button>
                </Link>
              </div>

              <div className="mt-auto space-y-1">
                <Link href="/docs/api">
                  <Button variant="ghost" className="w-full justify-start">
                    <FileText className="mr-2 h-5 w-5" />
                    API Documentation
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button variant="ghost" className="w-full justify-start">
                    <HelpCircle className="mr-2 h-5 w-5" />
                    Help & Support
                  </Button>
                </Link>
                <Link href="/signout">
                  <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600">
                    <LogOut className="mr-2 h-5 w-5" />
                    Sign Out
                  </Button>
                </Link>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
