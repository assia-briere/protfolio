import React, { useState } from 'react';
import { Database, Server, Brain, Code, FileCode, CheckCircle2, LucideIcon } from 'lucide-react';

interface SkillDetail {
  name: string;
}

interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
  details: SkillDetail[];
}

interface SkillsSectionProps {
  darkMode: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const skills: Skill[] = [
    {
      name: 'Data Storage & Caching',
      icon: Database,
      color: 'from-emerald-500 to-green-500',
      details: [
        { name: 'MongoDB' },
        { name: 'Redis' },
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'SQLite' }
      ]
    },
    {
      name: 'DevOps',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      details: [
        { name: 'Docker' },
        { name: 'Git / Github' },
        { name: 'CI/CD' },
        { name: 'Scrum' }
      ]
    },
    {
      name: 'Client UI/UX',
      icon: Code,
      color: 'from-pink-500 to-rose-500',
      details: [
        { name: 'ReactJS' },
        { name: 'NextJS' },
        { name: 'Angular' },
        { name: 'React Native' },
        { name: 'Flutter' },
        { name: 'Tailwind CSS' }
      ]
    },
    {
      name: 'Artificial Intelligence',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      details: [
        { name: 'Machine Learning' },
        { name: 'Deep Learning' },
        { name: 'Computer Vision' },
        { name: 'Data Analysis' },
        { name: 'Recommendation Systems' },
        { name: 'Reinforcement Learning' }
      ]
    },
    {
      name: 'Programming Languages & Frameworks',
      icon: FileCode,
      color: 'from-amber-500 to-orange-500',
      details: [
        { name: 'Python' },
        { name: 'Java' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'Kotlin' },
        { name: 'NodeJS' },
        { name: 'NestJS' },
        { name: 'Spring' },
        { name: 'Django' }
      ]
    }
  ];

  const handleSkillClick = (index: number): void => {
    setIsAnimating(true);
    setActiveSkill(activeSkill === index ? null : index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div  className={`p-8 rounded-xl shadow-lg border relative overflow-hidden
        ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}>
      <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-gray-900 via-gray-800 to-gray-900' : 'from-gray-50 via-white to-gray-50'} opacity-10 rounded-3xl`} />
      
      <h3 className={`text-4xl font-bold text-center mb-12 relative
        ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Technical Skills
        </span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 relative">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => handleSkillClick(index)}
            className={`relative p-8 rounded-2xl shadow-xl transition-all duration-500 cursor-pointer transform border
              ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50 border-gray-700' : 'bg-white hover:bg-gray-50 border-gray-200'}
              ${activeSkill === index ? 'scale-105 shadow-2xl' : 'shadow-xl hover:shadow-2xl'}
              ${isAnimating ? 'animate-pulse' : ''}
            `}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 
              hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
            
            <div className="flex items-center justify-center mb-4">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-20`}>
                <skill.icon size={36} className={`text-transparent bg-gradient-to-br ${skill.color} bg-clip-text`} />
              </div>
              <h4 className={`text-2xl font-semibold ml-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {skill.name}
              </h4>
            </div>
            
            <div className={`grid grid-cols-2 gap-2 transition-all duration-500
              ${activeSkill === index ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'} overflow-hidden`}>
              {skill.details.map((detail, i) => (
                <div
                  key={i}
                  className={`relative p-3 rounded-xl transition-all duration-300
                    ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100/50'}
                  `}
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 size={16} className={`text-transparent bg-gradient-to-br ${skill.color} bg-clip-text`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {detail.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
