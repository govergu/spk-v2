import { ServiceDetailPage } from "@/components/service-detail-page"

export const metadata = {
  title: "Commercial Cleaning Services - SPK Cleaning Service",
  description:
    "Contract-based commercial cleaning with dedicated teams, flexible scheduling, and reliable service for offices and business facilities.",
  keywords: "commercial cleaning, office cleaning, contract cleaning, team formation, flexible scheduling",
}

export default function CommercialPage() {
  const serviceData = {
    title: "Commercial Cleaning",
    subtitle: "Contract-Based Office & Business Cleaning Solutions",
    description:
      "Transform your workplace with our contract-based commercial cleaning services. We form dedicated teams for each office contract, providing flexible shift scheduling and reliable, thorough cleaning that keeps your business running smoothly.",
    icon: "mdi:office-building-cog",
    features: [
      "Dedicated team formation for each contract",
      "Flexible shift scheduling (morning, evening, night)",
      "Professional-grade equipment and eco-friendly products",
      "Trained and insured cleaning professionals",
      "Contract-based reliability and consistency",
      "24/7 emergency cleaning services",
    ],
    tasks: [
      {
        title: "Office Contract Teams (4-6 People)",
        items: [
          "Morning shift: 9am-3pm with lunch break coverage",
          "Evening shift: 3pm-7pm replacement team",
          "Desk and workstation sanitization",
          "Floor cleaning and maintenance across all levels",
          "Restroom deep cleaning and restocking",
          "Kitchen and break room thorough cleaning",
        ],
      },
      {
        title: "Multi-Level Office Buildings",
        items: [
          "Each floor gets dedicated team attention",
          "2+ hours per level for thorough cleaning",
          "Systematic floor-by-floor approach",
          "Elevator and stairwell maintenance",
          "Common area and lobby cleaning",
          "After-hours deep cleaning teams",
        ],
      },
      {
        title: "Specialized Office Environments",
        items: [
          "Medical office disinfection protocols",
          "Legal office confidentiality procedures",
          "Tech office equipment-safe cleaning",
          "Retail office customer area maintenance",
          "Co-working space flexible scheduling",
          "Corporate headquarters comprehensive service",
        ],
      },
    ],
    pricing: [
      {
        plan: "Small Office Contract",
        price: "$180",
        period: "per visit",
        features: [
          "Up to 2,000 sq ft",
          "2-3 person team",
          "Weekly cleaning schedule",
          "Basic sanitization",
          "Trash removal",
          "Restroom cleaning",
        ],
      },
      {
        plan: "Medium Office Contract",
        price: "$350",
        period: "per visit",
        features: [
          "Up to 5,000 sq ft",
          "4-5 person team",
          "Bi-weekly cleaning schedule",
          "Multi-level coverage",
          "Kitchen/break room cleaning",
          "Window cleaning",
          "Quality assurance",
        ],
        popular: true,
      },
      {
        plan: "Large Office Contract",
        price: "Custom",
        period: "quote",
        features: [
          "Unlimited square footage",
          "6+ person dedicated teams",
          "Daily cleaning available",
          "Flexible shift scheduling",
          "Dedicated account manager",
          "24/7 emergency service",
          "Custom reporting",
        ],
      },
    ],
  }

  return <ServiceDetailPage {...serviceData} />
}
