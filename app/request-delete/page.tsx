'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

export default function AccountDeletion() {
  const [contactMethod, setContactMethod] = useState('email')
  const [contactValue, setContactValue] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsDialogOpen(true)
  }

  const confirmDeletion = () => {
    // Here you would typically send a request to your backend to process the deletion
    console.log(`Deletion requested for ${contactMethod}: ${contactValue}`)
    setIsSubmitted(true)
    setIsDialogOpen(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl text-gray-800 font-bold mb-6">Request Submitted</h1>
            <p className="text-gray-600 mb-4">
              Your account deletion request has been received. We will process your request and contact you via the provided {contactMethod} within 5-7 business days.
            </p>
            <p className="text-gray-600">
              If you have any questions, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl text-gray-800 font-bold mb-6">Account Delete Request </h1>
          <p className="text-gray-600 mb-6">
            We're sorry to see you go. Please provide your email or phone number associated with your account to initiate the deletion process.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Label className='text-gray-600'>Contact Method</Label>
              <RadioGroup value={contactMethod} onValueChange={setContactMethod}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email" />
                  <Label htmlFor="email" className='text-gray-600' >Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="phone" />
                  <Label htmlFor="phone" className='text-gray-600'>Phone Number</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactValue" className='text-gray-600'>
                {contactMethod === 'email' ? 'Email Address' : 'Phone Number'}
              </Label>
              <Input
                id="contactValue"
                type={contactMethod === 'email' ? 'email' : 'tel'}
                placeholder={contactMethod === 'email' ? 'your@email.com' : '+1234567890'}
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
                className='text-gray-600'
                required
              />
            </div>
            <Button type="submit" className="w-full bg-[#03BDE9] hover:bg-[#03BDE9]/90">
              Request Deletion
            </Button>
          </form>

          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className='text-gray-800'>Are you sure you want to delete your account?</AlertDialogTitle>
                <AlertDialogDescription className='text-gray-500'>
                  This action cannot be undone. All of your data will be permanently removed from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={confirmDeletion} className="bg-red-600 hover:bg-red-700">
                  Yes, delete my account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}