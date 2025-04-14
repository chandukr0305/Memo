import Link from "next/link"
import Image from "next/image"
import { Heart, MapPin, Calendar, Camera } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function MapPage() {
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
            <Link href="/map" className="text-sm font-medium transition-colors hover:text-primary">
              Our Map
            </Link>
            <Link href="/love-letters" className="text-sm font-medium transition-colors hover:text-primary">
              Love Letters
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Add Location
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Adventures Map 🗺️</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore all the places we've visited together and the memories we've created around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex justify-end mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-rose-500 hover:bg-rose-600">
                    <MapPin className="mr-2 h-4 w-4" /> Add New Location
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Add a New Location</DialogTitle>
                    <DialogDescription>
                      Mark a place you've visited together and add photos and memories.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="location">Location Name</Label>
                      <Input id="location" placeholder="e.g., Paris, France" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="date">Visit Date</Label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>
                        <select
                          id="category"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="vacation">Vacation</option>
                          <option value="date">Date Night</option>
                          <option value="adventure">Adventure</option>
                          <option value="special">Special Occasion</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Memory Description</Label>
                      <Textarea
                        id="description"
                        placeholder="What made this place special?"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>Add Photos</Label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Camera className="w-8 h-8 mb-3 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF</p>
                          </div>
                          <input id="dropzone-file" type="file" className="hidden" multiple />
                        </label>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-rose-500 hover:bg-rose-600">Add to Map</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="relative w-full h-[600px] rounded-xl overflow-hidden mb-8 bg-muted">
              {/* This would be replaced with an actual map component */}
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&text=Interactive+Map')] bg-cover bg-center">
                {/* Map pins would be positioned absolutely here */}
                <div className="absolute top-[30%] left-[25%] group">
                  <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-sm font-medium">Paris, France</div>
                    <div className="text-xs text-muted-foreground">April 2023</div>
                  </div>
                </div>

                <div className="absolute top-[45%] left-[60%] group">
                  <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-sm font-medium">Santorini, Greece</div>
                    <div className="text-xs text-muted-foreground">July 2023</div>
                  </div>
                </div>

                <div className="absolute top-[20%] left-[75%] group">
                  <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-sm font-medium">Tokyo, Japan</div>
                    <div className="text-xs text-muted-foreground">October 2022</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 1,
                  location: "Paris, France",
                  date: "April 15-22, 2023",
                  description:
                    "Our first international trip together. We visited the Eiffel Tower, explored the Louvre, and had romantic dinners along the Seine.",
                  image: "/placeholder.svg?height=300&width=400&text=Paris",
                },
                {
                  id: 2,
                  location: "Santorini, Greece",
                  date: "July 5-12, 2023",
                  description:
                    "The most beautiful sunsets we've ever seen. We stayed in a cliffside villa, explored the white-washed villages, and swam in the crystal clear waters.",
                  image: "/placeholder.svg?height=300&width=400&text=Santorini",
                },
                {
                  id: 3,
                  location: "Tokyo, Japan",
                  date: "October 10-20, 2022",
                  description:
                    "An amazing cultural experience. We explored ancient temples, tried incredible food, and got lost in the bustling streets of Shibuya.",
                  image: "/placeholder.svg?height=300&width=400&text=Tokyo",
                },
                {
                  id: 4,
                  location: "New York City, USA",
                  date: "December 23-30, 2022",
                  description:
                    "Christmas in the Big Apple. We ice skated in Central Park, saw a Broadway show, and watched the ball drop on New Year's Eve.",
                  image: "/placeholder.svg?height=300&width=400&text=New+York",
                },
                {
                  id: 5,
                  location: "Bali, Indonesia",
                  date: "February 1-10, 2023",
                  description:
                    "A tropical paradise. We explored rice terraces, visited ancient temples, and relaxed on beautiful beaches.",
                  image: "/placeholder.svg?height=300&width=400&text=Bali",
                },
                {
                  id: 6,
                  location: "Barcelona, Spain",
                  date: "May 15-22, 2023",
                  description:
                    "A city full of art and architecture. We marveled at Gaudi's works, strolled down Las Ramblas, and enjoyed delicious tapas.",
                  image: "/placeholder.svg?height=300&width=400&text=Barcelona",
                },
              ].map((place) => (
                <Card key={place.id} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={place.image || "/placeholder.svg"}
                      width={400}
                      height={300}
                      alt={place.location}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-rose-500" />
                      {place.location}
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {place.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3">{place.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
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

