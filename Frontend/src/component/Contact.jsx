import React, { useState } from 'react';
import { Element } from 'react-scroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const licenseOptions = [
    'Microsoft Office',
    'Adobe Creative Cloud',
    'AutoCAD',
    'Windows Server',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'Select a license type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
    }
  };

  return (
    <Element name="contact">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        {submitted && (
          <div className="bg-green-100 text-green-800 px-4 py-3 rounded mb-6 text-center">
            Thank you! Your message has been sent.
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.company ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>

          <div>
            <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700">
              License Type<span className="text-red-500">*</span>
            </label>
            <select
              name="licenseType"
              id="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.licenseType ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Select a license</option>
              {licenseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Element>
  );
};

export default Contact;
