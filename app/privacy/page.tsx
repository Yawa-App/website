import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-600 mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">1. Information We Collect</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem] ">
                  We collect information you provide directly to us, such as when you create an account, report an incident, or contact us for support. This may include your name, email address, phone number, and location data.
                </p>
                <ul className="list-disc list-inside text-gray-500 text-[.7rem] lg:text-[1.4rem] mt-4 ml-4">
                  <li>Personal Information: When you create an account, we collect information such as your name, email address, phone number, and other identifiers as required.</li>
                  <li>Location Data: YAWA collects precise location data (GPS, Wi-Fi, and cell tower data) to provide location-based features, including incident reporting, safety alerts, and emergency response.</li>
                  <li>Device Information: We collect information about the device you use to access YAWA, such as the device model, operating system, unique identifiers, and network.</li>
                  <li>Usage Data: We collect data about your interactions with YAWA, which helps us analyze trends, troubleshoot issues, and improve app functionality.</li>
                  <li>Content and Communications: We collect and process communications, such as incident reports, photos, videos, and messages shared via the YAWA app, to provide accurate situational awareness and emergency response support.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">2. How We Use Your Information</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem] ">
                We use your information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-500 text-[.7rem] lg:text-[1.4rem] mt-4 ml-4">
                  <li>Service Provision: We process information to operate and maintain YAWA’s features, including incident reporting and emergency response support.</li>
                  <li>Safety and Security: Your information helps us ensure user safety, detect suspicious activity, and respond effectively to emergencies.</li>
                  <li>Communication: We may use your contact information to send important notifications, updates, or respond to inquiries.</li>
                  <li>Legal Compliance: We may process your information as required by law or to
                      respond to legal requests.</li>
                  <li>Analytics and Personalization: We analyze usage data to enhance our
                    services and provide a customized experience.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">3. Data Security</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem] ">
                We prioritize your data security by using industry-standard technical and administrative
                measures to protect against unauthorized access, alteration, or misuse of your
                information. However, no system is entirely secure, and we cannot guarantee absolute
                security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">4. Sharing of Information</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem] ">
                  YAWA shares your information only in specific cases:
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">5. Your Rights</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem] ">
                  You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">6. Changes to This Policy</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem] ">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">7. Contact Us</h2>
                <p className="text-gray-500 text-[.7rem] lg:text-[1.4rem] ">
                  If you have any questions about this privacy policy, please contact us at <a href='mailto:support@yawaapp.com.ng' className='text-[#03BDE9] underline'>support@yawaapp.com.ng.</a>
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

