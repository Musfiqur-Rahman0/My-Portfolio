import React from "react";
import { ABOUT_TEXT } from "../constants";
import aboutimg from "../assets/projects/about.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl text-slate-300 pb-4 pt-16 text-center"
      >
        About <span className="text-red-400 ">Me</span>
      </motion.h1>
      {/* myimage section */}
      <div className="container flex flex-wrap ">
        <div className=" w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <img src={aboutimg} alt="" className="rounded-md" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="my-2 max-w-xl py-6 text-start text-gray-400"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
        {/* details section */}
      </div>
    </div>
  );
};

export default About;
