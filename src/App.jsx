import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home/home"
import Profile from './Pages/profile/profile';
import ProductDetails from './Pages/productdetails/productdetails';
import SearchPage from './Pages/search/searchpage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/search' element={<SearchPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
