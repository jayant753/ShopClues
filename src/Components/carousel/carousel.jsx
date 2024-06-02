import CarouselProductCard from '../carousel/carouselproductcard';

const App = () => {
  

  return (
    <div className='flex flex-col gap-10 items-center'>
       <div className='flex flex-col gap-4'>
       <h2 className='text-[#212121] text-[20px] mr-[1500px]'>All Products</h2>
       <div className='bg-white'><CarouselProductCard apiUrl="https://fakestoreapi.com/products" cardCount={8}  /></div>
       </div>
       <div className='flex flex-col gap-4'>
       <h2 className='text-[#212121]  text-[20px] mr-[1490px]'>Your Gadgets Store</h2>
       <div className='bg-white'><CarouselProductCard apiUrl="https://fakestoreapi.com/products/category/electronics" cardCount={5}  /></div>
       </div>
       <div className='flex flex-col gap-4'>
       <h2 className='text-[#212121]  text-[20px] mr-[1490px]'>Men&apos;s Clothing</h2>
       <div className='bg-white'><CarouselProductCard apiUrl="https://fakestoreapi.com/products/category/men's%20clothing" cardCount={4}  /></div>
       </div>
       <div className='flex flex-col gap-4'>
       <h2 className='text-[#212121]  text-[20px] mr-[1490px]'>Women Fashion</h2>
       <div className='bg-white'><CarouselProductCard apiUrl="https://fakestoreapi.com/products/category/women's%20clothing" cardCount={5}  /></div>
       </div>
       <div className='flex flex-col gap-4'>
       <h2 className='text-[#212121]  text-[20px] mr-[1550px]'>Jewelery</h2>
       <div className='bg-white'><CarouselProductCard apiUrl="https://fakestoreapi.com/products/category/jewelery" cardCount={4} /></div>
       </div>
    </div>
  );
}

export default App;

