import React from 'react'
import { FaShieldAlt, FaRegLifeRing, FaAward } from 'react-icons/fa'
import { Element } from 'react-scroll';

const WhyChooseUs = () => {
  return (
    <Element name="why-us">
      <div className='container mx-auto my-20 px-4'>
        <h2 className='text-5xl sm:text-6xl font-semibold text-center mb-12'>
          Why Choose Us
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-lg'>
            <FaAward className='w-16 h-16 text-teal-500 mb-4' />
            <h3 className='text-2xl font-semibold mb-4'>Top-Notch Quality</h3>
            <p className='text-lg font-light text-gray-600 text-center'>
              We ensure the highest quality in all our services and products, offering an unmatched experience for our customers.
            </p>
          </div>

          <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-lg'>
            <FaRegLifeRing className='w-16 h-16 text-teal-500 mb-4' />
            <h3 className='text-2xl font-semibold mb-4'>24/7 Customer Support</h3>
            <p className='text-lg font-light text-gray-600 text-center'>
              Our dedicated support team is available round the clock to assist with any questions or concerns you may have.
            </p>
          </div>

          <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-lg'>
            <FaShieldAlt className='w-16 h-16 text-teal-500 mb-4' />
            <h3 className='text-2xl font-semibold mb-4'>Robust Security</h3>
            <p className='text-lg font-light text-gray-600 text-center'>
              We prioritize your data security, utilizing the latest encryption techniques to keep your information safe and secure.
            </p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default WhyChooseUs
