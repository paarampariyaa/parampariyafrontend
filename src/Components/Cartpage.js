// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import SingleImg from '../asstes/SingleImage.png';

// const CartPage = () => {
//   const navigate = useNavigate();

//   const handleProductClick = () => {
//     navigate('/product'); // Navigate to product page when clicking on the product card
//   };

//   return (
//     <div className="bg-radial-white-black from-blue-900 to-black text-white px-[20px] md:px-[80px] pt-[60px]">
//       {/* Header Progress Bar */}
//       <div className="flex items-center justify-center mb-16">
//         <div className="flex items-center md:w-[742px] w-full">
//           {/* Step 1 */}
//           <div className="flex flex-col items-center">
//             <div className="w-[84px] h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center text-[50px] font-semibold text-black">1</div>
//             <span className="mt-2 text-[25px] text-[#ECBC56] font-medium">Order Details</span>
//           </div>
//           <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
//           {/* Step 2 */}
//           <div className="flex flex-col items-center">
//             <div className="w-[84px] h-[84px] bg-transparent border border-[#ECBC56] rounded-full text-[50px] text-[#ECBC56] font-semibold flex items-center justify-center">2</div>
//             <span className="mt-2 text-[25px] text-[#DBDBDB] font-light">Delivery & Payment</span>
//           </div>
//           <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
//           {/* Step 3 */}
//           <div className="flex flex-col items-center">
//             <div className="w-[84px] h-[84px] bg-transparent border border-[#ECBC56] rounded-full text-[50px] text-[#ECBC56] font-semibold flex items-center justify-center">3</div>
//             <span className="mt-2 text-[25px] text-[#ECBC56] font-light">Confirmation</span>
//           </div>
//         </div>
//       </div>

//       {/* Cart Content */}
//       <div>
//         <h2 className="text-[50px] font-small mb-6 text-center md:text-left">My Cart</h2>
//         <div className="flex flex-col lg:flex-row lg:space-x-4">
//           {/* Product List */}
//           <div className="flex-1">
//             {[1, 2, 3].map((item, index) => (
//               <div 
//                 key={index} 
//                 className="bg-[#041423] rounded-[20px] py-[10px] pr-[10px] md:pl-[30px] pl-[10px] mb-6 md:w-[799px] md:h-[211px] w-full h-auto flex flex-col sm:flex-row items-center sm:items-start"
//                 onClick={handleProductClick} // Navigate to product page on card click
//               >
//                 <img src={SingleImg} alt="Product" className="md:w-[157px] md:h-[191px] w-full h-auto object-cover md:mr-[38px]" />
//                 <div className="flex flex-col">
//                   <h3 className="text-[40px] font-semibold mb-[15px]">Kodo Millet</h3>
//                   <p className="text-[16px] font-normal text-[#FFFFFF] mb-[25px]">
//                     Discover the rich flavor of millets from the heart of India. Discover the rich flavor of millets from the heart of India.
//                   </p>
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent the click from bubbling up to the card
//                       navigate('/category'); // Navigate to category page
//                     }}
//                     className="md:w-[564px] md:h-[39px] w-full h-auto bg-white text-[#041423] text-[16px] px-[20px] rounded-[5px] text-center font-normal"
//                   >
//                     Explore
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div className="bg-[#041423] border border-[#ECBC56] p-9 rounded-[20px] md:w-[451px] md:h-[441px] w-full h-auto flex flex-col">
//             <div>
//               <h3 className="text-[30px] text-[#ECBC56] font-semibold mb-4">ORDER TOTAL</h3>
//               <div className="h-[171px]">
//                 <div className="flex justify-between">
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>Subtotal</span>
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>₹ 23,994</span>
//                 </div>
//                 <div className="flex justify-between mb-[30px]">
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>Shipping</span>
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>Free</span>
//                 </div>
//                 <hr className="my-4 border-[#ECBC56] border-dashed mb-[30px]" />
//                 <div className="flex justify-between">
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>Total</span>
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>₹ 23,994</span>
//                 </div>
//               </div>
//             </div>

