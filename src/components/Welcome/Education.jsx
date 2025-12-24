import { motion as Motion } from 'framer-motion';
import SmpImage from '../../assets/smp.svg';
import SmaImage from '../../assets/sma.svg';
import KuliahImage from '../../assets/kuliah.svg';

const educationData = [
  {
    image: SmpImage,
    institution: "SMP ISLAM TERPADU AIKMEL",
    address: "Jln. Raya Aikmel, Lombok Timur",
    period: "2017 - 2020"
  },
  {
    image: SmaImage,
    institution: "SMA ISLAM ASSUNNAH LOMBOK",
    address: "Jln. TGH. Hasanain, Pancor, Lombok Timur",
    period: "2020 - 2023"
  },
  {
    image: KuliahImage,
    institution: "Universitas Indonesia",
    address: "Kampus UI Depok, Jawa Barat",
    period: "2023 - Present"
  }
];

export default function Education() {
  return (
    <div className="px-4 py-8 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-2xl font-bold text-center text-black mb-8">My Education Journey</h2>
      <div className="flex flex-col items-center space-y-10">
        {educationData.map((item, index) => (
          <Motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={item.image}
              alt={item.institution}
              className="w-full h-80 object-contain mb-4 rounded-lg border border-gray-200"
            />
            <Motion.div
              className="text-xl font-semibold text-black mb-1"
              whileHover={{ scale: 1.05, color: '#1D4ED8' }}
            >
              {item.institution}
            </Motion.div>
            <Motion.div
              className="text-sm text-black mb-1"
              whileHover={{ scale: 1.05, color: '#1D4ED8' }}
            >
              {item.address}
            </Motion.div>
            <Motion.div
              className="text-sm font-medium text-black"
              whileHover={{ scale: 1.05, color: '#1D4ED8' }}
            >
              {item.period}
            </Motion.div>
          </Motion.div>
        ))}
      </div>
    </div>
  );
}
