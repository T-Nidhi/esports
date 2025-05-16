import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Calendar, Users, MapPin, ArrowRight } from "lucide-react"

export default function TournamentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Tournaments</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compete in Mumbai's premier BGMI tournaments organized by Effortless Esports and showcase your skills on the
            biggest stage.
          </p>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Tournaments</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Register now for these exciting BGMI competitions and battle for glory and prizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mumbai Mayhem",
                prize: "₹5,00,000",
                date: "June 15-20, 2025",
                location: "Mumbai",
                teams: "64",
                image: "/placeholder.svg?height=200&width=400",
                registrationOpen: true,
              },
              {
                title: "Effortless Cup Season 3",
                prize: "₹10,00,000",
                date: "July 10-25, 2025",
                location: "Mumbai",
                teams: "128",
                image: "/placeholder.svg?height=200&width=400",
                registrationOpen: true,
              },
              {
                title: "BGMI Pro League",
                prize: "₹3,00,000",
                date: "August 5-10, 2025",
                location: "Online",
                teams: "32",
                image: "/placeholder.svg?height=200&width=400",
                registrationOpen: false,
              },
            ].map((tournament, index) => (
              <Card key={index} className="tournament-card overflow-hidden border-2 hover:border-primary">
                <div className="relative h-48">
                  <Image
                    src={tournament.image || "/placeholder.svg"}
                    alt={tournament.title}
                    fill
                    className="object-cover"
                  />
                  {tournament.registrationOpen && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Registration Open
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tournament.title}</h3>
                  <div className="flex items-center text-primary mb-2">
                    <Trophy size={18} className="mr-2" />
                    <span>Prize Pool: {tournament.prize}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar size={18} className="mr-2" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin size={18} className="mr-2" />
                    <span>{tournament.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Users size={18} className="mr-2" />
                    <span>{tournament.teams} Teams</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button asChild className="flex-1">
                      <Link href={`/tournaments/${index + 1}`}>Details</Link>
                    </Button>
                    <Button
                      asChild
                      variant={tournament.registrationOpen ? "default" : "outline"}
                      className="flex-1"
                      disabled={!tournament.registrationOpen}
                    >
                      <Link href={tournament.registrationOpen ? `/register?tournament=${index + 1}` : "#"}>
                        {tournament.registrationOpen ? "Register" : "Coming Soon"}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Details */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Tournament</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Spotlight on our premier upcoming BGMI competition.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Effortless Cup Season 3"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Effortless Cup Season 3</h3>
              <p className="text-muted-foreground mb-6">
                The biggest BGMI tournament in Mumbai returns for its third season with an increased prize pool and more
                teams than ever before. Don't miss your chance to compete against the best teams in India and claim your
                share of the ₹10,00,000 prize pool.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Format</h4>
                  <p className="text-muted-foreground">128 Teams, Single Elimination</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Registration Fee</h4>
                  <p className="text-muted-foreground">₹1,000 per team</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Schedule</h4>
                  <p className="text-muted-foreground">July 10-25, 2025</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Finals at Mumbai Arena</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button asChild size="lg">
                  <Link href="/register?tournament=2">Register Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/tournaments/2">View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Rules */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tournament Rules</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Standard rules and regulations for all Effortless Esports tournaments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">General Rules</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <ArrowRight size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                    <span>All players must be at least 16 years of age to participate.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                    <span>Teams must consist of 4 main players and 1 substitute (optional).</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                    <span>All players must use their registered BGMI accounts.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                    <span>Teams must check in 30 minutes before their scheduled match time.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                    <span>Tournament officials' decisions are final in all matters.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Match Rules</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <ArrowRight size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                    <span>Matches will be played on the latest version of BGMI.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                    <span>Maps will be announced before each round of the tournament.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                    <span>
                      Points system: 1 kill = 1 point, with placement points as per standard BGMI tournaments.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                    <span>
                      Use of any hacks, cheats, or unauthorized modifications will result in immediate disqualification.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="mr-2 mt-1 text-primary flex-shrink-0" />
                    <span>
                      In case of technical issues, tournament officials will decide whether to restart the match.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/rules">View Complete Rulebook</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Past Tournaments */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Past Tournaments</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Relive the excitement of our previous BGMI competitions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Effortless Cup Season 2",
                date: "January 2025",
                winner: "Team XYZ",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Mumbai Winter Championship",
                date: "December 2024",
                winner: "Team ABC",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "College BGMI League",
                date: "November 2024",
                winner: "Team DEF",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((tournament, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary">
                <div className="relative h-48">
                  <Image
                    src={tournament.image || "/placeholder.svg"}
                    alt={tournament.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-bold mb-2">{tournament.title}</h3>
                      <p className="text-sm mb-1">{tournament.date}</p>
                      <p className="text-primary font-semibold">Winner: {tournament.winner}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 flex justify-center">
                  <Button asChild variant="outline">
                    <Link href={`/tournaments/past/${index + 1}`}>View Results</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/tournaments/past">View All Past Tournaments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">Common questions about our BGMI tournaments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do I register for a tournament?",
                answer:
                  "You can register for any of our tournaments by visiting the tournament page and clicking the 'Register' button. You'll need to create an account, form a team, and complete the registration process.",
              },
              {
                question: "What is the registration fee?",
                answer:
                  "Registration fees vary by tournament. Most of our tournaments have a fee between ₹500 and ₹2,000 per team. The exact fee is listed on each tournament's page.",
              },
              {
                question: "How are prize pools distributed?",
                answer:
                  "Prize distribution varies by tournament, but typically follows this structure: 1st Place: 50%, 2nd Place: 25%, 3rd Place: 15%, 4th Place: 10%. Detailed prize breakdowns are available on each tournament's page.",
              },
              {
                question: "Can I participate if I'm not from Mumbai?",
                answer:
                  "While we're based in Mumbai, most of our tournaments are open to teams from across India. Some tournaments may have regional qualifiers, so please check the specific tournament details.",
              },
              {
                question: "What happens if a team member can't participate?",
                answer:
                  "Teams are allowed one substitute player who can replace a main player if needed. The substitute must be registered during the initial team registration process.",
              },
              {
                question: "How do I contact tournament support?",
                answer:
                  "You can reach our tournament support team via email at tournaments@effortlessesports.com or through the support chat available on our website during tournament hours.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Compete?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Register now for our upcoming tournaments and show the world what you're made of.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/register">Register Your Team</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
