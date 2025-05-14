import { FileText, Globe, Download } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Enter URL",
      description: "Paste any website URL into our converter tool.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Convert",
      description: "Our system processes the webpage and formats it as a PDF.",
    },
    {
      icon: <Download className="h-10 w-10 text-primary" />,
      title: "Download",
      description: "Get your PDF file instantly, ready to save or share.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg transition-all hover:transform hover:scale-105"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/30">
                {step.icon}
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
