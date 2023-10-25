import React from 'react';
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Preserve, present & celebrate loved ones stories.',
};

const page = () => {
  return (
    <div className='md:w-4/6 w-5/6 mx-auto flex flex-col items-center justify-center  border-t text-foreground '>
    <h1 className='text-lg md:text-2xl my-4 underline '>Terms of service</h1>
    <p className='text-md'>Welcome to Foreversake! These Terms of Service (the "Terms") govern your use of our website and services. By using Foreversake, you agree to be bound by these Terms. Please read them carefully
    </p>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>Your Use of Foreversake</h3>
      <p className='my-2 text-md font-light'>Foreversake is a platform that empowers you to create interactive and collaborative profiles for your loved ones. You can share precious moments using photographs, videos, audio clips, and memories. This platform serves as a sanctuary for remembrance.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>User Responsibilities</h3>
      <ul>
        <li  className='my-2 text-md font-light list-disc'>You are responsible for the content you post on Foreversake. Ensure that all content is respectful and appropriate.</li>
        <li  className='my-2 text-md font-light list-disc'>Do not engage in any activity that could harm the privacy, security, or reputation of other users.</li>
        <li  className='my-2 text-md font-light list-disc'>Do not use Foreversake for any illegal or unauthorized purposes.</li>
      </ul>
     
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>Privacy and Data</h3>
      <p className='my-2 text-md font-light'>We value your privacy and are committed to safeguarding your data. Our Privacy Policy explains how we collect, use, and protect your personal information.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'> Intellectual Property</h3>
      <p className='my-2 text-md font-light'>You retain ownership of your content. By using Foreversake, you grant us a license to use, display, and distribute your content on the platform. You may not use our branding, logos, or intellectual property without our permission.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>Termination</h3>
      <p className='my-2 text-md font-light'>We reserve the right to suspend or terminate your account if you violate these Terms or engage in any inappropriate behavior.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>Warranty Disclaimer</h3>
      <p className='my-2 text-md font-light'>Foreversake is provided "as is" without any warranties. We do not guarantee that the service will be error-free or uninterrupted.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>Limitation of Liability</h3>
      <p className='my-2 text-md font-light'>We are not liable for any direct, indirect, incidental, special, or consequential damages.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>Changes to Terms</h3>
      <p className='my-2 text-md font-light'>We may update these Terms from time to time. We will notify you of any changes, and your continued use of Foreversake after the changes will constitute your acceptance of the revised Terms.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>Contact Us</h3>
      <p className='my-2 text-md font-light'>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:info@foreversake.com">info@foreversake.com</a> </p>
    </span>
  </div>
  )
}

export default page