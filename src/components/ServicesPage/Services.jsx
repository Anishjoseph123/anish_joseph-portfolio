import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";
import { GrHostMaintenance } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";

const services = [
  {
    title: "Website Designing",
    desc: "Creating intuitive and visually engaging designs based on your requirements and user needs.",
    icon: <LuNotebookPen />,
  },
  {
    title: "Website Development",
    desc: "Building a fully functional website aligned with the approved design and technical requirements.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Website hosting",
    desc: "Deploying your website on a secure server to ensure it is accessible to users at all times.",
    icon: <FaUpload />,
  },
  {
    title: "Website maintenance",
    desc: "Providing ongoing support, updates, and issue resolution to keep your website running smoothly.",
    icon: <GrHostMaintenance />,
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center md:max-w-2xl lg:max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">Services</h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          I help transform ideas into engaging digital experiences by building
          fast, responsive, and user-friendly web interfaces tailored to meet
          both user needs and business goals.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            className="relative group rounded-xl p-[1px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 animate-border"
          >
            {/* Inner card */}
            <div className="bg-black rounded-xl p-6 text-center h-full transition">
              {/* Icon */}
              <div className="flex justify-center mb-4 text-orange-500 text-3xl group-hover:text-white transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-orange-500 group-hover:text-white transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
