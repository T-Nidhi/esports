import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(); // uses db name from URI

    const player = await request.json();

    // Validate player data (optional)
    if (!player.name || !player.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const result = await db.collection("players").insertOne(player);

    return NextResponse.json({ message: "Player added", id: result.insertedId });
  } catch (error) {
    console.error("API Route DB error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
