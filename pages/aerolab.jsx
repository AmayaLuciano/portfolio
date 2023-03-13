import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import aerolabImg from '../public/assets/projects/aerolab.png';

const aerolab = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image fill className="object-cover" src={aerolabImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">Aerolab Frontend Challenge</h2>
          <h3>React Js / Next JS / Typescript / Tailwind CSS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid lg:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 dark:text-gray-200">
          <p>Project </p>
          <h2>Overview</h2>
          <p>
            This is an ecommerce simulator, which is based on a points system.
            The user has a certain number of points and can redeem the products.
            Points, user data, products, and the history of redeemed products
            are all consumed from an API
          </p>
          <button className="px-8 py-2 mt-4 mr-8 shadow-lg dark:shadow-gray-600">
            <a
              href="https://aerolab-challenge-ochre.vercel.app/"
              target={'_blank'}
              rel="noreferrer"
            >
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4 shadow-lg dark:shadow-gray-600">
            <a
              href="https://github.com/AmayaLuciano/aerolab-challenge"
              target={'_blank'}
              rel="noreferrer"
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
                Next js 13
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-gray-300">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
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

export default aerolab;
