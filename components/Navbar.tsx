"use client"

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';

import localFont from 'next/font/local';
const october = localFont({ src: '../public/fonts/hey_october.woff2', variable: "--heading-font" })


type Props = {}

export default function Navbar({}: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <div className=' flex justify-between items-center w-11/12 md:py-5 pb-3 mx-auto'>
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5  p-1.5">
          <img 
           src='/Foreversake_Logo_Realism.webp'
           className='h-16 w-18'
          />
        </Link>
      </div>
      <div className="flex">
        <button
          type="button"
          className="-mx-2 mt-2 inline-flex items-center justify-center z-10 rounded-md p-2.5 "
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <AiOutlineMenu className="h-8 w-8 text-primary" aria-hidden="true" />
        </button>

        <Dialog as="div" className="has-before hover:shine z-40 transition-all duration-150 delay-250" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0  z-10" ></div>
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto hover:shine transition-all duration-150 delay-500  bg-background  px-6 py-3">
            <div className="flex w-full mx-auto items-center justify-between">
              <Link href="/"  onClick={() => setMobileMenuOpen(false)} className="md:ml-7 mb-7  p-1.5">
              <img 
                src='/Foreversake_Logo_Realism.webp'
                className='h-16 w-18'
              />
              </Link>
              <button
                type="button"
                className=" md:mr-7 mb-2 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <AiOutlineClose className="h-6 w-6 text-primary" aria-hidden="true" />
              </button>
            </div>
            <div className="w-11/12 mx-auto flow-root">
              <div className="-my-6 md:ml-7 mb-7 divide-y divide-foreground">
                <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${october.className} -mx-3 block px-3 py-2 md:text-5xl text-2xl leading-7 text-primary`}
                  >
                    {item.name}
                  </Link>
                 ))}
                </div>

              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  )
}