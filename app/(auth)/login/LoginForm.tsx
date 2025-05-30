"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");

    if (!email || !password || !role) {
      setLoading(false);
      return toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Email, Password, and Role are required",
      });
    }

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        role,
      });

      if (result?.error) {
        return toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Invalid email, password, or role",
        });
      } else {
        toast({
          title: "Login Successful",
          description: "Redirecting to your dashboard...",
        });
        // Redirect based on role
        if (role === "admin") {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error occurred.",
        description: "An error occurred while processing your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0e100f] flex items-center justify-center px-4">
      <div className="bg-[#1a1c1a] w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back</h2>
        <p className="text-sm text-gray-400 text-center mb-8">Login to access your dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              disabled={loading}
              className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              required
              disabled={loading}
              className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-gray-300">Role</Label>
            <select
              id="role"
              name="role"
              required
              disabled={loading}
              className="bg-[#2b2e2b] text-white border-[#2b2e2b] rounded-lg w-full py-2 px-3 focus-visible:ring-yellow-600"
              defaultValue=""
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="user01">User</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-semibold rounded-lg"
          >
            {loading ? (
              <Loader className="animate-spin mr-2 h-4 w-4" />
            ) : "Login"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link href="/register" className="text-yellow-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;