import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Productcard from '../../Components/product/productcard'; // Adjust the path as necessary
import Navbar from '../../Components/navbar/navbar'; // Adjust the path as necessary

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const query = useQuery().get('query') || '';
  const category = useQuery().get('category') || '';

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    // Filter products based on query and category
    const filtered = products.filter(product => {
      const inCategory = category ? product.category.toLowerCase() === category.toLowerCase() : true;
      const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase());
      return inCategory && matchesQuery;
    });
    setFilteredProducts(filtered);
  }, [products, query, category]);

  return (
    <div>
      <Navbar /> {/* Include your Navbar component */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-4">
          {/* Category filter buttons (example) */}
          <Link to="/search">All</Link>
          <Link to="/search?category=electronics">Electronics</Link>
          <Link to="/search?category=jewelery">Jewelery</Link>
          <Link to="/search?category=men's clothing">Men&apos;s Clothing</Link>
          <Link to="/search?category=women's clothing">Women&apos;s Clothing</Link>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Productcard
                image={product.image}
                name={product.title}
                price={`$${product.price}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;