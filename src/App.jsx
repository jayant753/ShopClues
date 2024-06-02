import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home/home"; // Importing Home component
import Profile from './Pages/profile/profile'; // Importing Profile component
import ProductDetails from './Pages/productdetails/productdetails'; // Importing ProductDetails component
import SearchPage from './Pages/search/searchpage'; // Importing SearchPage component

function App() {
  return (
    <BrowserRouter>
      {/* BrowserRouter for routing */}
      <Routes>
        {/* Routes component for defining routes */}
        <Route path='/' element={<Home />} />
        {/* Route for Home page, rendering Home component */}
        <Route path='/profile' element={<Profile />} />
        {/* Route for Profile page, rendering Profile component */}
        <Route path='/product/:id' element={<ProductDetails />} />
        {/* Route for ProductDetails page with dynamic id parameter, rendering ProductDetails component */}
        <Route path='/search' element={<SearchPage/>} />
        {/* Route for SearchPage, rendering SearchPage component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
