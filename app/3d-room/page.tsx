"use client";

import Link from "next/link"
import { Heart, Camera, Info, Plus, ChevronLeft, ChevronRight, Maximize } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ThreeDRoomPage() {
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
            <Link href="/ai-diary" className="text-sm font-medium transition-colors hover:text-primary">
              AI Diary
            </Link>
            <Link href="/memory-vault" className="text-sm font-medium transition-colors hover:text-primary">
              Memory Vault
            </Link>
            <Link href="/3d-room" className="text-sm font-medium transition-colors hover:text-primary">
              3D Room
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">3D Memory Room 🏡</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore your relationship memories in an interactive 3D space.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <Tabs defaultValue="living-room" className="w-full">
                <div className="flex justify-center mb-6">
                  <TabsList>
                    <TabsTrigger value="living-room">Living Room</TabsTrigger>
                    <TabsTrigger value="bedroom">Bedroom</TabsTrigger>
                    <TabsTrigger value="garden">Garden</TabsTrigger>
                    <TabsTrigger value="travel-map">Travel Map</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="living-room" className="mt-0">
                  <div className="relative w-full h-[600px] bg-muted rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&text=3D+Living+Room')] bg-cover bg-center">
                      {/* Interactive elements would be positioned here */}
                      <div className="absolute top-[30%] left-[25%] group">
                        <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none cursor-pointer">
                          <Info className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-sm font-medium">First Date Photo</div>
                          <div className="text-xs text-muted-foreground mb-2">April 15, 2022</div>
                          <div className="w-full h-32 bg-muted rounded-md mb-2 overflow-hidden">
                            <div className="w-full h-full bg-[url('/placeholder.svg?height=128&width=240&text=First+Date')] bg-cover bg-center"></div>
                          </div>
                          <p className="text-xs">
                            Our first date at that Italian restaurant downtown. You wore that blue dress I love.
                          </p>
                        </div>
                      </div>

                      <div className="absolute top-[40%] left-[60%] group">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none cursor-pointer">
                          <Info className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-sm font-medium">Concert Tickets</div>
                          <div className="text-xs text-muted-foreground mb-2">July 10, 2022</div>
                          <div className="w-full h-32 bg-muted rounded-md mb-2 overflow-hidden">
                            <div className="w-full h-full bg-[url('/placeholder.svg?height=128&width=240&text=Concert')] bg-cover bg-center"></div>
                          </div>
                          <p className="text-xs">Tickets from our favorite band's concert. We danced all night!</p>
                        </div>
                      </div>

                      <div className="absolute top-[60%] left-[40%] group">
                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none cursor-pointer">
                          <Info className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-sm font-medium">Love Letter</div>
                          <div className="text-xs text-muted-foreground mb-2">Valentine's Day 2023</div>
                          <div className="w-full h-32 bg-muted rounded-md mb-2 overflow-hidden">
                            <div className="w-full h-full bg-[url('/placeholder.svg?height=128&width=240&text=Love+Letter')] bg-cover bg-center"></div>
                          </div>
                          <p className="text-xs">
                            The handwritten letter you gave me on our first Valentine's Day together.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Maximize className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Add Memory Button */}
                    <Button className="absolute top-4 right-4 bg-rose-500 hover:bg-rose-600">
                      <Plus className="h-4 w-4 mr-2" /> Add Memory
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="bedroom" className="mt-0">
                  <div className="relative w-full h-[600px] bg-muted rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&text=3D+Bedroom')] bg-cover bg-center">
                      {/* Interactive elements would be positioned here */}
                      <div className="absolute top-[20%] left-[30%] group">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none cursor-pointer">
                          <Info className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-sm font-medium">Anniversary Gift</div>
                          <div className="text-xs text-muted-foreground mb-2">February 14, 2023</div>
                          <div className="w-full h-32 bg-muted rounded-md mb-2 overflow-hidden">
                            <div className="w-full h-full bg-[url('/placeholder.svg?height=128&width=240&text=Anniversary+Gift')] bg-cover bg-center"></div>
                          </div>
                          <p className="text-xs">The watch you gave me for our anniversary. I wear it every day.</p>
                        </div>
                      </div>

                      <div className="absolute top-[50%] left-[70%] group">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none cursor-pointer">
                          <Info className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-sm font-medium">Bedside Photo</div>
                          <div className="text-xs text-muted-foreground mb-2">August 5, 2023</div>
                          <div className="w-full h-32 bg-muted rounded-md mb-2 overflow-hidden">
                            <div className="w-full h-full bg-[url('/placeholder.svg?height=128&width=240&text=Bedside+Photo')] bg-cover bg-center"></div>
                          </div>
                          <p className="text-xs">
                            Our favorite photo from the beach trip last summer. I keep it by my bed to see your smile
                            every morning.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Maximize className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Add Memory Button */}
                    <Button className="absolute top-4 right-4 bg-rose-500 hover:bg-rose-600">
                      <Plus className="h-4 w-4 mr-2" /> Add Memory
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="garden" className="mt-0">
                  <div className="relative w-full h-[600px] bg-muted rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&text=3D+Garden')] bg-cover bg-center">
                      {/* Interactive elements would be positioned here */}
                      <div className="absolute top-[35%] left-[45%] group">
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none cursor-pointer">
                          <Info className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-sm font-medium">Picnic Date</div>
                          <div className="text-xs text-muted-foreground mb-2">May 20, 2023</div>
                          <div className="w-full h-32 bg-muted rounded-md mb-2 overflow-hidden">
                            <div className="w-full h-full bg-[url('/placeholder.svg?height=128&width=240&text=Picnic+Date')] bg-cover bg-center"></div>
                          </div>
                          <p className="text-xs">
                            Our spontaneous picnic in the park. You brought your homemade sandwiches and we watched the
                            sunset.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Maximize className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Add Memory Button */}
                    <Button className="absolute top-4 right-4 bg-rose-500 hover:bg-rose-600">
                      <Plus className="h-4 w-4 mr-2" /> Add Memory
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="travel-map" className="mt-0">
                  <div className="relative w-full h-[600px] bg-muted rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&text=3D+Travel+Map')] bg-cover bg-center">
                      {/* Interactive elements would be positioned here */}
                      <div className="absolute top-[30%] left-[25%] group">
                        <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none cursor-pointer">
                          <Info className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-sm font-medium">Paris Trip</div>
                          <div className="text-xs text-muted-foreground mb-2">April 2023</div>
                          <div className="w-full h-32 bg-muted rounded-md mb-2 overflow-hidden">
                            <div className="w-full h-full bg-[url('/placeholder.svg?height=128&width=240&text=Paris')] bg-cover bg-center"></div>
                          </div>
                          <p className="text-xs">
                            Our first international trip together. The Eiffel Tower was even more beautiful with you by
                            my side.
                          </p>
                        </div>
                      </div>

                      <div className="absolute top-[45%] left-[60%] group">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none cursor-pointer">
                          <Info className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-sm font-medium">Beach Vacation</div>
                          <div className="text-xs text-muted-foreground mb-2">July 2023</div>
                          <div className="w-full h-32 bg-muted rounded-md mb-2 overflow-hidden">
                            <div className="w-full h-full bg-[url('/placeholder.svg?height=128&width=240&text=Beach')] bg-cover bg-center"></div>
                          </div>
                          <p className="text-xs">
                            A week of sun, sand, and unforgettable moments. Remember when we tried surfing for the first
                            time?
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Maximize className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Add Memory Button */}
                    <Button className="absolute top-4 right-4 bg-rose-500 hover:bg-rose-600">
                      <Plus className="h-4 w-4 mr-2" /> Add Memory
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                  <CardDescription>Explore your 3D memory space</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-300">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Navigate the Room</p>
                        <p className="text-sm text-muted-foreground">
                          Use the arrow controls to move around the 3D space and explore different angles.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-300">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Interact with Memories</p>
                        <p className="text-sm text-muted-foreground">
                          Hover over the colored dots to reveal photos, notes, and other memories.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-300">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Add New Memories</p>
                        <p className="text-sm text-muted-foreground">
                          Click the "Add Memory" button to place new photos, notes, or mementos in the room.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-300">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Switch Rooms</p>
                        <p className="text-sm text-muted-foreground">
                          Use the tabs to switch between different themed rooms for various types of memories.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recently Added</CardTitle>
                  <CardDescription>Latest memories added to your 3D space</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Concert Tickets",
                        date: "Added 2 days ago",
                        room: "Living Room",
                        image: "/placeholder.svg?height=60&width=60&text=Tickets",
                      },
                      {
                        title: "Beach Vacation Photo",
                        date: "Added 1 week ago",
                        room: "Travel Map",
                        image: "/placeholder.svg?height=60&width=60&text=Beach",
                      },
                      {
                        title: "Anniversary Gift",
                        date: "Added 2 weeks ago",
                        room: "Bedroom",
                        image: "/placeholder.svg?height=60&width=60&text=Gift",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden">
                          <div
                            className="w-full h-full bg-muted bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.image})` }}
                          ></div>
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium">{item.title}</p>
                          <div className="flex items-center gap-2">
                            <p className="text-xs text-muted-foreground">{item.date}</p>
                            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                            <p className="text-xs text-muted-foreground">{item.room}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Memories
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customize Your Space</CardTitle>
                  <CardDescription>Make your 3D memory room unique</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square rounded-md overflow-hidden cursor-pointer border-2 border-rose-500">
                        <div className="w-full h-full bg-[url('/placeholder.svg?height=80&width=80&text=Modern')] bg-cover bg-center"></div>
                      </div>
                      <div className="aspect-square rounded-md overflow-hidden cursor-pointer border">
                        <div className="w-full h-full bg-[url('/placeholder.svg?height=80&width=80&text=Cozy')] bg-cover bg-center"></div>
                      </div>
                      <div className="aspect-square rounded-md overflow-hidden cursor-pointer border">
                        <div className="w-full h-full bg-[url('/placeholder.svg?height=80&width=80&text=Vintage')] bg-cover bg-center"></div>
                      </div>
                      <div className="aspect-square rounded-md overflow-hidden cursor-pointer border">
                        <div className="w-full h-full bg-[url('/placeholder.svg?height=80&width=80&text=Beach')] bg-cover bg-center"></div>
                      </div>
                      <div className="aspect-square rounded-md overflow-hidden cursor-pointer border">
                        <div className="w-full h-full bg-[url('/placeholder.svg?height=80&width=80&text=Cabin')] bg-cover bg-center"></div>
                      </div>
                      <div className="aspect-square rounded-md overflow-hidden cursor-pointer border">
                        <div className="w-full h-full bg-[url('/placeholder.svg?height=80&width=80&text=Custom')] bg-cover bg-center"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Room Lighting</p>
                      <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-rose-500"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Memory Density</p>
                      <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-rose-500"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Background Music</p>
                      <select className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                        <option>Romantic Piano</option>
                        <option>Acoustic Guitar</option>
                        <option>Soft Jazz</option>
                        <option>None</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-rose-500 hover:bg-rose-600">Apply Changes</Button>
                </CardFooter>
              </Card>
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

