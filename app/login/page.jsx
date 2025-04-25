"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Login to SLV PG</h2>
          
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">Email</label>
              <Input type="email" placeholder="you@example.com" />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>

            <div className="text-right text-sm">
              <Link href="#" className="text-blue-600 hover:underline">Forgot password?</Link>
            </div>

            <Button type="submit" className="w-full">Login</Button>
          </form>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
