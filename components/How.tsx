import React from 'react'
import Image from 'next/image'

type Props = {number: number}

const Pointer = ({number}: Props) => {
    return(
      <div className="flex flex-col items-center mr-4">
        <div>
          <div className="flex items-center justify-center w-10 h-10 border border-foreground rounded-full text-yellow-300">
            {number}
          </div>
        </div>
        <div className="w-px h-full bg-yellow-300" />
      </div>
    )
  }
  

export default function How() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-yellow-300 sm:text-4xl md:mx-auto">
          How Foreversake Works
        </h2>
      </div>

      <div className="grid gap-20 lg:grid-cols-2">

        <div className="lg:py-6 lg:pr-16 text-foreground">
          <div className="flex">
            <Pointer number={1} />
            <div className="pt-1 pb-8">
              <p className="mb-1 text-lg font-bold text-white">
                Purchase your Foreversake Digital Memorial & Download the App
              </p>
              <p className="mb-4 font-light text-gray-300">
                Purchase a Foreversake memorial and we will ship it directly to you and our app is free!
              </p>
            </div>
          </div>

          <div className="flex">
            <Pointer number={2} />
            <div className="pt-1 pb-8">
              <p className="mb-1 text-lg font-bold text-white">
                Set Up Your Loved Ones Interactive Profile
              </p>
              <p className="mb-4 font-light text-gray-300">
                Create a profile for your loved one, adding their details, story, photos, videos, audio clips, and special memories.
              </p>
            </div>
          </div>

          <div className="flex">
            <Pointer number={3} />
            <div className="pt-1 pb-8">
              <p className="mb-1 text-lg font-bold text-white">
                Set Up Your Digital Memorial Ornament
              </p>
              <p className="mb-4 font-light text-gray-300">
                Place the 4x4-inch Foreversake ornament in a meaningful spot, like a mantelpiece, garden, or graveside.
              </p>
            </div>
          </div>

          <div className="flex">
            <Pointer number={4} />
            <div className="pt-1 pb-8">
              <p className="mb-1 text-lg font-bold text-white">
                Tap to Connect
              </p>
              <p className="mb-4 font-light text-gray-300">
                Unlock your phone and gently tap it to the ornament. This uses NFC technology, like contactless payments, to direct you and others to the remembrance profile.
              </p>
            </div>
          </div>

          <div className="flex">
            <Pointer number={5} />
            <div className="pt-1">
              <p className="mb-1 text-lg font-bold text-white">
                Preserve, Share and Remember
              </p>
              <p className="mb-4 font-light text-gray-300">
                Use the app to share these memories with family and friends. They can also add their own, creating a collaborative tribute.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-flex-col">
          <Image
            src="/how_1.png"
            width={500}
            height={200}
            alt="How_to_Use_1"
          />
          <Image
            src="/how_2.png"
            width={500}
            height={350}
            alt="How_to_Use_2"
          />
        </div>

      </div>
      
      
    </div>
  )
}