//             {/* Buttons section */}
//             <div className="mt-[40px]">
//               <button 
//                 onClick={() => navigate('/billing')} // Navigate to cart page
//                 className="md:w-[384px] md:h-[52px] w-full h-auto text-[25px] mb-[15px] bg-[#ECBC56] text-black font-normal rounded-[5px] text-center"
//               >
//                 Checkout
//               </button>
//               <button 
//                 onClick={() => navigate('/store')} // Navigate to store page
//                 className="md:w-[384px] md:h-[52px] w-full h-auto text-[25px] bg-transparent border font-normal rounded-[5px] text-center"
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Buy Again Section */}
//       <div className="mt-12">
//         <div className="text-center mb-12 relative">
//           <h1 className="text-[28px] md:text-[40px] font-semibold mb-[20px]">Buy Again</h1>
//           <div className="relative flex justify-center items-center">
//             <div className='mx-auto border-dashed border-t-2 border-[#ECBC56] w-[230px] md:w-[500px] mb-[20px]'></div>
//           </div>
//           <p className="text-white md:text-[16px] text-[12px] font-normal md:mb-[80px] mb-[50px]">Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish</p>
//         </div>

//         {/* Product Grid Section */}
//         <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pb-[50px]">
//           {[1, 2, 3, 4].map((item, index) => (
//             <div 
//               key={index} 
//               className="bg-[#000719] py-[10px] md:pl-[30px] pl-[10px]  pr-[10px] rounded-[20px] shadow-lg flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6"
//               onClick={handleProductClick} // Navigate to product page on card click
//             >
//               <img src={SingleImg} alt="Product" className="w-full md:w-[240px] md:h-[293px] h-auto object-cover rounded-lg" />
//               <div className="flex-1">
//                 <h3 className="text-[16px] text-[#ECBC56] font-medium uppercase">PARAMPARIYAA</h3>
//                 <h2 className="text-[40px] font-semibold mb-3">Kodo Millet</h2>
//                 <p className="text-gray-300 text-[16px] md:w-[283px] w-full font-medium mb-4">Discover the rich flavor of millet from the heart of India.</p>
//                 <div className="flex flex-col md:flex-row gap-[10px]">
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent the click from bubbling up to the card
//                       navigate('/category'); // Navigate to category page
//                     }}
//                     className="bg-white w-full md:w-[141px] md:h-[39px] text-[#041423] font-normal px-[20px] rounded-[5px] text-lg"
//                   >
//                     Explore
//                   </button>
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent the click from bubbling up to the card
//                       navigate('/cart'); // Navigate to cart page
//                     }}
//                     className="bg-[#ECBC56] w-full md:w-[141px] md:h-[39px] text-[#041423] font-normal px-[20px] rounded-[5px] text-lg"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CartPage = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchCartItems = async () => {
//             const token = localStorage.getItem('authToken');
//             if (!token) {
//                 alert('Please log in to view your cart');
//                 return;
//             }

//             try {
//                 const response = await axios.get('http://localhost:4000/api/v1/cart', {
//                     headers: { Authorization: `Bearer ${token}` }
//                 });
//                 setCartItems(response.data.cartItems); // Assuming API returns an array of cart items
//             } catch (error) {
//                 console.error('Error fetching cart items:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCartItems();
//     }, []);

//     return (
//         <div className="cart-page">
//             {loading ? (
//                 <p>Loading cart...</p>
//             ) : (
//                 <div>
//                     {cartItems.length === 0 ? (
//                         <p>No items in the cart</p>
//                     ) : (
//                         <div>
//                             {cartItems.map((item) => (
//                                 <div key={item._id}>
//                                     <h2>{item.productName}</h2>
//                                     <p>Price: ₹{item.price}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CartPage;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CartPage = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchCartItems = async () => {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//             alert('Please log in to view your cart');
//             return;
//         }

//         try {
//             const response = await axios.get('http://localhost:4000/api/v1/cart', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setCartItems(response.data.cart.products); // Adjust this line based on your API response structure
//         } catch (error) {
//             console.error('Error fetching cart items:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCartItems(); // Fetch cart items on mount
//     }, []);

//     return (
//         <div className="cart-page">
//             {loading ? (
//                 <p>Loading cart...</p>
//             ) : (
//                 <div>
//                     {cartItems.length === 0 ? (
//                         <p>No items in the cart</p>
//                     ) : (
//                         <div>
//                             {cartItems.map((item) => (
//                                 <div key={item.product._id}>
//                                     <h2>{item.product.name}</h2>
//                                     <p>Price: ₹{item.product.price}</p>
//                                     <p>Quantity: {item.quantity}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CartPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CartPage = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchCartItems = async () => {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//             alert('Please log in to view your cart');
//             return;
//         }

//         try {
//             const response = await axios.get('http://localhost:4000/api/v1/cart', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setCartItems(response.data.cart.products); // Adjust this line based on your API response structure
//         } catch (error) {
//             console.error('Error fetching cart items:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCartItems(); // Fetch cart items on mount
//     }, []);

