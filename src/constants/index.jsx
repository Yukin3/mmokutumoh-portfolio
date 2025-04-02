import asr from "../assets/ASR-expirement.png";
import gpt from "../assets/GPT-experiment.png";
import qari from "../assets/qari-ai.png";
import botsim from "../assets/bot-sim.png";
import shasta from "../assets/shasta-world.png";
import pennyise from "../assets/penny.png";
import linguaduo from "../assets/lingua-duo.png";


export const HERO_CONTENT = `I am a passionate software engineer and college student with awho is skilled and passionate in making scalable web applications. In my 4th year at the University of Houston, and with over 6 years of hands-on project experience. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software engineer and college student with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "August 2024 - Present",
    role: "Computer Science Tutor",
    company: "Awty International School",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Javascript", "Python", "Team Management"],
  },
  {
    year: "May 2024 - August 2024",
    role: "IT Repair Technician",
    company: "SSMHEALTH",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Hardware repair", "Technical documentation", "System Configuration"],
  },

];

export const PROJECTS = [ 
  {
    title: "Bot Sim",
    image: botsim,
    description:
      "Duolingo clone WIP",
    technologies: ["Typescript", "Express", "Socket.io", "Text Generation", "Image Classification" ],
    link: "https://bot-sim.vercel.app/",
  },
  {
    title: "Qari AI",
    image: qari,
    description:
      "Duolingo clone WIP",
    technologies: ["React Native", "Typescript", "Express", "Python", "Auido-Speech Recognition"],
    link: "https://www.qari-ai.com/",
  },
  {
    title: "Lingua Duo",
    image: linguaduo,
    description:
      "Duolingo clone WIP",
    technologies: ["Typescript", "Node.js", "PostgreSQL"],
    link: "",
  },
  {
    title: "PennyWise - Timeseries Neobanking App",
    image: pennyise,
    description:
      "Developed a Neobank web application to manage transactions and balances across multiple bank accounts using data fetched from the (insert used APIs here) and integrated the Stripe API to safely and efficiently allow the transfer of funds between bank accounts and other users. Dedicated 150+ hours of work towards the app’s user interface and code infrastructure using Figma.",
    technologies: ["Typescript", "Python", "MySQL", "Time Series Forecasting"],
    link: "#",

  },
  {
    title: "ShastaWorld Themepark Management System",
    image: shasta,
    description:
      "Collaborated with a partner  to develop a fully-functional theme park management dashboard for a 3000-level course project, amounting to a total of 450+ commits, and resulting in a grade of 100%. Handicapped with 3 absent teammates, I was actively involved in the design, coding, and testing phases for both the front  and back-end. Deployed the frontend with Vercel and the backend on AWS with Docker for containerization, allowing for seamless scalability.",
    technologies: ["React", "Python", "RestAPI", "MySQL"],
    link: "https://theme-park-database-project-4i84.vercel.app/",
  },
  {
    title: "ASR Model Research - Transcription Accuracy",
    image: asr,
    description:
      "Developed a Neobank web application to manage transactions and balances across multiple bank accounts using data fetched from the (insert used APIs here) and integrated the Stripe API to safely and efficiently allow the transfer of funds between bank accounts and other users. Dedicated 150+ hours of work towards the app’s user interface and code infrastructure using Figma.",
    technologies: ["Juypter", "Keras", "PyTorch"],
    link: "https://github.com/Yukin3/asr-model-testing",

  },
  {
    title: "GPT Model Evaluation - Use Case Experiments",
    image: gpt,
    description:
      "Developed a Neobank web application to manage transactions and balances across multiple bank accounts using data fetched from the (insert used APIs here) and integrated the Stripe API to safely and efficiently allow the transfer of funds between bank accounts and other users. Dedicated 150+ hours of work towards the app’s user interface and code infrastructure using Figma.",
    technologies: ["Juypter", "Keras", "PyTorch"],
    link: "https://github.com/Yukin3/chatbot-testing",

  },
];

export const CONTACT = {
  address: "Houston, Texas | Dallas, Texas ",
  phoneNo: "+1 (469)",
  email: "mmokut",
};