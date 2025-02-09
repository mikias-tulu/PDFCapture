"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for the graph
const generateMockData = (days: number) => {
  const data = []
  const now = new Date()

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    data.push({
      date: date.toISOString().split("T")[0],
      value: Math.floor(Math.random() * 100) + 20,
    })
  }

  return data
}

const dailyData = generateMockData(30)
const weeklyData = Array.from({ length: 12 }, (_, i) => {
  const weekStart = new Date()
  weekStart.setDate(weekStart.getDate() - i * 7)

  return {
    date: `Week ${12 - i}`,
    value: Math.floor(Math.random() * 500) + 100,
  }
})
const monthlyData = Array.from({ length: 12 }, (_, i) => {
  const date = new Date()
  date.setMonth(date.getMonth() - i)

  return {
    date: date.toLocaleString("default", { month: "short" }),
    value: Math.floor(Math.random() * 2000) + 500,
  }
})

export default function UsageGraph() {
  const [activeTab, setActiveTab] = useState("daily")
  const [maxValue, setMaxValue] = useState(0)
  const [data, setData] = useState(dailyData)

  useEffect(() => {
    switch (activeTab) {
      case "daily":
        setData(dailyData)
        break
      case "weekly":
        setData(weeklyData)
        break
      case "monthly":
        setData(monthlyData)
        break
    }
  }, [activeTab])

  useEffect(() => {
    setMaxValue(Math.max(...data.map((item) => item.value)) * 1.2)
  }, [data])

  return (
    <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">
      <CardHeader>
        <CardTitle>API Usage</CardTitle>
        <CardDescription>Track your API usage over time</CardDescription>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-2">
          <TabsList className="grid w-full grid-cols-3 bg-white/50">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <div className="flex h-full flex-col">
            <div className="flex flex-1 flex-col justify-between">
              {[0, 1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex items-center">
                  <span className="mr-2 text-xs text-gray-500">{Math.round(maxValue - i * (maxValue / 4))}</span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
              ))}
            </div>

            <div className="mt-4 flex h-[200px] items-end gap-2">
              {data.map((item, i) => (
                <div key={i} className="group relative flex flex-1 flex-col items-center">
                  <div
                    className="w-full bg-purple-500 rounded-t transition-all duration-300 group-hover:bg-primary"
                    style={{
                      height: `${(item.value / maxValue) * 100}%`,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="rounded bg-black/70 px-2 py-1 text-xs text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex gap-2">
              {data.map((item, i) => (
                <div key={i} className="flex-1 truncate text-center">
                  <span
                    className="text-xs text-gray-500"
                    style={{
                      writingMode: activeTab === "daily" ? "vertical-rl" : "horizontal-tb",
                      textOrientation: "mixed",
                      display: "inline-block",
                      maxHeight: "40px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
