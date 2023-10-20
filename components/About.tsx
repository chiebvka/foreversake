"use client" 

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { LeftFadeIn } from './Motion';

type Props = {}

export default function About({}: Props) {
  return (
        <section id='about' className='flex flex-col py-14 px-8 sm:px-20 justify-center'>
            <LeftFadeIn>

            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-white">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-yellow-300">Changing the way we remember</h2>
                    <p className="mb-4">Foreversake emerged in Scotland in 2020, envisioned by Dean Macrae and Stewart Gray to immortalize lost loved ones using a digital memorial accessible to all, a potential revolution in the memorial industry. Dean's enduring desire to honor departed friends, family, and pets drove their shared mission, resulting in a device uniting families globally.</p>
                    <p>It allowed users to connect, upload media, and share memories of their departed loved ones or pets. Merging a physical digital memorial with a user-friendly app, Foreversake became a conduit for preserving legacies and stories of those who shaped our world. Investors Remi Okey and KC Godwin-Ike propelled the transition from idea to a tangible prototype.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-2xl" src='about_1.jpg' alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-2xl" src='about_2.jpg' alt="office content 2" />
                </div>
            </div>

            </LeftFadeIn>

            <div className="gap-4 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-col lg:flex-row-reverse">
                <div className="flex flex-col text-right lg:text-left justify-start lg:justify-center pt-8 lg:pt-14 gap-4 w-[full] lg:w-[50%] lg:h-[100vh] relative lg:sticky top-0">
                    <h1 className='text-4xl tracking-tight font-extrabold text-yellow-300'>
                        Preserve, present & celebrate loved one’s stories.
                    </h1>
                    <p className='font-light text-white'>In the following three years, the Foreversake team meticulously formed partnerships with top-tier suppliers, preparing for market entry. Their dedication to revolutionize remembering loved ones positioned them on the brink of reshaping the memorial industry. Dean Macrae, Stewart Gray, and their team have crafted Foreversake into a promising venture, making memories eternal through technology and ready to redefine how we commemorate those we've lost.</p>
                </div>

                <div className="scroll pt-24 lg:pt-0">
                    <div className='lg:h-[40vh] lg:pt-[100px] pl-0 pr-4 lg:pr-24'>
                        <Image
                        src="/photo-1.jpeg"
                        width={400}
                        height={350}
                        className='m-2 rounded-2xl rotate-[-10deg]'
                        alt="About Us Image"
                        />
                    </div>
                    <div className='lg:h-[35vh] lg:pt-[30px] pl-0 pr-4 lg:pr-24'>
                        <Image
                        src="/photo-2.jpeg"
                        width={400}
                        height={350}
                        className='m-2 rounded-2xl rotate-[10deg]'
                        alt="About Us Image"
                        />
                    </div>
                    <div className='lg:h-[35vh] lg:pt-[30px] pl-0 pr-4 lg:pr-24'>
                        <Image
                        src="/photo-3.jpeg"
                        width={400}
                        height={350}
                        className='m-2 rounded-2xl rotate-[-4deg]'
                        alt="About Us Image"
                        />
                    </div>
                    <div className='lg:h-[35vh] lg:pt-[30px] pl-0 pr-4 lg:pr-24'>
                        <Image
                        src="/photo-4.jpg"
                        width={400}
                        height={350}
                        className='m-2 rounded-2xl rotate-[6deg]'
                        alt="About Us Image"
                        />
                    </div>
                </div>
            
            </div>
        </section>
      )
}