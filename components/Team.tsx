import { team } from '@/constants';
import localFont from 'next/font/local';
const october = localFont({ src: '../public/fonts/hey_october.woff2', variable: "--heading-font" })


const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center px-12 sm:px-20  py-16 mx-auto  md:px-24 lg:px-8 lg:py-20">
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
            <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                className="object-cover  w-full h-full"
                src={team.imageUrl}
                alt="Team member"
                
              />
            </div>
            <div className="p-3 flex flex-col justify-center px-5 py-4 ">
              <h5 className="mb-2 block font-sans text-xl font-semibold text-primary leading-snug tracking-normal text-blue-gray-900 antialiased">
                {team.name}
              </h5>
              <p className="block font-sans text-xs font-light leading-relaxed text-inherit antialiased">
              {team.description}
              </p>
            </div>
          </div>
        ))}
        {/* {team.map((team) => (
        <div
          key={team.index}
          className="relative border md:border-none border-primary  items-center flex justify-center overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 focus:scale-110 hover:scale-110"
        >
          <img
            className="object-cover w-full h-80"
            src={team.imageUrl}
            alt="Team member"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-1 text-lg font-bold text-primary">
             {team.name}
            </p>
            <p className="mb-4 text-xs tracking-wide text-white">
              {team.description}
            </p>
          </div>
        </div>
        ))} */}
      </div>
    </div>
  );
};

export default Team;