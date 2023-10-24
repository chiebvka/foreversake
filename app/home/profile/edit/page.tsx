"use client"

import { useEffect, useState, FC } from "react";
import Image from "next/image";
import { getProfile } from "@/services";
import ProfileHeader from '@/components/ProfileHeader';
import { graphCMSImageLoader } from '@/services';
import { AiFillPlusCircle } from 'react-icons/ai';

interface ProfileProps {
  post: {
    firstName: string;
    surname: string;
    doB: any,
    doP: any,
    description: string,
    image: {
      url: string;
    };
    birthPlace: string;
    restPlace: string;
  };
}

const page: FC<ProfileProps> = () => {
  const [profile,setProfile]=useState<any>([])

  useEffect(() => {
    getProfile_();
  }, []);

  const getProfile_ = async () => {
    const result = await getProfile();
    setProfile(result[0]);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <ProfileHeader type='save' />
      <div className="relative">
        <Image
          unoptimized
          loader={graphCMSImageLoader}
          alt={profile.firstName}
          height="80"
          width="80"
          className="w-48 h-48 object-cover my-4 rounded-full"
          src={profile.image?.url}
        />
        <AiFillPlusCircle className=' absolute bottom-5 right-5 w-10 h-10 text-primary'/>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="flex flex-row items-center text-white text-sm justify-between mb-2 container">
          <p className="text-left">Their First Name</p>
          <input 
            className="text-white border border-white bg-transparent w-[220px] p-2 cursor-pointer rounded-md focus:outline-none focus:ring-0" 
            id="name"
            type="text" 
            value={profile.firstName}
            disabled
          />
        </div>

        <div className="flex flex-row items-center text-white text-sm justify-between mb-2 container">
          <p className="text-left">Their Last Name</p>
          <input 
            className="text-white border border-white bg-transparent w-[220px] p-2 cursor-pointer rounded-md focus:outline-none focus:ring-0" 
            id="name"
            type="text" 
            value={profile.surname}
            disabled
          />
        </div>

        <div className="flex flex-row items-center text-white text-sm justify-between mb-2 container">
          <p className="text-left">Their Date of Birth</p>
          <input 
            className="text-white border border-white bg-transparent w-[220px] p-2 cursor-pointer rounded-md focus:outline-none focus:ring-0" 
            id="Birth date"
            type="date" 
            value={profile.doB}
            disabled
          />
        </div>

        <div className="flex flex-row items-center text-white text-sm justify-between mb-2 container">
          <p className="text-left">Their Date of Passing</p>
          <input 
            className="text-white border border-white bg-transparent w-[240px] p-2 cursor-pointer rounded-md focus:outline-none focus:ring-0" 
            id="Passing Date"
            type="date" 
            value={profile.doP}
            disabled
          />
        </div>

        <div className="flex flex-row items-center text-white text-sm justify-between mb-2 container">
          <p className="text-left">Relation to you</p>
          <input 
            className="text-white border border-white bg-transparent w-[220px] p-2 cursor-pointer rounded-md focus:outline-none focus:ring-0" 
            id="relation"
            type="text" 
            value={profile.relation}
            disabled
          />
        </div>

        <div className="flex flex-col text-white text-sm gap-2 mb-4 container">
          <p className="text-left">Write a little about their life</p>
          <textarea 
            className="text-gray-200 text-xs border border-white bg-transparent w-full p-2 cursor-pointer rounded-md focus:outline-none focus:ring-0" 
            id="description" 
            rows={7}
            value={profile.description}
            disabled
          />
        </div>

        <button className="text-sm relative space-x-2 bg-primary w-[350px] p-2 text-white text-center cursor-pointer rounded-xl">
          SAVE
        </button>
      </div>
    </div>
  )
}

export default page