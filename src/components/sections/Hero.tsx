import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { scrollToSection } from "../../utils/scroll";
import Button from "../ui/Button";

const Hero = () => {

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-vivid-sky via-white to-pacific-cyan/10 dark:from-federal-blue dark:via-marian-blue dark:to-pacific-cyan/20">
      {/* Animated background circles */}
      <motion.div
        className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-pacific-cyan/30 dark:bg-pacific-cyan/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-vivid-sky/30 dark:bg-honolulu-blue/30 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-honolulu-blue/20 dark:bg-pacific-cyan/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-marian-blue dark:text-vivid-sky mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-honolulu-blue via-pacific-cyan to-honolulu-blue bg-clip-text text-transparent">
              Katie Young
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-pacific-cyan dark:text-vivid-sky mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer with Frontend Expertise
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-marian-blue/80 dark:text-light-cyan/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build desktop and web applications with modern frontend
            frameworks, from security-focused tools to full-featured product
            experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              variant="ghost"
              onClick={() => scrollToSection("#projects")}
              className="px-6"
            >
              View My Work
            </Button>
            <Button as="a" href="/resume.pdf" download>
              <Download />
              Download Resume
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-8 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer text-marian-blue dark:text-non-photo"
            onClick={() => scrollToSection("#about")}
          >
            <ArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
