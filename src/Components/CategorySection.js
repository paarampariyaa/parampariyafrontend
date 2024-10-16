// // import React from 'react';
// // import grains from '../asstes/grains.png'; // Ensure the path is correct

// // const CategorySection = ({ categoryName ,description}) => {
// //   return (
// //     <div className="bg-radial-white-black w-full h-auto py-4">
// //       {/* Container for Category Name and Description */}
// //       <div className="relative w-full  md:pl-[40px] flex flex-col md:flex-row justify-between items-center text-white rounded-lg mb-8">
// //         <h2 className="text-yellow-400 font-bold md:text-[40px] text-[20px] mb-4 md:mb-0 text-center md:text-left">
// //         {categoryName}
// //         </h2>
// //         <p className=" text-[16px] w-full md:w-[50%] text-center md:text-left  md:px-0">
// //        {  description}
// //         </p>
// //       </div>

// //       {/* Image with Overlay */}
// //       <div className="relative">
// //         <img
// //           src={grains} // Ensure you have the correct path to the image
// //           alt="Millets"
// //           className="w-full h-auto object-cover rounded-lg shadow-md"
// //         />
// //         {/* Play Button Overlay */}
// //         {/* <div className="absolute inset-0 flex items-center justify-center">
// //           <button className="bg-white bg-opacity-10 text-gray-800 rounded-full p-4 shadow-lg hover:bg-opacity-75 transition duration-300 ease-in-out">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-8 w-8"
// //               viewBox="0 0 24 24"
// //               fill="currentColor"
// //               stroke="none"
// //             >
// //               <path d="M8 5v14l11-7z" /> 
// //             </svg>
// //           </button>
// //         </div> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategorySection;
// // import React from 'react';
// // import { useLocation } from 'react-router-dom';
// // import grains from '../asstes/grains.png'; // Ensure the path is correct

// // const CategorySection = () => {
// //   const location = useLocation();
// //   const { categoryName, description } = location.state || {};

// //   return (
// //     <div className="bg-radial-white-black w-full h-auto py-4">
// //       {/* Container for Category Name and Description */}
// //       <div className=" relative w-full  md:pl-[40px] flex flex-col md:flex-row justify-between items-center text-white rounded-lg mb-8">
// //         <h2 className="text-[#ECBE56] font-bold text-[23px] md:text-[40px] mb-4 md:mb-0 text-center md:text-left">
// //         {categoryName || "Millets"}
// //         </h2>
// //         <p className=" px-[5px] text-[12px] md:text-[16px]  w-full md:w-[40%] text-center md:text-left  md:px-0">
// //         {description || "Essential millets that capture the flavors of Indian cuisine"}
// //         </p>
// //       </div>

// //       {/* Image with Overlay */}
// //       <div className="relative">
// //         <img
// //           src={grains} // Ensure you have the correct path to the image
// //           alt="Millets"
// //           className="w-full h-auto object-cover rounded-lg shadow-md"
// //         />
// //         {/* Play Button Overlay */}
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <button className="bg-white bg-opacity-10 text-gray-800 rounded-full p-4 shadow-lg hover:bg-opacity-75 transition duration-300 ease-in-out">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-8 w-8"
// //               viewBox="0 0 24 24"
// //               fill="currentColor"
// //               stroke="none"
// //             >
// //               <path d="M8 5v14l11-7z" /> {/* Play Button Icon */}
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategorySection;
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useLocation } from 'react-router-dom'; // Import useLocation

// // const CategoryList = () => {
// //   const [categories, setCategories] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Get the state passed from Header1
// //   const location = useLocation();
// //   const selectedCategoryName = location.state?.categoryName; // Safely access the category name
// //   const selectedCategoryDescription = location.state?.categoryDescription; // Safely access the category description

// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         // Fetch categories
// //         const categoriesResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/categories`);
// //         const fetchedCategories = categoriesResponse.data.categories.map(category => ({
// //           id: category._id,
// //           name: category.title,
// //           description: category.subtitle || "",
// //           images: category.images || []
// //         }));
// //         setCategories(fetchedCategories);
// //       } catch (error) {
// //         console.error('Error fetching categories:', error);
// //         setError('Failed to fetch categories');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCategories();
// //   }, []);

// //   if (loading) return <p>Loading categories...</p>;
// //   if (error) return <p>{error}</p>;

// //   // Filter categories to display only the selected one
// //   const filteredCategory = categories.find(category => category.name === selectedCategoryName);

// //   return (
// //     <div className="bg-radial-white-black w-full h-auto py-4">
// //       {filteredCategory ? (
// //         <div key={filteredCategory.id} className="">
// //           <div className='relative w-full  md:pl-[40px] flex flex-col md:flex-row justify-between items-center text-white rounded-lg mb-8' >
// //           <h2 className="text-[#ECBE56] font-bold text-[23px] md:text-[40px] mb-4 md:mb-0 text-center md:text-left">{filteredCategory.name}</h2>
// //           <p className='px-[5px] text-[12px] md:text-[18px]  w-full md:w-[40%] text-center md:text-center  md:px-0' >{filteredCategory.description}</p>
// //             </div>
          
