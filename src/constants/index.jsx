import project1 from "../assets/project-1.png";

export const HERO_CONTENT = `I am a passionate software engineer and college student with awho is skilled and passionate in making scalable web applications. In my 4th year at the University of Houston, and with over 6 years of hands-on project experience. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software engineer and college student with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [ 
  {
    title: "University and Professor Review application - www.RMPClone.vercell.app",
    image: project1,
    description:
      "I created a web app similar to rate my  professor where users can log and search information about a specifc professor or school. I built this application using react and i make API calls using express/node. i gather data from a university details API, storing them in a PostgreSQL database with AWS.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Theme Park Management Dashboard - www.ShastaWorld.vercel.app",
    image: project1,
    description:
      "As part of a team, I managed the front end development of a theme park managment application. I used React and MUI to build a admin interface where they can view summaries and reports fetched from the backend.",
    technologies: ["React", "Python", "AWS", "MySQL"],
  },
  {
    title: "Portfolio Website - www.MmokutUmoh.com",
    image: project1,
    description:
      "I made a personal portfolio website to showcase my projects, skills, and work experience. The application was made with react using tailwind CSS. In addition, i used framer to add a dynamic movement effect. ",
    technologies: ["React", "Tailwind CSS"],
  },

];

export const CONTACT = {
  address: "Houston, Texas | Dallas, Texas ",
  phoneNo: "+1 (469)-347-5634",
  email: "mmokutaumoh@gmail.com",
};