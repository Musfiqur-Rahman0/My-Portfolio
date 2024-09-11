import React from "react";
import { HERO_CONTENT } from "../constants";
import heroimg from "../assets/projects/kevinRushProfile.png";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border border-neutral-900  lg:mb-50">
      <div className="flex flex-wrap justify-between p-5 items-center">
        <div className="w-full lg:w-1/2  ">
          <div className="flex flex-col lg:items-start gap-4">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pt-8 text-4xl font-thin tracking-tight lg:mt-1 lg:text-5xl"
            >
              Musfiqur Rahman
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight text-xl "
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="text-sm text-gray-400"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-[300px] w-[300px] flex items-center pt-10"
        >
          <img src={heroimg} alt="" className="rounded-md" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
