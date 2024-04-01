import logo from "@assets/img/logo/logo.svg";
import logoWhite from "@assets/img/logo/logo-white.svg";

const footer_data = {
  description: {
    id: 1,
    logo: logo,
    logoWhite: logoWhite,
    teaser:
      "In our Adult Participation programs, for most students, it is their first program in Kindedo.",
    socialTitle: "Social",
    newsTitle: "Join Our Newsletter",
    newsBtn: "Subscribe now",
    social_icons: [
      {
        id: 1,
        icon: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/",
        name: "Facebook",
      },
      {
        id: 2,
        icon: "fa-brands fa-twitter",
        url: "https://twitter.com/",
        name: "Twitter",
      },
      {
        id: 3,
        icon: "fa-brands fa-youtube",
        url: "https://www.youtube.com/",
        name: "Youtube",
      },
    ],
  },
  quick_links: {
    id: 2,
    title: "Quick links",
    menus: [
      {
        id: 1,
        menu: "About",
        path: "/about",
      },
      {
        id: 2,
        menu: "Programs",
        path: "/programs",
      },
      {
        id: 3,
        menu: "Shop",
        path: "/shop",
      },
      {
        id: 4,
        menu: "Classes",
        path: "/classes",
      },
      {
        id: 5,
        menu: "News",
        path: "/news",
      },
      {
        id: 6,
        menu: "Contact",
        path: "/contact",
      },
    ],
  },
  program_links: {
    id: 3,
    title: "Programs",
    programs: [
      {
        id: 1,
        menu: "Play School",
        path: "/programs",
      },
      {
        id: 2,
        menu: "Nursery",
        path: "/programs",
      },
      {
        id: 3,
        menu: "Junior Kg",
        path: "/programs",
      },
      {
        id: 4,
        menu: "Senior Kg",
        path: "/programs",
      },
      {
        id: 5,
        menu: "Holiday Camp",
        path: "/programs",
      },
      {
        id: 6,
        menu: "Day Care",
        path: "/programs",
      },
    ],
  },
  customer_services: {
    id: 3,
    title: "Programs",
    services: [
      {
        id: 1,
        menu: "Recently Viewed",
        path: "/programs",
      },
      {
        id: 2,
        menu: "New Products",
        path: "/shop",
      },
      {
        id: 3,
        menu: "Shipping & Returns",
        path: "/contact",
      },
      {
        id: 4,
        menu: "Senior Kg",
        path: "/programs",
      },
      {
        id: 5,
        menu: "Become a Seller",
        path: "/programs",
      },
    ],
  },
  contactInfo: {
    id: 4,
    title: "Contact Us",
    infos: [
      {
        id: 1,
        icon: "fa-light fa-location-dot",
        url: "#",
        title: "14/A, Kilix Home Tower, NYC",
      },
      {
        id: 2,
        icon: "fa-light fa-phone",
        url: "tel:9072003462",
        title: "907-200-3462",
      },
      {
        id: 3,
        icon: "fa-light fa-envelope",
        url: "mailto:support@kindedo.com",
        title: "Support@kindedo.com",
      },
    ],
  },
};

export default footer_data;
