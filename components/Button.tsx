import React from 'react'

type Props = {text: string}

export default function Button(props: Props) {
    const {text} = props
  return (
    <button className="border border-primary rounded-md uppercase bg-primary text-white p-4 sm:text-md md:text-lg  hover:scale-110 transition ease-in-out duration-300 focus:opacity-70">
        {text}
    </button>
  )
}