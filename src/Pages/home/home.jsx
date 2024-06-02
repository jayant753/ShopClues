import Carousel from "../../Components/carousel/carousel"; // Importing Carousel component
import Footer from "../../Components/footer/footer"; // Importing Footer component
import Menubar from "../../Components/menubar/menubar"; // Importing Menubar component
import Navbar from "../../Components/navbar/navbar"; // Importing Navbar component
import Topnav from "../../Components/navbar/topnav"; // Importing Topnav component
import Rightbanner from "../../Components/rightbanner/rightbanner"; // Importing Rightbanner component
import Slider from "../../Components/silder/slider"; // Importing Slider component

const Home = () => {
  return (
    <>
      <div className="bg-[#eff7fa]">
        {" "}
        {/* Background color */}
        <Topnav /> {/* Top navigation component */}
        <Navbar /> {/* Navbar component */}
        <Menubar /> {/* Menubar component */}
        {/* Flex container for Slider and Rightbanner with justified center alignment and gap */}
        <div className="flex justify-center mt-3 gap-4">
          <Slider /> {/* Slider component */}
          <Rightbanner /> {/* Rightbanner component */}
        </div>
        <div className="mt-8">
          <Carousel /> {/* Carousel component */}
        </div>
        <Footer /> {/* Footer component */}
      </div>
    </>
  );
};

export default Home;
