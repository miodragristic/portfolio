import React, { useRef } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Gameboy from '../assets/gameboy.png';

const Home = () => {
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div name='home' className='w-full h-screen bg-[#020617] flex items-center justify-center px-8'>
      <div className='flex flex-col justify-center h-full max-w-[1000px] mx-auto font-mono'>
        <p className='text-white'>Full Stack Player</p>
        <h1 className='text-4xl sm:text-7xl font-mono text-[#fde68a] overflow-hidden border-r-4 border-white whitespace-nowrap animate-typewriter'>
          MIO RISTIC
        </h1>
        <h2 className='text-4xl sm:text-7xl font-mono text-[#f59e0b]'>
          Crafting Exceptional Digital Experiences
        </h2>
        <p className='text-[#f59e0b] py-4 max-w-[700px]'>
          My journey in the tech realm has honed my skills in creating responsive and dynamic front-end web applications that captivate users and deliver seamless functionality.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button
              className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-white-600'
              onClick={handleButtonClick}
            >
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className='hidden md:block md:flex md:items-center'>
        <img src={Gameboy} alt='Gameboy' className='w-[340px] h-auto' />
      </div>
    </div>
  );
};

export default Home;


