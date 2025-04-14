"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const images = [
  "/Dandiya/12.jpg",
  "/birthday/10.jpg",
  "/kolkata/34.jpg",
  "/Together/7.jpg",
];

const memoryImages = [
  "/birthday/2.jpg",
  "/Dandiya/12.jpg",
  "/Together/2.jpg",
  "/Patna/20.jpg",
  "/Diwali/6.jpg",
  "/kolkata/34.jpg",
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  // Change the hero image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Initialize AOS when the component is mounted
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });

    // Refresh AOS when layout changes
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col animate-fadeIn">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-semibold">OurMemories</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="/timeline" className="text-sm font-medium transition-colors hover:text-primary">
              Timeline
            </Link>
            <Link href="/special-moments" className="text-sm font-medium transition-colors hover:text-primary">
              Special Moments
            </Link>
            <Link href="/future-plans" className="text-sm font-medium transition-colors hover:text-primary">
              Future Plans
            </Link>
          </nav>

          <Button variant="outline" size="sm" className="hidden md:flex">
            Add Memory
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with scroll animation */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-background dark:from-rose-950/20 dark:to-background"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4" data-aos="fade-left">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Our Beautiful Journey Together
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A collection of our most cherished moments, adventures, and memories that we've created together.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/gallery">
                    <Button className="bg-rose-500 hover:bg-rose-600" data-aos="zoom-in">
                      View Gallery
                    </Button>
                  </Link>
                  <Link href="/timeline">
                    <Button variant="outline" data-aos="zoom-in">
                      Our Timeline
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl relative" data-aos="fade-up">
                {/* Sliding images */}
                <div
                  className="absolute inset-0 flex transition-all duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                  {images.map((src, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full h-full"
                    >
                      <Image
                        src={src}
                        width={600}
                        height={400}
                        alt="Hero image of a couple"
                        className="h-full w-full object-contain rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:ring-4 hover:ring-rose-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Memories Section with enhanced AOS */}
        <section
          className="w-full py-12 md:py-24 lg:py-32"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-aos="fade-down">
                Featured Memories
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" data-aos="fade-up">
                Explore some of our most cherished moments together.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
              {memoryImages.map((image, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                  data-aos-delay={200 * i}
                >
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      width={300}
                      height={300}
                      alt={`Memory ${i + 1}`}
                      className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-rose-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <h3 className="font-medium">Special Moment {i + 1}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>June {i + 10}, 2023</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/gallery">
                <Button variant="outline" className="mt-4">
                  View All Memories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="w-full border-t bg-background py-6">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
            <span className="text-center text-sm text-muted-foreground">
              © 2025 OurMemories. All rights reserved.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
