export interface Feature {
  title: string
  description: string
}

export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
}

export interface TeamMember {
  name: string
  role: string
  bio: string
}

export interface Slide {
  image: string
  caption: string
}