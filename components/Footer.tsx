import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Tagline */}
          <div>
            <Link href="/">
              <span className="text-3xl font-bold text-blue-500">Convo</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Transform your language learning experience with AI-powered
              tools. Speak confidently and fluently in any scenario.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-200">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-blue-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-200">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/faq" className="hover:text-blue-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-blue-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-200">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Copyright */}
        <div className="text-center">
          <span className="block text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://tryconvo.vercel.app/"
              target="_blank"
              className="hover:underline hover:text-blue-400"
              rel="noopener noreferrer"
            >
              Convo
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
