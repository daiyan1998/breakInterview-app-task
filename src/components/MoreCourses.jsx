import React from "react";
import Rating5 from "./Rating5";
import { BsDot } from "react-icons/bs";

const cards = [1, 2, 3];

const MoreCourses = () => {
  return (
    <div className="mt-6">
      <h4 className=" text-2xl font-bold">
        More Courses by{" "}
        <span className="text-purple-700">Maximilian Schwarzmüller</span>
      </h4>
      {/* cards */}
      <div className="flex gap-4 mt-4 border-b border-gray-300 pb-8">
        {cards.map((card) => (
          <div key={card}>
            <img className="w-[250px]" src="/angular1.jpg" alt="" />
            <h6 className="font-bold ">
              Angular - The Complete Guide (2023 Edition)
            </h6>
            <p className="text-xs text-gray-500">
              Academind by Maximilian Schwarzmüller
            </p>
            <div className="flex items-center gap-2">
              <Rating5 /> <span>(191,008)</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center">
              <span>51 total hours</span>
              <BsDot />
              <span>544 lectures</span>
              <BsDot />
              <span>All Levels</span>
            </div>
            <p className="font-bold mt-3">$74.99</p>
          </div>
        ))}
      </div>
      <button className="w-full border border-gray-500 mt-4 p-3 font-bold">
        Report Abuse
      </button>
    </div>
  );
};

export default MoreCourses;
