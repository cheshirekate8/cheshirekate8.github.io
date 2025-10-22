import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "../../data/skills";
import SkillCard from "../ui/SkillCard";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-white dark:bg-federal-blue"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-marian-blue dark:text-vivid-sky mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-honolulu-blue via-pacific-cyan to-honolulu-blue mx-auto mb-6"></div>
          <p className="text-lg text-marian-blue/70 dark:text-light-cyan/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels. I'm always learning and expanding my skill set.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-marian-blue border border-vivid-sky dark:border-pacific-cyan rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-marian-blue dark:text-vivid-sky mb-6 flex items-center gap-2">
                <span className="text-2xl">
                  {categoryIndex === 0 && "💻"}
                  {categoryIndex === 1 && "🛠️"}
                  {categoryIndex === 2 && "✨"}
                </span>
                {category.title}
              </h3>

              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon} // proficiency={skill.proficiency || 0}
                    // delay={categoryIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-vivid-sky/30 via-pacific-cyan/20 to-vivid-sky/30 dark:from-marian-blue/50 dark:via-pacific-cyan/20 dark:to-marian-blue/50 rounded-xl p-8 border border-pacific-cyan/30">
            <h3 className="text-2xl font-bold text-marian-blue dark:text-vivid-sky mb-4">
              Always Learning
            </h3>
            <p className="text-marian-blue/70 dark:text-light-cyan/70 max-w-3xl mx-auto mb-6">
              I believe in continuous learning and improvement. Currently
              exploring new technologies and best practices to stay at the
              forefront of web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white dark:bg-federal-blue text-honolulu-blue dark:text-vivid-sky px-4 py-2 rounded-full text-sm font-medium border border-pacific-cyan/30">
                🚀 Next.js
              </span>
              <span className="bg-white dark:bg-federal-blue text-honolulu-blue dark:text-vivid-sky px-4 py-2 rounded-full text-sm font-medium border border-pacific-cyan/30">
                📱 React Native
              </span>
              <span className="bg-white dark:bg-federal-blue text-honolulu-blue dark:text-vivid-sky px-4 py-2 rounded-full text-sm font-medium border border-pacific-cyan/30">
                🎨 Three.js
              </span>
              <span className="bg-white dark:bg-federal-blue text-honolulu-blue dark:text-vivid-sky px-4 py-2 rounded-full text-sm font-medium border border-pacific-cyan/30">
                ⚡ Svelte
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
