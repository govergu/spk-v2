import { ServicesOverview } from "@/components/services-overview"
import { ServicesTabs } from "@/components/services-tabs"

export const metadata = {
  title: "Professional Cleaning Services - SPK Cleaning Service",
  description:
    "Comprehensive cleaning services including commercial cleaning, specialized sanitation, ground maintenance, and eco-friendly deep cleaning across Australia.",
  keywords: "cleaning services, commercial cleaning, sanitation, ground maintenance, eco-friendly cleaning, Australia",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesOverview />
      <ServicesTabs />
    </main>
  )
}
