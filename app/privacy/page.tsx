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
                <p className="text-gray-600 text-[.8rem] lg:text-[1.6rem]">
                  We collect information you provide directly to us, such as when you create an account, report an incident, or contact us for support. This may include your name, email address, phone number, and location data.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-[.7rem] lg:text-[1.4rem] mt-4">
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
                <p className="text-gray-600">
                  We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations. This includes sharing relevant information with emergency services when you report an incident.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">3. Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">4. Sharing of Information</h2>
                <p className="text-gray-600">
                  We may share your information with emergency services, law enforcement, or as required by law. We do not sell your personal information to third parties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">5. Your Rights</h2>
                <p className="text-gray-600">
                  You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">6. Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 my-4">7. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this privacy policy, please contact us at privacy@yawaapp.com.
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

