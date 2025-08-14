"use client"

import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { BlogPostType } from "@/lib/blog"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-spk-blue to-spk-green text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <Link href="/blog">
                <Button variant="ghost" size="sm" className="text-blue-100 hover:text-white hover:bg-white/10 mb-4">
                  <Icon icon="mdi:arrow-left" className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center text-blue-100 space-x-6 mb-8">
              <div className="flex items-center">
                <Icon icon="mdi:account" className="w-5 h-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Icon icon="mdi:calendar" className="w-5 h-5 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Icon icon="mdi:clock" className="w-5 h-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <p className="text-xl text-blue-100 leading-relaxed">{post.excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto -mt-10 relative z-10"
          >
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div
              className="prose prose-lg max-w-none prose-headings:text-spk-dark prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-spk-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-spk-dark prose-ul:text-gray-700 prose-ol:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-spk-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-spk-dark mb-4">Ready to Experience Professional Cleaning?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let SPK Cleaning Service transform your space with our expert cleaning solutions.
            </p>
            <div className="space-x-4">
              <Link href="/contact">
                <Button size="lg" className="bg-spk-green hover:bg-green-600 text-white">
                  <Icon icon="mdi:phone" className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-spk-blue text-spk-blue hover:bg-spk-blue hover:text-white bg-transparent"
                >
                  <Icon icon="mdi:broom" className="w-5 h-5 mr-2" />
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
