import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Bell,
  MapPin,
  MessageSquare,
  Phone,
  Share2,
  Smartphone,
  Radio,
  CheckCircle,
} from "lucide-react";
import { BlogSection } from "@/components/blog-section";
import HeroImage from "@/public/yawa-hero.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="pt-24 lg:pt-32 px-4 lg:px-20 bg-[#E9F5F8]"
        // bg-cover bg-center bg-no-repeat
        // style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="container mx-auto">
          <div className="min-h-[60vh] flex flex-col gap-4 lg:flex-row lg:gap-0 items-center justify-center">
            <div className=" space-y-6 text-white/80">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[#0F0F0F] text-nowrap">
                Stay Aware. <br /> Stay Connected. <br /> Stay Safe.
              </h1>
              <p className="text-[1.2rem] lg:text-lg tracking-tight text-[#5E5E5E]">
                Your real-time companion for personal and community safety. Get
                instant alerts, report incidents effortlessly, and protect the
                people who matter to you.
              </p>
              <div className="lg:flex gap-5 items-center hidden">
                <a
                  href="#"
                  className="flex gap-2 items-center text-center px-8 py-3 border border-transparent text-[16px] font-medium rounded-xl text-white bg-[#0F0F0F] hover:bg-[#0F0F0F]/90"
                >
                  <Image
                    src={"./apple-icon.svg"}
                    alt="applestore link"
                    width={24}
                    height={24}
                  />
                  <div>
                    Download on the
                    <p className="text-xl">Apple Store</p>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.yawaapp.Yawa"
                  target="_blank"
                  className="flex gap-2 items-center text-center px-8 py-3 border border-transparent text-[16px] font-medium rounded-xl text-white bg-[#0F0F0F] hover:bg-[#0F0F0F]/90"
                >
                  <Image
                    src={"./playstore-icon.svg"}
                    alt="playstore link"
                    width={24}
                    height={24}
                  />
                  <div>
                    Get it on the
                    <p className="text-xl">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            <Image
              src={"./hero-img.svg"}
              alt="hero iamge"
              width={618}
              height={913}
              className="w-full max-w-[400px] lg:max-w-[618px] h-auto"
            />
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 lg:py-20 px-4 md:px-20">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-[#0F0F0F]">
              Why YAWA Exists
            </h2>
            <p className="text-[#0F0F0F] tracking-tight">
              Emergencies don’t wait — and neither should you. <br /> YAWA
              empowers individuals, families, and entire communities with the
              tools they <br /> need to stay informed, respond quickly, and
              support one another.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F6F6F6] rounded-xl px-6 py-9 flex flex-col gap-12 border-2 border-[#E5E7EB]">
              <div className="flex gap-5">
                <div className="rounded-full bg-[#F9EDFA] w-[60px] h-[60px] flex items-center justify-center shrink-0">
                  <Image
                    src={"./note_stack.svg"}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F0F0F] text-3xl">
                    Stay informed the moment something happens.
                  </h4>
                  <p className="text-[#5E5E5E] mt-4">
                    Receive immediate notifications about emergencies,
                    incidents, or suspicious activity in your area, so you can
                    assess risks early and act confidently.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"./phone-1.svg"}
                  alt="image"
                  width={301}
                  height={289}
                />
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-8 flex flex-col px-6 py-9 gap-7 border-2 border-[#E5E7EB]">
              <div className="flex gap-5">
                <div className="rounded-full bg-[#E0E6F9] w-[60px] h-[60px] flex items-center justify-center shrink-0">
                  <Image
                    src={"./vector.svg"}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F0F0F] text-3xl">
                    Personalized Safety Tools; Your safety, customized.
                  </h4>
                  <p className="text-[#5E5E5E] mt-4">
                    YAWA gives you one-tap SOS, Safety Circles, and
                    location-based alerts tailored to your preferences. Whether
                    you're commuting, travelling, or heading home late, the app
                    adapts to your needs.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"./phone-2.svg"}
                  alt="image"
                  width={301}
                  height={289}
                />
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-8 flex flex-col px-6 py-9 gap-12 border-2 border-[#E5E7EB]">
              <div className="flex gap-5">
                <div className="rounded-full bg-[#E8E0F9] w-[60px] h-[60px] flex items-center justify-center shrink-0">
                  <Image
                    src={"./vector-2.svg"}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F0F0F] text-3xl">
                    Everyone has a role in safety.
                  </h4>
                  <p className="text-[#5E5E5E] mt-4">
                    Use your phone to report incidents with photos, videos, or
                    descriptions. Your reports keep others alert and strengthen
                    community awareness.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"./phone-3.svg"}
                  alt="image"
                  width={301}
                  height={289}
                />
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-8 flex flex-col px-6 py-9 gap-14 border-2 border-[#E5E7EB]">
              <div className="flex gap-5">
                <div className="rounded-full bg-[#E0F4F9] w-[60px] h-[60px] flex items-center justify-center shrink-0">
                  <Image
                    src={"./vector-3.svg"}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F0F0F] text-3xl">
                    Stay always one step ahead
                  </h4>
                  <p className="text-[#5E5E5E] mt-4">
                    With intelligent alerts, simple reporting tools, and a
                    community-first approach, YAWA helps you stay proactive, not
                    reactive. You don’t just stay informed; you stay prepared.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"./phone-4.svg"}
                  alt="image"
                  width={301}
                  height={289}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-800">
              How It Works
            </h2>
            <p className="text-gray-600 text-[1.2rem] lg:text-[2rem] tracking-tight max-w-2xl mx-auto">
              Simple steps to report incidents and stay informed
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#03BDE9]/10 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="w-10 h-10 text-[#03BDE9]" />
              </div>
              <h3 className="text-xl lg:text-3xl font-bold text-gray-800 tracking-tight mb-2">
                Download & Sign Up
              </h3>
              <p className="text-gray-600 text-[1rem] lg:text-[1.6rem] tracking-tight">
                Get started with Yawa App in minutes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#03BDE9]/10 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-10 h-10 text-[#03BDE9]" />
              </div>
              <h3 className="text-xl lg:text-3xl font-bold tracking-tight text-gray-800 mb-2">
                Report Incidents
              </h3>
              <p className="text-gray-600 text-[1rem] lg:text-[1.6rem] tracking-tight">
                Quick and easy emergency reporting
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#03BDE9]/10 rounded-full flex items-center justify-center mb-4">
                <Radio className="w-10 h-10 text-[#03BDE9]" />
              </div>
              <h3 className="text-xl lg:text-3xl font-bold tracking-tight text-gray-800 mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-600 text-[1rem] lg:text-[1.6rem] tracking-tight">
                Receive updates and communicate with responders
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button
                variant="outline"
                size="lg"
                className="text-base lg:text-xl border-gray-600 text-gray-500"
              >
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
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-gray-800">
              About Yawa App
            </h2>
            <p className=" text-gray-600 text-[1.2rem] lg:text-[2rem] tracking-tight mb-8">
              Yawa App aims to bridge the gap between citizens and emergency
              services, fostering safer, more aware communities.
            </p>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="text-base lg:text-xl border-gray-600 text-gray-500 text-[18px]"
              >
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
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-800">
              What Users Say
            </h2>
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

      {/* ====== Blog section ============ */}
      <BlogSection />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="my-4">{icon}</div>
        <h3 className="text-xl lg:text-3xl font-bold mb-2 text-gray-800 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-[1.2rem] lg:text-[1.8rem] tracking-tight">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-gray-600 my-4 text-[1rem] lg:text-[1.6rem] tracking-tight">
          &ldquo;{quote}&rdquo;
        </p>
        <div>
          <p className="font-bold text-gray-600 text-[1rem] tracking-tight">
            {author}
          </p>
          <p className="text-base text-gray-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
