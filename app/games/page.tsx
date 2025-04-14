import Link from "next/link"
import Image from "next/image"
import { Heart, Trophy, Clock, Brain } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GamesPage() {
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
            <Link href="/games" className="text-sm font-medium transition-colors hover:text-primary">
              Fun & Games
            </Link>
            <Link href="/countdown" className="text-sm font-medium transition-colors hover:text-primary">
              Countdowns
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Create Quiz
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fun & Games 🎮</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Test your knowledge of each other and have fun with these relationship games and quizzes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="quizzes" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="quizzes">Love Quizzes</TabsTrigger>
                  <TabsTrigger value="memory">Memory Games</TabsTrigger>
                  <TabsTrigger value="challenges">Challenges</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="quizzes" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "How Well Do You Know Me?",
                      description: "Test how well you know your partner's preferences, habits, and history.",
                      questions: 20,
                      time: "10 min",
                      image: "/placeholder.svg?height=200&width=300&text=Quiz+1",
                      played: true,
                      lastScore: "18/20",
                    },
                    {
                      id: 2,
                      title: "Our Relationship Timeline",
                      description: "Can you remember the dates of our most important milestones?",
                      questions: 15,
                      time: "8 min",
                      image: "/placeholder.svg?height=200&width=300&text=Quiz+2",
                      played: true,
                      lastScore: "13/15",
                    },
                    {
                      id: 3,
                      title: "Future Dreams & Goals",
                      description: "How aligned are your visions for the future? Find out with this quiz!",
                      questions: 25,
                      time: "15 min",
                      image: "/placeholder.svg?height=200&width=300&text=Quiz+3",
                      played: false,
                    },
                    {
                      id: 4,
                      title: "Love Language Quiz",
                      description: "Discover your primary love languages and understand each other better.",
                      questions: 30,
                      time: "20 min",
                      image: "/placeholder.svg?height=200&width=300&text=Quiz+4",
                      played: false,
                    },
                    {
                      id: 5,
                      title: "Travel Preferences",
                      description: "Beach or mountains? Adventure or relaxation? Test your travel compatibility.",
                      questions: 15,
                      time: "8 min",
                      image: "/placeholder.svg?height=200&width=300&text=Quiz+5",
                      played: true,
                      lastScore: "12/15",
                    },
                    {
                      id: 6,
                      title: "Create Your Own Quiz",
                      description: "Make a custom quiz with your own questions to challenge your partner.",
                      questions: "Custom",
                      time: "Varies",
                      image: "/placeholder.svg?height=200&width=300&text=Custom+Quiz",
                      isTemplate: true,
                    },
                  ].map((quiz) => (
                    <Card key={quiz.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={quiz.image || "/placeholder.svg"}
                          width={300}
                          height={200}
                          alt={quiz.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{quiz.title}</CardTitle>
                        <CardDescription className="flex justify-between">
                          <span>{quiz.questions} questions</span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {quiz.time}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-muted-foreground">{quiz.description}</p>
                        {quiz.played && (
                          <div className="mt-2 flex items-center text-sm">
                            <Trophy className="h-4 w-4 mr-1 text-amber-500" />
                            <span>Last score: {quiz.lastScore}</span>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        {quiz.isTemplate ? (
                          <Button className="w-full bg-rose-500 hover:bg-rose-600">Create Quiz</Button>
                        ) : (
                          <Button className="w-full">{quiz.played ? "Play Again" : "Start Quiz"}</Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="memory" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "Photo Memory Match",
                      description: "Match pairs of your favorite photos together in this classic memory game.",
                      difficulty: "Easy",
                      time: "5-10 min",
                      image: "/placeholder.svg?height=200&width=300&text=Memory+Game+1",
                    },
                    {
                      id: 2,
                      title: "Date Night Memories",
                      description: "Match photos from your favorite date nights and special occasions.",
                      difficulty: "Medium",
                      time: "10-15 min",
                      image: "/placeholder.svg?height=200&width=300&text=Memory+Game+2",
                    },
                    {
                      id: 3,
                      title: "Travel Snapshots",
                      description: "Test your memory with photos from all the places you've traveled together.",
                      difficulty: "Hard",
                      time: "15-20 min",
                      image: "/placeholder.svg?height=200&width=300&text=Memory+Game+3",
                    },
                    {
                      id: 4,
                      title: "Custom Memory Game",
                      description: "Create your own memory game with your favorite photos and memories.",
                      difficulty: "Custom",
                      time: "Varies",
                      image: "/placeholder.svg?height=200&width=300&text=Custom+Memory",
                      isTemplate: true,
                    },
                  ].map((game) => (
                    <Card key={game.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={game.image || "/placeholder.svg"}
                          width={300}
                          height={200}
                          alt={game.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{game.title}</CardTitle>
                        <CardDescription className="flex justify-between">
                          <span>Difficulty: {game.difficulty}</span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {game.time}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-muted-foreground">{game.description}</p>
                      </CardContent>
                      <CardFooter>
                        {game.isTemplate ? (
                          <Button className="w-full bg-rose-500 hover:bg-rose-600">Create Game</Button>
                        ) : (
                          <Button className="w-full">Play Game</Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 p-6 border border-dashed rounded-lg bg-muted/50">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                        <Brain className="h-8 w-8 text-rose-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">Memory Game Preview</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Our memory games use your own photos to create a personalized experience. Match pairs of images to
                      test your memory and reminisce about special moments together.
                    </p>
                    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mt-6">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square bg-primary/10 rounded-md flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors"
                        >
                          <Heart className="h-6 w-6 text-rose-300 dark:text-rose-700" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="challenges" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "30-Day Love Challenge",
                      description: "Complete a different romantic task each day for 30 days to strengthen your bond.",
                      duration: "30 days",
                      difficulty: "Medium",
                      image: "/placeholder.svg?height=200&width=300&text=30+Day+Challenge",
                    },
                    {
                      id: 2,
                      title: "Date Night Ideas Generator",
                      description: "Get random date night ideas and complete them for points and rewards.",
                      duration: "Ongoing",
                      difficulty: "Easy",
                      image: "/placeholder.svg?height=200&width=300&text=Date+Night+Ideas",
                    },
                    {
                      id: 3,
                      title: "Bucket List Challenge",
                      description: "Create a shared bucket list and challenge each other to complete items.",
                      duration: "Ongoing",
                      difficulty: "Varies",
                      image: "/placeholder.svg?height=200&width=300&text=Bucket+List",
                    },
                    {
                      id: 4,
                      title: "Surprise Week",
                      description: "Take turns surprising each other every day for a week with small gestures.",
                      duration: "7 days",
                      difficulty: "Medium",
                      image: "/placeholder.svg?height=200&width=300&text=Surprise+Week",
                    },
                    {
                      id: 5,
                      title: "Gratitude Challenge",
                      description: "Share one thing you're grateful for about your partner each day.",
                      duration: "21 days",
                      difficulty: "Easy",
                      image: "/placeholder.svg?height=200&width=300&text=Gratitude",
                    },
                    {
                      id: 6,
                      title: "Create Custom Challenge",
                      description: "Design your own relationship challenge with custom tasks and duration.",
                      duration: "Custom",
                      difficulty: "Custom",
                      image: "/placeholder.svg?height=200&width=300&text=Custom+Challenge",
                      isTemplate: true,
                    },
                  ].map((challenge) => (
                    <Card key={challenge.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={challenge.image || "/placeholder.svg"}
                          width={300}
                          height={200}
                          alt={challenge.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{challenge.title}</CardTitle>
                        <CardDescription className="flex justify-between">
                          <span>Duration: {challenge.duration}</span>
                          <span>Difficulty: {challenge.difficulty}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-muted-foreground">{challenge.description}</p>
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

