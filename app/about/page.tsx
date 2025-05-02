import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award } from "lucide-react"

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="About SOLARA"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="gold-gradient">SOLARA</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 animate-fade-in animate-delay-100">
              Pioneering the future of luxury tech lifestyle since 2015. We blend cutting-edge technology with timeless
              elegance to create products that elevate everyday experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-zinc-300 mb-6">
                SOLARA was founded by Afif Zaheen with a vision to transform how we interact with technology in our
                daily lives. As a young tech enthusiast, Afif believed that tech products could be more than just
                functional tools—they could be expressions of personal style and luxury.
              </p>
              <p className="text-zinc-300 mb-6">
                What began as a small design studio has grown into a global brand recognized for its innovative approach
                to merging technology with luxury. Our journey has been defined by Afif's relentless pursuit of
                perfection and a commitment to creating products that stand the test of time.
              </p>
              <p className="text-zinc-300">
                Today, SOLARA continues to push boundaries under Afif's leadership, setting new standards for what
                technology can be. Our team of designers, engineers, and craftspeople work together to create products
                that are not just ahead of their time but timeless in their appeal.
              </p>
            </div>

            <div className="relative h-[500px] rounded-sm overflow-hidden gold-border order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="SOLARA founding team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section-padding bg-gradient-radial">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <div className="w-20 h-1 bg-gold-500/30 mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-3xl mx-auto">
              At SOLARA, our mission is to create technology that enhances life's moments through thoughtful design,
              exceptional craftsmanship, and innovative functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass p-8 rounded-sm text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gold-500/10 border border-gold-500/30 mx-auto mb-6">
                  <value.icon size={24} className="text-gold-500" />
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-zinc-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-gold-500/30 mx-auto mb-6"></div>
            <p className="text-zinc-300 max-w-3xl mx-auto">
              The visionaries and experts behind SOLARA's innovative products and experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass rounded-sm overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-contain bg-black p-2 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-gold-500 text-sm mb-4">{member.position}</p>
                  <p className="text-zinc-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <div className="w-20 h-1 bg-gold-500/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold gold-gradient mb-2">{achievement.number}</div>
                <p className="text-zinc-300">{achievement.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="glass p-6 rounded-sm flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Award size={24} className="text-gold-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1">{award.title}</h3>
                  <p className="text-zinc-400 text-sm">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Join our team background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the SOLARA Family</h2>
            <p className="text-zinc-300 mb-8">
              We're always looking for talented individuals who share our passion for innovation and luxury.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              View Opportunities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
import { Gem, Clock, Lightbulb, Heart } from "lucide-react"

const values = [
  {
    title: "Excellence",
    description: "We pursue perfection in every detail, from concept to creation.",
    icon: Gem,
  },
  {
    title: "Innovation",
    description: "We constantly push boundaries to create technology that inspires.",
    icon: Lightbulb,
  },
  {
    title: "Timelessness",
    description: "We design products that transcend trends and stand the test of time.",
    icon: Clock,
  },
  {
    title: "Passion",
    description: "We pour our heart into everything we create, driven by a love for our craft.",
    icon: Heart,
  },
]

const team = [
  {
    name: "Afif Zaheen",
    position: "Founder & CEO",
    bio: "Young tech visionary who founded SOLARA in 2015 with a mission to redefine luxury tech. Combines cutting-edge innovation with elegant design principles.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-07-05%20at%207.20.02%20PM-6wZv7o6QQyBSrYjDXVPWGmbMntfmFy.jpeg",
  },
  {
    name: "Sophia Chen",
    position: "Chief Design Officer",
    bio: "Award-winning industrial designer who leads our creative vision with her unique perspective on merging art and technology.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2188&auto=format&fit=crop",
  },
  {
    name: "Marcus Williams",
    position: "CTO",
    bio: "Tech innovator with multiple patents to his name. Oversees all technological development and innovation at SOLARA.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Isabella Martinez",
    position: "Head of Product",
    bio: "Luxury retail expert who ensures every SOLARA product delivers an exceptional user experience from unboxing to daily use.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop",
  },
  {
    name: "Jonathan Lee",
    position: "Creative Director",
    bio: "Former fashion designer who brings a unique aesthetic sensibility to our product lineup and brand identity.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop",
  },
  {
    name: "Olivia Thompson",
    position: "Head of Customer Experience",
    bio: "Dedicated to ensuring every interaction with SOLARA exceeds expectations, from purchase to support.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2088&auto=format&fit=crop",
  },
]

const achievements = [
  { number: "50+", label: "International Awards" },
  { number: "12", label: "Global Locations" },
  { number: "500K+", label: "Satisfied Customers" },
  { number: "8", label: "Years of Excellence" },
]

const awards = [
  {
    title: "Design Innovation Award 2023",
    description: "Recognized for our groundbreaking approach to wearable technology design.",
  },
  {
    title: "Tech Luxury Brand of the Year",
    description: "Awarded by International Luxury Association for excellence in luxury tech products.",
  },
  {
    title: "Sustainability Excellence",
    description: "Acknowledged for our commitment to sustainable manufacturing practices.",
  },
]
