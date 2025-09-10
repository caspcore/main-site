"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Get MiCA Compliant?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join crypto providers who are already using Caspcore to achieve full MiCA compliance.
          </p>
          
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/demo">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
