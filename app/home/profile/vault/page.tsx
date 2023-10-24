"use client"

import { useEffect, useState, FC } from "react";
import Image from "next/image";
import { getProfile } from "@/services";
import ProfileHeader from "@/components/ProfileHeader";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { graphCMSImageLoader } from '@/services';

interface GalleryTabItem {
  url: string;
}

const profile = ()  => {
  const [profile,setProfile]=useState<any>([])
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [gallery, setGallery] = useState<any>([]);

  const slides = gallery.map((item: any) => ({
    src: item.url,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.url, width: 320, height: 213 },
      { src: item.url, width: 640, height: 426 },
      { src: item.url, width: 1200, height: 800 },
      { src: item.url, width: 2048, height: 1365 },
      { src: item.url, width: 3840, height: 2560 },
    ],
  }));

  useEffect(() => {
    getProfile_();
  }, []);

  const getProfile_ = async () => {
    const result = await getProfile();
    setProfile(result[0]);
    setGallery(result[0].familyMedia);
  }

  return (
    <div>
      <ProfileHeader type='vault' />
      <div className="flex flex-row gap-4 tracking-wide">
        <Image
          unoptimized
          loader={graphCMSImageLoader}
          alt={profile.firstName}
          height="80"
          width="80"
          className="w-20 h-20 object-cover border-2 border-primary rounded-md"
          src={profile.image?.url}
        />
        <div className="flex flex-col w-full items-start gap-1">
          <p className="text-white text-xl font-semibold">Media Vault</p>
          <hr className='h-[1px] w-full rounded-full my-2 bg-primary' />
          <h1 className="text-gray-200 text-sm font-extralight">{profile.firstName} {profile.surname}</h1>
        </div>
      </div>
      <div className="my-10 w-full">
        <div className="flex flex-col w-full items-start gap-0.5 mb-4">
          <p className="text-white text-xl font-semibold">Pictures</p>
          <hr className='h-[1px] w-[150px] rounded-full my-2 bg-primary' />
        </div>
        <div className="w-full">
          <div>
            <div className="grid grid-cols-3 h-full gap-2 flex-wrap mx-2 md:mx-0">
              {gallery.map((item: GalleryTabItem, index: number) => {
                return (
                  <div key={index} className="h-24 relative border border-primary rounded-md">
                    <div className="group h-full">
                      <div
                        className="bg-cover bg-center h-full w-full bg-no-repeat"
                        style={{ backgroundImage: `url("${item.url}")`, borderRadius: 6 }}
                      >
                      </div>
                      <div
                        className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                        onClick={() => {
                          setOpen(true);
                          setImage(item.url);
                        }}
                      >
                        <p className="text-white">
                          <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            plugins={[Zoom]}
            slides={slides}
          />
        </div>
      </div>
    </div>
  )
}

export default profile