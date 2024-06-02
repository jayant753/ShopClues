import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Productinfocard from "../../Components/product/productinfocard"; // Adjust the path as necessary
import Navbar from "../../Components/navbar/navbar";

const ProductDetailsPage = () => {
  // Extracting `id` from URL params using useParams hook
  const { id } = useParams();

  // State to store the fetched product details
  const [product, setProduct] = useState(null);

  // Fetch product details using useEffect hook
  useEffect(() => {
    // Fetch product data from FakeStoreAPI based on `id`
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        // Update state with fetched product data
        setProduct(response.data);
      })
      .catch((error) => {
        // Log error if fetching fails
        console.error("Error fetching product details:", error);
      });
  }, [id]); // Dependency array ensures useEffect runs when `id` changes

  // Render loading message while product data is being fetched
  if (!product) {
    return <div>Loading...</div>;
  }

  // Render product details once data is fetched
  return (
    <>
      <Navbar /> {/* Render navbar component */}
      <div className="container mx-auto px-4 py-8 mt-10">
        {/* Render product info card component with fetched product data */}
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
