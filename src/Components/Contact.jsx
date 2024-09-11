import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center py-2">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl pb-6"
      >
        Get In Touch
      </motion.h1>
      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-400"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-2 text-sm"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="" className="outline-b text-gray-400 underline">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
