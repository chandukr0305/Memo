"use client"
import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import AOS from "aos";  // Import AOS

import { Button } from "@/components/ui/button"

// Initialize AOS
import { useEffect } from "react";

export default function TimelinePage() {
  // Sample timeline events
  const timelineEvents = [
    {
      id: 1,
      date: "May 11, 2024",
      title: "Patna Zoo",
      description: "We started our journey to Patna, excited about the trip and the adventures that awaited us. The anticipation was real as we packed our bags and set off together.",
      image: "/Patna/7.jpg",
    },
    {
      id: 2,
      date: "November 29, 2025",
      title: "When we meet",
      description:
        "A From my side led to a long period of silence. We had a fight that kept us apart, and emotions were running high. But deep down, I knew we would work things out..",
      image: "/kolkata/29.jpg",
    },
    {
      id: 3,
      date: "January 5, 2025",
      title: "Birthday Suprise",
      description:
        "I decided to surprise my girlfriend for her birthday by taking her to Kolkata, her favorite city. I booked the tickets, planned the activities, and kept it all a secret.",
      image: "birthday/2.jpg",
    },
    {
      id: 4,
      date: "October 9, 2024",
      title: "Dandiya Nights",
      description:
        "The night we were eagerly waiting for had arrived. We got dressed in our traditional attire, ready to twirl and dance through the night. The excitement in the air was palpable as we geared up for the festivities",
      image: "Dandiya/12.jpg",
    },
    
  ]

  // Initialize AOS on page load
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-out', // Easing effect
      once: true, // Animation only happens once
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
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
              width="24"
              height="24"
              viewBox="0 0 24 24"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-background dark:from-rose-950/20 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Journey Together</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A timeline of our relationship, from the very beginning to now.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 -ml-0.5 w-0.5 bg-rose-200 dark:bg-rose-800" />

              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}
                    data-aos="fade-up" // AOS animation on scroll
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-500 border-4 border-white dark:border-background" />

                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                      <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-rose-100 dark:bg-rose-900/30 px-3 py-1 text-sm text-rose-800 dark:text-rose-300">
                          {event.date}
                        </div>
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          width={450} // Decreased image width
                          height={250} // Decreased image height
                          alt={event.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add more button */}
              <div className="mt-16 flex justify-center">
                <Button variant="outline">Load More Memories</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-rose-500" />
            <span className="text-lg font-semibold">OurMemories</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Created with love for all our special moments together.
          </p>
          <div className="md:ml-auto flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
