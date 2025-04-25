import connectMongo from "@/lib/mongodb";
import Item from "@/models/Item";
import mongoose, { mongo } from "mongoose";

export async function POST(request) {
    try {
        // Extract data from the request body
        const { name, email, password } = await request.json();

        // Connect to MongoDB
        await connectMongo();

        // Check if user already exists
        const existingUser = await Item.findOne({ email });
        if (existingUser) {
            return new Response(
                JSON.stringify({ message: "User already exists" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        // Create a new user and save it
        const user = new Item({ name, email, password });
        await user.save();

        // Send success response
        return new Response(
            JSON.stringify({ message: "User created successfully" }),
            {
                status: 201,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (err) {
        console.error("Error during signup", err);
        // Send error response
        return new Response(
            JSON.stringify({ message: "Error during signup" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}



export async function GET() {
  await connectMongo();

  const db = mongoose.connection.db; // 👈 correct way to get native db
  const collection = db.collection("products");
  const data = await collection.find({}).toArray();

  return Response.json(data);
}
