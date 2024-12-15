import React, { useState } from "react";
import { useInView } from "react-intersection-observer"; // to animate scroll into view

interface Formation {
  title: string;
  duration: string;
  institution: string;
  location: string;
  description: string;
  courses: string[];
}

const formations: Formation[] = [
  {
    title: "MASTER OF SCIENCES AND TECHNIQUES (MST)",
    duration: "Since September 2023",
    institution: "Faculty of Sciences and Techniques Marrakesh",
    location: "Marrakesh, Morocco",
    description: "Master's in Artificial Intelligence and Computer Engineering.",
    courses: [
      "Deep Learning",
      "Machine Learning",
      "Data Analysis",
      "Power BI",
      "DevOps",
      "Recommendation Systems",
    ],
  },
  {
    title: "BACHELOR OF SCIENCES AND TECHNIQUES (GI)",
    duration: "From September 2022 to July 2023",
    institution: "Faculty of Sciences and Techniques Settat",
    location: "Settat, Morocco",
    description: "Bachelor in Computer Science.",
    courses: ["Linux", "SQL / PLSQL", "Computer Networks", "Optimization", "JAVA"],
  },
  {
    title: "DIPLOMA OF SCIENTIFIC AND TECHNICAL UNIVERSITY STUDIES (DEUST)",
    duration: "From September 2020 to July 2022",
    institution: "Faculty of Sciences and Techniques Settat",
    location: "Settat, Morocco",
    description: "Mathematics, Computer Science, Physics (MIP) Field.",
    courses: [
      "Data Structure (C Language)",
      "Algebra",
      "Analysis",
      "Data Structure",
    ],
  },
  {
    title: "BACCALAUREATE",
    duration: "From September 2019 to July 2020",
    institution: "IBN Yasmin High School",
    location: "Casablanca, Morocco",
    description: "Physics and Chemistry.",
    courses: [],
  },
];

const FormationPage: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedFormation, setSelectedFormation] = useState<number | null>(null);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } py-10 transition-all`}
    >
      {/* Page Header */}
      <h1
        className={`text-center text-4xl font-bold ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        My Education Journey
      </h1>
      <p className="text-center mt-2 text-lg font-light">
        A visual timeline of my academic achievements
      </p>

      {/* Timeline Container */}
      <div className="relative mt-12 max-w-5xl mx-auto">
        {/* Vertical Timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 h-full"></div>

        {/* Education Cards */}
        <div className="space-y-16">
          {formations.map((formation, index) => (
            <FormationCard
              key={index}
              index={index}
              formation={formation}
              darkMode={darkMode}
              selectedFormation={selectedFormation}
              setSelectedFormation={setSelectedFormation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface FormationCardProps {
  index: number;
  formation: Formation;
  darkMode: boolean;
  selectedFormation: number | null;
  setSelectedFormation: React.Dispatch<React.SetStateAction<number | null>>;
}

const FormationCard: React.FC<FormationCardProps> = ({
  index,
  formation,
  darkMode,
  selectedFormation,
  setSelectedFormation,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`relative transition-all transform ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      } duration-700 ${index % 2 === 0 ? "ml-auto" : "mr-auto"} w-[95%] md:w-[70%]`}
      style={{ textAlign: index % 2 === 0 ? "left" : "right" }}
    >
      {/* Timeline Node */}
      <div
        className={`absolute top-0 ${
          index % 2 === 0 ? "-right-4" : "-left-4"
        } bg-gradient-to-br from-blue-500 to-purple-500 h-8 w-8 rounded-full border-4 border-gray-900 shadow-lg transform hover:scale-110 transition-all`}
      ></div>

      {/* Card Content */}
      <div
        className={`p-6 rounded-lg shadow-lg transform transition-all ${
          darkMode
            ? "bg-gradient-to-br from-gray-800 to-gray-700"
            : "bg-gradient-to-br from-white to-gray-50"
        } ${
          selectedFormation === index ? "scale-105 shadow-2xl" : "scale-100"
        }`}
        onClick={() => setSelectedFormation(index)}
      >
        <h2 className="text-xl font-bold">{formation.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {formation.duration}
        </p>
        <p className="mt-2 font-semibold">{formation.institution}</p>
        <p className="text-sm text-gray-400">{formation.location}</p>
        <p className="mt-4">{formation.description}</p>
        {formation.courses.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium">Relevant Courses:</h3>
            <ul className="mt-2 list-disc pl-6">
              {formation.courses.map((course, idx) => (
                <li key={idx} className="text-sm">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormationPage;
