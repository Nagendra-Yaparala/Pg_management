"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bolt, Wifi, Utensils, Droplets, Sparkles, ShieldCheck, Wand } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const Locations = ["Marathahalli", "Whitefield", "Electronic City", "Koramangala"];
  const facilities = [
    { icon: <Wifi className="w-6 h-6 text-blue-600" />, title: "High-Speed WiFi", desc: "Unlimited 5G Internet included." },
    { icon: <Utensils className="w-6 h-6 text-orange-500" />, title: "Daily Food", desc: "Breakfast & Dinner included." },
    { icon: <Droplets className="w-6 h-6 text-cyan-600" />, title: "24/7 Water & Power", desc: "Uninterrupted facilities." },
    { icon: <Sparkles className="w-6 h-6 text-violet-500" />, title: "Housekeeping", desc: "Daily room cleaning." },
    { icon: <ShieldCheck className="w-6 h-6 text-green-500" />, title: "Laundry", desc: "Weekly laundry service." },
    { icon: <Wand className="w-6 h-6 text-pink-600" />, title: "AC & Non-AC Rooms", desc: "Choose comfort wisely." },
  ];

  return (
    <main className="bg-gradient-to-br from-white via-slate-100 to-blue-50 text-gray-800">
      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-200 to-purple-200 shadow-inner">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          SLV PG Management
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Smart & hassle-free PG booking platform in Bangalore
        </p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow">
          Explore Now
        </Button>
      </section>

      {/* Facilities */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Facilities We Provide</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((fac, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="bg-white rounded-full p-3 shadow-inner">
                  {fac.icon}
                </div>
                <h3 className="text-xl font-semibold">{fac.title}</h3>
                <p className="text-sm text-gray-600">{fac.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Available Locations in Bangalore</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {Locations.map((loc, index) => (
            <span key={index} className="bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 rounded-sm">
              {loc}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-100 to-pink-100 text-center">
        <h3 className="text-3xl font-bold mb-4">Want to Join SLV PG?</h3>
        <p className="mb-6 text-gray-700">Login or Sign up to contact owners & book your room instantly.</p>
        <div className="flex justify-center gap-4">
        <Link href="/login">
  <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
    Login
  </Button>
</Link>
          <Button variant="outline">Signup</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} SLV PG Management. Crafted with ❤️ in Bangalore.
      </footer>
    </main>
  );
}
