const pages = [
  { path: '/', label: 'Home', icon: 'Home' },
  { path: '/about', label: 'About', icon: 'User' },
  { path: '/gallery', label: 'Gallery', icon: 'Image' },
  { path: '/services', label: 'Services', icon: 'Sparkles' },
  { path: '/contact', label: 'Contact', icon: 'Phone' },
];

export const getPages = () => pages;

export const getPageByPath = (path) => pages.find(p => p.path === path) || null;