import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Stoneridge Preparatory School</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          A college-preparatory school dedicated to academic excellence, emotional growth, and character development for grades 6–12.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button>Apply Now</Button>
          <Button variant="outline">Schedule a Tour</Button>
        </div>
      </section>
    </div>
  );
}