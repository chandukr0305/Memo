import Link from "next/link"
import Image from "next/image"
import { Heart, Lock, Calendar, Key, Eye, EyeOff, Gift, Plus, Sparkles, Clock } from "lucide-react"

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

export default function MemoryVaultPage() {
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
            Add Secret
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Memory Vault 🔐</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A secure place for your special surprises and hidden memories.
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
                    <Plus className="mr-2 h-4 w-4" /> Create New Secret
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Create a New Secret</DialogTitle>
                    <DialogDescription>
                      Add a surprise message, gift, or memory that will be revealed on a special date.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="secret-title">Title</Label>
                      <Input id="secret-title" placeholder="Give your secret a name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="secret-type">Secret Type</Label>
                      <select
                        id="secret-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="message">Secret Message</option>
                        <option value="photo">Hidden Photo</option>
                        <option value="video">Surprise Video</option>
                        <option value="gift">Virtual Gift</option>
                        <option value="date">Date Plan</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="secret-content">Content</Label>
                      <Textarea
                        id="secret-content"
                        placeholder="Write your secret message or description..."
                        className="min-h-[150px]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="unlock-date">Unlock Date</Label>
                        <Input id="unlock-date" type="date" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="unlock-time">Unlock Time</Label>
                        <Input id="unlock-time" type="time" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="passcode">Custom Passcode (Optional)</Label>
                      <Input id="passcode" type="password" placeholder="Create a special passcode" />
                      <p className="text-xs text-muted-foreground">
                        If left empty, the secret will automatically unlock on the specified date.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <Label>Unlock Method</Label>
                      <div className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="date-unlock"
                            name="unlock-method"
                            className="h-4 w-4 text-rose-500"
                            checked
                          />
                          <Label htmlFor="date-unlock">Date Based</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="passcode-unlock"
                            name="unlock-method"
                            className="h-4 w-4 text-rose-500"
                          />
                          <Label htmlFor="passcode-unlock">Passcode Only</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="both-unlock" name="unlock-method" className="h-4 w-4 text-rose-500" />
                          <Label htmlFor="both-unlock">Both</Label>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label>Add Media (Optional)</Label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="secret-media"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Gift className="w-8 h-8 mb-3 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">Image, Video, or Audio</p>
                          </div>
                          <input id="secret-media" type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-rose-500 hover:bg-rose-600">Create Secret</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming Secrets</TabsTrigger>
                  <TabsTrigger value="unlocked">Unlocked Secrets</TabsTrigger>
                  <TabsTrigger value="created">Secrets You Created</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="upcoming" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "Anniversary Surprise",
                      type: "Secret Message",
                      from: "Alex",
                      unlockDate: "February 14, 2024",
                      daysLeft: 65,
                      hint: "A special message about our journey together",
                      image: "/placeholder.svg?height=200&width=300&text=Locked",
                    },
                    {
                      id: 2,
                      title: "Birthday Gift Reveal",
                      type: "Virtual Gift",
                      from: "Alex",
                      unlockDate: "April 5, 2024",
                      daysLeft: 116,
                      hint: "Something you've been wanting for a while",
                      image: "/placeholder.svg?height=200&width=300&text=Locked",
                    },
                    {
                      id: 3,
                      title: "Special Date Night",
                      type: "Date Plan",
                      from: "Alex",
                      unlockDate: "January 20, 2024",
                      daysLeft: 40,
                      hint: "Prepare for an evening of surprises",
                      image: "/placeholder.svg?height=200&width=300&text=Locked",
                    },
                  ].map((secret) => (
                    <Card key={secret.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden relative">
                        <Image
                          src={secret.image || "/placeholder.svg"}
                          width={300}
                          height={200}
                          alt={secret.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                          <Lock className="h-10 w-10 text-white mb-2" />
                          <p className="text-white font-medium">Locked Secret</p>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{secret.title}</CardTitle>
                        <CardDescription className="flex justify-between">
                          <span>From: {secret.from}</span>
                          <span className="flex items-center">
                            <Key className="h-4 w-4 mr-1" />
                            {secret.type}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>Unlocks: {secret.unlockDate}</span>
                            </div>
                            <div className="px-2 py-1 text-xs rounded-full bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
                              {secret.daysLeft} days left
                            </div>
                          </div>
                          <p className="text-sm italic">"{secret.hint}"</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          <Key className="h-4 w-4 mr-2" />
                          Try to Unlock
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 border border-dashed rounded-lg bg-muted/30 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-rose-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Special Moments Ahead</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-4">
                    Your partner has created special surprises that will unlock on meaningful dates. Check back to
                    discover them!
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="unlocked" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "Six Month Anniversary",
                      type: "Secret Message",
                      from: "Alex",
                      unlockedDate: "August 14, 2023",
                      message:
                        "These past six months have been the best of my life. I've never felt so understood and loved. Here's to many more months and years together!",
                      image: "/placeholder.svg?height=200&width=300&text=Anniversary",
                    },
                    {
                      id: 2,
                      title: "Surprise Concert Tickets",
                      type: "Virtual Gift",
                      from: "Alex",
                      unlockedDate: "October 5, 2023",
                      message:
                        "Surprise! I got us tickets to see your favorite band next month. Can't wait to dance the night away with you!",
                      image: "/placeholder.svg?height=200&width=300&text=Concert",
                    },
                  ].map((secret) => (
                    <Card key={secret.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={secret.image || "/placeholder.svg"}
                          width={300}
                          height={200}
                          alt={secret.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{secret.title}</CardTitle>
                        <CardDescription className="flex justify-between">
                          <span>From: {secret.from}</span>
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {secret.type}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Unlocked: {secret.unlockedDate}</span>
                          </div>
                          <p className="text-sm italic">"{secret.message}"</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="created" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "Valentine's Day Surprise",
                      type: "Secret Message",
                      for: "Alex",
                      unlockDate: "February 14, 2024",
                      status: "Scheduled",
                      image: "/placeholder.svg?height=200&width=300&text=Valentine",
                    },
                    {
                      id: 2,
                      title: "Weekend Getaway Plans",
                      type: "Date Plan",
                      for: "Alex",
                      unlockDate: "March 15, 2024",
                      status: "Scheduled",
                      image: "/placeholder.svg?height=200&width=300&text=Getaway",
                    },
                    {
                      id: 3,
                      title: "Anniversary Video",
                      type: "Surprise Video",
                      for: "Alex",
                      unlockDate: "April 22, 2024",
                      status: "Draft",
                      image: "/placeholder.svg?height=200&width=300&text=Video",
                    },
                  ].map((secret) => (
                    <Card key={secret.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden relative">
                        <Image
                          src={secret.image || "/placeholder.svg"}
                          width={300}
                          height={200}
                          alt={secret.title}
                          className="w-full h-full object-cover"
                        />
                        {secret.status === "Draft" && (
                          <div className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                            Draft
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle>{secret.title}</CardTitle>
                        <CardDescription className="flex justify-between">
                          <span>For: {secret.for}</span>
                          <span className="flex items-center">
                            <EyeOff className="h-4 w-4 mr-1" />
                            {secret.type}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Unlocks: {secret.unlockDate}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Status: {secret.status}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Preview
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 border border-dashed rounded-lg bg-muted/30 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                      <Gift className="h-8 w-8 text-rose-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Create More Surprises</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-4">
                    Plan ahead for special occasions by creating secret messages, gifts, and surprises that will unlock
                    on meaningful dates.
                  </p>
                  <Button className="bg-rose-500 hover:bg-rose-600">
                    <Plus className="h-4 w-4 mr-2" /> Create New Secret
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">How Memory Vault Works</h2>
                <p className="text-muted-foreground max-w-[800px] mx-auto">
                  Create and discover special surprises that unlock on meaningful dates or with secret passcodes.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-lg font-medium">Create a Secret</h3>
                <p className="text-sm text-muted-foreground">
                  Add a special message, photo, video, or gift that will remain hidden until a specific date.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-lg font-medium">Set Unlock Conditions</h3>
                <p className="text-sm text-muted-foreground">
                  Choose when your secret will be revealed - on a special date, with a passcode, or both.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-lg font-medium">Discover Surprises</h3>
                <p className="text-sm text-muted-foreground">
                  Experience the joy of unlocking special messages and gifts from your partner on meaningful occasions.
                </p>
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

