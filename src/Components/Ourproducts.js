// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard'; 
// import { useLocation } from 'react-router-dom';
// const OurProducts = () => {
//   const [products, setProducts] = useState([]); 
//   const [loading, setLoading] = useState(true);
//   const [quantities, setQuantities] = useState({}); // State to store selected quantities for each product
//   const location = useLocation();
//   const { categoryName} = location.state || {};
//   // Function to handle quantity change
//   const handleQuantityChange = (productId, quantity) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: quantity,
//     }));
//   };

//   // Fetch products on mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/products`);
//         setProducts(response.data.products); 
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="bg-radial-white-black justify-center text-white py-12 px-[20px] md:px-[80px]">
//       <div className="mx-auto">
//         <div className="text-center mb-12">
//           <h1 className=" font-semibold mb-2 text-[23px] md:text-[40px] md:pt-[50px]">Choose Our Products from  {categoryName || "Millets"}</h1>
//           <div className='mx-auto border-dashed border-t-[1px] border-[#ECBC56] w-[230px] md:w-[441px] mb-[20px]'></div>
//           <p className="text-gray-400 text-[16px] font-normal">
//             Explore the essential {categoryName}  that capture the authentic flavors of Indian cuisine in every dish
//           </p>
//         </div>

//         {loading ? (
//           <p className="text-center">Loading products...</p>
//         ) : (
//           <div className="mx-auto w-full  h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {products.length > 0 ? (
//               products.map((product) => (
//                 <ProductCard
//                   key={product._id}
//                   product={product}
//                   selectedQuantity={quantities[product._id] || 1} // Pass selected quantity
//                   handleQuantityChange={handleQuantityChange} // Pass the handler
//                 />
//               ))
//             ) : (
//               <p>No products available</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OurProducts;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard'; 
import Spinner from './Spinner'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const {categoryId}= location.state || {}; // Get the category name from state
  const {categoryName}= location.state || {}; 
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/products/all`);
        const allProducts = response.data.products;
        
        // Filter products based on the category name
        const filteredProducts = allProducts.filter(
          (product) => product.category === categoryId
        );
        
        setProducts(filteredProducts); // Update the state with filtered products
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchProducts(); // Fetch products when a category is selected
    }
  }, [categoryId]);

  // Set the default selected weight for each product to the first available weight
  const [selectedWeights, setSelectedWeights] = useState(
    products.reduce((acc, product) => ({
      ...acc,
      [product._id]: product.availableWeights[0]?.weight || ''
    }), {})
  );

  const handleWeightChange = (productId, weightOption) => {
    setSelectedWeights((prevWeights) => ({
      ...prevWeights,
      [productId]: weightOption
    }));
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to /product/{id} when a product is clicked
  };

  return (
    <div className="bg-radial-white-black justify-center text-white py-12 px-[20px] md:px-[80px]">
       <style>
        {`
          @keyframes translateYEffect {
            0% {
              transform: translateY(90px);
              opacity: 0;
            }
            100% {
              transform: translateY(10);
              opacity: 1;
            }
          }
        `}
      </style>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          backgroundColor: '#ECBE56',
          color: 'black',
          display: 'flex',
          width: 'auto',
          padding: '10px',
        }}
        progressStyle={{
          backgroundColor: 'black',
        }}
        style={{
          position: 'fixed',
          top: '90px',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
        }}
      />

      <div className="mx-auto">
        <div className="text-center mb-12">
          <h1 className=" font-semibold mb-2 text-[23px] md:text-[40px] md:pt-[50px]">
            Choose Our Products from {categoryName || "Millets"}
          </h1>
          <div className="mx-auto border-dashed border-t-[1px] border-[#ECBC56] w-[230px] md:w-[441px] mb-[20px]"></div>
          <p className="text-gray-400 text-[16px] font-normal">
            Explore the essential {categoryName} that capture the authentic flavors of Indian cuisine in every dish.
          </p>
        </div>

        <div className=" md:px-[190px] h-auto grid  grid-cols-1 md:grid-cols-3  justify-center gap-12 ">
          {loading ? (
            <Spinner />
          ) : products.length > 0 ? (
            products.map((product,productIndex) => (
              <div
              className="snap-start"
              key={product._id}
              style={{
                animation: `translateYEffect 1.5s ease forwards`,
                animationDelay: `${productIndex * 0.1}s`,
                opacity: 0,
              }}
            >
              <ProductCard
                key={product._id}
                product={product}
                selectedWeight={selectedWeights[product._id]} // Pass selected weight for each product
                onWeightChange={(weightOption) => handleWeightChange(product._id, weightOption)}
                onProductClick={() => handleProductClick(product._id)} // Pass the productId
              />
              </div>
            ))
          ) : (
            <p className="p-4 text-xl items-center">No products found for this category.</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default OurProducts;

