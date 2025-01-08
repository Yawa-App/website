import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bookmark, MoreHorizontal, MessageCircle } from 'lucide-react'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  author: {
    name: string
    image: string
  }
  publication?: string
  views: number
  comments: number
}

export function BlogCard({
  slug,
  title,
  excerpt,
  coverImage,
  date,
  author,
  publication,
  views,
  comments,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden group">
      <Link href={slug} target='_blank'>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          {/* <div className="relative w-6 h-6 rounded-full overflow-hidden">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-sm">
            <span className="text-gray-600">In </span>
            {publication && (
              <>
                <Link href={`/publication/${publication.toLowerCase()}`} className="font-medium hover:text-[#03BDE9]">
                  {publication}
                </Link>
                <span className="text-gray-600"> by </span>
              </>
            )}
            <Link href={`/author/${author.name.toLowerCase()}`} className="font-medium hover:text-[#03BDE9]">
              {author.name}
            </Link>
          </div> */}
        </div>
        <Link href={slug} target='_blank'>
          <h3 className="text-xl text-gray-600 font-bold mb-2 group-hover:text-[#03BDE9]">{title}</h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <time>{date}</time>
            <div className="flex items-center space-x-1">
              <span>{views.toLocaleString()}</span>
              <span className="text-xs">views</span>
            </div>
            {/* <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{comments}</span>
            </div> */}
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Button variant="ghost" size="icon" className="hover:text-[#03BDE9]">
              <Bookmark className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-[#03BDE9]">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
