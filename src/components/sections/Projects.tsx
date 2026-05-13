import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import { SiGithub } from "@icons-pack/react-simple-icons";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [filter, setFilter] = useState<"all" | "web-app" | "website" | "tool">(
    "all",
  );

  const categories = [
    { id: "all" as const, label: "All Projects" },
    { id: "web-app" as const, label: "Web Apps" },
    { id: "website" as const, label: "Websites" },
    { id: "tool" as const, label: "Tools" },
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
          <SectionHeading title="Featured Projects" />

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
              onClick={() => setFilter(category.id)}
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
          <Button
            as="a"
            href="https://github.com/cheshirekate8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub size={20} />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
