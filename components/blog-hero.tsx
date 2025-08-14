"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function BlogHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-spk-blue to-spk-green text-white">
      <div className=" mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <Icon
              icon="mdi:book-open-page-variant"
              className="w-10 h-10 text-white"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cleaning & <span className="text-yellow-300">Sanitation</span> Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Expert insights, tips, and best practices from Australia's leading
            cleaning professionals
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-blue-100">
            <div className="flex items-center">
              <Icon icon="mdi:lightbulb" className="w-5 h-5 mr-2" />
              <span>Professional Tips</span>
            </div>
            <div className="flex items-center">
              <Icon icon="mdi:leaf" className="w-5 h-5 mr-2" />
              <span>Eco-Friendly Solutions</span>
            </div>
            <div className="flex items-center">
              <Icon icon="mdi:shield-check" className="w-5 h-5 mr-2" />
              <span>Industry Standards</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
