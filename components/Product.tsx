import Image from 'next/image'
import { PopAnimation } from '@/utils/motion';
import rio from "@/public/newproduct1.png";
import rios from "@/public/newproduct2.png";
import localFont from 'next/font/local';
const october = localFont({ src: '../public/fonts/hey_october.woff2', variable: "--heading-font" })


const Product = () => {
  return (
    <div className="lg:pb-14  px-12 sm:px-20  md:px-24 lg:px-8  max-w-screen-xl  ">
      <div className="max-w-xl md:px-4 lg:max-w-2xl mb-10 md:mx-auto text-center  md:mb-12">
        <h2 className={`${october.className} max-w-lg mb-0 font-sans md:text-4xl text-2xl text-center  font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto`}>
          The Product
        </h2>
      </div>
      <div className='lg:grid md:px-4 grid-cols-2 gap-10 w-full  bg-opacity-60 rounded-2xl '>
        <div className='flex items-center justify-center'>
          <PopAnimation>
          <div className='flex justify-center items-center w-full h-full '>
            <Image
              src={rio}
              className='object-contain h-full'
              alt="How_2"
            />
          </div>
          </PopAnimation>
        </div>
        <div className='flex  flex-col-reverse lg:flex-col'>
          <div className='flex flex-col justify-center items-center font-light w-full rounded-2xl  '>
            <p className="mb-4 md:text-lg">Our app is a sanctuary for remembrance. Empowering you to create an interactive and collaborative profile for your loved ones. Share all your most precious moments in vivid detail using photographs, videos, audio clips, and memories you note in the app as you remember them.</p>
            <p>Foreversake is more than a Product—it's the foundations of bridges across generations, uniting past and present, and safeguarding the spirit of those we love. Come join us on this heartfelt journey of preserving, presenting, and celebrating the stories of the people who make our worlds turn. Together, we'll make sure the memories of your loved ones always shine.</p>
          </div>
          <div className='flex justify-center items-center w-full  lg:mx-8'>
            <PopAnimation>
              <Image
                src={rios}
                alt="How_1"
              />
            </PopAnimation>
          </div>
          <div className='flex flex-col justify-center items-center font-light text-white w-full bg-opacity-60 rounded-2xl '>
            <p className="mb-4 md:text-lg">Preserving precious memories is now effortless with Foreversake. Our unique 4x4-inch ornament, crafted from high-quality crystalline epoxy, is available in white with silver marbling or black with white marbling, adorned with our emblem in gold. This enduring tribute symbolizes everlasting love, designed to withstand any weather or environment.</p>
            <p>At the heart of Foreversake lies the power of connection. Using cutting-edge NFC technology, the same technology as contactless payments, a simple tap with any NFC-enable phone connects you to your cherished one's digital memorial. This bridge between the physical and digital realms opens the door to a treasure trove of media and memories.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product