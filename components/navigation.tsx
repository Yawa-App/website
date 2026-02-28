"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 lg:bg-transparent">
      <nav className="container mx-auto px-4 lg:px-5 h-16 flex items-center justify-between mt-2.5">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="107.000000pt"
            height="22.000000pt"
            viewBox="0 0 117.000000 32.000000"
          >
            <path
              d="M63 210c70-123 68-122 85-78 11 29 9 37-18 85-36 64-36 60-4 59 16-1 32-12 42-29 21-34 24-34 45 3 16 27 57 43 57 23 0-5-27-55-59-113-57-103-58-106-43-132 9-15 19-24 23-20 8 7 139 235 165 285l15 27H2l61-110zM533 252c-14-2-26-16-36-40l-15-37-15 38c-13 29-22 37-41 37h-25l29-62c17-35 30-78 30-95 0-26 4-33 20-33s20 7 20 36c0 21 13 60 31 95 35 64 35 67 2 61zM1071 251c-19-5-90-152-91-188 0-2 11-3 25-3 21 0 27 8 45 70 11 39 23 70 25 70s14-31 25-70c19-63 23-70 46-70 19 0 25 4 21 14-3 8-18 50-33 93-32 92-32 92-63 84zM603 233c-3-10-19-52-35-93-15-41-28-76-28-77 0-2 11-3 25-3 21 0 27 8 45 70 11 39 23 70 25 70s14-31 25-70c19-63 23-70 46-70 21 0 25 4 19 18-3 9-18 52-33 94-25 72-29 78-55 78-17 0-30-7-34-17zM746 163c13-48 24-92 24-96 0-5 12-7 27-5 24 3 29 10 43 68l16 65 19-67c23-86 57-97 75-25 6 23 18 64 26 91s14 51 14 53-11 3-24 3c-21 0-25-7-37-67l-13-68-14 68c-14 63-17 67-42 67s-28-4-40-60c-16-75-24-76-36-2-8 52-11 57-36 60l-26 3 24-88z"
              transform="matrix(.1 0 0 -.1 0 32)"
            />
          </svg>
        </Link>

        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} lg:block absolute lg:relative top-16 lg:top-1 left-0 right-0 bg-white lg:bg-transparent`}
        >
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:py-3 lg:px-8 lg:rounded-full bg-white/80">
            {/* <Link href="/about" className="hover:text-[#03BDE9] text-gray-600">
              About
            </Link> */}
            <Link href="/blog" className="hover:text-[#03BDE9] text-gray-600">
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#03BDE9] text-gray-600"
            >
              Contact
            </Link>
            <Link
              href="/how-it-works"
              className="hover:text-[#03BDE9] text-gray-600"
            >
              How It Works
            </Link>
          </div>
        </div>
        <Button className="w-full hidden lg:block lg:w-auto bg-[#03BDE9] hover:bg-[#03BDE9]/90">
          Download Now
        </Button>
      </nav>
    </header>
  );
}
