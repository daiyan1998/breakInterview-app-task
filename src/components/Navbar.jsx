import logo from "/udemy.jpg";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center gap-4">
        <div className="flex items-center cursor-pointer">
          <img src={logo} className="h-[70px]" alt="" />
          <div>Category</div>
        </div>
        {/* search */}
        <div className="relative grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <AiOutlineSearch
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full"
            placeholder="Search for anything"
            required
          />
        </div>
        <div className="flex gap-3 cursor-pointer  items-center">
          <div className="hover:text-primary_hover">Udemy Business</div>
          <div className="hover:text-primary_hover">Teach on Udemy</div>
          <AiOutlineShoppingCart className="text-2xl" />
        </div>
        <div className="flex items-center gap-4">
          <button className="border border-gray-700 hover:bg-gray-100 px-3 py-2">
            Log In
          </button>
          <button className="bg-black text-white hover:bg-opacity-70 px-3 py-2">
            Sign Up
          </button>
          <button className="border border-gray-700 hover:bg-gray-100 p-3">
            <BsGlobe />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
