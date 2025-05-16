import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    // Parse incoming JSON data from the request body
    const data = await request.json();
    console.log("Incoming registration data:", data);

    // Connect to MongoDB using the client
    const client = await clientPromise;

    // Use your actual database name here
    const db = client.db("effortless_data"); // 

    // Insert the data into the 'registrations' collection
    const result = await db.collection("registrations").insertOne(data);

    console.log("Inserted document ID:", result.insertedId);

    // Send success response
    return NextResponse.json({ message: "Registration successful", id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Error inserting registration:", error);

    // Send error response
    return NextResponse.json({ error: "Failed to register team" }, { status: 500 });
  }
}
