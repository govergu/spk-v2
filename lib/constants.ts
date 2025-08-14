export const COMPANY_INFO = {
  name: "SPK Cleaning Service",
  tagline: "Reliable Teams for Sanitation & Purity",
  description:
    "Contract-based cleaning service specializing in team formation and flexible shift scheduling. We take on contracts for gyms, offices, and commercial spaces, assembling dedicated teams for thorough sanitation and purity.",
  phone: "+61 1300 SPK CLEAN",
  email: "info@spkcleaning.com.au",
  address: "2, 55 Dartbrook Road, Auburn, NSW, Australia",
  hours: "24/7 Nationwide Service",
  operations: {
    contractBased: true,
    teamFormation: "We hire employees and form specialized teams from members for each contract",
    scheduling: {
      day: "Morning shift: 9am-3pm (with lunch break), Evening shift: 3pm-7pm",
      night: "3-5 people assigned to floors/levels/units (~2+ hours per level)",
      example: "Gym contracts: 6-7 people per day for comprehensive cleaning",
    },
  },
}

export const SERVICES = [
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description:
      "Contract-based office cleaning with dedicated teams and flexible shift scheduling for optimal results.",
    icon: "mdi:office-building-cog",
    features: [
      "Dedicated team formation",
      "Flexible shift scheduling",
      "Contract-based reliability",
      "Thorough sanitation protocols",
    ],
  },
  {
    id: "specialized",
    title: "Specialized Sanitation",
    description:
      "Advanced sanitation contracts for gyms, healthcare, and high-traffic environments with specialized teams.",
    icon: "mdi:spray-bottle",
    features: ["Gym cleaning contracts", "Medical-grade teams", "Night shift specialists", "Level-by-level coverage"],
  },
  {
    id: "maintenance",
    title: "Ground Maintenance",
    description:
      "Comprehensive exterior maintenance contracts with dedicated teams for pristine property presentation.",
    icon: "mdi:leaf",
    features: ["Contract maintenance teams", "Scheduled service visits", "Multi-level coverage", "Seasonal contracts"],
  },
  {
    id: "eco-clean",
    title: "Deep Clean Contracts",
    description: "Intensive deep cleaning contracts using specialized teams and environmentally conscious methods.",
    icon: "mdi:water",
    features: ["Night deep clean teams", "2+ hours per level", "Eco-friendly products", "Post-closure cleaning"],
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "Fitness First Gym",
    rating: 5,
    text: "SPK's team formation approach is brilliant. They assign 6-7 people daily with perfect shift coordination. Our gym stays spotless around the clock.",
    image: "/professional-woman-diverse.png",
  },
  {
    id: 2,
    name: "David Chen",
    company: "Corporate Office Tower",
    rating: 5,
    text: "Their contract-based model gives us reliability we can count on. The morning and evening shift teams work seamlessly together.",
    image: "/professional-man.png",
  },
  {
    id: 3,
    name: "Lisa Thompson",
    company: "Medical Centre",
    rating: 5,
    text: "The night cleaning team covers each level thoroughly in 2+ hours. They understand that quality takes time - 'we ain't machines' but the results are perfect.",
    image: "/healthcare-professional.png",
  },
  {
    id: 4,
    name: "Michael Roberts",
    company: "Shopping Complex",
    rating: 5,
    text: "SPK's team scheduling is exceptional. They form specialized teams for our contract and maintain consistent quality across all levels.",
    image: "/retail-manager.png",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "Multi-Level Office",
    rating: 5,
    text: "Their approach to assigning 3-5 people to different floors ensures every level gets dedicated attention. Truly reliable contract service.",
    image: "/venue-manager.png",
  },
]

export const COLORS = {
  primary: "#00BFFF", // Blue for trust
  accent: "#32CD32", // Green for freshness/CTAs
  background: "#FFFFFF", // White purity
  neutral: "#F5F5F5", // Sections
}

export const TEAM_EXAMPLES = {
  gym: {
    title: "Gym Contract Example",
    dailyTeam: "6-7 people assigned",
    schedule: {
      morning: "9am-3pm (with lunch break)",
      evening: "3pm-7pm replacement shift",
      night: "3-5 people for deep clean after closure",
    },
    process: "Each person covers entire level (~2+ hours realistically)",
  },
}
