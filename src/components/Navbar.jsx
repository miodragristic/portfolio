import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from '../assets/complogo.png';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const audioRef = useRef(null);
  const handleClick = () => setNav(!nav);

  const handleLogoClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fde047] z-50'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '100px' }} onClick={handleLogoClick} />
      </div>

      {/* Menu */}
      <div className='hidden md:flex'>
        <ul className='flex space-x-4'>
          <li className='text-black font-mono'>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='text-black font-mono'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='text-black font-mono'>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='text-black font-mono'>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='text-black font-mono'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden text-black z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={`${nav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-[#fde047] flex-col justify-center items-center text-black`}>
        <li className='py-6 text-4xl text-black font-mono'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl text-black font-mono'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl text-black font-mono'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl text-black font-mono'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl text-black font-mono'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

