"use client";

import { Calendar, Heart } from "lucide-react"; // Add Calendar import
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define categories and corresponding folder paths
const categories = [
  { name: "All", path: "" },
  { name: "Birthday", path: "birthday" },
  { name: "Dandiya Nights", path: "Dandiya" },
  { name: "Kolkata Memories", path: "kolkata" },
  { name: "Diwali", path: "Diwali" },
  { name: "saree", path: "saree" },
  { name: "Together", path: "Together" },
  { name: "Patna", path: "Patna" },
];

// Manually list images (or fetch dynamically from a database/storage in a real-world app)
const images = {
  birthday: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"],
  Dandiya: ["11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"],
  kolkata: ["23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg", "57.jpg", "58.jpg", "59.jpg", "60.jpg", "61.jpg", "62.jpg", "63.jpg", "64.jpg", "65.jpg", "66.jpg"],
  Together: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg"],
  saree: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg"],
  Patna: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg"],
  Diwali: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"],
}

// Function to generate image objects
const generateImages = (folder: string, filenames: string[]) =>
  filenames.map((file, index) => ({
    id: `${folder}-${index + 1}`,
    src: `/${folder}/${file}`,
    alt: `${folder} ${index + 1}`,
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
    category: folder,
  }))

// Aggregate all images
const allImages = [
  ...generateImages("birthday", images.birthday),
  ...generateImages("Dandiya", images.Dandiya),
  ...generateImages("kolkata", images.kolkata),
  ...generateImages("Together", images.Together),
  ...generateImages("saree", images.saree),
  ...generateImages("Patna", images.Patna),
  ...generateImages("Diwali", images.Diwali),
]

export default function GalleryPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation will only trigger once
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-semibold">OurMemories</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">Home</Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-primary">Gallery</Link>
            <Link href="/timeline" className="text-sm font-medium hover:text-primary">Timeline</Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">Add Memory</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-rose-50 to-background">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold sm:text-5xl">Our Photo Gallery</h1>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Browse through our collection of beautiful memories and special moments.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  {categories.map(({ name }) => (
                    <TabsTrigger key={name} value={name}>{name}</TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map(({ name, path }) => (
                <TabsContent key={name} value={name}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {(name === "All" ? allImages : allImages.filter((img) => img.category === path)).map((image) => (
                      <div
                        key={image.id}
                        className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      >
                        <div className="aspect-square overflow-hidden">
                          <Image
                            src={image.src}
                            width={400}
                            height={400}
                            alt={image.alt}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                          <h3 className="font-medium">{name}</h3>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>{image.date.toLocaleDateString()}</span>
                          </div>
                        </div>
                        <button className="absolute top-2 right-2 rounded-full bg-white/80 p-1.5 text-rose-500 opacity-0 transition-opacity group-hover:opacity-100">
                          <Heart className="h-5 w-5" />
                          <span className="sr-only">Favorite</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-12 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
