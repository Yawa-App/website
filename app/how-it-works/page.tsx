import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, Bell, MapPin, MessageSquare, Phone, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Downloadimage from '@/public/yawa-preview-01.svg'
import LocationImage from '@/public/yawa-preview-02.svg'
import ReportImage from '@/public/yawa-preview-03.svg'
import UpdateImage from '@/public/yawa-preview-04.svg'

export default function HowItWorks() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-600 mb-6">How Yawa App Works</h1>
          <p className="text-lg text-gray-600 mb-8">
            Learn how Yawa App helps you stay connected and safe during emergencies with our simple, intuitive process.
          </p>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              <Step
                number={1}
                title="Download & Sign Up"
                description="Get started by downloading Yawa App from your preferred app store. Create an account with your basic information to ensure quick access during emergencies."
                image={Downloadimage}
                reverse={false}
              />
              <Step
                number={2}
                title="Enable Location Services"
                description="Allow location access to ensure accurate incident reporting and receive relevant alerts from your community and emergency services."
                image={LocationImage}
                reverse={true}
              />
              <Step
                number={3}
                title="Report Incidents"
                description="Easily report emergencies with just a few taps. Add photos, videos, and location data to help emergency responders better understand the situation."
                image={ReportImage}
                reverse={false}
              />
              <Step
                number={4}
                title="Receive Updates"
                description="Get real-time notifications about incident status, responder actions, and community alerts in your area."
                image={UpdateImage}
                reverse={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-600 text-center mb-12">Key Features in Action</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<AlertTriangle className="h-6 w-6 text-[#03BDE9]" />}
              title="Smart Incident Detection"
              description="Our app uses advanced algorithms to verify and categorize incidents, ensuring accurate and timely response."
            />
            <FeatureCard
              icon={<MapPin className="h-6 w-6 text-[#03BDE9]" />}
              title="Precise Location Tracking"
              description="GPS and location services provide exact coordinates to emergency responders."
            />
            <FeatureCard
              icon={<Phone className="h-6 w-6 text-[#03BDE9]" />}
              title="Emergency Services Integration"
              description="Direct connection to local emergency services with automatic location sharing."
            />
            <FeatureCard
              icon={<Bell className="h-6 w-6 text-[#03BDE9]" />}
              title="Custom Alert Settings"
              description="Customize notification preferences based on incident type and proximity."
            />
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6 text-[#03BDE9]" />}
              title="In-App Communication"
              description="Built-in messaging system for direct communication with emergency responders."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-[#03BDE9]" />}
              title="Data Privacy"
              description="Your personal information is encrypted and protected according to the highest security standards."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-600 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <FaqItem
                question="How quickly will emergency services respond?"
                answer="Response times vary based on the incident type and location. However, our direct integration with emergency services helps minimize delays in response time."
              />
              <FaqItem
                question="Is my personal information secure?"
                answer="Yes, we use industry-standard encryption and security measures to protect all user data. We only share essential information with emergency responders when necessary."
              />
              <FaqItem
                question="Can I use Yawa App anywhere?"
                answer="Yawa App is available in select regions where we have partnerships with local emergency services. Check our coverage map for availability in your area."
              />
              <FaqItem
                question="What happens if I lose internet connection?"
                answer="Yawa App includes offline functionality for basic emergency reporting. Once connection is restored, all information will be synchronized automatically."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-600 mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Download Yawa App now and join our community of safety-conscious citizens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#03BDE9] hover:bg-[#03BDE9]/90">
                Download on App Store
              </Button>
              <Button size="lg" variant="outline" className='border-gray-600 text-gray-500'>
                Get it on Google Play
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Step({
  number,
  title,
  description,
  image,
  reverse,
}: {
  number: number
  title: string
  description: string
  image: string
  reverse: boolean
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`space-y-6 ${reverse ? 'md:pl-12' : 'md:pr-12'}`}>
        <div className="w-14 h-14 bg-[#03BDE9] text-[24px] rounded-full flex items-center justify-center text-white font-bold">
          {number}
        </div>
        <h3 className="text-4xl font-bold text-gray-600">{title}</h3>
        <p className="text-gray-500 text-[18px]">{description}</p>
      </div>
      <div className="relative h-[800px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded-lg h-[700px] w-[400px]"
        />
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="my-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-600 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="text-lg font-bold text-gray-600 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}

