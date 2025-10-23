import { motion } from "framer-motion";
import { personalInfo } from "../../data/info";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-vivid-sky via-white to-pacific-cyan/10 dark:from-federal-blue dark:via-marian-blue dark:to-pacific-cyan/20">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-pacific-cyan/30 dark:bg-pacific-cyan/20 rounded-full blur-2xl"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-vivid-sky/30 dark:bg-honolulu-blue/30 rounded-full blur-2xl"
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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-honolulu-blue/20 dark:bg-pacific-cyan/15 rounded-full blur-3xl"
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
              {personalInfo.name}
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

          {/* <motion.p
            className="text-lg md:text-xl text-marian-blue/80 dark:text-light-cyan/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I craft beautiful, responsive web experiences with modern
            technologies. Passionate about clean code and pixel-perfect designs.
          </motion.p> */}

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => scrollToSection("#projects")}
              className="bg-honolulu-blue hover:bg-marian-blue dark:bg-pacific-cyan dark:hover:bg-honolulu-blue text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              download
              className="bg-pacific-cyan hover:bg-honolulu-blue dark:bg-honolulu-blue dark:hover:bg-pacific-cyan text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Download />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-transparent border-2 border-honolulu-blue dark:border-pacific-cyan text-honolulu-blue dark:text-vivid-sky hover:bg-honolulu-blue/10 dark:hover:bg-pacific-cyan/10 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
            >
              Get In Touch
            </button>
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
            className="cursor-pointer"
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
