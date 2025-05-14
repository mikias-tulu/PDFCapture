import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Basic features for occasional use",
      features: ["5 PDF conversions per month", "Standard quality PDFs", "Max 10 pages per PDF", "Basic support"],
      buttonText: "Get Started",
      buttonLink: "/signup",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "9.99",
      period: "per month",
      description: "Everything you need for regular use",
      features: [
        "100 PDF conversions per month",
        "High quality PDFs",
        "Unlimited pages per PDF",
        "Priority support",
        "Custom headers and footers",
      ],
      buttonText: "Subscribe Now",
      buttonLink: "/signup?plan=pro",
      highlighted: true,
    },
    {
      name: "Business",
      price: "29.99",
      period: "per month",
      description: "Advanced features for teams",
      features: [
        "Unlimited PDF conversions",
        "Premium quality PDFs",
        "Unlimited pages per PDF",
        "24/7 priority support",
        "Custom headers and footers",
        "API access",
        "Team management",
      ],
      buttonText: "Contact Sales",
      buttonLink: "/contact",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
        <p className="mb-12 text-xl text-gray-600">Choose the plan that works best for you</p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`backdrop-blur-md rounded-xl p-8 transition-all hover:transform hover:scale-105 ${
                plan.highlighted
                  ? "bg-primary/20 border border-purple-300/40 shadow-xl"
                  : "bg-white/30 border border-white/40 shadow-lg"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="my-4">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600">/{plan.period}</span>
              </div>
              <p className="mb-6 text-gray-600">{plan.description}</p>

              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.buttonLink}
                className={`block w-full rounded-full py-3 text-center font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-purple-700"
                    : "bg-white text-primary hover:bg-gray-50"
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
