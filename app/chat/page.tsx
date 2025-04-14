import Link from "next/link"
import Image from "next/image"
import { Heart, Send, Clock, ImageIcon, Smile, Paperclip, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChatPage() {
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
            <Link href="/chat" className="text-sm font-medium transition-colors hover:text-primary">
              Our Chat
            </Link>
            <Link href="/music" className="text-sm font-medium transition-colors hover:text-primary">
              Music
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Schedule Message
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Private Chat 📩</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A special place just for us to share messages, thoughts, and surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Contacts</h2>
                  <Button variant="ghost" size="sm">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      id: 1,
                      name: "Alex",
                      avatar: "/placeholder.svg?height=40&width=40&text=A",
                      status: "online",
                      isActive: true,
                    },
                    {
                      id: 2,
                      name: "Sarah",
                      avatar: "/placeholder.svg?height=40&width=40&text=S",
                      status: "offline",
                      lastSeen: "2 hours ago",
                    },
                  ].map((contact) => (
                    <div
                      key={contact.id}
                      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-muted ${
                        contact.isActive ? "bg-muted" : ""
                      }`}
                    >
                      <div className="relative">
                        <Image
                          src={contact.avatar || "/placeholder.svg"}
                          width={40}
                          height={40}
                          alt={contact.name}
                          className="rounded-full"
                        />
                        <span
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                            contact.status === "online" ? "bg-green-500" : "bg-gray-300"
                          }`}
                        ></span>
                      </div>
                      <div>
                        <p className="font-medium">{contact.name}</p>
                        {contact.status === "online" ? (
                          <p className="text-xs text-green-500">Online</p>
                        ) : (
                          <p className="text-xs text-muted-foreground">{contact.lastSeen}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium mb-2">Scheduled Messages</h3>
                  <div className="space-y-2">
                    {[
                      {
                        id: 1,
                        title: "Anniversary Surprise",
                        date: "Feb 14, 2024",
                        time: "8:00 AM",
                      },
                      {
                        id: 2,
                        title: "Good Morning",
                        date: "Tomorrow",
                        time: "7:00 AM",
                        recurring: true,
                      },
                    ].map((message) => (
                      <div key={message.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                        <div>
                          <p className="text-sm font-medium">{message.title}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>
                              {message.date}, {message.time}
                            </span>
                            {message.recurring && (
                              <span className="ml-1 text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 px-1 rounded">
                                Daily
                              </span>
                            )}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-3/4 flex flex-col border rounded-lg overflow-hidden bg-card">
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=A"
                      width={40}
                      height={40}
                      alt="Alex"
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">Alex</p>
                      <p className="text-xs text-green-500">Online</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex-1 p-4 overflow-y-auto h-[500px] space-y-4">
                  {[
                    {
                      id: 1,
                      sender: "Alex",
                      message: "Good morning! 🌞 Hope you slept well.",
                      time: "8:30 AM",
                      isMe: false,
                    },
                    {
                      id: 2,
                      sender: "Me",
                      message: "Morning! I did, thanks! How about you?",
                      time: "8:32 AM",
                      isMe: true,
                    },
                    {
                      id: 3,
                      sender: "Alex",
                      message: "I slept great! Ready for our date tonight?",
                      time: "8:35 AM",
                      isMe: false,
                    },
                    {
                      id: 4,
                      sender: "Me",
                      message: "Can't wait to try that new restaurant.",
                      time: "8:36 AM",
                      isMe: true,
                    },
                    {
                      id: 5,
                      sender: "Alex",
                      message: "Me too! I've heard their pasta is amazing.",
                      time: "8:38 AM",
                      isMe: false,
                    },
                    {
                      id: 6,
                      sender: "Alex",
                      message: "By the way, I found this photo from our trip last summer. Such a great memory!",
                      time: "8:40 AM",
                      isMe: false,
                      image: "/placeholder.svg?height=200&width=300&text=Summer+Trip",
                    },
                    {
                      id: 7,
                      sender: "Me",
                      message: "Wow! That was such an amazing day. We should go back there sometime.",
                      time: "8:42 AM",
                      isMe: true,
                    },
                    {
                      id: 8,
                      sender: "Alex",
                      message: "Definitely! Maybe for our anniversary?",
                      time: "8:45 AM",
                      isMe: false,
                    },
                    {
                      id: 9,
                      sender: "Me",
                      message: "That's a perfect idea! Let's plan for it.",
                      time: "8:47 AM",
                      isMe: true,
                    },
                    {
                      id: 10,
                      sender: "Alex",
                      message: "Great! I'll start looking at options. See you tonight at 7?",
                      time: "8:50 AM",
                      isMe: false,
                    },
                    {
                      id: 11,
                      sender: "Me",
                      message: "Perfect! I'll pick you up. 😊",
                      time: "8:52 AM",
                      isMe: true,
                    },
                  ].map((chat) => (
                    <div key={chat.id} className={`flex ${chat.isMe ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[70%] ${
                          chat.isMe
                            ? "bg-rose-500 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                            : "bg-muted rounded-tl-lg rounded-tr-lg rounded-br-lg"
                        } p-3`}
                      >
                        {chat.image && (
                          <div className="mb-2 rounded-md overflow-hidden">
                            <Image
                              src={chat.image || "/placeholder.svg"}
                              width={300}
                              height={200}
                              alt="Shared image"
                              className="w-full h-auto"
                            />
                          </div>
                        )}
                        <p>{chat.message}</p>
                        <p className={`text-xs mt-1 ${chat.isMe ? "text-white/70" : "text-muted-foreground"}`}>
                          {chat.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Smile className="h-5 w-5 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Paperclip className="h-5 w-5 text-muted-foreground" />
                    </Button>
                    <Input placeholder="Type a message..." className="flex-1 rounded-full" />
                    <Button size="icon" className="rounded-full bg-rose-500 hover:bg-rose-600">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">AI-Generated Love Messages</h2>
                <p className="text-muted-foreground">
                  Need inspiration? Generate sweet messages to brighten your partner's day.
                </p>
              </div>
            </div>

            <Tabs defaultValue="sweet" className="w-full">
              <div className="flex justify-center mb-6">
                <TabsList>
                  <TabsTrigger value="sweet">Sweet</TabsTrigger>
                  <TabsTrigger value="funny">Funny</TabsTrigger>
                  <TabsTrigger value="romantic">Romantic</TabsTrigger>
                  <TabsTrigger value="thoughtful">Thoughtful</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="sweet" className="mt-0">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Your smile is the highlight of my day, every single day.",
                    "Just wanted to remind you that you're the best thing that's ever happened to me.",
                    "Thinking of you always brings a smile to my face.",
                    "You make ordinary moments extraordinary just by being you.",
                    "I feel so lucky to have you in my life. You're amazing in every way.",
                    "Your love makes my heart skip a beat, even after all this time.",
                  ].map((message, i) => (
                    <div key={i} className="bg-card p-4 rounded-lg border hover:shadow-md transition-shadow">
                      <p className="italic">"{message}"</p>
                      <div className="flex justify-end mt-2">
                        <Button variant="ghost" size="sm">
                          <Send className="h-4 w-4 mr-2" />
                          Send
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button>Generate More</Button>
                </div>
              </TabsContent>

              <TabsContent value="funny" className="mt-0">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "If you were a vegetable, you'd be a cute-cumber!",
                    "Are you a magician? Because whenever I look at you, everyone else disappears.",
                    "I'd tell you a chemistry joke, but I know I wouldn't get a reaction.",
                    "You must be a keyboard, because you're just my type!",
                    "Is your name Google? Because you have everything I've been searching for.",
                    "If you were a triangle, you'd be acute one!",
                  ].map((message, i) => (
                    <div key={i} className="bg-card p-4 rounded-lg border hover:shadow-md transition-shadow">
                      <p className="italic">"{message}"</p>
                      <div className="flex justify-end mt-2">
                        <Button variant="ghost" size="sm">
                          <Send className="h-4 w-4 mr-2" />
                          Send
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button>Generate More</Button>
                </div>
              </TabsContent>

              <TabsContent value="romantic" className="mt-0">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Every moment with you feels like a dream I never want to wake up from.",
                    "My heart beats your name in a rhythm only you can hear.",
                    "In your eyes, I found a love I never knew existed.",
                    "You are the poetry I never knew how to write and the music I never knew how to play.",
                    "With you, forever doesn't seem long enough.",
                    "You're the missing piece I never knew I needed until I found you.",
                  ].map((message, i) => (
                    <div key={i} className="bg-card p-4 rounded-lg border hover:shadow-md transition-shadow">
                      <p className="italic">"{message}"</p>
                      <div className="flex justify-end mt-2">
                        <Button variant="ghost" size="sm">
                          <Send className="h-4 w-4 mr-2" />
                          Send
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button>Generate More</Button>
                </div>
              </TabsContent>

              <TabsContent value="thoughtful" className="mt-0">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "I admire your strength and how you always face challenges with grace.",
                    "Thank you for being my rock when things get tough. Your support means everything.",
                    "I appreciate how you always listen and understand, even when I struggle to express myself.",
                    "Your kindness to others is one of the many reasons I fall more in love with you every day.",
                    "I'm proud of all you've accomplished and the person you continue to become.",
                    "You inspire me to be a better person just by being who you are.",
                  ].map((message, i) => (
                    <div key={i} className="bg-card p-4 rounded-lg border hover:shadow-md transition-shadow">
                      <p className="italic">"{message}"</p>
                      <div className="flex justify-end mt-2">
                        <Button variant="ghost" size="sm">
                          <Send className="h-4 w-4 mr-2" />
                          Send
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button>Generate More</Button>
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

