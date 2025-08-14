"use client"

import dynamic from "next/dynamic"

const TestimonialsCarousel = dynamic(
  () => import("./testimonials-carousel").then((mod) => ({ default: mod.TestimonialsCarousel })),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-spk-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-8 animate-pulse">
              <div className="h-32 bg-gray-200 rounded mb-4" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
)

export { TestimonialsCarousel as DynamicTestimonialsCarousel }
