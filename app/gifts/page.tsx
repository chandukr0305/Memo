import Link from "next/link"
import Image from "next/image"
import { Heart, Gift, Plus, Calendar, Bell, Star, ShoppingCart, Tag } from "lucide-react"

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

export default function GiftsPage() {
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
            <Link href="/gifts" className="text-sm font-medium transition-colors hover:text-primary">
              Gift Ideas
            </Link>
            <Link href="/journal" className="text-sm font-medium transition-colors hover:text-primary">
              Journal
            </Link>
            <Link href="/chat" className="text-sm font-medium transition-colors hover:text-primary">
              Our Chat
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Add Gift Idea
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Surprise Gift Ideas 🎁</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Plan the perfect surprises and keep track of gift ideas for special occasions.
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
                    <Plus className="mr-2 h-4 w-4" /> Add Gift Idea
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Add a Gift Idea</DialogTitle>
                    <DialogDescription>Save gift ideas for future special occasions.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="gift-name">Gift Name</Label>
                      <Input id="gift-name" placeholder="e.g., Custom Photo Album" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" placeholder="Describe the gift idea..." className="min-h-[100px]" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="price">Estimated Price</Label>
                        <Input id="price" type="number" placeholder="0.00" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="occasion">Occasion</Label>
                        <select
                          id="occasion"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select an occasion</option>
                          <option value="birthday">Birthday</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="valentine">Valentine's Day</option>
                          <option value="christmas">Christmas</option>
                          <option value="justbecause">Just Because</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="link">Link (Optional)</Label>
                      <Input id="link" placeholder="URL to the gift or inspiration" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="image">Image URL (Optional)</Label>
                      <Input id="image" placeholder="URL to an image of the gift" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="reminder" className="h-4 w-4 text-rose-500" />
                      <Label htmlFor="reminder">Set a reminder for this gift</Label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="reminder-date">Reminder Date</Label>
                        <Input id="reminder-date" type="date" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="priority">Priority</Label>
                        <select
                          id="priority"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-rose-500 hover:bg-rose-600">Save Gift Idea</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Tabs defaultValue="ideas" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="ideas">Gift Ideas</TabsTrigger>
                  <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming Occasions</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="ideas" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      name: "Custom Star Map",
                      description: "A star map showing the night sky from the day we met.",
                      price: 75,
                      occasion: "Anniversary",
                      image: "/placeholder.svg?height=200&width=300&text=Star+Map",
                      priority: "high",
                    },
                    {
                      id: 2,
                      name: "Weekend Getaway",
                      description: "A surprise weekend trip to that cabin in the mountains we've been talking about.",
                      price: 350,
                      occasion: "Birthday",
                      image: "/placeholder.svg?height=200&width=300&text=Getaway",
                      priority: "medium",
                    },
                    {
                      id: 3,
                      name: "Personalized Playlist Vinyl",
                      description: "A custom vinyl record with all our favorite songs.",
                      price: 60,
                      occasion: "Valentine's Day",
                      image: "/placeholder.svg?height=200&width=300&text=Vinyl",
                      priority: "medium",
                    },
                    {
                      id: 4,
                      name: "Cooking Class Together",
                      description: "A cooking class to learn how to make pasta from scratch.",
                      price: 120,
                      occasion: "Just Because",
                      image: "/placeholder.svg?height=200&width=300&text=Cooking+Class",
                      priority: "low",
                    },
                    {
                      id: 5,
                      name: "Custom Photo Book",
                      description: "A beautiful photo book with all our favorite memories from the past year.",
                      price: 85,
                      occasion: "Anniversary",
                      image: "/placeholder.svg?height=200&width=300&text=Photo+Book",
                      priority: "high",
                    },
                    {
                      id: 6,
                      name: "Surprise Date Night Box",
                      description: "A box with everything needed for a perfect date night at home.",
                      price: 50,
                      occasion: "Just Because",
                      image: "/placeholder.svg?height=200&width=300&text=Date+Night+Box",
                      priority: "low",
                    },
                  ].map((gift) => (
                    <Card key={gift.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={gift.image || "/placeholder.svg"}
                          width={300}
                          height={200}
                          alt={gift.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{gift.name}</CardTitle>
                          <div
                            className={`px-2 py-1 text-xs rounded-full ${
                              gift.priority === "high"
                                ? "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300"
                                : gift.priority === "medium"
                                  ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                                  : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            }`}
                          >
                            {gift.priority.charAt(0).toUpperCase() + gift.priority.slice(1)} Priority
                          </div>
                        </div>
                        <CardDescription className="flex justify-between">
                          <span className="flex items-center">
                            <Tag className="h-4 w-4 mr-1" />${gift.price}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {gift.occasion}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-muted-foreground">{gift.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Buy Now
                        </Button>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="wishlist" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      name: "Matching Watches",
                      description: "Elegant matching watches that remind us of each other.",
                      price: 200,
                      image: "/placeholder.svg?height=200&width=300&text=Watches",
                    },
                    {
                      id: 2,
                      name: "Concert Tickets",
                      description: "Tickets to see our favorite band when they come to town.",
                      price: 150,
                      image: "/placeholder.svg?height=200&width=300&text=Concert",
                    },
                    {
                      id: 3,
                      name: "Spa Day",
                      description: "A relaxing day at the spa with massages and treatments.",
                      price: 180,
                      image: "/placeholder.svg?height=200&width=300&text=Spa",
                    },
                  ].map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          width={300}
                          height={200}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <Tag className="h-4 w-4 mr-1" />${item.price}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-muted-foreground">{item.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4 mr-2" />
                          Add to Ideas
                        </Button>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="mt-0">
                <div className="space-y-6">
                  {[
                    {
                      id: 1,
                      occasion: "Anniversary",
                      date: "February 14, 2024",
                      daysLeft: 65,
                      gifts: [
                        { id: 1, name: "Custom Star Map", price: 75 },
                        { id: 5, name: "Custom Photo Book", price: 85 },
                      ],
                    },
                    {
                      id: 2,
                      occasion: "Birthday",
                      date: "April 5, 2024",
                      daysLeft: 116,
                      gifts: [{ id: 2, name: "Weekend Getaway", price: 350 }],
                    },
                    {
                      id: 3,
                      occasion: "Valentine's Day",
                      date: "February 14, 2024",
                      daysLeft: 65,
                      gifts: [{ id: 3, name: "Personalized Playlist Vinyl", price: 60 }],
                    },
                  ].map((occasion) => (
                    <Card key={occasion.id} className="overflow-hidden">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle>{occasion.occasion}</CardTitle>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{occasion.date}</span>
                          </div>
                        </div>
                        <CardDescription>
                          <div className="flex items-center text-rose-500">
                            <Bell className="h-4 w-4 mr-2" />
                            <span>{occasion.daysLeft} days left</span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="text-sm font-medium mb-2">Gift Ideas:</h4>
                        <ul className="space-y-2">
                          {occasion.gifts.map((gift) => (
                            <li key={gift.id} className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                              <span>{gift.name}</span>
                              <span className="text-sm text-muted-foreground">${gift.price}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <Gift className="h-4 w-4 mr-2" />
                          Plan This Occasion
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Gift Inspiration</h2>
                <p className="text-muted-foreground">
                  Need ideas? Here are some personalized suggestions based on your partner's interests.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  category: "Experience Gifts",
                  description: "Create memories together",
                  ideas: ["Cooking class", "Concert tickets", "Weekend getaway", "Spa day"],
                  icon: "🎭",
                },
                {
                  category: "Personalized Gifts",
                  description: "Unique and meaningful",
                  ideas: ["Custom jewelry", "Photo album", "Star map", "Name necklace"],
                  icon: "🎁",
                },
                {
                  category: "Hobby-Related",
                  description: "Based on their interests",
                  ideas: ["Art supplies", "Hiking gear", "Cooking gadgets", "Books"],
                  icon: "🎨",
                },
                {
                  category: "Surprise Gestures",
                  description: "Small acts of love",
                  ideas: ["Breakfast in bed", "Love notes", "Surprise date", "Playlist"],
                  icon: "💝",
                },
              ].map((category, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="text-center pb-2">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <CardTitle>{category.category}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {category.ideas.map((idea, j) => (
                        <li key={j} className="flex items-center">
                          <Star className="h-3 w-3 mr-2 text-amber-500" />
                          <span className="text-sm">{idea}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full">
                      Explore Ideas
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

