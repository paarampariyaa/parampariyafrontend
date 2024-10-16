
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
// import powder from '../asstes/idli.png';
// import tea from '../asstes/tea.jpeg';

// const BestSellers = () => {
//   const navigate = useNavigate(); // Initialize navigate

//   return (
//     <div className=" bg-radial-white-black min-h-screen flex flex-col items-center justify-center px-[20px] md:px-[80px]">
//       <div className=" text-center items-center justify-center py-8">
//         <h1 className="text-white text-[24px] md:text-4xl font-semibold mb-3">Our Best Sellers</h1>
//         <div className='mx-auto border-dashed border-t-2 border-[#ECBC56] w-[230px] md:w-[500px] mb-[20px]'></div>
//         <p className="text-white text-sm max-w-xl mx-auto">
//           Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish
//         </p>
//       </div>

//       <div onClick={() => navigate('/category')} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
//         {/* Product Card */}
//         {Array.from({ length: 4 }, (_, index) => (
//           <div
//             key={index}
//             onClick={() => navigate('/category')}
//             className="md:p-[30px] border-2 border-transparent rounded-[20px] bg-gradient-to-b from-[#041423a] to-blue-900 text-white relative shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(0,0,0,1)] transition-transform transition-shadow duration-300 transform hover:scale-105 cursor-pointer" // cursor-pointer applied to the product card only
//           >
//             <h2 className="text-[20px] px-[15px] md:px-[0px] md:text-[36px] pt-[10px] md:pt-[0px] font-semibold text-center gap-[10px]">
//               Kodo Millet
//             </h2>
//             <p className="text-[14px] px-[15px] md:px-[0px] md:text-[15px] text-center pt-[5px] md:pt-[0px]">
//               Discover the rich flavor of millet from the heart of India
//             </p>

//             <div className="flex flex-row md:flex-row gap-[10px] pt-[25px] px-[15px] md:px-[0px] items-center justify-center">
//               <button
//                 className="flex items-center justify-center bg-white md:w-[195px] md:h-[39px] w-[159px] h-[39px] text-[#041423] font-normal py-[10px] px-[20px] rounded-[5px] text-[16px]"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Stop event bubbling
//                   navigate('/category'); // Navigate to Category page
//                 }}
//               >
//                 Explore
//               </button>

//               <button
//                 className="flex items-center justify-center md:w-[195px] md:h-[39px] w-[159px] h-[39px] bg-[#041423] text-white font-normal py-2 px-4  text-[16px] border-2 border-white"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Stop event bubbling
//                   navigate('/store'); // Navigate to Store page
//                 }}
//               >
//                 Buy Now
//               </button>
//             </div>

//             <div className="flex justify-center items-center md:pt-[38px] pt-[30px]">
//               <img className="h-auto w-auto md:w-[520px] md:h-[400px]" src={tea} alt="Kodo Millet" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSellers;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BestSellers = () => {
  const navigate = useNavigate();
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const token = localStorage.getItem('token');
        
        // Fetch categories from backend
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { categories } = response.data;
       

        // Filter only best sellers (where isbestseller is true)
        const filteredBestSellers = categories.filter(category => category.isbestseller === true);

        if (filteredBestSellers.length > 0) {
          setBestSellers(filteredBestSellers);
        } else {
          setError('No best seller categories found');
        }
      } catch (err) {
        console.error('Error fetching best sellers:', err);
        setError('Failed to load best sellers');
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  const handleCategoryClick = (id, name) => {
    
    navigate(`/category/${id}`, { state: { categoryId: id, categoryName: name } });
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-radial-white-black min-h-screen flex flex-col items-center justify-center px-[20px] md:px-[80px]">
      <div className="text-center items-center justify-center py-8">
        <h1 className="text-white text-[24px] md:text-4xl font-semibold mb-3">Our Best Sellers</h1>
        <div className='mx-auto border-dashed border-t-2 border-[#ECBC56] w-[230px] md:w-[500px] mb-[20px]'></div>
        <p className="text-white text-sm max-w-xl mx-auto">
          Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {bestSellers.map((category) => (
          <div
            key={category._id}
            onClick={() => handleCategoryClick(category._id, category.title)}
            className="md:p-[30px] border-2 border-transparent rounded-[20px] bg-gradient-to-b from-[#041423a] to-blue-900 text-white relative shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(0,0,0,1)] transition-transform transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
          >
            <h2 className="text-[20px] px-[15px] md:px-[0px] md:text-[36px] pt-[10px] md:pt-[0px] font-semibold text-center gap-[10px]">
              {category.title}
            </h2>
            <p className="text-[14px] px-[15px] md:px-[0px] md:text-[15px] text-center pt-[5px] md:pt-[0px]">
              {category.subtitle}
            </p>

            <div className="flex flex-row md:flex-row gap-[10px] pt-[25px] px-[15px] md:px-[0px] items-center justify-center">
              <button
                className="flex items-center justify-center bg-white md:w-[195px] md:h-[39px] w-[159px] h-[39px] text-[#041423] font-normal py-[10px] px-[20px] rounded-[5px] text-[16px]"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/category/${category._id}`);
                }}
              >
                Explore
              </button>

              <button
                className="flex items-center justify-center md:w-[195px] md:h-[39px] w-[159px] h-[39px] bg-[#041423] text-white font-normal py-2 px-4 text-[16px] border-2 border-white"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/store');
                }}
              >
                Buy Now
              </button>
            </div>

            <div className="flex justify-center items-center md:pt-[38px] pt-[30px]">
              <img
                className="h-auto w-auto md:w-[520px] md:h-[400px]"
                src={category.bsimages[0]?.url || ''}
                alt={category.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
