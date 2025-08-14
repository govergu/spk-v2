"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Parker",
    role: "Founder & CEO",
    bio: "With over 20 years in the cleaning industry, Sarah founded SPK with a vision to revolutionize commercial cleaning through eco-friendly practices and uncompromising quality standards.",
    image: "/team-sarah-parker.png",
    specialties: ["Business Strategy", "Quality Assurance", "Client Relations"],
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Director",
    bio: "Michael oversees our nationwide operations, ensuring consistent service delivery and implementing innovative cleaning technologies across all SPK locations.",
    image: "/team-michael-chen.png",
    specialties: ["Operations Management", "Technology Integration", "Process Optimization"],
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Sanitation Specialist",
    bio: "A certified microbiologist, Dr. Rodriguez develops our specialized sanitation protocols and ensures compliance with the highest health and safety standards.",
    image: "/team-emily-rodriguez.png",
    specialties: ["Microbiology", "Health Compliance", "Protocol Development"],
  },
  {
    id: 4,
    name: "James Thompson",
    role: "Training Manager",
    bio: "James leads our comprehensive training programs, ensuring every SPK team member is equipped with the latest cleaning techniques and safety protocols.",
    image: "/team-james-thompson.png",
    specialties: ["Staff Training", "Safety Protocols", "Skill Development"],
  },
]

export function TeamSection() {
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
            Meet Our <span className="text-spk-blue">Expert</span> Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our leadership team brings decades of experience and expertise to deliver exceptional cleaning services
            across Australia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-bold text-spk-dark mb-1">{member.name}</h3>
                  <p className="text-spk-blue font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.bio}</p>

                  <div className="space-y-1">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="inline-block bg-spk-blue/10 text-spk-blue text-xs px-2 py-1 rounded-full mr-1 mb-1"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