// //           {filteredCategory.images.length > 0 && (
// //             <div className='relative' >
// //               <img
// //               src={filteredCategory.images[0].url}
// //               alt={filteredCategory.images[0].public_id}
// //               className="w-full h-[639px] object-cover rounded-lg shadow-md"
// //             />
// //               </div>
// //           )}
// //         </div>
// //       ) : (
// //         <p className='text-xl p-4 ' >No category selected</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default CategoryList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const CategoryList = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const location = useLocation();
//   const selectedCategoryName = location.state?.categoryName;

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const categoriesResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/categories`);
        
//         console.log('Categories Response:', categoriesResponse.data);  // Add this for debugging
        
//         const fetchedCategories = categoriesResponse.data.categories.map(category => ({
//           id: category._id,
//           name: category.title,
//           description: category.subtitle || "",
//           images: category.images || [] 
//         }));
//         setCategories(fetchedCategories);
//         console.log(fetchedCategories )
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//         setError('Failed to fetch categories');
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchCategories();
//   }, []);
  

//   if (loading) return <p>Loading categories...</p>;
//   if (error) return <p>{error}</p>;

//   const filteredCategory = categories.find(category => category.name === selectedCategoryName);

//   // Debugging: log the filtered category and images array
//   if (filteredCategory) {
//     console.log('Selected Category:', filteredCategory);
//     console.log('Images:', filteredCategory.images); 
//     if (filteredCategory.images.length > 0) {
//       console.log('Image URL:', filteredCategory.images.map(image => image.url)); // Log the images URL
//     } else {
//       console.log('No images found for this category');
//     }
//   }

//   return (
//     <div className="bg-radial-white-black w-full h-auto py-4">
//       {filteredCategory ? (
//         <div key={filteredCategory.id}>
//           <div className='relative w-full md:pl-[40px] flex flex-col md:flex-row justify-between items-center text-white rounded-lg mb-8'>
//             <h2 className="text-[#ECBE56] font-bold text-[23px] md:text-[40px] mb-4 md:mb-0 text-center md:text-left">
//               {filteredCategory.name}
//             </h2>
//             <p className='px-[5px] text-[12px] md:text-[18px] w-full md:w-[40%] text-center md:text-center md:px-0'>
//               {filteredCategory.description}
//             </p>
//           </div>

//           {filteredCategory.images.length > 0 && (
//             <div className="relative">
              
//               {/* Loop through images array */}
//               {filteredCategory.images.map((image) => (
//                 <img
//                   key={image.public_id}
//                   src={image.url}
//                   alt={image.public_id}
//                   className="w-full h-[639px] object-cover rounded-lg shadow-md"
//                 />
//               ))}
//             </div>
//           )}

//         </div>
//       ) : (
//         <p className='text-xl p-4'>No category selected</p>
//       )}
//     </div>
//   );
// };

// export default CategoryList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom'; // Import useLocation

// const CategoryList = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get the state passed from Header1
//   const location = useLocation();
//   const selectedCategoryName = location.state?.categoryName; // Safely access the category name
//   const selectedCategoryDescription = location.state?.categoryDescription; // Safely access the category description

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         // Fetch categories
//         const categoriesResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/categories`);
        
//         // Map the response data to the desired structure
//         const fetchedCategories = categoriesResponse.data.categories.map(category => ({
//           id: category._id,
//           name: category.title,
//           description: category.subtitle || "",
//           images: category.images || [] // Keep the images array intact
//         }));
//         setCategories(fetchedCategories);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//         setError('Failed to fetch categories');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   if (loading) return <p>Loading categories...</p>;
//   if (error) return <p>{error}</p>;

//   // Filter categories to display only the selected one
//   const filteredCategory = categories.find(category => category.name === selectedCategoryName);



//   return (
//     <div className="bg-radial-white-black w-full h-auto py-4">
//       {filteredCategory ? (
//         <div key={filteredCategory.id} className="">
//           <div className='relative w-full md:pl-[40px] flex flex-col md:flex-row justify-between items-center text-white rounded-lg mb-8'>
//             <h2 className="text-[#ECBE56] font-bold text-[23px] md:text-[40px] mb-4 md:mb-0 text-center md:text-left">
//               {filteredCategory.name}
//             </h2>
//             <p className='px-[5px] text-[12px] md:text-[18px] w-full md:w-[40%] text-center md:text-center md:px-0'>
//               {filteredCategory.description}
//             </p>
//           </div>
//           {filteredCategory.images.map(image => (
//         <img key={image._id} src={image.url} alt={filteredCategory.title} />
//       ))}


//         </div>
//       ) : (
//         <p className='text-xl p-4'>No category selected</p>
//       )}
//     </div>
//   );
// };

// export default CategoryList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Import useLocation

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the state passed from Header1
  const location = useLocation();
 // Safely access the category name
// Safely access the category description
 const selectedCategoryId = location.state?.categoryId

   useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories
        const categoriesResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/categories`);
        
        // Map the response data to the desired structure
        const fetchedCategories = categoriesResponse.data.categories.map(category => ({
          id: category._id,
          name: category.title,
          description: category.subtitle || "",
          images: category.images || [] // Keep the images array intact
        }));
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  // Filter categories to display only the selected one
  const filteredCategory = categories.find(category => category.id === selectedCategoryId);
console.log(filteredCategory)


  return (
    <div className="bg-radial-white-black w-full h-auto py-4">
      {filteredCategory ? (
        <div key={filteredCategory.id} className="">
          <div className='relative w-full md:pl-[40px] flex flex-col md:flex-row justify-between items-center text-white rounded-lg mb-8'>
            <h2 className="text-[#ECBE56] font-bold text-[23px] md:text-[40px] mb-4 md:mb-0 text-center md:text-left">
              {filteredCategory.name}
            </h2>
            <p className='px-[5px] text-[12px] md:text-[18px] w-full md:w-[40%] text-center md:text-center md:px-0'>
              {filteredCategory.description}
            </p>
          </div>
          {filteredCategory.images.map(image => (
        <img key={image._id} src={image.url} alt={filteredCategory.title}  className='w-full h-[550px] '/>
      ))}


        </div>
      ) : (
        <p className='text-xl p-4'>No category selected</p>
      )}
    </div>
  );
};

export default CategoryList;