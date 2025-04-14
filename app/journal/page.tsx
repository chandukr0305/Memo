import Link from "next/link"
import { Heart, Calendar, Plus, Edit, Trash2, Smile, Frown, Meh } from "lucide-react"

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

export default function JournalPage() {
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
            <Link href="/journal" className="text-sm font-medium transition-colors hover:text-primary">
              Journal
            </Link>
            <Link href="/chat" className="text-sm font-medium transition-colors hover:text-primary">
              Our Chat
            </Link>
            <Link href="/music" className="text-sm font-medium transition-colors hover:text-primary">
              Music
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            New Entry
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mood Tracker & Journal 📖</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Track your moods and journal your thoughts about your relationship journey.
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
                    <Plus className="mr-2 h-4 w-4" /> New Journal Entry
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Create New Journal Entry</DialogTitle>
                    <DialogDescription>
                      Record your thoughts, feelings, and special moments in your relationship.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="entry-title">Title</Label>
                      <Input id="entry-title" placeholder="Give your entry a title" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Today's Mood</Label>
                      <div className="flex justify-between">
                        {[
                          { icon: <Smile className="h-6 w-6" />, label: "Happy", color: "text-green-500" },
                          { icon: <Meh className="h-6 w-6" />, label: "Neutral", color: "text-amber-500" },
                          { icon: <Frown className="h-6 w-6" />, label: "Sad", color: "text-blue-500" },
                        ].map((mood, i) => (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <button className={`p-3 rounded-full hover:bg-muted ${mood.color}`}>{mood.icon}</button>
                            <span className="text-xs">{mood.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="entry-content">Your Thoughts</Label>
                      <Textarea
                        id="entry-content"
                        placeholder="Write about your day, feelings, or special moments..."
                        className="min-h-[200px]"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>Tags</Label>
                      <Input placeholder="Add tags separated by commas (e.g., date night, milestone, reflection)" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="private" className="h-4 w-4 text-rose-500" />
                      <Label htmlFor="private">Private entry (only visible to you)</Label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-rose-500 hover:bg-rose-600">Save Entry</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Tabs defaultValue="journal" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="journal">Journal Entries</TabsTrigger>
                  <TabsTrigger value="mood">Mood Tracker</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="journal" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "Our Perfect Date Night",
                      date: "November 15, 2023",
                      excerpt:
                        "Tonight was absolutely magical. We went to that new restaurant downtown and then took a walk along the riverfront...",
                      mood: "Happy",
                      tags: ["date night", "special moment"],
                    },
                    {
                      id: 2,
                      title: "Reflecting on Our Journey",
                      date: "November 10, 2023",
                      excerpt:
                        "Looking back on how we met and how far we've come makes me realize how lucky I am to have you in my life...",
                      mood: "Happy",
                      tags: ["reflection", "gratitude"],
                    },
                    {
                      id: 3,
                      title: "Working Through Challenges",
                      date: "November 5, 2023",
                      excerpt:
                        "Today we had an important conversation about our future. It wasn't easy, but I'm proud of how we communicated...",
                      mood: "Neutral",
                      tags: ["growth", "communication"],
                    },
                    {
                      id: 4,
                      title: "Missing You",
                      date: "October 28, 2023",
                      excerpt:
                        "It's only been three days since you left for your business trip, but it feels like forever. The apartment is so quiet without you...",
                      mood: "Sad",
                      tags: ["long distance", "reflection"],
                    },
                    {
                      id: 5,
                      title: "Anniversary Plans",
                      date: "October 20, 2023",
                      excerpt:
                        "I've been secretly planning our anniversary celebration for weeks now. I can't wait to surprise you with...",
                      mood: "Happy",
                      tags: ["planning", "anniversary", "surprise"],
                    },
                    {
                      id: 6,
                      title: "New Traditions",
                      date: "October 15, 2023",
                      excerpt:
                        "We started a new Sunday morning tradition today - making breakfast together and then going for a hike...",
                      mood: "Happy",
                      tags: ["traditions", "quality time"],
                    },
                  ].map((entry) => (
                    <Card key={entry.id} className="overflow-hidden">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{entry.title}</CardTitle>
                          <div
                            className={`
                            ${entry.mood === "Happy" ? "text-green-500" : ""}
                            ${entry.mood === "Neutral" ? "text-amber-500" : ""}
                            ${entry.mood === "Sad" ? "text-blue-500" : ""}
                          `}
                          >
                            {entry.mood === "Happy" && <Smile className="h-5 w-5" />}
                            {entry.mood === "Neutral" && <Meh className="h-5 w-5" />}
                            {entry.mood === "Sad" && <Frown className="h-5 w-5" />}
                          </div>
                        </div>
                        <CardDescription className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {entry.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3 text-muted-foreground">{entry.excerpt}</p>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {entry.tags.map((tag, i) => (
                            <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mood" className="mt-0">
                <div className="bg-card border rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Mood Trends</h3>
                  <div className="h-64 w-full bg-[url('/placeholder.svg?height=250&width=1000&text=Mood+Tracking+Chart')] bg-contain bg-center bg-no-repeat"></div>
                  <div className="flex justify-center gap-8 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Happy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span className="text-sm">Neutral</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Sad</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const date = new Date()
                    date.setDate(date.getDate() - i)
                    const formattedDate = date.toLocaleDateString("en-US", { month: "short", day: "numeric" })

                    // Randomly assign moods for demonstration
                    const moods = ["Happy", "Neutral", "Sad"]
                    const randomMood = moods[Math.floor(Math.random() * moods.length)]

                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="text-sm font-medium mb-2">{formattedDate}</div>
                        <div
                          className={`
                          ${randomMood === "Happy" ? "text-green-500" : ""}
                          ${randomMood === "Neutral" ? "text-amber-500" : ""}
                          ${randomMood === "Sad" ? "text-blue-500" : ""}
                        `}
                        >
                          {randomMood === "Happy" && <Smile className="h-8 w-8" />}
                          {randomMood === "Neutral" && <Meh className="h-8 w-8" />}
                          {randomMood === "Sad" && <Frown className="h-8 w-8" />}
                        </div>
                        <div className="text-xs mt-1">{randomMood}</div>
                      </div>
                    )
                  })}
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

