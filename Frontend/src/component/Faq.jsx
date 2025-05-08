import React, { useState } from 'react';
import { Element } from 'react-scroll';

const faqs = [
  {
    question: "What is SoftSell?",
    answer: "SoftSell is a platform where you can sell unused software licenses and get paid quickly.",
  },
  {
    question: "How do I sell my license?",
    answer: "Simply upload your license details, get a valuation, and receive payment after verification.",
  },
  {
    question: "Is it safe to sell licenses here?",
    answer: "Absolutely. We ensure secure transfers and protect your data throughout the process.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Element name="faq">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-4 hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default FAQ;
