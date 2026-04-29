import { CiMail } from "react-icons/ci";
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <h2 className="text-xl mx-auto mb-6 font-bold text-orange-500 border border-gray-700 border-[1px] rounded-[25px] h-10 w-10 flex items-center justify-center">
          AJ
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm mb-6">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <a href="/services" className="hover:text-white transition">
            Services
          </a>
          <a href="/about" className="hover:text-white transition">
            About me
          </a>
          <a href="/portfolio" className="hover:text-white transition">
            Portfolio
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact me
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_10px_rgba(249,115,22,0.6)] transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_10px_rgba(249,115,22,0.6)] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_10px_rgba(249,115,22,0.6)] transition"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_10px_rgba(249,115,22,0.6)] transition"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-10 text-sm mb-6">
          <p>anishjoseph367@gmail.com</p>
          <p>+91 8747014506</p>
          <p>+91 8762452746</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Text */}
        <p className="text-xs text-gray-500">
          Developed by @anish.joseph Front End Web Developer
        </p>
      </div>
    </footer>
  );
}
