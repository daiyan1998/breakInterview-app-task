import { AiFillStar, AiFillPlayCircle } from "react-icons/ai";
import { SlBadge } from "react-icons/sl";
import { BsFillPeopleFill } from "react-icons/bs";

const instructorInfo = [
  {
    title: "4.6 Instructor Rating",
    icon: <AiFillStar />,
  },
  {
    title: "969,370 Reviews",
    icon: <SlBadge />,
  },
  {
    title: "2,591,195 Students",
    icon: <BsFillPeopleFill />,
  },
  {
    title: "59 Courses",
    icon: <AiFillPlayCircle />,
  },
];

const Instructor = () => {
  return (
    <div>
      <h4 className="text-2xl font-bold my-6">Instruscor</h4>
      <div>
        <p className="font-bold text-purple-800 underline">
          Maximilian Schwarzmüller
        </p>
        <p className="text-gray-600">
          AWS certified, Professional Web Developer and Instructor
        </p>
        <div className="flex items-center gap-6 my-3">
          <img
            className="rounded-full h-[120px] w-[120px] object-cover"
            src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <ul className="">
            {instructorInfo.map(({ title, icon }) => (
              <li key={title} className="flex items-center gap-5">
                {icon}
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className="font-bold text-sm mb-3">Experience as (Web) Developer</p>
        <p className="text-sm">
          Starting out at the age of 12 I never stopped learning new programming
          skills and languages. Early I started creating websites for friends
          and just for fun as well. Besides web development I also explored
          Python and other non-web-only languages. This passion has since lasted
          and lead to my decision of working as a freelance web developer and
          consultant. The success and fun I have in this job is immense and
          really keeps that passion burningly alive. Starting web development on
          the backend (PHP with Laravel, NodeJS, Python) I also became more and
          more of a frontend developer using modern frameworks like React,
          Angular or VueJS in a lot of projects. I love both worlds nowadays!
        </p>
      </div>
    </div>
  );
};

export default Instructor;
