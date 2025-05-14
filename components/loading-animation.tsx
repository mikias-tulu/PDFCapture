"use client"

import { useEffect, useState } from "react"

export default function LoadingAnimation() {
  const [dots, setDots] = useState(".")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate the dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."))
    }, 500)

    // Simulate progress (this is just visual, not tied to actual conversion progress)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        // Randomly increase progress, but slow down as it gets closer to 90%
        const increment = Math.random() * (10 - prev / 10)
        return Math.min(prev + increment, 90)
      })
    }, 800)

    return () => {
      clearInterval(dotsInterval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className="mt-6 rounded-lg backdrop-blur-md bg-white/30 border border-white/40 p-6 shadow-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full border-4 border-purple-200 border-t-primary animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-lg font-semibold text-primary">{Math.round(progress)}%</div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-xl font-medium text-gray-900">Converting your URL to PDF{dots}</h3>
          <p className="mt-2 text-gray-600">This may take a few moments depending on the website content.</p>
        </div>

        <div className="mt-4 w-full max-w-md">
          <div className="h-2 w-full rounded-full bg-purple-100">
            <div
              className="h-2 rounded-full bg-primary transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          <ul className="flex flex-col gap-1">
            <li className="flex items-center">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
              Connecting to website...
            </li>
            <li className="flex items-center">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
              Capturing content...
            </li>
            <li className={`flex items-center ${progress > 40 ? "" : "opacity-50"}`}>
              <span
                className={`mr-2 inline-block h-2 w-2 rounded-full ${progress > 40 ? "bg-green-500" : "bg-gray-300"}`}
              ></span>
              Rendering PDF...
            </li>
            <li className={`flex items-center ${progress > 70 ? "" : "opacity-50"}`}>
              <span
                className={`mr-2 inline-block h-2 w-2 rounded-full ${progress > 70 ? "bg-green-500" : "bg-gray-300"}`}
              ></span>
              Finalizing document...
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
