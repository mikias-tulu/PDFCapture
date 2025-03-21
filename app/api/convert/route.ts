import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url, pageSize = "A4", orientation = "portrait", scale = 1 } = body

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/convert`

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      body: JSON.stringify({
        url,
        pageSize,
        orientation,
        scale,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      return NextResponse.json(
        { error: errorData?.message || "Failed to convert URL to PDF" },
        { status: response.status },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in convert API route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
