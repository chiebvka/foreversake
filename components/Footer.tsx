"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { footerLinks, socialMedia } from "@/constants";

const Footer = () => {
  const router = useRouter();

  return(
    <footer className="w-full flex items-center py-5 px-4 xl:px-0  flex-col">
      <div className="w-full flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col justify-start md:mr-10">
          <img src="/Foreversake_Logo_Realism.webp" alt="logo" className="w-16 h-16 object-contain" />
        </div>
        
        <div className="w-full md:w-auto flex flex-col md:flex-row justify-center items-center md:my-0 my-4">
          <ul className="list-none flex flex-row">
            {footerLinks.map((link, index) => (
            <li
              key={link.name}
              className="font-poppins font-normal cursor-pointer text-xs md:text-sm text-white mx-1 md:mx-2 mb-2 md:mb-0"
            >
              <button onClick={() => router.push(`${link.link}`)}>{link.name}</button>
            </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex justify-between items-center md:flex-row flex-col pt-4 border-t-[1px] border-t-primary">
        
        <p className="font-poppins font-normal text-center text-xs md:text-sm leading-[27px] text-white">
          Copyright Ⓒ 2023 Foreversake. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt="Social Media Icon"
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
 
      </div>
    </footer>
  );
}



export default Footer;