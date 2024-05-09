import ourblog1 from './images/blog/ourblog1.jpg';
import ourblog2 from './images/blog/ourblog3.jpg';
import ourblog4 from './images/blog/ourblog5.jpg';
import ourblog5 from './images/bestSeller/b3.jpg';

export const HeaderBottomMenu =[
      {
        title: 'HOME',
        url: '/',
      },
      {
        title: 'ABOUT',
        url: '/about',
      },
      {
        title: 'CONTACT',
        url: '/contact',
      },
      {
        title: 'SHOP',
        url: '#',
        children: [
          {
            title: "women's dresses",
            url: '/shop/womens-dresses',
          },
          {
            title: "women's shoes",
            url: '/shop/womens-shoes',
          },
          {
            title: "women's jewellery",
            url: '/shop/womens-jewellery',
          }
        ]
    },
    {
      title: 'blog',
      url: '/blog',
    },
    {
        title: 'account',
        url: '#',
        children: [
          {
            title: 'login',
            url: '/user'
          },
          {
            title: 'sign up',
            url: '/user'
          }
        ]
    }
    
];
export const HeaderTopMenu =[
  {
    title: 'English',
    url: '#'
},
{
  title: 'wishlist',
  url: '/blog',
},
{
    title: 'dzd',
    url: '#'
}

];
export const HeroData =[
    {
        content1: 'COLLECTION 2021',
        content2: 'Clothes, jewelleries, shoes... ',
        content3:'Everything a woman needs',
        content4:'shop now',
    },
];
export const footerData = [
    {
      id: 1,
      title: 'who we are?',
      children: [
        {
          id: 1,
          title: 'about us',
          path: '/about'
        }
      ]
    },
    {
      id: 2,
      title: 'shop',
      children: [
        {
          id: 1,
          title: "women's dresses",
          path: '/shop/womens-dresses'
        },
        {
          id: 2,
          title: "women's shoes",
          path: '/shop/womens-shoes'
        },
        {
          id: 3,
          title: "women's jewellery",
          path: '/shop/womens-jewellery'
        }
      ]
    },
    {
      id: 3,
      title: 'useful links',
      children: [
        {
          id: 1,
          title: 'account',
          path: '/user'
        },
        {
          id: 2,
          title: 'cart',
          path: '/cart'
        },
        {
          id: 3,
          title: 'blog',
          path: '/blog'
        }
      ]
    },
    {
      id: 4,
      title: 'help',
      children: [
        {
          id: 1,
          title: 'terms and conditions',
          path: '/terms'
        },
        {
          id: 2,
          title: 'privacy policy',
          path: '/privacy'
        },
        {
          id: 3,
          title: 'contact us',
          path: '/contact'
        }
      ]
    },
    {
      id: 5,
      title: 'folow us'
    }
  ];
 
export const ourBlogData = [
  {
    id: '1',
    title: 'discover more about our new season hijabs',
    date: '25 october',
    imgUrl: ourblog1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: '2',
    title: 'what i wore this week?',
    date: '28 october',
    imgUrl: ourblog2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: '3',
    title: 'my favorite jeans in my closet',
    date: '27 october',
    imgUrl: ourblog4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: '4',
    title: 'my favorite jeans in my closet',
    date: '27 october',
    imgUrl: ourblog5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]