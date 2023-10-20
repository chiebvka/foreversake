import React from 'react'
import Button from './Button'

type Props = {}

export default function Kickstarter({}: Props) {
  return (
    <section id='kick-starter' className="flex flex-col w-full items-center gap-8 mb-6 lg:mb-14">

      <div className="text-white text-center uppercase text-lg md:text-xl lg:text-2xl font-medium px-10">
        HELP US REVOLUTIONIZE THE WAY WE REMEMBER OUR LOVED ONES AND PETS BY BACKING US
      </div>
      <div className="uppercase text-2xl md:text-3xl lg:text-5xl font-extrabold">
        <div className='x-sign'>KICKSTARTER</div>
      </div>

      <iframe
        className="w-[80%] xs:w-[60%] lg:w-[40%] h-[35vh] rounded-2xl"
        height="415"
        src="https://www.youtube.com/embed/K4TOrB7at0Y?si=Aq-WovdgIUG-PGdZ"
        title="Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      <Button text={"Go to kickstarter"}/>

    </section>
  )
}