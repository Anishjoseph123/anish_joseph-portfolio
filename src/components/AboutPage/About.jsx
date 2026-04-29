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
import { SiTailwindcss } from "react-icons/si";
import { div } from "framer-motion/m";

const skills = [
  { name: "React JS", value: 90, icon: <FaReact /> },
  { name: "HTML", value: 95, icon: <FaHtml5 /> },
  { name: "CSS", value: 90, icon: <FaCss3Alt /> },
  { name: "JavaScript", value: 88, icon: <FaJs /> },
  { name: "Tailwind CSS", value: 85, icon: <SiTailwindcss /> },
  { name: "Bootstrap", value: 80, icon: <FaBootstrap /> },
  { name: "Node JS", value: 75, icon: <FaNodeJs /> },
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
          stroke="#ff7a00"
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
          <p className="text-gray-400 mt-3">UI/UX Designer & Developer</p>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 text-center">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Circle value={skill.value} icon={skill.icon} />
                <p className="text-orange-500 font-semibold">{skill.value}%</p>
                <p className="text-gray-400 text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
