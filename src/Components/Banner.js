// import React from 'react';
// import banner from '../asstes/banner.png'
// const Banner = () => {
//   return (
//     <div className="w-full  md:h-[621px] overflow-hidden">
//       <img
//         src={banner} // Replace with your image URL
//         alt="Banner"
//         className="object-fill w-full  h-[231px] md:h-full"
//       />
   
//     </div>
//   );
// };

// export default Banner;/
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
  const [banners, setBanners] = useState([]);

  // Fetch banners from the backend
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/banners`); // API endpoint to get banners
        setBanners(response.data.banners);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    
    fetchBanners();
  }, []);

  return (
    <div className="w-full md:h-[621px] overflow-hidden">
      {banners.map((banner) => (
        <div key={banner._id} className="banner-item">
          {/* Clicking the image navigates to the URL from the title */}
          <a href={banner.title} target="_blank" rel="noopener noreferrer">
            <img
              src={banner.image.url} // Backend image URL
              alt="Banner"
              className="object-fill w-full h-[231px] md:h-full"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Banner;
