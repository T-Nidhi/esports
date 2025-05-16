import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals behind Effortless Esports who are dedicated to revolutionizing the BGMI
            competitive scene in India.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The visionaries guiding Effortless Esports to new heights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Shubham Mahadik",
                role: "Founder",
                bio: "A passionate gamer and entrepreneur who saw the potential of mobile esports in India. Shubham founded Effortless Esports with a vision to create opportunities for talented BGMI players.",
                image: "/placeholder.svg?height=400&width=400",
                social: {
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                  facebook: "#",
                },
              },
              {
                name: "Ram Mishra",
                role: "CEO",
                bio: "With a background in business management and a love for competitive gaming, Ram oversees the strategic direction and day-to-day operations of Effortless Esports.",
                image: "/placeholder.svg?height=400&width=400",
                social: {
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                  facebook: "#",
                },
              },
              {
                name: "Akshit Mishra",
                role: "COO",
                bio: "A former professional gamer turned operations expert, Akshit ensures that all tournaments, events, and team activities run smoothly and meet the highest standards.",
                image: "/placeholder.svg?height=400&width=400",
                social: {
                  twitter: "#",
                  instagram: "#",
                  linkedin: "#",
                  facebook: "#",
                },
              },
            ].map((member, index) => (
              <Card key={index} className="border-2 hover:border-primary overflow-hidden">
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                      <Twitter size={20} />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href={member.social.instagram} className="text-muted-foreground hover:text-primary">
                      <Instagram size={20} />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin size={20} />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href={member.social.facebook} className="text-muted-foreground hover:text-primary">
                      <Facebook size={20} />
                      <span className="sr-only">Facebook</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Management Team</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The talented professionals who keep Effortless Esports running smoothly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Marketing Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Vikram Patel",
                role: "Tournament Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Neha Gupta",
                role: "Community Manager",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Arjun Singh",
                role: "Technical Director",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Players */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Pro Players</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Meet the elite BGMI athletes representing Effortless Esports in competitions across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="border-2 hover:border-primary overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Player ${index + 1}`}
                    alt={`Pro Player ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Player {index + 1}</h3>
                      <p className="text-primary">In-Game Name</p>
                    </div>
                    <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {["Assaulter", "Sniper", "IGL", "Support", "Fragger", "Rusher"][index]}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Instagram size={20} />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter size={20} />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals to join the Effortless Esports family. Whether you're a
            player, content creator, or esports professional, we'd love to hear from you.
          </p>
          <Link
            href="/careers"
            className="inline-block bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  )
}
