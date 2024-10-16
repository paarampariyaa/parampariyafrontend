

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';  // Importing the eye icons

import lgLogo from '../asstes/logo.png';
import param from '../asstes/paramname.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [showPassword, setShowPassword] = useState(false);  // State for password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);  // State for confirm password visibility
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('gender', gender);

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error('Signup failed:', error.response.data.message);
            toast.error('Signup failed. Please try again.');
        }
    };

    return (
        <div className="mb-[35px] pt-16 flex flex-col justify-center bg-radial-white-black from-blue-900 to-black items-center h-screen bg-gray-100">
            <ToastContainer
        toastStyle={{
          backgroundColor: '#ECBE56',
          color: 'black',
          display: 'flex',
          width : '420px',
          top : '120px',
          right :'90px',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
        progressStyle={{
          backgroundColor: 'black',
        }}
      />
            <div className="hidden sm:flex flex-row items-center justify-center flex-grow-0 mx-auto">
                <img src={lgLogo} alt="Logo" className="h-8 w-8 mb-1 sm:mr-2" />
                <img src={param} alt="Param Name" className="md:h-[16px] md:w-[213px] h-[10px] w-[125px] mb-1" />
            </div>

            <div className="w-full max-w-md bg-[#000E21] p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full text-black px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}  // Toggle between text and password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            required
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}  // Toggle password visibility
                            className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer"
                        >
                            {showPassword ? <IoMdEye size={24} color="#041423" /> : <IoMdEyeOff size={24} color="#041423" />}
                        </span>
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}  // Toggle between text and password for confirm password
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                            required
                        />
                        <span
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}  // Toggle confirm password visibility
                            className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer"
                        >
                            {showConfirmPassword ? <IoMdEye size={24} color="#041423" /> : <IoMdEyeOff size={24} color="#041423" />}
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="" className='text-black'>Select Gender</option>
                            <option value="male" className='text-black'>Male</option>
                            <option value="female" className='text-black'>Female</option>
                            <option value="other" className='text-black'>Other</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-[#ECBC56] text-black px-4 py-2 rounded">Sign Up</button>
                        <span onClick={() => navigate('/login')} className="text-[#ECBC56] cursor-pointer">Already have an account?</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

