//auth.ts
import NextAuth, { type AuthOptions, type SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { connectToDB } from "./lib/connectDB";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        try {
          if (!credentials) throw new Error("Missing credentials");
          const email = credentials.email;
          const password = credentials.password;
          const role = credentials.role;

          if (!email || !password || !role) {
            throw new Error("All fields are required");
          }

          await connectToDB();

          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("No user found with that email");
          }
          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
            throw new Error("Invalid credentials");
          }
          // Role-based check
          if (role && user.role !== role) {
            throw new Error("Role mismatch");
          }
          // Return a minimal user object
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.username,
            role: user.role,
            userId: user.userID,
          };
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy, // Fix: explicitly type as SessionStrategy
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.userId = user.userId;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user = {
        id: token.id,
        email: token.email,
        username: token.name,
        role: token.role,
        userId: token.userId,
      };
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);