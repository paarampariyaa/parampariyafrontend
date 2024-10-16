import React, { useState, useEffect } from 'react';

const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the spinner after 2 seconds (2000ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null; // You can replace this with any component or return null to hide the spinner
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black bg-opacity-80 backdrop-blur-md">
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-dashed border-transparent border-t-[#ECBC56] border-r-[#ECBC56] rounded-full animate-spin-fast"></div>
        {/* Middle ring */}
        <div className="absolute inset-0 w-12 h-12 m-2 border-4 border-dashed border-transparent border-b-[#ECBC56] border-l-[#ECBC56] rounded-full animate-spin-slow"></div>
        {/* Inner ring */}
        <div className="absolute inset-0 w-8 h-8 m-4 border-4 border border-transparent border-t-[#ECBC56] rounded-full animate-spin-reverse"></div>
      </div>
    </div>
  );
};

export default Spinner;
