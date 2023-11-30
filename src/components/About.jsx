import React from 'react'

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#1f3044] flex-col text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className='text-4xl font-bold inline border-b border-[#fb9039]'>
              About
            </p>
          </div>

          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Z, nice to meet you. Please leave a donut.</p>
          </div>

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem fringilla ut. Rhoncus est pellentesque elit ullamcorper. </p>
          </div>
        </div>

        </div>
      </div>
  )
}

export default About