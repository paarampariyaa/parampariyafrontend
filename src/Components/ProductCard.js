import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = ({ product, selectedWeight, onWeightChange ,onProductClick}) => {
  const imageUrl = product.images && product.images.length > 0 ? product.images[0]?.url : '/path/to/fallback-image.jpg';
  const [notification, setNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const navigate = useNavigate();

  // Automatically set the first available weight on mount
  useEffect(() => {
    if (!selectedWeight && product.availableWeights && product.availableWeights.length > 0) {
      onWeightChange(product.availableWeights[0]); // Set the first available weight
    }
  }, [product, selectedWeight, onWeightChange]);

  // Animation effect on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const isSample = selectedWeight && product.availableWeights.filter(weight => weight.weight === "Sample").some(weight => weight.weight === selectedWeight.weight);

  // Handler for Add to Cart button
  const handleAddToCart = async (e) => {
    e.stopPropagation();

    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('You need to be logged in to add items to the cart.'); 
      return;
    }

    if (!selectedWeight) {
      toast.error('Please select a weight option before adding to cart.'); 
      return;
    }

    const weightPrice = selectedWeight.price;

    try {
      const cartResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const cartItems = cartResponse.data.cart?.products || [];
      console.log(cartItems); // Log cart items for debugging

      // Find if the item already exists in the cart
      const existingCartItem = cartItems.find(
        (item) => item.product?._id === product._id && item.weight === selectedWeight.weight
      );
      if (isSample && existingCartItem) {
        toast.error(`This sample (${product.name} ${selectedWeight.weight}) is already in your cart.`);
        setTimeout(() => toast.error(null), 3000);
        return;
      }
      if (existingCartItem && existingCartItem._id) {
        // If the item exists, update the quantity and price
        await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/cart/${existingCartItem._id}`,
          { 
            quantity: existingCartItem.quantity + selectedQuantity,
            price: existingCartItem.price + selectedQuantity * weightPrice
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success(`${product.name} (${selectedWeight.weight}) quantity updated in your cart.`);
      } else {
        // If the item doesn't exist, add it to the cart
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/cart`,
          {
            productId: product._id,
            quantity: selectedQuantity,
            weight: selectedWeight.weight,
            price: selectedQuantity * weightPrice
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success(`${product.name} (${selectedWeight.weight}) has been added to your cart.`);
      }

      setTimeout(() => {
        toast.error(null);
      }, 3000);
    } catch (error) {
      console.error('Failed to add product to cart:', error.response?.data || error);
      toast.error(error.response?.data.message || 'An error occurred while adding to cart.');
    }
  };

  // Handle quantity selection
  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };
  const handleCardClick = (e) => {
    //backpropagation
     e.stopPropagation();
     console.log(`Navigating to product ID: ${product._id}`);
    navigate(`/product/${product._id}`);
  };

  const goToProductDetail = () => {
    navigate(`/product?productId=${product._id}`);
  };
  return (
    <div 
      className={`  w-full h-full bg-[rgba(0,61,100,0.15)] rounded-[10px] shadow-lg cursor-pointer transition-transform duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'
      }`}
      onClick={goToProductDetail} 
    > 
    
    <div className='h-[220px] w-full'>
  <img src={imageUrl} alt={product.name} className="w-full h-full object-contain mb-4 rounded-[20px] " />
</div>

      
      <div className="px-[20px] md:w-[305px]">
        <h4 className="text-[24px] font-medium">{product.name}</h4>
        <p className="mb-[2px] text-lg sm:text-2xl text-[#ECBC56] text-[24px] font-medium">
          ₹{selectedWeight ? selectedWeight.price : product.price}
        </p>
      </div>

      <div className="mt-4 px-[20px] md:w-[305px]">
        <div className="w-1/4 flex flex-row gap-2">
          {product.availableWeights && product.availableWeights.length > 0 ? (
            product.availableWeights.map((weightOption) => (
              <button
                key={weightOption.weight}
                className={`md:w-[74px] h-auto w-full md:h-[39px] flex-grow p-1 md:p-2 rounded-[10px] bg-gray-800 text-gray-400 border-2 ${
                  selectedWeight && selectedWeight.weight === weightOption.weight
                    ? 'bg-blue-600 text-white border-[#ECBC56]'
                    : 'border-transparent'
                }`}
                onClick={(e) => {e.stopPropagation(); onWeightChange(weightOption); }}
              >
                {weightOption.weight}
              </button>
            ))
          ) : (
            <p className="text-gray-400">No weights available</p>
          )}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="mt-4 px-[20px] md:w-[305px]">
        {!isSample && (
          <div className="w-full flex flex-row gap-2">
            {[1, 2, 3, 4].map((quantity) => (
              <button
                key={quantity}
                className={`md:w-[74px] h-auto w-full md:h-[39px] flex-grow p-1 md:p-2 rounded-[10px] bg-gray-800 text-gray-400 border-2 ${
                  selectedQuantity === quantity ? 'bg-blue-600 text-white border-[#ECBC56]' : 'border-transparent'
                }`}
                onClick={(e) =>{e.stopPropagation(); handleQuantityChange(quantity) } }
              >
                {quantity}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="md:w-[305px] w-full md:font-bold font-semibold flex flex-row  gap-2 mt-4 px-[10px]  md:px-[20px] pb-[20px]">
        <button className="text-[13px] w-full h-auto bg-gray-800 text-white p-2 md:px-[20px] md:py-[10px] md:w-[151px] md:h-[39px] rounded-[5px]" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button onClick={(e) =>{ e.stopPropagation(); navigate('/cart') } } className="bg-white text-[#041423] text-[13px] w-full h-auto md:w-[151px] md:h-[39px] p-2 rounded-[5px]">
          Buy Now 
        </button>
      </div>
    </div>
  );
};

export default ProductCard;