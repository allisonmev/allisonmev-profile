interface SiteMetadata {
  title: string;
  author: string;
  headerTitle: string;
  description: string;
  snippets: string;
  language: string;
  theme: 'system' | 'dark' | 'light';
  siteUrl: string;
  siteRepo: string;
  siteLogo: string;
  image: string;
  socialBanner: string;
  email: string;
  github: string;
  linkedIn: string;
  website: string;
  locale: string;
  analytics: {
    plausibleDataDomain: string;
    simpleAnalytics: boolean;
    umamiWebsiteId: string;
    googleAnalyticsId: string;
  };
}

const siteMetadata: SiteMetadata = {
  title: 'Allison Mae | Portfolio',
  author: 'Allison Villapando',
  headerTitle: 'Welcome Welcome',
  description:
    'Passionate & Curious Software Engineer | QA Expert | Mentor | Problem-Solver',
  snippets: 'hello hello',
  language: 'en-us',
  theme: 'light',
  siteUrl: 'https://amv.vercel.app',
  siteRepo: 'https://github.com/allisonmev/allisonmev-profile',
  siteLogo: '/images/the_logo.png',
  image: '/images/koda_dog.png',
  socialBanner: 'TBD',
  email: 'allisonvillapando@yahoo.com',
  github: 'https://github.com/allisonmev',
  linkedIn: 'https://www.linkedin.com/in/allison-villapando/',
  website: 'https://allisonmv.vercel.app',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: ' ',
    simpleAnalytics: false,
    umamiWebsiteId: ' ',
    googleAnalyticsId: ' ',
  },
};

export default siteMetadata;
