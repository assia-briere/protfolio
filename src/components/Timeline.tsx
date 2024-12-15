import React, { useState } from "react";
import { useInView } from "react-intersection-observer"; // to animate scroll into view

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  tools: string;
}

const experiences: WorkExperience[] = [
  {
    title: "AI Engineering",
    company: "UPWORK",
    period: "March 2024 - October 2024",
    location: "Freelancer",
    type: "Freelance",
    tools: "Machine Learning, NLP, CNN",
  },
  {
    title: "Full Stack Developer",
    company: "International Innovation Platform (IIP)",
    period: "March 2023 - June 2023",
    location: "Settat",
    type: "Final Year Project",
    tools: "Backend: Laravel | Frontend: Angular",
  },
  {
    title: "Full Stack Developer",
    company: "LOARC",
    period: "August 2022 - October 2022",
    location: "Casablanca",
    type: "Observate Internship",
    tools: "Backend: C# | Frontend: HTML, CSS",
  },
];

const WorkExperiencePage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      } py-12 transition-all`}
    >
      {/* Page Header */}
      <h1
        className={`text-center text-4xl font-bold ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        My Professional Journey
      </h1>
      <p className="text-center mt-2 text-lg text-gray-500">
        A visual timeline of my work experience
      </p>

      {/* Timeline Container */}
      <div className="relative mt-16 max-w-4xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-t from-pink-500 via-purple-500 to-indigo-500 h-full"></div>

        {/* Experience Cards */}
        <div className="space-y-24">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              index={index}
              experience={experience}
              darkMode={darkMode}
              selectedExperience={selectedExperience}
              setSelectedExperience={setSelectedExperience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ExperienceCardProps {
  index: number;
  experience: WorkExperience;
  darkMode: boolean;
  selectedExperience: number | null;
  setSelectedExperience: React.Dispatch<React.SetStateAction<number | null>>;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  index,
  experience,
  darkMode,
  selectedExperience,
  setSelectedExperience,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`relative transition-all transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } duration-700 ${index % 2 === 0 ? "ml-auto" : "mr-auto"} w-[90%] md:w-[65%]`}
      style={{ textAlign: index % 2 === 0 ? "left" : "right" }}
    >
      {/* Timeline Dot */}
      <div
        className={`absolute top-0 ${
          index % 2 === 0 ? "-right-8" : "-left-8"
        } bg-gradient-to-br from-indigo-600 to-pink-500 h-12 w-12 rounded-full border-6 border-white shadow-lg transform hover:scale-110 transition-all`}
      ></div>

      {/* Card Content */}
      <div
        className={`p-6 rounded-3xl shadow-2xl transform transition-all ${
          darkMode
            ? "bg-gradient-to-br from-gray-700 to-gray-600"
            : "bg-gradient-to-br from-white to-gray-50"
        } ${
          selectedExperience === index
            ? "scale-105 shadow-3xl transform rotate-1"
            : "scale-100"
        } cursor-pointer hover:scale-105 hover:shadow-2xl`}
        onClick={() => setSelectedExperience(index)}
      >
        <h2 className="text-3xl font-semibold text-gradient">
          {experience.title}
        </h2>
        <p className="text-sm text-gray-400 mt-2">{experience.period}</p>
        <p className="mt-3 font-bold text-gray-800 text-lg">{experience.company}</p>
        <p className="text-sm text-gray-500">{experience.location}</p>
        <div className="mt-4">
          <p className="font-medium text-gray-700">Type: {experience.type}</p>
          <p className="text-sm text-gray-500 mt-1">Tools: {experience.tools}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
