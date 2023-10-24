import React from 'react'
import Button from './Button'

type Props = {}

export default function Subscribe({}: Props) {
  return (
    <div className='flex flex-col justify-center w-full text-white'>
      <div className='flex flex-col items-center justify-center gap-8 bg-contact bg-cover bg-no-repeat bg-center h-[60vh]'> 
        <h1 className="text-center uppercase text-md md:text-lg lg:text-xl font-medium">
          Interested in our product?
        </h1>

        <p className='text-center'>
          Sign up for email updates to show your interest in Foreversake and
          <br /> to keep up to date with our progress!
        </p>

        <input 
          className="placeholder:text-primary border-2 font-semibold bg-transparent w-[80%] p-3 uppercase cursor-pointer rounded-md text-primary focus:outline-none focus:ring-0" 
          id="email"
          type="email" 
          placeholder='Email address' 

          required={true}
        />
        
        <Button text={"Keep me updated"}/>
      </div>
    </div>
  )
}