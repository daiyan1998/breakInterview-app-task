import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

const StudentsBought = () => {
  const [boughts, setBoughts] = useState();
  const [showMore, setShowMore] = useState(5);

  const show = () => {
    if (showMore !== 5) setShowMore(5);
    else setShowMore(boughts.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/jsonData/studentBought.json");
      const res = await data.json();
      setBoughts(res);
    };
    fetchData().catch(console.error);
  }, []);

  console.log(boughts);
  return (
    <div className="my-8">
      <h4 className="text-2xl font-bold">Students also bought</h4>
      {boughts
        ?.slice(0, showMore)
        .map(
          ({ title, hours, lastUpdated, rating, numRatings, price, image }) => (
            <div
              key={title}
              className="mt-4 flex items-start justify-between gap-16 border-b  py-3 "
            >
              <div className="flex gap-2 items-start basis-[400px]">
                <img
                  className="h-[70px] w-[70px] object-cover"
                  src={image}
                  alt=""
                />
                <div>
                  <p className="font-bold leading-tight">{title}</p>
                  <p className="text-green-600 text-sm mt-2 font-bold pl-2">
                    29.5 total hours{" "}
                    <span className="text-gray-600 font-light">
                      {lastUpdated}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex basis-1/2 justify-between">
                <div className="flex text-sm font-bold items-center gap-1 text-yellow-400">
                  <span>{rating}</span>
                  <AiFillStar />
                </div>
                <p className="flex items-center gap-1">
                  <BsFillPeopleFill /> <span>{numRatings}</span>
                </p>
                <div className="flex items-start gap-7">
                  <p className="font-semibold">{price}</p>
                  <AiOutlineHeart className="p-2 text-4xl rounded-full border border-black" />
                </div>
              </div>
            </div>
          )
        )}
      <button
        onClick={() => show()}
        className="border border-black p-2 w-full mt-2 font-bold text-sm"
      >
        {showMore == 5 ? "Show more" : "Show less"}
      </button>
    </div>
  );
};

export default StudentsBought;
