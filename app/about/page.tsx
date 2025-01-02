import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image'
import Link from 'next/link'
import Downloadimage from '@/public/yawa-preview-01.svg'

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-600 mb-4">About Yawa App</h1>
            <p className="text-gray-500 text-[1.2rem] lg:text-[2rem] tracking-tight">
              Bridging the gap between citizens and emergency services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-[100px]">
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-600 mb-4">Our Mission</h2>
              <p className="text-gray-500 mb-6 text-[1rem] lg:text-[1.8rem]">
                Yawa App aims to bridge the gap between citizens and emergency services, fostering safer, more aware communities. We believe in the power of technology to transform emergency response and community safety.
              </p>
              <Link href="/contact">
                <Button className="text-[18px] bg-[#03BDE9] hover:bg-[#03BDE9]/90">
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

          <section className="mb-16">
            <h2 className="text-xl lg:text-3xl text-gray-800 font-bold mb-6">Who We Are</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px]">
                <Image
                  src="https://images.pexels.com/photos/8553867/pexels-photo-8553867.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Yawa App Team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-gray-500 text-[1rem] lg:text-[1.8rem] mb-4">
                  Yawa App is a team of dedicated professionals passionate about leveraging technology to enhance community safety. Our diverse team includes software engineers, emergency response experts, and community outreach specialists.
                </p>
                <p className="text-gray-500 text-[1rem] lg:text-[1.8rem]">
                  Founded in 2020, we've quickly grown from a small startup to a recognized name in community-driven emergency response solutions.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-xl lg:text-3xl text-gray-800 font-bold mb-6">What We Do</h2>
            <p className="text-gray-500 text-[1rem] lg:text-[1.8rem] mb-4">
              At Yawa App, we develop and maintain a cutting-edge mobile application that empowers citizens to report emergencies, receive real-time updates, and connect with emergency services seamlessly.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl lg:text-3xl text-gray-600 font-bold mb-2 mt-6">Emergency Reporting</h3>
                  <p className="text-gray-500 text-[1rem] lg:text-[1.8rem]">Enable quick and accurate reporting of incidents with location data and media support.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl lg:text-3xl text-gray-600 font-bold mb-2 mt-6">Real-time Updates</h3>
                  <p className="text-gray-500 text-[1rem] lg:text-[1.8rem]">Provide timely notifications about ongoing emergencies and response efforts.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl lg:text-3xl text-gray-600 font-bold mb-2 mt-6">Community Alerts</h3>
                  <p className="text-gray-500 text-[1rem] lg:text-[1.8rem]">Facilitate sharing of important information among community members.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl lg:text-3xl text-gray-600 font-bold mb-2 mt-6">Emergency Services Integration</h3>
                  <p className="text-gray-500 text-[1rem] lg:text-[1.8rem]">Streamline communication between citizens and emergency responders.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

          {/* ========= How we do it ============== */}
          <section className="mb-16 bg-gray-50 py-12 lg:py-20 px-4">
            <h2 className="text-xl lg:text-3xl text-gray-800 font-bold mb-6">How We Do It</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[800px]">
                <Image
                  src={Downloadimage}
                  alt="Yawa App Process"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <ol className="list-decimal list-inside space-y-6">
                  <li className="text-gray-500 text-[.8rem] lg:text-[1.6rem]">Develop user-friendly mobile applications for iOS and Android</li>
                  <li className="text-gray-500 text-[.8rem] lg:text-[1.6rem]">Implement robust backend systems for data processing and storage</li>
                  <li className="text-gray-500 text-[.8rem] lg:text-[1.6rem]">Collaborate with local emergency services to integrate our platform</li>
                  <li className="text-gray-500 text-[.8rem] lg:text-[1.6rem]">Continuously gather user feedback and iterate on our features</li>
                  <li className="text-gray-500 text-[.8rem] lg:text-[1.6rem]">Invest in cutting-edge technologies like AI and machine learning for incident verification</li>
                </ol>
              </div>
            </div>
          </section>

        <div className="max-w-4xl mx-auto">
          {/* ============ The team ================= */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-600 mb-8 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TeamMember
                name="Edward T. Ikpaahindi"
                role="Founder & CEO"
                image="/placeholder.svg"
              />
              <TeamMember
                name="Iysah A. Yusuf"
                role="Head of Technology"
                image="/placeholder.svg"
              />
              <TeamMember
                name="Shola O. Odunlami"
                role="Community Manager"
                image="/placeholder.svg"
              />
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-xl lg:text-3xl text-gray-800 font-bold mb-6">Our Mission</h2>
            <div className="bg-[#03BDE9] text-white p-8 rounded-lg">
              <p className="text-[.8rem] lg:text-[1.6rem] font-semibold mb-4">
                "To empower communities with the tools and information they need to stay safe, respond quickly to emergencies, and build resilience in the face of challenges."
              </p>
              <p className='text-[18px] mt-4'>
                We strive to create a world where every citizen feels connected, informed, and capable of making a difference in emergency situations. By bridging the gap between individuals and emergency services, we aim to foster safer, more prepared communities across the globe.
              </p>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-xl lg:text-3xl text-gray-800  font-bold mb-6">Join Our Mission</h2>
            <p className="text-gray-500 text-[.8rem] lg:text-[1.6rem] mb-8">
              Be a part of the Yawa community and help us create safer neighborhoods.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-[18px] bg-[#03BDE9] hover:bg-[#03BDE9]/90">
                Get in Touch
              </Button>
            </Link>
          </section>
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
      <p className="text-gray-500 text-[.8rem] lg:text-[1.6rem]">{role}</p>
    </div>
  )
}
