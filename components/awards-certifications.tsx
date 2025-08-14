"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const certifications = [
  {
    id: 1,
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    description: "Certified quality management systems ensuring consistent service excellence.",
    icon: "mdi:certificate",
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "Green Seal Certified",
    subtitle: "Environmental Standards",
    description: "Eco-friendly cleaning products and sustainable practices certification.",
    icon: "mdi:leaf",
    color: "text-green-600",
  },
  {
    id: 3,
    title: "HACCP Compliant",
    subtitle: "Food Safety Standards",
    description: "Hazard Analysis Critical Control Points for food service environments.",
    icon: "mdi:food-apple",
    color: "text-orange-600",
  },
  {
    id: 4,
    title: "OSHA Safety Certified",
    subtitle: "Workplace Safety",
    description: "Occupational Safety and Health Administration compliance and training.",
    icon: "mdi:shield-check",
    color: "text-red-600",
  },
]

export function AwardsCertifications() {
  return (
    <section className="py-20 bg-spk-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-spk-dark mb-4">
            <span className="text-spk-blue">Awards</span> & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence is recognized through industry-leading certifications and quality standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon icon={cert.icon} className={`w-8 h-8 ${cert.color}`} />
                  </div>

                  <h3 className="text-lg font-bold text-spk-dark mb-2">{cert.title}</h3>

                  <p className="text-sm font-semibold text-spk-blue mb-3">{cert.subtitle}</p>

                  <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-spk-blue mb-2">500+</div>
              <div className="text-sm text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-spk-green mb-2">24/7</div>
              <div className="text-sm text-gray-600">Service Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-spk-blue mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-spk-green mb-2">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
