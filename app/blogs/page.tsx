import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import BlogFilter from '@/components/BlogFilter';
import { blogPosts } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';

export const dynamic = 'force-dynamic'

type searchParams = {
  catgeory?: string;
}

type Props = {
  searchParams: searchParams;
}




export default async function page({ searchParams }: Props) {





  // const { selectedCategory, handleCategorySelect } = useBlogFilter(); 

  return (
    <div>
        <div className="flex w-10/12 mx-auto justify-center items-center">
  
        <div className=" lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div role="main" className="flex flex-col items-center justify-center">
            <h1 className="md:text-4xl text-xl font-bold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
            <p className="md:text-xl text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
          </div>
          {/* <div className="w-full flex gap-5 flex-wrap">
            <ul className="flex gap-2 ">

            </ul>
          </div> */}
          <BlogFilter 
           />
          <div className="text-gray-900 py-12  w-full mt-4  ">
            <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
               ">
              <div className="flex flex-col items-center sm:px-5 md:flex-row">
                <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                  <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
                      md:space-y-5">
                    <div className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                        uppercase ">
                      <p className="inline">
                        <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                            00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                            1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                            0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </p>
                      <p className="inline text-xs font-medium">New</p>
                    </div>
                    <a className="text-4xl font-bold leading-none text-foreground lg:text-5xl xl:text-6xl">Write anything. Be creative.</a>
                    <div className="pt-2 pr-0 pb-0 pl-0">
                      <p className="text-sm font-medium text-foreground  inline">author:</p>
                      <a className="inline text-sm font-medium mt-0 text-foreground mr-1 mb-0 ml-1 underline">Jack Sparrow</a>
                      <p className="inline text-sm font-medium mt-0 mr-1 text-foreground  mb-0 ml-1">· 23rd, April 2021 ·</p>
                      <p className="text-gray-200 text-sm font-medium inline text-foreground  mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="block">
                    <img
                        src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"/>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grrid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-5 gap-x-8 gap-y-16">
                {blogPosts.map((post, index) => (
                  <Link href="/blogs/blog" key={index} className="flex relative flex-col border-2 border-foreground overflow-hidden rounded-md items-start group space-y-3 ">
                    <img src={post.imageUrl} className="object-cover w-full mb-2  rounded-lg shadow-sm max-h-56 border-b border-b-foreground group-hover:scale-110 transition-transform  transform duration-300 ease-in-out  "/>
                    <p className="bg-green-500 ml-3 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
                        rounded-md uppercase ">{post.tag}</p>
                    <p className="inline text-xs text-foreground ml-3 font-medium mt-0 mr-1 mb-0 ">{post.date}</p>
                    <p className="text-base line-clamp-1 font-bold  text-foreground mx-3  md:text-xl">{post.title}</p>
                    <p className="text-sm text-foreground mx-3 line-clamp-3 text-black">{post.description}</p>

                        <span className="focus:outline-none focus:underline flex ml-3 pb-3 items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                          <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                          <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
          </div>

    </div>
  )
}