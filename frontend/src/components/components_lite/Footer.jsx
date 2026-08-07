import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Footer = () => {
  const socialIcons = [
    { icon: faFacebook, label: "Facebook" },
    { icon: faTwitter, label: "Twitter" },
    { icon: faLinkedin, label: "LinkedIn" },
    { icon: faInstagram, label: "Instagram" },
    { icon: faYoutube, label: "YouTube" },
  ];

  const quickLinks = [
    "Home",
    "Browse Jobs",
    "Categories",
    "About Us",
    "Contact",
  ];

  const resources = [
    "Help Center",
    "Career Advice",
    "Resume Builder",
    "Interview Tips",
    "Salary Guide",
  ];

  const companyInfo = [
    { Icon: MapPin, text: "123, Tech Park, Silicon Valley, India" },
    { Icon: Phone, text: "+91 98765 43210" },
    { Icon: Mail, text: "support@jobportal.com" },
  ];

  return (
    <footer className="bg-[#0a0e27] text-gray-300">
      {/* Newsletter Bar */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Stay up to date with job alerts
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Subscribe to our newsletter and never miss your dream opportunity.
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-80 px-4 py-3 rounded-l-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#318ce7]"
            />
            <button className="bg-[#022bf8] hover:bg-[#318ce7] transition-colors text-white px-6 py-3 rounded-r-full flex items-center gap-2 font-medium">
              <Send size={16} />
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & About */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Job <span className="text-[#318ce7]">Portal</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Revolutionizing the way you find jobs. Connecting talented
            professionals with top companies across the globe. 2,00,000+ jobs
            listed and growing every day.
          </p>
          <div className="mt-5 flex gap-3">
            {socialIcons.map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#022bf8] transition-colors flex items-center justify-center"
              >
                <FontAwesomeIcon icon={icon} className="text-gray-300" size="sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#318ce7] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-3">
            {resources.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#318ce7] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-4">
            {companyInfo.map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={18} className="text-[#318ce7] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Job Portal. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-[#318ce7] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#318ce7] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#318ce7] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
