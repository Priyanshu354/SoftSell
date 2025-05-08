import React from 'react';
import { FaReact } from 'react-icons/fa';
import { Element } from 'react-scroll';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Software Engineer at TechSolutions',
      content: 'SoftSell made it incredibly easy to sell my unused software licenses. The valuation process was quick and transparent. Highly recommend!',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager at InnovateTech',
      content: 'I was able to get a great price for our company’s unused licenses. The process was seamless, and the customer support was fantastic!',
      photo: <FaReact size={40} className="text-indigo-600" />
    },
    {
      name: 'Alice Johnson',
      role: 'Operations Lead at DesignPro',
      content: 'Using SoftSell to sell our software licenses was a game-changer. The platform is intuitive, and the payout was processed quickly.',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  ];

  return (
    <Element name="testimonials">
      <div className="mt-6 md:px-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-6 cursor-pointer">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="gradient-hover-outer p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 rounded-2xl group transform hover:scale-110">
              <div className="gradient-hover-inner bg-slate-50 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 p-6 rounded-2xl flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                    {typeof testimonial.photo === 'string' ? (
                      <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      testimonial.photo
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg font-light">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Testimonials;
