import { BlogCard } from '@/components/blog-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const FEATURED_POSTS = [
  {
    slug: 'https://medium.com/@communicationsyawa/protecting-women-and-children-with-tech-a-path-to-a-safer-nigeria-afcd30834d50',
    title: "Protecting Women and Children with Tech: A Path to a Safer Nigeria",
    excerpt: "Imagine a Nigeria where every woman and child feels safe, walking the streets, attending school, or simply living their daily lives without fear.",
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qHSFLCYlJfhkzM3YfAEufg.jpeg",
    date: "Today",
    author: {
      name: "Linda Caroll",
      image: "/placeholder.svg"
    },
    publication: "The Generator",
    views: 11400,
    comments: 277
  },
  {
    slug: 'https://medium.com/@communicationsyawa/title-why-nigeria-needs-yawa-now-more-than-ever-ae7e4e87b488',
    title: "Why Nigeria Needs YAWA Now More Than Ever",
    excerpt: "Nigeria, our beloved nation, stands at a critical juncture. Every day, millions of Nigerians navigate the complexities of a society striving to balance growth with persistent challenges.",
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*rdALqnCl39gkEhkp4SPXDA.jpeg",
    date: "Jan 05, 2025",
    author: {
      name: "Kallol Mazumdar",
      image: "/placeholder.svg"
    },
    publication: "ILLUMINATION",
    views: 27000,
    comments: 591
  }
]

export function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Latest Updates</h2>
            <Link href="/blog">
              <Button variant="outline" className='text-gray-800'>View All Posts</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {FEATURED_POSTS.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

