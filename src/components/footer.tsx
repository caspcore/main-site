import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">Caspcore</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI-powered MiCA compliance for crypto providers. Get compliant without the complexity.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-400 hover:text-white transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Compliance</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  MiCA Regulations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  EU Compliance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Coming Soon: US & UK
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:hello@caspcore.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@caspcore.com
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-400 hover:text-white transition-colors">
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Caspcore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
