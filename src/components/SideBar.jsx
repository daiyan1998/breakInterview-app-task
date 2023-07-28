import {
  PiMonitorPlay,
  PiArticleLight,
  PiClosedCaptioningLight,
  PiTrophyLight,
} from "react-icons/pi";
import { MdOutlineAssignment } from "react-icons/md";
import { AiOutlineDownload, AiOutlineMobile } from "react-icons/ai";
import { BsInfinity } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const facilities = [
  {
    title: "36 hours on-demand video",
    icon: <PiMonitorPlay />,
  },
  {
    title: "Assignments",
    icon: <MdOutlineAssignment />,
  },
  {
    title: "47 articles",
    icon: <PiArticleLight />,
  },
  {
    title: "179 downloadable resources",
    icon: <AiOutlineDownload />,
  },
  {
    title: "Access on mobile and TV",
    icon: <AiOutlineMobile />,
  },
  {
    title: "Full lifetime access",
    icon: <BsInfinity />,
  },
  {
    title: "Closed captions",
    icon: <PiClosedCaptioningLight />,
  },
  {
    title: "Certificate of completion",
    icon: <PiTrophyLight />,
  },
];

const SideBar = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  console.log("isIntersecting:", isIntersecting);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
  }, []);

  return (
    <div className={`shadow-xl absolute w-[350px]`}>
      <div className={` border border-white   mt-5 w-full`}>
        <iframe
          width="100%"
          height="215"
          src="https://www.youtube.com/embed/Ata9cSC2WpM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="bg-white px-5">
        <p className="text-3xl py-5 font-bold ">$45.99</p>
        <div className="flex flex-col gap-3">
          <button
            ref={ref}
            className="intBtn w-full border border-purple-500 bg-purple-500 text-white font-bold p-3 hover:bg-purple-600"
          >
            Got to cart
          </button>
          <button className="w-full border border-black bg-white text-black font-bold p-3 hover:bg-gray-100">
            Buy now
          </button>
          <p className="text-center text-xs">30-Day Money-Back Guarantee</p>
        </div>
        <div className="mt-7">
          <p className="font-bold">This Course Includes</p>
          {facilities.map(({ title, icon }) => (
            <div
              key={title}
              className="flex items-center gap-4 leading-relaxed "
            >
              {icon}
              <p>{title}</p>
            </div>
          ))}
          <div className="flex justify-around text-sm font-bold mt-2">
            <a href="#" className="underline ">
              Share
            </a>
            <a href="#" className="underline ">
              Gift this course
            </a>
            <a href="#" className="underline">
              Apply Coupor
            </a>
          </div>
        </div>
      </div>
      <hr className="boder border-gray-500 my-4" />
      <div className="flex flex-col px-5 gap-1 py-4">
        <p className="text-xl font-bold">Training 5 or more people?</p>
        <p className="text-gray-600 text-sm">
          Get your team access to 22,000+ top Udemy courses anytime, anywhere.
        </p>
        <button className="border border-black p-2 mt-2 text-sm font-bold">
          Try Udemy Business
        </button>
      </div>
    </div>
  );
};

export default SideBar;
