import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#020617] flex justify-center items-center p-4'>
      <form 
        method='POST' 
        action='https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c' 
        className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-mono inline border-b-4 border-yellow-600 text-yellow-300'>Contact</p>
          <p className='text-white py-4'>// Submit the form below or shoot me an email - mioristic@yahoo.com</p>
        </div>
        {/* Social icons */}
        <div className='flex justify-center items-center space-x-4'>
          <a
            className='w-[60px] h-[60px] flex justify-center items-center rounded-full bg-blue-600 hover:bg-blue-700 duration-300'
            href='https://www.linkedin.com/in/miodrag-ristic-b58650138/'
            target='_blank' 
            rel='noopener noreferrer'
          >
            <FaLinkedin size={30} className='text-gray-300' />
          </a>
          <a
            className='w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#333333] hover:bg-[#444444] duration-300'
            href='https://github.com/miodragristic'
            target='_blank' 
            rel='noopener noreferrer'
          >
            <FaGithub size={30} className='text-gray-300' />
          </a>
          
          <a
            className='w-[60px] h-[60px] flex justify-center items-center rounded-full bg-red-600 hover:bg-red-700 duration-300'
            href='https://www.instagram.com/mio.developer/'
            target='_blank' 
            rel='noopener noreferrer'
          >
            <FaInstagram size={30} className='text-gray-300' />
          </a>
          <a
            className='w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#6fc2b0] hover:bg-[#7fd2c0] duration-300'
            href='mailto:miodristic@yahoo.com'
          >
            <HiOutlineMail size={30} className='text-gray-300' />
          </a>
          <a
            className='w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#565f69] hover:bg-[#676f79] duration-300'
            href='/resume.pdf'
            target='_blank' 
            rel='noopener noreferrer'
          >
            <BsFillPersonLinesFill size={30} className='text-gray-300' />
          </a>
        </div>
      </form>
    </div>
  );
}

export default Contact;
