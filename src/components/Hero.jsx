import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowRight, FiCode, FiCpu, FiMonitor, FiTerminal } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    "Software Engineer", 
    "Full Stack Developer", 
    "IoT Developer",
    "Computer Engineering Student"
  ];
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const keywordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const keywords = [
    "Web Development", 
    "Embedded Systems", 
    "IoT Solutions", 
    "System Programming",
    "React & Tailwind",
    "C / C++"
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-slate-950 pt-20">
      
      {/* --- ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{ y: Math.random() * 100, x: Math.random() * 100 }}
            animate={{ 
              y: [null, Math.random() * 100 - 50, Math.random() * 100],
              x: [null, Math.random() * 100 - 50, Math.random() * 100]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* --- LEFT CONTENT (TEXT) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Welcome Tag */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-slate-800/80 border border-slate-700 rounded-full text-blue-400 text-sm font-medium tracking-wide mb-8 backdrop-blur-md shadow-lg"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <span>AVAILABLE FOR HIRE</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <span className="block text-slate-300 text-4xl lg:text-5xl mb-2">Hello, I'm</span>
              <motion.span 
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-[length:200%_auto] font-extrabold"
              >
                Tri Yoga Arsyad
              </motion.span>
            </h1>

            {/* Animated Role */}
            <div className="h-16 mb-6 overflow-hidden flex justify-center lg:justify-start items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-400"
                >
                  {roles[currentRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              I specialize in crafting robust and scalable software solutions. Currently pursuing a <span className="text-white font-medium">Computer Engineering degree</span> at <span className="text-white font-medium">Universitas Indonesia</span>, with a focus on integrated hardware-software systems.
            </p>

            {/* Keywords / Skill Tags */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
              {keywords.map((keyword, index) => (
                <motion.span
                  key={keyword}
                  custom={index}
                  variants={keywordVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)", borderColor: "rgba(59, 130, 246, 0.5)" }}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium backdrop-blur-sm cursor-default transition-colors"
                >
                  {keyword}
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start items-center">
              <motion.a 
                href="https://drive.google.com/file/d/14H8xeSB2ZdX15RoDNLhO_QFk1br1m-eh/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold overflow-hidden shadow-lg shadow-blue-600/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiDownload className="group-hover:animate-bounce" />
                  Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-6 py-4 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-xl font-semibold hover:bg-slate-700 hover:text-white transition-all backdrop-blur-sm"
              >
                <FiMail />
                Contact Me
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex gap-4 justify-center lg:justify-start">
              <SocialBtn icon={<FiGithub />} href="https://github.com/Yogaarsyad" />
              <SocialBtn icon={<FiLinkedin />} href="https://linkedin.com" />
              <SocialBtn icon={<FiInstagram />} href="https://instagram.com" />
            </div>
          </motion.div>

          {/* --- RIGHT CONTENT (PHOTO) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, rotateY: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative flex justify-center order-1 lg:order-2"
          >
            {/* Floating Icons (Animated) */}
            <FloatingIcon top="5%" left="10%" delay={0} icon={<FiCode />} />
            <FloatingIcon top="20%" right="5%" delay={0.2} icon={<FiCpu />} />
            <FloatingIcon bottom="15%" left="5%" delay={0.4} icon={<FiMonitor />} />
            <FloatingIcon bottom="30%" right="10%" delay={0.6} icon={<FiTerminal />} />
            
            {/* Image Container */}
            <div className="relative z-10">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Main Image */}
              <div className="relative w-80 h-80 md:w-[480px] md:h-[480px]">
                <img 
                  src="/Foto.png" 
                  alt="Tri Yoga Arsyad" 
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500"
                />
                
                {/* Circle Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-transparent rounded-full -z-10 opacity-50 border border-slate-700"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Komponen Tombol Sosial Media
const SocialBtn = ({ icon, href }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    whileHover={{ y: -5 }}
    className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xl hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all shadow-lg"
  >
    {icon}
  </motion.a>
);

// Komponen Floating Icon
const FloatingIcon = ({ top, left, right, bottom, delay, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 2, repeat: Infinity, repeatType: "reverse" }}
    className="absolute w-12 h-12 flex items-center justify-center bg-slate-800/80 border border-slate-700 rounded-xl text-blue-400 text-xl backdrop-blur-md shadow-xl z-20"
    style={{ top, left, right, bottom }}
  >
    {icon}
  </motion.div>
);