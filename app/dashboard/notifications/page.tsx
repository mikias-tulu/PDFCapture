"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Check, Bell, AlertTriangle, Info, CheckCircle } from "lucide-react"

// Mock notifications data
const initialNotifications = [
  {
    id: "1",
    title: "API Key Created",
    message: "You've successfully created a new API key named 'Production API Key'.",
    time: "2 hours ago",
    read: false,
    type: "success",
  },
  {
    id: "2",
    title: "Usage Limit Warning",
    message:
      "You've reached 80% of your monthly API usage limit. Consider upgrading your plan to avoid service interruptions.",
    time: "1 day ago",
    read: false,
    type: "warning",
  },
  {
    id: "3",
    title: "Conversion Complete",
    message:
      "Your batch conversion of 5 URLs has completed successfully. You can download the PDFs from your conversion history.",
    time: "2 days ago",
    read: true,
    type: "info",
  },
  {
    id: "4",
    title: "Payment Successful",
    message: "Your subscription has been renewed successfully. The next billing date is June 15, 2023.",
    time: "1 week ago",
    read: true,
    type: "success",
  },
  {
    id: "5",
    title: "New Feature Available",
    message: "We've added custom headers and footers to PDF conversions. Try it out in your next conversion!",
    time: "2 weeks ago",
    read: true,
    type: "info",
  },
  {
    id: "6",
    title: "Account Security",
    message: "We noticed a login from a new device. If this wasn't you, please secure your account immediately.",
    time: "3 weeks ago",
    read: true,
    type: "warning",
  },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [activeTab, setActiveTab] = useState("all")

  const unreadCount = notifications.filter((n) => !n.read).length

  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notification.read
    return notification.type === activeTab
  })

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const getIconForType = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
        {unreadCount > 0 && (
          <Button onClick={markAllAsRead} variant="outline" className="bg-white/50 border-white/40">
            <Check className="mr-2 h-4 w-4" />
            Mark all as read
          </Button>
        )}
      </div>

      <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
        <CardHeader>
          <CardTitle>Your Notifications</CardTitle>
          <CardDescription>Stay updated with important information about your account and service</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-white/50">
              <TabsTrigger value="all">
                All
                {notifications.length > 0 && (
                  <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs">{notifications.length}</span>
                )}
              </TabsTrigger>
              <TabsTrigger value="unread">
                Unread
                {unreadCount > 0 && (
                  <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-600">{unreadCount}</span>
                )}
              </TabsTrigger>
              <TabsTrigger value="success">Success</TabsTrigger>
              <TabsTrigger value="warning">Warnings</TabsTrigger>
              <TabsTrigger value="info">Info</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab} className="mt-4">
              <div className="space-y-4">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start rounded-lg border p-4 ${
                        notification.read ? "bg-white/50" : "bg-blue-50/50 border-blue-200"
                      }`}
                    >
                      <div className="mr-4 mt-0.5">{getIconForType(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{notification.title}</h3>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
                      </div>
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                          className="ml-2 h-8 shrink-0"
                        >
                          <Check className="mr-1 h-3 w-3" />
                          Mark as read
                        </Button>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="flex h-32 items-center justify-center rounded-lg border border-dashed">
                    <p className="text-gray-500">No notifications found</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
