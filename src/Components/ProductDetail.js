import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from './Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(null); // State for selected weight
  const navigate = useNavigate();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get('productId');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/product/${productId}`);
        if (response.data) {
          setProduct(response.data.product);
          setSelectedWeight(response.data.product.availableWeights[0]); // Set default weight if available
        } else {
          setError('No product found');
        }
        setLoading(false);
      } catch (err) {
        toast.error('Failed to load product data.');
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);


  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const handleWeightChange = (weightOption) => {
    setSelectedWeight(weightOption); // Update selected weight
    console.log('Selected weight:', weightOption); 
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      toast.error('You need to be logged in to add items to the cart.');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart`, {
        productId: product._id,
        quantity: selectedQuantity,
        weight: selectedWeight.weight,  // Send selected weight
        price: selectedWeight.price,      // Send price associated with weight
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(`${product.name} (${selectedWeight.weight}) has been added to your cart.`);
    } catch (error) {
      console.error('Failed to add product to cart:', error.response?.data || error);
      toast.error('Could not add product to cart. Please try again.');
    }
  };

  const handleBuyNowClick = (e) => {
    e.stopPropagation();
    navigate('/cart');
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>No product found</p>;
  }
console.log(product)
  return (
    <div className="bg-[#0a1a2a] py-10 px-[20px] md:px-[80px] relative">
    <ToastContainer
  position="top-right"  // Ensures it stays in the top-right corner
  autoClose={5000}      // Adjust the auto-close time if needed
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
    width: 'auto',    // Allows full message display
    padding: '10px',
  }}
  progressStyle={{
    backgroundColor: 'black',
  }}
  style={{
    position: 'fixed',  // Fixed positioning to keep it outside the card
    top: '80px',        // Distance from the top of the page
    right: '40px',      // Distance from the right of the page
    zIndex: 9999,       // Ensures it appears above other elements
  }}
/>

      <h2 className="text-center text-white text-[28px] md:text-[35px] font-semibold mb-2">
        {product.category} Category
      </h2>
      <div className="mx-auto border-dashed border-t-[1px] border-[#ECBC56] w-[230px] md:w-[441px] mb-[20px] mt-[20px]"></div>
      <p className="text-center text-white text-[16px] md:text-[18px] mb-8">
        Finest collection of {product.category} products, spices, and more delivered straight to your door.
      </p>

      <div className="rounded-lg flex flex-col md:flex-row md:items-start md:gap-[60px]  mt-[60px]">
        <div className="w-full md:w-[614px] ">
          <img
            src={product.images[0].url}
            alt={product.name}
            className="rounded-lg w-full h-[280px] md:h-[423px] object-cover"
          />
          <div className="mt-6 flex overflow-x-auto gap-[6px] items-start  scrollbar-hide md:grid md:grid-cols-4 md:gap-1">
  <img
    src={product.images[0].url} // First image
    alt="Product image 1"
    className="w-[142px] h-[65px] rounded-[10px] object-cover flex-shrink-0"
  />
  <img
    src={product.images[0].url} // Second image
    alt="Product image 2"
    className="w-[142px] h-[65px] rounded-[10px] object-cover flex-shrink-0"
  />
  <img
    src={product.images[0].url} // Third image
    alt="Product image 3"
    className="w-[142px] h-[65px] rounded-[10px] object-cover flex-shrink-0"
  />
  <img
    src={product.images[0].url} // Fourth image
    alt="Product image 4"
    className="w-[142px] h-[65px] rounded-[10px] object-cover flex-shrink-0"
  />
</div>
        </div>
        

        <div className="w-full md:w-[626px] flex flex-col gap-4 md:gap-[30px] mt-8 md:mt-0">
          <h1 className="text-[#ECBC56] text-3xl md:text-5xl font-bold leading-none md:leading-[1] md:w-[469px]">
            {product.name}
          </h1>

          <div className="flex items-center gap-[10px]">
            <div className="bg-[#ECBC56] text-[#000E21] font-bold px-2 py-1 h-[34px] rounded mr-2">
              {product.ratings} ★
            </div>
            <p className="text-gray-400 text-base md:text-lg">{product.numOfReviews} Ratings</p>
          </div>

          <p className="text-gray-400 text-sm md:text-base">{product.description}</p>

          
<div className="">
<div>
    <p className="text-[20px] text-white font-semibold ">
      Price: ₹{selectedWeight ? selectedWeight.price : 'N/A'}
    </p></div>
    <div className='flex flex-row items-center gap-2'>
  <h3 className="text-gray-400 font-normal">Select Weight:</h3>
  <div className="flex flex-col gap-2 mt-2 w-[100px]">
    <select
      className="p-2 rounded-lg bg-[#00071A] text-white border-1 focus:outline-none"
      value={selectedWeight ? selectedWeight.weight : ''}
      onChange={(e) =>
        handleWeightChange(
          product.availableWeights.find(
            (weightOption) => weightOption.weight === e.target.value
          )
        )
      }
    >
      <option value="" disabled>
        Select a weight
      </option>
      {product.availableWeights.map((weightOption) => (
        <option key={weightOption.weight} value={weightOption.weight}>
          {weightOption.weight}
        </option>
      ))}
    </select>
    
  </div>
  </div>
</div>

          {/* Quantity Selector */}
           
            {!selectedWeight || selectedWeight.weight !== 'sample' ? ( // Check if weight is not 'sample'
          <div className="flex items-center gap-2">
            <h3
              className="text-[14px] md:text-[16px] text-gray-400 font-normal rounded-l-lg"
              htmlFor="quantity"
            >
              Select Quantity:
            </h3>
            <select
              id="quantity"
              value={selectedQuantity}
              onChange={handleQuantityChange}
              className="p-2 w-[90px] rounded-lg bg-[#00071A] text-white border-1 focus:outline-none"
              disabled={selectedWeight && selectedWeight.weight === 'Sample'} // Disable if weight is 'sample'
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
        ) : null}

          <div className="flex gap-[15px] flex-col md:flex-row justify-between w-full md:w-[412px] text-xl">
            <button
              className="text-[15px] md:text-[24px] w-full md:w-[196px] h-[49px] bg-[#424242] text-white border border-gray-500 rounded-[5px] px-[20px] py-[10px] font-semibold hover:bg-gray-400 transition duration-200"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNowClick}
              className="text-[15px] md:text-[24px] w-full md:w-[196px] h-[49px] bg-white text-black rounded-[5px] px-[20px] py-[10px] font-semibold hover:bg-gray-100 transition duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>

  
  );
};

export default ProductDetail;
