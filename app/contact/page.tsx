"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Contact Us</h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Have questions or feedback? We'd love to hear from you. Our team is here to help.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="space-y-6">
                <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/30">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@PDFCapture.com" className="hover:text-primary">
                          contact@PDFCapture.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/30">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Live Chat</h3>
                      <p className="text-gray-600">Available Monday-Friday</p>
                      <p className="text-gray-600">9am-5pm EST</p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/30">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/30">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Office</h3>
                      <p className="text-gray-600">123 PDF Street</p>
                      <p className="text-gray-600">San Francisco, CA 94103</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-white/50 border-white/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-white/50 border-white/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="bg-white/50 border-white/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={6}
                      required
                      className="bg-white/50 border-white/40"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">How quickly will I receive a response?</h3>
                <p className="text-gray-700">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                  use our live chat feature.
                </p>
              </div>
              <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Do you offer technical support?</h3>
                <p className="text-gray-700">
                  Yes, we provide technical support for all our users. Premium plan subscribers receive priority support
                  with faster response times.
                </p>
              </div>
              <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Can I request a feature?</h3>
                <p className="text-gray-700">
                  We love hearing from our users. Feature requests help us improve our service. Please submit your ideas
                  through this contact form.
                </p>
              </div>
              <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Do you offer custom solutions?</h3>
                <p className="text-gray-700">
                  Yes, we can develop custom solutions for enterprise clients. Please contact our sales team to discuss
                  your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
