import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#020617] text-yellow-300 font-mono'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              Mission
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Greetings, fellow adventurers! I'm Miodrag Ristic, a front-end developer.</p>
            </div>
            <div>
              <p>As a Front-End Developer with a passion for creating engaging, user-friendly web applications, I specialize in translating design concepts into responsive, interactive, and efficient digital experiences. Proficient in HTML, CSS, and JavaScript, I have hands-on experience with modern frameworks and libraries such as React!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;