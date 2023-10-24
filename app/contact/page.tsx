"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
interface FormData {
  name: string;
  email: string;
  mobile: number;
  message: string;
}

const ContactForm = () => {
  const supabase = createClientComponentClient()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: 0,
    message: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from('messages')
        .insert([formData]);

      if (error) {
        throw error;
      }

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        mobile: 0,
        message: '',
      });

      // Handle success (e.g., show a confirmation message)
      console.log('Message submitted successfully:', data);
    } catch (error: any) {
      setError(error.message as string);
    }
  };

  useEffect(() => {
    if (error) {
      // Handle and display the error to the user
      console.error('Error:', error);
    }
  }, [error]);

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">Contact Us</h2>
      <p className="mb-8 font-light text-center text-white sm:text-xl">Got a question? Want to send feedback about our product? Let us know.</p>
      <div className="md:grid grid-cols-3 gap-20">
        <form action="#" className="col-span-2 space-y-4 mb-8" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Name:</label>
            <input 
            type="text" 
            id="name" 
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-300 border-gray-600 text-gray-600 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" 
            required 
            value={formData.name}
            onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Email:</label>
            <input 
            type="email" 
            id="email" 
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-300 border-gray-600 text-gray-600 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" 
            required 
            value={formData.email}
            onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">Mobile Number:</label>
            <input 
            type="number" 
            id="mobile" 
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-300 border-gray-600 text-gray-600 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" 
            required 
            value={formData.mobile}
            onChange={handleChange}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-400">Your message:</label>
            <textarea 
            id="message" 
            rows={3} 
            className="block p-2.5 w-full text-sm text-gray-600 rounded-lg shadow-sm border bg-gray-300 border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500" 
            placeholder="Leave a comment..."
            value={formData.message}
            onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm border-2 border-primary font-medium text-center text-primary rounded-lg sm:w-fit focus:outline-none focus:ring-primary-300 bg-transparent hover:scale-110 focus:ring-yellow-500">Send message</button>
        </form>
        <h3 className='font-medium text-lg text-white'>
          <strong>Company Address:</strong><br/>
          19 Hatton Green <br />
          Glenrothes <br />
          Fife <br />
          KY7 4SD
        </h3>
      </div>
    </div>
  );
};

export default ContactForm;
