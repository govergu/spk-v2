import { CompanyStory } from "@/components/company-story"
import { TeamSection } from "@/components/team-section"
import { CertificationsSection } from "@/components/certifications-section"

export const metadata = {
  title: "About SPK Cleaning Service - Professional Cleaning Experts",
  description:
    "Learn about SPK Cleaning Service's commitment to excellence, our experienced team, and industry-leading certifications in sanitation and purity maintenance.",
  keywords: "about SPK cleaning, professional cleaning team, cleaning certifications, eco-friendly cleaning Australia",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <CompanyStory />
      <TeamSection />
      <CertificationsSection />
    </main>
  )
}
