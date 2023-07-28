import "./App.css";
import Banner from "./components/Banner";
import Companies from "./components/Companies";
import CourseContent from "./components/CourseContent";
import CourseRating from "./components/CourseRating";
import FeaturedReview from "./components/FeaturedReview";
import Footer from "./components/Footer";
import FrequentlyBought from "./components/FrequentlyBought";
import Instructor from "./components/Instructor";
import MoreCourses from "./components/MoreCourses";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import StudentsBought from "./components/StudentsBought";
import YouLearn from "./components/youLearn";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-black">
        <div className="max-w-6xl mx-auto relative gap-10 flex">
          <div className="basis-[60%]">
            <Banner></Banner>
          </div>
          <div className={` basis-[30%] relative right-0`}>
            <SideBar />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative flex gap-11">
        <div className="basis-[60%]">
          <YouLearn />
          <Companies />
          <CourseContent />
          <FeaturedReview />
          <StudentsBought />
          <FrequentlyBought />
          <Instructor />
          <CourseRating />
          <MoreCourses />
        </div>
        {/* Side */}
        {/* <div className="absolute right-0 bottom-0 ">
          <SideBar />
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
