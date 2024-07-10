import React from 'react';

const Work = () => {
  return (
    <div name='work' className='w-full h-screen bg-[#020617] flex flex-col items-center justify-center px-8'>
      <h1 className='text-4xl sm:text-7xl font-mono text-[#fde68a] mb-8'>
        My Work
      </h1>
      <div className='bg-white rounded-lg shadow-lg p-6'>
        <h2 className='text-2xl text-gray-800 mb-4'>GitHub Profile</h2>
        <a 
          href='https://github.com/miodragristic' 
          target='_blank' 
          rel='noopener noreferrer' 
          className='text-blue-500 underline text-lg'
        >
          Visit my GitHub
        </a>
      </div>
    </div>
  );
};

export default Work;


