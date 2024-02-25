// import images
import Hero_person from "./assets/images/Hero/person2.png";
import Hero_pic from "./assets/images/Hero/bitemoji.png";

import tail from "./assets/images/Skills/tailwind-css.png";
import ps from "./assets/images/Skills/ps.png";
import mongo from "./assets/images/Skills/mongodb.png";
import html from "./assets/images/Skills/html5.png";
import java from "./assets/images/Skills/java.png";
import js from "./assets/images/Skills/javascript.png";
import ex from "./assets/images/Skills/express.png";
import css from "./assets/images/Skills/css3.png";
import boot from "./assets/images/Skills/bootstrap.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import pic1 from "./assets/images/Services/recipeweb.png";
import pic2 from "./assets/images/Services/course.png";
import pic3 from "./assets/images/Services/jobportal.png";
import pic4 from "./assets/images/Services/dis.png";
import pic5 from "./assets/images/Services/ecommerce.png";
import pic6 from "./assets/images/Services/travel.png";
import pic7 from "./assets/images/Services/github.png";
import pic8 from "./assets/images/Services/twitter.png";

import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import {
  GrGithub,
  GrLinkedin,
  GrMail,
  GrProjects,
  GrTwitter,
} from "react-icons/gr";
import { MdArrowForward, MdCall, MdPersonalInjury } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import {
  RiServiceLine,
  RiProjectorLine,
  RiSkullFill,
  RiProjector2Line,
} from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: RiProjector2Line,
    },
    {
      link: "#services",
      icon: GrProjects,
    },

    {
      link: "#contact",
      icon: BiUser,
    },
  ],
  hero: {
    title: "MERN Stack Web Developer",
    firstName: "VINAY",
    LastName: "B H",
    btnText: "Connect Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "LET'S BUILD SOMETHING TOGETHER",
      },
      {
        count: "20+",
        text: "I am a passionate MERN STACK DEVELOPER, I recently completed my BCA degree in Computer Applications. I'm focused on building a fullstack web applications while learning & exploring other technologies.",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies I use in my development",
    skills_content: [
      {
        name: "React js",
        logo: reactjs,
        url: "https://react.dev/",
      },
      {
        name: "Node js",
        // para: "Lorem ipsum text  dummy",
        logo: nodejs,
        url: "https://nodejs.org/en",
      },
      {
        name: "Express js",
        // para: "Lorem ipsum text  dummy",
        logo: ex,
        url: "https://expressjs.com/",
      },
      {
        name: "MongoDB",
        // para: "Lorem ipsum text  dummy",
        logo: mongo,
        url: "https://www.mongodb.com/",
      },
      {
        name: "JavaScript",
        // para: "Lorem ipsum text  dummy",
        logo: js,
        url: "https://www.w3schools.com/js/",
      },
      {
        name: "HTML",
        // para: "Lorem ipsum text  dummy",
        logo: html,
        url: "https://www.w3schools.com/html/",
      },
      {
        name: "CSS",
        // para: "Lorem ipsum text  dummy",
        logo: css,
        url: "https://www.w3schools.com/css/",
      },
      {
        name: "BootStrap",
        // para: "Lorem ipsum text  dummy",
        logo: boot,
        url: "https://getbootstrap.com/",
      },
      {
        name: "Tailwind",
        // para: "Lorem ipsum text  dummy",
        logo: tail,
        url: "https://tailwindcss.com/",
      },
      {
        name: "Java",
        // para: "Lorem ipsum text  dummy",
        logo: java,
        url: "https://www.java.com/en/",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Projects",
    subtitle: "Take a look at my projects:",
    service_content: [
      {
        title: "Recipe Website",
        para: "A recipe website where people can share and discover recipes. It creates a lively community of food lovers, with an easy-to-use design, a variety of recipes, and a sense of connection through cooking. TECH STACK - REACT, EXPRESSJS, NODEJS, MONGODB.",
        logo: pic1,
        demo: "https://recipe-app-h06o.onrender.com",
        code: "https://github.com/vinaybh01/recipe-web-frontend",
      },
      {
        title: "Course Selling & Buying Website",
        para: "A course platform where admins effortlessly manage courses - creating, editing, and deleting. Users sign up to explore and purchase courses, fostering a streamlined learning experience. TECH STACK- REACT, EXPRESSJS, NODEJS, MONGODB.",
        logo: pic2,
        demo: "https://course-app-mern.onrender.com",
        code: "https://github.com/vinaybh01/course-selling-app-client",
      },
      {
        title: "Job Portal",
        para: "Simplifying job searches, this platform allows users to effortlessly filter and apply for jobs. Admins, on the other hand, can efficiently create, edit, and delete job listings for their company. TECH STACK - REACT, EXPRESSJS, NODEJS, MONGODB, TAILWIND.",
        logo: pic3,
        demo: "https://job-portal-app-3puy.onrender.com",
        code: "https://github.com/vinaybh01/job-portal-frontend",
      },
      {
        title: "Disaster Relief",
        para: "Enabling seamless connection and support in times of disaster through a comprehensive web application, uniting relief organizations, volunteers, and victims. TECH STACK - HTML, CSS, JAVASCRIPT, BOOTSTRAP.",
        logo: pic4,
        demo: "https://ybhumi.github.io/disaster-relief",
        code: "https://github.com/vinaybh01/disaster-relief",
      },
      {
        title: "E-Commerce Website",
        para: " An eCommerce website I built, providing a user-friendly and visually appealing platform for online shopping. TECH STACK - REACTJS.",
        logo: pic5,
        demo: "https://vinaybh0107-ecommerce.netlify.app",
        code: "https://github.com/vinaybh01/ecommerce-website",
      },
      {
        title: "Travel Website",
        para: "A travel website that allows users to explore various destinations, providing a visually appealing platform to discover and learn about different places, inspiring their wanderlust.TECH STACK - REACT, EXPRESSJS, NODEJS, MONGODB.",
        logo: pic6,
        demo: "https://vinaybh0107-travel-website.netlify.app",
        code: "https://github.com/vinaybh01/travelling-website",
      },

      // {
      //   title: "PhotoShop Editing",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo3,
      // },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "Get in touch",
    social_media: [
      {
        text: "vinaybh0107@gmail.com",
        icon: GrMail,
        link: "mailto:vinaybh0107@gmail.com",
      },
      {
        text: "+91 7022853572",
        icon: MdCall,
        link: "https://wa.me/7022853572",
      },
      {
        text: "Vinay",
        icon: GrLinkedin,
        link: "https://www.linkedin.com/in/vinay-b-h-06a09825b/",
      },

      {
        text: "vinaybh01",
        icon: GrGithub,
        link: "https://github.com/vinaybh01",
      },
      {
        text: "VinayBH",
        icon: GrTwitter,
        link: "https://twitter.com/VinayBH1554211",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
