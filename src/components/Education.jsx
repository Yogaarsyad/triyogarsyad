import { motion as Motion } from 'framer-motion';
// Pastikan path assets sesuai
import SmpImage from '../assets/smp.svg';
import SmaImage from '../assets/sma.svg';
import KuliahImage from '../assets/kuliah.svg';

const educationData = [
  {
    image: KuliahImage,
    institution: "Universitas Indonesia",
    address: "Kampus UI Depok, Jawa Barat",
    period: "2023 - Present"
  },
  {
    image: SmaImage,
    institution: "SMA ISLAM ASSUNNAH LOMBOK",
    address: "Lombok Timur",
    period: "2020 - 2023"
  },
  {
    image: SmpImage,
    institution: "SMP ISLAM TERPADU AIKMEL",
    address: "Lombok Timur",
    period: "2017 - 2020"
  },
];

export default function Education() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {educationData.map((item, index) => (
        <Motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 group flex flex-col"
        >
          {/* Bagian Gambar - Dibuat Besar & Responsif */}
          <div className="w-full h-48 md:h-56 bg-slate-800 p-4 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-20 z-10"></div>
            {item.image ? (
              <img 
                src={item.image} 
                alt={item.institution} 
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500" 
              />
            ) : (
              <span className="text-4xl">🎓</span>
            )}
          </div>

          {/* Bagian Teks */}
          <div className="p-6 flex-1 flex flex-col text-center">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {item.institution}
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-4 flex-grow">
              {item.address}
            </p>
            <div className="mt-auto pt-4 border-t border-slate-800">
              <span className="inline-block px-4 py-1.5 bg-blue-900/30 text-blue-400 text-xs font-bold rounded-full border border-blue-800">
                {item.period}
              </span>
            </div>
          </div>
        </Motion.div>
      ))}
    </div>
  );
}