
import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiHome, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from '../../asstes/paarampariyaa_logo.png';
import lgLogo from '../../asstes/logo.png';
import param from '../../asstes/paramname.png';
import Spinner from "../Spinner";
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';


const Header1 = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      setIsLoading(true); // Move this inside the function
      try {
        const categoriesResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/categories`);
        const fetchedCategories = categoriesResponse.data.categories.map(category => ({
          id: category._id,
          name: category.title,
         
        }));
        setCategories(fetchedCategories);

        const productsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/products/all`);
        setAllProducts(productsResponse.data.products);
      } catch (error) {
        console.error('Error fetching categories and products:', error);
      } finally {
        setIsLoading(false); // Ensure this is called after the try/catch block
      }
    };
    
    fetchCategoriesAndProducts();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/logout`);
      localStorage.removeItem('email');
      localStorage.removeItem('userId');
      setEmail(null);
      setShowDropdown(false);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Failed to log out. Please try again.'); 
    }
  };

  const handleCategoryClick = (id, name) => {
    
    navigate(`/category/${id}`, { state: { categoryId: id, categoryName: name } });
  };

  // const handleTitleClick = (productId) => {
  //   navigate(`/product?productId=${encodeURIComponent(productId)}`);
  //   setIsMenuOpen(false);
  // };
  // ... existing code ...
const handleTitleClick = (productId) => {
  navigate(`/product?productId=${encodeURIComponent(productId)}`);
  setIsMenuOpen(false); // Ensure the menu closes after a product is clicked
};
// ... existing code ...

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setTimeout(() => {
      setHoveredItem(null);
    }, 10000);
  };

  const filteredProducts = allProducts.filter(product => product.category === hoveredItem);

  const dropdownStyles = {
    transition: 'opacity 10000ms ease-in-out, transform 10000ms ease-in-out',
    opacity: isDropdownVisible ? 1 : 0,
    transform: isDropdownVisible ? 'scale(1)' : 'scale(0.95)',
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
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
      {isLoading?(<Spinner/>) :null }
  {/* Top Header Section */}
  <div className="bg-[#000E21] flex flex-col md:flex-row text-white px-[20px] md:px-[80px]">
  {/* Store Text and Icons Section */}
  <div className="flex flex-col md:flex-row justify-between items-center w-full mt-0">
    
    {/* Store Text on the left for large screens */}
    <div onClick={() => navigate('/store')} className="hidden md:flex flex-row items-center mb-2 md:mb-0 cursor-pointer">
      <FiHome className="h-5 w-5 mr-1" />
      <span className="font-medium text-white">Store</span>
    </div>

    {/* Logo centered on all screens */}
    <div  onClick={() => navigate('/')}  className="flex justify-center w-full my-4 cursor-pointer">
      <img src={Logo} alt="Param Logo" className="h-[50px] md:h-[80px]" />
    </div>

    {/* Icons section on the right for large screens */}
    <div className="hidden md:flex flex-row space-x-4 items-center">
      <FiShoppingCart onClick={() => navigate('/cart')} className="text-2xl cursor-pointer" />
      {email ? (
        <div className="relative">
          <FiUser className="text-2xl cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
          {showDropdown && (
            <div className="absolute right-0   md:right-[0px] md:w-[120px] mt-4 w-[120px] bg-white text-black rounded-lg shadow-lg z-50">
              <button className="w-full px-4 py-2 text-sm  cursor-pointer flex justify-center items-center  hover:bg-gray-200 hover:rounded-t-lg" onClick={handleLogout}>
                Logout
              </button>
              <hr className="w-full h-[2px] bg-gray-200" />
              <button
        className=" w-full px-4 py-2 text-sm cursor-pointer flex justify-center items-center mt-1  hover:bg-gray-200 hover:rounded-b-lg"
        onClick={() => {
          setShowDropdown(false);
          navigate('/order');
        }}
      >
        My Orders
      </button>
            </div>
          )}
        </div>
      ) : (
        <FiUser className="text-2xl cursor-pointer" onClick={() => navigate('/login')} />
      )}
    </div>

    {/* Mobile layout */}
    <div className="flex justify-between w-full md:hidden">
      {/* Store text on the left for mobile */}
      <div onClick={() => navigate('/store')} className="flex flex-row items-center cursor-pointer">
        <FiHome className="h-5 w-5 mr-1" />
        <span className="font-medium text-white">Store</span>
      </div>

      {/* Icons on the right for mobile */}
      <div className="flex flex-row space-x-4 items-center">
        <FiShoppingCart onClick={() => navigate('/cart')} className="text-2xl cursor-pointer" />
        {email ? (
          <div className="relative">
            <FiUser className="text-2xl cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
            {showDropdown && (
              <div className="absolute right-0   md:right-[0px] md:w-[120px] mt-4 w-[120px] bg-white text-black rounded-lg shadow-lg z-50">
                <button className="w-full px-4 py-2 text-sm  cursor-pointer flex justify-center items-center  hover:bg-gray-200 hover:rounded-t-lg" onClick={handleLogout}>
                  Logout
                </button>
                <hr className="w-full h-[2px] bg-gray-200" />
                <button
             className=" w-full px-4 py-2 text-sm cursor-pointer flex justify-center items-center mt-1  hover:bg-gray-200 hover:rounded-b-lg"
             onClick={() => {
             setShowDropdown(false);
             navigate('/order');
        }}
      >
        My Orders
      </button>
              </div>
            )}
          </div>
        ) : (
          <FiUser className="text-2xl cursor-pointer" onClick={() => navigate('/login')} />
        )}
        <FiMenu className="text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
    </div>
  </div>
</div>


  {/* Navigation Header */}
  
  <div className="relative  ">
  <nav className="bg-[#000719] text-white text-xl  px-4 py-1  items-center relative z-20">
          <div className="container mx-auto">
            <ul className="hidden md:flex gap-12  text-[10px] md:text-[16px] whitespace-nowrap justify-center">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  // Remove onMouseLeave from here
                >
                  {/* Navigation item */}
                  <span className="hover:text-[#ECBC56] cursor-pointer "
                    onClick={() => handleCategoryClick(item.id, item.name)}>
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dropdown container for all categories */}
          <div 
            className={`absolute left-0 w-full bg-[#000719] rounded-lg shadow-lg mt-0 z-10 md:px-4 overflow-hidden transition-[max-height, opacity] duration-[3000ms] ease-in-out ${hoveredItem ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
           // Keep dropdown visible

           onMouseEnter={() => setDropdownVisible(true)} // Ensure dropdown stays visible on hover
           onMouseLeave={() => // set timeout after 3 sec
                      setTimeout(() => {
                        setHoveredItem(null);
                        setDropdownVisible(false);
                      }, 1500)}
            
          >
            <div className="container mx-auto">
              <ul className="flex flex-col text-white text-sm  py-4">
                
                 { filteredProducts.map((product, productIndex) => (
                    <li
                      key={productIndex}
                      className="mb-2 hover:text-yellow-500 cursor-pointer"
                      onClick={() => handleTitleClick(product._id)}
                    >
                      {product.name}
                    </li>
                  ))}
               
              </ul>
            </div>
          </div>
        </nav>

        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute bg-[#000719] text-white w-full flex flex-col py-2 z-30 sm:hidden">
          {categories.map((item, index) => (
            <div key={index}>
              {/* Navigation item */}
              <div
                className="px-4 py-2 hover:bg-gray-600 cursor-pointer "
                onClick={() => setHoveredItem(hoveredItem === item.name ? null : item.name)}
              >
                {item.name}
              </div>
        
              {/* Dropdown container with transition */}
              <div
                className={`bg-[#000719] pl-6 overflow-hidden transition-[max-height, opacity] duration-[2500ms] ease-in-out max-h-0 opacity-0 ${
                  hoveredItem === item.name ? "max-h-96 opacity-100" : ""
                }`}
              >
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, productIndex) => (
                    <span
                      key={productIndex}
                      className="block py-1 hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleTitleClick(product._id)}
                    >
                      {product.name}
                    </span>
                  ))

                ) : (
                  <span className="block py-1 text-gray-400">No items available</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        )}
      </div>
</header>


  );
};

export default Header1;
