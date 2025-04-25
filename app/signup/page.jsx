"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // For redirecting

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(""); // To store any errors
  const router = useRouter(); // For redirecting after successful signup

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup form data:", form);
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form), // Form data has 'email'
    });
  
    if (res.ok) {
      alert('User created successfully');
    } else {
      const errorData = await res.json();
      alert(errorData.message || "Something went wrong!");
    }
  };
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardContent>
          <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
