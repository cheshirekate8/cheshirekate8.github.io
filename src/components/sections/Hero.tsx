import { motion } from "framer-motion";

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-lavender via-white to-purple/10 dark:from-blue-black dark:via-navy dark:to-purple/20">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple/30 dark:bg-purple/20 rounded-full blur-2xl"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-lavender dark:bg-royal/30 rounded-full blur-2xl"
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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-royal/20 dark:bg-purple/15 rounded-full blur-3xl"
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-lavender mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-royal via-purple to-royal bg-clip-text text-transparent">
              Katie Young
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-purple dark:text-lavender mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer with Frontend Expertise
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-navy/80 dark:text-lav-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I craft beautiful, responsive web experiences with modern
            technologies. Passionate about clean code and pixel-perfect designs.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => scrollToSection("#projects")}
              className="bg-royal hover:bg-navy dark:bg-purple dark:hover:bg-royal text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-transparent border-2 border-royal dark:border-purple text-royal dark:text-lavender hover:bg-royal/10 dark:hover:bg-purple/10 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
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
            <svg
              className="w-6 h-6 text-navy dark:text-lavender"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
