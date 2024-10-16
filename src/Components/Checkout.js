// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import gpay from '../asstes/gpay.png';

// const CheckoutPage = () => {
//     const navigate = useNavigate(); // Initialize useNavigate

//     return (
//         <div className="bg-radial-white-black from-blue-900 to-black text-white px-[20px] md:px-[80px] pt-[50px]">
//             {/* Progress Bar */}
//             <div className="flex items-center justify-center mb-16">
//                 <div className="flex items-center md:w-[742px] w-full">
//                     {/* Step 1 */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-[84px] h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center text-[50px] font-semibold text-black">1</div>
//                         <span className="mt-2 text-[25px] text-[#ECBC56] font-medium">Order Details</span>
//                     </div>

//                     {/* Dashed Line */}
//                     <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border mx-4"></div>

//                     {/* Step 2 */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-[84px] h-[84px] bg-[#ECBC56] border border-[#ECBC56] rounded-full text-[50px] font-semibold text-black flex items-center justify-center">2</div>
//                         <span className="mt-2 text-[25px] text-[#DBDBDB] font-light">Delivery & Payment</span>
//                     </div>

//                     {/* Dashed Line */}
//                     <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>

//                     {/* Step 3 */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-[84px] h-[84px] bg-transparent border border-[#ECBC56] rounded-full text-[50px] text-[#ECBC56] font-semibold flex items-center justify-center">3</div>
//                         <span className="mt-2 text-[25px] text-[#ECBC56] font-light">Confirmation</span>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col lg:flex-row justify-between gap-8">
//                 {/* Left Section - Billing and Delivery Details */}
//                 <div className="flex-1 ">
//                     {/* Billing Details */}
//                     <div className="bg-transparent mb-6 md:w-[742px] md:h-[287px] w-full h-auto">
//                         <h2 className="md:text-[50px]  text-[34px] font-light mb-4">Billing Details</h2>
//                         <div className="flex flex-wrap gap-4">
//                             <input type="text" placeholder="First Name" className="flex-1 p-2 rounded-md bg-[#000719] text-[23px] font-light  text-white" />
//                             <input type="text" placeholder="Last Name" className="flex-1 p-2 rounded-md bg-[#000719]  text-[23px] font-light  text-white" />
//                         </div>
//                         <input type="email" placeholder="Email Address" className="p-2 rounded-md w-full bg-[#000719]  text-[23px] font-light text-white mt-4" />
//                         <div className="flex items-center mt-4">
//                             <div className="flex items-center gap-[10px]  bg-[#000719]  md:w-[164px] w-full p-2 rounded-md">
//                                 <img src="https://cdn.countryflags.com/thumbs/india/flag-400.png" alt="India Flag" className=" pl-[10px]  h-6" />
//                                 <span className=' md:text-[23px] text-[18px] font-light text-[#FFFFFF]'>IND</span>
//                             </div>
//                             <span className="p-2 rounded-md  bg-[#000719] text-[#FFFFFF]  text-[23px] font-light   ml-4">+91</span>
//                             <input type="text" placeholder="Phone Number" className="p-2 rounded-md w-full bg-[#000719] text-[23px] font-light  text-white ml-4" />
//                         </div>
//                     </div>

//                     {/* Delivery Address */}
//                     <div className="bg-transparent  md:w-[742px] md:h-[360px] w-full h-auto">
//                         <h2 className="md:text-[50px] text-[34px] font-light mb-4">Delivery Address</h2>
//                         <input type="text" placeholder="House Number And Street Name" className="p-2 rounded-md w-full bg-[#000719]  text-[23px] font-light    text-white mb-4" />
//                         <input type="text" placeholder="Apartment, Suite, Etc. [Optional]" className="p-2 rounded-md w-full bg-[#000719]  text-[23px] font-light  text-white mb-4" />
//                         <div className="flex flex-wrap gap-4">
//                             <input type="text" placeholder="Country" className="flex-1 p-2 rounded-md bg-[#000719]  text-[23px] font-light   text-white" />
//                             <input type="text" placeholder="State" className="flex-1 p-2 rounded-md bg-[#000719]  text-[23px] font-light   text-white" />
//                         </div>
//                         <div className="flex flex-wrap gap-4 mt-4">
//                             <input type="text" placeholder="City/Town" className="flex-1 p-2 rounded-md bg-[#000719]  text-[23px] font-light   text-white" />
//                             <input type="text" placeholder="Pin Code" className="flex-1 p-2 rounded-md bg-[#000719]  text-[23px] font-light  text-white" />
//                         </div>
//                     </div>

