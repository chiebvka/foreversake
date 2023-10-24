"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { getCategories } from '@/services';

interface HeaderProps {}

interface Category {
  name: string;
  slug: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [categories, setCategories] = useState<Category[]>([]);  
  const router = useRouter();

  useEffect(() => {
    getCategories().then((newCategories: Category[]) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-6">
      <div className="border-b w-full inline-block border-primary py-4">
        <div className="flex overflow-x-auto items-center justify-center">
          <button onClick={() => router.push(`/blog`)}>
            <span className="mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              All
            </span>
          </button>
          {categories.map((category, index) => (
            <button key={index} onClick={() => router.push(`/blog/category/${category.slug}`)}>
              <span className="mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
