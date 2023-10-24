"use client"

import React, { useState, useEffect, ChangeEvent } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Button from './Button'

interface FormData {
  email: string;
}

type Props = {}

export default function Subscribe({}: Props) {
  const supabase = createClientComponentClient()
  const [formData, setFormData] = useState<FormData>({
    email: '',
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
        .from('subscribers')
        .insert([formData]);

      if (error) {
        throw error;
      }

      // Clear the form after successful submission
      setFormData({
        email: '',
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
    <div className='flex flex-col justify-center w-full text-white'>
      <div className='flex flex-col items-center justify-center gap-8 bg-contact bg-cover bg-no-repeat bg-center h-[60vh]'> 
        <h1 className="text-center uppercase text-md md:text-lg lg:text-xl font-medium">
          Interested in our product?
        </h1>

        <p className='text-center'>
          Sign up for email updates to show your interest in Foreversake and
          <br /> to keep up to date with our progress!
        </p>

      <form action="" onSubmit={handleSubmit} className='w-10/12 mx-auto md:w-full flex flex-col md:flex-row '>
        <input 
          className="placeholder:text-primary border-2 placeholder:opacity-60 border-primary font-semibold bg-transparent mb-4 w-full md:w-[80%] p-3  cursor-pointer rounded-md text-primary  focus:outline-none focus:ring-0" 
          id="email"
          type="email" 
          placeholder='Subscribe to product updates' 
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
          <button type="submit" className="py-3 px-5 md:ml-2 md:mb-4 text-sm border-2 border-primary bg-primary font-medium text-center text-foreground rounded-lg sm:w-fit focus:outline-none focus:ring-primary-300  hover:scale-110 focus:ring-yellow-500">Send message</button>
      </form>
       
      </div>
    </div>
  )
}