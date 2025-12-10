import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiMaximize2, FiX, FiExternalLink } from "react-icons/fi";

// Import gambar dari assets (Pastikan file lifemon.png ada di folder src/assets/)
import LifemonImg from '../assets/lifemon.png';

const projects = [
  {
    title: "Lifemon - Health Monitoring",
    image: LifemonImg, // Menggunakan variable import
    github: "https://github.com/Yogaarsyad/Project-RPL16.git",
    demo: "https://lifemon.vercel.app/", // Link Uji Coba
    tags: ["Web App", "React", "Health"],
    description: "LifeMon aims to help users monitor their daily health through features like Food Logging, Exercise Tracking, and Sleep Monitoring. It also delivers relevant Health Articles and offers Personalized Recommendations based on user data to help maintain a healthier lifestyle.",
  },
  {
    title: "Online Course System",
    image: "/prjk1.svg", // Gambar di folder public (string path)
    github: "https://github.com/FauzanHandoyo/PA-SBD-15.git",
    tags: ["Web", "Database"],
    description: "An Online Learning Platform accessed through web or mobile app to learn online. Students and teachers can register, choose courses, access materials, and get grades.",
  },
  {
    title: "Smart Countdown Timer",
    image: "/prjk2.svg",
    github: "https://github.com/zahwagn/Group6-SCTimer-MBD",
    tags: ["IoT", "Arduino"],
    description: "Prototype device designed in Proteus 8 using Arduino. Features Red/Green LEDs, Buzzer, DS3231 RTC, and MAX7219 display.",
  },
  {
    title: "Late Night Mission",
    image: "/prjk3.svg",
    github: "https://github.com/Yogaarsyad/Proyek-Akhir-OOP.git",
    tags: ["Game Dev", "Java"],
    description: "Top-down action-strategy game where players act as secret agents. Players must move fast, stay hidden, and stop criminal groups.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-2">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
          >
            <div 
              className="relative h-56 bg-slate-800 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2">
                  <FiMaximize2 /> View
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex gap-2 mb-3 flex-wrap">
                {project.tags?.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold text-blue-400 bg-blue-900/30 px-2 py-1 rounded-md uppercase border border-blue-900/50">{tag}</span>
                ))}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">{project.description}</p>
              
              <div className="pt-4 border-t border-slate-800 flex gap-3 mt-auto">
                {/* Tombol Code */}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-2 flex items-center justify-center gap-2 text-xs font-bold text-white bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors">
                    <FiGithub /> CODE
                  </a>
                )}
                
                {/* Tombol Demo (Hanya muncul jika ada link demo) */}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 py-2 flex items-center justify-center gap-2 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
                    <FiExternalLink /> DEMO
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Detail Project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors z-10">
                <FiX size={20} />
              </button>

              <div className="h-64 bg-slate-950 w-full flex items-center justify-center p-6 border-b border-slate-800">
                <img src={selectedProject.image} className="max-w-full max-h-full object-contain rounded-lg shadow-lg" alt={selectedProject.title} />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                
                <div className="flex gap-2 mb-6">
                   {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-bold border border-blue-800">{tag}</span>
                   ))}
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-8 whitespace-pre-line">{selectedProject.description}</p>
                
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors">
                      <FiGithub size={18} /> Repository
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
                      <FiExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}