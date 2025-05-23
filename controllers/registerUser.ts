"use server";

import { connectToDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import User from "@/models/User";
import { z } from "zod";

// Zod schema for server-side validation
const RegisterSchema = z.object({
  username: z.string().min(2, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().min(6, "Phone number is required"),
  country: z.string().min(2, "Country is required"),
  state: z.string().min(2, "State is required"),
  city: z.string().min(2, "City is required"),
  role: z.string().optional(),
});

type RegisterInput = z.infer<typeof RegisterSchema>;

export async function registerUser(input: RegisterInput) {
  try {
    // Validate input using zod
    const { username, email, password, phone, country, state, city, role } = RegisterSchema.parse(input);

    await connectToDB();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userID = uuidv4();

    // Default role if not provided
    const userRole = role || "user01";

    // Create a new user
    const newUser = new User({
      userID,
      username,
      email,
      password: hashedPassword,
      phone,
      country,
      state,
      city,
      isVerified: false,
      role: userRole,
    });

    await newUser.save();

    return {
      success: true,
      message: "User created successfully",
    };
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0]?.message || "Validation error" };
    }
    console.error("Error registering user:", error);
    return { success: false, message: "Error creating user" };
  }
}