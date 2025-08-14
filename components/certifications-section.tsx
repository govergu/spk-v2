"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const certifications = [
  {
    id: 1,
    title: "ISO 9001:2015",
    subtitle: "Quality Management Systems",
    description:
      "Internationally recognized standard for quality management systems, ensuring consistent service delivery and continuous improvement in all our operations.",
    icon: "mdi:certificate",
    year: "Certified 2025",
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "Green Seal GS-42",
    subtitle: "Commercial & Institutional Cleaning Services",
    description:
      "Environmental certification for cleaning services that meet strict environmental standards for health, sustainability, and performance.",
    icon: "mdi:leaf-circle",
    year: "Certified 2024",
    color: "text-green-600",
  },
  {
    id: 3,
    title: "HACCP Certified",
    subtitle: "Hazard Analysis Critical Control Points",
    description:
      "Food safety management system certification ensuring our cleaning protocols meet the highest standards for food service environments.",
    icon: "mdi:food-apple",
    year: "Certified 2023",
    color: "text-orange-600",
  },
  {
    id: 4,
    title: "OSHA 30-Hour",
    subtitle: "Occupational Safety & Health",
    description:
      "Comprehensive safety training certification ensuring our team follows the highest workplace safety standards and protocols.",
    icon: "mdi:shield-check",
    year: "Certified 2025",
    color: "text-red-600",
  },
  {
    id: 5,
    title: "IICRC Certified",
    subtitle: "Institute of Inspection, Cleaning & Restoration",
    description:
      "Professional certification in cleaning and restoration techniques, ensuring expertise in specialized cleaning applications.",
    icon: "mdi:spray-bottle",
    year: "Certified 2024",
    color: "text-purple-600",
  },
  {
    id: 6,
    title: "EPA Safer Choice",
    subtitle: "Environmental Protection Agency",
    description:
      "Recognition for using cleaning products that meet EPA's Safer Choice standards for human health and environmental safety.",
    icon: "mdi:earth",
    year: "Certified 2025",
    color: "text-teal-600",
  },
]

export function CertificationsSection() {
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
            Industry <span className="text-spk-blue">Certifications</span> & Standards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is validated through rigorous industry certifications and adherence to the
            highest professional standards in cleaning and sanitation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-spk-blue">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon icon={cert.icon} className={`w-6 h-6 ${cert.color}`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-spk-dark">{cert.title}</h3>
                        <span className="text-xs text-spk-blue font-semibold bg-spk-blue/10 px-2 py-1 rounded">
                          {cert.year}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-spk-green mb-3">{cert.subtitle}</p>

                      <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-spk-gray rounded-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-spk-dark mb-2">Additional Credentials</h3>
            <p className="text-gray-600">Professional memberships and industry affiliations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Icon icon="mdi:account-group" className="w-8 h-8 text-spk-blue mx-auto mb-2" />
              <p className="text-sm font-semibold text-spk-dark">ISSA Member</p>
              <p className="text-xs text-gray-600">International Sanitary Supply Association</p>
            </div>
            <div>
              <Icon icon="mdi:shield-account" className="w-8 h-8 text-spk-green mx-auto mb-2" />
              <p className="text-sm font-semibold text-spk-dark">Fully Insured</p>
              <p className="text-xs text-gray-600">$5M Liability Coverage</p>
            </div>
            <div>
              <Icon icon="mdi:certificate-outline" className="w-8 h-8 text-spk-blue mx-auto mb-2" />
              <p className="text-sm font-semibold text-spk-dark">Bonded Team</p>
              <p className="text-xs text-gray-600">Background Checked Staff</p>
            </div>
            <div>
              <Icon icon="mdi:clock-check" className="w-8 h-8 text-spk-green mx-auto mb-2" />
              <p className="text-sm font-semibold text-spk-dark">24/7 Support</p>
              <p className="text-xs text-gray-600">Emergency Response Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
