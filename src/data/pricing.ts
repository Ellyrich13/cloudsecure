import type { PricingTier } from '../types'

export const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'For small teams getting started with cloud security.',
    features: ['Up to 10 users', 'Single cloud provider', 'Basic threat detection', 'Email support'],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'For growing teams that need full visibility.',
    features: ['Up to 50 users', 'Multi-cloud support', 'Real-time threat detection', 'Compliance monitoring', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced security needs.',
    features: ['Unlimited users', 'Multi-cloud support', 'Automated incident response', 'Dedicated account manager', '24/7 phone support'],
    highlighted: false,
  },
]