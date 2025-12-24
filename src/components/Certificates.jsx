import React from "react";
import { FiExternalLink, FiAward } from "react-icons/fi";
// Pastikan path assets sesuai
import CrtvktImg from '../assets/crtvkt.svg';   
import Crtvkt2Img from '../assets/crtvkt2.svg'; 

const certificatesData = [
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Feb 2025",
    skills: "Computer Networking",
    url: "https://bit.ly/3SOIW0K",
    image: CrtvktImg,
  },
  {
    name: "Online Training Dasar K3L",
    issuer: "UPT K3L",
    date: "Sep 2023",
    skills: "Safety Procedures",
    url: "https://bit.ly/3YYP8Hc",
    image: Crtvkt2Img
  }
];

export default function Certificates() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {certificatesData.map((item, index) => (
        <div 
          key={index} 
          className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col h-full"
        >
          {/* Image Container */}
          <div className="relative w-full h-56 bg-slate-950 rounded-2xl overflow-hidden mb-6 border border-slate-800 group-hover:border-slate-700 transition-colors">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent z-10 pointer-events-none"/>
            
            {item.image ? (
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-700">
                <FiAward size={48} />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
              {item.name}
            </h3>
            
            <p className="text-slate-400 text-sm font-medium mb-4">
              Issued by {item.issuer} • {item.date}
            </p>

            {/* Skills Tag */}
            {item.skills && (
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-900/20 text-blue-400 text-xs font-semibold rounded-lg border border-blue-900/30">
                  {item.skills}
                </span>
              </div>
            )}

            {/* Footer Action */}
            <div className="mt-auto pt-5 border-t border-slate-800 flex items-center justify-between">
              {item.url ? (
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors group/link"
                >
                  Show Credential 
                  <FiExternalLink className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              ) : (
                <span className="text-slate-600 text-sm italic">No credential link</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}