import mongoose from "mongoose";

let connection: { isConnected?: number } = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      // Add options if needed, e.g. useNewUrlParser, useUnifiedTopology (not required in Mongoose 6+)
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB!");
  } catch (error: any) {
    console.error("Failed to connect to MongoDB:", error.message);
    throw new Error(error.message || "MongoDB connection error");
  }
};