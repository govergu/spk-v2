"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { useState } from "react"
import { Icon } from "@iconify/react"

export function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual EmailJS integration)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", serviceType: "" })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-spk-blue to-spk-green">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Your <span className="text-yellow-300">Free Quote</span> Today
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to experience the SPK difference? Get a personalized quote for your cleaning needs in under 24
              hours.
            </p>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-spk-dark">Quick Quote Request</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <Icon icon="mdi:check-circle" className="w-16 h-16 text-spk-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-spk-dark mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your quote request and will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-spk-dark font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="border-gray-300 focus:border-spk-blue"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-spk-dark font-semibold">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-gray-300 focus:border-spk-blue"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType" className="text-spk-dark font-semibold">
                      Service Type *
                    </Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => handleInputChange("serviceType", value)}
                      required
                    >
                      <SelectTrigger className="border-gray-300 focus:border-spk-blue">
                        <SelectValue placeholder="Select the service you need" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                        <SelectItem value="specialized">Specialized Sanitation</SelectItem>
                        <SelectItem value="maintenance">Ground Maintenance</SelectItem>
                        <SelectItem value="eco-clean">Eco-Friendly Deep Clean</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-spk-green hover:bg-green-600 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon icon="mdi:loading" className="w-5 h-5 mr-2 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Icon icon="mdi:send" className="w-5 h-5 mr-2" />
                        Get My Free Quote
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-white"
          >
            <p className="text-lg mb-4">Need immediate assistance? Call us now!</p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Icon icon="mdi:phone" className="w-5 h-5 mr-2" />
                <span className="font-semibold">+61 1300 SPK CLEAN</span>
              </div>
              <div className="flex items-center">
                <Icon icon="mdi:email" className="w-5 h-5 mr-2" />
                <span className="font-semibold">info@spkcleaning.com.au</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
