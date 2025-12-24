import { FiMail, FiPhone, FiLinkedin, FiGithub, FiInstagram, FiArrowRight } from 'react-icons/fi';

export default function Contact() {
  const contacts = [
    { name: 'Email', link: 'mailto:08trioga08@gmail.com', display: '08trioga08@gmail.com', icon: <FiMail /> },
    { name: 'WhatsApp', link: 'https://wa.me/6287765527489', display: '+62 877-6552-7489', icon: <FiPhone /> },
    { name: 'LinkedIn', link: 'https://linkedin.com', display: 'Tri Yoga Arsyad', icon: <FiLinkedin /> },
    { name: 'GitHub', link: 'https://github.com/Yogaarsyad', display: 'Yogaarsyad', icon: <FiGithub /> },
    { name: 'Instagram', link: 'https://instagram.com', display: '@yoga.arsyad', icon: <FiInstagram /> },
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Let's Connect</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-950/50 hover:bg-slate-800 hover:border-blue-500/50 transition-all group"
            >
              <div className="text-xl text-blue-500 bg-blue-900/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                {c.icon}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-0.5">{c.name}</div>
                <div className="text-slate-200 font-medium truncate text-sm">{c.display}</div>
              </div>
              <FiArrowRight className="text-slate-600 group-hover:text-blue-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}