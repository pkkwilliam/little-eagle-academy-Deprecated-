import { setClasses } from "src/redux/features/class-slice";
import { GET_CLASSES, GET_INSTRUCTORS } from "./api";
import execute from "./serviceExecutor";
import { setInstructors } from "src/redux/features/instructor-slice";

const useStatic = true;
const useCache = false;

export const getClasses = async (store) => {
  if (useStatic) {
    return STATIC_CLASSES;
  }
  if (store.getState().class.dirty || !useCache) {
    const classesResult = await execute(GET_CLASSES);
    store.dispatch(setClasses(classesResult));
    return classesResult;
  } else {
    return store.getState().class.classes;
  }
};

export const getInstructors = async (store) => {
  if (useStatic) {
    return STATIC_INSTRCTORS;
  }
  if (store.getState().instructor.dirty || !useCache) {
    const instructorsResult = await execute(GET_INSTRUCTORS);
    store.dispatch(setInstructors(instructorsResult));
    return instructorsResult;
  } else {
    return store.getState().instructor.instructors;
  }
};

const STATIC_CLASSES = [
  {
    localized: {
      en_US: {
        description:
          "In this class, we create a nurturing environment where parents and children can come together to learn, play, and connect through the universal language of music and movement. Our sessions are designed to stimulate your child's senses, encourage their natural curiosity, and foster their early development while strengthening the bondbetween parent and child.<br/><br/>Through the use of Mandarin Chinese, we aim to introduce your little ones to the beauty of a new language in a fun and engaging way. Research has shown that exposure to multiple languages at a young age can have numerous cognitive benefits, and what better way to start than through music and movement!",
        name: "Mommy and Me",
        wayToLearn:
          "Each class will be filled with exciting activities such as singing songs, dancing, playing instruments, and interactive games, all carefully crafted to captivate your child's imagination and encourage their language acquisition. Don't worry if you're not fluent in Mandarin - our activities are designed to be accessible to all, regardless of language proficiency.<br/><br/>So, whether you're a native Mandarin speaker looking to instill your language and culture in your child, or you're simply eager to expose your little one to new experiences, this class is perfect for you! Let's embark on this joyful journey together and watch as your child grows, learns, and flourishes in our Mommy and Me class.",
        teaser:
          "Nurturing environment where parents and children can come together to learn...",
      },
      zh_CN: {
        description: "Description Pending (CN)",
        name: "Mommy and Me (CN)",
        wayToLearn: "Way To Learn Pending (CN)",
        teaser: "Teaser Pending (CN)",
      },
      zh_HK: {
        description: "Description Pending (T)",
        name: "Mommy and Me (T)",
        wayToLearn: "Way To Learn Pending (T)",
        teaser: "Teaser Pending (T)",
      },
    },
    id: "66107cba3a5fc30f73f7dcfc",
    cadence: "TWICE_PER_WEEK",
    classSize: 6,
    duration: 45,
    instructor: {
      localized: {
        en_US: {
          description: "Description English Pending",
          personalInfoHeaders: ["E-mail"],
          personalInfoValues: ["xiaorou.regina@gmail.com"],
          name: "Ms. Jiang",
          title: "Mandarin Teacher",
        },
        zh_CN: {
          description: "中文简介",
          personalInfoHeaders: ["电子邮件"],
          personalInfoValues: ["xiaorou.regina@gmail.com"],
          name: "姜老師",
          title: "老师",
        },
        zh_HK: {
          description: "中文簡介",
          personalInfoHeaders: ["電子郵件"],
          personalInfoValues: ["xiaorou.regina@gmail.com"],
          name: "姜老師",
          title: "老師",
        },
      },
      id: "66107cba3a5fc30f73f7dcfc",
      weight: 98,
    },
    maxAge: 3,
    minAge: 0,
    price: 45,
    priceUnit: "CLASS",
    weight: 99,
    trialType: "FREE",
  },
  {
    localized: {
      en_US: {
        description:
          "In this class, we'll be immersing ourselves in the fascinating stories that have been passed down through generations, exploring the wisdom and insights embedded within them. From classic fables to timeless idioms, each story carries a treasure trove of linguistic nuances and cultural significance waiting to be unraveled.<br/><br/>One of the main focuses of our class is to expand students' vocabulary and deepen their understanding of Mandarin by delving into more advanced expressions and idiomatic phrases found within these traditional tales. Through the exploration of these stories, students will not only acquire new words and expressions but also gain insight into the cultural context in which they are used.",
        name: "Mandarin Story Circle",
        wayToLearn:
          "We also aim to cultivate students' storytelling ability, encouraging them to become fluent not only in the language but also in the art of narrative. Students will have the opportunity to practice retelling these stories in Mandarin, honing their language skills while developing your creativity and expression.<br/><br/>Furthermore, our class is designed to enhance students' ability to recognize and understand Chinese characters. As we encounter new characters in the stories we explore, students will gradually become more adept at recognizing and interpreting them, laying a solid foundation for further language acquisition.",
        teaser:
          "Immersing ourselves in the fascinating stories that have been passed down through generations...",
      },
      zh_CN: {
        description: "Description Pending (CN)",
        name: "Mandarin Story Circle (CN)",
        wayToLearn: "Way To Learn Pending (CN)",
        teaser: "Teaser Pending (CN)",
      },
      zh_HK: {
        description: "Description Pending (T)",
        name: "Mandarin Story Circle (T)",
        wayToLearn: "Way To Learn Pending (T)",
        teaser: "Teaser Pending (T)",
      },
    },
    id: "66107cba3a5fc30f73f7dcfc",
    cadence: "ONCE_PER_WEEK",
    classSize: 8,
    duration: 45,
    instructor: {
      localized: {
        en_US: {
          description: "Description English Pending",
          personalInfoHeaders: ["E-mail"],
          personalInfoValues: ["xiaorou.regina@gmail.com"],
          name: "Ms. Jiang",
          title: "Mandarin Teacher",
        },
        zh_CN: {
          description: "中文简介",
          personalInfoHeaders: ["电子邮件"],
          personalInfoValues: ["xiaorou.regina@gmail.com"],
          name: "姜老師",
          title: "老师",
        },
        zh_HK: {
          description: "中文簡介",
          personalInfoHeaders: ["電子郵件"],
          personalInfoValues: ["xiaorou.regina@gmail.com"],
          name: "姜老師",
          title: "老師",
        },
      },
      id: "66107cba3a5fc30f73f7dcfc",
      weight: 98,
    },
    maxAge: 6,
    minAge: 4,
    price: 45,
    priceUnit: "CLASS",
    weight: 98,
    trialType: "FREE",
  },
  {
    localized: {
      en_US: {
        description:
          "In this class, we will delve into Chinese grammar and writing manners, helping students develop a deeper understanding of sentence structure, punctuation, and writing etiquette. From basic sentence construction to more advanced grammar rules, students will gain the skills and confidence needed to express yourself effectively in written Chinese.<br/><br/>In addition to language fundamentals, our class will also introduce students to the rich tapestry of Chinese literature. From ancient classics to modern masterpieces, we'll explore a wide range of literary works, uncovering the cultural insights and linguistic nuances embedded within them. Through reading and analyzing these texts, students will not only deepen their appreciation for Chinese literature but also enhance their language proficiency in the process.",
        name: "Mandarin Writing Center (Simplified/Traditional)",
        wayToLearn:
          "Our class offers two tracks to accommodate different learning preferences: simplified Chinese characters and traditional Chinese characters. Students will have the opportunity to choose the track that best suits their needs and interests.As an essential tool for learning Mandarin pronunciation, Pin-Yin will be integrated into our lessons to help students master the sounds of the language and improve their spelling and writing skills.",
        teaser:
          "Gain the skills and confidence needed to express yourself effectively in written Chinese...",
      },
      zh_CN: {
        description: "Description Pending (CN)",
        name: "Mandarin Writing Center (Simplified/Traditional) (CN)",
        wayToLearn: "Way To Learn Pending (CN)",
        teaser: "Teaser Pending (CN)",
      },
      zh_HK: {
        description: "Description Pending (T)",
        name: "Mandarin Writing Center (Simplified/Traditional) (T)",
        wayToLearn: "Way To Learn Pending (T)",
        teaser: "Teaser Pending (T)",
      },
    },
    id: "66107cba3a5fc30f73f7dcfc",
    cadence: "ONCE_PER_WEEK",
    classSize: 8,
    duration: 60,
    instructor: {
      localized: {
        en_US: {
          description: "Description English Pending",
          personalInfoHeaders: ["E-mail"],
          personalInfoValues: ["xiaorou.regina@gmail.com"],
          name: "Ms. Jiang",
          title: "Mandarin Teacher",
        },
        zh_CN: {
          description: "中文简介",
          personalInfoHeaders: ["电子邮件"],
          personalInfoValues: ["xiaorou.regina@gmail.com"],
          name: "姜老師",
          title: "老师",
        },
        zh_HK: {
          description: "中文簡介",
          personalInfoHeaders: ["電子郵件"],
          personalInfoValues: ["xiaorou.regina@gmail.com"],
          name: "姜老師",
          title: "老師",
        },
      },
      id: "66107cba3a5fc30f73f7dcfc",
      weight: 98,
    },
    maxAge: 10,
    minAge: 7,
    price: 60,
    priceUnit: "CLASS",
    weight: 97,
    trialType: "NA",
  },
  {
    localized: {
      en_US: {
        description:
          "In this class, we'll be focusing on developing students' logic thinking ability through hands-on coding projects. Whether students are beginners or already have some coding experience, our curriculum is designed to challenge and inspire students to think critically, problem-solve creatively, and unleash their potential as a future coder and programmer.<br/><br/>Using popular coding languages such as Python, students will dive into the fundamentals of programming, learning how to write code to create programs and even games! From basic syntax to more advanced concepts, students will gain a solid understanding of how to use code to bring their ideas to life in the digital world.",
        name: "Hello, World!",
        wayToLearn:
          "Throughout the course, students will have the opportunity to work on a variety of coding projects, from creating their own interactive games to building useful applications. These projects will not only reinforce their coding knowledge but also encourage creativity, collaboration, and problem-solving skills.<br/><br/>By the end of the course, students will not only have a deeper understanding of coding and programming principles but also a portfolio of impressive projects to showcase their skills. Whether they are dreaming of a future career in technology or simply want to explore the world of coding for fun, this class is the perfect place to start.",
        teaser:
          "Developing students' logic thinking ability through hands-on coding projects...",
      },
      zh_CN: {
        description: "Description Pending (CN)",
        name: "Hello, World!",
        wayToLearn: "Way To Learn Pending (CN)",
        teaser: "Teaser Pending (CN)",
      },
      zh_HK: {
        description: "Description Pending (T)",
        name: "Hello, World!",
        wayToLearn: "Way To Learn Pending (T)",
        teaser: "Teaser Pending (T)",
      },
    },
    id: "66107c603a5fc30f73f7dcfb",
    cadence: "ONCE_PER_WEEK",
    classSize: 6,
    duration: 60,
    instructor: {
      localized: {
        en_US: {
          description: "Description English Pending",
          personalInfoHeaders: ["E-mail"],
          personalInfoValues: ["pkkwilliam919@gmail.com"],
          name: "Mr. Pun",
          title: "Founder/Teacher",
        },
        zh_CN: {
          description: "中文简介",
          personalInfoHeaders: ["电子邮件"],
          personalInfoValues: ["pkkwilliam919@gmail.com"],
          name: "潘老師",
          title: "创始人/老师",
        },
        zh_HK: {
          description: "中文簡介",
          personalInfoHeaders: ["電子郵件"],
          personalInfoValues: ["pkkwilliam919@gmail.com"],
          name: "潘老師",
          title: "創辦人/老師",
        },
      },
      id: "66107c603a5fc30f73f7dcfb",
      weight: 99,
    },
    maxAge: 14,
    minAge: 10,
    price: 90,
    priceUnit: "CLASS",
    weight: 96,
    trialType: "FREE",
  },
  {
    localized: {
      en_US: {
        description: "Description Pending (En)",
        name: "Robotics IoT",
        wayToLearn: "Description Pending (En)",
        teaser: "Description Pending (En)",
      },
      zh_CN: {
        description: "Description Pending (CN)",
        name: "Robotics IoT (CN)",
        wayToLearn: "Way To Learn Pending (CN)",
        teaser: "Teaser Pending (CN)",
      },
      zh_HK: {
        description: "Description Pending (T)",
        name: "Robotics IoT (T)",
        wayToLearn: "Way To Learn Pending (T)",
        teaser: "Teaser Pending (T)",
      },
    },
    id: "66107c603a5fc30f73f7dcfb",
    cadence: "ONCE_PER_WEEK",
    classSize: 6,
    duration: 60,
    instructor: {
      localized: {
        en_US: {
          description: "Description English Pending",
          personalInfoHeaders: ["E-mail"],
          personalInfoValues: ["pkkwilliam919@gmail.com"],
          name: "Mr. Pun",
          title: "Founder/Teacher",
        },
        zh_CN: {
          description: "中文简介",
          personalInfoHeaders: ["电子邮件"],
          personalInfoValues: ["pkkwilliam919@gmail.com"],
          name: "潘老師",
          title: "创始人/老师",
        },
        zh_HK: {
          description: "中文簡介",
          personalInfoHeaders: ["電子郵件"],
          personalInfoValues: ["pkkwilliam919@gmail.com"],
          name: "潘老師",
          title: "創辦人/老師",
        },
      },
      id: "66107c603a5fc30f73f7dcfb",
      weight: 99,
    },
    maxAge: 12,
    minAge: 8,
    price: 90,
    priceUnit: "CLASS",
    weight: 95,
    trialType: "FREE",
  },
  {
    localized: {
      en_US: {
        description: "Description Pending (En)",
        name: "Sing with Musical",
        wayToLearn: "Description Pending (En)",
        teaser: "Description Pending (En)",
      },
      zh_CN: {
        description: "Description Pending (CN)",
        name: "Sing with Musical (CN)",
        wayToLearn: "Way To Learn Pending (CN)",
        teaser: "Teaser Pending (CN)",
      },
      zh_HK: {
        description: "Description Pending (T)",
        name: "Sing with Musical (T)",
        wayToLearn: "Way To Learn Pending (T)",
        teaser: "Teaser Pending (T)",
      },
    },
    id: "66107cda3a5fc30f73f7dcfd",
    cadence: "ONCE_PER_WEEK",
    classSize: 8,
    duration: 45,
    instructor: {
      localized: {
        en_US: {
          description: "Description English Pending",
          personalInfoHeaders: ["E-mail"],
          personalInfoValues: ["esther.xu@gmail.com"],
          name: "Ms. Xu",
          title: "Music Teacher",
        },
        zh_CN: {
          description: "中文简介",
          personalInfoHeaders: ["电子邮件"],
          personalInfoValues: ["esther.xu@gmail.com"],
          name: "許老師",
          title: "老师",
        },
        zh_HK: {
          description: "中文簡介",
          personalInfoHeaders: ["電子郵件"],
          personalInfoValues: ["esther.xu@gmail.com"],
          name: "許老師",
          title: "音樂老師",
        },
      },
      id: "66107cda3a5fc30f73f7dcfd",
      weight: 97,
    },
    maxAge: 10,
    minAge: 6,
    price: 55,
    priceUnit: "CLASS",
    weight: 95,
    trialType: "FREE",
  },
];

