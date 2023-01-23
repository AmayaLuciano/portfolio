import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {
  BsFillMoonFill,
  BsFillPersonLinesFill,
  BsFillSunFill,
} from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/simplecart' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'light') {
      return (
        <li className="ml-10 text-sm uppercase hover:border-b list-none">
          <BsFillMoonFill
            size={20}
            className="dark:text-gray-400"
            onClick={() => setTheme('dark')}
          />
        </li>
      );
    } else {
      return (
        <li className="ml-10 text-sm uppercase hover:border-b list-none">
          <BsFillSunFill
            className="text-gray-400"
            size={20}
            onClick={() => setTheme('light')}
          />
        </li>
      );
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    setMounted(true);
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          <h2 className="text-[#719FB0] tracking-widest">AMAYA </h2>
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-400">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-400">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-400">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-400">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b dark:text-gray-400">
                Contact
              </li>
            </Link>
            {renderThemeChanger()}
          </ul>
          <div className="flex items-center">
            <div
              onClick={handleNav}
              className="cursor-pointer md:hidden dark:text-gray-400"
            >
              <AiOutlineMenu size={25} />
            </div>
            <div className="md:hidden">{renderThemeChanger()}</div>
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
            : null
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#171717] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 w-[75%] h-screen bg-[#ecf0f3] dark:bg-[#171717] p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2 className="text-[#719FB0] tracking-widest">AMAYA</h2>

              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-500 p-3 cursor-pointer dark:text-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4 dark:text-gray-400">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something cool together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col dark:text-gray-400">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#719FB0]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://www.linkedin.com/in/luciano-amaya-972504218/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn className="dark:text-gray-400" />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://github.com/AmayaLuciano"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="dark:text-gray-400" />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