//     return (
//         <div className="cart-page">
//             {loading ? (
//                 <p>Loading cart...</p>
//             ) : (
//                 <div>
//                     {cartItems.length === 0 ? (
//                         <p>No items in the cart</p>
//                     ) : (
//                         <div>
//                             {cartItems.map((item) => (
//                                 <div key={item.product._id} className="cart-item">
//                                     {/* Display the product image */}
//                                     <img 
//                                         src={item.product.images[0]?.url || '/path/to/fallback-image.jpg'} // Use a fallback image if none is available
//                                         alt={item.product.name}
//                                         className="product-image"
//                                     />
//                                     <h2>{item.product.name}</h2>
//                                     <p>Price: ₹{item.product.price}</p>
//                                     <p>Quantity: {item.quantity}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CartPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CartPage = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchCartItems = async () => {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//             alert('Please log in to view your cart');
//             return;
//         }

//         try {
//             const response = await axios.get('http://localhost:4000/api/v1/cart', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setCartItems(response.data.cart.products); // Adjust this line based on your API response structure
//         } catch (error) {
//             console.error('Error fetching cart items:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCartItems(); // Fetch cart items on mount
//     }, []);

//     return (
//         <div className="cart-page">
//             {loading ? (
//                 <p>Loading cart...</p>
//             ) : (
//                 <div>
//                     {cartItems.length === 0 ? (
//                         <p>No items in the cart</p>
//                     ) : (
//                         <div className="flex flex-wrap gap-4">
//                             {cartItems.map((item) => (
//                                 <div 
//                                     key={item.product._id} 
//                                     className="bg-[rgba(0,61,100,0.15)] p-4 rounded-lg shadow-lg" 
//                                     style={{ width: '100%', maxWidth: '355px', flex: '0 0 auto' }}
//                                 >
//                                     {/* Display the product image */}
//                                     <img 
//                                         src={item.product.images[0]?.url || '/path/to/fallback-image.jpg'} // Use a fallback image if none is available
//                                         alt={item.product.name}
//                                         className="w-full h-[230px] object-cover mb-4"
//                                     />
//                                     <h4 className="text-[24px] font-medium">{item.product.name}</h4>
//                                     <p className="mt-2 text-lg sm:text-2xl text-[#ECBC56] text-[24px] font-medium">₹{item.product.price}</p>
//                                     <p className="mt-2 text-lg">Quantity: {item.quantity}</p>

//                                     {/* Action Buttons */}
//                                     <div className="w-full flex flex-col sm:flex-row gap-2 mt-4">
//                                         <button className="bg-gray-800 text-white p-2 rounded-[5px] w-full" onClick={() => alert('Functionality to be implemented for adjusting quantity or removing item.')}>
//                                             Update Quantity
//                                         </button>
//                                         <button className="bg-white text-[#041423] p-2 rounded-[5px] w-full">
//                                             Remove
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CartPage;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import SingleImg from '../asstes/SingleImage.png'; // Make sure the path is correct

// const CartPage = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchCartItems = async () => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       alert('Please log in to view your cart');
//       return;
//     }

//     try {
//       const response = await axios.get('http://localhost:4000/api/v1/cart', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(response.data.cart.products); // Adjust this line based on your API response structure
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartItems(); // Fetch cart items on mount
//   }, []);

//   const handleProductClick = () => {
//     navigate('/product'); // Navigate to product page when clicking on the product card
//   };

//   // Calculate subtotal and total
//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.product.price * item.quantity; // price * quantity for each item
//     }, 0);
//   };

//   const subtotal = calculateSubtotal();
//   const shipping = 0; // Shipping is free
//   const total = subtotal + shipping;


//   const handleUpdateQuantity = async (productId, newQuantity) => {
//     if (newQuantity < 0) return; // Prevent negative quantities

//     try {
//         await axios.put(`http://localhost:4000/api/v1/cart/${productId}`, { quantity: newQuantity }, {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//         // Optionally refresh cart items here
//     } catch (error) {
//         console.error('Failed to update quantity:', error);
//     }
// };
// const handleRemoveProduct = async (productId) => {
//     try {
//         await axios.delete(`http://localhost:4000/api/v1/cart/${productId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//         // Optionally refresh cart items here
//     } catch (error) {
//         console.error('Failed to remove product:', error);
//     }
// };

