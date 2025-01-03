import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl lg:text-4xl font-bold mb-4">Yawa App</h3>
            <p className="text-gray-400">
              Empowering communities with real-time emergency reporting and response.
            </p>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-base lg:text-xl">
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-base lg:text-xl">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/request-delete" className="text-gray-400 hover:text-white">
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Download</h3>
            <ul className="text-base lg:text-xl space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  App Store
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Google Play
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Yawa App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
