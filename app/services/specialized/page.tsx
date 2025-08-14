import { ServiceDetailPage } from "@/components/service-detail-page"

export const metadata = {
  title: "Specialized Sanitation Services - SPK Cleaning Service",
  description:
    "Advanced sanitation services for healthcare, food service, and high-risk environments with medical-grade disinfection and certified processes.",
  keywords: "specialized sanitation, medical cleaning, food safety cleaning, biohazard cleanup, disinfection services",
}

export default function SpecializedPage() {
  const serviceData = {
    title: "Specialized Sanitation",
    subtitle: "Advanced Sanitation for High-Risk Environments",
    description:
      "Our specialized sanitation services go beyond standard cleaning to provide medical-grade disinfection and contamination control for environments where hygiene is critical to health and safety.",
    icon: "mdi:spray-bottle",
    features: [
      "Medical-grade disinfection protocols",
      "HACCP compliant food safety procedures",
      "Biohazard and contamination cleanup",
      "Certified sanitation specialists",
      "Advanced equipment and EPA-approved chemicals",
      "Detailed documentation and compliance reporting",
    ],
    tasks: [
      {
        title: "Healthcare Sanitation",
        items: [
          "Operating room sterilization",
          "Patient room deep cleaning",
          "Medical equipment sanitization",
          "Isolation room protocols",
          "Infectious disease cleanup",
          "Pharmaceutical area cleaning",
        ],
      },
      {
        title: "Food Service Sanitation",
        items: [
          "Kitchen deep sanitization",
          "Food preparation area cleaning",
          "Equipment degreasing and sanitizing",
          "Cold storage maintenance",
          "Pest control support",
          "Health department compliance",
        ],
      },
      {
        title: "Biohazard Cleanup",
        items: [
          "Blood and bodily fluid cleanup",
          "Chemical spill containment",
          "Mold remediation",
          "Trauma scene cleaning",
          "Hoarding cleanup",
          "Infectious disease decontamination",
        ],
      },
    ],
    pricing: [
      {
        plan: "Healthcare Basic",
        price: "$350",
        period: "per visit",
        features: [
          "Standard medical protocols",
          "Basic disinfection",
          "Compliance documentation",
          "Trained specialists",
          "Quality assurance",
        ],
      },
      {
        plan: "Food Service Pro",
        price: "$450",
        period: "per visit",
        features: [
          "HACCP compliant procedures",
          "Deep kitchen sanitization",
          "Equipment degreasing",
          "Health dept. compliance",
          "Emergency response",
          "Monthly reporting",
        ],
        popular: true,
      },
      {
        plan: "Biohazard Response",
        price: "Custom",
        period: "quote",
        features: [
          "24/7 emergency response",
          "Specialized containment",
          "Advanced decontamination",
          "Regulatory compliance",
          "Insurance coordination",
          "Detailed documentation",
        ],
      },
    ],
  }

  return <ServiceDetailPage {...serviceData} />
}
