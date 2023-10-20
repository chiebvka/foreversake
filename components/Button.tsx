import React from 'react'

type Props = {text: string}

export default function Button(props: Props) {
    const {text} = props
  return (
    <button className="border-4 border-yellow-300 rounded-md uppercase text-yellow-300 p-4 sm:text-md md:text-lg lg:text-xl hover:scale-110 focus:opacity-70">
        {text}
    </button>
  )
}