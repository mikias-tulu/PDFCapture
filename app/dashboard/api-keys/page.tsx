"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Eye, EyeOff, Plus, RefreshCw, Trash2, FileText } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link"

// Mock API keys data
const initialApiKeys = [
  {
    id: "1",
    name: "Production API Key",
    key: "pk_live_51HxSs7GJ5VkS1BGNxxx",
    createdAt: new Date("2023-01-15"),
    lastUsed: new Date("2023-05-10"),
  },
  {
    id: "2",
    name: "Development API Key",
    key: "pk_test_51HxSs7GJ5VkS1BGNxxx",
    createdAt: new Date("2023-02-20"),
    lastUsed: new Date("2023-05-09"),
  },
  {
    id: "3",
    name: "Testing API Key",
    key: "pk_test_51HxSs7GJ5VkS1BGNxxx",
    createdAt: new Date("2023-03-10"),
    lastUsed: null,
  },
]

export default function ApiKeysPage() {
  const [apiKeys, setApiKeys] = useState(initialApiKeys)
  const [newKeyName, setNewKeyName] = useState("")
  const [visibleKeys, setVisibleKeys] = useState<Record<string, boolean>>({})
  const [isCreatingKey, setIsCreatingKey] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newlyCreatedKey, setNewlyCreatedKey] = useState<string | null>(null)
  const { toast } = useToast()

  const toggleKeyVisibility = (id: string) => {
    setVisibleKeys((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key)
    toast({
      title: "API key copied",
      description: "The API key has been copied to your clipboard.",
    })
  }

  const handleCreateKey = () => {
    if (!newKeyName.trim()) {
      toast({
        title: "Name required",
        description: "Please provide a name for your API key.",
        variant: "destructive",
      })
      return
    }

    setIsCreatingKey(true)

    // Simulate API call
    setTimeout(() => {
      const newKey = `pk_${Math.random().toString(36).substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`

      const newApiKey = {
        id: Date.now().toString(),
        name: newKeyName,
        key: newKey,
        createdAt: new Date(),
        lastUsed: null,
      }

      setApiKeys((prev) => [...prev, newApiKey])
      setNewKeyName("")
      setIsCreatingKey(false)
      setIsDialogOpen(false)
      setNewlyCreatedKey(newKey)

      toast({
        title: "API key created",
        description: "Your new API key has been created successfully.",
      })
    }, 1000)
  }

  const handleDeleteKey = (id: string) => {
    setApiKeys((prev) => prev.filter((key) => key.id !== id))
    toast({
      title: "API key deleted",
      description: "The API key has been deleted successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">API Keys</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-purple-700">
              <Plus className="mr-2 h-4 w-4" /> Create New API Key
            </Button>
          </DialogTrigger>
          <DialogContent className="backdrop-blur-md bg-white/70 border border-white/40">
            <DialogHeader>
              <DialogTitle>Create New API Key</DialogTitle>
              <DialogDescription>
                Create a new API key to integrate with our services. Keep your API keys secure.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="key-name">API Key Name</Label>
                <Input
                  id="key-name"
                  placeholder="e.g., Production API Key"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  className="bg-white/50 border-white/40"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateKey} disabled={isCreatingKey} className="bg-primary hover:bg-purple-700">
                {isCreatingKey ? "Creating..." : "Create API Key"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Newly created key alert */}
      {newlyCreatedKey && (
        <Card className="backdrop-blur-md bg-purple-100/50 border border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-800">New API Key Created</CardTitle>
            <CardDescription className="text-purple-700">
              This is the only time we'll show your API key. Please copy it now.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Input value={newlyCreatedKey} readOnly className="font-mono bg-white/70 border-purple-200" />
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleCopyKey(newlyCreatedKey)}
                className="flex-shrink-0"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              onClick={() => setNewlyCreatedKey(null)}
              className="w-full border-purple-200 text-purple-700"
            >
              I've Copied My Key
            </Button>
          </CardFooter>
        </Card>
      )}

      <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
        <CardHeader>
          <CardTitle>Your API Keys</CardTitle>
          <CardDescription>Manage your API keys for integration with our services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {apiKeys.map((apiKey) => (
              <div
                key={apiKey.id}
                className="flex flex-col space-y-2 rounded-lg border border-gray-200 bg-white/70 p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
              >
                <div className="space-y-1">
                  <p className="font-medium">{apiKey.name}</p>
                  <div className="flex items-center space-x-2">
                    <code className="rounded bg-gray-100 px-2 py-1 text-sm font-mono">
                      {visibleKeys[apiKey.id] ? apiKey.key : `${apiKey.key.substring(0, 12)}...`}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleKeyVisibility(apiKey.id)}
                      className="h-8 w-8"
                    >
                      {visibleKeys[apiKey.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleCopyKey(apiKey.key)} className="h-8 w-8">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Created: {apiKey.createdAt.toLocaleDateString()}
                    {apiKey.lastUsed && ` • Last used: ${apiKey.lastUsed.toLocaleDateString()}`}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <RefreshCw className="mr-2 h-3 w-3" />
                    Rotate
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 text-red-500 hover:text-red-600">
                        <Trash2 className="mr-2 h-3 w-3" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="backdrop-blur-md bg-white/70 border border-white/40">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete API Key</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this API key? This action cannot be undone and any
                          applications using this key will stop working.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteKey(apiKey.id)}
                          className="bg-red-500 text-white hover:bg-red-600"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}

            {apiKeys.length === 0 && (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white/50 p-8 text-center">
                <p className="mb-2 text-gray-500">You don't have any API keys yet</p>
                <Button onClick={() => setIsDialogOpen(true)} className="mt-2 bg-primary hover:bg-purple-700">
                  <Plus className="mr-2 h-4 w-4" /> Create Your First API Key
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
        <CardHeader>
          <CardTitle>API Key Usage</CardTitle>
          <CardDescription>Information about your API key usage and limits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">Monthly Usage</span>
                <span className="text-sm text-gray-500">8,532 / 10,000 requests</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-primary" style={{ width: "85.32%" }}></div>
              </div>
            </div>

            <div className="rounded-lg bg-white/70 p-4">
              <h3 className="mb-2 font-medium">Rate Limits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Requests per minute</span>
                  <span className="font-mono">60</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Requests per day</span>
                  <span className="font-mono">10,000</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Requests per month</span>
                  <span className="font-mono">300,000</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center">
        <p className="mb-4 text-gray-600">
          Need help integrating with our API? Check out our comprehensive documentation.
        </p>
        <Link href="/docs/api">
          <Button variant="outline" className="bg-white/50 border-white/40">
            <FileText className="mr-2 h-4 w-4" />
            View API Documentation
          </Button>
        </Link>
      </div>
    </div>
  )
}
