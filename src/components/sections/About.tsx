import {
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "React", icon: <SiReact size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "HTML/CSS", icon: <SiHtml5 size={40} /> },
    { name: "Git", icon: <SiGit size={40} /> },
    { name: "Vite", icon: <SiVite size={40} /> },
    { name: "Framer Motion", icon: <SiFramer size={40} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-white dark:bg-federal-blue"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-marian-blue dark:text-vivid-sky mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-honolulu-blue via-pacific-cyan to-honolulu-blue mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Placeholder for profile image */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-vivid-sky via-pacific-cyan/20 to-honolulu-blue/20 dark:from-marian-blue dark:via-pacific-cyan/20 dark:to-honolulu-blue/20 flex items-center justify-center border-2 border-pacific-cyan/30 dark:border-vivid-sky/30">
                {/* <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-marian-blue/60 dark:text-light-cyan/60 text-sm">
                    Your photo here
                  </p>
                </div> */}
                <img src="./headshot.png" className="h-full rounded-2xl" />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-pacific-cyan/20 dark:bg-pacific-cyan/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-honolulu-blue/20 dark:bg-honolulu-blue/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-marian-blue/80 dark:text-light-cyan/80 leading-relaxed">
              I'm a passionate frontend developer with a love for creating
              beautiful, functional web experiences. I specialize in building
              responsive websites and web applications that not only look great
              but provide seamless user experiences.
            </p>

            <p className="text-lg text-marian-blue/80 dark:text-light-cyan/80 leading-relaxed">
              With expertise in modern web technologies like React, TypeScript,
              and Tailwind CSS, I turn design concepts into pixel-perfect,
              performant code. I'm constantly learning and staying up-to-date
              with the latest trends in web development.
            </p>

            <p className="text-lg text-marian-blue/80 dark:text-light-cyan/80 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-honolulu-blue hover:bg-marian-blue dark:bg-pacific-cyan dark:hover:bg-honolulu-blue text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                Let's Work Together
              </a>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-marian-blue dark:text-vivid-sky mb-8 text-center">
            Technologies I Work With
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-marian-blue border border-vivid-sky dark:border-pacific-cyan rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3 flex justify-center">
                  {tech.icon}
                </div>
                <p className="text-marian-blue dark:text-light-cyan font-medium">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
