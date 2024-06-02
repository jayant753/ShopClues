import Carousel from '../../Components/carousel/carousel';
import Footer from '../../Components/footer/footer';
import Menubar from '../../Components/menubar/menubar';
import Navbar from '../../Components/navbar/navbar';
import Topnav from '../../Components/navbar/topnav';
import Rightbanner from '../../Components/rightbanner/rightbanner';
import Slider from '../../Components/silder/slider';


const Home = () => {
  return (
    <>
    <div className='bg-[#eff7fa]'>
     <Topnav/>
     <Navbar/>
     <Menubar/>
     <div className='flex justify-center mt-3 gap-4'>
     <Slider/>
     <Rightbanner/>
     </div>
     <div className='mt-8'>
     <Carousel/>
     </div>
     <Footer/>
     </div>
    </>
  )
}

export default Home;
