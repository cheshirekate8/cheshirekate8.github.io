import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../../data/experience";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-vivid-sky/20 dark:bg-marian-blue/50"
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
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-honolulu-blue via-pacific-cyan to-honolulu-blue mx-auto mb-6"></div>
          <p className="text-lg text-marian-blue/70 dark:text-light-cyan/70 max-w-2xl mx-auto">
            My professional journey and the amazing companies I've had the
            privilege to work with.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-marian-blue border border-vivid-sky dark:border-pacific-cyan rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-marian-blue dark:text-vivid-sky mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-lg">
                    <span className="text-pacific-cyan dark:text-vivid-sky font-semibold flex items-center gap-2">
                      <span className="text-2xl">
                        {index % 3 === 0 ? "🏢" : index % 3 === 1 ? "🚀" : "💼"}
                      </span>
                      {exp.company}
                    </span>
                    <span className="text-marian-blue/50 dark:text-light-cyan/50">
                      •
                    </span>
                    <span className="text-marian-blue/70 dark:text-light-cyan/70">
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="bg-vivid-sky dark:bg-pacific-cyan/20 text-marian-blue dark:text-vivid-sky px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>

              <p className="text-marian-blue/80 dark:text-light-cyan/80 mb-6 text-lg">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-marian-blue dark:text-vivid-sky font-semibold mb-3">
                  Key Responsibilities:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-honolulu-blue dark:text-pacific-cyan mt-1 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-marian-blue/70 dark:text-light-cyan/70">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              {exp.technologies && (
                <div>
                  <h4 className="text-marian-blue dark:text-vivid-sky font-semibold mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-vivid-sky/50 dark:bg-pacific-cyan/20 text-pacific-cyan dark:text-vivid-sky px-4 py-2 rounded-full text-sm font-medium border border-pacific-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
