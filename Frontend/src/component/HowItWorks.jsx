import React from 'react'
import upload from '../assets/asset 66.svg'
import Free from '../assets/FreeVal.png'
import Paid from '../assets/GetPaid.png'
import { Element } from 'react-scroll';

const HowItWorks = () => {
  return (
    <Element name="how-it-works">
      <div className='flex flex-col gap-6 container mx-auto mt-20 px-4'>
        <h2 className='text-5xl sm:font-semibold mb-14'>How It Works</h2>

        {/* Step 1 */}
        <div className="rounded-xl border px-8 pt-4 pb-4 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:w-1/2 justify-center items-center">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium lg:-translate-y-5">
              STEP 1
            </span>
            <h3 className="text-2xl md:text-4xl font-bold">
              Upload Your Software License
            </h3>
            <p className="text-lg font-light text-gray-700">
              Begin by uploading your software license to initiate the valuation process. This step ensures that all details are validated.
            </p>

            {/* Feature List */}
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-gray-500 mt-1" />
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">
                  Secure upload
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-gray-500 mt-1" />
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">
                  Instant validation
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-gray-500 mt-1" />
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">
                  Multiple formats supported
                </a>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img src={upload} alt="Upload License" className="w-[200px] md:w-[300px] lg:w-[400px] h-auto object-contain" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-xl border px-8 pt-4 pb-4 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:w-1/2 justify-center items-center">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium lg:-translate-y-16">
              STEP 2
            </span>
            <h3 className="text-2xl md:text-4xl font-bold">
              Receive Your Free Valuation
            </h3>
            <p className="text-lg font-light text-gray-700">
              Once the details are uploaded, our system processes the information and generates a detailed valuation report for you.
            </p>

            {/* Feature List */}
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-gray-500 mt-1" />
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">
                  Quick results
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-gray-500 mt-1" />
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">
                  Free valuation
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-gray-500 mt-1" />
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">
                  Detailed insights
                </a>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img src={Free} alt="Free Valuation" className="w-[200px] md:w-[300px] lg:w-[400px] h-auto object-contain" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="rounded-xl border px-8 pt-4 pb-4 flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:w-1/2 justify-center items-center">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium lg:-translate-y-16">
              STEP 3
            </span>
            <h3 className="text-2xl md:text-4xl font-bold">
              Get Paid for Your License
            </h3>
            <p className="text-lg font-light text-gray-700">
              After receiving the valuation, you can choose to sell your license and get paid securely. We ensure the highest transparency and security.
            </p>

            {/* Feature List */}
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-gray-500 mt-1" />
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">
                  Instant payment
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-gray-500 mt-1" />
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">
                  Secure transactions
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-gray-500 mt-1" />
                <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">
                  Transparent process
                </a>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img src={Paid} alt="Get Paid" className="w-[200px] md:w-[300px] lg:w-[400px] h-auto object-contain" />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default HowItWorks
