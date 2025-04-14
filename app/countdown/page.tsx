import Link from "next/link"
import { Heart, Calendar, Bell, Plus, Trash2 } from "lucide-react"

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
import { Switch } from "@/components/ui/switch"

export default function CountdownPage() {
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
            <Link href="/countdown" className="text-sm font-medium transition-colors hover:text-primary">
              Countdowns
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Add Countdown
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Countdown Timers ⏳</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Counting down to all our special moments and milestones together.
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
                    <Plus className="mr-2 h-4 w-4" /> Add New Countdown
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Create a New Countdown</DialogTitle>
                    <DialogDescription>Set up a countdown for an upcoming special date or event.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="event">Event Name</Label>
                      <Input id="event" placeholder="e.g., Anniversary, Birthday, Trip to Paris" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="date">Event Date</Label>
                        <Input id="date" type="date" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="time">Event Time (Optional)</Label>
                        <Input id="time" type="time" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Description</Label>
                      <Input id="description" placeholder="Add a short description" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="color">Theme Color</Label>
                      <div className="flex gap-2">
                        {["bg-rose-500", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-amber-500"].map(
                          (color) => (
                            <div key={color} className="relative">
                              <button
                                className={`w-8 h-8 rounded-full ${color} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500`}
                                aria-label={`Select ${color} theme`}
                              />
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="reminder" />
                      <Label htmlFor="reminder">Set reminder notifications</Label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="reminder-days">Days Before</Label>
                        <Input id="reminder-days" type="number" min="1" placeholder="7" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="reminder-time">Reminder Time</Label>
                        <Input id="reminder-time" type="time" />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-rose-500 hover:bg-rose-600">Create Countdown</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 1,
                  title: "Our Anniversary",
                  date: "2024-02-14T00:00:00",
                  description: "Celebrating another year of love",
                  daysLeft: 65,
                  color: "bg-rose-500",
                  reminder: true,
                },
                {
                  id: 2,
                  title: "Trip to Bali",
                  date: "2024-05-10T08:30:00",
                  description: "Our dream vacation begins",
                  daysLeft: 151,
                  color: "bg-blue-500",
                  reminder: true,
                },
                {
                  id: 3,
                  title: "Your Birthday",
                  date: "2024-04-05T00:00:00",
                  description: "Celebrating your special day",
                  daysLeft: 116,
                  color: "bg-purple-500",
                  reminder: true,
                },
                {
                  id: 4,
                  title: "Concert Date Night",
                  date: "2024-01-20T19:00:00",
                  description: "Seeing your favorite band live",
                  daysLeft: 40,
                  color: "bg-green-500",
                  reminder: false,
                },
                {
                  id: 5,
                  title: "Moving In Together",
                  date: "2024-03-01T09:00:00",
                  description: "Starting our life under one roof",
                  daysLeft: 81,
                  color: "bg-amber-500",
                  reminder: true,
                },
              ].map((countdown) => (
                <Card key={countdown.id} className="overflow-hidden">
                  <CardHeader className={`${countdown.color} text-white`}>
                    <CardTitle>{countdown.title}</CardTitle>
                    <CardDescription className="text-white/80 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(countdown.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{countdown.daysLeft}</div>
                      <div className="text-sm text-muted-foreground">days left</div>
                    </div>
                    <div className="mt-4 text-center">
                      <p>{countdown.description}</p>
                    </div>
                    {countdown.reminder && (
                      <div className="mt-4 flex items-center justify-center text-sm text-muted-foreground">
                        <Bell className="h-4 w-4 mr-2" />
                        <span>Reminder set</span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Upcoming Anniversaries & Milestones</h2>
                <p className="text-muted-foreground">
                  Never miss an important relationship milestone with automatic reminders.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "First Date Anniversary",
                  date: "January 15, 2024",
                  years: 2,
                  icon: "💖",
                },
                {
                  title: "First Kiss Anniversary",
                  date: "January 22, 2024",
                  years: 2,
                  icon: "💋",
                },
                {
                  title: "Relationship Anniversary",
                  date: "February 14, 2024",
                  years: 2,
                  icon: "❤️",
                },
                {
                  title: "First Trip Together",
                  date: "March 10, 2024",
                  years: 1,
                  icon: "✈️",
                },
              ].map((milestone, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border-dashed hover:border-rose-200 dark:hover:border-rose-800 transition-all"
                >
                  <CardHeader className="text-center pb-2">
                    <div className="text-3xl mb-2">{milestone.icon}</div>
                    <CardTitle className="text-base">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-muted-foreground">{milestone.date}</p>
                    <p className="mt-1 font-medium">
                      {milestone.years} Year{milestone.years > 1 ? "s" : ""}
                    </p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="ghost" size="sm">
                      <Bell className="h-4 w-4 mr-2" />
                      Set Reminder
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

