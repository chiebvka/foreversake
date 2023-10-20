"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { graphCMSImageLoader } from '@/services';
import { getSimilarPosts, getRecentPosts } from '@/services';

interface PostWidgetProps {
  categories: string[];
  slug?: string;
}

const PostWidget: React.FC<PostWidgetProps> = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result: any[]) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result: any[]) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-xl font-semibold border-b pb-4">Related Posts</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={graphCMSImageLoader}
              alt={post.title}
              height="60"
              width="60"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-600 text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/blog/${post.slug}`} className="text-sm" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;