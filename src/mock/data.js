import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tatiana | Full Stack Developer',
  lang: 'en',
  description: 'Welcome to my Portfolio',
};

// HERO DATA
export const heroData = {
  title: 'Kia ora my name is',
  name: 'Tatiana',
  subtitle: "I'm the Unknown Developer",
  cta: 'Discover me',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpg',
  paragraphOne:
    'I am a self-motivated and enthusiastic Full-Stack developer with a  background in Teaching and Education. My former teaching experience, together with my growing knowledge as a developer, gives me an essential toolkit for me to have a successful start as a junior programmer.',
  paragraphTwo:
    'People describe me as genuine, hardworking, kind and fun to be around. I have been commended for the high quality of work that I deliver, and my mentorship of others. I have a passion for creating solutions through technology that are of benefit to, enable and help others',
  paragraphThree:
    'My positivity and self-awareness, makes me a great team player. Known for my patience, I strive in problem-solving highlighting determination, perseverance and reflection. While I enjoy learning new skills and technologies, I also enjoy sharing/teaching what I learn to my colleagues.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tatiana.bernon@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mtbernon/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tatiana-bernon',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
