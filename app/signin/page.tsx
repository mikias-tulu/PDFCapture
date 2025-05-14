import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignIn() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md">
          <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-8 shadow-xl">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
              <p className="mt-2 text-gray-600">Sign in to your account to continue</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="bg-white/50 border-white/40"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm font-medium text-primary hover:text-purple-500">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="bg-white/50 border-white/40"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-purple-700">
                Sign In
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white/30 px-2 text-gray-600">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="bg-white/50 border-white/40">
                  Google
                </Button>
                <Button variant="outline" className="bg-white/50 border-white/40">
                  GitHub
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-medium text-primary hover:text-purple-500">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
