import CompanyLogos from "./CompanyLogos";
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-white px-10">
      <div className="border-b-2 border-gray-600">
        <div className="flex justify-between items-center font-semibold text-xl py-5">
          <p>
            Top companies choose{" "}
            <span className="text-purple-400">Udemy Business</span> to build
            in-demand career skills.
          </p>
          <CompanyLogos />
        </div>
      </div>
      {/* mid */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-[120px]">
          <ul>
            <li>Udemy Business</li>
            <li>Teach on Udemy</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>Investors</li>
          </ul>
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie setting</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>
        </div>
        <div>
          <button className="border border-white px-4 py-2">
            <BsGlobe className="inline-block" /> English
          </button>
        </div>
      </div>
      {/* end */}
      <div className="flex justify-between pt-28 pb-28">
        <img className="h-[70px]" src="/public/udemy.jpg" alt="" />
        <p>&copy 2023 Udemy,Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
