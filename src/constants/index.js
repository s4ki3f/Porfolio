import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import c2sg from "../assets/company/c2sg.png";
import mle from "../assets/mle.png";
import cloud from "../assets/cloud.png";
import mpower from "../assets/company/mpower.jpeg";
import eic from "../assets/company/eic.png";
import ctl from "../assets/company/ctl.png";
import expensetracker from "../assets/expensetracker.png";
import vara_lagbe from "../assets/vara_lagbe.png";
import predicting from "../assets/predicting.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  /*{
    title: "Web Developer",
    icon: web,
  },*/
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Computing",
    icon: cloud,
  },
  {
    title: "Machine Learning Engineer",
    icon: mle,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Undergrade Research Assistant",
    company_name: "C2SG Lab, BRAC University",
    icon: c2sg,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company_name: "mPower Social Enterprises Ltd.",
    icon: mpower,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Cyber Security Engineer",
    company_name: "Enterprrse InfoSec Consultant",
    icon: eic,
    iconBg: "#383E56",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Coherent Technologies Ltd.",
    icon: ctl,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  /*{
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.The real estate site project is a demonstration of the development of a mobile application using Flutter for individuals to post and search for rental houses and apartments.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "restAPI",
        color: "pink-text-gradient",
      },
    ],
    image: vara_lagbe,
    source_code_link: "https://github.com/s4ki3f/vara_lagbe",
  },
  {
    name: "Expense Tracker",
    description:
      "Expense Tracker is an expense management application, that provides a dashboard, and email alert for the tracks for each user. an integrated load balancer for traffic management.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: expensetracker,
    source_code_link: "https://github.com/s4ki3f/Expense-tracker",
  },
  {
    name: "Job Portal",
    description:
      "A job searching to find Job through the site.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/s4ki3f/JobPortal",
  },
  {
    name: "Vehicle License Plate Recognition",
    description:
      "This LPR(Licence Plate Recognition) Project used object detection and machine learning to identify license plates from moving automobiles, utilizing Python OCR and YOLOv4.",
    tags: [
      {
        name: "YOLOv4",
        color: "blue-text-gradient",
      },
      {
        name: "Darknet",
        color: "green-text-gradient",
      },
      {
        name: "MsCoco, Custom Dataset",
        color: "pink-text-gradient",
      },
    ],
    image: vara_lagbe,
    source_code_link: "https://github.com/s4ki3f/yolov4-custom-functions_for_licence_plate",
  },
  {
    name: "Stock market Prediction using Deep Learning and Machine Learning",
    description:
      "This Project employs Deep Learning and Machine Learning approaches to create a predictive model for stock prices, using Python modules such as Pandas, Seaborn, Keras, and LSTM models. The datasets used here are from Dhaka Stock Exchange.",
    tags: [
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "LSTM",
        color: "green-text-gradient",
      },
      {
        name: "Keras",
        color: "pink-text-gradient",
      },
    ],
    image: predicting,
    source_code_link: "https://github.com/s4ki3f/yolov4-custom-functions_for_licence_plate",
  },
];

export { services, technologies, experiences, testimonials, projects };