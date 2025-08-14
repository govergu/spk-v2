import { BlogGrid } from "@/components/blog-grid"
import { BlogHero } from "@/components/blog-hero"

export const metadata = {
  title: "Cleaning & Sanitation Blog - SPK Cleaning Service",
  description:
    "Expert tips and insights on commercial cleaning, sanitation best practices, and eco-friendly cleaning solutions from Australia's leading cleaning professionals.",
  keywords:
    "cleaning tips, sanitation, purity, commercial cleaning, eco-friendly cleaning, Australia, office cleaning, hygiene",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <BlogGrid />
    </main>
  )
}
