import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Mail } from "lucide-react";
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
        return <Linkedin className="h-5 w-5" />;
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
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
