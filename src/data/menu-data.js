const isDev = process.env.NODE_ENV === "development";

const menu_data = [
  {
    id: 3,
    title: "Classes",
    hasDropdown: false,
    link: "/classes",
  },
  {
    id: 6,
    hasDropdown: true,
    title: "News",
    link: "/news",
    submenus: [
      { title: "News Default", link: "/news" },
      { title: "News Sidebar", link: "/news-sidebar" },
      { title: "News Classic", link: "/news-classic" },
      { title: "News Details", link: "/news-details" },
    ],
  },
  {
    id: 2,
    hasDropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 7,
    hasDropdown: false,
    title: "Contact",
    link: "/contact",
  },
];

// {
//   id: 1,
//   hasDropdown: true,
//   title: "Home",
//   link: "/",
//   submenus: [
//     { title: "Home Style 1", link: "/" },
//     { title: "Home Style 2", link: "/home-2" },
//     { title: "Home Style 3", link: "/home-3" },
//   ],
// },
// {
//   id: 2,
//   hasDropdown: false,
//   title: "About",
//   link: "/about",
// },
// {
//   id: 3,
//   title: "Programs",
//   megaMenuTwo: true,
//   megaMenu: false,
//   link: "/programs",
//   mega_menus_two: [
//     {
//       title: "List 1",
//       link: "#",
//       submenus: [
//         {
//           title: "Settling",
//           link: "/program-details",
//           count: "01",
//           age: "4-5 Yrs",
//         },
//         {
//           title: "Nuesery Group",
//           link: "/program-details",
//           count: "02",
//           age: "3-4 Yrs",
//         },
//         {
//           title: "Play Group",
//           link: "/program-details",
//           count: "03",
//           age: "2-3 Yrs",
//         },
//       ],
//     },
//     {
//       title: "List 2",
//       link: "#",
//       submenus: [
//         {
//           title: "Nuesery",
//           link: "/program-details",
//           count: "04",
//           age: "3-4 Yrs",
//         },
//         {
//           title: "Junior Kg",
//           link: "/program-details",
//           count: "05",
//           age: "4-5 Yrs",
//         },
//         {
//           title: "Senior Kg",
//           link: "/program-details",
//           count: "06",
//           age: "5-6 Yrs",
//         },
//       ],
//     },
//     {
//       title: "List 3",
//       link: "#",
//       submenus: [
//         {
//           programImg: true,
//           title: "Join New Program",
//           link: "/programs",
//           img: "/assets/img/logo/mega-menu-1.png",
//           btn: "View More",
//         },
//       ],
//     },
//   ],
// },
// {
//   id: 4,
//   hasDropdown: true,
//   title: "Shop",
//   link: "/shop",
//   submenus: [
//     { title: "Shop Main", link: "/shop" },
//     { title: "Shop Details", link: "/shop-details" },
//     { title: "Wishlist", link: "/wishlist" },
//     { title: "Cart", link: "/cart" },
//     { title: "Checkout", link: "/checkout" },
//   ],
// },
// {
//   id: 5,
//   title: "Pages",
//   megaMenu: true,
//   link: "#",
//   pages: true,
//   mega_menus: [
//     {
//       title: "Page Layout 1",
//       link: "#",
//       submenus: [
//         { title: "Program", link: "/programs" },
//         { title: "Program Details", link: "/program-details" },
//         { title: "Teacher", link: "/teachers" },
//         { title: "Teacher Details", link: "/teacher-details" },
//         { title: "Time Table", link: "/time-tables" },
//       ],
//     },
//     {
//       title: "Page Layout 2",
//       link: "#",
//       submenus: [
//         { title: "Testimonial", link: "/testimonials" },
//         { title: "Gallery", link: "/gallery" },
//         { title: "FAQ", link: "/faq" },
//         { title: "Class", link: "/classes" },
//         { title: "Class Details", link: "/class-details" },
//       ],
//     },
//     {
//       title: "Page Layout 3",
//       link: "#",
//       submenus: [
//         { title: "About", link: "/about" },
//         { title: "Contact", link: "/contact" },
//         { title: "Login", link: "/login" },
//         { title: "Register", link: "/register" },
//         { title: "Error Page", link: "/404" },
//       ],
//     },
//   ],
// },
// {
//   id: 6,
//   hasDropdown: true,
//   title: "News",
//   link: "/news",
//   submenus: [
//     { title: "News Default", link: "/news" },
//     { title: "News Sidebar", link: "/news-sidebar" },
//     { title: "News Classic", link: "/news-classic" },
//     { title: "News Details", link: "/news-details" },
//   ],
// },
// {
//   id: 7,
//   hasDropdown: false,
//   title: "Contact",
//   link: "/contact",
// },

export default menu_data;
