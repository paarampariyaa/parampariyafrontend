
import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../asstes/logo.png'; // Corrected typo from 'asstes' to 'assets'
import param from '../asstes/paramfoot.png'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId) => {
    if (location.pathname === path) {
      if (sectionId) {
        // If a sectionId is provided, scroll to that section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If no sectionId, scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // If navigating to a different page, pass the scrollTo state
      navigate(path, { state: { scrollTo: sectionId } });
    }
  };
  

 

  return (
    <footer className="bg-[#000719] border-t-2 border-[#ECBC56] text-white md:px-[100px] px-[30px] py-8">
      {/* Bottom Section with Links */}
      <div className="flex flex-col md:flex-row justify-between  md:items-start md:text-left gap-[40px]  md:gap-[0px] md:px-24">
        
        {/* Logo and About Section */}
        <div className="mb-8">
          <div className="mb-[20px]">
            {/* Logo */}
            <img src={logo} alt="Logo" className=" md:mx-0 mb-6" />
            

            <img src={param}></img>
          </div>
          <p className="text-[16px] font-normal w-[264px] h-[60px] text-justify">
          Join us on a flavorful journey and explore our spices and bring the taste of tradition to your table.
          </p>
        </div>
        <div className="flex flex-row gap-[50px] md:gap-[100px] ">
        {/* Products Section */}
        <div className="mb-6">
          <h2 className="text-md md:text-lg font-medium mb-4">Products</h2>
          <ul className="space-y-[12px]">
            <li>Mattress</li>
            <li>Milk Makers</li>
            <li>Milk Packets</li>
            <li>Spices</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6">
          <h2 className="text-md md:text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-[12px]">
            <li>  <Link to="/" onClick={() => handleNavigation('/', null )}>Home</Link></li>
            <li> <Link to="/store" onClick={() => handleNavigation('/store', null)}>
                  Store
                </Link></li>
            <li> <Link to="/product" onClick={() => handleNavigation('/product', null)}>
                  Products
                </Link></li>
                <li>
                {/* About Us Link */}
                <button onClick={() => handleNavigation('/', 'about-us')} className="focus:outline-none">
                  About Us
                </button>
              </li>
            <li>Contact Us</li>
          </ul>
        </div>
        </div>
        {/* Contact Info Section */}
        <div>
          <h2 className="text-md md:text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-[12px]">
            <li>paramparaprima@gmail.com</li>
            <li>+91 999 888 7770</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;