const STATIC_INSTRCTORS = [
  {
    localized: {
      en_US: {
        description: "Description English Pending",
        personalInfoHeaders: ["E-mail"],
        personalInfoValues: ["pkkwilliam919@gmail.com"],
        name: "Mr. Pun",
        title: "Founder/Teacher",
      },
      zh_CN: {
        description: "中文简介",
        personalInfoHeaders: ["电子邮件"],
        personalInfoValues: ["pkkwilliam919@gmail.com"],
        name: "潘老師",
        title: "创始人/老师",
      },
      zh_HK: {
        description: "中文簡介",
        personalInfoHeaders: ["電子郵件"],
        personalInfoValues: ["pkkwilliam919@gmail.com"],
        name: "潘老師",
        title: "創辦人/老師",
      },
    },
    id: "66107c603a5fc30f73f7dcfb",
    weight: 99,
  },
  {
    localized: {
      en_US: {
        description: "Description English Pending",
        personalInfoHeaders: ["E-mail"],
        personalInfoValues: ["xiaorou.regina@gmail.com"],
        name: "Ms. Jiang",
        title: "Mandarin Teacher",
      },
      zh_CN: {
        description: "中文简介",
        personalInfoHeaders: ["电子邮件"],
        personalInfoValues: ["xiaorou.regina@gmail.com"],
        name: "姜老師",
        title: "老师",
      },
      zh_HK: {
        description: "中文簡介",
        personalInfoHeaders: ["電子郵件"],
        personalInfoValues: ["xiaorou.regina@gmail.com"],
        name: "姜老師",
        title: "老師",
      },
    },
    id: "66107cba3a5fc30f73f7dcfc",
    weight: 98,
  },
  {
    localized: {
      en_US: {
        description: "Description English Pending",
        personalInfoHeaders: ["E-mail"],
        personalInfoValues: ["esther.xu@gmail.com"],
        name: "Ms. Xu",
        title: "Music Teacher",
      },
      zh_CN: {
        description: "中文简介",
        personalInfoHeaders: ["电子邮件"],
        personalInfoValues: ["esther.xu@gmail.com"],
        name: "許老師",
        title: "老师",
      },
      zh_HK: {
        description: "中文簡介",
        personalInfoHeaders: ["電子郵件"],
        personalInfoValues: ["esther.xu@gmail.com"],
        name: "許老師",
        title: "音樂老師",
      },
    },
    id: "66107cda3a5fc30f73f7dcfd",
    weight: 97,
  },
];
