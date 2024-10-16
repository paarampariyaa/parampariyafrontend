import React from "react";
import star from '../asstes/Frame 143.png'; // Sample image

const StarRecipe = ({ steps = [], otherRecipes = [] }) => {
  return (
    <div className="bg-gradient-to-b from-[#0a1a2a] flex flex-col gap-[80px] to-[#001f3f] py-10 px-[20px] md:px-[40px] " >
      {/* Star Recipe Section */}
      <div className="text-center ">
        <h2 className="text-[28px] font-bold text-white md:text-[40px] font-semibold">Try Our Star Recipe</h2>
        <div className=' mx-auto border-dashed border-t-[1px] border-[#ECBC56]  w-[230px] md:w-[441px] mb-[20px] mt-[20px]'></div>
        <p className="text-white text-[16px] font-normal mt-2">
          Explore the essential millets that capture the authentic flavors of
          Indian cuisine in every dish.
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col justify-between  gap-[20px] md:flex-row">
        {steps.map((step, index) => (
          <div key={index} className="rounded-lg shadow-md  text-center md:w-[390px] h-[258px] relative">
            <div className="flex flex-col">
              <img
                src={step.imageUrl || star} // Default image if imageUrl is not provided
                alt={step.step}
                className="rounded-[20px] mb-4 w-full h-full"
              />
              <button className="absolute top-[0.5rem] left-[0.5rem] xl:w-[20%] xl:h-[30px] lg:w-[26%] lg:h-[30px] text-[11px] font-medium bg-yellow-500 text-black font-bold py-1 px-3 rounded-[12px]">
                {step.step}
              </button>
              <p className="text-white text-justify">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Other Recipes Section */}
      <div className=" flex flex-col gap-[30px]">
        <h3 className="text-[24px]  font-semibold text-white mb-4 flex gap-[40px]">Try Other Recipes</h3>
        <div className="flex flex-col md:flex-row gap-[20px] ">
          {otherRecipes.map((recipe, index) => (
            <div key={index} className="relative rounded-lg shadow-md overflow-hidden ">
              <img
                src={recipe.imageUrl || star} // Default image if imageUrl is not provided
                alt={recipe.title}
                className="w-[410px] h-[244px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-[6px]">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                  <h4 className="  text-white font-medium text-[22px] text-center">{recipe.title}</h4>
                  <button className="text-gray-300 border border-white py-1 px-3 rounded w-[27%] text-[9px] h-[23px]">
  {recipe.time}
</button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarRecipe;