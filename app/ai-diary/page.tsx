import Link from "next/link"
import { Heart, Calendar, Sparkles, MessageSquare, Save, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function AIDiaryPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Love Diary 📖</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your personalized AI-powered journal that helps you capture and reflect on your relationship journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
              <div className="space-y-6">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-rose-50 dark:bg-rose-900/20">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-rose-500" />
                        Today's Reflection Prompt
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date().toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-dashed">
                      <p className="italic text-lg">
                        "Think about a moment this week when your partner made you smile unexpectedly. What happened,
                        and why did it mean so much to you?"
                      </p>
                    </div>
                    <Textarea placeholder="Write your reflection here..." className="min-h-[200px]" />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous Prompt
                    </Button>
                    <Button className="bg-rose-500 hover:bg-rose-600">
                      <Save className="h-4 w-4 mr-2" />
                      Save Entry
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Your Partner's Recent Reflections</CardTitle>
                    <CardDescription>See what your partner has been reflecting on recently.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          prompt: "What's one small thing your partner does that always makes your day better?",
                          preview:
                            "I love how you always send me a good morning text with a different emoji every day. It's such a small thing but it shows me you're thinking about me first thing...",
                          date: "2 days ago",
                        },
                        {
                          prompt:
                            "Describe a quality in your partner that you admire but haven't told them about recently.",
                          preview:
                            "I really admire your patience with difficult situations. The way you handled that conflict with the neighbor last week was so impressive...",
                          date: "5 days ago",
                        },
                      ].map((entry, i) => (
                        <div key={i} className="p-4 rounded-lg bg-muted/50">
                          <p className="text-sm font-medium text-muted-foreground mb-2">Prompt: {entry.prompt}</p>
                          <p className="line-clamp-2 italic">{entry.preview}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-muted-foreground">{entry.date}</span>
                            <Button variant="ghost" size="sm">
                              Read Full Entry
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Memory Comparison</CardTitle>
                    <CardDescription>Compare how you both remember the same events.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg bg-muted">
                        <h3 className="font-medium mb-2">Prompt: "Describe your first date together."</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
                            <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mb-1">Your Memory:</p>
                            <p className="text-sm">
                              "We went to that Italian restaurant downtown. You wore a blue dress and we talked for
                              hours about our favorite books. I remember being so nervous but you made me feel
                              comfortable right away."
                            </p>
                          </div>
                          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">Their Memory:</p>
                            <p className="text-sm">
                              "You picked me up and took me to that cute Italian place. I spent an hour deciding what to
                              wear and finally chose my favorite blue dress. You seemed so confident but later told me
                              you were nervous too!"
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-muted">
                        <h3 className="font-medium mb-2">
                          Prompt: "What was your favorite part of our vacation last summer?"
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
                            <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mb-1">Your Memory:</p>
                            <p className="text-sm">
                              "Watching the sunset on the beach while sharing that bottle of wine. The sky was so
                              colorful and it felt like we were the only two people in the world."
                            </p>
                          </div>
                          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">Their Memory:</p>
                            <p className="text-sm">
                              "The sunset on our last night was magical, but my favorite part was actually the impromptu
                              dance we had in the rain when that storm caught us by surprise during our hike!"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Insights</CardTitle>
                    <CardDescription>Personalized insights based on your journal entries.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="h-4 w-4 text-purple-500" />
                          <p className="font-medium text-purple-700 dark:text-purple-300">Relationship Insight</p>
                        </div>
                        <p className="text-sm">
                          Based on your entries, you both value quality time together, especially outdoor activities and
                          trying new restaurants.
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="h-4 w-4 text-amber-500" />
                          <p className="font-medium text-amber-700 dark:text-amber-300">Communication Pattern</p>
                        </div>
                        <p className="text-sm">
                          You tend to express appreciation through words, while your partner shows love through
                          thoughtful actions and gestures.
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="h-4 w-4 text-green-500" />
                          <p className="font-medium text-green-700 dark:text-green-300">Growth Opportunity</p>
                        </div>
                        <p className="text-sm">
                          Consider planning more surprise activities - your entries show these create your most
                          cherished memories together.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Special Dates</CardTitle>
                    <CardDescription>AI-detected important dates from your entries.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        {
                          event: "Anniversary",
                          date: "February 14, 2024",
                          daysLeft: 65,
                          suggestion: "Write a special letter reflecting on your journey together",
                        },
                        {
                          event: "Birthday",
                          date: "April 5, 2024",
                          daysLeft: 116,
                          suggestion: "Plan a surprise based on their recent interests in your journal",
                        },
                        {
                          event: "First Date Anniversary",
                          date: "January 15, 2024",
                          daysLeft: 35,
                          suggestion: "Recreate your first date with a modern twist",
                        },
                      ].map((date, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-300 font-bold">
                            {date.daysLeft}
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium">{date.event}</p>
                            <p className="text-xs text-muted-foreground">{date.date}</p>
                          </div>
                          <Button variant="ghost" size="sm" className="flex-shrink-0">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Important Dates
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Suggested Prompts</CardTitle>
                    <CardDescription>Personalized prompts based on your relationship.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        "What's a small moment from this week that made you appreciate your relationship?",
                        "Describe a challenge you overcame together recently.",
                        "What's something new you've learned about your partner in the last month?",
                        "If you could relive one day with your partner, which would it be and why?",
                        "What's one thing you're looking forward to experiencing together?",
                      ].map((prompt, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg border border-dashed hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                          <p className="text-sm">{prompt}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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

