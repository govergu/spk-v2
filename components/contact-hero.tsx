"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

export function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-spk-blue to-spk-green text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <Icon icon="mdi:phone-in-talk" className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your <span className="text-yellow-300">Free Quote</span> Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Ready to experience professional cleaning excellence? Contact our expert team for a customized solution
            tailored to your specific needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Icon icon="mdi:clock-fast" className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-bold mb-2">Quick Response</h3>
              <p className="text-blue-100">We respond to all inquiries within 2 hours</p>
            </div>
            <div className="text-center">
              <Icon icon="mdi:calculator" className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-bold mb-2">Free Estimates</h3>
              <p className="text-blue-100">No obligation quotes for all services</p>
            </div>
            <div className="text-center">
              <Icon icon="mdi:handshake" className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-lg font-bold mb-2">Expert Consultation</h3>
              <p className="text-blue-100">Professional advice from industry specialists</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
