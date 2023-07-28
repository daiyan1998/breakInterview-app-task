import { AiFillStar } from "react-icons/ai";

const Rating5 = ({ rating }) => {
  return (
    <div className="flex text-sm font-bold items-center gap-1 text-yellow-400">
      <span>{rating}</span>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
    </div>
  );
};

export default Rating5;