//   return (
//     <div className="bg-radial-white-black from-blue-900 to-black text-white px-[20px] md:px-[80px] pt-[60px]">
//       {/* Header Progress Bar */}
//       <div className="flex items-center justify-center mb-16">
//         <div className="flex items-center md:w-[742px] w-full">
//           {/* Step 1 */}
//           <div className="flex flex-col items-center">
//             <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center md:text-[50px] text-[30px] font-semibold text-black">1</div>
//             <span className="mt-2 text-[13px] md:text-[25px] text-[#ECBC56] font-medium">Order Details</span>
//           </div>
//           <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
//           {/* Step 2 */}
//           <div className="flex flex-col items-center">
//             <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">2</div>
//             <span className="mt-2 text-[13px] md:text-[25px] text-[#DBDBDB] font-light">Delivery & Payment</span>
//           </div>
//           <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
//           {/* Step 3 */}
//           <div className="flex flex-col items-center">
//             <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">3</div>
//             <span className="mt-2 text-[13px] md:text-[25px] text-white font-light">Confirmation</span>
//           </div>
//         </div>
//       </div>

//       {/* Cart Content */}
//       <div>
//         <h2 className="md:text-[50px] text-[40px] font-small mb-6 text-center md:text-left">My Cart</h2>
//         <div className="flex flex-col lg:flex-row lg:space-x-4">
//           {/* Product List */}
//           <div className="flex-1">
//             {loading ? (
//               <p>Loading cart...</p>
//             ) : cartItems.length === 0 ? (
//               <p>No items in the cart</p>
//             ) : (
//               cartItems.map((item) => (
//                 <div 
//                   key={item.product._id} 
//                   className="bg-[#041423] rounded-[20px] py-[10px] pr-[10px] md:pl-[30px] pl-[10px] mb-6 md:w-[799px] md:h-[211px] w-full h-auto flex flex-col sm:flex-row items-center sm:items-start"
//                   onClick={handleProductClick} // Navigate to product page on card click
//                 >
//                   <img 
//                     src={item.product.images[0]?.url || SingleImg} // Use a fallback image if none is available
//                     alt={item.product.name}
//                     className="md:w-[157px] md:h-[191px] w-full h-auto object-cover md:mr-[38px]"
//                   />
//                   <div className="flex flex-col">
//                     <h3 className="md:text-[40px] text-[30px] font-semibold mb-[15px]">{item.product.name}</h3>
//                     <p className="text-[16px] font-normal text-[#FFFFFF] mb-[25px]">
//                       {item.product.description || "Discover the rich flavor of millets from the heart of India."}
//                     </p>
//                     <p className="mt-2 text-lg sm:text-2xl text-[#ECBC56] text-[24px] font-medium">₹{item.product.price}</p>
//                     <p className="mt-2 text-lg">Quantity: {item.quantity}</p>

//                     {/* Action Buttons */}
//                     <div className="w-full flex flex-col sm:flex-row gap-2 mt-4">
//                       <button 
//                         className="bg-gray-800 text-white p-2 rounded-[5px] w-full" 
//                         onClick={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}
//                       >
//                         Update Quantity
//                       </button>
//                       <button 
//                         className="bg-white text-[#041423] p-2 rounded-[5px] w-full"
//                         onClick={(e) => {
//                             e.stopPropagation(); // Prevent the click from bubbling up to the card
//                             handleRemoveProduct(item.product._id); // Call remove function
//                         }}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Order Summary */}
//           <div className="bg-[#041423] border border-[#ECBC56] p-9 rounded-[20px] md:w-[451px] md:h-[441px] w-full h-auto flex flex-col">
//             <div>
//               <h3 className="text-[30px] text-[#ECBC56] font-semibold mb-4">ORDER TOTAL</h3>
//               <div className="h-[171px]">
//                 <div className="flex justify-between">
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>Subtotal</span>
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>₹ {subtotal}</span>
//                 </div>
//                 <div className="flex justify-between mb-[30px]">
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>Shipping</span>
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>Free</span>
//                 </div>
//                 <hr className="my-4 border-[#ECBC56] border-dashed mb-[30px]" />
//                 <div className="flex justify-between">
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>Total</span>
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>₹ {total}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Buttons section */}
//             <div className="mt-[40px]">
//               <button 
//                 onClick={() => navigate('/billing')} // Navigate to billing page
//                 className="md:w-[384px] md:h-[52px] w-full h-auto text-[25px] mb-[15px] bg-[#ECBC56] text-black font-normal rounded-[5px] text-center"
//               >
//                 Checkout
//               </button>
//               <button 
//                 onClick={() => navigate('/store')} // Navigate to store page
//                 className="md:w-[384px] md:h-[52px] w-full h-auto text-[25px] bg-transparent border font-normal rounded-[5px] text-center"
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import SingleImg from '../asstes/SingleImage.png'; // Make sure the path is correct

