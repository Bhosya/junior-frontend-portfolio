"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from "@/components/ui/navbar";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePathname } from "next/navigation";

export default function Contact() {
  const [status, setStatus] = useState("form");
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    setTimeout(() => setShow(true), 50);
  }, [pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setTimeout(() => setStatus("form"), 3000);
        },
        () => {
          setStatus("form");
        }
      );
  };

  if (!show) return null;

  return (
    <main className="h-screen bg-black flex items-center">
      <Navbar />

      <motion.div
        initial={{ width: "100vw", opacity: 0, scale: 1.1 }}
        animate={{ width: "90vw", opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="max-w-md w-full mx-auto rounded-md shadow-lg bg-white dark:bg-black"
      >
        <AnimatePresence mode="wait">
          {status === "form" && (
            <motion.div
              key="form"
              initial={{ width: "100vw", opacity: 0, scale: 1.1 }}
              animate={{ width: "90vw", opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="max-w-md w-full mx-auto mt-10 sm:mt-0 sm:border sm:border-gray-800 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
            >
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="font-bold text-xl text-neutral-800 dark:text-neutral-200"
              >
                Get In Touch
              </motion.h2>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
                className="text-neutral-600 hidden sm:block text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                We need to talk deeper to the earth core till we got burn by
                lava.
              </motion.p>
              <form className="my-8" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 1,
                  }}
                  className="mb-4"
                >
                  <LabelInputContainer>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Namaewa"
                      type="text"
                      required
                    />
                  </LabelInputContainer>
                </motion.div>
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 1.2,
                  }}
                  className="mb-4"
                >
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      type="email"
                    />
                  </LabelInputContainer>
                </motion.div>
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 1.4,
                  }}
                  className="mb-4"
                >
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="lol">Password</Label>
                    <Input
                      id="lol"
                      placeholder="Your Password"
                      type="password"
                      onFocus={(e) => {
                        e.target.placeholder =
                          "Bro? u really wanna give me your password?";
                        e.target.disabled = true;
                      }}
                    />
                  </LabelInputContainer>
                </motion.div>
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 1.6,
                  }}
                  className="mb-4"
                >
                  <LabelInputContainer className="mb-8">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      type="message"
                    />
                  </LabelInputContainer>
                </motion.div>

                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 1.8,
                  }}
                  className="mb-4"
                >
                  <button
                    className="bg-gradient-to-br text-white relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                  >
                    Send Message &rarr;
                    <BottomGradient />
                  </button>
                </motion.div>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                <div className="flex space-x-3">
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 2,
                    }}
                    href="https://github.com/Bhosya"
                    target="_blank"
                    className="relative group/btn flex items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  >
                    <FaGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <BottomGradient />
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 2.2,
                    }}
                    href="https://www.facebook.com/profile.php?id=61572927516755"
                    target="_blank"
                    className="relative group/btn flex items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  >
                    <FaFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <BottomGradient />
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 2.4,
                    }}
                    href="https://x.com/Bhosya_"
                    target="_blank"
                    className="relative group/btn flex items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  >
                    <FaTwitter className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <BottomGradient />
                  </motion.a>
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 2.6,
                    }}
                    href="https://www.instagram.com/bowoksae"
                    target="_blank"
                    className="relative group/btn flex items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  >
                    <FaInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <BottomGradient />
                  </motion.a>
                </div>
              </form>
            </motion.div>
          )}
          {status === "sending" && (
            <motion.div
              key="sending"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center text-xl text-white font-medium"
            >
              Sending...
            </motion.div>
          )}
          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center text-green-600 flex flex-col items-center"
            >
              <CheckCircle className="w-8 h-8 mb-2" />
              Email Sent Successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
