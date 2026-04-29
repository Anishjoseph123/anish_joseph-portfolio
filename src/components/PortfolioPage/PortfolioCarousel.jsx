import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    description: "Improved conversion rate by 35%",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Simplified user onboarding experience",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
  },
  {
    id: 3,
    title: "Brand Identity",
    description: "Complete branding for a startup",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function PortfolioCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex(([prev]) => {
      let next = prev + dir;
      if (next < 0) next = projects.length - 1;
      if (next >= projects.length) next = 0;
      return [next, dir];
    });
  };
  useEffect(() => {
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, []);

  const project = projects[index];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={project.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset }) => {
            if (offset.x > 100) paginate(-1);
            if (offset.x < -100) paginate(1);
          }}
          className="absolute w-full h-full"
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute bottom-20 left-10 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-widest"
            >
              {project.category}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mt-2"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-lg"
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-3xl bg-black/40 hover:bg-black/70 px-4 py-2 rounded-full"
      >
        ←
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-3xl bg-black/40 hover:bg-black/70 px-4 py-2 rounded-full"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
