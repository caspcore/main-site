"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Why Choose Caspcore?
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                MiCA (Markets in Crypto-Assets) regulation is transforming the crypto landscape in the EU. 
                As a crypto provider, you need to ensure full compliance to operate legally and gain market trust.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Traditional compliance approaches require hiring expensive legal teams, compliance officers, 
                and regulatory engineers. Caspcore eliminates this complexity with our AI-powered platform 
                that provides end-to-end MiCA compliance solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                <span className="text-gray-700">Native AI technology built specifically for crypto compliance</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                <span className="text-gray-700">Comprehensive coverage of all MiCA requirements</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                <span className="text-gray-700">Future-ready for US and UK regulations</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Process Flow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Upload Project</h4>
                  <p className="text-gray-600">Submit your crypto project details and documentation</p>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 lg:rotate-0" />
              </div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">AI Analysis</h4>
                  <p className="text-gray-600">Our AI analyzes against MiCA regulations automatically</p>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 lg:rotate-0" />
              </div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Compliance Report</h4>
                  <p className="text-gray-600">Get detailed compliance recommendations and next steps</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
