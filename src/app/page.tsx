"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import RegistrationForm from "@/components/RegistrationForm";
import SuccessMessage from "@/components/SuccessMessage";
export default function Home() {
  const [isRegistered, setIsRegistered] = useState(false);
  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
  };
  const handleReset = () => {
    setIsRegistered(false);
  };
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };
  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {" "}
      {/* Animated Background Elements */}{" "}
      <motion.div
        className="absolute inset-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        {" "}
        {/* Background Circles */}{" "}
        <div className="absolute top-20 left-20 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>{" "}
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl"></div>{" "}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/3 rounded-full blur-3xl"></div>{" "}
      </motion.div>{" "}
      {/* Grid Pattern Overlay */}{" "}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>{" "}
      {/* Content Container */}{" "}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {" "}
        
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {" "}
          <motion.h1
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {" "}
            Survey<span className="text-black">Nex</span>{" "}
          </motion.h1>{" "}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {" "}
            The future of intelligent survey creation and analysis is coming
            soon. Join our exclusive waitlist for early access.{" "}
          </motion.p>{" "}
        </motion.div>{" "}
        {/* Registration Form or Success Message */}{" "}
        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {" "}
          {isRegistered ? (
            <SuccessMessage onReset={handleReset} />
          ) : (
            <RegistrationForm onSuccess={handleRegistrationSuccess} />
          )}{" "}
        </motion.div>{" "}
        {/* Footer */}{" "}
        <motion.footer
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {" "}
          <p className="text-gray-500 text-sm">
            {" "}
            © 2025 SurveyNex. All rights reserved.{" "}
          </p>{" "}
        </motion.footer>{" "}
      </div>{" "}
      {/* Floating Elements */}{" "}
      <motion.div
        className="absolute top-32 right-32 w-8 h-8 bg-black rounded-full opacity-20"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />{" "}
      <motion.div
        className="absolute bottom-32 left-32 w-6 h-6 bg-gray-800 rounded-full opacity-20"
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />{" "}
      <motion.div
        className="absolute top-64 left-64 w-4 h-4 bg-black rounded-full opacity-30"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />{" "}
    </motion.main>
  );
}
