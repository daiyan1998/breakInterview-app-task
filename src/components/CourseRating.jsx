import React from "react";
import { AiFillStar, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import Rating5 from "./Rating5";
import { SlOptionsVertical } from "react-icons/sl";

const reviews = [
  {
    name: "Sourav",
    profilePicture:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    rating: 5,
    timestamp: "2 weeks ago",
    review:
      "It was a very well structured course and you explain very well. Just when it came to ng-rx with and without standalone-components with new and alternative syntax I needed to pause the video quite often, to follow in the right",
  },
  {
    name: "John",
    profilePicture: "https://example.com/john_profile.jpg",
    rating: 4,
    timestamp: "3 days ago",
    review:
      "The course was quite informative, but the pace was a bit too fast for me. I had to rewatch some sections multiple times to grasp the concepts fully.",
  },
  {
    name: "Emily",
    profilePicture: "https://example.com/emily_profile.jpg",
    rating: 4.5,
    timestamp: "1 month ago",
    review:
      "I really enjoyed this course! The instructor was engaging and explained complex topics in a simple manner. I highly recommend it to anyone interested in learning.",
  },
  {
    name: "Michael",
    profilePicture: "https://example.com/michael_profile.jpg",
    rating: 3,
    timestamp: "1 week ago",
    review:
      "The content was good, but I encountered some technical issues with the video player, which made the learning experience frustrating at times.",
  },
];

const CourseRating = () => {
  return (
    <div className="mt-7">
      <h4 className="text-2xl font-bold">
        <AiFillStar className="text-yellow-400 inline" /> 4.6 course rating{" "}
        <BsDot className="inline" /> 188K rating
      </h4>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {reviews.map(({ name }) => (
          <div key={name} className="border-t border-gray-500 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 mt-6">
                <img
                  className="rounded-full h-[50px] w-[50px] object-cover"
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="">
                  <p className="font-bold">Sourav</p>
                  <div className="flex gap-3 items-center">
                    <Rating5 />
                    <span className="text-sm">2 weeks age</span>
                  </div>
                </div>
              </div>
              <SlOptionsVertical className="cursor-pointer" />
            </div>
            <div className="mt-6">
              <p>
                It was a very well structured course and you explain very well.
                Just when it came to ng-rx with and without
                standalone-components with new and alternative syntax I needed
                to pause the video quite often, to follow in the..
              </p>
              <button className="font-bold underline mt-1">See more</button>
              <div className="mt-4 flex gap-4 items-center">
                <p className="text-xs">Helpful?</p>
                <div className="flex gap-3 items-center text-xl cursor-pointer">
                  <AiOutlineLike />
                  <AiOutlineDislike />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="border border-gray-600 p-2 mt-6 font-semibold">
        Show all reviews
      </button>
    </div>
  );
};

export default CourseRating;
