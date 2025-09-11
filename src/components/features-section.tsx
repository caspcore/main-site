"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bot, 
  FileText, 
  Shield, 
  ClipboardCheck, 
  Users, 
  Globe 
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Analysis",
    description: "Our native AI analyzes your crypto project against MiCA regulations, providing instant feedback and recommendations."
  },
  {
    icon: FileText,
    title: "Whitepaper Compliance Assessment",
    description: "Our AI analyzes your existing whitepaper against MiCA regulations, identifying compliance gaps and providing specific recommendations for improvement."
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Comprehensive risk analysis and mitigation strategies tailored to your specific crypto project and business model."
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Monitoring",
    description: "Continuous monitoring and updates to ensure ongoing compliance as regulations evolve."
  },
  {
    icon: Users,
    title: "No Legal Team Required",
    description: "Eliminate the need for expensive legal teams, compliance officers, and regulatory engineers."
  },
  {
    icon: Globe,
    title: "EU Market Ready",
    description: "Specifically designed for EU crypto providers looking to operate under MiCA regulations."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for MiCA Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform handles all aspects of MiCA compliance, 
            eliminating the need for expensive legal teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-gray-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
