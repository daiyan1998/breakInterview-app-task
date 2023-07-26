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
const CompanyLogos = () => {
  return (
    <div className="flex justify-between items-center grayscale">
      {logos.map((logo, i) => (
        <img key={i} className="h-[60px]" src={compLogo} alt="" />
      ))}
    </div>
  );
};

export default CompanyLogos;
