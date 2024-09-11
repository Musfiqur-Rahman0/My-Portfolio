import React from "react";
import logo from "../assets/M.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navber = () => {
  return (
    <div>
      <div className=" container flex justify-between items-center p-4">
        <div className="">
          <img src={logo} alt="" className="max-w-[60px] object-fit" />
        </div>
        <div className="flex gap-2 ">
          <FaInstagram className="cursor-pointer h-5 lg:h-7 w-7" />
          <FaGithub className="cursor-pointer h-5 lg:h-7 w-7" />
          <FaLinkedin className="cursor-pointer h-5 lg:h-7 w-7" />
          <FaSquareXTwitter className="cursor-pointer h-5 lg:h-7 w-7" />
        </div>
      </div>
    </div>
  );
};

export default Navber;
