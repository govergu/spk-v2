"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { SERVICES, TEAM_EXAMPLES } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  contractType: string;
  teamSize: string;
  shiftPreference: string;
  propertySize: string;
  preferredDate: Date | undefined;
  message: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    contractType: "",
    teamSize: "",
    shiftPreference: "",
    propertySize: "",
    preferredDate: undefined,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.serviceType)
      newErrors.serviceType = "Service type is required";
    if (!formData.contractType)
      newErrors.contractType = "Contract type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // EmailJS integration would go here
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate EmailJS send
      console.log("Form submitted:", formData);

      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          contractType: "",
          teamSize: "",
          shiftPreference: "",
          propertySize: "",
          preferredDate: undefined,
          message: "",
        });
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | Date | undefined
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="py-16 bg-white w-100% flex justify-center">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto lg:mx-0"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-spk-dark text-center">
                Book Your Contract-Based Cleaning Service
              </CardTitle>
              <p className="text-gray-600 text-center">
                Tell us about your cleaning contract needs and we'll form a
                dedicated team for your project. Get a customized quote within 2
                hours.
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <Icon
                    icon="mdi:check-circle"
                    className="w-16 h-16 text-accent mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-spk-dark mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We've received your contract request and will contact you
                    within 2 hours to discuss team formation, scheduling, and
                    provide a detailed quote.
                  </p>
                  <div className="bg-spk-gray rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Need immediate assistance?</strong>
                      <br />
                      Call us at{" "}
                      <a
                        href="tel:+611300SPKCLEAN"
                        className="text-primary font-semibold"
                      >
                        +61 1300 SPK CLEAN
                      </a>
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-spk-dark font-semibold"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className={cn(
                          "border-gray-300 focus:border-primary",
                          errors.name && "border-red-500 focus:border-red-500"
                        )}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-spk-dark font-semibold"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={cn(
                          "border-gray-300 focus:border-primary",
                          errors.email && "border-red-500 focus:border-red-500"
                        )}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-spk-dark font-semibold"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={cn(
                        "border-gray-300 focus:border-primary",
                        errors.phone && "border-red-500 focus:border-red-500"
                      )}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="serviceType"
                        className="text-spk-dark font-semibold"
                      >
                        Service Type *
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) =>
                          handleInputChange("serviceType", value)
                        }
                      >
                        <SelectTrigger
                          className={cn(
                            "border-gray-300 focus:border-primary",
                            errors.serviceType &&
                              "border-red-500 focus:border-red-500"
                          )}
                        >
                          <SelectValue placeholder="Select the service you need" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.serviceType && (
                        <p className="text-red-500 text-sm">
                          {errors.serviceType}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="contractType"
                        className="text-spk-dark font-semibold"
                      >
                        Contract Type *
                      </Label>
                      <Select
                        value={formData.contractType}
                        onValueChange={(value) =>
                          handleInputChange("contractType", value)
                        }
                      >
                        <SelectTrigger
                          className={cn(
                            "border-gray-300 focus:border-primary",
                            errors.contractType &&
                              "border-red-500 focus:border-red-500"
                          )}
                        >
                          <SelectValue placeholder="Select contract type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ongoing">
                            Ongoing Contract
                          </SelectItem>
                          <SelectItem value="one-time">
                            One-Time Service
                          </SelectItem>
                          <SelectItem value="trial">Trial Period</SelectItem>
                          <SelectItem value="emergency">
                            Emergency Service
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.contractType && (
                        <p className="text-red-500 text-sm">
                          {errors.contractType}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Team Formation Details */}
                  <div className="bg-spk-light rounded-lg p-4 space-y-4">
                    <h3 className="font-semibold text-spk-dark flex items-center">
                      <Icon
                        icon="mdi:account-group"
                        className="w-5 h-5 mr-2 text-primary"
                      />
                      Team Formation Preferences
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="teamSize"
                          className="text-spk-dark font-semibold"
                        >
                          Preferred Team Size
                        </Label>
                        <Select
                          value={formData.teamSize}
                          onValueChange={(value) =>
                            handleInputChange("teamSize", value)
                          }
                        >
                          <SelectTrigger className="border-gray-300 focus:border-primary">
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">
                              Small Team (2-3 people)
                            </SelectItem>
                            <SelectItem value="medium">
                              Medium Team (4-5 people)
                            </SelectItem>
                            <SelectItem value="large">
                              Large Team (6-7 people)
                            </SelectItem>
                            <SelectItem value="custom">Custom Size</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="shiftPreference"
                          className="text-spk-dark font-semibold"
                        >
                          Shift Preference
                        </Label>
                        <Select
                          value={formData.shiftPreference}
                          onValueChange={(value) =>
                            handleInputChange("shiftPreference", value)
                          }
                        >
                          <SelectTrigger className="border-gray-300 focus:border-primary">
                            <SelectValue placeholder="Select shift preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">
                              Morning Shift (9am-3pm)
                            </SelectItem>
                            <SelectItem value="evening">
                              Evening Shift (3pm-7pm)
                            </SelectItem>
                            <SelectItem value="night">
                              Night Shift (After hours)
                            </SelectItem>
                            <SelectItem value="flexible">
                              Flexible Scheduling
                            </SelectItem>
                            <SelectItem value="multiple">
                              Multiple Shifts
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="propertySize"
                        className="text-spk-dark font-semibold"
                      >
                        Property Details
                      </Label>
                      <Select
                        value={formData.propertySize}
                        onValueChange={(value) =>
                          handleInputChange("propertySize", value)
                        }
                      >
                        <SelectTrigger className="border-gray-300 focus:border-primary">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small-office">
                            Small Office (Under 2,000 sq ft)
                          </SelectItem>
                          <SelectItem value="medium-office">
                            Medium Office (2,000-5,000 sq ft)
                          </SelectItem>
                          <SelectItem value="large-office">
                            Large Office (5,000+ sq ft)
                          </SelectItem>
                          <SelectItem value="gym">
                            Gym/Fitness Center
                          </SelectItem>
                          <SelectItem value="retail">Retail Space</SelectItem>
                          <SelectItem value="medical">
                            Medical Facility
                          </SelectItem>
                          <SelectItem value="multi-level">
                            Multi-Level Building
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-spk-dark font-semibold">
                      Preferred Start Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-gray-300 focus:border-primary",
                            !formData.preferredDate && "text-muted-foreground"
                          )}
                        >
                          <Icon icon="mdi:calendar" className="mr-2 h-4 w-4" />
                          {formData.preferredDate ? (
                            format(formData.preferredDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.preferredDate}
                          onSelect={(date) =>
                            handleInputChange("preferredDate", date)
                          }
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-spk-dark font-semibold"
                    >
                      Additional Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your specific cleaning needs, number of levels/floors, special requirements, or any questions about our team formation process..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="border-gray-300 focus:border-primary min-h-[120px]"
                      rows={5}
                    />
                  </div>

                  {/* Example Reference */}
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-semibold text-spk-dark mb-2">
                      Example: {TEAM_EXAMPLES.gym.title}
                    </h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>
                        • {TEAM_EXAMPLES.gym.dailyTeam} for comprehensive
                        coverage
                      </p>
                      <p>
                        • {TEAM_EXAMPLES.gym.schedule.morning} with lunch break
                      </p>
                      <p>• {TEAM_EXAMPLES.gym.schedule.evening}</p>
                      <p>• {TEAM_EXAMPLES.gym.process}</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon
                          icon="mdi:loading"
                          className="w-5 h-5 mr-2 animate-spin"
                        />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Icon icon="mdi:send" className="w-5 h-5 mr-2" />
                        Get My Contract Quote
                      </>
                    )}
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy.
                    We'll only use your information to provide you with a quote
                    and communicate about our contract-based cleaning services.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
