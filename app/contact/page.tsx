import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="texr-2xl lg:text-4xl text-gray-800 font-bold mb-4">Contact Us</h1>
            <p className="text-[1rem] lg:text-[1.8rem] text-gray-500">
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl text-gray-600 font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base text-gray-500 font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base text-gray-500 font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-base text-gray-500 font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-base text-gray-500 font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" required className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full text-base py-3 bg-[#03BDE9] hover:bg-[#03BDE9]/90">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl text-gray-600 font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <Mail className="h-6 w-6 text-[#03BDE9]" />
                    <div>
                      <h3 className="font-bold text-xl text-gray-600 mt-4">Email</h3>
                      <p className="text-gray-500">support@yawaappapp.com.ng</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <Phone className="h-6 w-6 text-[#03BDE9]" />
                    <div>
                      <h3 className="font-bold text-xl text-gray-600 mt-4">Phone</h3>
                      <p className="text-gray-500">+234 (811) 8592 130 </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <MapPin className="h-6 w-6 text-[#03BDE9]" />
                    <div>
                      <h3 className="font-bold text-xl text-gray-600 mt-4">Address</h3>
                      <p className="text-gray-500">Mamman Shata Street, Gwarimpa, Abuja</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* ==========FAQs ============== */}
          <section className="mb-16">
            <h2 className="text-3xl text-gray-600 font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-gray-600 text-2xl font-bold mb-2 mt-4">How quickly can I expect a response?</h3>
                  <p className="text-[1rem] lg:text-[1.8rem] text-gray-500">We aim to respond to all inquiries within 24-48 hours during business days.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-gray-600 text-2xl font-bold mb-2 mt-4">Do you offer technical support?</h3>
                  <p className="text-[1rem] lg:text-[1.8rem] text-gray-500">Yes, our technical support team is available to assist you with any app-related issues.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-gray-600 text-2xl font-bold mb-2 mt-4">Can I request a feature for the app?</h3>
                  <p className="text-[1rem] lg:text-[1.8rem] text-gray-500">We welcome user feedback and feature requests. Please use the contact form to submit your ideas.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-gray-600 text-xl lg:text-3xl font-bold mb-4">Connect With Us</h2>
            <p className="text-[1rem] lg:text-[1.8rem] text-gray-500 mb-6">
              Follow us on social media for the latest updates and community stories.
            </p>
            <div className="flex justify-center space-x-4 text-gray-600">
              <Button variant="outline">Facebook</Button>
              <Button variant="outline">Twitter</Button>
              <Button variant="outline">Instagram</Button>
              <Button variant="outline">LinkedIn</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
