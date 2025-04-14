import Link from "next/link"
import Image from "next/image"
import { Heart, Calendar, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FuturePlansPage() {
  // Sample future plans
  const futurePlans = [
    {
      id: 1,
      title: "Trip to Paris",
      targetDate: "Summer 2024",
      category: "Travel",
      description: "Visit the Eiffel Tower, explore the Louvre, and enjoy romantic dinners in the city of love.",
      image: "/placeholder.svg?height=400&width=600&text=Paris",
    },
    {
      id: 2,
      title: "Learn to Dance Together",
      targetDate: "Fall 2023",
      category: "Activities",
      description: "Take salsa dancing lessons every Thursday night for 3 months.",
      image: "/placeholder.svg?height=400&width=600&text=Dancing",
    },
    {
      id: 3,
      title: "Northern Lights Adventure",
      targetDate: "Winter 2024",
      category: "Travel",
      description: "Travel to Iceland to see the Northern Lights and stay in a glass igloo.",
      image: "/placeholder.svg?height=400&width=600&text=Northern+Lights",
    },
    {
      id: 4,
      title: "Cooking Class Series",
      targetDate: "Spring 2024",
      category: "Activities",
      description: "Take a series of international cooking classes to learn how to make dishes from around the world.",
      image: "/placeholder.svg?height=400&width=600&text=Cooking",
    },
    {
      id: 5,
      title: "Road Trip Along the Coast",
      targetDate: "Summer 2024",
      category: "Travel",
      description: "Drive along the Pacific Coast Highway, stopping at beautiful beaches and coastal towns.",
      image: "/placeholder.svg?height=400&width=600&text=Road+Trip",
    },
    {
      id: 6,
      title: "Build a Garden Together",
      targetDate: "Spring 2024",
      category: "Home",
      description: "Create a beautiful garden with flowers, vegetables, and a small sitting area.",
      image: "/placeholder.svg?height=400&width=600&text=Garden",
    },
  ]

  // Group plans by category
  const categories = [...new Set(futurePlans.map((plan) => plan.category))]

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
            <Link href="/future-plans" className="text-sm font-medium transition-colors hover:text-primary">
              Future Plans
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Add Plan
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Future Plans</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dreams, goals, and adventures we want to experience together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            {categories.map((category) => (
              <div key={category} className="mb-16">
                <h2 className="text-2xl font-bold mb-8">{category}</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {futurePlans
                    .filter((plan) => plan.category === category)
                    .map((plan) => (
                      <Card key={plan.id} className="overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <Image
                            src={plan.image || "/placeholder.svg"}
                            width={600}
                            height={400}
                            alt={plan.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{plan.title}</CardTitle>
                          <CardDescription>
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4" />
                              <span>Target: {plan.targetDate}</span>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>{plan.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Mark Complete
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}

                  {/* Add new plan card */}
                  <Card className="flex flex-col items-center justify-center p-6 border-dashed">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                        <Plus className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Add New {category} Plan</h3>
                        <p className="text-sm text-muted-foreground">
                          Create a new adventure or goal to look forward to together.
                        </p>
                      </div>
                      <Button>Add Plan</Button>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
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