// const CartPage = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchCartItems = async () => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       alert('Please log in to view your cart');
//       return;
//     }

//     try {
//       const response = await axios.get('http://localhost:4000/api/v1/cart', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(response.data.cart.products); // Adjust this line based on your API response structure
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartItems(); // Fetch cart items on mount
//   }, []);

// //   const handleProductClick = () => {
// //     navigate('/product'); // Navigate to product page when clicking on the product card
// //   };

//   // Calculate subtotal and total
//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.product.price * item.quantity; // price * quantity for each item
//     }, 0);
//   };

//   const subtotal = calculateSubtotal();
//   const shipping = 0; // Shipping is free
//   const total = subtotal + shipping;

//   const handleUpdateQuantity = async (productId, newQuantity) => {
//     if (newQuantity < 0) return; // Prevent negative quantities
//     const token = localStorage.getItem('authToken'); // Get token inside the function

//     try {
//       await axios.put(`http://localhost:4000/api/v1/cart/${productId}`, { quantity: newQuantity }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       // Optionally refresh cart items here
//       fetchCartItems(); // Refresh cart items after update
//     } catch (error) {
//       console.error('Failed to update quantity:', error);
//     }
//   };

//   const handleRemoveProduct = async (productId) => {
//     const token = localStorage.getItem('authToken'); // Get token inside the function
//     try {
//       await axios.delete(`http://localhost:4000/api/v1/cart/${productId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       // Optionally refresh cart items here
//       fetchCartItems(); // Refresh cart items after removal
//     } catch (error) {
//       console.error('Failed to remove product:', error);
//     }
//   };

//   return (
//     <div className="bg-radial-white-black from-blue-900 to-black text-white px-[20px] md:px-[80px] pt-[60px]">
//       {/* Header Progress Bar */}
//       <div className="flex items-center justify-center mb-16">
//         <div className="flex items-center md:w-[742px] w-full">
//           {/* Step 1 */}
//           <div className="flex flex-col items-center">
//             <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center md:text-[50px] text-[30px] font-semibold text-black">1</div>
//             <span className="mt-2 text-[13px] md:text-[25px] text-[#ECBC56] font-medium">Order Details</span>
//           </div>
//           <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
//           {/* Step 2 */}
//           <div className="flex flex-col items-center">
//             <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">2</div>
//             <span className="mt-2 text-[13px] md:text-[25px] text-[#DBDBDB] font-light">Delivery & Payment</span>
//           </div>
//           <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
//           {/* Step 3 */}
//           <div className="flex flex-col items-center">
//             <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">3</div>
//             <span className="mt-2 text-[13px] md:text-[25px] text-white font-light">Confirmation</span>
//           </div>
//         </div>
//       </div>

//       {/* Cart Content */}
//       <div>
//         <h2 className="md:text-[50px] text-[40px] font-small mb-6 text-center md:text-left">My Cart</h2>
//         <div className="flex flex-col lg:flex-row lg:space-x-4">
//           {/* Product List */}
//           <div className="flex-1">
//             {loading ? (
//               <p>Loading cart...</p>
//             ) : cartItems.length === 0 ? (
//               <p>No items in the cart</p>
//             ) : (
//               cartItems.map((item) => (
//                 <div 
//                   key={item.product._id} 
//                   className="bg-[#041423] rounded-[20px] py-[10px] pr-[10px] md:pl-[30px] pl-[10px] mb-6 md:w-[799px] md:h-[211px] w-full h-auto flex flex-col sm:flex-row items-center sm:items-start"
//                   // Navigate to product page on card click
//                 >
//                   <img 
//                     src={item.product.images[0]?.url || SingleImg} // Use a fallback image if none is available
//                     alt={item.product.name}
//                     className="md:w-[157px] md:h-[191px] w-full h-auto object-cover md:mr-[38px]"
//                   />
//                   <div className="flex flex-col">
//                     <h3 className="md:text-[40px] text-[30px] font-semibold mb-[15px]">{item.product.name}</h3>
//                     <p className="text-[16px] font-normal text-[#FFFFFF] mb-[25px]">
//                       {item.product.description || "Discover the rich flavor of millets from the heart of India."}
//                     </p>
//                     <p className="mt-2 text-lg sm:text-2xl text-[#ECBC56] text-[24px] font-medium">₹{item.product.price}</p>
//                     <p className="mt-2 text-lg">Quantity: {item.quantity}</p>

