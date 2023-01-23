import Image from 'next/image';
import cartImg from '../public/assets/projects/simplecart2.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image fill className="object-cover" src={cartImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">Simple Cart</h2>
          <h3>React Js / Redux</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid lg:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 dark:text-gray-200">
          <p>Project </p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            esse officia numquam nam dolore, ducimus asperiores! Vitae eligendi
            sed, impedit omnis ipsum molestiae aspernatur dolor facere rem
            exercitationem veniam dolores!
          </p>
          <button className="px-8 py-2 mt-4 mr-8 shadow-lg dark:shadow-gray-600">
            <a href="https://cart-redux-jbd4.vercel.app/" target={'_blank'}>
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4 shadow-lg dark:shadow-gray-600">
            <a
              href="https://github.com/AmayaLuciano/cart-redux"
              target={'_blank'}
            >
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-lg shadow-gray-400 dark:shadow-gray-600 rounded-xl p-4 dark:text-gray-300">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" />
                Chakra UI
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" /> Redux Toolkit
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer dark:text-gray-300">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
