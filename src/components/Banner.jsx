import { MdNavigateNext } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsFillExclamationOctagonFill, BsGlobe } from "react-icons/bs";
import { PiSubtitlesFill } from "react-icons/pi";
const Banner = () => {
  return (
    <section className="max-w-6xl py-7 container mx-auto ">
      <div>
        <ol className="inline-flex text-primary_text items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium "
            >
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <MdNavigateNext />
              <a href="#" className="ml-1 text-sm font-medium  ">
                Projects
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <MdNavigateNext />
              <a
                href="#"
                className="ml-1 text-sm font-medium  md:ml-2 dark:text-gray-400"
              >
                Flowbite
              </a>
            </div>
          </li>
        </ol>
      </div>
      <div className="text-white flex flex-col gap-3">
        <h3 className="text-4xl font-bold">
          Angular - The Complete Guide (2023 Edition)
        </h3>
        <p className="text-xl">
          Master Angular (formerly "Angular 2") and build awesome, reactive web
          apps with the successor of Angular.js
        </p>
        <div className="flex gap-2 items-center">
          <span className="bg-yellow-200 p-1 text-black">Bestseller</span>{" "}
          <span className="flex items-center text-yellow-200">
            4.6 <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
          </span>
          <a href="#" className="underline text-primary_text">
            (188714 rating)
          </a>
          <span>697,167 students</span>
        </div>
        <p>
          Created by{" "}
          <a href="#" className="underline text-primary_text">
            Maximilian Schwarzmüller
          </a>
        </p>
        <div className="flex gap-5">
          <span className="flex items-center gap-2">
            <BsFillExclamationOctagonFill /> Last updated 6/2023
          </span>
          <span className="flex items-center gap-2">
            <BsGlobe /> English
          </span>
          <span className="flex items-center gap-2">
            <PiSubtitlesFill />
            English [CC], Bulgarian [Auto] ,{" "}
            <a href="#" className="underline text-primary_text">
              22 more
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
