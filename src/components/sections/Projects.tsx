import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [filter, setFilter] = useState<"all" | "web-app" | "website" | "tool">(
    "all",
  );

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web-app", label: "Web Apps" },
    { id: "website", label: "Websites" },
    { id: "tool", label: "Tools" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-marian-blue dark:text-vivid-sky mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-honolulu-blue via-pacific-cyan to-honolulu-blue mx-auto mb-6"></div>
          <p className="text-lg text-marian-blue/70 dark:text-light-cyan/70 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique
            challenge and learning experience in my journey as a developer.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id as typeof filter)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === category.id
                  ? "bg-honolulu-blue text-white shadow-lg scale-105"
                  : "bg-white dark:bg-marian-blue text-marian-blue dark:text-light-cyan border border-vivid-sky dark:border-pacific-cyan hover:border-honolulu-blue dark:hover:border-pacific-cyan hover:scale-105"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-marian-blue/60 dark:text-light-cyan/60">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/cheshirekate8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-marian-blue dark:bg-pacific-cyan hover:bg-honolulu-blue dark:hover:bg-honolulu-blue text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
