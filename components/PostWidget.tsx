"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

import { graphCMSImageLoader } from '@/services';
import { getRecentPosts } from '@/services';

interface PostWidgetProps {
  categories: string[];
  slug?: string;
}

const PostWidget: React.FC<PostWidgetProps> = ({ categories, slug }) => {
  const [recentPosts, setRecentPosts] = useState<any[]>([]);

  useEffect(() => {
      getRecentPosts().then((result: any[]) => {
        setRecentPosts(result);
      });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-xl font-semibold text-black border-b pb-4">Latest Posts</h3>
      {recentPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none ">
            <Image
              loader={graphCMSImageLoader}
              alt={post.title}
              height="60"
              width="60"
              unoptimized
              className="align-middle rounded-full  "
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-600 text-sm">{format(parseISO(post.createdAt), 'MMM do, yyyy')}</p>
            <Link href={`/blog/${post.slug}`} className="text-sm text-primary" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;