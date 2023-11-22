import { reason } from '@/constants';
import localFont from 'next/font/local';
const october = localFont({ src: '../public/fonts/hey_october.woff2', variable: "--heading-font" })


  const Why = () => {
    return (
      <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-xl mb-10 md:text-center md:mx-auto px-4 lg:max-w-2xl md:mb-24">
          <h2 className={`${october.className} max-w-lg mb-6 font-sans md:text-4xl text-2xl text-center font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto`}>
            Why Foreversake
          </h2>
        </div>

        <div className="grid gap-8 px-4 row-gap-10 lg:grid-cols-3">
          {reason.map((reason) => (
            <div className="max-w-md sm:mx-auto flex flex-col items-center sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-transparent sm:mx-auto sm:w-24 sm:h-24">
                <img 
                src={reason.imageUrl} 
                alt='Why_Foreversake_Icon' 
                />
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-white">{reason.name}</h6>
              <p className="mb-3 font-light text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Why;