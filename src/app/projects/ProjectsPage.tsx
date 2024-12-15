import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";

// Define types for the component props
interface ProjectsPageProps {
  darkMode: boolean;
}

// Define the structure of a project
interface Project {
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
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ darkMode }) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Sample projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Mentify",
      description:
        "An AI-powered application for personalized learning that uses generative AI to create courses. Developed with Kotlin for the front-end and Firebase for dataset management, with Flask handling the back-end.",
      color: "#FF6B6B",
      gradient: "from-red-500 to-pink-500",
      category: "Mobile",
      technologies: ["Kotlin", "Firebase", "Flask", "Generative AI"],
      image: "https://github.com/assia-briere/img/blob/main/mentify.jpg?raw=true", // Placeholder image
      githubLink: "../const/mentify",
      liveLink: "https://mentify-demo.com",
      features: [
        "Generative AI-based course creation",
        "Personalized learning paths",
        "Real-time content generation",
        "Seamless front-end and back-end integration",
      ],
      stats: {
        users: "5K+",
        courses: "200+",
        rating: 4.7,
      },
    },
    {
      id: 2,
      title: "PoTherapy",
      description:
        "A mobile app for creating healthy, AI-driven conversations with users in need of someone to talk to. Built with React Native for the front-end, Firebase for datasets, and Flask for back-end services.",
      color: "#4ECDC4",
      gradient: "from-teal-500 to-cyan-500",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Flask", "Generative AI"],
      image: "/api/placeholder/600/400", // Placeholder image
      githubLink: "https://github.com/yourusername/potherapy",
      liveLink: "https://potherapy-demo.com",
      features: [
        "Generative AI for therapeutic conversations",
        "Emotion-aware interactions",
        "User-friendly interface",
        "Seamless mobile integration",
      ],
      stats: {
        users: "2K+",
        conversations: "50K+",
        rating: 4.8,
      },
    },
    {
      id: 3,
      title: "Obstacle Detection and Avoidance",
      description:
        "An AI-based obstacle detection and avoidance system using Python, YOLO (You Only Look Once), and OpenCV to ensure real-time processing and navigation in dynamic environments.",
      color: "#FF6B6B",
      gradient: "from-red-500 to-pink-500",
      category: "AI",
      technologies: ["Python", "YOLO", "OpenCV", "AI"],
      image: "https://github.com/assia-briere/img/blob/main/obstacle_detection.jpg?raw=true", // Placeholder image
      githubLink: "https://github.com/yourusername/obstacle-detection",
      liveLink: "https://youtu.be/OE9a1UyWpy8?si=66GXXxoeFGB7g3eF",
      features: [
        "Real-time object detection",
        "Dynamic obstacle avoidance",
        "AI-powered navigation",
        "Computer vision integration",
      ],
      stats: {
        detections: "1M+",
        environments: "50+",
        rating: 4.9,
      },
    },
    {
      id: 4,
      title: "Book Recommendation System",
      description:
        "A machine learning-based book recommendation system that uses collaborative filtering techniques to suggest personalized books to users based on their preferences.",
      color: "#4ECDC4",
      gradient: "from-teal-500 to-cyan-500",
      category: "AI",
      technologies: ["Python", "Machine Learning", "Collaborative Filtering"],
      image: "https://github.com/assia-briere/img/blob/main/recommendation_book.jpg?raw=true", // Placeholder image
      githubLink: "https://github.com/yourusername/book-recommendation",
      liveLink: "https://www.youtube.com/watch?v=PQjsVjiK3Jc",
      features: [
        "Collaborative filtering-based recommendations",
        "User preference analysis",
        "Personalized book suggestions",
        "Machine learning integration",
      ],
      stats: {
        users: "10K+",
        books_recommended: "100K+",
        rating: 4.7,
      },
    },
  ];  

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}>
      <h1
        className={`text-center text-4xl font-bold ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        My Projects
      </h1>
      <div className="mx-auto max-w-7xl space-y-12">
        {Object.entries(groupedProjects).map(([category, projects]) => (
            <div key={category}>
            <h2
                className={`text-2xl font-semibold ${
                darkMode ? "text-gray-200" : "text-gray-800"
                }`}
            >
                {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    darkMode={darkMode}
                    onHover={setHoveredProject}
                    isHovered={hoveredProject === project.id}
                    mousePosition={mousePosition}
                />
                ))}
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default ProjectsPage;
