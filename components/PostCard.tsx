"use client"

import React, { FC } from 'react';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import Button from './Button';

import { getPosts } from '@/services';
import { graphCMSImageLoader } from '@/services';

interface PostCardProps {
  post: {
    title: string;
    featuredImage: {
      url: string;
    };
    slug: string;
    author: {
      name: string;
      photo: {
        url: string;
      };
    };
    createdAt: string;
    excerpt: string;
  };
}

const PostCard: FC<PostCardProps> = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-8 mb-8">
     <div className="relative shadow-md inline-block w-full h-[250px] lg:h-[450px]">
      <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt={post.title}
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> 

    <div className='mx-4'>
      <h1 className="transition duration-700 my-4 cursor-pointer text-2xl lg:text-3xl font-bold leading-none tracking-tight">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className=" flex flex-col lg:flex-row mb-4 w-full">
        <div className="flex flex-row items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            unoptimized
            loader={graphCMSImageLoader}
            alt={post.author.name}
            height="30"
            width="30"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-gray-700 ml-2 font-medium xs:text-lg">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle text-sm xs:text-base">{format(parseISO(post.createdAt), 'MMM do, yyyy')}</span>
        </div>
      </div>
      <p className="xs:text-lg text-gray-700 font-normal mb-4">
        {post.excerpt}
      </p>
      <div className="text-center my-4">
        <Link href={`/blog/${post.slug}`}>
          <Button text={"Continue Reading..."}/>
        </Link>
      </div>
    </div>
  </div>
);

export default PostCard;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
