import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700 dark:text-[#EDEDED]">
            Hi, I'm{' '}
            <span className="text-[#719FB0] dark:text-[#719FB0]">Luciano</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-[#EDEDED]">
            A Front-End Web Developer
          </h1>

          <div className="flex justify-between items-center max-w-[300px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/luciano-amaya-972504218/"
                target="_blank"
              >
                <FaLinkedinIn className="dark:text-gray-400" />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://github.com/AmayaLuciano" target="_blank">
                <FaGithub className="dark:text-gray-400" />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="/#contact">
                <AiOutlineMail className="dark:text-gray-400" />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 ">
              <a href="./CV.pdf" download>
                <BsFillPersonLinesFill className="dark:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
