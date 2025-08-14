import { ServiceDetailPage } from "@/components/service-detail-page"

export const metadata = {
  title: "Ground Maintenance Services - SPK Cleaning Service",
  description:
    "Comprehensive exterior cleaning and maintenance services including pressure washing, window cleaning, and seasonal maintenance for pristine property presentation.",
  keywords: "ground maintenance, pressure washing, window cleaning, exterior cleaning, property maintenance",
}

export default function MaintenancePage() {
  const serviceData = {
    title: "Ground Maintenance",
    subtitle: "Comprehensive Exterior Cleaning & Property Maintenance",
    description:
      "Maintain your property's curb appeal and professional appearance with our comprehensive ground maintenance services. From pressure washing to landscaping support, we keep your exterior spaces pristine year-round.",
    icon: "mdi:leaf",
    features: [
      "High-pressure washing and surface cleaning",
      "Professional window and glass cleaning",
      "Landscaping and grounds support",
      "Seasonal maintenance programs",
      "Eco-friendly cleaning solutions",
      "Flexible scheduling and emergency services",
    ],
    tasks: [
      {
        title: "Pressure Washing",
        items: [
          "Building exterior cleaning",
          "Sidewalk and walkway washing",
          "Parking lot maintenance",
          "Driveway and entrance cleaning",
          "Graffiti removal",
          "Deck and patio restoration",
        ],
      },
      {
        title: "Window & Glass Services",
        items: [
          "Interior and exterior window cleaning",
          "High-rise window maintenance",
          "Glass door and storefront cleaning",
          "Skylight and atrium cleaning",
          "Mirror and glass surface polishing",
          "Screen cleaning and maintenance",
        ],
      },
      {
        title: "Grounds & Landscaping",
        items: [
          "Lawn maintenance support",
          "Garden bed cleaning",
          "Outdoor furniture cleaning",
          "Playground equipment sanitization",
          "Parking lot sweeping",
          "Seasonal decoration setup",
        ],
      },
    ],
    pricing: [
      {
        plan: "Basic Maintenance",
        price: "$200",
        period: "per visit",
        features: [
          "Pressure washing (up to 1,000 sq ft)",
          "Basic window cleaning",
          "Walkway maintenance",
          "Monthly service",
          "Standard equipment",
        ],
      },
      {
        plan: "Complete Care",
        price: "$400",
        period: "per visit",
        features: [
          "Pressure washing (up to 3,000 sq ft)",
          "Full window service",
          "Grounds maintenance",
          "Bi-weekly service",
          "Eco-friendly products",
          "Seasonal programs",
        ],
        popular: true,
      },
      {
        plan: "Premium Property",
        price: "Custom",
        period: "quote",
        features: [
          "Unlimited square footage",
          "Weekly maintenance available",
          "Landscaping coordination",
          "Emergency response",
          "Custom scheduling",
          "Property management liaison",
        ],
      },
    ],
  }

  return <ServiceDetailPage {...serviceData} />
}
