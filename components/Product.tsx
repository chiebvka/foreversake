import Image from 'next/image'
import { PopAnimation } from '@/utils/motion'

const Product = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-0 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
          The Product
        </h2>
      </div>
      <div className='lg:grid grid-cols-2 gap-10 w-full bg-[#4A4D4F] bg-opacity-60 rounded-2xl p-8'>
        <div>
          <PopAnimation>
          <div className='flex justify-center items-center w-50% mb-8 lg:mx-8'>
            <Image
              src="/how_2.webp"
              width={550}
              height={200}
              alt="How_2"
            />
          </div>
          </PopAnimation>
          <div className='flex flex-col justify-center items-center font-light text-white py-4 px-10 w-50% bg-[#9E7F11] bg-opacity-60 rounded-2xl mb-6 mt-14 lg:p-8'>
            <p className="mb-4">Preserving precious memories is now effortless with Foreversake. Our unique 4x4-inch ornament, crafted from high-quality crystalline epoxy, is available in white with silver marbling or black with white marbling, adorned with our emblem in gold. This enduring tribute symbolizes everlasting love, designed to withstand any weather or environment.</p>
            <p>At the heart of Foreversake lies the power of connection. Using cutting-edge NFC technology, the same technology as contactless payments, a simple tap with any NFC-enable phone connects you to your cherished one's digital memorial. This bridge between the physical and digital realms opens the door to a treasure trove of media and memories.</p>
          </div>
        </div>
        <div className='flex flex-col-reverse lg:flex-col'>
          <div className='flex flex-col justify-center items-center bg-primary font-light py-4 px-10 w-50% rounded-2xl my-8 lg:p-8'>
            <p className="mb-4">Our app is a sanctuary for remembrance. Empowering you to create an interactive and collaborative profile for your loved ones. Share all your most precious moments in vivid detail using photographs, videos, audio clips, and memories you note in the app as you remember them.</p>
            <p>Foreversake is more than a Product—it's the foundations of bridges across generations, uniting past and present, and safeguarding the spirit of those we love. Come join us on this heartfelt journey of preserving, presenting, and celebrating the stories of the people who make our worlds turn. Together, we'll make sure the memories of your loved ones always shine.</p>
          </div>
          <div className='flex justify-center items-center w-50% py-6 lg:mx-8'>
            <PopAnimation>
              <Image
                src="/how_1.webp"
                width={300}
                height={150}
                alt="How_1"
              />
            </PopAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product