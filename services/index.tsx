import request,{gql} from "graphql-request"

const graphqlAPI: any = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const graphCMSImageLoader = ({ src }: { src: string }): string => src;

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
        }}
      }
    }    
    `

    const result: any = await request(graphqlAPI,query);
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
  
    const result: any = await request(graphqlAPI, query);
  
    return result.categories;
  };

  export const getProfile = async () => {
    const query = gql`
      query GetProfiles {
        profiles {
          description
          doB
          doP
          firstName
          relation
          surname
          birthPlace
          restPlace
          image {
            url
          }
          familyMedia {
            url
          }
        }
      }

    `;
  
    const result: any = await request(graphqlAPI, query);
  
    return result.profiles;
  };
  
  export const getPostDetails = async (slug: string) => {
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
            markdown
          }
          categories {
            name
            slug
          }
        }
      }
    `;
  
    const result: any = await request(graphqlAPI, query, { slug });
  
    return result.post;
  };
  
  export const getCategoryPost = async (slug: string) => {
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
  
    const result: any = await request(graphqlAPI, query, { slug });
  
    return result.postsConnection.edges;
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
    const result: any = await request(graphqlAPI, query);
  
    return result.posts;
  };



