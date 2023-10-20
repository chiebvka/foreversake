"use client"

import React, { FC } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { getPosts, graphCMSImageLoader } from '@/services';

// import { getPosts } from '@/utils/graphql';
// import { graphCMSImageLoader } from '@/utils/graphql';

interface BlogCardProps {
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

const BlogCard: FC<BlogCardProps> = ({ post }) => (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
      <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt={post.title}
        className="object-cover w-full h-64 rounded"
        width={100}
        height={100}
        src={post.featuredImage.url}
        />
        <div className="py-5">
          <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
            13 Jul 2020
          </p>
          <a
            href="/"
            aria-label="Article"
            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <p className="text-2xl font-bold leading-5">Diving to the deep</p>
          </a>
          <p className="mb-4 text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit sed quia
            consequuntur magni voluptatem doloremque.
          </p>
          <div className="text-center">
        <Link href={`/blog/${post.slug}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-yellow-300 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
        </Link>
        </div>
        </div>
      </div>
    </div>
  </div>
);


export default BlogCard;

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
      props: { posts },
    };
  }
  