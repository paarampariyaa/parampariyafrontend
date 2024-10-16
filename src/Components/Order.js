
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleImg from '../asstes/SingleImage.png'; // Ensure this path is correct
import Header1 from './Header/Header1';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchOrderItems = async () => {
        const token = localStorage.getItem('authToken');

        if (!token) {
            toast.error('Please log in to view your orders');
            return;
        }

        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/orders/me`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.data.success) {
                const orderDetails = await Promise.all(
                    response.data.orders.map(async (order) => {
                        const productsWithDetails = await Promise.all(
                            order.products.map(async (product) => {
                                const productResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/product/${product.productId}`);
                                if (productResponse.data.success) {
                                    return {
                                        ...product,
                                        name: productResponse.data.product.name,
                                        image: productResponse.data.product.images[0]?.url,
                                    };
                                }
                               
                                return product;

                            })
                        );
                        return { ...order, products: productsWithDetails };
                    })
                );

                setOrders(orderDetails);
            } else {
                setError('No orders found.');
            }
        } catch (error) {
            console.error('Error fetching order items:', error);
            setError('Failed to load orders. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrderItems(); // Fetch order items on mount
    }, []);
    console.log(orders)

    const getOrderStatusClass = (status) => {
        switch (status) {
            case 'Order Confirmed':
                return 'bg-[#ECBC56]';
            case 'Shipment Started':
                return 'bg-blue-500';
            case 'Delivered':
                return 'bg-green-500';
            default:
                return 'bg-gray-500';
        }
    };

    const getProgressPercentage = (status) => {
        switch (status) {
            case 'Delivered':
                return 100;
            case 'Shipment Started':
                return 66;
            case 'Order Confirmed':
                return 33;
            default:
                return 0;
        }
    };

    return (
        <div className="bg-radial-white-black from-blue-900 to-black text-white w-full h-full px-6 md:px-16 py-10">
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
            <h2 className="md:text-4xl text-3xl font-bold mb-6 text-[#ECBC56] text-center md:text-left">My Orders</h2>

            {loading ? (
                <p className="text-center">Loading orders...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : orders.length === 0 ? (
                <p className="text-center text-xl mt-10">No orders placed yet</p>
            ) : (
                orders.map((order) => (
                    order.products.map((product) => (
                        <div 
                            key={product.productId}
                            className="bg-[#041423] rounded-lg mb-6 flex flex-col md:flex-row items-start md:items-center p-4 md:p-8 w-full h-auto md:w-[700px]"
                        >
                            <img
                                src={product.image || SingleImg}
                                alt={product.name || "Product"}
                                className="w-24 h-24 object-cover rounded-lg mr-4"
                            />
                            <div>
                                <h3 className="text-2xl md:text-3xl font-semibold">{product.name}</h3>
                                <p className="mt-2 text-lg">Quantity: {product.quantity}</p>
                            </div>

                            {/* Order Status Tracking */}
                            <div className="mt-4 md:ml-auto">
                                <p className="text-lg">Order Status: {order.orderStatus}</p>
                                <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
                                    <div
                                        className={`h-4 rounded-full ${getOrderStatusClass(order.orderStatus)}`}
                                        style={{ width: `${getProgressPercentage(order.orderStatus)}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))
                ))
            )}
        </div>
    );
};

export default Order;