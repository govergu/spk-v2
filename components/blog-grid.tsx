"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export function BlogGrid() {
  const posts = getAllBlogPosts();

  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-spk-dark mb-4">
            Latest <span className="text-spk-blue">Articles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest cleaning techniques, industry
            insights, and best practices from our expert team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-spk-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Icon icon="mdi:calendar" className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                    <Icon icon="mdi:clock" className="w-4 h-4 ml-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-spk-dark group-hover:text-spk-blue transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-gray-600 mb-4 flex-1">
                    {post.excerpt}
                  </CardDescription>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-spk-blue/10 rounded-full flex items-center justify-center">
                        <Icon
                          icon="mdi:account"
                          className="w-4 h-4 text-spk-blue"
                        />
                      </div>
                      <span className="text-sm text-gray-600">
                        {post.author}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-spk-blue hover:text-spk-green hover:bg-spk-green/10"
                      >
                        Read More
                        <Icon icon="mdi:arrow-right" className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-spk-gray rounded-lg p-8 text-center"
        >
          <Icon
            icon="mdi:email-newsletter"
            className="w-12 h-12 text-spk-blue mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold text-spk-dark mb-2">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest cleaning tips, industry
            insights, and exclusive offers from SPK Cleaning Service.
          </p>
          <Link href="/contact">
            <Button className="bg-spk-blue hover:bg-blue-600 text-white">
              <Icon icon="mdi:email" className="w-4 h-4 mr-2" />
              Subscribe Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
