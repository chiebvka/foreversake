import React, { FC, ReactNode } from 'react';
import { format, parseISO } from 'date-fns';
import { RichText } from '@graphcms/rich-text-react-renderer'

interface PostDetailProps {
  post: {
    featuredImage: {
      url: string;
    };
    author: {
      name: string;
      photo: {
        url: string;
      };
    };
    createdAt: string;
    title: string;
    content: {
      markdown: string,
      raw: string,
    };
  } | null;
  children?: ReactNode;
}

const PostDetail: FC<PostDetailProps> = ({ post }) => {

  if (!post) {
    return <div>No data found.</div>;
  }
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.featuredImage.url} alt="" className="object-top h-[250px] lg:h-[450px] w-full object-contain shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-4 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle text-sm xs:text-base">{format(parseISO(post.createdAt), 'MMM do, yyyy')}</span>
            </div>
          </div>
          <h1 className="mb-4 text-2xl lg:text-3xl font-bold leading-none tracking-tight">{post.title}</h1>
          <div className="prose lg:pb-0 lg:row-span-2">
            <RichText 
              content={post.content.raw} 
              renderers={{
                p: ({ children }) => <p className="mb-4">{children}</p>,
              }}
      
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;