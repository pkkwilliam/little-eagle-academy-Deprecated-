// images
import img_1 from '@assets/img/shop/1.1.png';
import img_2 from '@assets/img/shop/1.2.png';
import img_3 from '@assets/img/shop/1.3.png';
import img_4 from '@assets/img/shop/2.1.png';
import img_5 from '@assets/img/shop/2.2.png';
import img_6 from '@assets/img/shop/2.3.png';
import img_7 from '@assets/img/shop/3.1.png';
import img_8 from '@assets/img/shop/3.2.png';
import img_9 from '@assets/img/shop/3.3.png';
import img_10 from '@assets/img/shop/4.1.png';
import img_11 from '@assets/img/shop/4.2.png';
import img_12 from '@assets/img/shop/4.3.png';
import img_13 from '@assets/img/shop/5.1.png';
import img_14 from '@assets/img/shop/5.2.png';
import img_15 from '@assets/img/shop/5.3.png';
import img_16 from '@assets/img/shop/6.1.png';
import img_17 from '@assets/img/shop/6.2.png';
import img_18 from '@assets/img/shop/6.3.png';
import img_19 from '@assets/img/shop/7.1.png';
import img_20 from '@assets/img/shop/7.2.png';
import img_21 from '@assets/img/shop/7.3.png';
import img_22 from '@assets/img/shop/8.1.jpg';
import img_23 from '@assets/img/shop/8.2.jpg';
import img_24 from '@assets/img/shop/8.3.png';
import img_25 from '@assets/img/shop/9.1.jpg';
import img_26 from '@assets/img/shop/9.2.jpg';
import img_27 from '@assets/img/shop/9.3.jpg';


const product_data = [
  {
    id:1,
    title:'Plush Toy Giraffe',
    price:'23.00',
    discount:'',
    delay: '.3s',
    sale: true,
    badge: 'Sale',
    productImg: img_1,
    images: [
      {id: 1, img: img_1},
      {id: 2, img: img_2},
      {id: 3, img: img_3},
    ],
    ratings: [
        {id: 1, icon: 'fas fa-star'},
        {id: 2, icon: 'fas fa-star'},
        {id: 3, icon: 'fas fa-star'},
        {id: 4, icon: 'fas fa-star'},
        {id: 5, icon: 'fas fa-star'},
    ]
  },
  {
    id:2,
    title:'Wooden Alphabet',
    price:'15.00',
    discount:'20.00',
    delay: '.4s',
    new: true,
    badge: 'New',
    productImg: img_4,
    images: [
      {id: 1, img: img_4},
      {id: 2, img: img_5},
      {id: 3, img: img_6},
    ],
    ratings: [
        {id: 1, icon: 'fas fa-star'},
        {id: 2, icon: 'fas fa-star'},
        {id: 3, icon: 'fas fa-star'},
        {id: 4, icon: 'fas fa-star'},
        {id: 5, icon: 'far fa-star'},
    ]
  },
  {
    id:3,
    title:'Baby Shoes',
    price:'23.00',
    discount:'',
    delay: '.5s',
    sold: true,
    badge: 'Sold Out',
    productImg: img_7,
    images: [
      {id: 1, img: img_7},
      {id: 2, img: img_8},
      {id: 3, img: img_9},
    ],
    ratings: [
        {id: 1, icon: 'fas fa-star'},
        {id: 2, icon: 'fas fa-star'},
        {id: 3, icon: 'fas fa-star'},
        {id: 4, icon: 'fas fa-star'},
        {id: 5, icon: 'fas fa-star'},
    ]
  },
  {
    id:4,
    title:'Baby bouncer',
    price:'25.00',
    discount:'',
    delay: '.6s',
    hot: true,
    badge: 'Hot',
    productImg: img_10,
    images: [
      {id: 1, img: img_10},
      {id: 2, img: img_11},
      {id: 3, img: img_12},
    ],
    ratings: [
        {id: 1, icon: 'fas fa-star'},
        {id: 2, icon: 'fas fa-star'},
        {id: 3, icon: 'fas fa-star'},
        {id: 4, icon: 'fas fa-star'},
        {id: 5, icon: 'fas fa-star'},
    ]
  },
  {
    id:5,
    title:'Plastic building',
    price:'43.00',
    discount:'65.00',
    delay: '.7s',
    sale: true,
    badge: 'Sale',
    productImg: img_13,
    images: [
      {id: 1, img: img_13},
      {id: 2, img: img_14},
      {id: 3, img: img_15},
    ],
    ratings: [
        {id: 1, icon: 'fas fa-star'},
        {id: 2, icon: 'fas fa-star'},
        {id: 3, icon: 'fas fa-star'},
        {id: 4, icon: 'fas fa-star'},
        {id: 5, icon: 'fas fa-star'},
    ]
  },
  {
    id:6,
    title:'Giraffe Toy',
    price:'99.00',
    discount:'',
    delay: '.8s',
    sale: true,
    badge: 'Sale',
    productImg: img_16,
    images: [
      {id: 1, img: img_16},
      {id: 2, img: img_17},
      {id: 3, img: img_18},
    ],
    ratings: [
        {id: 1, icon: 'fas fa-star'},
        {id: 2, icon: 'fas fa-star'},
        {id: 3, icon: 'fas fa-star'},
        {id: 4, icon: 'fas fa-star'},
        {id: 5, icon: 'fas fa-star'},
    ]
  },
  {
    id:7,
    title:'Plastic building',
    price:'34.00',
    discount:'',
    delay: '.9s',
    hot: true,
    badge: 'Hot',
    productImg: img_19,
    images: [
      {id: 1, img: img_19},
      {id: 2, img: img_20},
      {id: 3, img: img_21},
    ],
    ratings: [
        {id: 1, icon: 'fas fa-star'},
        {id: 2, icon: 'fas fa-star'},
        {id: 3, icon: 'fas fa-star'},
        {id: 4, icon: 'fas fa-star'},
        {id: 5, icon: 'far fa-star'},
    ]
  },
  {
    id:8,
    title:'Naughty Furry',
    price:'32.00',
    discount:'42.00',
    delay: '1s',
    sale: true,
    badge: 'Sale',
    productImg: img_22,
    images: [
      {id: 1, img: img_22},
      {id: 2, img: img_23},
      {id: 3, img: img_24},
    ],
    ratings: [
        {id: 1, icon: 'fas fa-star'},
        {id: 2, icon: 'fas fa-star'},
        {id: 3, icon: 'fas fa-star'},
        {id: 4, icon: 'fas fa-star'},
        {id: 5, icon: 'fas fa-star'},
    ]
  },
  {
    id:9,
    title:'Toy basket',
    price:'55.00',
    discount:'',
    delay: '1.1s',
    sold: true,
    badge: 'Sold Out',
    productImg: img_25,
    images: [
      {id: 1, img: img_25},
      {id: 2, img: img_26},
      {id: 3, img: img_27},
    ],
    ratings: [
        {id: 1, icon: 'fas fa-star'},
        {id: 2, icon: 'fas fa-star'},
        {id: 3, icon: 'fas fa-star'},
        {id: 4, icon: 'fas fa-star'},
        {id: 5, icon: 'fas fa-star'},
    ]
  }
]

export default product_data;