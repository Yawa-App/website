import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-600 mb-4">About Yawa App</h1>
            <p className="text-gray-600 text-[1.6rem] tracking-tight">
              Bridging the gap between citizens and emergency services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-600 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Yawa App aims to bridge the gap between citizens and emergency services, fostering safer, more aware communities. We believe in the power of technology to transform emergency response and community safety.
              </p>
              <Link href="/contact">
                <Button className="bg-[#03BDE9] hover:bg-[#03BDE9]/90">
                  Get in Touch
                </Button>
              </Link>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80"
                alt="Yawa App Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-600 mb-8 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TeamMember
                name="John Doe"
                role="Founder & CEO"
                image="/placeholder.svg"
              />
              <TeamMember
                name="Jane Smith"
                role="Head of Technology"
                image="/placeholder.svg"
              />
              <TeamMember
                name="Mike Johnson"
                role="Community Manager"
                image="/placeholder.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h3 className="font-bold text-gray-600">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}
