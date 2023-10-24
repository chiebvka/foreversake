"use client"

import { useEffect, useState, FC } from "react";
import Image from "next/image";
import { getProfile } from "@/services";
import ProfileHeader from '@/components/ProfileHeader';
import { format, parseISO } from "date-fns";
import { graphCMSImageLoader } from '@/services';

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

const profile: FC<ProfileProps> = ()  => {
  const [profile,setProfile]=useState<any>([])
  const [dob,setDob]=useState<any>([])
  const [dop,setDop]=useState<any>([])

  useEffect(() => {
    getProfile_();
  }, []);

  const getProfile_ = async () => {
    const result = await getProfile();
    setProfile(result[0]);
    const birthDate = format(parseISO(result[0].doB), 'do MMMM yyyy');
    setDob(birthDate);
    const passingDate = format(parseISO(result[0].doP), 'do MMMM yyyy');
    setDop(passingDate)
  }

  return (
    <div className="flex flex-col justify-center items-center tracking-wide">
      <ProfileHeader type='home' />
      <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt="User profile Image"
        height="80"
        width="80"
        className="w-48 h-48 object-cover my-4 border-2 border-primary rounded-md"
        src={profile.image?.url}
      />
      <h1 className="text-white text-xl font-semibold">{profile.firstName} {profile.surname}</h1>
      <p className="text-gray-200 text-xs font-extralight">Born {dob}, {profile.birthPlace}</p>
      <p className="text-gray-200 text-xs font-extralight">Died {dop}, {profile.restPlace}</p>
      <hr className='h-[3px] w-[200px] rounded-full my-2 bg-primary'></hr>
      <div className='relative flex flex-col items-center mt-6'>
        <div className='absolute top-[-2px] left-0'>
          <p className="text-white text-xs font-semibold">{profile.firstName}'s Story</p>
        </div>
        <div className="relative text-white border text-xs font-extralight bg-transparent w-[350px] h-[200px] p-1 mt-5 mb-4 cursor-pointer rounded-md border-primary focus:scale-105">
          <p className="text-left">{profile.description}</p>
          <div className="absolute bottom-0 left-0 p-1 font-normal text-primary">
            Continue Reading...
          </div>
        </div>
        <div className="flex flex-row gap-8 mt-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/media_icon.png" alt="logo" className="w-14 h-14 object-cover" />
            <p className="text-white font-medium text-xs">Family Media</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/memories_icon.png" alt="logo" className="w-14 h-14 object-cover" />
            <p className="text-white font-medium text-xs">Memories</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/messaging_icon.png" alt="logo" className="w-14 h-14 object-cover" />
            <p className="text-white font-medium text-xs">Messages</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile