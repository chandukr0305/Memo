import Link from "next/link"
import { Heart, Calendar, Clock, Mic, Send, Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
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

export default function LoveLettersPage() {
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
            <Link href="/love-letters" className="text-sm font-medium transition-colors hover:text-primary">
              Love Letters
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            New Letter
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Love Letters 💌</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Write, save, and share heartfelt messages with your loved one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All Letters</TabsTrigger>
                  <TabsTrigger value="received">Received</TabsTrigger>
                  <TabsTrigger value="sent">Sent</TabsTrigger>
                  <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="flex justify-end mb-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-rose-500 hover:bg-rose-600">
                        <Heart className="mr-2 h-4 w-4" /> Write New Letter
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                      <DialogHeader>
                        <DialogTitle>Write a Love Letter</DialogTitle>
                        <DialogDescription>
                          Express your feelings in a heartfelt message. You can save it, send it immediately, or
                          schedule it for a special date.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" placeholder="What's this letter about?" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="message">Your Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Write your heartfelt message here..."
                            className="min-h-[200px]"
                          />
                        </div>
                        <div className="flex items-center gap-4">
                          <Button variant="outline" size="icon" className="rounded-full">
                            <Mic className="h-4 w-4" />
                            <span className="sr-only">Record voice note</span>
                          </Button>
                          <span className="text-sm text-muted-foreground">Add voice note</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="schedule" />
                          <Label htmlFor="schedule">Schedule for later</Label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="date">Date</Label>
                            <Input id="date" type="date" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="time">Time</Label>
                            <Input id="time" type="time" />
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Save as Draft</Button>
                        <Button className="bg-rose-500 hover:bg-rose-600">Send Letter</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "Happy Anniversary",
                      preview: "Today marks another beautiful year together...",
                      date: "February 14, 2023",
                      status: "sent",
                      hasVoice: true,
                    },
                    {
                      id: 2,
                      title: "Missing You",
                      preview: "Even though we're apart for just a few days...",
                      date: "April 22, 2023",
                      status: "received",
                      hasVoice: false,
                    },
                    {
                      id: 3,
                      title: "Birthday Surprise",
                      preview: "I can't wait to celebrate your special day...",
                      date: "June 15, 2023",
                      status: "scheduled",
                      hasVoice: true,
                    },
                    {
                      id: 4,
                      title: "Just Because",
                      preview: "I was thinking about you today and wanted to say...",
                      date: "August 3, 2023",
                      status: "sent",
                      hasVoice: false,
                    },
                    {
                      id: 5,
                      title: "Our First Date",
                      preview: "Remembering our first date and how nervous I was...",
                      date: "September 10, 2023",
                      status: "received",
                      hasVoice: true,
                    },
                  ].map((letter) => (
                    <Card key={letter.id} className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader
                        className={`
                        ${letter.status === "sent" ? "bg-rose-50 dark:bg-rose-900/20" : ""}
                        ${letter.status === "received" ? "bg-blue-50 dark:bg-blue-900/20" : ""}
                        ${letter.status === "scheduled" ? "bg-amber-50 dark:bg-amber-900/20" : ""}
                      `}
                      >
                        <div className="flex justify-between items-start">
                          <CardTitle>{letter.title}</CardTitle>
                          {letter.status === "scheduled" && (
                            <div className="flex items-center text-amber-600 dark:text-amber-400 text-sm">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Scheduled</span>
                            </div>
                          )}
                        </div>
                        <CardDescription className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {letter.date}
                          {letter.hasVoice && (
                            <div className="ml-2 text-rose-500 dark:text-rose-400">
                              <Mic className="h-4 w-4" />
                            </div>
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="line-clamp-3 text-muted-foreground">{letter.preview}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                        {letter.status === "scheduled" && (
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="received" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 2,
                      title: "Missing You",
                      preview: "Even though we're apart for just a few days...",
                      date: "April 22, 2023",
                      hasVoice: false,
                    },
                    {
                      id: 5,
                      title: "Our First Date",
                      preview: "Remembering our first date and how nervous I was...",
                      date: "September 10, 2023",
                      hasVoice: true,
                    },
                  ].map((letter) => (
                    <Card key={letter.id} className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
                        <CardTitle>{letter.title}</CardTitle>
                        <CardDescription className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {letter.date}
                          {letter.hasVoice && (
                            <div className="ml-2 text-rose-500 dark:text-rose-400">
                              <Mic className="h-4 w-4" />
                            </div>
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="line-clamp-3 text-muted-foreground">{letter.preview}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sent" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "Happy Anniversary",
                      preview: "Today marks another beautiful year together...",
                      date: "February 14, 2023",
                      hasVoice: true,
                    },
                    {
                      id: 4,
                      title: "Just Because",
                      preview: "I was thinking about you today and wanted to say...",
                      date: "August 3, 2023",
                      hasVoice: false,
                    },
                  ].map((letter) => (
                    <Card key={letter.id} className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="bg-rose-50 dark:bg-rose-900/20">
                        <CardTitle>{letter.title}</CardTitle>
                        <CardDescription className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {letter.date}
                          {letter.hasVoice && (
                            <div className="ml-2 text-rose-500 dark:text-rose-400">
                              <Mic className="h-4 w-4" />
                            </div>
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="line-clamp-3 text-muted-foreground">{letter.preview}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="scheduled" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 3,
                      title: "Birthday Surprise",
                      preview: "I can't wait to celebrate your special day...",
                      date: "June 15, 2023",
                      scheduledFor: "April 5, 2024",
                      hasVoice: true,
                    },
                  ].map((letter) => (
                    <Card key={letter.id} className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="bg-amber-50 dark:bg-amber-900/20">
                        <div className="flex justify-between items-start">
                          <CardTitle>{letter.title}</CardTitle>
                          <div className="flex items-center text-amber-600 dark:text-amber-400 text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Scheduled</span>
                          </div>
                        </div>
                        <CardDescription className="flex flex-col gap-1">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Created: {letter.date}</span>
                          </div>
                          <div className="flex items-center text-amber-600 dark:text-amber-400">
                            <Bell className="h-4 w-4 mr-1" />
                            <span>Delivers: {letter.scheduledFor}</span>
                          </div>
                          {letter.hasVoice && (
                            <div className="flex items-center text-rose-500 dark:text-rose-400">
                              <Mic className="h-4 w-4 mr-1" />
                              <span>Has voice note</span>
                            </div>
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="line-clamp-3 text-muted-foreground">{letter.preview}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="ghost" size="sm">
                          Preview
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
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
                <h2 className="text-2xl font-bold">AI-Generated Love Quotes & Poetry</h2>
                <p className="text-muted-foreground">
                  Get inspiration for your love letters with these AI-generated quotes and poems.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Like stars that illuminate the darkest night, your love guides me through life's journey with unwavering light.",
                  type: "Poetry",
                },
                {
                  quote: "Every moment with you feels like the first page of a story I never want to end.",
                  type: "Quote",
                },
                {
                  quote:
                    "In the garden of my heart, your love blooms eternal, each petal a memory we've created together.",
                  type: "Poetry",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="overflow-hidden bg-card/50 backdrop-blur-sm border-dashed hover:border-rose-200 dark:hover:border-rose-800 transition-all"
                >
                  <CardContent className="pt-6">
                    <blockquote className="border-l-4 border-rose-300 dark:border-rose-700 pl-4 italic">
                      "{item.quote}"
                    </blockquote>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-sm text-muted-foreground">{item.type}</span>
                    <Button variant="ghost" size="sm">
                      <Send className="h-4 w-4 mr-2" />
                      Use in Letter
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline">Generate More Quotes</Button>
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

