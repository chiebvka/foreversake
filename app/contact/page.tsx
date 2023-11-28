"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import toast from 'react-hot-toast';
import { socialMedia } from '@/constants';
import { Button } from '@/components/ui/button';





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
    <div className=" w md:w-10/12 my-24 mx-auto md:max-w-full lg:max-w-screen-xl ">

  <section className="mb-32">
    <div className="relative h-[340px] overflow-hidden border border-primary rounded bg-cover bg-[50%] bg-no-repeat  shadow-[0_4px_9px_-4px_#3b71ca] bg-[url('/contact_img.png')]"></div>
    <div className=" px-6 md:px-12">
      <div className="block rounded-lg bg-[#222121] shadow-[0_4px_9px_-4px_#3b71ca] px-6 py-12  dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[70px] md:-mt-[50px] backdrop-blur-[30px]">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input 
                  type="text"
                  className="peer block min-h-[auto] border border-primary  w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="name" 
                  placeholder='Your name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  htmlFor="name">Name
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input 
                  type="email"
                  className="peer block min-h-[auto] w-full rounded border border-primary bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="email"
                  required 
                  placeholder='Your email'
                  value={formData.email}
                  onChange={handleChange}
                />
                <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  htmlFor="email">Email address
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input 
                  type="number"
                  className="peer block min-h-[auto] w-full rounded border border-primary bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="mobile"
                  required 
                  placeholder='Your mobile number'
                  value={formData.mobile || ""}
                  onChange={handleChange}
                />
                <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  htmlFor="mobile">Mobile Number
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  className="peer block min-h-[auto] w-full rounded border border-primary bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="message" 
                  rows={5} 
                  placeholder="Leave a comment..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Leave a comment...</label>
              </div>
              <Button type="submit" data-te-ripple-init data-te-ripple-color="light"
                className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
                Send Message
              </Button>
            </form>
            <div className="flex flex-row  mt-6">
              {socialMedia.map((social, index) => (
                <img
                key={social.id}
                src={social.icon}
                alt="Social Media Icon"
                className={`w-[21px] h-[21px]  object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
      </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-amber-100 p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill='#DEB738'  viewBox="0 0 28 28">
                      <path d="M18 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.852-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm-12-3c-2.099 0-4 1.702-4 3.801 0 3.121 3.188 3.451 4 8.199.812-4.748 4-5.078 4-8.199 0-2.099-1.901-3.801-4-3.801zm0 5.333c-.737 0-1.333-.597-1.333-1.333s.596-1.333 1.333-1.333 1.333.596 1.333 1.333-.596 1.333-1.333 1.333zm6 5.775l-3.215-1.078c.365-.634.777-1.128 1.246-1.687l1.969.657 1.92-.64c.388.521.754 1.093 1.081 1.75l-3.001.998zm12 7.892l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 3.62-8.144c.299.76.554 1.776.596 3.583l-.443.996 2.699-1.021 4.809 2.091.751-3.725.718 3.675 4.454-2.042 3.099 1.121-.461-1.055c.026-.392.068-.78.131-1.144.144-.84.345-1.564.585-2.212l3.442 7.877z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold text-primary">
                      Address
                    </p>
                    <p className="text-neutral-200">
                    Foreversake Ltd, 21 Morar Court, Glenrothes, Fife, KY6 2BT
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-amber-100 p-4 text-primary">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"  strokeWidth="2"  fill='#DEB738'   clipRule="evenodd">
                      <path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.622.845-2.298 2.627-2.289 4.843.027 6.902 6.711 18.013 12.212 18.117.575.011 1.137-.098 1.677-.345.121-.055 2.102-1.029 2.11-1.033zm4-5.621h-1v-13h1v13zm-2-2h-1v-9h1v9zm4-1h-1v-7h1v7zm-6-1h-1v-5h1v5zm-2-1h-1v-3h1v3zm10 0h-1v-3h1v3zm-12-1h-1v-1h1v1z"/>
                    </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold text-primary">
                      Mobile
                    </p>
                    <p className="text-neutral-200">
                      <a href="tel:+447514617058">
                        +44 7514617058
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-amber-100 p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#DEB738' viewBox="0 0 24 24">
                      <path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z"/>
                    </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold text-primary">Email</p>
                    <div className="text-neutral-200">
                      <a href="mailto:info@foreversake.com">
                        info@foreversake.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
    // <div className=" px-4 mx-auto min-h-screen flex flex-col items-center justify-center max-w-6xl">
    //   <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">Contact Us</h2>
    //   <p className="mb-8 font-light text-center text-white sm:text-xl">Got a question? Want to send feedback about our product? Let us know.</p>
    //   <div className="grid grid-cols-1 md:grid-cols-2">
    //     <div className="flex flex-col">
    //       <div className="p-6 mr-2 border bg-[#DEB738] shadow-2xl sm:rounded-lg">
    //           <h1 className="text-4xl sm:text-5xl text-foreground  font-extrabold tracking-tight">
    //               Get in touch
    //           </h1>
    //           <p className="text-normal text-lg sm:text-2xl font-medium text-foreground mt-2">
    //               Fill in the form to start a conversation or get answers to whatever questions you might have 
    //           </p>

    //           <div className="flex items-center mt-8 text-foreground">
    //               <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 ">
    //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    //               </svg>
    //               <div className="ml-4 text-md tracking-wide font-semibold w-40">
    //                 Foreversake Ltd, 
    //                 21 Morar Court,
    //                 Glenrothes,
    //                 Fife,
    //                 KY6 2BT 
    //               </div>
    //           </div>

    //           <div className="flex items-center mt-4 text-foreground">
    //               <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
    //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    //               </svg>
    //               <div className="ml-4 text-md tracking-wide font-semibold w-40">
    //                   +44 7514617058
    //               </div>
    //           </div>

    //           <div className="flex items-center mt-2 text-foreground">
    //               <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
    //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    //               </svg>
    //               <div className="ml-4 text-md tracking-wide font-semibold w-40">
    //                 <a href="mailto:info@foreversake.com">

    //                   info@foreversake.com
    //                 </a>
    //               </div>
    //           </div>

    //           <div className="flex flex-row  mt-6">
    //             {socialMedia.map((social, index) => (
    //               <img
    //                 key={social.id}
    //                 src={social.icon}
    //                 alt="Social Media Icon"
    //                 className={`w-[21px] h-[21px]  object-contain cursor-pointer ${
    //                   index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
    //                 }`}
    //                 onClick={() => window.open(social.link)}
    //               />
    //             ))}
    //       </div>
    //       </div>

    //       <form action="#" className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
    //         <div>
    //           <label className="block mb-2 text-sm font-medium text-foreground ">Name:</label>
    //           <input 
    //           type="text" 
    //           id="name" 
    //           className="text-sm rounded-lg block w-full placeholder:text-primary  placeholder:opacity-60 p-2.5 bg-transparent border border-primary text-gray-600 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" 
    //           required 
    //           placeholder='Your name'
    //           value={formData.name}
    //           onChange={handleChange}
    //           />
    //         </div>
    //         <div>
    //           <label className="block mb-2 text-sm font-medium text-foreground mt-4">Email:</label>
    //           <input 
    //           type="email" 
    //           id="email" 
    //           className="text-sm rounded-lg block w-full placeholder:text-primary  placeholder:opacity-60 p-2.5 bg-transparent border border-primary text-gray-600 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" 
    //           required 
    //           placeholder='Your email'
    //           value={formData.email}
    //           onChange={handleChange}
    //           />
    //         </div>
    //         <div>
    //           <label className="block mb-2 text-sm font-medium text-foreground mt-4">Mobile Number:</label>
    //           <input 
    //           type="number" 
    //           id="mobile" 
    //           className="text-sm rounded-lg block w-full placeholder:text-primary  placeholder:opacity-60 p-2.5 bg-transparent border border-primary text-gray-600 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" 
    //           required 
    //           placeholder='Your mobile number'
    //           value={formData.mobile}
    //           onChange={handleChange}
    //           />
    //         </div>
    //         <div className="sm:col-span-2">
    //           <label className="block mb-2 text-sm font-medium mt-4 text-foreground">Your message:</label>
    //           <textarea 
    //           id="message" 
    //           rows={5} 
    //           className="block p-2.5 w-full text-sm placeholder:text-primary  placeholder:opacity-60 text-gray-600 rounded-lg shadow-sm border bg-transparent  border-primary placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500" 
    //           placeholder="Leave a comment..."
    //           value={formData.message}
    //           onChange={handleChange}
    //           ></textarea>
    //         </div>
    //         <button type="submit" className="py-3 px-5 mt-4 text-sm border-2 border-primary font-medium text-center text-foreground rounded-lg sm:w-fit focus:outline-none focus:ring-primary-300 bg-primary hover:scale-110 focus:ring-yellow-500">Send message</button>
    //       </form>
    //     </div>
    //   </div>
    //   <div className="md:grid grid-cols-3 gap-20">
    //   </div>
    // </div>
  );
};

export default ContactForm;
