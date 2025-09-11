"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Clock, Send, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { submitDemoRequest, validateForm, type FormData } from "@/lib/form-handler";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);
    setSuccess(false);
    
    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      company: formData.get('company') as string,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      role: formData.get('role') as string,
      projectType: formData.get('projectType') as string,
      timeline: formData.get('timeline') as string,
      message: formData.get('message') as string,
      newsletter: formData.get('newsletter') === 'on',
      privacy: formData.get('privacy') === 'on',
    };

    // Validate form
    const validationErrors = validateForm(data);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitDemoRequest(data);
      if (result.success) {
        setSuccess(true);
        e.currentTarget.reset();
      } else {
        setErrors([result.message]);
      }
    } catch {
      setErrors(['An unexpected error occurred. Please try again.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team to learn more about Caspcore&apos;s AI-powered MiCA compliance solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Success Message */}
                  {success && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        Thank you for your message! We&apos;ll contact you within 24 hours.
                      </p>
                    </div>
                  )}

                  {/* Error Messages */}
                  {errors.length > 0 && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <ul className="text-red-800 space-y-1">
                        {errors.map((error, index) => (
                          <li key={index} className="text-sm">• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input id="company" name="company" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role *</Label>
                        <Select name="role" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ceo">CEO/Founder</SelectItem>
                            <SelectItem value="cto">CTO/Technical Lead</SelectItem>
                            <SelectItem value="compliance">Compliance Officer</SelectItem>
                            <SelectItem value="legal">Legal Counsel</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select name="projectType" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utility-token">Utility Token</SelectItem>
                            <SelectItem value="payment-token">Payment Token</SelectItem>
                            <SelectItem value="asset-referenced-token">Asset-Referenced Token</SelectItem>
                            <SelectItem value="e-money-token">E-Money Token</SelectItem>
                            <SelectItem value="crypto-asset-service">Crypto Asset Service</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Expected Launch Timeline</Label>
                      <Select name="timeline">
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                          <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                          <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                          <SelectItem value="long">Long-term (12+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Tell us about your project and any specific compliance challenges you&apos;re facing..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="newsletter" name="newsletter" />
                        <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                          Subscribe to our newsletter for updates on MiCA compliance and new features
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="privacy" name="privacy" required />
                        <Label htmlFor="privacy" className="text-sm leading-relaxed">
                          I agree to the Privacy Policy and Terms of Service *
                        </Label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-black hover:bg-gray-800 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    We&apos;re here to help you achieve MiCA compliance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-sm text-gray-600">hello@caspcore.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-sm text-gray-600">+372 55595080</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Office</h4>
                      <p className="text-sm text-gray-600">Estonia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-sm text-gray-600">Mon-Fri 9AM-6PM EET</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>
                    Connect with us on social media for updates and news.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-black flex-shrink-0" />
                    <a 
                      href="https://linkedin.com/company/caspcore" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      @caspcore
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Twitter className="w-5 h-5 text-black flex-shrink-0" />
                    <a 
                      href="https://twitter.com/caspcore" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      @caspcore
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-black flex-shrink-0" />
                    <a 
                      href="https://discord.gg/caspcore" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      @caspcore
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                    <a href="/demo">Request Demo</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
