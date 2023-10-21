import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function () {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <p style={{ width: "50px" }}>logo</p>
      </div>

      {/* menu */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* hamburger */}
      <div className="hidden">
        <FaBars />
      </div>

      {/* mobile menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>

      {/* social icons */}
      <div></div>
    </div>
  );
}
