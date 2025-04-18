import {
  rrc,
  aws,
  portfolio,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  promptshare,
  bank,
  sneaker,
  todo,
  chatroom,
  androidlogo,
  northfield,
  webcraft,
  innovation,
  location,
  carart,
  financeVisuals
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiDotnet,
  SiTwilio,
  SiGooglemaps,
  SiOpenai,
  SiNextdotjs,
  SiMicrosoftazure,
  SiMongodb,
  SiAuth0,
  SiVercel,
  SiBlogger,
  SiCsharp,
  SiKotlin,
  SiTypescript,
  SiMongoose,
  SiBlazor,
  SiPostgresql,
  SiDatadog,
  SiVisualstudio,
  SiPhpmyadmin,
  SiAndroidstudio,
  SiPhp,
  SiSwagger,
  SiSocketdotio,
  SiNodedotjs,
  SiSequelize,
  SiSqlite,
  SiMaterialdesign,
  SiLeaflet,
  SiGo,
  SiWindows,
  SiSpringboot
} from "react-icons/si";

import {
  FaGolang
} from "react-icons/fa6";

import { DiAndroid, DiAws, DiCss3, DiJava, DiJavascript, DiMsqlServer, DiPhp, DiPython, DiRuby } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/1JYXzmlaiqZaTkcyU_fD-28e1F4EBbY_s/view?usp=drive_link";
export const repoLink = "https://github.com/Karan-Brar/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/karan-brar-web/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  // {
  //   id: "achievements",
  //   title: "Achievements",
  // },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: rrc,
    title: "Red River College Polytechnic",
    degree: "Business Information Technology Diploma",
    duration: "September 2022 - Dec 2024",
    content1:
      "Completed a comprehensive software development curriculum, including web and mobile development with React, PHP, .NET (C#), and Java, along with foundational computer networking concepts.",
  },
  {
    id: "education-2",
    icon: aws,
    title: "AWS Academy",
    degree: "Cloud Foundations Certification",
    duration: "Sep 2024 - Dec 2024",
    content1:
      "Obtained a certification in the AWS cloud foundations program, the curriculum invloved learning and practicing the usage of various AWS services like EC2 and Lambda Functions.",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article: "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-2",
    icon: polkadot,
    event: "Polkadot Hackathon: Europe Edition",
    position: "2nd Runner Up in the ink! Smart Contract Category",
    content1: "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
    content2: "",
    content3: "",
    github: "https://github.com/pranav2305/GreenTrust",
  },
  {
    id: "a-3",
    icon: lightspeed,
    event: "Warpspeed by Lightspeed",
    position: "1st Runner Up",
    content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
    content2: "Top 3 projects using Replit",
    content3: "1st Runner Up by Amazon Web Services (AWS)",
    article: "https://shorturl.at/fhjsT",
  },
  {
    id: "a-4",
    icon: dennisivy,
    event: "September Hackathon by Dennis Ivy",
    position: "Winner",
    content1: "Rated the best portfolio website among 450+ participants across the globe.",
    content2: "",
    content3: "",
    youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
    project: "https://parthmittal.netlify.app/",
  },
  {
    id: "a-5",
    icon: manipal,
    event: "Manipal Hackathon'22",
    position: "Consolation Prize",
    content1: "Top 10 among 500+ teams across India",
    content2: "Developed a cross-platform mobile application to address the problem of social cohesion.",
    content3: "",
    article: "https://shorturl.at/exEIQ",
  },
  {
    id: "a-6",
    icon: icon,
    event: "ICON Hyperbuild Hackathon",
    position: "Honorable Mention",
    content1: "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
    content2: "",
    content3: "",
    project: "https://devpost.com/software/green-trust-xj2w6g",
  },
  {
    id: "a-7",
    icon: ethforall,
    event: "ETHForAll 2023",
    position: "Top 3 Superfluid Projects",
    content1: "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
    content2: "",
    content3: "",
    project: "https://devfolio.co/projects/green-trust-ed14",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-2",
        icon: SiCsharp,
        name: "C-Sharp",
      },
      {
        id: "pl-3",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-4",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-4",
        icon: SiGo,
        name: "Go",
      },
      {
        id: "pl-5",
        icon: DiPython,
        name: "Python",
      },
      {
        id: "pl-6",
        icon: DiPhp,
        name: "PHP",
      },
      {
        id: "pl-7",
        icon: SiKotlin,
        name: "Kotlin",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDotnet,
        name: ".NET",
      },
      {
        id: "f-2",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "f-3",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiMongoose,
        name: "Mongoose",
      },
      {
        id: "f-8",
        icon: SiDotnet,
        name: ".NET",
      },
      {
        id: "f-8",
        icon: SiBlazor,
        name: "Blazor",
      },
      {
        id: "f-8",
        icon: SiSpringboot,
        name: "Spring Boot",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: DiAws,
        name: "AWS",
      },
      {
        id: "t-2",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "t-3",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: SiAndroidstudio,
        name: "Android Studio",
      },
      {
        id: "t-8",
        icon: SiVercel,
        name: "Vercel",
      },
      {
        id: "t-9",
        icon: SiDatadog,
        name: "Data Dog",
      },
      {
        id: "t-9",
        icon: SiVisualstudio,
        name: "Visual Studio",
      },
      {
        id: "t-10",
        icon: SiPhpmyadmin,
        name: "PHPMyAdmin",
      },
      {
        id: "t-11",
        icon: SiPostman,
        name: "Postman",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Northfield IT",
    logo: northfield,
    link: "https://www.northfieldit.com/",
    positions: [
      {
        title: "Junior DevOps Engineer (Application Support)",
        duration: "Jan 2023 - Sep 2023",
        content: [
          {
            text: "Collaborated with NFL Clubs to troubleshoot website and SEO issues related to text content, design issues, audio streaming issues, and webpage layouts. Used Pocket CMS to resolve 10+ issues during NFL games.",
            link: "",
          },
          {
            text: "Enhanced the frontend of an internal monitoring tool by making a UI improvement that allowed users to view the online/offline/away status of other users, their team affiliations, and whether they were on time-off, using JavaScript and HTML templating languages.",
            link: "",
          },
          {
            text: "Managed over 500 support tickets through JIRA and resolved infrastructure issues using Datadog and Prometheus.",
            link: "",
          },
          {
            text: "Assisted with over 100 access management tasks for multiple services, including LDAP Open Server, Slack, AWS etc., ensuring smooth operations by completing access requests in a timely manner",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Webcraft",
    logo: webcraft,
    link: "https://www.instagram.com/webcraft.ca/",
    positions: [
      {
        title: "Freelancer and Full-Stack Web Developer",
        duration: "July 2023 - May 2024",
        content: [
          {
            text: "Founded and led a digital solutions agency specializing in responsive web applications and modern digital experiences for diverse business clients",
            link: "",
          },
          {
            text: "Developed cross-platform web solutions using both no-code platforms (Bubble) and professional development frameworks, including React.js and Next.js",
            link: "",
          },
          {
            text: "Implemented scalable web architectures with Vercel deployment, focusing on intuitive UI/UX design and delivering end-to-end digital products",
            link: "",
          },
          {
            text: "Managed full software development lifecycle from initial client consultation through solution design, development, and deployment, ensuring high-quality technical outcomes and client satisfaction",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Traffic Heatmap Visualizer",
    github: "https://github.com/Karan-Brar/traffic-monitoring-dashboard",
    image: location,
    content:
      "This is a simplistic React Application that calls upon a C# REST API to get real-time traffic-data for a 120 major points in the city and visualize the traffic data in the form of a heatmap.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiLeaflet,
        name: "Leaflet",
      },
      {
        id: "icon-3",
        icon: SiCsharp,
        name: "C-Sharp",
      },
      {
        id: "icon-4",
        icon: SiGooglemaps,
        name: "MongoDB",
      },
    ],
  },
  {
    id: "project-2",
    title: "PromptShare",
    github: "https://github.com/Karan-Brar/prompt-share",
    link: "https://prompt-share-nine.vercel.app/",
    image: promptshare,
    content:
      "Share prompts that lead to interesting answers from AI Models like ChatGPT with the world! Implements Google OAuth for easy log in/log out functionality along with data persistence in a non-relational database.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "NextJS",
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "icon-5",
        icon: SiAuth0,
        name: "Google OAuth",
      },
      {
        id: "icon-6",
        icon: SiVercel,
        name: "Vercel",
      },
    ],
  },
  {
    id: "project-3",
    title: "Save On Rates",
    link: "https://www.saveonrates.ca/",
    image: bank,
    content:
      "Made for a local mortgage brokering company, integrates the Twilio E-mail API to send e-mails to mortgage agents upon form submissions from clients. Invloves a highly user-friendly design by pushing boundaries of state management in React.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "icon-4",
        icon: SiTwilio,
        name: "Twillio E-mail API",
      },
      {
        id: "icon-5",
        icon: SiVercel,
        name: "Vercel",
      },
    ],
  },
  {
    id: "project-4",
    title: "City of Winnipeg Data Dashboard",
    github: "https://github.com/CCianfloneDev/WpgData/tree/contract-bids",
    image: financeVisuals,
    content:
      "This is a .NET Blazor app that utilizes API Data from the City of Winnipeg's Financial APIs catalouge to create visualizations of this data using pie chart, bar chart and data grid components using the MudBlazor library",
    stack: [
      {
        id: "icon-1",
        icon: SiBlazor,
        name: "Blazor",
      },
      {
        id: "icon-2",
        icon: SiDotnet,
        name: ".NET",
      },
      {
        id: "icon-3",
        icon: SiCsharp,
        name: "C#",
      },
    ],
  },
  {
    id: "project-5",
    title: "Automotive Dealership Management Application",
    github: "https://github.com/Karan-Brar/automotive-dealership-winforms",
    image: carart,
    content:
      "Made a WinForms app using C# where as user('dealership employee') one create quotes for a car wash, the sale of a vehicle and view the inventory of vehicles.",
    stack: [
      {
        id: "icon-1",
        icon: SiCsharp,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiDotnet,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiWindows,
        name: "Next.js",
      },
    ],
  },
  {
    id: "project-6",
    title: "IceFeet",
    github: "https://github.com/Karan-Brar/sneaker-journal",
    image: sneaker,
    content:
      "A website blog that allows users to share their interesting sneaker finds, users can create accounts, view what others have shared and even comment on their opinions on the various sneakers. Implements password hashing and sessions with PHP to keep the website secure.",
    stack: [
      {
        id: "icon-1",
        icon: SiPhp,
        name: "PHP",
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-4",
        icon: SiPhpmyadmin,
        name: "PhpMyAdmin",
      },
      {
        id: "icon-5",
        icon: SiMysql,
        name: "MySQL",
      },
    ],
  },
  {
    id: "project-7",
    title: "To-do list REST API",
    github: "https://github.com/Karan-Brar/TodoApi-ASP.NET",
    image: todo,
    content:
      "A clean and simplistic REST API built with .NET Core that communicates with a PostgreSQL database allowing users to perform CRUD operation on typical items in a to-do list. This can serve as a great base for anybody looking to develop a to-do list app.",
    stack: [
      {
        id: "icon-1",
        icon: SiCsharp,
        name: "C-Sharp",
      },
      {
        id: "icon-2",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "icon-3",
        icon: SiSwagger,
        name: "Swagger",
      },
    ],
  },
  {
    id: "project-8",
    title: "Mercury Chatrooms",
    github: "https://github.com/Karan-Brar/Mercury-ChatRooms",
    link: "https://mercury-chatrooms.onrender.com/",
    image: chatroom,
    content:
      "A discord-like application that allows users from anywhere in world join a chatroom in a topic that interests them and share their views with others in the chatroom in real-time! Heavily uses websockets to obtain real-time functionality.",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-2",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "icon-3",
        icon: SiSocketdotio,
        name: "Socket.IO Websockets",
      },
      {
        id: "icon-4",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "icon-5",
        icon: SiSequelize,
        name: "Sequelize",
      },
    ],
  },
  {
    id: "project-9",
    title: "Android Utility App",
    github: "https://github.com/Karan-Brar/UtilityApp",
    image: androidlogo,
    content:
      "Utility App made for android, working as a swiss knife allowing you to take notes with the added availability of viewing weather forecasts. Utilizes all the essentials of android development like data persistence, Material UI, External API Usage etc.",
    stack: [
      {
        id: "icon-1",
        icon: SiKotlin,
        name: "Kotlin",
      },
      {
        id: "icon-2",
        icon: SiAndroidstudio,
        name: "Android Studio",
      },
      {
        id: "icon-3",
        icon: SiSqlite,
        name: "SQLite",
      },
      {
        id: "icon-4",
        icon: SiMaterialdesign,
        name: "Material UI",
      },
    ],
  },
  {
    id: "project-10",
    title: "Portfolio",
    github: "https://github.com/Karan-Brar/personal-portfolio",
    link: "https://parthmittal.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Directions Conference",
    title: "Wordpress Developer",
    duration: "December 2022",
    content: [
      {
        text: "Collaborated with cross-functional team of instructors, project management, and technology students.",
        link: "",
      },
      {
        text: "Supported annual RRC Polytech conference connecting business students with industry professionals.",
        link: "",
      },
      {
        text: "Integrated social media feeds from conference's social pages.",
        link: "",
      },
    ],
    logo: rrc,
  },
  {
    id: 2,
    organisation: "Sprint To Innovate",
    title: "Member - Team Big Boolean",
    duration: "November 2021",
    content: [
      {
        text: "Participated in 5-student team for business challenge hackathon",
        link: "https://www.linkedin.com/posts/karan-brar-web_bigboolean-final-pitch-activity-6919121095795060736-DFZr?utm_source=share&utm_medium=member_desktop",
      },
      {
        text: "Developed prototype solution for Neo Financial (Canadian financial institution)",
        link: "",
      },
      {
        text: "Designed and delivered pitch presenting potential benefits of the prototype to judging panel",
        link: "",
      },
    ],
    logo: innovation,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/karan-brar-web",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/karan-brar",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:brarkaran938@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/_KaranBrar_",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Karan Brar",
  githubUsername: "Karan-Brar",
  tagLine: "Full Stack Developer | .NET and React Enthusisast | RRC'24",
  intro:
    "A Canadian software developer transforming ideas into code, continuously learning and evolving with every project.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = [
  "mittal-parth/personal-portfolio",
  "firstcontributions/first-contributions",
  "Qu-Ack/opensource_starter",
];