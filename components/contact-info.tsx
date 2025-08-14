"use client";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";

const contactMethods = [
  {
    icon: "mdi:phone",
    title: "Call Us",
    primary: COMPANY_INFO.phone,
    secondary: "Available 24/7 for emergencies",
    action: `tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`,
    color: "text-primary",
  },
  {
    icon: "mdi:email",
    title: "Email Us",
    primary: COMPANY_INFO.email,
    secondary: "We respond within 2 hours",
    action: `mailto:${COMPANY_INFO.email}`,
    color: "text-accent",
  },
  {
    icon: "mdi:clock",
    title: "Business Hours",
    primary: COMPANY_INFO.hours,
    secondary: "Contract consultations available",
    action: null,
    color: "text-primary",
  },
  {
    icon: "mdi:map-marker",
    title: "Head Office",
    primary: COMPANY_INFO.address,
    secondary: "Nationwide service coverage",
    action: null,
    color: "text-accent",
  },
];

const officeLocations = [
  {
    state: "New South Wales",
    city: "Auburn (Head Office)",
    address: "2, 55 Dartbrook Road, Auburn, NSW, Australia",
    phone: "+61 2 9876 5432",
    email: "auburn@spkcleaning.com.au",
    isHeadOffice: true,
  },
  {
    state: "Queensland",
    city: "Brisbane",
    address: "Suite 8, 456 Queen Street, Brisbane QLD 4000",
    phone: "+61 7 3456 7890",
    email: "brisbane@spkcleaning.com.au",
    isHeadOffice: false,
  },
  {
    state: "Victoria",
    city: "Melbourne",
    address: "Floor 12, 789 Collins Street, Melbourne VIC 3000",
    phone: "+61 3 9123 4567",
    email: "melbourne@spkcleaning.com.au",
    isHeadOffice: false,
  },
];

export function ContactInfo() {
  return (
    <section className="py-16 bg-spk-gray w-100% flex justify-center">
      <div className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto lg:mx-0"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-spk-dark mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to discuss your cleaning contract needs? Our team formation
              specialists are standing by to create a customized solution for
              your business.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid gap-4 mb-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          icon={method.icon}
                          className={`w-6 h-6 ${method.color}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-spk-dark">
                          {method.title}
                        </h3>
                        {method.action ? (
                          <a
                            href={method.action}
                            className="text-primary hover:text-accent font-medium transition-colors"
                          >
                            {method.primary}
                          </a>
                        ) : (
                          <p className="font-medium text-spk-dark">
                            {method.primary}
                          </p>
                        )}
                        <p className="text-sm text-gray-600">
                          {method.secondary}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-spk-dark flex items-center">
                  <Icon
                    icon="mdi:office-building"
                    className="w-6 h-6 mr-2 text-primary"
                  />
                  Our Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div
                    key={index}
                    className={cn(
                      "border-l-4 pl-4",
                      office.isHeadOffice ? "border-accent" : "border-primary"
                    )}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-bold text-spk-dark">{office.city}</h4>
                      {office.isHeadOffice && (
                        <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                          Head Office
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {office.address}
                    </p>
                    <div className="space-y-1">
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="flex items-center text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Icon icon="mdi:phone" className="w-4 h-4 mr-1" />
                        {office.phone}
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-center text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Icon icon="mdi:email" className="w-4 h-4 mr-1" />
                        {office.email}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <CardContent className="p-6 text-center">
                <Icon
                  icon="mdi:alert-circle"
                  className="w-8 h-8 mx-auto mb-3"
                />
                <h3 className="text-lg font-bold mb-2">
                  Emergency Cleaning Services
                </h3>
                <p className="mb-4">
                  Need immediate team deployment? We can form emergency cleaning
                  teams within hours for urgent situations.
                </p>
                <a
                  href="tel:+611800EMERGENCY"
                  className="inline-flex items-center bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Icon icon="mdi:phone-alert" className="w-4 h-4 mr-2" />
                  Call Emergency Line
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
