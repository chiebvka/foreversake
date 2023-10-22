import React, { FC, ReactNode } from 'react';
import moment from 'moment';

interface ContentItem {
  type: string;
  children: Array<{
    bold: any;
    italic: any;
    underline: any;
    text: string;
  }>;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  title?: string;
  height?: number;
  width?: number;
  src?: string;
}

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
      raw: (string | ContentItem)[] | string;
    } | string;
  } | null;
  children?: ReactNode;
}

const PostDetail: FC<PostDetailProps> = ({ post }) => {
  if (!post) {
    return <div>No data found.</div>;
  }
  const contentFragment: (string | ContentItem)[] = Array.isArray(post.content)
    ? post.content
    : typeof post.content === 'string'
    ? [post.content]
    : [];

  const getContentFragment = (content: string | ContentItem, index: number) => {
    if (typeof content === 'string') {
      return <p key={index} className="mb-8">{content}</p>;
    }

    const modifiedText: React.ReactNode[] = content.children.map((item, i) => {
      let element: React.ReactNode = item.text;

      if (item.bold) {
        element = <b key={i}>{element}</b>;
      }

      if (item.italic) {
        element = <em key={i}>{element}</em>;
      }

      if (item.underline) {
        element = <u key={i}>{element}</u>;
      }

      return element;
    });

    switch (content.type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={content.title || ''}
            height={content.height}
            width={content.width}
            src={content.src}
          />
        );
      default:
        return modifiedText;
    }
  };

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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle text-sm xs:text-base">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-4 text-2xl lg:text-3xl font-bold leading-none tracking-tight">{post.title}</h1>
          {contentFragment.map((typeObj, index) => getContentFragment(typeObj, index))}
        </div>
      </div>
    </>
  );
};

export default PostDetail;