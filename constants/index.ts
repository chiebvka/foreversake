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

interface GalleryTabItem {
  imageUrl: string;
}''

type footerLinks = {
  index: number;
  name: string;
  link: string;
};

type socialMedia = {
  id: number;
  icon: string;
  link: string;
};

export const team: Team[] = [
  {
    index: 1,
    name: 'Dean MacRae',
    description: 'From an industry built on experiences and emotions, Dean operates an events company providing entertainments and all the party essentials to make any occasion memorable. Foreversake is a matured iteration of an early idea of Deans for celebrating life and not forgetting loved ones. Now Dean is driven to deliver something great for the consumer, not just a valued product, but also a valuable experience that can span generations.',
    imageUrl: '/DM_About_Us.webp',
  },
  {
    index: 2,
    name: 'Stewart Gray',
    description: 'Owner of Kaber Helm Software Solutions, Stewart’s background is embedded in operations and utilising data to streamline processes before moving into software development to support businesses. Passionate about technology, it’s growing applications in everyday life and the value it brings to those who use it…  This project lends itself to both Stewarts personal interests and his company’s strengths.',
    imageUrl: '/SG_About_Us.webp',
  },
  {
    index: 3,
    name: 'Remi Okey Ekwe',
    description: 'A technology oriented electrical engineer with years of applied experience in both project and programme management. Remi is also the  co-founder of Sorach medical services. An entrepreneur with an eye for global technologies  and solutions that add value to humanity, Foreversake was a project that resonated with Remi and instantly grabbed his attention, crafting working partnerships to help bring the project to life.',
    imageUrl: '/RO_About_Us[2650].webp',
  },
  {
    index: 4,
    name: 'Kingsley Godwin-Ike (FCCA)',
    description: 'Co-Founder and Managing Director of Hillsview Care Services in London and the Southeast, Kingsleys background rests in accountancy, holding the title of chartered accountant. Currently Kingsley supports individuals with Mental, Physical, and behavioural challenges but has experience working in competitive business environments and growing strategically and financially sound businesses.',
    imageUrl: '/KC_About_Us.webp',
  },
];

export const reason: Reason[] = [
  {
    index: 1,
    name: 'Meaningful',
    description: 'Foreversake provides a tangible way to connect with and remember loved ones or pets who have passed away.',
    imageUrl: '/Why_Foreversake_1Meaningful_Connection.webp',
  },
  {
    index: 2,
    name: 'Innovative',
    description: 'Utilizing NFC technology, Foreversake offers a modern and convenient way to access the digital memorial.',
    imageUrl: '/Why_Foreversake_2Innovative.webp',
  },
  {
    index: 3,
    name: 'Customizable',
    description: 'Create a personalized profile for your loved one, featuring photos, videos, audio clips, and cherished memories.',
    imageUrl: '/Why_Foreversake_3Customize.webp',
  },
  {
    index: 4,
    name: 'Weatherproof',
    description: 'Built to withstand various environments, memorials can be placed anywhere meaningful to the user, indoors or outdoors.',      
    imageUrl: '/Why_Foreversake_4Weatherproof.webp',
  },
  {
    index: 5,
    name: 'Secure',
    description: 'Foreversake takes privacy seriously. Users have full control over who can access and contribute to the memorial profile.',      
    imageUrl: '/Why_Foreversake_5Secure.webp',
  },
  {
    index: 6,
    name: 'Unique',
    description: 'A physical digital memorial and an interactive app sets Foreversake apart from traditional memorial options.',      
    imageUrl: '/Why_Foreversake_6Unique.webp',
  },
];

export const galleryTab: GalleryTabItem[] = [
  {
    imageUrl: "https://themewagon.github.io/snapshot/images/model-1.jpg",
  },
  {
    imageUrl: "https://themewagon.github.io/snapshot/images/model-2.jpg",
  },
  {
    imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg",
  },
  {
    imageUrl: "https://themewagon.github.io/snapshot/images/model-4.jpg",
  },
  {
    imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
  },
  {
    imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
  },
  {
    imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
  },
  {
    imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
  },
  {
    imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
  },
];

export const footerLinks: footerLinks[] = [
  {
    index: 1,
    name: "Home",
    link: "/",
  },
  {
    index: 2,
    name: "Blog",
    link: "blog",
  },
  {
    index: 3,
    name: "Contact",
    link: "contact",
  },
  {
    index: 4,
    name: "Terms of Service",
    link: "terms",
  },
  {
    index: 5,
    name: "Privacy Policy",
    link: "privacy",
  },
];

export const socialMedia: socialMedia[] = [
  {
    id: 1,
    icon: "/facebook.svg",
    link: "https://www.facebook.com/Foreversakeltd",
  },
  {
    id: 2,
    icon: "/linkedin.svg",
    link: "https://www.linkedin.com/company/91585390",
  },
]