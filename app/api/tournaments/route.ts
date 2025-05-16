import { NextResponse } from "next/server"

export async function GET() {
  try {
    // In a real application, you would fetch this data from a database
    const tournaments = [
      {
        id: 1,
        title: "Mumbai Mayhem",
        prize: "₹5,00,000",
        date: "June 15-20, 2025",
        location: "Mumbai",
        teams: "64",
        image: "/placeholder.svg?height=200&width=400",
        registrationOpen: true,
      },
      {
        id: 2,
        title: "Effortless Cup Season 3",
        prize: "₹10,00,000",
        date: "July 10-25, 2025",
        location: "Mumbai",
        teams: "128",
        image: "/placeholder.svg?height=200&width=400",
        registrationOpen: true,
      },
      {
        id: 3,
        title: "BGMI Pro League",
        prize: "₹3,00,000",
        date: "August 5-10, 2025",
        location: "Online",
        teams: "32",
        image: "/placeholder.svg?height=200&width=400",
        registrationOpen: false,
      },
    ]

    return NextResponse.json({ tournaments })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch tournaments" }, { status: 500 })
  }
}
