import { motion } from "framer-motion";
import hero from "../../assets/hero.png";
import Anish_Photo from "../../assets/Anish_Photo.png";
import Resume from "../../../public/Anish_Joseph_resume.pdf";
import {
  FaDownload,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Home() {
  return (
    <section className="min-h-full bg-black text-white flex items-center px-6 md:px-16">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.2 }}
            className="text-gray-400 text-2xl"
          >
            Hello I am
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold"
          >
            Anish Joseph
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-orange-500"
          >
            Front end Web Developer(React JS)
          </motion.h1>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-6 mt-6"
          >
            <a href="mailto:anishjoseph367@gmail.com">
              <button className="cursor-pointer flex items-center justify-between gap-2 bg-orange-500 px-6 py-2 rounded-md hover:bg-orange-600 transition">
                <MdMail /> Hire Me
              </button>
            </a>

            <a
              href={Resume}
              download="Anish_Joseph_Resume.pdf"
              className="cursor-pointer flex items-center justify-between gap-2 border border-gray-500 px-6 py-2 rounded-md hover:border-white transition"
            >
              <FaDownload /> Download CV
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-6 mt-8 cursor-pointer"
          >
            <div className="border border-gray-700 border-[1px] rounded-[25px] w-8 h-8 flex items-center justify-center hover:bg-[#008bbe] transition">
              <a
                href="https://www.linkedin.com/in/anish-joseph-6303031b5"
                target="_blank"
              >
                <button className="bg-gray-500">
                  <FaLinkedin />
                </button>
              </a>
            </div>
            <div className="border border-gray-700 border-[1px] rounded-[25px] w-8 h-8 flex items-center justify-center hover:bg-[#1d78ff]/50 transition">
              <a href="https://www.facebook.com" target="_blank">
                <button>
                  <FaFacebook />
                </button>
              </a>
            </div>
            <div className="border border-gray-700 border-[1px] rounded-[25px] w-8 h-8 flex items-center justify-center hover:bg-[#c400aa] transition">
              <a href="https://www.instagram.com" target="_blank">
                <button>
                  <FaInstagram />
                </button>
              </a>
            </div>
            <div className="border border-gray-700 border-[1px] rounded-[25px] w-8 h-8 flex items-center justify-center hover:bg-red-700 transition">
              <a href="https://www.youtube.com" target="_blank">
                <button>
                  <FaYoutube />
                </button>
              </a>
            </div>
            <div className="border border-gray-700 border-[1px] rounded-[25px] w-8 h-8 flex items-center justify-center hover:bg-[#0ea600] transition">
              <a href="https://wa.me/+8747014506" target="_blank">
                <button>
                  <FaWhatsapp />
                </button>
              </a>
            </div>
          </motion.div>
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-16 mt-10"
          >
            <div>
              <h3 className="text-orange-500 text-xl font-bold">2+</h3>
              <p className="text-gray-400 text-sm">Years of experience</p>
            </div>

            <div>
              <h3 className="text-orange-500 text-xl font-bold">6+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center"
        >
          {/* Circle Background */}
          <div className="bg-gradient-to-r from-orange-500/20 to-transparent rounded-[30px]">
            {/* Image */}
            <img
              src={Anish_Photo}
              alt="profile"
              className="relative w-[250px] md:w-[350px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// https://www.figma.com/design/72WKgEekvuayUcWVcUznrG/Personal-website-|-Portfolio--Community-?node-id=587-638&t=lpRNoJbJN95T4dPg-0
