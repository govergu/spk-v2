import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { DynamicTestimonialsCarousel } from "@/components/dynamic-testimonials"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { AwardsCertifications } from "@/components/awards-certifications"
import { QuickQuoteForm } from "@/components/quick-quote-form"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesGrid />
      <DynamicTestimonialsCarousel />
      <BeforeAfterGallery />
      <AwardsCertifications />
      <QuickQuoteForm />
    </main>
  )
}
