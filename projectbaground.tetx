import React, { useState, useRef, useEffect } from "react";

const projects = [
  {
    title: "Online Course Management System",
    image: "/prjk1.svg",
    github: "https://github.com/FauzanHandoyo/PA-SBD-15.git",
    description:
      "An Online Learning Platform is a platform that can be accessed through the web or a mobile app to learn online. On this platform, students and teachers can register, choose courses they want to join, access learning materials, and get grades from assignments or tests.",
  },
  {
    title: "Smart Countdown Timer",
    image: "/prjk2.svg",
    github: "https://github.com/zahwagn/Group6-SCTimer-MBD",
    description:
      "The device was designed in Proteus 8 as a prototype to test if it works properly and efficiently. Components like Arduino and sensors were taken from The Engineer Project. Red and green LEDs are used as indicators on pins A0 and A1, with resistors to ground. A buzzer on pin A2 signals when time is up.\n\nTime is read using the DS3231 RTC (connected to A4 and A5) and shown on the MAX7219 display via SPI (pins 11, 10, and 13). A button on pin 7 serves as input, with a resistor to prevent floating, and its data is stored in EEPROM.",
  },
  {
    title: "Late Night Mission",
    image: "/prjk3.svg",
    github: "https://github.com/Yogaarsyad/Proyek-Akhir-OOP.git",
    description:
      "\"Late Night Mission\" is a top-down action-strategy game where players act as secret agents on dangerous missions. They must move fast, stay hidden, and use high-tech weapons and tools to win.\n\nThe story follows a battle between global criminal groups trying to control the world through corruption and illegal weapons. Players must stop their plans and reveal a secret that could threaten world safety.",
  },
];

export default function Projects() {
  const projectRefs = projects.map(() => useRef(null));
  const [modalImage, setModalImage] = useState(null);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateIntro, setAnimateIntro] = useState(false);

  useEffect(() => {
    const timerTitle = setTimeout(() => setAnimateTitle(true), 100);
    const timerIntro = setTimeout(() => setAnimateIntro(true), 500);
    return () => {
      clearTimeout(timerTitle);
      clearTimeout(timerIntro);
    };
  }, []);

  const scrollToProject = (index) => {
    projectRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <>
      <style>{`
        @keyframes colorPulse {
          0%, 100% {
            color: #333333;
          }
          50% {
            color: #555555;
          }
        }
        .animated-projects {
          animation: colorPulse 3s ease-in-out infinite;
        }
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animated-intro {
          animation: fadeSlideUp 1s ease forwards;
        }
      `}</style>

      <div className="bg-white min-h-screen relative">
        {/* Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative max-w-5xl w-full px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={modalImage}
                alt="Zoomed"
                className="w-full h-auto rounded-xl shadow-xl bg-transparent"
              />
            </div>
          </div>
        )}

        {/* Header Background */}
        <div className="relative h-56 flex items-end justify-start px-8 pb-4">
          <img
            src="/aja.svg"
            alt="Header Background"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            style={{ userSelect: "none" }}
          />

          {/* Animated Title */}
          <div className="relative z-10">
            <h2
              className={`text-4xl font-bold flex items-center gap-3 transition-transform duration-1000 ${
                animateTitle ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <span
                aria-label="code brackets"
                className="inline-block font-mono text-blue-600 text-5xl select-none"
              >
                &lt;&gt;
              </span>
              <span className="animated-projects">Projects</span>
            </h2>
          </div>
        </div>

        {/* Intro paragraph dengan animasi */}
        <div
          className={`max-w-3xl mx-auto px-4 py-6 text-center text-gray-700 text-base leading-relaxed ${
            animateIntro ? "animated-intro" : "opacity-0"
          }`}
        >
          Welcome to my project page! Here, I share the different works and projects I've been involved in. 
          This page is a space for you to explore a variety of my creations, whether they're personal 
          projects or team collaborations. Each project reflects the skills and effort I put into my work.
          Feel free to browse around and get to know what I'm capable of.
        </div>

        {/* Main container */}
        <div className="max-w-7xl mx-auto px-4 pb-20 relative">
          {/* Left: projects with padding right for sidebar */}
          <div className="pr-[20rem]">
            <div className="flex flex-col space-y-14">
              {projects.map((project, index) => (
                <div
                  key={index}
                  ref={projectRefs[index]}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl shadow p-8 scroll-mt-24"
                >
                  {project.image ? (
                    <>
                      <h3 className="text-3xl font-semibold text-black mb-8">
                        {project.title}
                      </h3>

                      <img
                        src={project.image}
                        alt={project.title}
                        onClick={() => openModal(project.image)}
                        className="w-full object-contain rounded-md shadow-md mb-10 cursor-zoom-in transition-transform hover:scale-105 duration-300 bg-transparent"
                        style={{ maxHeight: "800px" }}
                      />

                      {project.description && (
                        <p className="mb-6 text-gray-700 text-base whitespace-pre-line">
                          {project.description}
                        </p>
                      )}

                      {project.github && (
                        <table className="w-full border-collapse border border-gray-400">
                          <tbody>
                            <tr className="border border-gray-400 bg-gray-100">
                              <td className="p-4 font-semibold text-black border border-gray-400 w-1/3">
                                GitHub Repository
                              </td>
                              <td className="p-4 border border-gray-400 break-all">
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {project.github}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      )}
                    </>
                  ) : (
                    <div className="text-center text-gray-500 italic text-lg">
                      {project.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: sidebar fixed */}
          <div
            className="w-72 fixed right-8 top-32 bg-gray-50 border border-gray-300 rounded-xl p-6 shadow-md z-40"
          >
            <h4 className="text-xl font-bold mb-6">Daftar Project</h4>
            <ul className="space-y-5">
              {projects.map((project, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToProject(index)}
                    className="text-left text-black hover:underline focus:outline-none"
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
