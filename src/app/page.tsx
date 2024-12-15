'use client'
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, Briefcase, Book, Github, Linkedin, Mail, ArrowRight , Heart ,Sparkles,  Code, Paintbrush, ChevronRight } from 'lucide-react';
import ProjectsPage from './projects/ProjectsPage';
import FormationPage from './Educations/Education';
import SkillsSection from '@/components/Skill';
import Timeline from '@/components/Timeline';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  // Changed type to number | null to fix TypeScript error
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrolled = window.scrollY;
  //     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  //     const progress = (scrolled / maxScroll) * 100;
  //     setScrollProgress(progress);
  //   };

  //   // const handleMouseMove = (e: MouseEvent) => {
  //   //   setMousePosition({ x: e.clientX, y: e.clientY });
  //   // };

  //   window.addEventListener('scroll', handleScroll);
  //   // window.addEventListener('mousemove', handleMouseMove);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     // window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  const Navigation = () => (
    <nav className={`fixed top-0 w-full ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md transition-all duration-500 shadow-lg z-50`}>
      <div className="relative w-full h-1">
        <div 
          className="absolute h-full bg-blue-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} cursor-pointer hover:scale-105 transition-transform`}>
            Portfolio
          </h1>
          <div className="flex items-center gap-8">
            {[
              { icon: Home, label: 'Home', page: 'home' },
              { icon: Briefcase, label: 'Projects', page: 'projects' },
              { icon: Book, label: 'Formation', page: 'Formation' }
            ].map(({ icon: Icon, label, page }) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`group flex items-center gap-2 relative px-4 py-2 rounded-lg transition-all
                  ${activePage === page 
                    ? 'text-blue-500' 
                    : darkMode ? 'text-white hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`}
              >
                <Icon size={20} />
                <span>{label}</span>
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform ${activePage === page ? 'scale-x-100' : ''}`} />
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'} hover:scale-110 transition-all`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className={`w-full ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md transition-all duration-500 shadow-lg z-50`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Made with ❤️ by BRIERE ASSIA
          </p>
          <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            All rights reserved © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div className={`relative min-h-screen pt-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            ${darkMode ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.08)'} 0%, 
            transparent 50%)`,
        }}
      />
  
      <div className="max-w-6xl mx-auto">
        {/* Profile Section */}
        <section className="text-center mb-16 relative">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <img
              src="https://github.com/assia-briere/img/blob/main/profile.png?raw=true"
              alt="Profile"
              className="relative w-40 h-40 rounded-full object-cover mb-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
            />
          </div>
          <h2
            className={`text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-500`}
          >
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              BRIERE ASSIA
            </span>
          </h2>
          <p
            className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-500`}
          >
            Full Stack Developer | AI Enthusiast | Creative Problem Solver
          </p>
          <div className="flex justify-center gap-6 mt-8">
            {[{ Icon: Github, label: 'GitHub', href: 'https://github.com/assia-briere' },
              { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/assia-briere-900797243/' },
              { Icon: Mail, label: 'Email', href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=assiabrier@gmail.com' }].map(({ Icon, label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`group relative p-4 rounded-full overflow-hidden transition-all duration-500
                  ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <Icon size={24} className="transform group-hover:scale-110 transition-transform" />
                </a>
            ))}
          </div>
        </section>
        {/* Formation Section */}
        <section>
          <div
            className={`p-10 rounded-2xl shadow-2xl border relative overflow-hidden mb-16
              ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <div className="absolute w-64 h-64 rounded-full bg-purple-500/30 blur-3xl -top-32 -left-32" />
              <div className="absolute w-64 h-64 rounded-full bg-blue-500/30 blur-3xl -bottom-32 -right-32" />
            </div>

            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className={`text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text`}>
                My Academic Journey
              </h2>
              <p className={`text-lg text-center mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                A glimpse into the milestones of my educational path.
              </p>
            </motion.div>

            {/* Master's Card */}
            <div className="flex justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-6 rounded-xl shadow-lg relative group cursor-pointer
                  ${darkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-50 hover:bg-white'}
                  transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl" />
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExamR1MHFidDZuZ2ZpdG91MTFrYmIybzd4MWZibnlwNTdvZ3g1aGdzdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NGMgBy822qFLfkArov/giphy.gif"
                    alt="Master's Program"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Master's in AI
                </h3>
                <p className="text-center text-sm">
                  FST Marrakech (2023 - Present)
                </p>
              </motion.div>
            </div>

            {/* Interactive Call to Action */}
            <div className="flex justify-center">
              <motion.div className="relative group">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"
                  variants={{
                    hover: {
                      scale: 1.1,
                      transition: { repeat: Infinity, duration: 1, repeatType: "reverse" }
                    }
                  }}
                />
                <motion.button
                  onClick={() => setActivePage('Formation')}
                  className={`relative px-8 py-4 rounded-xl font-bold text-white flex items-center space-x-3
                    bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600
                    transform transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Discover My Full Journey</span>
                  <motion.div
                    variants={{
                      hover: { x: 10, transition: { repeat: Infinity, duration: 0.6 } }
                    }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <SkillsSection darkMode={darkMode} />
        </section>
  
        {/* Timeline Section */}
        <section className="mb-16">
          <Timeline darkMode={darkMode} />
        </section>
        {/* Project  Section */}  
        <section>
          <div
            className={`p-8 rounded-xl shadow-lg border relative overflow-hidden
              ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <div className="absolute w-64 h-64 rounded-full bg-purple-500/30 blur-3xl -top-32 -left-32" />
              <div className="absolute w-64 h-64 rounded-full bg-blue-500/30 blur-3xl -bottom-32 -right-32" />
            </div>

            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className={`text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text`}>
                Exploring the Digital Frontier
              </h2>
              <p className={`text-lg text-center mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Where creativity meets technology in meaningful ways.
              </p>
            </motion.div>

            {/* Project Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* AI Projects Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-6 rounded-xl shadow-lg relative group cursor-pointer
                  ${darkMode ? 'bg-gray-900/80 hover:bg-gray-900' : 'bg-gray-50 hover:bg-white'}
                  transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl" />
                <div className="w-40 h-40 rounded-lg overflow-hidden mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://media.giphy.com/media/Ll22OhMLAlVDb8UQWe/giphy.gif"
                    alt="AI Projects"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  AI & ML Projects
                </h3>
                <p className="text-center text-sm">
                  Exploring the frontiers of artificial intelligence and machine learning.
                </p>
              </motion.div>

              {/* Web Dev Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-6 rounded-xl shadow-lg relative group cursor-pointer
                  ${darkMode ? 'bg-gray-900/80 hover:bg-gray-900' : 'bg-gray-50 hover:bg-white'}
                  transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl" />
                <div className="w-40 h-40 rounded-lg overflow-hidden mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://media.giphy.com/media/jRf5fsn8G6YaogAWxn/giphy.gif"
                    alt="Web Development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Web Development
                </h3>
                <p className="text-center text-sm">
                  Creating responsive, interactive web experiences.
                </p>
              </motion.div>

              {/* Creative Tools Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-6 rounded-xl shadow-lg relative group cursor-pointer
                  ${darkMode ? 'bg-gray-900/80 hover:bg-gray-900' : 'bg-gray-50 hover:bg-white'}
                  transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-xl" />
                <div className="w-40 h-40 rounded-lg overflow-hidden mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                    alt="Creative Tools"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-orange-400 text-transparent bg-clip-text">
                  Creative Tools
                </h3>
                <p className="text-center text-sm">
                  Building tools that empower creativity and productivity.
                </p>
              </motion.div>
            </div>

            {/* Interactive Call to Action */}
            <div className="mt-12 flex justify-center">
              <motion.div className="relative group">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"
                  variants={{
                    hover: {
                      scale: 1.1,
                      transition: { repeat: Infinity, duration: 1, repeatType: "reverse" }
                    }
                  }}
                />
                <motion.button
                onClick={() => setActivePage('projects')}
                  className={`relative px-8 py-4 rounded-xl font-bold text-white flex items-center space-x-3
                    bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600
                    transform transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Discover All Projects</span>
                  <motion.div
                    variants={{
                      hover: { x: 10, transition: { repeat: Infinity, duration: 0.6 } }
                    }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Navigation />
      <div className="pt-20">
        {activePage === 'home' && <HomePage />}
        {activePage === 'projects' && <ProjectsPage darkMode={darkMode} />}
        {activePage === 'Formation' && <FormationPage darkMode={darkMode} />}
      </div>
      <Footer/>
     
    </div>
  );
};

export default Portfolio;