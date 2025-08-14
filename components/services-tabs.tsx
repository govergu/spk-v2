"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES, TEAM_EXAMPLES } from "@/lib/constants";

export function ServicesTabs() {
  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Tabs defaultValue="commercial" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="specialized">Specialized</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="eco-clean">Deep Clean</TabsTrigger>
            </TabsList>

            {SERVICES.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <Card>
                  <CardHeader className="text-center pb-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon
                        icon={service.icon}
                        className="w-10 h-10 text-primary"
                      />
                    </div>
                    <CardTitle className="text-3xl font-bold text-spk-dark">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    <div className="bg-spk-light rounded-lg p-6">
                      <h3 className="text-xl font-bold text-spk-dark mb-4 flex items-center">
                        <Icon
                          icon="mdi:account-group"
                          className="w-5 h-5 mr-2 text-primary"
                        />
                        Team Formation & Scheduling
                      </h3>
                      {service.id === "specialized" && (
                        <div className="space-y-3">
                          <p className="text-gray-700">
                            <strong>
                              Example - {TEAM_EXAMPLES.gym.title}:
                            </strong>
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Daily Team:</strong>{" "}
                              {TEAM_EXAMPLES.gym.dailyTeam}
                            </div>
                            <div>
                              <strong>Shift Coverage:</strong> Morning (9am-3pm)
                              + Evening (3pm-7pm)
                            </div>
                            <div>
                              <strong>Night Deep Clean:</strong> 3-5 people
                              assigned to floors/levels
                            </div>
                            <div>
                              <strong>Time per Level:</strong> 2+ hours
                              (realistic, thorough cleaning)
                            </div>
                          </div>
                        </div>
                      )}
                      {service.id === "commercial" && (
                        <div className="space-y-3">
                          <p className="text-gray-700">
                            We form dedicated teams of 4-6 people for office
                            contracts with flexible scheduling:
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Morning Shift:</strong> 9am-3pm (with
                              lunch break)
                            </div>
                            <div>
                              <strong>Evening Shift:</strong> 3pm-7pm
                              replacement team
                            </div>
                            <div>
                              <strong>After Hours:</strong> Night teams for deep
                              cleaning
                            </div>
                            <div>
                              <strong>Coverage:</strong> Each floor gets
                              dedicated attention
                            </div>
                          </div>
                        </div>
                      )}
                      {service.id === "maintenance" && (
                        <div className="space-y-3">
                          <p className="text-gray-700">
                            Maintenance contracts use specialized teams of 3-5
                            people per property:
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Team Size:</strong> 3-5 people per
                              contract
                            </div>
                            <div>
                              <strong>Schedule:</strong> Flexible based on
                              property needs
                            </div>
                            <div>
                              <strong>Coverage:</strong> Multi-level property
                              maintenance
                            </div>
                            <div>
                              <strong>Approach:</strong> Systematic, thorough
                              coverage
                            </div>
                          </div>
                        </div>
                      )}
                      {service.id === "eco-clean" && (
                        <div className="space-y-3">
                          <p className="text-gray-700">
                            Deep clean contracts deploy night teams after
                            business closure:
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Night Teams:</strong> 3-5 people per
                              contract
                            </div>
                            <div>
                              <strong>Time Allocation:</strong> 2+ hours per
                              level/unit
                            </div>
                            <div>
                              <strong>Approach:</strong> "We ain't machines" -
                              quality over speed
                            </div>
                            <div>
                              <strong>Coverage:</strong> Complete floor-by-floor
                              cleaning
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Features Grid */}
                    <div>
                      <h3 className="text-xl font-bold text-spk-dark mb-4">
                        Key Features
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <Icon
                              icon="mdi:check-circle"
                              className="w-5 h-5 text-accent flex-shrink-0"
                            />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center pt-6 border-t">
                      <p className="text-gray-600 mb-4">
                        Ready to experience our contract-based team approach?
                        Get detailed information about our{" "}
                        {service.title.toLowerCase()} services.
                      </p>
                      <div className="space-x-4">
                        <Link href={`/services/${service.id}`}>
                          <Button className="bg-primary hover:bg-primary/90 text-white">
                            <Icon
                              icon="mdi:information"
                              className="w-4 h-4 mr-2"
                            />
                            Learn More
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button
                            variant="outline"
                            className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                          >
                            <Icon icon="mdi:phone" className="w-4 h-4 mr-2" />
                            Get Quote
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
