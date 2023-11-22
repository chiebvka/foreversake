"use client"

import React, { useState, useEffect, ChangeEvent } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import Button from './Button'
import toast from 'react-hot-toast';
import { Input } from './ui/input';
import { Button } from './ui/button';

import localFont from 'next/font/local';
const october = localFont({ src: '../public/fonts/hey_october.woff2', variable: "--heading-font" })


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
      toast.success('Email submitted successfully');
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
    <div className='flex flex-col justify-center w-full text-white bg-contact bg-cover bg-no-repeat bg-center h-[40vh]'>
      <div className='flex flex-col items-center justify-center w-10/12 mx-auto space-y-8 '> 
        <h1 className={`${october.className} text-center md:text-4xl text-2xl text-primary font-medium`}>
          Interested in our product?
        </h1>

        <p className='text-center font-light text-sm md:text-lg'>
          Sign up for email updates to show your interest in Foreversake and
           to keep up to date with our progress!
        </p>

      <form action="" onSubmit={handleSubmit} className=' flex w-full items-center justify-center'>
        <Input 
          className="md:mr-2 mr-1 border-primary placeholder:text-primary placeholder:text-sm placeholder:opacity-70" 
          id="email"
          type="email" 
          placeholder='Subscribe to product updates' 
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
          <Button type="submit" className="  ">Submit</Button>
      </form>
       
      </div>
    </div>
  )
}