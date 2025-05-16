import { NextResponse } from "next/server"

export async function GET() {
  try {
    // In a real application, you would fetch this data from a database
    const events = [
      {
        id: 1,
        title: "BGMI Community Meetup",
        date: "May 28, 2025",
        location: "Café Gaming, Mumbai",
        description:
          "Join us for a casual meetup with fellow BGMI enthusiasts. Meet pro players, participate in mini-tournaments, and network with the community.",
        image: "/placeholder.svg?height=250&width=500",
      },
      {
        id: 2,
        title: "Effortless Gaming Festival",
        date: "June 5-6, 2025",
        location: "Exhibition Center, Mumbai",
        description:
          "A two-day gaming extravaganza featuring BGMI tournaments, cosplay competitions, gaming merchandise, and special guest appearances.",
        image: "/placeholder.svg?height=250&width=500",
      },
    ]

    return NextResponse.json({ events })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch events" }, { status: 500 })
  }
}
