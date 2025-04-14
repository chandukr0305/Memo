import Link from "next/link"
import Image from "next/image"
import { Heart, Music, Play, Pause, SkipForward, SkipBack, Plus } from "lucide-react"

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MusicPage() {
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
            <Link href="/map" className="text-sm font-medium transition-colors hover:text-primary">
              Our Map
            </Link>
            <Link href="/music" className="text-sm font-medium transition-colors hover:text-primary">
              Music
            </Link>
            <Link href="/games" className="text-sm font-medium transition-colors hover:text-primary">
              Fun & Games
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Add Playlist
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Music 🎶</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Songs that tell our story and bring back special memories.
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
                    <Plus className="mr-2 h-4 w-4" /> Add New Playlist
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Create a New Playlist</DialogTitle>
                    <DialogDescription>
                      Create a playlist of songs that remind you of special moments together.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="playlist-name">Playlist Name</Label>
                      <Input id="playlist-name" placeholder="e.g., Our First Year Together" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="What makes these songs special?"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>Playlist Type</Label>
                      <div className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="spotify" name="playlist-type" className="h-4 w-4 text-rose-500" />
                          <Label htmlFor="spotify">Spotify</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="youtube" name="playlist-type" className="h-4 w-4 text-rose-500" />
                          <Label htmlFor="youtube">YouTube</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="custom" name="playlist-type" className="h-4 w-4 text-rose-500" />
                          <Label htmlFor="custom">Custom List</Label>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="playlist-url">Playlist URL</Label>
                      <Input id="playlist-url" placeholder="Paste Spotify or YouTube playlist link" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Cover Image</Label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="cover-image"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Music className="w-8 h-8 mb-3 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF</p>
                          </div>
                          <input id="cover-image" type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-rose-500 hover:bg-rose-600">Create Playlist</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Tabs defaultValue="playlists" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="playlists">Our Playlists</TabsTrigger>
                  <TabsTrigger value="songs">Special Songs</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="playlists" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "Our First Year Together",
                      description: "Songs from our first dates, road trips, and special moments during our first year.",
                      songs: 15,
                      image: "/placeholder.svg?height=300&width=300&text=Playlist+1",
                      type: "Spotify",
                    },
                    {
                      id: 2,
                      title: "Road Trip Memories",
                      description: "The soundtrack to all our adventures on the road.",
                      songs: 22,
                      image: "/placeholder.svg?height=300&width=300&text=Playlist+2",
                      type: "YouTube",
                    },
                    {
                      id: 3,
                      title: "Date Night Vibes",
                      description: "Romantic songs for our special evenings together.",
                      songs: 18,
                      image: "/placeholder.svg?height=300&width=300&text=Playlist+3",
                      type: "Spotify",
                    },
                    {
                      id: 4,
                      title: "Summer Memories",
                      description: "Songs that remind us of beach days, barbecues, and summer adventures.",
                      songs: 12,
                      image: "/placeholder.svg?height=300&width=300&text=Playlist+4",
                      type: "Custom",
                    },
                  ].map((playlist) => (
                    <Card key={playlist.id} className="overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={playlist.image || "/placeholder.svg"}
                          width={300}
                          height={300}
                          alt={playlist.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{playlist.title}</CardTitle>
                          <div className="px-2 py-1 text-xs rounded-full bg-muted">{playlist.type}</div>
                        </div>
                        <CardDescription>{playlist.songs} songs</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-muted-foreground">{playlist.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <Play className="h-4 w-4 mr-2" />
                          Play
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 p-6 border rounded-lg bg-card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <Image
                        src="/placeholder.svg?height=300&width=300&text=Now+Playing"
                        width={300}
                        height={300}
                        alt="Now Playing"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Now Playing</h3>
                        <p className="text-xl mb-1">Perfect</p>
                        <p className="text-muted-foreground">Ed Sheeran</p>
                        <p className="mt-4 text-muted-foreground">
                          "This was playing during our first dance together at Sarah's birthday party."
                        </p>
                      </div>
                      <div className="mt-6">
                        <div className="w-full bg-muted h-1 rounded-full mb-2">
                          <div className="bg-rose-500 h-1 rounded-full w-1/3"></div>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground mb-4">
                          <span>1:23</span>
                          <span>4:39</span>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                          <Button variant="outline" size="icon" className="rounded-full">
                            <SkipBack className="h-4 w-4" />
                          </Button>
                          <Button size="icon" className="rounded-full h-12 w-12 bg-rose-500 hover:bg-rose-600">
                            <Pause className="h-6 w-6" />
                          </Button>
                          <Button variant="outline" size="icon" className="rounded-full">
                            <SkipForward className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="songs" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      id: 1,
                      title: "Perfect",
                      artist: "Ed Sheeran",
                      memory: "Our first dance together",
                      date: "June 15, 2022",
                      image: "/placeholder.svg?height=200&width=200&text=Song+1",
                    },
                    {
                      id: 2,
                      title: "Thinking Out Loud",
                      artist: "Ed Sheeran",
                      memory: "Road trip to the beach",
                      date: "July 22, 2022",
                      image: "/placeholder.svg?height=200&width=200&text=Song+2",
                    },
                    {
                      id: 3,
                      title: "All of Me",
                      artist: "John Legend",
                      memory: "Our anniversary dinner",
                      date: "February 14, 2023",
                      image: "/placeholder.svg?height=200&width=200&text=Song+3",
                    },
                    {
                      id: 4,
                      title: "Can't Help Falling in Love",
                      artist: "Elvis Presley",
                      memory: "Slow dancing in the kitchen",
                      date: "April 5, 2023",
                      image: "/placeholder.svg?height=200&width=200&text=Song+4",
                    },
                    {
                      id: 5,
                      title: "A Thousand Years",
                      artist: "Christina Perri",
                      memory: "Watching the sunset on vacation",
                      date: "August 10, 2023",
                      image: "/placeholder.svg?height=200&width=200&text=Song+5",
                    },
                    {
                      id: 6,
                      title: "Just the Way You Are",
                      artist: "Bruno Mars",
                      memory: "Surprise birthday party",
                      date: "September 20, 2023",
                      image: "/placeholder.svg?height=200&width=200&text=Song+6",
                    },
                    {
                      id: 7,
                      title: "Photograph",
                      artist: "Ed Sheeran",
                      memory: "Looking through old photos together",
                      date: "October 15, 2023",
                      image: "/placeholder.svg?height=200&width=200&text=Song+7",
                    },
                    {
                      id: 8,
                      title: "Add New Song",
                      isTemplate: true,
                      image: "/placeholder.svg?height=200&width=200&text=Add+Song",
                    },
                  ].map((song) => (
                    <Card key={song.id} className={`overflow-hidden ${song.isTemplate ? "border-dashed" : ""}`}>
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={song.image || "/placeholder.svg"}
                          width={200}
                          height={200}
                          alt={song.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="pt-4">
                        {song.isTemplate ? (
                          <div className="flex flex-col items-center justify-center text-center">
                            <Plus className="h-8 w-8 mb-2 text-muted-foreground" />
                            <p className="font-medium">Add Special Song</p>
                          </div>
                        ) : (
                          <>
                            <h3 className="font-bold truncate">{song.title}</h3>
                            <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                            {song.memory && (
                              <div className="mt-2">
                                <p className="text-xs text-muted-foreground line-clamp-2">Memory: {song.memory}</p>
                                <p className="text-xs text-muted-foreground mt-1">{song.date}</p>
                              </div>
                            )}
                          </>
                        )}
                      </CardContent>
                      <CardFooter>
                        {song.isTemplate ? (
                          <Button className="w-full bg-rose-500 hover:bg-rose-600">Add Song</Button>
                        ) : (
                          <Button variant="ghost" size="sm" className="w-full">
                            <Play className="h-4 w-4 mr-2" />
                            Play
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
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

