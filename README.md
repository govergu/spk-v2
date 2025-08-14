# SPK Cleaning Service Website

A modern, contract-based cleaning service website built with Next.js 15, featuring team formation capabilities, flexible scheduling, and comprehensive service management.

## 🚀 Project Overview

SPK Cleaning Service specializes in contract-based cleaning with dedicated team formation for gyms, offices, and commercial spaces. This website showcases their unique approach to cleaning services with realistic scheduling and thorough, quality-focused operations.

### Key Features

- **Contract-Based Operations**: Emphasis on forming dedicated teams for each cleaning contract
- **Team Formation System**: Detailed team size and scheduling preferences in booking forms
- **Flexible Scheduling**: Morning (9am-3pm), evening (3pm-7pm), and night shift options
- **Realistic Approach**: "We ain't machines" - quality over speed with 2+ hours per level
- **Comprehensive Coverage**: Multi-level building support with systematic floor-by-floor cleaning

## 🛠 Tech Stack

- **Framework**: Next.js 15.3 (App Router)
- **Styling**: Tailwind CSS v4 with custom SPK brand colors
- **UI Components**: Shadcn UI v2.5.0 (New York style)
- **Animations**: Framer Motion 11+
- **Icons**: Iconify React
- **Fonts**: Montserrat (headings) + Open Sans (body)
- **Deployment**: Static export compatible (`output: 'export'`)

## 🎨 Design System

### Colors
- **Primary**: #00BFFF (Blue for trust)
- **Accent**: #32CD32 (Green for freshness/CTAs)
- **Background**: #FFFFFF (White purity)
- **Neutral**: #F5F5F5 (Sections)

### Typography
- **Headings**: Montserrat (Bold, 700 weight)
- **Body**: Open Sans (Regular, 400 weight)

## 📁 Project Structure

\`\`\`
├── app/
│   ├── about/page.tsx           # Company operations and team info
│   ├── blog/                    # Static blog posts
│   ├── contact/page.tsx         # Enhanced booking forms
│   ├── services/                # Service pages with team details
│   │   ├── commercial/
│   │   ├── specialized/
│   │   └── maintenance/
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Tailwind + custom styles
├── components/
│   ├── ui/                      # Shadcn UI components
│   ├── hero.tsx                 # Hero with popover example
│   ├── navbar.tsx               # Navigation with sidebar
│   ├── booking-form.tsx         # Advanced contract booking
│   ├── services-tabs.tsx        # Services with team details
│   └── ...
└── lib/
    └── constants.ts             # Company info and team examples
\`\`\`

## 🏢 Company Information

**SPK Cleaning Service**
- **Head Office**: 2, 55 Dartbrook Road, Auburn, NSW, Australia
- **Phone**: +61 1300 SPK CLEAN
- **Email**: info@spkcleaning.com.au
- **Hours**: 24/7 Nationwide Service

### Service Areas
- New South Wales (Head Office in Auburn)
- Queensland (Brisbane office)
- Victoria (Melbourne office)

## 🔧 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd spk-cleaning-service
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Add Shadcn UI components** (if needed)
   \`\`\`bash
   npx shadcn@latest add calendar sidebar breadcrumb carousel accordion form
   \`\`\`

4. **Development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

6. **Static export**
   \`\`\`bash
   npm run export
   \`\`\`

## 📋 Client Requirements Implemented

### ✅ Company Operations
- [x] Contract-based cleaning model
- [x] Team formation from employees
- [x] Flexible shift scheduling (9am-3pm, 3pm-7pm, night shifts)
- [x] Realistic time allocation (2+ hours per level)
- [x] Gym contract example (6-7 people daily)

### ✅ Location & Contact
- [x] Auburn head office address integration
- [x] Updated contact forms with team preferences
- [x] Google Maps embed with correct location
- [x] Enhanced booking system with contract options

### ✅ Technical Requirements
- [x] Next.js 15.3 with App Router
- [x] Shadcn UI v2.5.0 components
- [x] Tailwind CSS v4 compatibility
- [x] Framer Motion 11+ animations
- [x] Static export configuration
- [x] Responsive design with mobile sidebar

### ✅ Enhanced Features
- [x] NavigationMenu with rich dropdowns
- [x] Sidebar for mobile navigation
- [x] Calendar integration in booking forms
- [x] Team formation preferences
- [x] Contract-specific service descriptions
- [x] SEO optimization and accessibility

## 🚀 Deployment

The website is configured for static export and can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

\`\`\`bash
npm run build && npm run export
\`\`\`

## 📅 Timeline

**Estimated Completion**: 3-4 weeks for full static site implementation

### Development Phases
1. ✅ **Week 1**: Foundation setup, company info integration
2. ✅ **Week 2**: Enhanced UI components, team formation features
3. ✅ **Week 3**: Advanced booking system, contact integration
4. ✅ **Week 4**: Final touches, documentation, deployment prep

## 🎯 Key Differentiators

1. **Contract-Based Focus**: Unlike typical cleaning sites, emphasizes team formation and contract reliability
2. **Realistic Scheduling**: Honest about time requirements ("we ain't machines")
3. **Team Formation**: Detailed team size and shift preference options
4. **Auburn Head Office**: Prominently features the actual business location
5. **Gym Specialization**: Specific examples and team configurations for gym contracts

## 📞 Support

For technical support or questions about the website:
- **Development**: Contact the development team
- **Business**: Contact SPK Cleaning Service directly

---

**Built with ❤️ for SPK Cleaning Service**
*Reliable Teams for Sanitation & Purity*
