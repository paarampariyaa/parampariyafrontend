import React, { useState } from 'react';
import innerLogo from '../asstes/innerLogo.png';
import OuterImage from '../asstes/outerImage.png';
import apos from '../asstes/apos.png';
import param from '../asstes/paramnam.png';
import axios from 'axios';
const AboutUs = React.forwardRef((props, ref) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // Added for success message
  const token = localStorage.getItem('authToken');
  const handleSubmitComment =  () => {
    if (!comment) {
      setError('Please enter a comment before submitting.');
      return;
    }
    setError('');
    setModalOpen(true);

  };

  const handleSubmitFeedback = async () => {
    if (!comment) {
      setError('Please enter a comment before submitting.');
      return;
    }
    
    // Open the modal if a comment is entered
    setModalOpen(true); 

    setLoading(true); // Start loading state
    setError(''); // Clear previous errors

    try {
      // Axios POST request with token in headers
      const response = await axios.post(
        '${process.env.REACT_APP_BACKEND_URL}/api/v1/feedback',
        {
          name: reviewerName,
          mailid: email,
          phoneno: phone,
          message: comment,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Attach token here
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        // Handle success response
        setSuccessMessage('Thank you for your feedback!');
        setComment('');
        setReviewerName('');
        setEmail('');
        setPhone('');
        setModalOpen(false); // Close the modal
      } else {
        setError(response.data.message || 'Failed to submit feedback');
      }
    } catch (err) {
      // Handle errors from server or network
      setError(err.response?.data?.message || 'An error occurred while submitting feedback');
    } finally {
      setLoading(false); // Stop loading state
    }
  };
  return (
    <div className="bg-radial-white-black min-h-screen flex flex-col justify-center items-center px-[20px] md:px-[25px] py-10">
      <div className="w-[90%] flex flex-col md:flex-col gap-8">
        {/* Tell Us What You Feel Section */}
        <div className="w-full text-center md:text-left">
          <div className="w-full text-center py-6 md:py-10 lg:py-14">
            <h1 className="text-white text-[23px] md:text-[28px] lg:text-[40px] font-semibold mb-[20px]">
              Tell Us What You Feel!
            </h1>
            <div className="mx-auto border-dashed border-t-2 border-[#ECBC56] w-[230px] md:w-[500px] mb-[20px]"></div>
            <p className="text-white md:text-[16px] text-[12px] font-normal md:mb-[80px] mb-[50px]">
              Share your experience and let us know how our spices have elevated your cooking.
            </p>
            <div className="bg-[#00071A] border border-[#ECBC56] rounded-[20px] md:h-[322px] h-[260px] md:px-[150px] px-[33px] md:py-[50px] py-[29px]">
              <div className="flex flex-col items-start md:mb-4 mb-12">
                <img src={apos} className="w-[38px] h-[25px] md:w-[60px] md:h-[39px]" alt="Apostrophe" />
                <textarea
                  className="bg-transparent text-[18px] md:text-[40px] font-normal placeholder-gray-700 md:w-[700px] outline-none resize-none md:pl-[100px] pt-[27px] w-full md:pt-[0px]"
                  placeholder="Type your review here and share your thoughts with us..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <div className="text-right">
                <button
                  className="bg-white text-[16px] text-black font-normal py-2 px-6 rounded-[5px] hover:bg-gray-200 transition"
                  onClick={handleSubmitComment}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center mt-12 p-5 bg-[#0a1a2a] bg-opacity-85 z-30">
          <div className="bg-radial-white-black p-8 rounded-[30px] w-[600px] shadow-lg">
            <h2 className="text-[22px] text-[#ECBC56] font-normal mb-4">Please enter your details:</h2>

            <div className="mb-4">
              <label className="text-gray-300  mb-4">Name:</label>
              <input
                type="text"
                className="w-full text-[16px] md:text-xl  text-black border border-gray-300 p-3 rounded focus:outline-none focus:border-[#ECBC56] transition"
                placeholder="Enter your name"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-300 mb-4">Email:</label>
              <input
                type="email"
                className="w-full text-[16px] md:text-xl  text-black border border-gray-300 p-3 rounded focus:outline-none focus:border-[#ECBC56] transition"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-300  mb-4">Phone Number:</label>
              <input
                type="tel"
                className="w-full  text-black border border-gray-300 p-3 rounded focus:outline-none focus:border-[#ECBC56] transition"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div className="flex justify-end">
              <button
                onClick={handleSubmitFeedback}
                className="bg-[#ECBC56] text-black rounded-lg px-6 py-2 transition hover:bg-[#d9a24d]"
                disabled={loading}
              >
                Submit
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="ml-4 text-gray-300 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
        {/* About Section */}
        <div className="w-full flex flex-col md:flex-row ">
          <div className="w-full md:w-3/5 mb-6">
            {/* About Us Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-white text-[40px] font-normal mb-4">About</h2>
              <img className="md:h-[40px] h-[25px] w-[538px] mb-[30px]" src={param} alt="Param Logo" />
              <p className="text-justify  w-[100%] text-white text-[14px] md:text-[16px] font-normal mb-[30px] md:w-[586px] w-full">
              At Paarampariyaa, we are dedicated to preserving the rich heritage of Indian cuisine. Our passion lies in
              crafting authentic spices that bring the traditional flavors of India to your kitchen, ensuring every dish
              is a true celebration of culture and taste.
            </p>
            <p className="text-justify  w-[100%] text-white text-[14px] md:text-[16px] md:w-[586px] w-full  mb-[30px]">
              Join us on a flavorful journey and explore our spices to bring the taste of tradition to your table today!
            </p>
            <div className="flex  flex-row gap-4 md:gap-[20px]">
              <button className="bg-white w-[195px] h-[39px]  md:w-[196px] text-black font-normal py-[8px] md:px-[20px] rounded-md text-[12px] md:text-[16px] ">
                Explore our Spices
              </button>
              <button className="bg-[#041423] w-[195px] md:w-[140px]  h-[39px] text-white font-normal py-[8px] px-[20px] rounded-md text-[12px] md:text-[16px] border-2 border-white">
                Contact Us
              </button>
            </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-2/5 relative flex justify-center items-center">
            <img className="rounded-lg w-full h-full" src={OuterImage} alt="Various spices" />
            <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 md:w-1/6"
              src={innerLogo}
              alt="Logo"
            />
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
     
    </div>
  );
});

export default AboutUs;