//                     {/* Action Buttons */}
//                     <div className="w-full flex flex-col sm:flex-row gap-2 mt-4">
//                       <button 
//                         className="bg-gray-800 text-white p-2 rounded-[5px] w-full" 
//                         onClick={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}
//                       >
//                         Update Quantity
//                       </button>
//                       <button 
//                         className="bg-white text-[#041423] p-2 rounded-[5px] w-full"
//                         onClick={(e) => {
//                             e.stopPropagation(); // Prevent the click from bubbling up to the card
//                             handleRemoveProduct(item.product._id); // Call remove function
//                         }}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Order Summary */}
//           <div className="bg-[#041423] border border-[#ECBC56] p-9 rounded-[20px] md:w-[451px] md:h-[441px] w-full h-auto flex flex-col">
//             <div>
//               <h3 className="text-[30px] text-[#ECBC56] font-semibold mb-4">ORDER TOTAL</h3>
//               <div className="h-[171px]">
//                 <div className="flex justify-between">
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>Subtotal</span>
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>₹ {subtotal}</span>
//                 </div>
//                 <div className="flex justify-between mb-[30px]">
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>Shipping</span>
//                   <span className='text-[#DBDBDB] text-[25px] font-light'>Free</span>
//                 </div>
//                 <hr className='border-[#ECBC56]' />
//                 <div className="flex justify-between mt-4">
//                   <span className='text-[#ECBC56] text-[25px] font-medium'>Total</span>
//                   <span className='text-[#ECBC56] text-[25px] font-medium'>₹ {total}</span>
//                 </div>
//               </div>
//             </div>
//             <button onClick={() => navigate('/billing') } className="bg-[#ECBC56] text-[#041423] text-[24px] font-semibold rounded-lg py-3 px-4">Proceed to Checkout</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SingleImg from '../asstes/SingleImage.png'; // Make sure the path is correct

const CartPage = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCartItems = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            alert('Please log in to view your cart');
            return;
        }

        try {
            const response = await axios.get('http://localhost:4000/api/v1/cart', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setCartItems(response.data.cart.products);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItems(); // Fetch cart items on mount
    }, []);
