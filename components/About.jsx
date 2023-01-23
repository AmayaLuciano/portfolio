import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-3 text-center">
          <p className="uppercase text-xl tracking-widest text-[#719FB0] dark:text-[#719FB0]">
            About me
          </p>
          <h1 className="py-4 dark:text-[#EEEEEE]">Who I Am</h1>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            I&apos;m Luciano Amaya, self-taught front-end developer, based in
            Argentina
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            I am especialized in React & NextJS, my objective is to develop the
            best experiencies and web interfaces. Constantly learning.
            Passionate about software.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer dark:text-gray-400">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
