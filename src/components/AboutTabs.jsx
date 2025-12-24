import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import Education from './Education';
import Experience from './Experience';
import Certificates from './Certificates';
// import ContactInfo from './ContactInfo'; // Opsional

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Custom Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-900 p-1.5 rounded-full border border-slate-800 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 md:px-10 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {activeTab === tab.id && (
                  <Motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-900/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <Motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'about' && (
                <div className="max-w-4xl mx-auto bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-800 backdrop-blur-sm shadow-2xl">
                  <div className="space-y-6 text-slate-300 leading-relaxed text-lg text-justify">
                    <p>
                      Hello! I am a <strong>5th-semester Computer Engineering student</strong> at the University of Indonesia. 
                      Originally from <span className="text-blue-400 font-semibold">East Lombok, NTB</span>, I am passionate about technology and innovation. 
                      My interests span across full-stack web development, backend engineering, and data processing.
                    </p>
                    
                    <p>
                      I have experience working with various programming languages and frameworks, including 
                      <span className="text-white font-semibold"> JavaScript (React, Node.js)</span>, 
                      <span className="text-white font-semibold"> Python</span>, 
                      <span className="text-white font-semibold"> PHP</span>, and 
                      <span className="text-white font-semibold"> C#</span>. 
                      However, my core strength lies in <strong>C/C++</strong> for system-level programming and embedded systems.
                    </p>

                    <p>
                      One of my proudest early projects is <strong>Student Courier</strong>, a delivery system based on <strong>Arduino</strong>. 
                      Currently, I am also developing <strong>Lifemon</strong>, a web-based health monitoring application for my <strong>Software Engineering (RPL)</strong> course. 
                      This project allows me to implement software architecture principles and full-stack development skills to solve real-world health monitoring challenges.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && <Experience />}
              {activeTab === 'education' && <Education />}
              {activeTab === 'certificates' && <Certificates />}
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}