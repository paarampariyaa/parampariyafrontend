import React, { useState } from 'react';
import eclipse from '../asstes/ellipse.jpeg'; // Corrected the path

const Reviews = () => {
  const reviews = [
    {
      name: "K. Maumita",
      rating: 5,
      text: "As a working-class woman, I am constantly juggling busy work schedules and an un-existing social life. I got this because I was tired of waking up with my hair all tangled. But now with KLISME, I have found a simple and effective way to pamper myself and wake up refreshed and radiant. It's been two weeks of sleeping on this thing, and I have 90% fewer knots in my hair overall. Happy about the purchase.",
      profileImage: eclipse
    },
    {
      name: "L. Andrei",
      rating: 5,
      text: "I am a busy professional always on the go. I decided to try KLISME to see if it can help me wake up feeling refreshed and ready to tackle the day. After using it for a couple of weeks, I can confidently say that my hair has become more manageable, and I am loving the results.",
      profileImage: eclipse
    },
    {
      name: "M. Sophie",
      rating: 4,
      text: "Being a new mom means I have limited time for self-care. KLISME has been a game-changer for me. I no longer wake up with crazy bed hair, and my mornings have become much smoother. I highly recommend it to all the busy moms out there!",
      profileImage: eclipse
    }
  ];

  const ReviewComponent = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedStars, setSelectedStars] = useState(0);
    const [reviewText, setReviewText] = useState('');
  
    const handleStarClick = (index) => {
      setSelectedStars(index + 1);
    };
  
    const handleSubmit = () => {
      console.log('Stars:', selectedStars);
      console.log('Review:', reviewText);
      setModalOpen(false);
      // Reset states if needed
      setSelectedStars(0);
      setReviewText('');
    };

    return (
      <div className=" w-full px-[80px] bg-[#0a1a2a] text-white p-10 mx-auto gap-[80px] ">
        <h2 className="text-[40px] font-semibold text-center ">See What Others Are Saying</h2>
        <div className=' mx-auto border-dashed border-t-2 border-[#ECBC56]  w-[230px] md:w-[670px] mb-[20px]'></div>
        <p className="text-center mb-[80px] text-gray-300 text-[16px] font-normal">
          Authentic stories of satisfaction and experience, fostering enduring trust with each interaction.
        </p>
        <div className='flex flex-col md:flex-row md:space-x-8 w-full'>
          
          {/* Left Side - Ratings Section */}
          <div className="rounded-[20px] md:w-[336px] h-[360px] xl:w-[336px] h-[350px] flex flex-col bg-[#041423]  py-[20px] px-[20px] rounded-[20px] mb-6 md:mb-0">
            <div className='flex flex-row items-center gap-[5px] mb-2'>
              {/* <div className="flex items-center bg-yellow-400 rounded-[4px] px-4 py-1 text-black text-lg font-bold mb-1 w-[78px] h-[35px]">
                4.7⭐
              </div> */}
              <div className="rounded-[7px] w-[77px] h-[33px] flex items-center bg-yellow-400 rounded-[4px] px-4 py-1 text-black text-lg font-bold mb-1 w-[78px] h-[35px]">
      <div className='flex flex-row gap-[2px] items-center'>  <p>  4.7</p>     <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-[1rem] text-black mr-1"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .587l3.668 7.568 8.302 1.208-6.006 5.848 1.42 8.283L12 18.897l-7.384 3.88 1.42-8.283-6.006-5.848 8.302-1.208z" />
  </svg>
  </div>
</div>

              <div className='text-[22px] font-normal'>out of 5</div>
            </div>
            <p className='text-[16px] font-normal'>4,567 Ratings | 43 Reviews</p>
            <div className="flex flex-col text-[24px] mt-2">
              {[43, 27, 15, 10, 6].map((percent, i) => (
                <div key={i} className="flex items-center space-x-2 text-center">
                  <div className="flex space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex}>★</span>
                    ))}
                  </div>
                  <p className='text-[16px]'>{percent}%</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="w-[66%] mt-4 bg-yellow-400 text-black rounded-lg px-4 py-2"
            >
              Add Review
            </button>
          </div>

          {/* Modal for Adding Review */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center p-5 bg-black bg-opacity-75">
              <div className="bg-[#041423] p-5 rounded-[20px] w-[450px] h-auto">
              <div className='flex flex-row gap-[20px] items-center' > <h2 className="text-[20px] font-semibold mb-2 ">Ratings :</h2>
                <div className="flex mb-2 ">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`cursor-pointer text-[20px] text-${index < selectedStars ? 'yellow-400' : 'gray-300'}`}
                      style={{ fontSize: '30px' }} 
                      onClick={() => handleStarClick(index)}
                    >
                      ★
                    </span>
                  ))}
                </div></div> 
                <h2 className="text-[20px] font-semibold mb-2">Review :</h2>
                <textarea
                  className="w-full text-xl text-black border border-gray-300 p-2 rounded"
                  placeholder="Write your review..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-yellow-400 text-black rounded-lg px-4 py-2"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="ml-2 text-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
            
          {/* Right Side - Reviews Section */}
          <div className="space-y-6 w-full">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#041423] rounded-lg p-[40px] shadow-md">
                <div className="flex items-center space-x-4 mb-[20px]">
                  <img
                    src={review.profileImage}
                    alt={`${review.name}'s profile`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className='flex flex-row gap-[20px]'>
                    <h3 className="text-[25px] font-semibold">{review.name}</h3>
                    <div className="flex text-[27px] gap-[2px]">
                      {Array(review.rating).fill().map((_, i) => (
                        <span key={i} className="text-yellow-400 ">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className='text-[20px] font-normal'>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <ReviewComponent />;
};

export default Reviews;