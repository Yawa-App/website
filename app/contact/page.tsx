import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-600 mb-8 text-center">Contact Us</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2">
                Name
              </label>
              <Input id="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2">
                Email
              </label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2">
                Message
              </label>
              <Textarea id="message" required className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full bg-[#03BDE9] hover:bg-[#03BDE9]/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

