import { AiFillStar, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const logo =
  "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";

const FeaturedReview = () => {
  return (
    <div className="border border-black p-4 text-gray-600 ">
      <h4 className="text-2xl font-bold mb-4 text-black">Featured review</h4>
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt=""
          className="rounded-full w-[70px] h-[70px] object-cover"
        />
        <div className="flex flex-col text-sm">
          <span className="font-bold text-base text-black">Json W.</span>
          <span>35 courses</span>
          <span>9 reviews</span>
        </div>
      </div>
      <div className="text-yellow-400 flex items-center text-xl mt-4">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <span className="text-base ml-3 text-gray-600">4 Years ago</span>
      </div>
      <p className="text-sm mt-3">
        Max is a fantastic instructor, providing in depth explanations of
        concepts to help you learn. I appreciate that in most instances he
        provides a starting and ending package to at first give you a boost, and
        then to allow you to compare or troubleshoot your own work against his.
        Take the time to not only dive into his lessons, but explore on your
        own. You will grasp the concepts he teaches quickly!
        <span className="block mt-6">Was this review helpful?</span>
      </p>
      <div className="flex items-center gap-2 text-4xl mt-2">
        <AiOutlineLike className="p-1 border border-gray-600 rounded-full hover:bg-gray-100" />
        <AiOutlineDislike className="p-1 border border-gray-600 rounded-full hover:bg-gray-100" />
        <a href="#" className="text-sm underline">
          Report
        </a>
      </div>
    </div>
  );
};

export default FeaturedReview;
