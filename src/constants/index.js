import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    figma,
    godot,
    c,
    py,
    java,
    hai,
    book,
    spectrum,
    attend,
    booksite,
    spectreimage,
    sumegh,
    amaldev,
    akash,
    abhijithV,
  } from "../assets";
  
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
    {
      title: "Student",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React  Developer",
      icon: mobile,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C Programming",
      icon: c,
    },
    {
      name: "Python",
      icon: py,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Godot",
      icon: godot,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Team Lead",
      company_name: "HAI -Attendence System",
      icon: hai,
      iconBg: "#ffffff",
      date: "Sept 2021 - Oct 2021",
      points: [
        "The protype used OpenCV to detect faces on webcam and grant attendence",
        "Collabrated with 3 of my friends in the work",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Made a prototype that would either identify the person's name or register him/her as a new user ",
      ],
    },
    {
      title: "FrontEnd Developer",
      company_name: "BookinGo",
      icon: book,
      iconBg: "#ffffff",
      date: "Sept 2022 - Dec 2022",
      points: [
        "Gained little experience with the NodeJS, ExpressJS, MySQL & XAMP-APache",
        "This was my first team project done for academics",
        "We built a basic Online Movie Booking site that showed movies and no. of seats available with login/signup utility",
        "Created a template for the pages used for the project ",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Spectrum",
      icon: spectrum,
      iconBg: "#ffffff",
      date: "Feb 2023 - Present",
      points: [
        "Spectrum is a LGBTQ+ Community Platform",
        "The idea is to create a safe and practical social media for people who had to face social bullying and harassment",
        "We were able to incorporate Job search, QnA blogs, Houseing search and Photo sharing under a single domain",
        "We made use of HTML CSS React and NodeJs.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "My friend is an exceptional web developer who always stays up-to-date with the latest technologies and trends. I would highly recommend him to anyone looking for a skilled and reliable web developer.",
      name: "Sumegh S Pai",
      designation: "Friend / BTech 3rd Year CS Student",
      company: "Model Engineering College",
      image: sumegh,
    },
    {
      testimonial:
        "Working with my friend as a web developer has been an absolute pleasure.He has a keen eye for detail and always go above and beyond to ensure the end product exceeds expectations.",
      name: "Abhijith V",
      designation: "Friend / BTech 3rd Year CS Student",
      company: "Model Engineering College",
      image: abhijithV,
    },
    {
      testimonial:
        "I had the pleasure of working with my friend on several projects as a web developer, and I can confidently say that he is a true professional.",
      name: "Amal Dev CD",
      designation: "Friend / BTech 3rd Year CS Student",
      company: "Model Engineering College",
      image: amaldev,
    },
    {
      testimonial:
        "His dedication and passion for web development truly shines through in his work.",
      name: "PM Akash ",
      designation: "Friend / BTech 3rd Year CS Student",
      company: "Model Engineering College",
      image: akash,
    },
  ];
  
  const projects = [
    {
      name: "HAI Attendence System",
      description:
        "Web-based platform that allows users to mark attendence in online video confrencing meetings",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
      ],
      image: attend,
      source_code_link: "https://github.com/amaldevcd/technohack-hai",
    },
    {
      name: "BookinGO",
      description:
        "Web application that enables users to search for movies and book tickets with the comfort of their home",
      tags: [
        {
          name: "BootStrap",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
      ],
      image: booksite,
      source_code_link: "https://github.com/amaldevcd/bookingo",
    },
    {
      name: "Spectrum",
      description:
        "A comprehensive web application that helps LGBTQ+ members to find friednly jobs and homes ,along with share a social platform with others  ",
      tags: [
        {
          name: "HTML,CSS",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
        },
      ],
      image: spectreimage,
      source_code_link: "https://github.com/hannasalam/Spectrum",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };