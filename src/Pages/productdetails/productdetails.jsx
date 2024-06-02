// import Navbar from '../../Components/navbar/navbar';
// import Productinfocard from '../../Components/product/productinfocard';

// const ProductDetails = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Productinfocard/>
//     </div>
//   );
// }

// export default ProductDetails;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Productinfocard from '../../Components/product/productinfocard'; // Adjust the path as necessary
import Navbar from '../../Components/navbar/navbar';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-8 mt-10">
      <Productinfocard
        id={product.id}
        image={product.image}
        name={product.title}
        category={product.category}
        price={`$${product.price}`}
        description={product.description}
        rating={product.rating.rate}
      />
    </div>
    </>
  );
};

export default ProductDetailsPage;


