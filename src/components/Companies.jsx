import compLogo from "/l1.png";

const logos = [
  {
    logo: "",
  },
  {
    logo: "",
  },
  {
    logo: "",
  },
  {
    logo: "",
  },
];

const Companies = () => {
  return (
    <div className="p-5 border border-gray-500 my-6">
      <h4 className="font-bold">
        Top companies offer this course to their employees
      </h4>
      <p className="text-sm">
        This course was selected for our collection of top-rated courses trusted
        by businesses worldwide.{" "}
        <a href="#" className="underline text-primary_hover">
          Learn more
        </a>{" "}
      </p>
      <div className="flex justify-between grayscale mt-5">
        {logos.map((logo, i) => (
          <img key={i} className="h-[60px]" src={compLogo} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Companies;
