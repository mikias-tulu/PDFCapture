"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Download, AlertCircle } from "lucide-react"

export default function BillingPage() {
  const [activeTab, setActiveTab] = useState("subscription")

  // Mock invoice data
  const invoices = [
    {
      id: "INV-001",
      date: "May 1, 2023",
      amount: "$9.99",
      status: "Paid",
    },
    {
      id: "INV-002",
      date: "April 1, 2023",
      amount: "$9.99",
      status: "Paid",
    },
    {
      id: "INV-003",
      date: "March 1, 2023",
      amount: "$9.99",
      status: "Paid",
    },
    {
      id: "INV-004",
      date: "February 1, 2023",
      amount: "$9.99",
      status: "Paid",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Billing</h1>
        <Button className="bg-primary hover:bg-purple-700">Upgrade Plan</Button>
      </div>

      <Tabs defaultValue="subscription" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 bg-white/50">
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="subscription" className="space-y-6">
          <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>You are currently on the Pro plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-white/70 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Pro Plan</h3>
                    <p className="text-sm text-gray-500">$9.99 / month</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">Active</span>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Your next billing date is June 15, 2023</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">Plan Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> 100 PDF conversions per month
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> High quality PDFs
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Unlimited pages per PDF
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Priority support
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Custom headers and footers
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
              <Button variant="outline">Change Plan</Button>
              <Button variant="outline" className="text-red-500 hover:text-red-600">
                Cancel Subscription
              </Button>
            </CardFooter>
          </Card>

          <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View and download your past invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-white/40 bg-white/50">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/40 bg-white/30">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Invoice</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Amount</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Status</th>
                        <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b border-white/40 last:border-0">
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">{invoice.id}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{invoice.date}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{invoice.amount}</td>
                          <td className="px-4 py-3 text-sm">
                            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                              {invoice.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right text-sm">
                            <Button variant="ghost" size="sm" className="h-8">
                              <Download className="mr-1 h-3 w-3" />
                              PDF
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment-methods" className="space-y-6">
          <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-white/70 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 h-8 w-12 rounded bg-gray-200 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/2025</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Default</span>
                </div>
              </div>

              <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <Button variant="outline" className="bg-white/50 border-white/40">
                  Update Payment Method
                </Button>
                <Button variant="outline" className="bg-white/50 border-white/40">
                  Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
            <CardHeader>
              <CardTitle>Billing Address</CardTitle>
              <CardDescription>Your billing address for invoices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-white/70 p-4">
                <div className="space-y-1">
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-600">Acme Inc.</p>
                  <p className="text-sm text-gray-600">123 Main St.</p>
                  <p className="text-sm text-gray-600">San Francisco, CA 94103</p>
                  <p className="text-sm text-gray-600">United States</p>
                </div>
              </div>

              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <div className="flex">
                  <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0 text-amber-500" />
                  <div>
                    <h4 className="text-sm font-medium text-amber-800">Tax Information</h4>
                    <p className="mt-1 text-sm text-amber-700">
                      Adding your tax information can help you with your business expenses. You can add your tax
                      information in your account settings.
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="bg-white/50 border-white/40">
                Update Billing Address
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
