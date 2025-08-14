"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-spk-blue to-spk-green text-white">
      <div className=" mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional{" "}
            <span className="text-yellow-300">Cleaning Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Comprehensive cleaning solutions tailored to your industry's
            specific needs, delivered with uncompromising standards of purity
            and professionalism across Australia.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Icon
                icon="mdi:clock-check"
                className="w-12 h-12 mx-auto mb-4 text-yellow-300"
              />
              <h3 className="text-lg font-bold mb-2">24/7 Availability</h3>
              <p className="text-blue-100">
                Round-the-clock service across all major Australian cities
              </p>
            </div>
            <div className="text-center">
              <Icon
                icon="mdi:leaf"
                className="w-12 h-12 mx-auto mb-4 text-yellow-300"
              />
              <h3 className="text-lg font-bold mb-2">Eco-Friendly</h3>
              <p className="text-blue-100">
                Sustainable practices and environmentally safe products
              </p>
            </div>
            <div className="text-center">
              <Icon
                icon="mdi:shield-check"
                className="w-12 h-12 mx-auto mb-4 text-yellow-300"
              />
              <h3 className="text-lg font-bold mb-2">Certified Excellence</h3>
              <p className="text-blue-100">
                Industry-leading certifications and quality standards
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
