import { team } from '@/constants';
import localFont from 'next/font/local';
const october = localFont({ src: '../public/fonts/hey_october.woff2', variable: "--heading-font" })


const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center px-12 sm:px-20  py-16 mx-auto md:max-w-full lg:max-w-screen-xl  md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-xl px-4  md:mx-auto lg:max-w-2xl md:mb-12">
        <h2 className={`${october.className} mb-4 md:text-4xl text-2xl text-center tracking-tight font-extrabold text-primary`}>
          Meet our Team
        </h2>
      </div>
        <p className="font-light md:text-lg  text-white md:px-4 mb-16">
          Our team is driven by a shared passion for innovation, creativity, and making a positive impact in the work we do. Get ready to meet the faces behind our collective vision, each of whom plays a vital role in shaping our success and making our projects come to life.
        </p>
      
      <div className="grid gap-20 md:gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((team) => (
          <div className="relative flex flex-col group transition duration-300 ease-in-out rounded-xl border bg-[#222121] shadow-[0_4px_9px_-4px_#3b71ca] bg-clip-border ">
            <div className="relative mx-4 -mt-6 h-56 md:h-auto md:-mt-16 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                className="object-cover  w-full h-full"
                src={team.imageUrl}
                alt="Team member"
                
              />
            </div>
            <div className="p-3 flex flex-col   py-4 ">
              <h5 className="mb-2 text-xl md:text-2xl font-semibold text-primary leading-snug tracking-normal text-blue-gray-900 antialiased">
                {team.name}
              </h5>
              <p className="text-xs md:text-sm lg:text-base font-light leading-relaxed text-inherit antialiased">
              {team.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;