import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { motion as Motion, AnimatePresence } from 'framer-motion';

// --- IMPORT KOMPONEN ---
import Hero from './components/Hero';
import AboutTabs from './components/AboutTabs';
import Projects from './components/Projects';
import WriteUps from './components/WriteUps';
import Contact from './components/Contact';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Deteksi section aktif saat di-scroll untuk highlight menu
      const sections = ['home', 'about', 'projects', 'writeups', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Jika bagian atas elemen berada di area pandang (viewport)
          if (rect.top >= -100 && rect.top < 500) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'writeups', label: 'Write-Ups' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500 selection:text-white font-sans">
      
      {/* Navbar Fixed */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo / Brand Text */}
          <Motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 group"
            onClick={() => scrollToSection('home')}
          >
            <span className="text-blue-500 text-3xl group-hover:animate-pulse">●</span> 
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Web Portfolio
            </span>
          </Motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
              <Motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  activeSection === link.id ? 'text-blue-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label.toUpperCase()}
                
                {/* Garis Bawah Bergerak (Active Indicator) */}
                  {activeSection === link.id && (
                  <Motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Motion.button>
            ))}
            
            {/* Tombol HIRE ME (Scroll ke Contact) */}
            <Motion.button 
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgb(37, 99, 235)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 text-sm font-bold rounded-full transition-all shadow-lg cursor-pointer btn-cta focus-ring"
            >
              HIRE ME
            </Motion.button>
          </div>

          {/* Mobile Toggle */}
            <Motion.button 
            whileTap={{ scale: 0.8 }}
            className="md:hidden text-2xl text-slate-200 p-2 hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </Motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileTap={{ scale: 0.9 }}
                  className={`text-3xl font-bold transition-colors ${
                    activeSection === link.id ? 'text-blue-500' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Motion.button>
              ))}
              
              {/* Mobile Hire Me Button */}
              <Motion.button
                onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
                whileTap={{ scale: 0.9 }}
                className="text-xl font-bold px-8 py-3 rounded-full mx-auto btn-cta focus-ring"
              >
                HIRE ME
              </Motion.button>

              <div className="flex justify-center gap-6 mt-4">
                  <Motion.a whileHover={{ y: -5 }} href="https://github.com/Yogaarsyad" target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-white"><FiGithub/></Motion.a>
                  <Motion.a whileHover={{ y: -5 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-white"><FiLinkedin/></Motion.a>
                  <Motion.a whileHover={{ y: -5 }} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-white"><FiInstagram/></Motion.a>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><AboutTabs /></section>
        <section id="projects"><Projects /></section>
        <section id="writeups"><WriteUps /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* Footer with Animation */}
      <Motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-slate-950 border-t border-slate-800 py-12 mt-20 relative overflow-hidden"
      >
        {/* Animated Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <Motion.div whileHover={{ scale: 1.02 }} className="inline-block">
            <p className="text-slate-500 text-sm font-medium tracking-wide">
              © 2025 <span className="text-slate-300 hover:text-blue-400 transition-colors cursor-default">Tri Yoga Arsyad</span>. 
              Built with{' '}
              <span className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer" title="React">React</span> 
              {' '}&{' '}
              <span className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer" title="Tailwind CSS">Tailwind CSS</span>.
            </p>
          </Motion.div>
          
          {/* Location Animation */}
          <Motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-4 text-xs text-slate-600 font-medium tracking-wider uppercase"
          >
            Lombok, Nusa Tenggara Barat
          </Motion.div>
        </div>
      </Motion.footer>
    </div>
  );
}