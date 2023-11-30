import React from "react";

function Skills() {
  return (
    <div
      name="skills"
      className="bg-[#1f3044] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b border-[#fb9039]">
            Experience
          </p>
          <p className="py-4">These are my skills</p>
        </div>
        {/* container for icons */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div>
            {/* Images goes here */}
            {/* <img classname='w-20 mx-auto' src={} alt="HTML icon"></img> */}
            <p>HTML</p>
            <p>I'm an html image</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
