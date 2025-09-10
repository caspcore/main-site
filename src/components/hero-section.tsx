"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Shield, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Shield className="w-4 h-4 mr-2" />
                MiCA Compliance Made Simple
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                AI-Powered{" "}
                <span className="gradient-text">MiCA Compliance</span>{" "}
                for Crypto Providers
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Get MiCA compliant without hiring legal teams or compliance officers. 
                Our AI-powered SaaS platform provides end-to-end compliance solutions 
                for crypto providers across the EU.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Link href="/demo">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-black">100%</div>
                <div className="text-sm text-gray-600">MiCA Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">AI-Powered</div>
                <div className="text-sm text-gray-600">Automated Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">End-to-End</div>
                <div className="text-sm text-gray-600">Complete Solution</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 animate-float">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-800">MiCA Compliance Dashboard</span>
                </div>
                <Badge variant="secondary">Live</Badge>
              </div>

              {/* Progress Items */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Whitepaper Review</span>
                    <span className="font-semibold text-black">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-black to-gray-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Risk Assessment</span>
                    <span className="font-semibold text-black">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-black to-gray-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "88%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Documentation</span>
                    <span className="font-semibold text-black">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-black to-gray-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  <Zap className="w-4 h-4 mr-2" />
                  Generate Compliance Report
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
