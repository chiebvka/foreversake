"use client" 

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { LeftFadeIn } from '@/utils/motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Autoplay } from 'swiper/modules';
import localFont from 'next/font/local';
const october = localFont({ src: '../public/fonts/hey_october.woff2', variable: "--heading-font" })


type Props = {}

export default function About({}: Props) {

   
  return (
        <section id='about' className='flex flex-col justify-center  items-center md:max-w-full lg:max-w-screen-xl lg:pb-14 px-12 lg:px-8  '>
            <LeftFadeIn>

            <div className="gap-4  w-full items-center md:px-4 mx-auto lg:grid lg:grid-cols-2 lg:pb-8 ">
                <div className="font-light text-white">
                    <h2 className={`${october.className} mb-4 md:text-4xl text-2xl text-center tracking-tight font-extrabold text-primary`}>Changing the way we remember</h2>
                    <p className="mb-4 md:text-lg ">
                        Foreversake emerged in Scotland in 2020, envisioned by Dean Macrae and Stewart Gray 
                        to immortalize lost loved ones using a digital memorial accessible to all, a potential revolution in the memorial industry.
                        Combining Dean's desire to honor departed friends, family, and pets and Stewarts passion for technology and business; 
                        A transformative partnership was forged, 
                        resulting in a revolutionary device built to bring family and friends together globally.
                    </p>
                    {/* <p>It allowed users to connect, upload media, and share memories of their departed loved ones or pets. Merging a physical digital memorial with a user-friendly app, Foreversake became a conduit for preserving legacies and stories of those who shaped our world. Investors Remi Okey and KC Godwin-Ike propelled the transition from idea to a tangible prototype.</p> */}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="mt-4 w-full lg:mt-10 rounded-2xl" src='about_us_2.webp' alt="office content 2" />
                    <img className="w-full rounded-2xl" src='about_us_4.webp' alt="office content 1" />
                </div>
            </div>

            </LeftFadeIn>

            <div className="gap-4 items-center py-2 md:px-4 mx-auto  mt-8 flex flex-col lg:flex-row-reverse">
                <div className="flex flex-col  lg:text-left justify-start lg:justify-center gap-4 w-[full] lg:w-[50%] lg:h-[50vh] relative lg:sticky top-0">
                    <h1 className={`${october.className} mb-4 md:text-4xl text-2xl text-center tracking-tight font-extrabold text-primary`}>
                        Preserve, present & celebrate loved one’s stories.
                    </h1>
                    <p className='font-light md:text-lg text-white'>In the following three years, the Foreversake team meticulously formed partnerships with top-tier suppliers, preparing for market entry. Their dedication to revolutionize remembering loved ones positioned them on the brink of reshaping the memorial industry. Dean Macrae, Stewart Gray, and their team have crafted Foreversake into a promising venture, making memories eternal through technology and ready to redefine how we commemorate those we've lost.</p>
                </div>

                <div className="w-full mt-4 mx-auto flex items-center justify-center lg:w-[50%] ">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                          }}
                        // onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image
                            src="/about_us_1.webp"
                            width={250}
                            height={350}
                            className='object-cover h-96 w-96'
                            alt="About Us Image"
                            unoptimized
                            
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/swipers1.jpeg"
                            width={250}
                            height={350}
                            className='object-cover h-96 w-96'
                            alt="About Us Image"
                            unoptimized
                            
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/swipers2.jpeg"
                            width={250}
                            height={350}
                            className='object-cover h-96 w-96'
                            alt="About Us Image"
                            unoptimized
                            
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/swipers3.jpeg"
                            width={250}
                            height={350}
                            className='object-cover h-96 w-96'
                            alt="About Us Image"
                            unoptimized
                            
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/swipers5.jpg"
                            width={250}
                            height={350}
                            className='object-cover h-96 w-96'
                            alt="About Us Image"
                            unoptimized
                            
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/swipers4.jpg"
                            width={250}
                            height={350}
                            className='object-cover h-96 w-96'
                            alt="About Us Image"
                            unoptimized
                            
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/swipers6.jpg"
                            width={250}
                            height={350}
                            className='object-cover h-96 w-96'
                            alt="About Us Image"
                            unoptimized
                            
                            />
                        </SwiperSlide>
                        {/* <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                        </div> */}
                    </Swiper>
                    {/* <div className='xl:h-[35vh] lg:h-[45vh] pl-0 pr-4 lg:pr-24'>
                        <Image
                        src="/about_us_1.webp"
                        width={250}
                        height={350}
                        className='m-2 rounded-2xl rotate-[-10deg]'
                        alt="About Us Image"
                        />
                    </div>
                    <div className='xl:h-[35vh] lg:h-[45vh] pl-0 pr-4 lg:pr-24'>
                        <Image
                        src="/about_us_3.webp"
                        width={250}
                        height={350}
                        className='m-2 rounded-2xl rotate-[10deg]'
                        alt="About Us Image"
                        />
                    </div>
                    <div className='xl:h-[35vh] lg:h-[45vh] pl-0 pr-4 lg:pr-24'>
                        <Image
                        src="/about_us_5.webp"
                        width={250}
                        height={350}
                        className='m-2 rounded-2xl rotate-[-4deg]'
                        alt="About Us Image"
                        />
                    </div>
                    <div className='xl:h-[35vh] lg:h-[45vh] pl-0 pr-4 lg:pr-24'>
                        <Image
                        src="/about_us_6.webp"
                        width={250}
                        height={350}
                        className='m-2 rounded-2xl rotate-[6deg]'
                        alt="About Us Image"
                        />
                    </div> */}
                </div>
            
            </div>
        </section>
    )
}