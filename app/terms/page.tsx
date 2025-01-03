import { Card, CardContent } from '@/components/ui/card'

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Terms of Service</h1>
          
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl text-gray-800 font-bold my-4">1. Acceptance of Terms</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem]">
                  By accessing or using the Yawa App, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you must not use the app.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">2. Description of Service</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem]">
                  Yawa App is a platform designed to facilitate emergency reporting and communication between citizens and emergency services. We do not guarantee the accuracy, completeness, or timeliness of information reported through our app.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">3. User Responsibilities</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem]">
                  Users are responsible for all content they submit through the app. False reporting or misuse of the app may result in account suspension or legal action.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">4. Privacy</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem]">
                  Your use of Yawa App is also governed by our Privacy Policy. Please review it to understand how we collect, use, and share your information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">5. Modifications to Service</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem]">
                  We reserve the right to modify or discontinue the service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">6. Limitation of Liability</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem]">
                  Yawa App and its affiliates shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">7. Governing Law</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem]">
                  These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">8. Contact Information</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem]">
                  If you have any questions about these Terms, please contact us at <a href='mailto:support@yawaapp.com.ng' className='text-[#03BDE9] underline'>support@yawaapp.com.ng.</a>
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}

