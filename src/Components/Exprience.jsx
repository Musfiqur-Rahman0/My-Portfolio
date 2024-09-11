import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Exprience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 pl-5">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the element is in view
        className="text-center text-4xl py-10 font-bold text-slate-400"
      >
        Experiences
      </motion.h1>

      {/* Company info */}
      <div>
        {EXPERIENCES.map((data, index) => (
          <div
            key={index}
            className="flex flex-wrap mb-8 lg:justify-center sm:text-sm"
          >
            <div className="w-full lg:w-1/4">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="mb-2 text-sm text-neutral-400"
              >
                {data.year}
              </motion.p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6>
                {data.role}
                <motion.span
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="ml-4 text-sm text-purple-100"
                >
                  {data.company}
                </motion.span>
              </h6>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="my-4 text-neutral-400"
              >
                {data.description}
              </motion.p>
              {data.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="mr-2 p-2 rounded bg-neutral-900 text-sm font-medium text-purple-800 cursor-pointer mt-4"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exprience;
