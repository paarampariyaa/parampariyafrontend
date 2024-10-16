import React from 'react';
import tick from '../asstes/tick.png';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-[#0C192F] flex items-center justify-center px-[16px] md:px-[42px] py-[20px]">
      <div className="bg-[#0A1C3A] w-full h-auto md:h-[898px] rounded-xl shadow-lg px-[24px] md:px-[96px] py-[20px] md:py-0">
        {/* Order Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center xl:w-[45%] md:w-[62%]">
          <div className="flex justify-center mb-4 md:mb-0">
            <img src={tick} className="w-[60px] md:w-[80px] h-[60px] md:h-[80px]" />
          </div>
          <div className="text-center text-white mb-8">
            <p className=" flex text-[18px] md:text-[25px] font-normal">Order #1100</p>
            <h1 className="text-[24px] md:text-[40px] font-medium">Thank You YourName</h1>
          </div>
        </div>

        {/* Order Confirmation Message */}
        <div className="bg-[#0B3054] p-6 rounded-lg mb-8 h-auto md:h-[216px]">
          <h2 className="text-[#F5B02E] text-[28px] md:text-[35px] font-medium mb-2">
            Your Order is Confirmed
          </h2>
          <p className="text-white text-[16px] md:text-[25px] font-normal">
            We have accepted your order, and we're getting it ready. A confirmation mail has been sent to{' '}
            <span className="text-[#ECBC56]">aa.bbcc@gmail.com</span>.
          </p>
        </div>

        {/* Flex Container for Customer & Order Details */}
        <div className="flex flex-col md:flex-row bg-[#003D6426] p-[20px] md:p-[27px] h-auto md:h-[397px] justify-between gap-6 text-[#C7D5E0]">
          {/* Customer Info */}
          <div className="w-full md:w-1/2">
            <h3 className="text-white font-medium text-[20px] md:text-[25px] mb-4">Customer</h3>
            <div className="flex flex-col md:flex-row xl:gap-[90px] md:gap-[23px]">
              <div className="mb-4">
                <p className="text-white font-medium text-[18px] md:text-[22px]">Email:</p>
                <p className="text-[16px] md:text-[20px] font-normal">newmail@gmail.com</p>
              </div>
              <div className="mb-4">
                <p className="text-white font-medium text-[18px] md:text-[22px]">Phone:</p>
                <p className="text-[16px] md:text-[20px] font-normal">8899776655</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[40px]">
              <div className="mb-4">
                <p className="text-white font-medium text-[18px] md:text-[22px]">Billing Address:</p>
                <p className="text-[16px] md:text-[20px] font-normal">
                  YourName Here, 12 Street Name, City - 600001, Tamil Nadu
                </p>
              </div>
              <div>
                <p className="text-white font-medium text-[18px] md:text-[22px]">Shipping Address:</p>
                <p className="text-[16px] md:text-[20px] font-normal">
                  YourName Here, 12 Street Name, City - 600001, Tamil Nadu
                </p>
              </div>
            </div>
          </div>

          {/* Order Info */}
          <div className="w-full md:w-1/2">
            <h3 className="text-white font-medium text-[20px] md:text-[25px] mb-4">Order</h3>
            <div className="mb-4">
              <p className="text-[16px] md:text-[20px] font-normal">Silk Pillow - Varient x 1</p>
              <p className="text-[16px] md:text-[20px] font-normal">Color: Blue</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] md:text-[20px] font-normal">Subtotal</p>
              <p className="text-[16px] md:text-[20px] font-normal">₹ 4,999.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] md:text-[20px] font-normal">Payment method</p>
              <p className="text-[16px] md:text-[20px] font-normal">COD</p>
            </div>
            <div className="flex justify-between font-semibold text-white mt-4">
              <p className="text-[16px] md:text-[20px] font-medium">Total</p>
              <p className="text-[16px] md:text-[20px] font-semibold">₹ 4,999.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;