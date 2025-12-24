import { useState } from 'react';
import { motion as Motion } from 'framer-motion';

// IMPORT ASSETS
import HmiLogo from '../assets/hmi.svg';
import SsmbLogo from '../assets/ssmb.svg';
import MpmLogo from '../assets/mpm.svg';
import ImeLogo from '../assets/ime.svg';
import ExcerLogo from '../assets/excer.svg';
import Hmi1 from '../assets/hmi1.svg';
import Hmi2 from '../assets/hmi2.svg';
import Ssb1 from '../assets/ssb1.svg';
import Ssb2 from '../assets/ssb2.svg';
import Mpm1 from '../assets/mpm1.svg';
import Mpm2 from '../assets/mpm2.svg';
import Ime1 from '../assets/ime1.svg';
import Ime2 from '../assets/ime2.svg';
import Exer1 from '../assets/exer1.svg';

const experienceData = [
  {
    role: "Member - Himpunan Mahasiswa Islam (HMI)",
    place: "Faculty of Engineering Commissariat, Universitas Indonesia",
    period: "Aug 2024 - Present · 10 months",
    description: "I am a Computer Engineering student at the University of Indonesia and an active member of HMI, Faculty of Engineering UI Commissariat. Through HMI, I’ve developed skills in public speaking, public relations, and leadership, while expanding my professional network. I continue to grow within this community and am open to opportunities that support both my organizational and career development.",
    logo: HmiLogo,
    photos: [{ src: Hmi1, caption: "HMI Implementation" }, { src: Hmi2, caption: "LK1 Intelligence" }]
  },
  {
    role: "BPH Logistics and Accommodation",
    place: "Sasambo UI",
    period: "Jul 2023 - Present · 1 year 11 months",
    description: "Since 2024, I have been part of Sasambo UI—starting as a staff member and currently serving as a BPH (2025–present). I’ve gained hands-on experience in event management, team coordination, and outreach, including promoting higher education to high school students in NTB. This role has strengthened my leadership, communication, and decision-making skills in dynamic organizational settings.",
    logo: SsmbLogo,
    photos: [{ src: Ssb1, caption: "Socialization 2024" }, { src: Ssb2, caption: "Socialization 2025" }]
  },
  {
    role: "MPM FT UI Member",
    place: "Electro Faction of MPM FTUI",
    period: "Jul 2023 - Dec 2024 · 1 year 6 months",
    description: "From July 2023 to December 2024, I served as a staff member in the Electro Faction of MPM FTUI, focusing on institutional assessments. I participated in decision-making processes, activity evaluations, and policy discussions. This role enhanced my skills in Microsoft Office, document management, public speaking, and organizational coordination.",
    logo: MpmLogo,
    photos: [{ src: Mpm1, caption: "Plenary Session" }, { src: Mpm2, caption: "Working Meeting" }]
  },
  {
    role: "IME FT UI Member",
    place: "Ikatan Mahasiswa Elektro FTUI (IME FTUI)",
    period: "Dec 2023 - Nov 2024 · 1 year",
    description: "Actively involved in the Islamic spiritual division of IME FTUI as a mentor and Instagram content manager. Responsible for creating and managing content to promote religious and social activities. This role enhanced my skills in time management, communication, mentoring, teamwork, and social media management.",
    logo: ImeLogo,
    photos: [{ src: Ime1, caption: "ILC Retro 2024" }, { src: Ime2, caption: "MABIM FT UI 2024" }]
  },
  {
    role: "Hardware Intern",
    place: "EXERCISE FTUI",
    period: "Oct 2023 - Feb 2024 · 5 months",
    description: "Worked in the hardware division of FT Exercise, focusing on electronic component design and system integration. Gained hands-on experience in hardware development and improved technical skills in analyzing and implementing electronic systems. Strengthened problem-solving abilities and teamwork in a tech-driven environment.",
    logo: ExcerLogo,
    photos: [{ src: Exer1, caption: "Final Project: Banker Arduino" }]
  }
];

export default function Experience() {
  const [selectedPhotos, setSelectedPhotos] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="relative pl-4 md:pl-8">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-slate-800"></div>

      {/* Modal */}
      {selectedPhotos && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex flex-col items-center justify-center p-4"
          onClick={() => setSelectedPhotos(null)}
        >
          <img src={selectedPhotos[photoIndex]?.src} className="max-h-[70vh] rounded-lg mb-4 object-contain shadow-2xl" />
          <p className="text-slate-300 text-center font-medium">{selectedPhotos[photoIndex]?.caption}</p>
        </div>
      )}

      <div className="space-y-10">
        {experienceData.map((item, index) => (
            <Motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Dot */}
            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-4 border-blue-600 z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                <div className="flex items-center gap-6">
                  {/* LOGO UKURAN DIPERBESAR */}
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-slate-800 rounded-2xl p-3 flex items-center justify-center border border-slate-700 shadow-inner">
                    <img src={item.logo} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-white leading-tight">{item.role}</h3>
                    <p className="text-blue-400 font-medium text-base mt-1">{item.place}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-800 px-4 py-2 rounded-full border border-slate-700 whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6 pl-0 md:pl-[7.5rem] text-justify">
                {item.description}
              </p>

              {/* Photos Thumbnails */}
              {item.photos && (
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 pl-0 md:pl-[7.5rem]">
                  {item.photos.map((photo, i) => (
                    <div 
                      key={i} 
                      onClick={() => { setSelectedPhotos(item.photos); setPhotoIndex(i); }}
                      className="w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border border-slate-700 hover:border-blue-500 transition-colors shadow-md relative group/img"
                    >
                      <img src={photo.src} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors"></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  );
}