//                     {/* Payment Option */}
//                     <div className="bg-transparent w-full md:w-[742px] rounded-lg mt-6 flex flex-col md:pb-[100px]">
//                         <div className='w-full'>
//                             <h2 className="md:text-[50px] text-[34px] font-light">Pay With</h2>
//                         </div>
//                         <div className='bg-[#000719]'>
//                             <img src={gpay} alt="GPay" className="md:w-[350px] md:ml-[200px] h-[60px] p-[10px]" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section - Order Summary */}

//                 <div className='md:pt-[80px]'>
//                 <div className="bg-radial-white-black from-blue-900 to-black mb-[50px] md:mb-[0px] p-6 rounded-[20px] border border-[#ECBC56] md:w-[451px] md:h-[481px]  w-full h-auto">
//                     <h2 className="text-[30px] font-semibold mb-4 ">ORDER TOTAL</h2>
//                     <div className="mb-4">
//                         <p className="flex justify-between text-[25px] font-light"><span>Products</span> <span className='text-[25px] font-normal'>08</span></p>
//                         <div className="border-b border-dashed border-[#ECBC56] my-2"></div>
//                         <p className="flex justify-between text-[25px] font-light"><span>Subtotal</span> <span className='text-[25px] font-normal'>₹ 23,994</span></p>
//                         <div className="my-2"></div>
//                         <p className="flex justify-between text-[25px] font-light"><span>Shipping</span> <span className='text-[25px] font-normal'>Free</span></p>
//                         <div className="my-2"></div>
//                         <p className="flex justify-between text-[#208393] text-[25px] font-light"><span>You Save</span> <span className='text-[25px] font-normal'>₹ 6,000</span></p>
//                     </div>
//                     <div className="border-b border-dashed border-[#ECBC56] my-2"></div>
//                     <div className="flex justify-between font-semibold text-[#ECBC56] text-[25px] mt-2 mb-[25px]">
//                         <span>Total</span> <span>₹ 23,994</span>
//                     </div>
//                     <button
//                         onClick={() => navigate('/confirmation')} // Navigate to ConfirmationPage
//                         className="w-full md:w-[400px] md:h-[62px] h-[50px] text-[#000719] p-3 rounded-[5px] md:mt-6 md:text-[25px] text-[20px] font-normal bg-[#ECBC56]"
//                     >
//                         Place Your Order
//                     </button>
//                 </div>
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default CheckoutPage;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [billingDetails, setBillingDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     city: '',
//     zip: '',
//   });

//   const fetchCartItems = async () => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       alert('Please log in to checkout');
//       navigate('/login'); // Redirect to login if not authenticated
//       return;
//     }

//     try {
//       const response = await axios.get('http://localhost:4000/api/v1/cart', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(response.data.cart.products);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartItems(); // Fetch cart items on mount
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBillingDetails({ ...billingDetails, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('authToken');

//     if (!token) {
//       alert('Please log in to place an order');
//       return;
//     }

//     const orderData = {
//       products: cartItems.map(item => ({
//         productId: item.product._id,
//         quantity: item.quantity,
//       })),
//       billingDetails,
//     };

//     try {
//       await axios.post('http://localhost:4000/api/v1/order', orderData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert('Order placed successfully!');
//        // Redirect to confirmation page
//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-white px-4 py-8">
//       <h1 className="text-3xl mb-6">Checkout</h1>
//       {loading ? (
//         <p>Loading cart items...</p>
//       ) : (
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <div className="mb-4">
//             <label className="block mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={billingDetails.name}
//               onChange={handleInputChange}
//               required
//               className="p-2 w-full bg-gray-800 border border-gray-700"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={billingDetails.email}
//               onChange={handleInputChange}
//               required
//               className="p-2 w-full bg-gray-800 border border-gray-700"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={billingDetails.address}
//               onChange={handleInputChange}
//               required
//               className="p-2 w-full bg-gray-800 border border-gray-700"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">City</label>
//             <input
//               type="text"
//               name="city"
//               value={billingDetails.city}
//               onChange={handleInputChange}
//               required
//               className="p-2 w-full bg-gray-800 border border-gray-700"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">ZIP Code</label>
//             <input
//               type="text"
//               name="zip"
//               value={billingDetails.zip}
//               onChange={handleInputChange}
//               required
//               className="p-2 w-full bg-gray-800 border border-gray-700"
//             />
//           </div>
//           <button type="submit" className="bg-yellow-500 text-black p-2 rounded">
//             Place Order
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [billingDetails, setBillingDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     city: '',
//     zip: '',
//   });

//   const fetchCartItems = async () => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       alert('Please log in to checkout');
//       navigate('/login'); // Redirect to login if not authenticated
//       return;
//     }

//     try {
//       const response = await axios.get('http://localhost:4000/api/v1/cart', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(response.data.cart.products);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartItems(); // Fetch cart items on mount
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBillingDetails({ ...billingDetails, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('authToken');

//     if (!token) {
//       alert('Please log in to place an order');
//       return;
//     }

//     const orderData = {
//         products: cartItems.map(item => ({
//             productId: item.product ? item.product._id : null,  // Check for existence
//             quantity: item.quantity,
//         })).filter(item => item.productId !== null),  // Filter out invalid entries
        
//     };

//     try {
//       await axios.post('http://localhost:4000/api/v1/order', orderData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert('Order placed successfully!');
//        // Redirect to confirmation page
//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-white px-4 py-8">
//       <h1 className="text-3xl mb-6">Checkout</h1>
//       {loading ? (
//         <p>Loading cart items...</p>
//       ) : (
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <div className="mb-4">
//             <label className="block mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={billingDetails.name}
//               onChange={handleInputChange}
//               required
//               className="p-2 w-full bg-gray-800 border border-gray-700"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={billingDetails.email}
//               onChange={handleInputChange}
//               required
//               className="p-2 w-full bg-gray-800 border border-gray-700"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={billingDetails.address}
//               onChange={handleInputChange}
//               required
//               className="p-2 w-full bg-gray-800 border border-gray-700"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">City</label>
//             <input
//               type="text"
//               name="city"
//               value={billingDetails.city}
//               onChange={handleInputChange}
//               required
//               className="p-2 w-full bg-gray-800 border border-gray-700"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">ZIP Code</label>
//             <input
//               type="text"
//               name="zip"
//               value={billingDetails.zip}
//               onChange={handleInputChange}
//               required
//               className="p-2 w-full bg-gray-800 border border-gray-700"
//             />
//           </div>
//           <button type="submit" className="bg-yellow-500 text-black p-2 rounded">
//             Place Order
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const CheckoutPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   // Get total amount from the location state
//   const { totalAmount } = location.state || { totalAmount: 0 }; 

//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [billingDetails, setBillingDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     city: '',
//     zip: '',
//     totalAmount: totalAmount, // Append total amount here
//   });

//   const fetchCartItems = async () => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       alert('Please log in to checkout');
//       navigate('/login'); // Redirect to login if not authenticated
//       return;
//     }

//     try {
//       const response = await axios.get('http://localhost:4000/api/v1/cart', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(response.data.cart.products);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartItems(); // Fetch cart items on mount
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBillingDetails({ ...billingDetails, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('authToken');

//     if (!token) {
//       alert('Please log in to place an order');
//       return;
//     }

//     const orderData = {
//       products: cartItems.map(item => ({
//         productId: item.product ? item.product._id : null, // Check for existence
//         quantity: item.quantity,
//       })).filter(item => item.productId !== null), // Filter out invalid entries
//       totalAmount: billingDetails.totalAmount, // Include total amount in order data
//     };

//     try {
//       await axios.post('http://localhost:4000/api/v1/order', orderData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert('Order placed successfully!');
//       // Redirect to confirmation page
//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-white px-4 py-8">
//       <h1 className="text-3xl mb-6">Checkout</h1>
//       {loading ? (
//         <p>Loading cart items...</p>
//       ) : (
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           {/* Your input fields */}
//           <div className="mb-4">
//             <label className="block mb-2">Total Amount</label>
//             <input
//               type="text"
//               name="totalAmount"
//               value={`₹ ${billingDetails.totalAmount}`} // Display total amount
//               readOnly
//               className="p-2 w-full bg-gray-800 border border-gray-700"
//             />
//           </div>
//           {/* Other input fields */}
//           <button type="submit" className="bg-yellow-500 text-black p-2 rounded">
//             Place Order
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import gpay from '../asstes/gpay.png';

// // const CheckoutPage = () => {
// //     const navigate = useNavigate();
// //     const location = useLocation();
  
// //     // Get total amount from the location state
// //     const { totalAmount } = location.state || { totalAmount: 0 }; 

// //     const [cartItems, setCartItems] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [billingDetails, setBillingDetails] = useState({
// //         firstName: '',
// //         lastName: '',
// //         email: '',
// //         phone: '',
// //         address: '',
// //         city: '',
// //         state: '',
// //         country: '',
// //         zip: '',
// //         totalAmount: totalAmount,
// //     });

// //     const fetchCartItems = async () => {
// //         const token = localStorage.getItem('authToken');
// //         if (!token) {
// //             alert('Please log in to checkout');
// //             navigate('/login'); // Redirect to login if not authenticated
// //             return;
// //         }

// //         try {
// //             const response = await axios.get('http://localhost:4000/api/v1/cart', {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });
// //             setCartItems(response.data.cart.products);
// //         } catch (error) {
// //             console.error('Error fetching cart items:', error);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchCartItems(); // Fetch cart items on mount
// //     }, []);

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setBillingDetails({ ...billingDetails, [name]: value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const token = localStorage.getItem('authToken');

// //         if (!token) {
// //             alert('Please log in to place an order');
// //             return;
// //         }

// //         const orderData = {
// //             products: cartItems.map(item => ({
// //                 productId: item.product ? item.product._id : null,
// //                 quantity: item.quantity,
// //             })).filter(item => item.productId !== null),
// //             totalAmount: billingDetails.totalAmount,
// //         };

// //         try {
// //             await axios.post('http://localhost:4000/api/v1/order', orderData, {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });
// //             alert('Order placed successfully!');
// //             navigate('/confirmation'); // Redirect to confirmation page
// //         } catch (error) {
// //             console.error('Error placing order:', error);
// //         }
// //     };

// const CheckoutPage = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { totalAmount } = location.state || { totalAmount: 0 };
// console.log(totalAmount);
//     const [cartItems, setCartItems] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(true);
//     const [billingDetails, setBillingDetails] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         address: '',
//         city: '',
//         state: '',
//         country: '',
//         zip: '',
//         totalAmount: totalAmount,
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const fetchCartItems = async () => {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//             alert('Please log in to checkout');
//             navigate('/login'); // Redirect to login if not authenticated
//             return;
//         }

//         try {
//             const response = await axios.get('http://localhost:4000/api/v1/cart', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setCartItems(response.data.cart.products);
//         } catch (error) {
//             console.error('Error fetching cart items:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCartItems(); // Fetch cart items on mount
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setBillingDetails({ ...billingDetails, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('authToken');

//         if (!token) {
//             alert('Please log in to place an order');
//             return;
//         }

//         const orderData = {
//             products: cartItems.map(item => ({
//                 productId: item.product ? item.product._id : null,
//                 quantity: item.quantity,
//             })).filter(item => item.productId !== null),
//             totalAmount: billingDetails.totalAmount,
//         };
//         setIsSubmitting(true); 
//     //     try {
//     //         await axios.post('http://localhost:4000/api/v1/order', orderData, {
//     //             headers: { Authorization: `Bearer ${token}` },
//     //         });
//     //         alert('Order placed successfully!');
//     //         navigate('/confirmation'); // Redirect to confirmation page
//     //     } catch (error) {
//     //         console.error('Error placing order:', error);
//     //     }
//     // };

//     try {
//         const response = await axios.post('http://localhost:4000/api/v1/order', orderData, {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//         alert('Order placed successfully!');
//         navigate('/confirmation');
//     } catch (error) {
//         setError('Error placing order. Please try again.');
//         console.error('Error placing order:', error);
//     } finally {
//         setIsSubmitting(false); // Stop submitting
//     }
// };
//     return (
//         <div className="bg-radial-white-black from-blue-900 to-black text-white px-[20px] md:px-[80px] pt-[50px]">
//             {/* Progress Bar */}
//             <div className="flex items-center justify-center mb-16">
//                 <div className="flex items-center md:w-[742px] w-full">
//                     {/* Steps */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center md:text-[50px] text-[30px] font-semibold text-black">1</div>
//                         <span className="mt-2 text-[13px] md:text-[25px] text-white font-light">Order Details</span>
//                     </div>
//                     <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border mx-4"></div>
//                     <div className="flex flex-col items-center">
//                         <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center md:text-[50px] text-[30px] font-semibold text-black">2</div>
//                         <span className="mt-2 text-[13px] md:text-[25px] text-[#ECBC56] font-light">Delivery & Payment</span>
//                     </div>
//                     <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
//                     <div className="flex flex-col items-center">
//                         <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">3</div>
//                         <span className="mt-2 text-[13px] md:text-[25px] text-white font-light">Confirmation</span>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col lg:flex-row justify-between gap-8">
//                 {/* Left Section - Billing and Delivery Details */}
//                 <div className="flex-1">
//                     {/* Billing Details */}
//                     <div className="bg-transparent mb-6 md:w-[742px] md:h-[287px] w-full h-auto">
//                         <h2 className="md:text-[50px] text-[32px] font-light mb-4">Billing Details</h2>
//                         <div className="flex flex-wrap gap-4">
//                             <input type="text" name="firstName" placeholder="First Name" value={billingDetails.firstName} onChange={handleInputChange} className="flex-1 p-2 rounded-md bg-[#000719] text-[20px] md:text-[23px] font-light text-white" />
//                             <input type="text" name="lastName" placeholder="Last Name" value={billingDetails.lastName} onChange={handleInputChange} className="flex-1 p-2 rounded-md bg-[#000719] text-[20px] md:text-[23px] font-light text-white" />
//                         </div>
//                         <input type="email" name="email" placeholder="Email Address" value={billingDetails.email} onChange={handleInputChange} className="p-2 rounded-md w-full bg-[#000719] text-[20px] md:text-[23px] font-light text-white mt-4" />
//                         <div className="flex items-center mt-4">
//                             <span className="p-2 rounded-md bg-[#000719] text-[#FFFFFF] text-[20px] md:text-[23px] font-light ml-4">+91</span>
//                             <input type="text" name="phone" placeholder="Phone Number" value={billingDetails.phone} onChange={handleInputChange} className="p-2 rounded-md w-full bg-[#000719] text-[20px] md:text-[23px] font-light text-white ml-4" />
//                         </div>
//                     </div>

//                     {/* Delivery Address */}
//                     <div className="bg-transparent md:w-[742px] md:h-[360px] w-full h-auto">
//                         <h2 className="md:text-[50px] text-[32px] font-light mb-4">Delivery Address</h2>
//                         <input type="text" name="address" placeholder="House Number And Street Name" value={billingDetails.address} onChange={handleInputChange} className="p-2 rounded-md w-full bg-[#000719] text-[20px] md:text-[23px] font-light text-white mb-4" />
//                         <input type="text" name="city" placeholder="City/Town" value={billingDetails.city} onChange={handleInputChange} className="p-2 rounded-md w-full bg-[#000719] text-[20px] md:text-[23px] font-light text-white mb-4" />
//                         <div className="flex flex-wrap gap-4 mt-4">
//                             <input type="text" name="state" placeholder="State" value={billingDetails.state} onChange={handleInputChange} className="flex-1 p-2 rounded-md bg-[#000719] text-[20px] md:text-[23px] font-light text-white" />
//                             <input type="text" name="country" placeholder="Country" value={billingDetails.country} onChange={handleInputChange} className="flex-1 p-2 rounded-md bg-[#000719] text-[20px] md:text-[23px] font-light text-white" />
//                         </div>
//                         <input type="text" name="zip" placeholder="Pin Code" value={billingDetails.zip} onChange={handleInputChange} className="p-2 rounded-md w-full bg-[#000719] text-[20px] md:text-[23px] font-light text-white mb-4" />
//                     </div>

//                     {/* Payment Option */}
//                     <div className="bg-transparent w-full md:w-[742px] rounded-lg mt-6 flex flex-col md:pb-[100px]">
//                         <div className='w-full'>
//                             <h2 className="md:text-[50px] text-[32px] font-light">Pay With</h2>
//                         </div>
//                         <div className='bg-[#000719]'>
//                             <img src={gpay} alt="GPay" className="md:w-[350px] md:ml-[200px] w-full h-auto" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section - Order Summary */}
//                 <div className="md:w-[400px] bg-[#000719] p-5 rounded-lg mt-4">
//                     <h2 className="text-[40px] font-light">Order Summary</h2>
//                     {loading ? (
//                         <p>Loading...</p>
//                     ) : (
//                         <div>
//                             {cartItems.map((item) => (
//                                 <div key={item.product._id} className="flex justify-between mb-4">
//                                     <div className="flex flex-col">
//                                         <span className="text-[18px] font-light">{item.product.name}</span>
//                                         <span className="text-[14px] font-light">Qty: {item.quantity}</span>
//                                     </div>
//                                     <span className="text-[18px] font-light">{item.product.price * item.quantity}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                     <div className="flex justify-between border-t mt-4 pt-4">
//                         <span className="font-light text-[18px]">Total</span>
//                         <span className="font-light text-[18px]">{totalAmount}</span>
//                     </div>
//                     <button 
//                         className={`w-full bg-[#ECBC56] text-black rounded-md py-2 mt-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} 
//                         onClick={handleSubmit} 
//                         disabled={isSubmitting}>
//                         {isSubmitting ? 'Processing...' : 'Place Order'}
//                     </button>
//                     {/* <button className="w-full bg-[#ECBC56] text-black rounded-md py-2 mt-4" onClick={handleSubmit}>
//                         Place Order
//                     </button> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CheckoutPage;


import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { totalAmount } = location.state || { totalAmount: 0 };
    const userId = localStorage.getItem('userId') 
    const [cartItems, setCartItems] = useState([]);
    const [billingDetails, setBillingDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        shippingInfo:{
        address: '',
        city: '',
        state: '',
        country: '',
        zip: '',},
        user:userId,
        totalAmount: totalAmount,
    });
    const [loading, setLoading] = useState(true);

console.log(userId)
    const fetchCartItems = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            alert('Please log in to checkout');
            navigate('/login');
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
        fetchCartItems();
    }, []);

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setBillingDetails({ ...billingDetails, [name]: value });
    // };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        if (['address', 'city', 'state', 'country', 'zip'].includes(name)) {
            setBillingDetails({
                ...billingDetails,
                shippingInfo: { ...billingDetails.shippingInfo, [name]: value },
            });
        } else {
            setBillingDetails({ ...billingDetails, [name]: value });
        }
    };
    

    const loadRazorpayScript = () => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                reject(new Error('Failed to load Razorpay script'));
            };
            document.body.appendChild(script);
        });
    };
    
    // const handlePayment = async () => {
    //     const token = localStorage.getItem('authToken');
    //     const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
    
    //     if (!token) {
    //         alert('Please log in to place an order');
    //         return;
    //     }
    
    //     if (!userId) {
    //         alert('User information is missing. Please log in again.');
    //         return;
    //     }
    
    //     const orderData = {
    //         amount: totalAmount,
    //         user: userId, // Set the userId here
    //         // Add other necessary order details here
    //     };
    
    //     try {
    //         // Create a payment order on the backend
    //         const response = await axios.post('http://localhost:4000/api/v1/payment/process', orderData, {
    //             headers: { Authorization: `Bearer ${token}` },
    //         });
    
    //         const { orderId } = response.data;
    
    //         // Load the Razorpay script
    //         await loadRazorpayScript();
    
    //         // Open Razorpay payment popup
    //         const options = {
    //             key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay key
    //             amount: totalAmount * 100, // Convert to paise
    //             currency: "INR",
    //             name: "Your Store Name",
    //             description: "Test Transaction",
    //             order_id: orderId,
    //             handler: async (response) => {
    //                 const paymentData = {
    //                     orderId: orderId,
    //                     paymentId: response.razorpay_payment_id,
    //                     signature: response.razorpay_signature,
    //                     orderData: {
    //                         ...billingDetails,
    //                         products: cartItems.map(item => ({
    //                             productId: item.product._id,
    //                             quantity: item.quantity,
    //                         })),
    //                     },
    //                 };
    
    //                 // Call backend to verify payment
    //                 try {
    //                     await axios.post('http://localhost:4000/api/v1/callback', paymentData, {
    //                         headers: { Authorization: `Bearer ${token}` },
    //                     });
    //                     alert('Payment successful!');
    //                     navigate('/confirmation');
    //                 } catch (error) {
    //                     console.error('Error verifying payment:', error);
    //                     alert('Payment verification failed. Please try again.');
    //                 }
    //             },
    //             prefill: {
    //                 name: `${billingDetails.firstName} ${billingDetails.lastName}`,
    //                 email: billingDetails.email,
    //                 contact: billingDetails.phone,
    //             },
    //             theme: {
    //                 color: "#F37254", // Customize the theme color
    //             },
    //         };
    
    //         const razorpay = new window.Razorpay(options);
    //         razorpay.open();
    //     } catch (error) {
    //         console.error('Error initiating payment:', error);
    //         alert('Error initiating payment. Please try again.');
    //     }
    // };
    const handlePayment = async () => {
        const token = localStorage.getItem('authToken');
        console.log('Token:', token);
        const userId = localStorage.getItem('userId');
    console.log(userId);
        if (!token || !userId) {
            alert('Please log in to place an order');
            return;
        }
    
        const orderData = {
            amount: totalAmount,
            user: userId,
            shippingInfo: billingDetails.shippingInfo, // Include shipping info
            products: cartItems.map(item => ({
                productId: item.product._id,
                quantity: item.quantity,
            })),
            totalAmount: totalAmount,
        };
    
        try {
            const response = await axios.post('http://localhost:4000/api/v1/payment/process', orderData, {
                headers: { Authorization: `Bearer ${token}` },
            });
    
            const { orderId } = response.data;
    
            await loadRazorpayScript();
    
            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                amount: totalAmount * 100,
                currency: "INR",
                name: "Your Store Name",
                description: "Test Transaction",
                order_id: orderId,
                handler: async (response) => {
                    const paymentData = {
                        orderId: orderId,
                        paymentId: response.razorpay_payment_id,
                        signature: response.razorpay_signature,
                        orderData: {
                            ...billingDetails,
                            products: cartItems.map(item => ({
                                productId: item.product._id,
                                quantity: item.quantity,
                            })),
                        },
                    };
    
                    try {
                        await axios.post('http://localhost:4000/api/v1/callback', paymentData, {
                            headers: { Authorization: `Bearer ${token}` },
                        });
                        alert('Payment successful!');
                        navigate('/confirmation');
                    } catch (error) {
                        console.error('Error verifying payment:', error);
                        alert('Payment verification failed. Please try again.');
                    }
                },
                prefill: {
                    name: `${billingDetails.firstName} ${billingDetails.lastName}`,
                    email: billingDetails.email,
                    contact: billingDetails.phone,
                },
                theme: {
                    color: "#F37254",
                },
            };
    
            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error('Error initiating payment:', error);
            alert('Error initiating payment. Please try again.');
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePayment();
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
    <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} required />
    <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} required />
    <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
    <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} required />

    {/* Shipping Information Fields */}
    <input type="text" name="address" placeholder="Address" onChange={handleInputChange} required />
    <input type="text" name="city" placeholder="City" onChange={handleInputChange} required />
    <input type="text" name="state" placeholder="State" onChange={handleInputChange} required />
    <input type="text" name="country" placeholder="Country" onChange={handleInputChange} required />
    <input type="text" name="zip" placeholder="Zip Code" onChange={handleInputChange} required />

    <button type="submit">Pay Now</button>
</form>

        </div>
    );
};

export default CheckoutPage;
