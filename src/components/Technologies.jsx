import React from 'react';
import { FaReact } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Technologies = () => {
  // Define the floating animation for each item
  const floatAnimation = {
    initial: { y: 0, opacity: 0.8 },
    animate: {
      y: [-10, 10, -10],  // Move the element up and down
      opacity: [0.8, 1, 0.8], // Fade in and out
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity, // Repeat indefinitely
        repeatType: "reverse", // Reverse the animation back and forth
      }
    }
  };

  // Container animation with staggered children
  const containerAnimation = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2, // Add delay between each item (0.2 seconds)
      },
    }
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-4" 
        variants={containerAnimation} 
        initial="initial" 
        animate="animate"
      >
        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4" 
          variants={floatAnimation}
        >
          <FaReact className="text-7xl text-cyan-400" />
          React
        </motion.div>
        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4" 
          variants={floatAnimation}
        >
          <SiPython className="text-7xl text-yellow-500" />
          Python
        </motion.div>
        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4" 
          variants={floatAnimation}
        >
          <RiNodejsLine className="text-7xl text-green-500" />
          Node.js
        </motion.div>
        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4" 
          variants={floatAnimation}
        >
          <FaAws className="text-7xl text-orange-500" />
          AWS
        </motion.div>
        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4" 
          variants={floatAnimation}
        >
          <SiMongodb className="text-7xl text-green-500" />
          MongoDB
        </motion.div>
        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4" 
          variants={floatAnimation}
        >
          <BiLogoPostgresql className="text-7xl text-blue-600" />
          PostgreSQL
        </motion.div>
        <motion.div 
          className="rounded-2xl border-4 border-neutral-800 p-4" 
          variants={floatAnimation}
        >
          <SiTypescript className="text-7xl text-cyan-400" />
          TypeScript
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
