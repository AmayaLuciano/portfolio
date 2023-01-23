import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contact" className="w-full lg:h-screen flex flex-col">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full text-center">
        <p className="text-xl tracking-widest uppercase text-[#719FB0]">
          Contact
        </p>
        <h2 className="py-4 dark:text-[#EEEEEE]">Get In Touch</h2>
        <div className="flex flex-col">
          <form className="flex flex-col">
            <div className="flex flex-col md:flex-row w-full justify-center items-center">
              <input
                className="focus:outline-none focus:border-t-transparent focus:border-x-transparent focus:border-[#719FB0] focus:ring-[#719FB0] bg-transparent border-2 border-t-transparent border-x-transparent border-r-4 w-[85%]  md:w-[35%] px-5 md:mr-3 py-3"
                type="text"
                placeholder="Name"
              />
              <input
                className=" focus:outline-none focus:border-t-transparent focus:border-x-transparent focus:border-[#719FB0] focus:ring-[#719FB0] bg-transparent border-2 border-t-transparent border-x-transparent border-r-4 w-[85%] md:ml-3 px-5 md:w-[35%] py-3"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="md:mt-5">
              <input
                className="focus:outline-none focus:border-t-transparent focus:border-x-transparent focus:border-[#719FB0] focus:ring-[#719FB0] bg-transparent border-2 border-t-transparent border-x-transparent border-r-4 w-[85%] md:w-[71%] px-5 py-3"
                type="text"
                placeholder="Message"
              />
            </div>
            <div>
              <button
                onClick={(e) => handleSubmit(e)}
                className="justify-center w-[71%] mt-4 p-4 shadow-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center py-12 ">
        <Link href={'/#home'}>
          <div className="shadow-lg shadow-gray-400 p-4 text-[#719FB0] rounded-full hover:scale-110 ease-in duration-100">
            <HiOutlineChevronDoubleUp size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
