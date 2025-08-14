import { ContactHero } from "@/components/contact-hero"
import { BookingForm } from "@/components/booking-form"
import { ContactInfo } from "@/components/contact-info"
import { LocationsMap } from "@/components/locations-map"

export const metadata = {
  title: "Contact SPK Cleaning Service - Get Your Free Quote Today",
  description:
    "Contact SPK Cleaning Service for professional cleaning solutions across Australia. Get a free quote, book a consultation, or speak with our expert team today.",
  keywords:
    "contact SPK cleaning, free quote, booking, cleaning consultation, Australia cleaning service, professional cleaning contact",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <BookingForm />
        <ContactInfo />
      </div>
      <LocationsMap />
    </main>
  )
}
