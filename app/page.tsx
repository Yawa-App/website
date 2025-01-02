import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, Bell, MapPin, MessageSquare, Phone, Share2, Smartphone, Radio, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-20 px-4 bg-gradient-to-br from-[#03BDE9]/10 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight text-gray-800">
                Empowering Communities, Saving Lives
              </h1>
              <p className="text-[1.2rem] lg:text-[2rem] tracking-tight text-gray-600">
                Join the community-driven emergency reporting platform that connects citizens with emergency services instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center text-center px-6 py-3 border border-transparent text-[16px] lg:text-[18px] font-medium rounded-lg text-white bg-[#03BDE9] hover:bg-[#03BDE9]/90"
                >
                  Download on App Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-[#03BDE9] text-[16px] lg:text-[18px] font-medium rounded-lg text-[#03BDE9] hover:bg-[#03BDE9]/10"
                >
                  Get it on Google Play
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 md:mt-0">
              <img
                src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Emergency Response Team"
                className="rounded-lg shadow-xl w-[100%] h-[100%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-800">Core Features</h2>
            <p className="text-gray-600 text-[1.2rem] lg:text-[2rem] tracking-tight max-w-xl mx-auto">
              Discover how Yawa App helps you stay connected and safe in emergencies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<AlertTriangle className="h-6 lg:h-10 w-6 lg:w-10  text-[#03BDE9]" />}
              title="Incident Reporting"
              description="Report emergencies with precise location tagging and media support"
            />
            <FeatureCard
              icon={<Bell className="h-6 lg:h-10 w-6 lg:w-10 text-[#03BDE9]" />}
              title="Real-Time Notifications"
              description="Stay informed about ongoing emergencies in your area"
            />
            <FeatureCard
              icon={<Phone className="h-6 lg:h-10 w-6 lg:w-10 text-[#03BDE9]" />}
              title="Emergency Call Integration"
              description="One-tap access to emergency services with location sharing"
            />
            <FeatureCard
              icon={<Share2 className="h-6 lg:h-10 w-6 lg:w-10 text-[#03BDE9]" />}
              title="Community Alerts"
              description="Share and receive local alerts from your community"
            />
            <FeatureCard
              icon={<MessageSquare className="h-6 lg:h-10 w-6 lg:w-10 text-[#03BDE9]" />}
              title="Two-Way Communication"
              description="Seamless chat or calls with emergency responders"
            />
            <FeatureCard
              icon={<MapPin className="h-6 lg:h-10 w-6 lg:w-10 text-[#03BDE9]" />}
              title="Live Incident Map"
              description="Real-time interactive map of reported incidents"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
            <p className="text-gray-600 text-[1.2rem] lg:text-[2rem] tracking-tight max-w-2xl mx-auto">
              Simple steps to report incidents and stay informed
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#03BDE9]/10 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="w-10 h-10 text-[#03BDE9]" />
              </div>
              <h3 className="text-xl lg:text-3xl font-bold text-gray-800 tracking-tight mb-2">Download & Sign Up</h3>
              <p className="text-gray-600 text-[1rem] lg:text-[1.6rem] tracking-tight">Get started with Yawa App in minutes</p>
            </div>

            <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-[#03BDE9]/10 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-10 h-10 text-[#03BDE9]" />
                  </div>
              <h3 className="text-xl lg:text-3xl font-bold tracking-tight text-gray-800 mb-2">Report Incidents</h3>
              <p className="text-gray-600 text-[1rem] lg:text-[1.6rem] tracking-tight">Quick and easy emergency reporting</p>
            </div>

            <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-[#03BDE9]/10 rounded-full flex items-center justify-center mb-4">
                    <Radio className="w-10 h-10 text-[#03BDE9]" />
                  </div>
              <h3 className="text-xl lg:text-3xl font-bold tracking-tight text-gray-800 mb-2">Stay Connected</h3>
              <p className="text-gray-600 text-[1rem] lg:text-[1.6rem] tracking-tight">Receive updates and communicate with responders</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button variant="outline" size="lg" className='text-base lg:text-xl border-gray-600 text-gray-500'>
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-gray-800">About Yawa App</h2>
            <p className=" text-gray-600 text-[1.2rem] lg:text-[2rem] tracking-tight mb-8">
              Yawa App aims to bridge the gap between citizens and emergency services, fostering safer, more aware communities.
            </p>
            <Link href="/about">
              <Button variant="outline" size="lg" className='text-base lg:text-xl border-gray-600 text-gray-500 text-[18px]'>
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-800">What Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-[1.2rem] lg:text-[2rem] tracking-tight">
              Read about how Yawa App is making a difference in communities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Yawa App has transformed how our community responds to emergencies. It's incredibly easy to use!"
              author="Bolaji Adeola"
              role="Community Leader"
            />
            <TestimonialCard
              quote="The real-time notifications have helped us stay informed and safe during critical situations."
              author="Ngozi Okoli"
              role="Resident"
            />
            <TestimonialCard
              quote="As a first responder, this app has improved our response time and coordination significantly."
              author="Abubakr Yusuf"
              role="Emergency Responder"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="my-4">{icon}</div>
        <h3 className="text-xl lg:text-3xl font-bold mb-2 text-gray-800 tracking-tight">{title}</h3>
        <p className="text-gray-600 text-[1.2rem] lg:text-[1.8rem] tracking-tight">{description}</p>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-gray-600 my-4 text-[1rem] lg:text-[1.6rem] tracking-tight">&ldquo;{quote}&rdquo;</p>
        <div>
          <p className="font-bold text-gray-600 text-[1rem] tracking-tight">{author}</p>
          <p className="text-base text-gray-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}


