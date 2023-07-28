import { AiFillStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  return (
    <div className="flex text-sm font-bold items-center gap-1 text-yellow-400">
      <span>{rating}</span>
      <AiFillStar />
    </div>
  );
};

export default Rating;
