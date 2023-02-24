import { Email, Home, Phone } from "@material-ui/icons";
import ourblog1 from './images/blog/ourblog1.jpg';
import ourblog2 from './images/blog/ourblog3.jpg';
import ourblog3 from './images/blog/ourblog2.jpg';
import ourblog4 from './images/blog/ourblog5.jpg';
import ourblog5 from './images/bestSeller/b3.jpg';
import ourblog6 from  './images/bestSeller/b3.jpg';

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
            title: 'clothes',
            url: '/shop/clothes',
          },
          {
            title: 'shoes',
            url: '/shop/shoes',
          },
          {
            title: 'electronics',
            url: '/shop/electronics',
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
    url: '#',
    children: [
      {
        title: 'men',
        url: '/shop',
      },
      {
        title: 'woman',
        url: '/shop',
      },
      {
        title: 'kids',
        url: '/shop',
      }
    ]
},
{
  title: 'wishlist',
  url: '/blog',
},
{
    title: 'dzd',
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
export const HeroData =[
    {
        content1: 'COLLECTION 2021',
        content2: 'New season arrivals',
        content3:'Check Out All The New Tends',
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
          title: 'clothes',
          path: '/shop/clothes'
        },
        {
          id: 2,
          title: 'shoes',
          path: '/shop/shoes'
        },
        {
          id: 3,
          title: 'electronics',
          path: '/shop/electronics'
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
  export const contactData = [
    {
      titlePage: 'contact us',
      titleForm: 'contact information',
      children: [
        {
          id: 1,
          icon: Email,
          title: 'smilland@email.com'
        },
        {
          id: 2,
          icon: Phone,
          title: '+213-78-96-85-14'
        },
        {
          id: 3,
          icon: Home,
          title: 'Adress/Smile land'
        }
      ]
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
export const termsData = [
  {
    titlePageid: 'terms and conditions',
    termsArray: [
      {
        id: 1,
        title: 'Interpretation and Definitions',
        description: [
          {
            titleChild: 'Interpretation',
          },
          {
            paragraph: 'The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.'
          },
          {
            titleChild: 'Definitions',
          },
          {
            paragraph: 'For the purposes of these Terms and Conditions:'
          },
          {
            listWithTitle: [
              {
                title: 'Affiliate',
                paragraph: 'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.'
              },
              {
                title: 'Account',
                paragraph: 'means a unique account created for You to access our Service or parts of our Service.'
              },
              {
                title: 'Company',
                paragraph: '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to FreePrivacyPolicy.com website.'
              },
              {
                title: 'Content',
                paragraph: 'refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content.'
              },
              {
                title: 'Country',
                paragraph: 'refers to: Romania'
              },
              {
                title: 'Device',
                paragraph: 'means any device that can access the Service such as a computer, a cellphone or a digital tablet.'
              },
              {
                title: 'Feedback',
                paragraph: 'means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service.'
              },
              {
                title: 'Products',
                paragraph: 'refer to the products or items offered for sale on the Service.'
              },
              {
                title: 'Orders',
                paragraph: 'mean a request by You to purchase Products from Us.'
              },
              {
                title: 'Promotions',
                paragraph: 'refer to contests, sweepstakes or other promotions offered through the Service.'
              },
              {
                title: 'Service',
                paragraph: 'refers to the Website.'
              },
              {
                title: 'Terms and Conditions',
                paragraph: '(also referred as "Terms" or "Terms of Use") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.'
              },
              {
                title: 'Third-party Social Media Service',
                paragraph: 'means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.'
              },
              {
                title: 'Website',
                paragraph: 'refers to FreePrivacyPolicy.com, accessible from https://www.freeprivacypolicy.com'
              },
              {
                title: 'You',
                paragraph: 'means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 3,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 4,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 5,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 6,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 7,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 8,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 9,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 10,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 11,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 12,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 13,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 14,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 15,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 16,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 17,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 18,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 19,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 20,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 21,
        title: 'Email',
        description: 'smilland@email.com'
      },
      {
        id: 22,
        title: 'Email',
        description: 'smilland@email.com'
      },    
    ]
  }
]