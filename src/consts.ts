// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "ja";
export const SITE_TAB = "Satellite";
export const SITE_TITLE = "Frosti 🧊";
export const SITE_DESCRIPTION = "UTshion's Blog";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Satellite";
export const USER_SITE = "https://astroxene.com"
export const USER_AVATAR = "/profile.jpg";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
}
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
} as const

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" },
  { id: "about", text: "About", href: "/about", svg: "about", target: "_self" },
  {
    id: "project",
    text: "Project",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "post",
        target: "_self",
      },
      {
        id: "tech",
        text: "Tech blogs",
        href: "/blog/categories/tech",
        svg: "cube",
        target: "_self",
      },
      {
        id: "life",
        text: "Life blogs",
        href: "/blog/categories/life",
        svg: "heart",
        target: "_self",
      },
    ],
  }, // Blog page with sub-items
  // {
  //   id: "contact",
  //   text: "Contact",
  //   href: "mailto:contact.evesunmaple@outlook.com", // Contact email
  //   target: "_blank", // Open in a new tab
  //   svg: "contact",
  // },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://discordapp.com/users/662185034647863296",
    ariaLabel: "Discord",
    title: "Discord",
    svg: "discord",
  },
  {
    href: "https://x.com/chemical_NS",
    ariaLabel: "X(Twitter)",
    title: "X(Twitter)",
    svg: "x",
  },
  {
    href: "https://github.com/UTshion",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];
