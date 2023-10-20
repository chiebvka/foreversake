type BlogPost = {
    index: number;
    date: string;
    title: string;
    tag: string;
    description: string;
    imageUrl: string;
  };

  type Team = {
    index: number;
    name: string;
    description: string;
    imageUrl: string;
  };

  type Reason = {
    index: number;
    name: string;
    description: string;
    imageUrl: string;
  };

  export const team: Team[] = [
    {
      index: 1,
      name: 'Dean MacRae',
      description: 'From an industry built on experiences and emotions, Dean operates an events company providing entertainments and all the party essentials to make any occasion memorable. Foreversake is a matured iteration of an early idea of Deans for celebrating life and not forgetting loved ones. Now Dean is driven to deliver something great for the consumer, not just a valued product, but also a valuable experience that can span generations.',
      imageUrl: '/DM_About_Us.png',
    },
    {
      index: 2,
      name: 'Stewart Gray',
      description: 'Owner of Kaber Helm Software Solutions, Stewart’s background is embedded in operations and utilising data to streamline processes before moving into software development to support businesses. Passionate about technology, it’s growing applications in everyday life and the value it brings to those who use it…  This project lends itself to both Stewarts personal interests and his company’s strengths.',
      imageUrl: '/SG_About_Us.png',
    },
    {
      index: 3,
      name: 'Remi Okey Ekwe',
      description: 'A technology oriented electrical engineer with years of applied experience in both project and programme management. Remi is also the  co-founder of Sorach medical services. An entrepreneur with an eye for global technologies  and solutions that add value to humanity, Foreversake was a project that resonated with Remi and instantly grabbed his attention, crafting working partnerships to help bring the project to life.',
      imageUrl: '/RO_About_Us[2650].png',
    },
    {
      index: 4,
      name: 'Kingsley Godwin-Ike (FCCA)',
      description: 'Co-Founder and Managing Director of Hillsview Care Services in London and the Southeast, Kingsleys background rests in accountancy, holding the title of chartered accountant. Currently Kingsley supports individuals with Mental, Physical, and behavioural challenges but has experience working in competitive business environments and growing strategically and financially sound businesses.',
      imageUrl: '/KC_About_Us.png',
    },
  ];

  export const reason: Reason[] = [
    {
      index: 1,
      name: 'Meaningful',
      description: 'Foreversake provides a tangible way to connect with and remember loved ones or pets who have passed away.',
      imageUrl: '/Why_Foreversake_1Meaningful_Connection.png',
    },
    {
      index: 2,
      name: 'Innovative',
      description: 'Utilizing NFC technology, Foreversake offers a modern and convenient way to access the digital memorial.',
      imageUrl: '/Why_Foreversake_2Innovative.png',
    },
    {
      index: 3,
      name: 'Customizable',
      description: 'Create a personalized profile for your loved one, featuring photos, videos, audio clips, and cherished memories.',
      imageUrl: '/Why_Foreversake_3Customize.png',
    },
    {
      index: 4,
      name: 'Weatherproof',
      description: 'Built to withstand various environments, memorials can be placed anywhere meaningful to the user, indoors or outdoors.',      
      imageUrl: '/Why_Foreversake_4Weatherproof.png',
    },
    {
      index: 5,
      name: 'Secure',
      description: 'Foreversake takes privacy seriously. Users have full control over who can access and contribute to the memorial profile.',      
      imageUrl: '/Why_Foreversake_5Secure.png',
    },
    {
      index: 6,
      name: 'Unique',
      description: 'A physical digital memorial and an interactive app sets Foreversake apart from traditional memorial options.',      
      imageUrl: '/Why_Foreversake_6Unique.png',
    },
  ];

  export const blogPosts: BlogPost[] = [
    {
      index: 1,
      date: '13 April 2021',
      title: 'The Boyas Ways',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Business",
      imageUrl: 'https://i.ibb.co/DYxtCJq/img-1.png',
    },
    {
      index: 2,
      date: '14 May 2021',
      title: 'The Generation V',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Intro",
      imageUrl: 'https://i.ibb.co/3C5HvxC/img-2.png',
    },
    {
      index: 3,
      date: '14 June 2021',
      title: 'The Lord of the rings',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Sports",
      imageUrl: 'https://i.ibb.co/6XYbN7f/Rectangle-29.png',
    },
    {
      index: 4,
      date: '14 July 2021',
      title: 'The Hunger Games',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Live",
      imageUrl: 'https://i.ibb.co/3yvZBpm/img-5.png',
    },
    {
      index: 5,
      date: '14 August 2021',
      title: 'The Twilight zone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Updates",
      imageUrl: 'https://i.ibb.co/gDdnJb5/img-6.png',
    },
    {
      index: 6,
      date: '13 September 2021',
      title: 'The Danger Drop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Sports",
      imageUrl: 'https://i.ibb.co/DYxtCJq/img-1.png',
    },
    {
      index: 7,
      date: '8 October 2021',
      title: 'This is us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Tech",
      imageUrl: 'https://i.ibb.co/3C5HvxC/img-2.png',
    },
    {
      index: 8,
      date: '24 November 2021',
      title: 'The Amazing Spider Man',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Startups",
      imageUrl: 'https://i.ibb.co/6XYbN7f/Rectangle-29.png',
    },
    {
      index: 9,
      date: '17 December 2021',
      title: 'Inception',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Food",
      imageUrl: 'https://i.ibb.co/3yvZBpm/img-5.png',
    },
    {
      index: 10,
      date: '14 January 2022',
      title: 'Twice as Tall',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Entertainment",
      imageUrl: 'https://i.ibb.co/DYxtCJq/img-1.png',
    },
    {
      index: 11,
      date: '14 January 2022',
      title: 'Twice as Tall',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Entertainment",
      imageUrl: 'https://i.ibb.co/DYxtCJq/img-1.png',
    },
    {
      index: 12,
      date: '14 January 2022',
      title: 'Twice as Tall',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Jonny",
      imageUrl: 'https://i.ibb.co/DYxtCJq/img-1.png',
    },
    {
      index: 13,
      date: '14 January 2022',
      title: 'Twice as Tall',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Phyno",
      imageUrl: 'https://i.ibb.co/DYxtCJq/img-1.png',
    },
    {
      index: 14,
      date: '14 January 2022',
      title: 'Twice as Tall',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Olamide",
      imageUrl: 'https://i.ibb.co/DYxtCJq/img-1.png',
    },
    {
      index: 15,
      date: '14 January 2022',
      title: 'Twice as Tall',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      tag: "Oyenusi",
      imageUrl: 'https://i.ibb.co/DYxtCJq/img-1.png',
    },
    // Add more blog posts here
  ];
  