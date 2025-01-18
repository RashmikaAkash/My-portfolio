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
  froggy,
  eye,
  
  
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: creator,
  },
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
    title: "Full Website (HTML/ PHP/ JavaScript)",
    company_name: "University project",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using HTML and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile Application",
    company_name: "University project",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Jan 2024",
    points: [
      "Developing and maintaining web applications using Kotlin and other related technologies.",
      "Creating high-quality products by independently managing design and development.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Website (MERN)",
    company_name: "University project",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2024 - Jun 2024",
    points: [
      "Developing and maintaining web applications using MERN and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Travel Sri Lanka Website",
    company_name: "TravelSriLankaTeam",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Developing and maintaining web applications using MERN and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
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
  },
];

const projects = [
  {
    name: "Hottel Staff Management",
    description:
      "Streamlines employee management with features like salary handling, QR code attendance, PDF reports, and CEO email updates for efficient oversight.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Keep Notes MOB App",
    description:
      "Keep Notes, allows users to save, edit, delete, and update notes. It includes an alarm reminder feature for notifications and alarms to manage tasks efficiently.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Internal Storage",
        color: "green-text-gradient",
      },
      
    ],
    image: jobit,
    source_code_link: "https://github.com/RashmikaAkash/Keep_Notes_mobile-App.git",
  },
  {
    name: "Travel Sri Lanka",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/RashmikaAkash/Travel_SriLanka.git",
  },
  {
    name: "Froggy Adventures 🐸✨",
    description:
      "I’m thrilled to announce that I’m developing a 2D platformer game using Godot Engine and GDScript! 🚀 Introducing Froggy Adventures 🐸, a fun and vibrant game where players guide a brave frog ninja through challenging levels filled with obstacles, platforms, and enemies.",
    tags: [
      {
        name: "GDScript",
        color: "blue-text-gradient",
      },
      
    ],
    image: froggy,
    source_code_link: "https://github.com/RashmikaAkash/Froggy-Adventures-Game.git",
  },
  {
    name: "Mouse-Using-Eye",
    description:
      "I’m excited to share my latest project, Mouse Using Eye, an innovative Python-based solution that allows users to control their computer mouse using eye movements. This project leverages advanced computer vision techniques with libraries like OpenCV, Dlib, and PyAutoGUI to track eye gestures and translate them into precise cursor movements. It’s designed to showcase the potential of hands-free interaction, offering accessibility for individuals with limited mobility while also being an exciting exploration of human-computer interaction. Check out the full project and its implementation on my GitHub: Mouse Using Eye. I’d love to hear your thoughts, feedback, or ideas for future improvements!",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
    ],
    image: eye,
    source_code_link: "https://github.com/RashmikaAkash/Mouse-Using-Eye.git",
  },
  {
    name: "Travel Sri Lanka",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
