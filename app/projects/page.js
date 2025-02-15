"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import ProjectsCarousel from "@/components/ui/carousel";
import Navbar from "@/components/ui/navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center text-white bg-slate-950">
      <Navbar />
      <h1 className="text-4xl font-bold text-gray-300">PROJECTS</h1>
      <ProjectsCarousel />
      <div className="absolute bottom-12 right-1 sm:right-10">
        <p className="text-gray-400 text-sm tracking-wider rotate-90">
          BREATHE
        </p>
      </div>

      <div className="absolute left-7 sm:left-10 bottom-10 space-y-4 flex flex-col">
        <motion.a
          initial={{ opacity: 0.5, y: 95 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-gray-400 hover:text-blue-600"
          href="https://www.facebook.com/profile.php?id=61572927516755"
          target="_blank"
        >
          <FaFacebookF />
        </motion.a>
        <motion.a
          initial={{ opacity: 0.5, y: 65 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-gray-400 hover:text-sky-400"
          href="https://x.com/Bhosya_"
          target="_blank"
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          initial={{ opacity: 0.5, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-gray-400 hover:text-pink-500"
          href="https://www.instagram.com/bowoksae"
          target="_blank"
        >
          <FaInstagram />
        </motion.a>
        <a
          href="https://github.com/Bhosya"
          target="_blank"
          className="text-gray-400 hover:text-black"
        >
          <FaGithub />
        </a>
      </div>
    </main>
  );
}
