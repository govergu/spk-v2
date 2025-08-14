"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { motion } from "framer-motion";
import Link from "next/link";
import { TEAM_EXAMPLES } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="absolute inset-0 opacity-40">
        <img
          src="/sparkling-clean-surfaces.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-spk-dark mb-6 leading-tight">
            SPK Cleaning Service:{" "}
            <span className="text-primary">Reliable Teams for</span>{" "}
            <span className="text-accent">Sanitation & Purity</span>
          </h1>

          <p className="text-xl md:text-2xl text-spk-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
            Contract-based cleaning with flexible shifts for spotless results.
            We form specialized teams for gyms, offices, and commercial spaces.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get a Quote
              </Button>
            </Link>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent"
                >
                  How We Work
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-6">
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-lg text-spk-dark">
                    {TEAM_EXAMPLES.gym.title}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Daily Team:</strong> {TEAM_EXAMPLES.gym.dailyTeam}
                    </p>
                    <p>
                      <strong>Morning:</strong>{" "}
                      {TEAM_EXAMPLES.gym.schedule.morning}
                    </p>
                    <p>
                      <strong>Evening:</strong>{" "}
                      {TEAM_EXAMPLES.gym.schedule.evening}
                    </p>
                    <p>
                      <strong>Night Deep Clean:</strong>{" "}
                      {TEAM_EXAMPLES.gym.schedule.night}
                    </p>
                    <p className="text-spk-dark/70 italic">
                      {TEAM_EXAMPLES.gym.process}
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-sm"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-sm"
      />
    </section>
  );
}
