import { motion } from "framer-motion";
import { Project } from "../../types";
import { Code, SquareArrowOutUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-marian-blue border border-vivid-sky dark:border-pacific-cyan rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-vivid-sky/30 to-pacific-cyan/30 dark:from-marian-blue dark:to-pacific-cyan/20">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          // Placeholder if no image
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">🚀</div>
              <p className="text-marian-blue/60 dark:text-light-cyan/60">
                Project Image
              </p>
            </div>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-marian-blue/90 via-marian-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-honolulu-blue hover:bg-pacific-cyan text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <SquareArrowOutUpRight />
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pacific-cyan hover:bg-honolulu-blue text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Code />
              Code
            </a>
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-honolulu-blue text-white px-3 py-1 rounded-full text-sm font-medium">
            ⭐ Featured
          </div>
        )}

        {/* Construction badge */}
        {project.underConstruction && (
          <div className="absolute top-4 right-4 bg-honolulu-blue text-white px-3 py-1 rounded-full text-sm font-medium">
            🚧 Under Construction
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-marian-blue dark:text-vivid-sky mb-3 group-hover:text-honolulu-blue dark:group-hover:text-pacific-cyan transition-colors">
          {project.title}
        </h3>

        <p className="text-marian-blue/70 dark:text-light-cyan/70 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-vivid-sky dark:bg-pacific-cyan/20 text-marian-blue dark:text-vivid-sky px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
