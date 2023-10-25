import React from 'react';
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Preserve, present & celebrate loved ones stories.',
};

const page = () => {
  return (
    <div className='md:w-4/6 w-5/6 mx-auto flex flex-col items-center justify-center  border-t text-foreground '>
      <h1 className='text-lg md:text-2xl my-4 underline '>Privacy Policy</h1>
      <p className='text-md'>This Privacy Policy explains how Foreversake collects, uses, and protects your 
        personal information when you use our services. Your privacy is important to us, 
        and we are committed to safeguarding your data.
      </p>
      <span className='w-full my-6 border-b'>
        <h3 className='my-2 text-lg md:text-zxl font-bold'>Information We Collect</h3>
        <p className='my-2 text-md font-light'>We may collect personal information, including your name, email address, 
          and content you provide, to create and maintain your profile on Foreversake.</p>
      </span>
      <span className='w-full my-6 border-b'>
        <h3 className='my-2 text-lg md:text-zxl font-bold'>How We Use Your Information</h3>
        <p className='my-2 text-md font-light'>We use your information to provide, maintain, and improve Foreversake, including sharing content and collaborating with others. We may also use your information to contact you</p>
      </span>
      <span className='w-full my-6 border-b'>
        <h3 className='my-2 text-lg md:text-zxl font-bold'>Data Security</h3>
        <p className='my-2 text-md font-light'>We take measures to protect your data. However, no data transmission over the internet is entirely secure, and we cannot guarantee the security of your information.</p>
      </span>
      <span className='w-full my-6 border-b'>
        <h3 className='my-2 text-lg md:text-zxl font-bold'> Sharing Your Informatio</h3>
        <p className='my-2 text-md font-light'>You have control over the information you share on Foreversake. We will not share your personal information with third parties without your consent..</p>
      </span>
      <span className='w-full my-6 border-b'>
        <h3 className='my-2 text-lg md:text-zxl font-bold'>Your Choices</h3>
        <p className='my-2 text-md font-light'>You can manage your profile, control the information you share, and delete your account at any time.</p>
      </span>
      <span className='w-full my-6 border-b'>
        <h3 className='my-2 text-lg md:text-zxl font-bold'>Changes to Privacy Policy</h3>
        <p className='my-2 text-md font-light'>We may update this Privacy Policy as necessary. We will notify you of any changes, and your continued use of Foreversake after the changes will constitute your acceptance of the revised Privacy Policy</p>
      </span>
      <span className='w-full my-6 border-b'>
        <h3 className='my-2 text-lg md:text-zxl font-bold'>Contact Us</h3>
        <p className='my-2 text-md font-light'>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:info@foreversake.com">info@foreversake.com</a> </p>
      </span>
    </div>
  )
}

export default page