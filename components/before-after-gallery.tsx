"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"

const beforeAfterImages = [
  {
    id: 1,
    title: "Office Deep Clean",
    before: "/messy-office-before-cleaning.png",
    after: "/pristine-clean-office.png",
  },
  {
    id: 2,
    title: "Restaurant Kitchen Sanitation",
    before: "/commercial-kitchen-before.png",
    after: "/spotless-commercial-kitchen.png",
  },
  {
    id: 3,
    title: "Medical Facility Sterilization",
    before: "/medical-facility-before.png",
    after: "/sterile-medical-facility.png",
  },
  {
    id: 4,
    title: "Retail Space Maintenance",
    before: "/retail-store-before-cleaning.png",
    after: "/immaculate-retail-space.png",
  },
]

export function BeforeAfterGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-spk-dark mb-4">
            <span className="text-spk-blue">Before</span> & <span className="text-spk-green">After</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the transformative power of our professional cleaning services across various industries and
            environments.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Display */}
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={beforeAfterImages[selectedImage].before || "/placeholder.svg"}
                      alt={`${beforeAfterImages[selectedImage].title} - Before`}
                      className="w-full h-64 md:h-80 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={beforeAfterImages[selectedImage].after || "/placeholder.svg"}
                      alt={`${beforeAfterImages[selectedImage].title} - After`}
                      className="w-full h-64 md:h-80 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-spk-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-spk-dark">{beforeAfterImages[selectedImage].title}</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {beforeAfterImages.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  selectedImage === index ? "ring-4 ring-spk-blue shadow-lg" : "hover:shadow-md"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.after || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-24 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold text-center px-2">{image.title}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
