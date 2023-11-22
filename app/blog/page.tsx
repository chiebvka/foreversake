"use client"
import { useEffect, useState } from "react";
import { getPosts } from "@/services";
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";

type PostsResult = {
  postsConnection: {
    edges: any[];
  };
};

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getPosts_();
  }, []);

  const getPosts_ = async () => {
    const result = await getPosts() as PostsResult;
    setPosts(result.postsConnection.edges);
  }

  return (
    <div className=" mx-auto px-10 mb-8 md:max-w-full lg:max-w-screen-xl ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: { node: any }, index: number) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget categories={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
