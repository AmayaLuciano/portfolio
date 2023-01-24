import Image from 'next/image';
import React from 'react';
import reactIMG from '/../public/assets/skills/html.png';

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl text-center uppercase tracking-widest text-[#719FB0] dark:text-[#719FB0]">
          Skills
        </p>
        <h2 className="dark:text-[#EEEEEE] pb-4 text-center">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-lg">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactIMG} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-gray-400">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-lg">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-gray-400">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-lg">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-gray-400">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-lg">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-gray-400">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-lg">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-gray-400">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-lg">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-gray-400">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-lg">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-gray-400">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6  shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-gray-700 dark:shadow-lg">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center dark:text-gray-400">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
