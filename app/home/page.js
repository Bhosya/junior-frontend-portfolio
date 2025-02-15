"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  // 🔥 Setiap kali halaman berubah, reset animasi
  useEffect(() => {
    setShow(false);
    setTimeout(() => setShow(true), 50); // Beri jeda agar animasi bisa reset
  }, [pathname]);

  if (!show) return null; // Hindari tampilan kosong sekejap

  return (
    <main className="h-screen">
      <Navbar />

      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-0 sm:py-4 bg-clip-text text-center text-3xl text-transparent md:text-7xl"
        >
          <span className="font-semibold sm:font-medium tracking-tight">
            WAHYU PRASETYO WIBOWO
          </span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col bg-gradient-to-br from-slate-300 to-slate-500 pt-3 pb-2 sm:py-4 bg-clip-text items-center text-3xl text-transparent md:text-7xl"
        >
          <span className="text-base sm:text-3xl font-light tracking-tight">
            Junior Frontend Developer
          </span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text items-center text-3xl text-transparent md:text-7xl"
        >
          <a
            href="/projects"
            className="text-base text-center transition duration-300 ease-in-out hover:bg-cyan-300 hover:text-slate-950 border border-cyan-300 w-[128px] py-2"
          >
            View Projects
          </a>
        </motion.h1>
      </LampContainer>

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
