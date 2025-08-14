"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { COMPANY_INFO, TEAM_EXAMPLES } from "@/lib/constants"

export function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-spk-dark mb-6">
              About <span className="text-primary">SPK</span> Cleaning Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {COMPANY_INFO.tagline} - Contract-based cleaning with dedicated team formation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/cleaning-team-professional.png"
                alt="SPK Cleaning Service professional team"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-spk-dark">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">{COMPANY_INFO.description}</p>
              <p className="text-gray-600 leading-relaxed">
                {COMPANY_INFO.operations.teamFormation} We understand that quality cleaning takes time and dedication -
                as we say, "we ain't machines" - but our systematic approach ensures thorough, reliable results every
                time.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 bg-spk-light rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-spk-dark text-center mb-8">How We Operate</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Contract-Based Model</h3>
                <p className="text-gray-600 mb-4">
                  We take on cleaning contracts for gyms, offices, and commercial spaces, then form specialized teams
                  from our skilled employees to handle each contract with precision and reliability.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon icon="mdi:check-circle" className="w-4 h-4 text-accent" />
                    <span>Dedicated team formation for each contract</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon icon="mdi:check-circle" className="w-4 h-4 text-accent" />
                    <span>Flexible shift scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon icon="mdi:check-circle" className="w-4 h-4 text-accent" />
                    <span>Ongoing contract reliability</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">{TEAM_EXAMPLES.gym.title}</h3>
                <div className="bg-white rounded-lg p-4 space-y-3">
                  <div>
                    <strong className="text-spk-dark">Team Size:</strong> {TEAM_EXAMPLES.gym.dailyTeam}
                  </div>
                  <div>
                    <strong className="text-spk-dark">Day Shifts:</strong>
                    <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-600">
                      <li>• Morning: {TEAM_EXAMPLES.gym.schedule.morning}</li>
                      <li>• Evening: {TEAM_EXAMPLES.gym.schedule.evening}</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-spk-dark">Night Deep Clean:</strong>
                    <p className="text-sm text-gray-600 mt-1">{TEAM_EXAMPLES.gym.schedule.night}</p>
                    <p className="text-sm text-gray-600 italic">{TEAM_EXAMPLES.gym.process}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-spk-dark text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon icon="mdi:account-group" className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-spk-dark mb-3">Team Formation</h3>
                <p className="text-gray-600">
                  We carefully select and form specialized teams for each contract, ensuring the right skills for every
                  job.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon icon="mdi:clock-outline" className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-spk-dark mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Morning, evening, and night shifts tailored to your business needs with seamless team transitions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon icon="mdi:star" className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-spk-dark mb-3">Thorough Results</h3>
                <p className="text-gray-600">
                  We take the time needed for quality work - each level gets 2+ hours of dedicated attention.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-spk-gray rounded-lg p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-gray-600">Active Contracts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Service Availability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">6-7</div>
                <div className="text-sm text-gray-600">Team Members per Contract</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
