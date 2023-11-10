import React from 'react'
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Preserve, present & celebrate loved ones stories.',
};

export default function page() {
  return (
    <div className='md:w-4/6 w-5/6 mx-auto flex flex-col items-center justify-center  border-t text-foreground '>
            <h1 className='text-lg md:text-2xl my-4 underline '>Foreversake Cookies Policy</h1>
            <h1 className='text-lg md:text-2xl my-4 underline '>Issued 01/11/2023</h1>
    <p className='text-md'>Welcome to Foreversake Limited (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Cookies Policy is designed to provide you with information
regarding how we use cookies and similar tracking technologies on our website(s) and mobile application(s) (&quot;Service&quot;).
This policy applies to users located in the European Union and United States.
    </p>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>What are Cookies?</h3>
      <p className='my-2 text-md font-light'>Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser
and allows us or a third party to recognize you and make your next visit easier and more useful to you. Cookies can be
&quot;persistent&quot; or &quot;session&quot; cookies. Persistent cookies remain on your personal computer or mobile device when you go
offline, while session cookies are deleted as soon as you close your web browser..</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>How We Use Cookies</h3>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>We use cookies for the following purposes:</h3>
      <ul>
        <li  className='my-2 text-md font-light list-disc'>Essential Cookies: These cookies are necessary for the proper functioning of our website and mobile application. They enable you to navigate our site and use its features.</li>
        <li  className='my-2 text-md font-light list-disc'>Analytical/Performance Cookies: These cookies allow us to recognize and count the number of visitors and see how visitors move around our website when they are using it. This helps us improve the way our website works.</li>
        <li  className='my-2 text-md font-light list-disc'>Functionality Cookies: These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
        <li  className='my-2 text-md font-light list-disc'>Targeting Cookies: These cookies record your visit to our website, the pages you have visited, and the links you
have followed. We will use this information to make our website and the advertising displayed on it more
relevant to your interests.</li>
      </ul>
     
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>Third-Party Cookies</h3>
      <p className='my-2 text-md font-light'>In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'> Your Choices</h3>
      <p className='my-2 text-md font-light'>You have the right to choose whether or not to accept cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>How to Block Cookies</h3>
      <p className='my-2 text-md font-light'>Most web browsers allow you to block cookies. You can typically do this through your browser settings. Please be aware that blocking cookies may affect your ability to use our website and services effectively.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>How to Delete Cookies</h3>
      <p className='my-2 text-md font-light'>You can delete cookies stored on your computer through your browser settings. The method for doing so varies depending on the browser you are using. Please refer to your browser&#39;s help documentation for more information on how to manage cookies.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>EU and GDPR Compliance</h3>
      <p className='my-2 text-md font-light'>If you are located in the European Union or your use of our services involves the processing of personal data of EU residents, we are committed to complying with the General Data Protection Regulation (GDPR) and any applicable local data protection laws. For more information on how we process personal data, please refer to our Privacy Policy.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>Changes to Our Cookies Policy</h3>
      <p className='my-2 text-md font-light'>We may update our Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
    </span>
    <span className='w-full my-6 border-b'>
      <h3 className='my-2 text-lg md:text-zxl font-bold'>Contact Us</h3>
      <p className='my-2 text-md font-light'>If you have any questions or concerns about our use of cookies, please contact us at:<br />
      Our Address: Foreversake Ltd, 21 Morar Court, Glenrothes, Fife, KY6 2BT <br />
      Our Phone: <a href="tel:+44(0)7514617058">+44(0)7514617058</a>  <br />
      Our Email Address:  <a href="mailto:info@foreversake.com">info@foreversake.com</a> </p>
    </span>
    </div>
  )
}