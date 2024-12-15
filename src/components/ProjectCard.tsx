import React from "react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    color: string;
    gradient: string;
    category: string;
    technologies: string[];
    image: string;
    githubLink: string;
    liveLink: string;
    features: string[];
    stats?: {
      [key: string]: string | number;
    };
  };
  darkMode: boolean;
  onHover: (id: number | null) => void;
  isHovered: boolean;
  mousePosition: { x: number; y: number };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  darkMode,
  onHover,
  isHovered,
  mousePosition,
}) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 w-full transform hover:scale-105 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateY(${
              (mousePosition.x - window.innerWidth / 2) * 0.01
            }deg) rotateX(${
              -(mousePosition.y - window.innerHeight / 2) * 0.01
            }deg)`
          : "none",
      }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative">
        {/* Project Image */}
        <div className="w-full h-80 bg-gray-200 relative overflow-hidden">
        <img
            src={project.image}
            alt={project.title}
            className="object-cover  transition-transform duration-300 transform hover:scale-100"
        />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500">{project.description}</p>

          {/* Project Category and Technologies */}
          <div className="mt-4 text-xs text-gray-500 flex flex-wrap">
            <span className="mr-2">{project.category}</span>
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-full mr-2 mt-2 ${
                  darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-4 flex justify-between items-center">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode ? "text-blue-300" : "text-blue-500"
              } hover:underline`}
            >
              GitHub
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode ? "text-green-300" : "text-green-500"
              } hover:underline`}
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
