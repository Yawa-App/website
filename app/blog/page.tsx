import { BlogCard } from '@/components/blog-card'

const BLOG_POSTS = [
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
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-600">Latest Articles</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
