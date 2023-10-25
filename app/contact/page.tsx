"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import toast from 'react-hot-toast';





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
      toast.success('Message submitted successfully:');
    } catch (error: any) {
      toast.error(error.message as string);
    }
  };

  useEffect(() => {
    if (error) {
      // Handle and display the error to the user
      console.error('Error:', error);
    }
  }, [error]);

  return (
    <div className=" px-4 mx-auto min-h-screen flex flex-col items-center justify-center max-w-6xl">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">Contact Us</h2>
      <p className="mb-8 font-light text-center text-white sm:text-xl">Got a question? Want to send feedback about our product? Let us know.</p>
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="p-6 mr-2 border bg-[#9E7F11] sm:rounded-lg">
                        <h1 className="text-4xl sm:text-5xl text-foreground font-extrabold tracking-tight">
                            Get in touch
                        </h1>
                        <p className="text-normal text-lg sm:text-2xl font-medium text-foreground mt-2">
                            Fill in the form to start a conversation or get answers to whatever questions you might have 
                        </p>

                        <div className="flex items-center mt-8 text-foreground">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 ">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                19 Hatton Green, Fife,
                                KY7 4SD
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-foreground">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +44 1234567890
                            </div>
                        </div>

                        <div className="flex items-center mt-2 text-foreground">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                              <a href="mailto:info@foreversake.com">

                                info@foreversake.com
                              </a>
                            </div>
                        </div>
        </div>

        <form action="#" className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-foreground ">Name:</label>
            <input 
            type="text" 
            id="name" 
            className="text-sm rounded-lg block w-full placeholder:text-primary  placeholder:opacity-60 p-2.5 bg-transparent border border-primary text-gray-600 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" 
            required 
            placeholder='Your name'
            value={formData.name}
            onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-foreground mt-4">Email:</label>
            <input 
            type="email" 
            id="email" 
            className="text-sm rounded-lg block w-full placeholder:text-primary  placeholder:opacity-60 p-2.5 bg-transparent border border-primary text-gray-600 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" 
            required 
            placeholder='Your email'
            value={formData.email}
            onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-foreground mt-4">Mobile Number:</label>
            <input 
            type="number" 
            id="mobile" 
            className="text-sm rounded-lg block w-full placeholder:text-primary  placeholder:opacity-60 p-2.5 bg-transparent border border-primary text-gray-600 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" 
            required 
            placeholder='Your mobile number'
            value={formData.mobile}
            onChange={handleChange}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium mt-4 text-foreground">Your message:</label>
            <textarea 
            id="message" 
            rows={5} 
            className="block p-2.5 w-full text-sm placeholder:text-primary  placeholder:opacity-60 text-gray-600 rounded-lg shadow-sm border bg-transparent  border-primary placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500" 
            placeholder="Leave a comment..."
            value={formData.message}
            onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="py-3 px-5 mt-4 text-sm border-2 border-primary font-medium text-center text-foreground rounded-lg sm:w-fit focus:outline-none focus:ring-primary-300 bg-primary hover:scale-110 focus:ring-yellow-500">Send message</button>
        </form>
      </div>
      <div className="md:grid grid-cols-3 gap-20">
      </div>
    </div>
  );
};

export default ContactForm;
