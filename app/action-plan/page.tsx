import Link from "next/link"
import Image from "next/image"
import { Heart, CheckCircle, Circle, Calendar, Clock, Trophy, Target, Plus, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ActionPlanPage() {
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
            <Link href="/action-plan" className="text-sm font-medium transition-colors hover:text-primary">
              Action Plan
            </Link>
            <Link href="/memory-vault" className="text-sm font-medium transition-colors hover:text-primary">
              Memory Vault
            </Link>
            <Link href="/3d-room" className="text-sm font-medium transition-colors hover:text-primary">
              3D Room
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            New Challenge
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Love Challenges & Goals 🏆</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Set relationship goals, complete fun challenges, and grow together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
              <div>
                <Tabs defaultValue="active" className="w-full">
                  <div className="flex justify-center mb-8">
                    <TabsList>
                      <TabsTrigger value="active">Active Challenges</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                      <TabsTrigger value="discover">Discover</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="active" className="mt-0 space-y-8">
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>30 Days of Love</CardTitle>
                            <CardDescription>Complete a different romantic task each day</CardDescription>
                          </div>
                          <div className="px-3 py-1 text-xs rounded-full bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
                            Day 12 of 30
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                              <span>Progress</span>
                              <span className="font-medium">40%</span>
                            </div>
                            <Progress value={40} className="h-2" />
                          </div>

                          <div className="border rounded-lg overflow-hidden">
                            <div className="bg-muted px-4 py-2 border-b">
                              <h3 className="font-medium">Today's Challenge</h3>
                            </div>
                            <div className="p-4 space-y-4">
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-0.5">
                                  <Circle className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                  <p className="font-medium">
                                    Write a love note and hide it somewhere for your partner to find
                                  </p>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    Express your feelings in a handwritten note and hide it in an unexpected place.
                                  </p>
                                </div>
                              </div>
                              <Button className="w-full">Mark as Complete</Button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-medium">Recent Activities</h3>
                            <div className="space-y-2">
                              {[
                                {
                                  day: 11,
                                  task: "Cook a meal together",
                                  completed: true,
                                  date: "Yesterday",
                                },
                                {
                                  day: 10,
                                  task: "Share your favorite childhood memory",
                                  completed: true,
                                  date: "2 days ago",
                                },
                                {
                                  day: 9,
                                  task: "Take a walk and hold hands",
                                  completed: true,
                                  date: "3 days ago",
                                },
                              ].map((activity, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                >
                                  <div className="flex-shrink-0 mt-0.5">
                                    {activity.completed ? (
                                      <CheckCircle className="h-5 w-5 text-green-500" />
                                    ) : (
                                      <Circle className="h-5 w-5 text-muted-foreground" />
                                    )}
                                  </div>
                                  <div className="flex-grow">
                                    <p className="font-medium">
                                      Day {activity.day}: {activity.task}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">View All Days</Button>
                        <Button variant="outline">Share Progress</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>Bucket List Challenge</CardTitle>
                            <CardDescription>Complete items from your shared bucket list</CardDescription>
                          </div>
                          <div className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                            Ongoing
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                              <span>Progress</span>
                              <span className="font-medium">3 of 10 completed</span>
                            </div>
                            <Progress value={30} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-medium">Bucket List Items</h3>
                            <div className="space-y-2">
                              {[
                                {
                                  item: "Watch the Northern Lights together",
                                  completed: false,
                                },
                                {
                                  item: "Take a cooking class together",
                                  completed: true,
                                  date: "October 15, 2023",
                                },
                                {
                                  item: "Go on a hot air balloon ride",
                                  completed: false,
                                },
                                {
                                  item: "Plant a tree together",
                                  completed: true,
                                  date: "May 22, 2023",
                                },
                                {
                                  item: "Take a dance class together",
                                  completed: true,
                                  date: "August 3, 2023",
                                },
                              ].map((item, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                >
                                  <div className="flex-shrink-0 mt-0.5">
                                    {item.completed ? (
                                      <CheckCircle className="h-5 w-5 text-green-500" />
                                    ) : (
                                      <Circle className="h-5 w-5 text-muted-foreground" />
                                    )}
                                  </div>
                                  <div className="flex-grow">
                                    <p className="font-medium">{item.item}</p>
                                    {item.completed && (
                                      <p className="text-xs text-muted-foreground">Completed: {item.date}</p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Bucket List Item
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="completed" className="mt-0 space-y-8">
                    <div className="grid gap-6 md:grid-cols-2">
                      {[
                        {
                          title: "Date Night Ideas",
                          description: "Try 5 new date night ideas",
                          completedDate: "October 30, 2023",
                          image: "/placeholder.svg?height=150&width=300&text=Date+Nights",
                          progress: "5/5 completed",
                        },
                        {
                          title: "Gratitude Challenge",
                          description: "Share one thing you're grateful for each day",
                          completedDate: "September 21, 2023",
                          image: "/placeholder.svg?height=150&width=300&text=Gratitude",
                          progress: "21/21 days completed",
                        },
                      ].map((challenge, i) => (
                        <Card key={i} className="overflow-hidden">
                          <div className="aspect-video overflow-hidden">
                            <Image
                              src={challenge.image || "/placeholder.svg"}
                              width={300}
                              height={150}
                              alt={challenge.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <CardTitle>{challenge.title}</CardTitle>
                              <Trophy className="h-5 w-5 text-amber-500" />
                            </div>
                            <CardDescription>{challenge.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex items-center text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>Completed: {challenge.completedDate}</span>
                              </div>
                              <div className="flex items-center text-green-600 dark:text-green-400">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                <span>{challenge.progress}</span>
                              </div>
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

                  <TabsContent value="discover" className="mt-0 space-y-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {[
                        {
                          title: "Communication Challenge",
                          description: "Improve your communication skills with daily exercises",
                          duration: "14 days",
                          difficulty: "Medium",
                          image: "/placeholder.svg?height=150&width=300&text=Communication",
                        },
                        {
                          title: "Adventure Together",
                          description: "Try 5 new adventures or activities together",
                          duration: "3 months",
                          difficulty: "Medium",
                          image: "/placeholder.svg?height=150&width=300&text=Adventure",
                        },
                        {
                          title: "Photo Challenge",
                          description: "Take a photo together every day for a month",
                          duration: "30 days",
                          difficulty: "Easy",
                          image: "/placeholder.svg?height=150&width=300&text=Photo",
                        },
                        {
                          title: "Love Languages",
                          description: "Practice each other's love languages intentionally",
                          duration: "5 weeks",
                          difficulty: "Medium",
                          image: "/placeholder.svg?height=150&width=300&text=Love+Languages",
                        },
                        {
                          title: "Fitness Together",
                          description: "Work out together 3 times a week",
                          duration: "8 weeks",
                          difficulty: "Hard",
                          image: "/placeholder.svg?height=150&width=300&text=Fitness",
                        },
                        {
                          title: "Create Your Own",
                          description: "Design a custom challenge tailored to your relationship",
                          duration: "Custom",
                          difficulty: "Custom",
                          image: "/placeholder.svg?height=150&width=300&text=Custom",
                          isTemplate: true,
                        },
                      ].map((challenge, i) => (
                        <Card key={i} className={`overflow-hidden ${challenge.isTemplate ? "border-dashed" : ""}`}>
                          <div className="aspect-video overflow-hidden">
                            <Image
                              src={challenge.image || "/placeholder.svg"}
                              width={300}
                              height={150}
                              alt={challenge.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{challenge.title}</CardTitle>
                            <CardDescription>{challenge.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between text-sm">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{challenge.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <Target className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>{challenge.difficulty}</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            {challenge.isTemplate ? (
                              <Button className="w-full bg-rose-500 hover:bg-rose-600">Create Challenge</Button>
                            ) : (
                              <Button className="w-full">Start Challenge</Button>
                            )}
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Relationship Goals</CardTitle>
                    <CardDescription>Track your progress on long-term goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          goal: "Travel to 10 countries together",
                          progress: 3,
                          total: 10,
                          percentage: 30,
                        },
                        {
                          goal: "Learn a new skill together",
                          progress: 1,
                          total: 1,
                          percentage: 100,
                          completed: true,
                        },
                        {
                          goal: "Have a date night every week",
                          progress: 32,
                          total: 52,
                          percentage: 62,
                        },
                        {
                          goal: "Create a shared hobby",
                          progress: 0,
                          total: 1,
                          percentage: 0,
                        },
                      ].map((goal, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="font-medium flex items-center">
                              {goal.completed && <CheckCircle className="h-4 w-4 mr-2 text-green-500" />}
                              {goal.goal}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {goal.progress}/{goal.total}
                            </p>
                          </div>
                          <Progress value={goal.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Goal
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Love Wheel</CardTitle>
                    <CardDescription>Spin for a random relationship activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full aspect-square max-w-[250px] mx-auto mb-4">
                      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=250&width=250&text=Love+Wheel')] bg-cover bg-center rounded-full"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-rose-500"></div>
                    </div>
                    <div className="p-4 border rounded-lg bg-muted/50 text-center">
                      <p className="text-sm font-medium">Current Activity</p>
                      <p className="text-lg font-bold mt-1">Write each other a love letter</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-rose-500 hover:bg-rose-600">Spin the Wheel</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Milestones you've reached together</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Adventure Seekers",
                          description: "Completed 3 adventures together",
                          date: "October 2023",
                          icon: "🧗‍♀️",
                        },
                        {
                          title: "Culinary Explorers",
                          description: "Tried cooking 10 new recipes together",
                          date: "September 2023",
                          icon: "👨‍🍳",
                        },
                        {
                          title: "Memory Makers",
                          description: "Created 100 photos in your gallery",
                          date: "August 2023",
                          icon: "📸",
                        },
                      ].map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-xl">
                            {achievement.icon}
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium">{achievement.title}</p>
                            <p className="text-xs text-muted-foreground">{achievement.description}</p>
                          </div>
                          <div className="flex-shrink-0">
                            <Star className="h-5 w-5 text-amber-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Achievements
                    </Button>
                  </CardFooter>
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

