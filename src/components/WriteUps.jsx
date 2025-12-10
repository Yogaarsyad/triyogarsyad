import { motion } from "framer-motion";
import { FiBookOpen, FiArrowUpRight, FiCode, FiCpu } from "react-icons/fi";

const writeups = [
  {
    title: "Guide: TailwindCSS + Vite Setup",
    link: "https://tailwindcss-com.translate.goog/docs/installation/using-vite?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc&_x_tr_hist=true",
    category: "Development",
    icon: <FiCode />,
    description: "A comprehensive guide translated to Indonesian on setting up TailwindCSS using Vite. Perfect for beginners looking for a fast setup.",
  },
  {
    title: "Engineering Mathematics Notes",
    link: "https://drive.google.com/file/d/1CM0jAdhZZXBERQ85cF-yjC-SWigXJfcJ/view?usp=drive_link",
    category: "Academic",
    icon: <FiBookOpen />,
    description: "Detailed lecture notes for Engineering Mathematics course at FTUI. Covers calculus, algebra, and more.",
  },
];

// Animasi Container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// Animasi Item
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function WriteUps() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-2">
          Write-Ups & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Notes</span>
        </h2>
        <div className="w-24 h-1 bg-slate-800 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6"
      >
        {writeups.map((item, index) => (
          <motion.a
            key={index}
            variants={itemVariants}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01, x: 5 }}
            whileTap={{ scale: 0.99 }}
            className="group block bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:shadow-blue-900/20 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
              {/* Icon Box */}
              <div className="w-14 h-14 flex-shrink-0 bg-slate-800 rounded-2xl flex items-center justify-center text-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider border border-slate-700 group-hover:border-blue-500/30 transition-colors">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="hidden sm:flex text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-3xl">
                <FiArrowUpRight />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}