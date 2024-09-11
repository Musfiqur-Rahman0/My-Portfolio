import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-4xl text-center my-20"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((data, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                src={data.image}
                alt={data.title}
                height={150}
                width={150}
                className="rounded-md mb-4 cursor-pointer"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.8 }}
                className="font-semibold text-neutral-400"
              >
                {data.title}
              </motion.p>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 2.5 }}
                className="text-sm text-neutral-400 my-4"
              >
                {data.description}
              </motion.p>
              <a href="">
                {data.technologies.map((tech, i) => (
                  <motion.span
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 2 }}
                    className="mr-2 p-2 rounded bg-neutral-900 text-sm 
                font-medium text-purple-800 cursor-pointer mt-4"
                  >
                    {tech}
                  </motion.span>
                ))}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
