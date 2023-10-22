import request,{gql} from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';

export const graphCMSImageLoader = ({ src }: { src: string })  => src;

interface PostDetails {
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  author: {
    name: string;
    bio: string;
    photo: {
      url: string;
    };
  };
  createdAt: string;
  slug: string;
  content: {
    raw: string;
  };
  categories: {
    name: string;
    slug: string;
  }[];
}


const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clnnury2731er01uo87wra03r/master";

export const getPosts=async()=>{
    const query=gql`
    query Assets {
        assets {
            createdAt
            id
            publishedAt
            fileName
            url
            updatedAt
        }
        postsConnection {
            edges {
            node {
                author {
                bio
                name
                id
                photo {
                    url
                }
                }
                createdAt
                slug
                title
                excerpt
                featuredImage {
                url
                }
                categories {
                name
                }
            }
            }
        }
    }    
    `

    const result=await request(graphqlAPI,query);
    return result;
}

export const getCategories = async () => {
    const query = gql`
      query GetGategories {
          categories {
            name
            slug
          }
      }
    `;
  
    try {
      const result: { categories: any[] } = await request(graphqlAPI, query);
      // Now TypeScript knows that result has a 'categories' property
      return  result.categories;

    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error; // Rethrow the error for higher-level error handling
    }
  };
  
  export const getPostDetails = async (slug: string): Promise<PostDetails | null> => {
  // export const getPostDetails = async (slug:) => {
    if (!slug) {
      throw new Error('Invalid slug'); // Handle this case appropriately
    }
    const query = gql`
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          excerpt
          featuredImage {
            url
          }
          author{
            name
            bio
            photo {
              url
            }
          }
          createdAt
          slug
          content {
            raw
          }
          categories {
            name
            slug
          }
        }
      }
    `;
  
    const result: { post: PostDetails } = await request(graphqlAPI, query, { slug });

    return result.post;
  
    // const result = await request(graphqlAPI, query, { slug });
  
    // return result.post;

  };
  
  export const getSimilarPosts = async (categories: string[], slug: string) => {
  // export const getSimilarPosts = async (categories, slug) => {
    if (!slug) {
      throw new Error('Invalid slug'); // Handle this case appropriately
    }

    const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
        posts(
          where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;
    const result: { posts: any[] } = await request(graphqlAPI, query, { slug, categories });

    return result.posts;
    // const result = await request(graphqlAPI, query, { slug, categories });
  
    // return result.posts;
  };
  
  export const getAdjacentPosts = async (createdAt: string, slug: string)  => {
    const query = gql`
      query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
        next:posts(
          first: 1
          orderBy: createdAt_ASC
          where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
        previous:posts(
          first: 1
          orderBy: createdAt_DESC
          where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;
  
    const result: { next: any[]; previous: any[] } = await request(graphqlAPI, query, { slug, createdAt });

    return { next: result.next[0], previous: result.previous[0] };
    // const result = await request(graphqlAPI, query, { slug, createdAt });
  
    // return { next: result.next[0], previous: result.previous[0] };
  };
  
  export const getCategoryPost = async (slug: string)  => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: {categories_some: {slug: $slug}}) {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result: { postsConnection: { edges: any[] } } = await request(graphqlAPI, query, { slug });

    return result.postsConnection.edges;
    // const result = await request(graphqlAPI, query, { slug });
  
    // return result.postsConnection.edges;
  };
  
  export const getFeaturedPosts = async () => {
    const query = gql`
      query GetCategoryPost() {
        posts(where: {featuredPost: true}) {
          author {
            name
            photo {
              url
            }
          }
          featuredImage {
            url
          }
          title
          slug
          createdAt
        }
      }   
    `;
  
    const result: { posts: any[] } = await request(graphqlAPI, query);

    return result.posts;
  
    // const result = await request(graphqlAPI, query);
  
    // return result.posts;
  };
  
  export const submitComment = async (obj: any) => {
  // export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  
    return result.json();
  };
  
  export const getComments = async (slug: string) => {
    const query = gql`
      query GetComments($slug:String!) {
        comments(where: {post: {slug:$slug}}){
          name
          createdAt
          comment
        }
      }
    `;
  
    const result: { comments: any[] } = await request(graphqlAPI, query, { slug });

    return result.comments;
    
    // const result = await request(graphqlAPI, query, { slug });
  
    // return result.comments;
  };
  
  export const getRecentPosts = async () => {
    const query = gql`
      query GetPostDetails() {
        posts(
          orderBy: createdAt_ASC
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;
    const result: { posts: any[] } = await request(graphqlAPI, query);

    return result.posts;
    // const result = await request(graphqlAPI, query);
  
    // return result.posts;
  };



