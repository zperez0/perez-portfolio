import React from "react";

function Home() {
  return (
    // name="home" used for react scroll feature
    <div name="home" className="w-full h-screen bg-[#0a192f]">

    {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* <p className="text-[#fb9039]">Hi, my name is</p> */}
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Z Perez
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">add brief discription here!</p>

        {/* button */}
        <div>

          {/* <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"> */}

          <button className="text-white group rounded-md border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fb9039] hover:border-[#fb9039] outline-none focus:ring-4 focus:ring-[#8892b0] shadow-lg active:scale-y-75 transition-transform">
            View Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
