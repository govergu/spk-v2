"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

export function LocationsMap() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-spk-dark mb-4">
            <span className="text-primary">Nationwide</span> Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With our head office in Auburn and service teams across Australia's major cities, we're always ready to form
            dedicated cleaning teams for your contract.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Map Container */}
          <div className="relative bg-spk-gray rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.8234567890123!2d151.0234567!3d-33.8567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12345678901234%3A0x1234567890abcdef!2s2%2F55%20Dartbrook%20Rd%2C%20Auburn%20NSW%202144%2C%20Australia!5e0!3m2!1sen!2sau!4v1642000000000!5m2!1sen!2sau"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SPK Cleaning Service Head Office - Auburn, NSW"
            />

            {/* Location Markers Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Auburn Head Office Marker */}
              <div className="absolute top-[55%] right-[22%] pointer-events-auto">
                <div className="bg-accent text-white px-3 py-2 rounded-lg shadow-lg text-sm font-semibold">
                  <Icon icon="mdi:office-building" className="w-4 h-4 inline mr-1" />
                  Auburn HQ
                </div>
              </div>

              {/* Brisbane Marker */}
              <div className="absolute top-[45%] right-[15%] pointer-events-auto">
                <div className="bg-primary text-white px-3 py-2 rounded-lg shadow-lg text-sm font-semibold">
                  <Icon icon="mdi:map-marker" className="w-4 h-4 inline mr-1" />
                  Brisbane
                </div>
              </div>

              {/* Melbourne Marker */}
              <div className="absolute bottom-[25%] right-[25%] pointer-events-auto">
                <div className="bg-primary text-white px-3 py-2 rounded-lg shadow-lg text-sm font-semibold">
                  <Icon icon="mdi:map-marker" className="w-4 h-4 inline mr-1" />
                  Melbourne
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Icon icon="mdi:office-building" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-spk-dark mb-2">New South Wales (Head Office)</h3>
              <p className="text-gray-600 mb-3">
                Based in Auburn, we serve Sydney, Newcastle, Wollongong, and surrounding areas with dedicated team
                formation for all contract types.
              </p>
              <div className="text-sm text-accent">
                <p>Auburn HQ: 2, 55 Dartbrook Road</p>
                <p>Phone: +61 2 9876 5432</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon icon="mdi:palm-tree" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-spk-dark mb-2">Queensland</h3>
              <p className="text-gray-600 mb-3">
                Covering Brisbane, Gold Coast, Sunshine Coast with specialized teams for gym contracts, office
                buildings, and commercial spaces.
              </p>
              <div className="text-sm text-primary">
                <p>Brisbane Office: +61 7 3456 7890</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon icon="mdi:coffee" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-spk-dark mb-2">Victoria</h3>
              <p className="text-gray-600 mb-3">
                Melbourne, Geelong, Ballarat served by our experienced cleaning teams with flexible shift scheduling and
                multi-level coverage.
              </p>
              <div className="text-sm text-primary">
                <p>Melbourne Office: +61 3 9123 4567</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
