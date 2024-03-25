import program_1 from '@assets/img/program/home-program-1.jpg';
import program_2 from '@assets/img/program/home-program-2.jpg';
import program_3 from '@assets/img/program/home-program-3.jpg';
import program_4 from '@assets/img/program/home-program-4.jpg';
import program_5 from '@assets/img/program/home-program-5.jpg';
import program_6 from '@assets/img/program/home-program-1.jpg';
import ProgramIconOne from '@svg/program-icon-1';
import ProgramIconTwo from '@svg/program-icon-2';
import ProgramIconThree from '@svg/program-icon-3';
import ProgramIconFour from '@svg/program-icon-4';
import ProgramIconFive from '@svg/program-icon-5';
import ProgramIconSix from '@svg/program-icon-6';
import author_1 from "@assets/img/program/author-1.png";

const program_data = [
  {
    id:1,
    title:'Settling',
    img:program_1,
    description:'To round out our weekend of celebra tions, we are holding our reunion.',
    icon: <ProgramIconOne />,
    clrClass:'clr-1',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 175.00,
    delay:'.2s',
    programs:[
      {
        id: 1,
        title: '6-7 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '3.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  {
    id:2,
    title:'Play Group',
    img:program_2,
    description:'We will magical transform the School Sports Centre into a game field.',
    icon: <ProgramIconTwo />,
    clrClass:'clr-2',
    delay:'.3s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 195.00,
    programs:[
      {
        id: 1,
        title: '3-4 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '3.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  {
    id:3,
    title:'Junior Nursery',
    img:program_3,
    description:'Kindedo not only for all our dedicated 2023 reunion year groups program.',
    icon: <ProgramIconThree />,
    clrClass:'clr-3',
    delay:'.4s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 285.00,
    programs:[
      {
        id: 1,
        title: '3-4 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '3.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  {
    id:4,
    title:'Nursery',
    img:program_4,
    description:'With connection with local licensed child care providers and other local.',
    icon: <ProgramIconFour />,
    clrClass:'clr-4',
    delay:'.5s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 140.00,
    programs:[
      {
        id: 1,
        title: '3-4 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '4.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  {
    id:5,
    title:'Junior Kg',
    img:program_5,
    description:'The kinder garten was developed in the nineteenth year.',
    icon: <ProgramIconFive />,
    clrClass:'clr-5',
    delay:'.6s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 150.00,
    programs:[
      {
        id: 1,
        title: '4-5 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '5.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  {
    id:6,
    title:'Senior Kg',
    img:program_6,
    description:'Jean-Jacques Rousseau’s belief in the inherent goodness of children.',
    icon: <ProgramIconSix />,
    clrClass:'clr-6',
    delay:'.7s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 170.00,
    programs:[
      {
        id: 1,
        title: '5-6 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '6.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  
]

export default program_data;