"use client" 

import { TailSpin } from  'react-loader-spinner'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <div className="flex min-h-screen items-center justify-center text-white">
      <TailSpin
        height="80"
        width="80"
        color="#DEB738"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>)
  }