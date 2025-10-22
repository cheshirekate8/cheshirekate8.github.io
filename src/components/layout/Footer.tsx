import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { personalInfo } from "../../data/info";
import { socialLinks } from "../../data/social";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <SiGithub size={20} />;
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case "email":
        return <Mail className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-federal-blue dark:bg-marian-blue text-light-cyan border-t border-pacific-cyan/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-vivid-sky via-pacific-cyan to-vivid-sky bg-clip-text text-transparent mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-light-cyan/70">
              Frontend Developer crafting beautiful web experiences.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-vivid-sky mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-light-cyan/70 hover:text-vivid-sky transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-light-cyan/70 hover:text-vivid-sky transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-light-cyan/70 hover:text-vivid-sky transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-light-cyan/70 hover:text-vivid-sky transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-vivid-sky mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target={social.platform !== "Email" ? "_blank" : undefined}
                  rel={
                    social.platform !== "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="text-light-cyan/70 hover:text-vivid-sky transition-colors"
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.icon || "")}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pacific-cyan/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-light-cyan/60">
            <span>Built with Vite, React, TypeScript & Tailwind CSS</span>
            <span>•</span>
            <span>Animated with Framer Motion</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-light-cyan/70 hover:text-vivid-sky transition-colors flex items-center gap-2"
          >
            <span className="text-sm">Back to Top</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
