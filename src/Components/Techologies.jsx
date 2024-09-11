import React from "react";
import { FaReact, FaCss3, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { animate, motion } from "framer-motion";

const iconsVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Techologies = () => {
  return (
    <div className="mt-10 border-b border-neutral-800 pb-24">
      <div className="text-center">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl font-bold pb-4"
        >
          Technologies
        </motion.h1>
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap justify-center items-center gap-8 mt-5"
      >
        <motion.div
          variants={iconsVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3 className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconsVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl  text-green-600" />
        </motion.div>
        <motion.div
          variants={iconsVarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconsVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconsVarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAngular className="text-7xl text-sky-500" />
        </motion.div>
        <motion.div
          variants={iconsVarients(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiRedis className="text-7xl  text-orange-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Techologies;
