import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    // Hero Section
    <div className='min-h-screen bg-[linear-gradient(to_right,_#ccfbf1,_#ffffff,_#ecfdf5,_transparent)] flex text-center'>
        {/* Hero Container */}
        <div className='mx-auto max-w-3xl flex flex-col items-center'>
            <div className="flex items-center my-6 gap-2 border border-teal-300 bg-teal-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group mt-16">
                <div className="w-2 h-2 bg-teal-400 rounded-full border border-teal-600"></div>
                <p className="font-medium text-teal-700">
                    v1.00.1: <span className="text-emerald-700">Priyanshu Raj</span>
                </p>
                <FaArrowRightLong className="fa-solid fa-arrow-right text-teal-600 group-hover:translate-x-1 transition duration-300" />
            </div>

            <div className='flex flex-col mt-26 text-center'>
                <h1 className='font-bold text-5xl leading-snug px-6'>Turn Unused Software Licenses into Cash</h1>
                <p className='text-xl md:text-2xl text-gray-800 leading-snug px-6 my-6'> We help you sell old or unused software licenses in minutes </p>
            </div>
            
            <div className="flex gap-4 mt-16 px-6 pb-14">
                <button className="px-6 py-4 rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-500 text-white font-semibold shadow-md hover:scale-105 transition-transform">
                    Sell My License
                </button>

                <button className="px-6 py-4 rounded-2xl border-2 border-teal-500 text-teal-700 font-semibold hover:bg-teal-500 hover:text-white transition-colors">
                    Get a Free Valuation
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Hero