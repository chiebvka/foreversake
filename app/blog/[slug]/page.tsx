
"use client"

import PostDetail from '@/components/PostDetail';
import PostWidget from '@/components/PostWidget';
import { getPostDetails } from '@/services';

export default async function PostDetails({ params }: {params: any}) {
  const post = await getPostDetails(params.slug);
  
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget categories={[]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
