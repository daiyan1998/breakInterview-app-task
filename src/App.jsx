import "./App.css";
import Banner from "./components/Banner";
import Companies from "./components/Companies";
import CourseContent from "./components/CourseContent";
import FeaturedReview from "./components/FeaturedReview";
import Navbar from "./components/Navbar";
import YouLearn from "./components/youLearn";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <div className="max-w-6xl mx-auto flex gap-11">
          <div className="basis-3/4">
            <div></div>
            <Banner></Banner>
            <YouLearn />
            <Companies />
            <CourseContent />
            <FeaturedReview />
          </div>
          {/* Side */}
          <div className="bg-primary_hover h-32 mt-5 w-full basis-1/3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
