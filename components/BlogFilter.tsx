"use client"

import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { blogPosts } from '@/constants';


// type BlogPost = {
//     index: number;
//     date: string;
//     title: string;
//     tag: string;
//     description: string;
//     imageUrl: string;
//   };
  
// const blogPosts: BlogPost[] = [
//     {
//       index: 1,
//       date: '13 April 2021',
//       title: 'The Boyas Ways',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
//       tag: "Business",
//       imageUrl: 'https://i.ibb.co/DYxtCJq/img-1.png',
//     },
//     {
//       index: 2,
//       date: '14 May 2021',
//       title: 'The Generation V',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
//       tag: "Intro",
//       imageUrl: 'https://i.ibb.co/3C5HvxC/img-2.png',
//     },
//     {
//       index: 3,
//       date: '14 June 2021',
//       title: 'The Lord of the rings',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
//       tag: "Sports",
//       imageUrl: 'https://i.ibb.co/6XYbN7f/Rectangle-29.png',
//     },
//     {
//       index: 4,
//       date: '14 July 2021',
//       title: 'The Hunger Games',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
//       tag: "Live",
//       imageUrl: 'https://i.ibb.co/3yvZBpm/img-5.png',
//     },
//     {
//       index: 5,
//       date: '14 August 2021',
//       title: 'The Twilight zone',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
//       tag: "Updates",
//       imageUrl: 'https://i.ibb.co/gDdnJb5/img-6.png',
//     },
//     {
//       index: 6,
//       date: '13 September 2021',
//       title: 'The Danger Drop',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
//       tag: "Sports",
//       imageUrl: 'https://i.ibb.co/DYxtCJq/img-1.png',
//     },
//     {
//       index: 7,
//       date: '8 October 2021',
//       title: 'This is us',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
//       tag: "Tech",
//       imageUrl: 'https://i.ibb.co/3C5HvxC/img-2.png',
//     },
//     {
//       index: 8,
//       date: '24 November 2021',
//       title: 'The Amazing Spider Man',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
//       tag: "Startups",
//       imageUrl: 'https://i.ibb.co/6XYbN7f/Rectangle-29.png',
//     },
//     {
//       index: 9,
//       date: '17 December 2021',
//       title: 'Inception',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
//       tag: "Food",
//       imageUrl: 'https://i.ibb.co/3yvZBpm/img-5.png',
//     },
//     {
//       index: 10,
//       date: '14 January 2022',
//       title: 'Twice as Tall',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
//       tag: "Entertainment",
//       imageUrl: 'https://i.ibb.co/DYxtCJq/img-1.png',
//     },
//     // Add more blog posts here
//   ];



// type BlogFilterProps = {
//     onCategorySelect: (categoryName: string | null) => void;
//   };
type Props = {

}


export default function BlogFilter({  }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const category  = searchParams.get('tag');

   



    const [selectedCategory, setSelectedCategory] = useState<string | null>(category || null);

      // Function to handle tag click and update the selectedTag state
//   const handleTagClick = (tag: string) => {
//     router.push(`${pathname}?category=${tag}`)
//   };
    // Function to handle tag click and update the selectedTag state
    const handleTagClick = (tag: string) => {
        router.push(`${pathname}?category=${tag}`);
        // onCategorySelect(tag === category ? null : tag); // Toggle category selection
      };

    //   const handleCategorySelect = (categoryName: string | null) => {
    //     setSelectedCategory(categoryName);
    //   };
    

//     // Filter blog posts based on the selected category
//     const filteredBlogPosts = selectedCategory
//     ? blogPosts.filter((post) => post.tag === selectedCategory)
//     : blogPosts;

//   // Function to handle category selection
//   const handleCategorySelect = (categoryName: string) => {
//     setSelectedCategory(categoryName);
//   };

//     // Function to clear the selected tag and show all posts
//     const clearFilter = () => {
//         setSelectedTag(null);
//       };


//         // Filter blog posts based on the selected tag or show all posts if no tag is selected
//   const filteredPosts = selectedTag
//   ? blogPosts.filter((post) => post.tag === selectedTag)
//   : blogPosts;

  return (
    <div className='flex w-9/12 mx-auto  py-2 gap-5'>
        <ul className="flex gap-2 overflow-auto">
        {[...new Set(blogPosts.map((post) => post.tag))].map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`${
                category === tag 
              ? 'bg-light-white-200 font-medium' : 'font-normal'} px-4 py-3 rounded-lg capitalize whitespace-nowrap`}
            >
              {tag}
            </button>
          ))}
        </ul>
    </div>
  )
}