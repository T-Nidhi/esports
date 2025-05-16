import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Events</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our past and upcoming BGMI events, from tournaments to community meetups and gaming festivals.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Mark your calendar for these exciting BGMI events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "BGMI Community Meetup",
                date: "May 28, 2025",
                location: "Café Gaming, Mumbai",
                description:
                  "Join us for a casual meetup with fellow BGMI enthusiasts. Meet pro players, participate in mini-tournaments, and network with the community.",
                image: "/placeholder.svg?height=250&width=500",
              },
              {
                title: "Effortless Gaming Festival",
                date: "June 5-6, 2025",
                location: "Exhibition Center, Mumbai",
                description:
                  "A two-day gaming extravaganza featuring BGMI tournaments, cosplay competitions, gaming merchandise, and special guest appearances.",
                image: "/placeholder.svg?height=250&width=500",
              },
            ].map((event, index) => (
              <Card key={index} className="event-card overflow-hidden border-2 hover:border-primary">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-full min-h-[200px]">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar size={18} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin size={18} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Button asChild className="w-full">
                      <Link href={`/events/${index + 1}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Event</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">Don't miss our biggest event of the year!</p>
          </div>
          <div className="bg-background rounded-lg overflow-hidden border-2 border-primary">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Effortless Gaming Festival"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">Effortless Gaming Festival</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar size={18} className="mr-2" />
                  <span>June 5-6, 2025</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin size={18} className="mr-2" />
                  <span>Exhibition Center, Mumbai</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Users size={18} className="mr-2" />
                  <span>Expected Attendance: 5,000+</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  The Effortless Gaming Festival is Mumbai's premier gaming event, bringing together gamers, content
                  creators, and esports enthusiasts for two days of non-stop action. Featuring BGMI tournaments with a
                  prize pool of ₹5,00,000, cosplay competitions, gaming merchandise, tech demos, and special guest
                  appearances.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Entry Fee</h4>
                    <p className="text-muted-foreground">₹500 per person</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-1">Tournament Entry</h4>
                    <p className="text-muted-foreground">₹2,000 per team</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button asChild size="lg">
                    <Link href="/events/2">Get Tickets</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/register?event=2">Register Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Past Events</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">Relive the excitement of our previous events.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mumbai Gaming Festival",
                date: "March 15, 2025",
                description: "A celebration of gaming culture with over 5,000 attendees and 32 competing teams.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "BGMI College Championship",
                date: "February 10, 2025",
                description: "Inter-college tournament featuring the best student teams from across Maharashtra.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Pro Player Meet & Greet",
                date: "January 25, 2025",
                description: "Fan event where attendees got to meet and play with professional BGMI players.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Effortless Cup Season 2 Finals",
                date: "January 15, 2025",
                description:
                  "The grand finale of our flagship tournament with 16 finalist teams competing for ₹7,00,000.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Mumbai Winter Championship",
                date: "December 20, 2024",
                description: "Winter-themed BGMI tournament with 64 teams from across Mumbai.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Gaming for Charity",
                date: "November 30, 2024",
                description: "Charity event raising funds for children's education through BGMI exhibition matches.",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((event, index) => (
              <Card key={index} className="event-card overflow-hidden border-2 hover:border-primary">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Calendar size={18} className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/events/past/${index + 1}`}>View Recap</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/events/past" className="flex items-center">
                View All Past Events <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Event Calendar</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Stay up-to-date with all our upcoming BGMI events.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg border-2 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">May 2025</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        15
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">BGMI Workshop</h4>
                      <p className="text-muted-foreground text-sm">Online</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        28
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Community Meetup</h4>
                      <p className="text-muted-foreground text-sm">Café Gaming, Mumbai</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">June 2025</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        5-6
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Effortless Gaming Festival</h4>
                      <p className="text-muted-foreground text-sm">Exhibition Center, Mumbai</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        15
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Mumbai Mayhem Tournament</h4>
                      <p className="text-muted-foreground text-sm">Mumbai</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/calendar">View Full Calendar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Host an Event?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Partner with Effortless Esports to organize a BGMI tournament or gaming event at your college, corporate
            office, or venue.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
