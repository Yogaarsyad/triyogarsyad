import { motion as Motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiInstagram, FiArrowRight } from 'react-icons/fi';

export default function ContactInfo() {
  const contacts = [
    { name: 'Email', link: 'mailto:08trioga08@gmail.com', display: '08trioga08@gmail.com', icon: <FiMail /> },
    { name: 'Phone', link: 'tel:+6287765527489', display: '+62 877 6552 7489', icon: <FiPhone /> },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/tri-yoga-arsyad-6b993a293/', display: 'Tri Yoga Arsyad', icon: <FiLinkedin /> },
    { name: 'GitHub', link: 'https://github.com/Yogaarsyad', display: 'Yogaarsyad', icon: <FiGithub /> },
    { name: 'Instagram', link: 'https://www.instagram.com/yoga.arsyad', display: '@yoga.arsyad', icon: <FiInstagram /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {contacts.map((c, i) => (
        <Motion.a
          key={i}
          href={c.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-4 p-4 rounded-xl border border-slate-700 bg-slate-800 hover:border-pink-500 hover:bg-slate-700 transition-all group"
        >
          <div className="text-xl text-pink-500 bg-pink-500/10 p-3 rounded-lg group-hover:scale-110 transition-transform">
            {c.icon}
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-0.5">{c.name}</div>
            <div className="text-white font-medium truncate text-sm">{c.display}</div>
          </div>
          <FiArrowRight className="text-slate-500 group-hover:text-pink-500 transition-colors" />
        </Motion.a>
      ))}
    </div>
  );
}