console.log(cartItems);
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);
    };

    const subtotal = calculateSubtotal();
    const shipping = 0; // Shipping is free
    const total = subtotal + shipping;
    console.log(total);
    const handleUpdateQuantity = async (productId, newQuantity) => {
        if (newQuantity < 0) return; // Prevent negative quantities
        const token = localStorage.getItem('authToken');

        try {
            await axios.put(`http://localhost:4000/api/v1/cart/${productId}`, { quantity: newQuantity }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchCartItems(); // Refresh cart items after update
        } catch (error) {
            console.error('Error updating cart quantity:', error);
        }
    };

  const handleRemoveProduct = async (productId) => {
    const token = localStorage.getItem('authToken'); // Get token inside the function
    try {
      await axios.delete(`http://localhost:4000/api/v1/cart/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Optionally refresh cart items here
      fetchCartItems(); // Refresh cart items after removal
    } catch (error) {
      console.error('Failed to remove product:', error);
    }
  };
  const handleProceedToCheckout = () => {
    navigate('/billing', { state: { totalAmount: total } }); // Pass the total amount to the checkout page
  };
  
  
  return (
    <div className="bg-radial-white-black from-blue-900 to-black text-white px-[20px] md:px-[80px] pt-[60px]">
      {/* Header Progress Bar */}
      <div className="flex items-center justify-center mb-16">
        <div className="flex items-center md:w-[742px] w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center md:text-[50px] text-[30px] font-semibold text-black">1</div>
            <span className="mt-2 text-[13px] md:text-[25px] text-[#ECBC56] font-medium">Order Details</span>
          </div>
          <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">2</div>
            <span className="mt-2 text-[13px] md:text-[25px] text-[#DBDBDB] font-light">Delivery & Payment</span>
          </div>
          <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">3</div>
            <span className="mt-2 text-[13px] md:text-[25px] text-white font-light">Confirmation</span>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div>
        <h2 className="md:text-[50px] text-[40px] font-small mb-6 text-center md:text-left">My Cart</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          {/* Product List */}
          <div className="flex-1">
            {loading ? (
              <p>Loading cart...</p>
            ) : cartItems.length === 0 ? (
              <p>No items in the cart</p>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.product._id} 
                  className="bg-[#041423] rounded-[20px] py-[10px] pr-[10px] md:pl-[30px] pl-[10px] mb-6 md:w-[799px] md:h-[211px] w-full h-auto flex flex-col sm:flex-row items-center sm:items-start"
                  // Navigate to product page on card click
                >
                  <img 
                    src={item.product.images[0]?.url || SingleImg} // Use a fallback image if none is available
                    alt={item.product.name}
                    className="md:w-[157px] md:h-[191px] w-full h-auto object-cover md:mr-[38px]"
                  />
                  <div className="flex flex-col">
                    <h3 className="md:text-[40px] text-[30px] font-semibold mb-[15px]">{item.product.name}</h3>
                    <p className="text-[16px] font-normal text-[#FFFFFF] mb-[25px]">
                      {item.product.description || "Discover the rich flavor of millets from the heart of India."}
                    </p>
                    <p className="mt-2 text-lg sm:text-2xl text-[#ECBC56] text-[24px] font-medium">₹{item.product.price}</p>
                    <p className="mt-2 text-lg">Quantity: {item.quantity}</p>

                    {/* Action Buttons */}
                    <div className="w-full flex flex-col sm:flex-row gap-2 mt-4">
                      <button 
                        className="bg-gray-800 text-white p-2 rounded-[5px] w-full" 
                        onClick={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}
                      >
                        Update Quantity
                      </button>
                      <button 
                        className="bg-white text-[#041423] p-2 rounded-[5px] w-full"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent the click from bubbling up to the card
                            handleRemoveProduct(item.product._id); // Call remove function
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-[#041423] border border-[#ECBC56] p-9 rounded-[20px] md:w-[451px] md:h-[441px] w-full h-auto flex flex-col">
            <div>
              <h3 className="text-[30px] text-[#ECBC56] font-semibold mb-4">ORDER TOTAL</h3>
              <div className="h-[171px]">
                <div className="flex justify-between">
                  <span className='text-[#DBDBDB] text-[25px] font-light'>Subtotal</span>
                  <span className='text-[#DBDBDB] text-[25px] font-light'>₹ {subtotal}</span>
                </div>
                <div className="flex justify-between mb-[30px]">
                  <span className='text-[#DBDBDB] text-[25px] font-light'>Shipping</span>
                  <span className='text-[#DBDBDB] text-[25px] font-light'>Free</span>
                </div>
                <hr className='border-[#ECBC56]' />
                <div className="flex justify-between mt-4">
                  <span className='text-[#ECBC56] text-[25px] font-medium'>Total</span>
                  <span className='text-[#ECBC56] text-[25px] font-medium'>₹ {total}</span>
                </div>
              </div>
            </div>
            <button   onClick={handleProceedToCheckout}  className="bg-[#ECBC56] text-[#041423] text-[24px] font-semibold rounded-lg py-3 px-4">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import SingleImg from '../asstes/SingleImage.png'; // Ensure path is correct

// const CartPage = () => {
//     const navigate = useNavigate();
//     const [cartProducts, setCartProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchCartItems = async () => {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//             alert('Please log in to view your cart');
//             return;
//         }

//         try {
//             const response = await axios.get('http://localhost:4000/api/v1/cart', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setCartProducts(response.data.cart.products); // Access products directly from cart
//         } catch (error) {
//             console.error('Error fetching cart items:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCartItems(); // Fetch cart items on mount
//     }, []);

//     const calculateSubtotal = () => {
//         return cartProducts.reduce((total, item) => {
//             return total + item.product.price * item.quantity;
//         }, 0);
//     };

//     const subtotal = calculateSubtotal();
//     const shipping = 0; // Shipping is free
//     const total = subtotal + shipping;

//     const handleUpdateQuantity = async (productId, newQuantity) => {
//         if (newQuantity < 0) return; // Prevent negative quantities
//         const token = localStorage.getItem('authToken');

//         try {
//             await axios.put(`http://localhost:4000/api/v1/cart/${productId}`, { quantity: newQuantity }, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             fetchCartItems(); // Refresh cart items after update
//         } catch (error) {
//             console.error('Error updating cart quantity:', error);
//         }
//     };

//     const handleRemoveProduct = async (productId) => {
//         const token = localStorage.getItem('authToken');
//         try {
//             await axios.delete(`http://localhost:4000/api/v1/cart/${productId}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             fetchCartItems(); // Refresh cart items after removal
//         } catch (error) {
//             console.error('Failed to remove product:', error);
//         }
//     };

//     const handleProceedToCheckout = () => {
//         navigate('/billing', { state: { totalAmount: total } }); // Pass the total amount to the checkout page
//     };

//     return (
//         <div className="bg-radial-white-black from-blue-900 to-black text-white px-[20px] md:px-[80px] pt-[60px]">
//             {/* Header Progress Bar */}
//             <div className="flex items-center justify-center mb-16">
//                 <div className="flex items-center md:w-[742px] w-full">
//                     {/* Step 1 */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center md:text-[50px] text-[30px] font-semibold text-black">1</div>
//                         <span className="mt-2 text-[13px] md:text-[25px] text-[#ECBC56] font-medium">Order Details</span>
//                     </div>
//                     <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
//                     {/* Step 2 */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">2</div>
//                         <span className="mt-2 text-[13px] md:text-[25px] text-[#DBDBDB] font-light">Delivery & Payment</span>
//                     </div>
//                     <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
//                     {/* Step 3 */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">3</div>
//                         <span className="mt-2 text-[13px] md:text-[25px] text-white font-light">Confirmation</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Cart Content */}
//             <div>
//                 <h2 className="md:text-[50px] text-[40px] font-small mb-6 text-center md:text-left">My Cart</h2>
//                 <div className="flex flex-col lg:flex-row lg:space-x-4">
//                     {/* Product List */}
//                     <div className="flex-1">
//                         {loading ? (
//                             <p>Loading cart...</p>
//                         ) : cartProducts.length === 0 ? (
//                             <p>No items in the cart</p>
//                         ) : (
//                             cartProducts.map((item) => (
//                                 <div 
//                                     key={item.product._id} 
//                                     className="bg-[#041423] rounded-[20px] py-[10px] pr-[10px] md:pl-[30px] pl-[10px] mb-6 md:w-[799px] md:h-[211px] w-full h-auto flex flex-col sm:flex-row items-center sm:items-start"
//                                     // Navigate to product page on card click
//                                 >
//                                     <img 
//                                         src={item.product.images[0]?.url || SingleImg} // Use a fallback image if none is available
//                                         alt={item.product.name}
//                                         className="md:w-[157px] md:h-[191px] w-full h-auto object-cover md:mr-[38px]"
//                                     />
//                                     <div className="flex flex-col">
//                                         <h3 className="md:text-[40px] text-[30px] font-semibold mb-[15px]">{item.product.name}</h3>
//                                         <p className="text-[16px] font-normal text-[#FFFFFF] mb-[25px]">
//                                             {item.product.description || "Discover the rich flavor of millets from the heart of India."}
//                                         </p>
//                                         <p className="mt-2 text-lg sm:text-2xl text-[#ECBC56] text-[24px] font-medium">₹{item.product.price}</p>
//                                         <p className="mt-2 text-lg">Quantity: {item.quantity}</p>

//                                         {/* Action Buttons */}
//                                         <div className="w-full flex flex-col sm:flex-row gap-2 mt-4">
//                                             <button 
//                                                 className="bg-gray-800 text-white p-2 rounded-[5px] w-full" 
//                                                 onClick={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}
//                                             >
//                                                 Update Quantity
//                                             </button>
//                                             <button 
//                                                 className="bg-white text-[#041423] p-2 rounded-[5px] w-full"
//                                                 onClick={(e) => {
//                                                     e.stopPropagation(); // Prevent the click from bubbling up to the card
//                                                     handleRemoveProduct(item.product._id); // Call remove function
//                                                 }}
//                                             >
//                                                 Remove
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         )}
//                     </div>

//                     {/* Order Summary */}
//                     <div className="bg-[#041423] border border-[#ECBC56] p-9 rounded-[20px] md:w-[451px] md:h-[441px] w-full h-auto flex flex-col">
//                         <div>
//                             <h3 className="text-[30px] text-[#ECBC56] font-semibold mb-4">ORDER TOTAL</h3>
//                             <div className="h-[171px]">
//                                 <div className="flex justify-between">
//                                     <span className='text-[#DBDBDB] text-[25px] font-light'>Subtotal</span>
//                                     <span className='text-[#DBDBDB] text-[25px] font-light'>₹ {subtotal}</span>
//                                 </div>
//                                 <div className="flex justify-between mb-[30px]">
//                                     <span className='text-[#DBDBDB] text-[25px] font-light'>Shipping</span>
//                                     <span className='text-[#DBDBDB] text-[25px] font-light'>Free</span>
//                                 </div>
//                                 <hr className='border-[#ECBC56]' />
//                                 <div className="flex justify-between mt-4">
//                                     <span className='text-[#ECBC56] text-[25px] font-medium'>Total</span>
//                                     <span className='text-[#ECBC56] text-[25px] font-medium'>₹ {total}</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full mt-[60px]">
//                             <button 
//                                 className="bg-[#ECBC56] text-[#041423] w-full rounded-[15px] py-4 font-medium text-[30px]"
//                                 onClick={handleProceedToCheckout} // Checkout button
//                             >
//                                 CHECKOUT
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartPage;
