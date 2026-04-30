import { motion } from "framer-motion";
import Anish_Photo from "../../assets/Anish_Photo.png";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiMui, SiTailwindcss } from "react-icons/si";
import { div } from "framer-motion/m";

const skills = [
  { name: "React JS", icon: <FaReact /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Node JS", icon: <FaNodeJs /> },
  { name: "Material UI", icon: <SiMui /> },
];
const experiences = [
  {
    role: "Junior Web Developer",
    company: "Murba Solutions Pvt. Ltd.",
    duration: "June 2025 - Present",
    location: "Dubai, United Arab Emirates(Remote)",
  },
  {
    role: "Executive - Program Management",
    company: "SGBS Unnati Foundation NGO",
    duration: "May 2024 - Oct 2024",
    location: "Bayyappanahalli, Bangalore",
  },
  {
    role: "Software Engineer",
    company: "Mobil80 Solutions and Services Pvt.Ltd.",
    duration: "November 2022 - January 2024",
    location: "Vidyaranyapura, Bangalore",
  },
  {
    role: "Associate Software Engineer (Intern)",
    company: "Test Yantra Software Solutions Pvt.Ltd.",
    duration: "December 2021 - Sept 2022",
    location: "Basavanagudi, Bangalore",
  },
];

// const Circle = ({ value, icon }) => {
//   const radius = 45;
//   const size = 90;
//   const stroke = 6;
//   const normalizedRadius = radius - stroke * 0.5;
//   const circumference = normalizedRadius * 2 * Math.PI;
//   const strokeDashoffset = circumference - (value / 100) * circumference;

//   return (
//     <div>
//       <svg height={radius * 2} width={radius * 2}>
//         {/* Background */}
//         <circle
//           stroke="#2a2a2a"
//           fill="transparent"
//           strokeWidth={stroke}
//           r={normalizedRadius}
//           cx={radius}
//           cy={radius}
//         />

//         {/* Progress */}
//         <motion.circle
//           stroke="#ff7a00"
//           fill="transparent"
//           strokeWidth={stroke}
//           strokeDasharray={circumference + " " + circumference}
//           strokeDashoffset={circumference}
//           animate={{ strokeDashoffset }}
//           transition={{ duration: 1 }}
//           strokeLinecap="round"
//           r={normalizedRadius}
//           cx={radius}
//           cy={radius}
//         />

//         {/* Text */}
//         {/* <text
//         x="50%"
//         y="50%"
//         dominantBaseline="middle"
//         textAnchor="middle"
//         className="fill-white text-sm"
//       >
//         {value}%
//       </text> */}
//         <div className="text-orange-500 text-xl z-10 inset-0 flex items-center justify-center absolute">
//           {icon}
//         </div>
//       </svg>
//     </div>
//   );
// };
const Circle = ({ value, icon }) => {
  const size = 90;
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-[90px] h-[90px]">
      {/* SVG Ring */}
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* Background */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2a2a2a"
          strokeWidth={stroke}
          fill="transparent"
        />

        {/* Progress */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#ff8300"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1 }}
          strokeLinecap="round"
        />
      </svg>

      {/* CENTERED ICON */}
      <div className="absolute inset-0 flex items-center justify-center text-orange-500 text-xl">
        {icon}
      </div>
    </div>
  );
};
export default function About() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* ABOUT */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
          <p className="text-gray-400 mt-3">Front End Web Developer</p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <motion.img
            src={Anish_Photo}
            alt="about"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-[260px] md:w-[320px] mx-auto grayscale rounded-xl"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-gray-400 leading-relaxed">
              I am a software engineer focused on building modern, user-friendly
              digital experiences. I specialize in crafting clean interfaces,
              developing scalable web applications, and solving complex problems
              with efficient solutions.
            </p>

            <button className="mt-6 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
              Download CV
            </button>
          </motion.div>
        </div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-xl p-6 md:p-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-8 text-center">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Circle icon={skill.icon} />
                <p className="text-gray-400 text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            Experience
          </h3>

          {/* SCROLL CONTAINER */}
          <div className="relative overflow-x-auto scrollbar-hide">
            {/* LINE */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/20"></div>

            {/* ITEMS */}
            <div className="flex gap-16 px-10 py-20 min-w-max">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative w-1/4 flex-shrink-0 text-center"
                >
                  {/* DOT */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-black z-10"></div>

                  {/* CARD */}
                  <div className="mt-16 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg hover:bg-white/10 transition">
                    <h4 className="font-semibold text-lg">{exp.role}</h4>

                    <p className="text-orange-400 text-sm mt-1">
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{exp.duration}</p>
                    <p className="text-sm text-gray-400 mt-3">{exp.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
