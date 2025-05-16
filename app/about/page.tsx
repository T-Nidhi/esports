import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Target, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">About Effortless Esports</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2022, Effortless Esports has quickly established itself as Mumbai's premier BGMI esports
                organization. We're dedicated to discovering and nurturing the best gaming talent in India.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to elevate Indian esports to global standards through professional tournaments,
                comprehensive player development, and creating a sustainable ecosystem for gamers.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Effortless Esports Headquarters"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The journey of Effortless Esports from a passionate idea to Mumbai's leading BGMI organization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">From Passion to Profession</h3>
              <p className="text-muted-foreground mb-4">
                Effortless Esports was born from the shared passion of three friends - Shubham Mahadik, Ram Mishra, and
                Akshit Mishra - who believed in the potential of mobile esports in India. What started as friendly BGMI
                matches in college dorms quickly evolved into a vision for a professional esports organization.
              </p>
              <p className="text-muted-foreground mb-4">
                In 2022, with the mobile gaming scene exploding in India, the trio officially launched Effortless
                Esports with a mission to provide a platform for talented BGMI players to showcase their skills and
                pursue gaming as a legitimate career.
              </p>
              <p className="text-muted-foreground">
                Today, Effortless Esports stands as a testament to their vision, having organized numerous successful
                tournaments, built championship-winning rosters, and created a community of thousands of passionate
                gamers across Mumbai and beyond.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Effortless Esports Journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The core principles that guide everything we do at Effortless Esports.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="h-10 w-10 text-primary" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every tournament we organize, every player we train, and every community initiative we undertake.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Community",
                description:
                  "We believe in building a supportive, inclusive community where gamers can connect, learn, and grow together.",
              },
              {
                icon: <Target className="h-10 w-10 text-primary" />,
                title: "Innovation",
                description:
                  "We constantly push the boundaries of what's possible in esports, pioneering new formats, technologies, and experiences.",
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Integrity",
                description:
                  "We uphold the highest standards of sportsmanship, fair play, and ethical conduct in all our operations.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Milestones that mark our journey in the world of BGMI esports.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted/30 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Tournaments Organized</p>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-2">₹50,00,000+</h3>
              <p className="text-muted-foreground">Prize Money Awarded</p>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p className="text-muted-foreground">Community Members</p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Notable Milestones</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2022
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Foundation of Effortless Esports</h4>
                  <p className="text-muted-foreground">Established as a BGMI-focused esports organization in Mumbai.</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2023
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">First Major Tournament</h4>
                  <p className="text-muted-foreground">
                    Organized the inaugural Effortless Cup with 64 teams and a prize pool of ₹5,00,000.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2024
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">National Recognition</h4>
                  <p className="text-muted-foreground">
                    Recognized as one of India's top 10 esports organizations by Esports Federation of India.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2025
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">International Expansion</h4>
                  <p className="text-muted-foreground">
                    Launched partnerships with international esports organizations and expanded tournament offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We're proud to collaborate with these brands to elevate the BGMI esports ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-background p-6 rounded-lg flex items-center justify-center h-32">
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Partner ${index + 1}`}
                  alt={`Partner ${index + 1}`}
                  width={160}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
