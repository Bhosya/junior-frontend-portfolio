"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Fragment } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsAnimating(false), 1000);
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <motion.div
      className="w-full flex flex-col items-center py-16 text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* === Bagian Judul & Tombol di Luar Carousel === */}
      <div className="absolute bottom-10 z-50 text-center transition-opacity duration-500 opacity-100 bg-gradient-to-b from-transparent via-slate-950 to-slate-950 w-screen">
        <h2 className="text-5xl font-bold">{projects[activeIndex].title}</h2>
        <p className="text-gray-300 text-sm sm:text-base mt-3 w-[60%] mx-auto hidden sm:block">
          {projects[activeIndex].description}
        </p>
        <button
          onClick={openModal}
          className="mt-6 px-10 py-3 text-xs transition duration-300 ease-in-out shadow-xl hover:shadow-sm hover:shadow-cyan-400 shadow-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 hover:font-bold text-white tracking-wide"
        >
          DETAIL PROJECT
        </button>
      </div>

      {/* === SWIPER === */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isAnimating ? 1 : window.innerWidth < 640 ? 1 : 3}
        loop={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1.2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="w-full sm:w-[85%] max-w-6xl overflow-visible"
        slideToClickedSlide={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="relative transition-transform duration-500 w-[90%] sm:w-full"
          >
            <motion.div
              className={`relative w-[80vw] sm:w-full aspect-[1/1] shadow-lg transition-all duration-500 mx-auto ${
                activeIndex === index ? "scale-100" : "scale-90 blur-md"
              }`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Efek Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-transparent to-gray-900/80 z-10"></div>

              {/* Gambar */}
              <img
                src={`/images/${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* === MODAL (Detail Project) === */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-slate-950 p-6 max-w-lg w-full shadow-xl">
                <Dialog.Title className="text-xl font-bold text-gray-200">
                  {projects[activeIndex].title}
                </Dialog.Title>
                <img
                  src={`/images/${projects[activeIndex].image}`}
                  alt={projects[activeIndex].title}
                  className="w-full h-48 object-cover mt-3"
                />
                <p className="text-gray-300 mt-4">
                  {projects[activeIndex].description}
                </p>
                <div className="text-end space-x-2">
                  <button
                    onClick={closeModal}
                    className="mt-6 px-8 py-2 text-gray-300 transision duration-200 ease-in-out border border-red-500 hover:bg-red-500 hover:text-slate-950"
                  >
                    Close
                  </button>
                  <a
                    href={projects[activeIndex].link}
                    target="_blank"
                    className="mt-6 px-8 py-3 text-gray-300 transision duration-200 ease-in-out border border-cyan-500 hover:bg-cyan-500 hover:text-slate-950"
                  >
                    View
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </motion.div>
  );
}
