import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { useRef } from "react";
import { socialLinks } from "../../data/social";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <SiGithub size={24} />;
      case "linkedin":
        return <Linkedin className="w-6 h-6" />;
      case "email":
        return <Mail className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-vivid-sky/30 via-white to-pacific-cyan/10 dark:from-marian-blue dark:via-federal-blue dark:to-pacific-cyan/20 overflow-hidden"
    >
      {/* Animated background blobs */}
      <motion.div
        className="hidden md:block absolute top-20 left-10 w-96 h-96 bg-pacific-cyan/20 dark:bg-pacific-cyan/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-honolulu-blue/20 dark:bg-honolulu-blue/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-marian-blue dark:text-vivid-sky mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-honolulu-blue via-pacific-cyan to-honolulu-blue mx-auto mb-6"></div>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-marian-blue/80 backdrop-blur-sm border border-vivid-sky dark:border-pacific-cyan rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Social Links */}
            <div className="border-b border-vivid-sky dark:border-pacific-cyan pb-8">
              <div className="flex justify-center gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target={social.platform !== "Email" ? "_blank" : undefined}
                    rel={
                      social.platform !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center gap-2 bg-vivid-sky/50 dark:bg-federal-blue/50 hover:bg-honolulu-blue dark:hover:bg-pacific-cyan text-marian-blue dark:text-light-cyan hover:text-white px-6 py-3 rounded-lg font-medium transition-all border border-pacific-cyan/30 dark:border-vivid-sky/30"
                  >
                    {getSocialIcon(social.icon || "")}
                    <span>{social.platform}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-8"
            >
              <p className="text-marian-blue dark:text-light-cyan mb-2">
                💼 Open to freelance opportunities and full-time positions
              </p>
              <p className="text-marian-blue dark:text-light-cyan">
                📝 Professional references available upon request
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
