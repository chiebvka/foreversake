"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import black1 from "@/public/howblack1.jpg";
import black2 from "@/public/howblack2.jpg";
import black3 from "@/public/howblack3.jpg";
import white1 from "@/public/howwhite1.jpg";
import white2 from "@/public/howwhite2.jpg";
import white3 from "@/public/howwhite3.jpg";


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import {  Pagination, Navigation } from 'swiper/modules';

import localFont from 'next/font/local';
const october = localFont({ src: '../public/fonts/hey_october.woff2', variable: "--heading-font" })


type Props = {number: number}

const Pointer = ({number}: Props) => {
    return(
      <div className="flex flex-col items-center md:px-4 mr-4">
        <div>
          <div className="flex items-center justify-center w-10 h-10 border border-foreground rounded-full text-primary">
            {number}
          </div>
        </div>
        <div className="w-px h-full bg-primary" />
      </div>
    )
  }
  

export default function How() {
  return (
    <>
      <div className="px-12 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className={`${october.className} max-w-lg mb-6 font-sans md:text-4xl text-2xl text-center font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto`}>
            How Foreversake Works
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="lg:py-6 lg:pr-12 text-foreground">
            <div className="flex">
              <Pointer number={1} />
              <div className="pt-1 pb-8">
                <p className="mb-1 text-lg md:text-xl font-bold text-white">
                  Purchase your Foreversake Digital Memorial & Download the App
                </p>
                <p className="mb-4 font-light md:text-lg text-gray-300">
                  Purchase a Foreversake memorial and we will ship it directly to you and our app is free!
                </p>
              </div>
            </div>

            <div className="flex">
              <Pointer number={2} />
              <div className="pt-1 pb-8">
                <p className="mb-1 text-lg md:text-xl font-bold text-white">
                  Set Up Your Loved Ones Interactive Profile
                </p>
                <p className="mb-4 font-light md:text-lg text-gray-300">
                  Create a profile for your loved one, adding their details, story, photos, videos, audio clips, and special memories.
                </p>
              </div>
            </div>

            <div className="flex">
              <Pointer number={3} />
              <div className="pt-1 pb-8">
                <p className="mb-1 text-lg md:text-xl font-bold text-white">
                  Set Up Your Digital Memorial Ornament
                </p>
                <p className="mb-4 font-light md:text-lg text-gray-300">
                  Place the 4x4-inch Foreversake ornament in a meaningful spot, like a mantelpiece, garden, or graveside.
                </p>
              </div>
            </div>

            <div className="flex">
              <Pointer number={4} />
              <div className="pt-1 pb-8">
                <p className="mb-1 text-lg md:text-xl font-bold text-white">
                  Tap to Connect
                </p>
                <p className="mb-4 font-light md:text-lg text-gray-300">
                  Unlock your phone and gently tap it to the ornament. This uses NFC technology, like contactless payments, to direct you and others to the remembrance profile.
                </p>
              </div>
            </div>

            <div className="flex">
              <Pointer number={5} />
              <div className="pt-1">
                <p className="mb-1 text-lg md:text-xl font-bold text-white">
                  Preserve, Share and Remember
                </p>
                <p className="mb-4 font-light md:text-lg text-gray-300">
                  Use the app to share these memories with family and friends. They can also add their own, creating a collaborative tribute.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-5  ">
            <Image
              src={black1}
              className="border-primary rounded-lg "
              alt="How_1"
            />
            <Image
              src={black2}
              className="border-primary rounded-lg "
              alt="How_1"
            />
            <Image
              src={black3}
              className="border-primary rounded-lg "
              alt="How_1"
            />
            <Image
              src={white1}
              className="border-primary rounded-lg "
              alt="How_1"
            />
            <Image
              src={white2}
              className="border-primary rounded-lg "
              alt="How_1"
            />
            <Image
              src={white3}
              className="border-primary rounded-lg "
              alt="How_1"
            />
            {/* <Image
              src="/how_4.webp"
              width={450}
              height={200}
              className="border-primary rounded-2xl"
              alt="How_2"
            /> */}
          </div>

        </div> 
      </div>
      <div className='w-full md:hidden p-8'>
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1.5}
          modules={[ Pagination]}
          className="mySwiper swipers "
        >
          <SwiperSlide>
              <Image
                src={black1}
                className="border-primary rounded-lg "
                alt="How_1"
              />
          </SwiperSlide>
          <SwiperSlide>
              <Image
                src={black2}
                className="border-primary rounded-lg "
                alt="How_1"
              />
          </SwiperSlide>
          <SwiperSlide>
              <Image
                src={black3}
                className="border-primary rounded-lg "
                alt="How_1"
              />
          </SwiperSlide>
          <SwiperSlide>
              <Image
                src={white1}
                className="border-primary rounded-lg "
                alt="How_1"
              />
          </SwiperSlide>
          <SwiperSlide>
              <Image
                src={white2}
                className="border-primary rounded-lg "
                alt="How_1"
              />
          </SwiperSlide>
          <SwiperSlide>
              <Image
                src={white3}
                className="border-primary rounded-lg "
                alt="How_1"
              />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}