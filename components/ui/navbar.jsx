"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContainer, setShowContainer] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    if (!isOpen) {
      setShowContainer(true); // Fade-in saat navbar dibuka
      setIsOpen(true);
    } else {
      setTimeout(() => setShowContainer(false), 400); // Roll-up setelah dropdown tertutup
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-5 left-0 w-full z-50">
      <div
        className={`w-full absolute h-10 -top-10 ${
          isOpen ? "bg-gray-900 bg-opacity-80" : ""
        }`}
      ></div>
      <motion.div
        animate={{ y: showContainer ? 0 : -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`container mx-auto px-6 sm:px-0 py-4 sm:py-8 flex justify-between items-center ${
          isOpen ? "bg-gray-900 bg-opacity-80" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="text-gray-400 text-2xl font-bold">
          BOWOKSAE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex space-x-6">
          <Link
            href="/home"
            className={`hover:text-white ${
              pathname === "/home" ? "text-white" : "text-gray-400"
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`hover:text-white ${
              pathname === "/projects" ? "text-white" : "text-gray-400"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`hover:text-white ${
              pathname === "/contact" ? "text-white" : "text-gray-400"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-400 text-2xl"
          onClick={handleToggle}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden bg-gray-900 bg-opacity-90 backdrop-blur-md sm:hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link
                href="/home"
                className="text-gray-400 hover:text-white"
                onClick={handleToggle}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-gray-400 hover:text-white"
                onClick={handleToggle}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white"
                onClick={handleToggle}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
