// home main
import img_1 from '@assets/img/gallery/1.png';
import img_2 from '@assets/img/gallery/2.png';
import img_3 from '@assets/img/gallery/3.png';
import img_4 from '@assets/img/gallery/4.png';
import img_5 from '@assets/img/gallery/d1.png';

import img_6 from '@assets/img/gallery/d1.png';
import img_7 from '@assets/img/gallery/d2.png';
import img_8 from '@assets/img/gallery/d3.png';
import img_9 from '@assets/img/gallery/d5.png';
import img_10 from '@assets/img/gallery/d6.png';
import img_11 from '@assets/img/gallery/d7.png';

import img_1A from '@assets/img/gallery/d1.png';
import img_1B from '@assets/img/gallery/d4.png';
import img_1C from '@assets/img/gallery/d7.png';
import img_1D from '@assets/img/gallery/d8.png';

const gallary_data = [
  {
    id: 1,
    img: img_1,
    icon: 'flaticon-eye',
  },
  {
    id: 2,
    img: img_2,
    icon: 'flaticon-eye',
  },
  {
    id: 3,
    img: img_3,
    icon: 'flaticon-eye',
  },
  {
    id: 4,
    img: img_4,
    icon: 'flaticon-eye',
  },
  {
    id: 5,
    img: img_1,
    icon: 'flaticon-eye',
  },

  {
    id: 6,
    img: img_6,
    icon: 'flaticon-eye',
    wrap: 'col-lg-3',
    inners: [
      {
        id: 1,
        img: img_1A,
        icon: 'flaticon-eye',
      },
      {
        id: 2,
        img: img_1B,
        icon: 'flaticon-eye',
      }
    ]
  },
  {
    id: 7,
    img: img_7,
    icon: 'flaticon-eye',
    wrap: 'col-lg-5',
  },
  {
    id: 8,
    img: img_8,
    icon: 'flaticon-eye',
    wrap: 'col-lg-4',
  },
  {
    id: 9,
    img: img_9,
    icon: 'flaticon-eye',
    wrap: 'col-lg-5',
  },
  {
    id: 10,
    img: img_10,
    icon: 'flaticon-eye',
    wrap: 'col-lg-4',
  },
  {
    id: 11,
    img: img_11,
    icon: 'flaticon-eye',
    wrap: 'col-lg-3',
    inners: [
      {
        id: 1,
        img: img_1C,
        icon: 'flaticon-eye',
      },
      {
        id: 2,
        img: img_1D,
        icon: 'flaticon-eye',
      }
    ]
  }
]

export default gallary_data;