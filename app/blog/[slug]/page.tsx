import { BlogPost } from "@/components/blog-post"
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found - SPK Cleaning Service Blog",
    }
  }

  return {
    title: `${post.title} - SPK Cleaning Service Blog`,
    description: post.excerpt,
    keywords: `${post.keywords}, cleaning, sanitation, SPK cleaning service`,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
}
