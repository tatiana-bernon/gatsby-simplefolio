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
  resume: 'https://drive.google.com/file/d/1n_vzy3t-QhSHYlBaFhLcmGu-Ygtc9-u_/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pearing .jpg',
    title: 'Pearing',
    info:
      'This was my final project as part of the EDA Bootcamp. My team and I collaborated in creating a website enabling developers to reach out to each other and schedule pair-programming session based on a specific topic of their choice.',
    info2:
      'In this project we used for the front-end React.js , HTML,CSS and Bulma and for the Back-end Knex.js and SQLite3 in terms of db, In terms of authentication, authenticare was used.',
    url: '',
    repo: 'https://github.com/tatiana-bernon/pearing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'IGotU',
    info:
      'A personal project close to my heart and linked to my teaching life. This website aims to help families with parents working remote during these challenging times and for ECE teachers facing hardships. A platform where parents and teachers can connect and help each other.',
    info2:
      'For now I am working on the front end with React.Js and Bulma, I am planning to use node.js and knex on the Back-end',
    url: '',
    repo: 'https://github.com/tatiana-bernon/iGotU', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'GLTE',
    info:
      'Give Love To Everyone (GLTE for short also representative of the first name initial of the 4 amazing humans who worked together on this concept and project.) was born on a festive day where the EDA cohort I studied with were to celebrate the end of Phase2 of the Bootcamp. With this vibe in mind for one of our friday projects we decided to create an online remake of the Red, Black,High. Low card drinking Game',
    info2: 'This project uses React.js, Bulma, CSS, and REST API to use the deck of card',
    url: '',
    repo: 'https://github.com/tatiana-bernon/GLTE', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Rainbow -Parrot',
    info:
      'This project was created in order to practice more of React-routing. We decided as a team, to create a coloring space page, a simple project with a pinch of playfulness on a busy FridayProject Day! ',
    info2:
      'As mentioned above, this project is react based and CSS was used to style the page a teeny weeny bit. Feel free to have a go at it!',
    url: '',
    repo: 'https://github.com/tatiana-bernon/rainbow-parrot', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Closing circle Question Generator',
    info:
      'In EDA everyday would end up with a closing circle with the most simple but yet unthinkable questions to end the day. Well, for this project, the team wanted to help the EDA Teaching team by creating a Closing Circle Question Generator!',
    info2:
      'In this projecct we used some more of React.js, Bulma and CSS and we tried ffinding a noun generator API in vain so decided to create our own data in the form of JSON file. We also created three tables in terms of database thinking about the sentence structure: starters, finishers and one to save the finished questions.',
    url: '',
    repo: 'https://github.com/tatiana-bernon/Earth', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Javascript Game Carnival!',
    info:
      'A little insight of my abilities in creating short games. Some of which you will recognise though the little twist of humor I added to it. ',
    info2: 'For these games, Javascript, HTML and CSS were used.',
    url: '',
    repo: 'https://github.com/tatiana-bernon/JavaScript-Game-Carnival', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'First personal Website Attempt!',
    info:
      'My very first website ever! How lucky you are to have a glimpse of it! This website was used during the foundation part of the bootcamp using HTML and CSS only! Yes, imagine how I felt when I realised I did not need all these pages when using React! Ha! ha! ha! The Good and innocent times of my earlier ignorance and on a more positive note; the proof of my tremendous growth!',
    info2:
      'Together with HTMl and CSS, it was an opportunity for me to realise the implications of accessibility and responsiveness',
    url: '',
    repo: 'https://github.com/tatiana-bernon/myPortfolio.github.io/blob/master/pages/projects.html', // if no repo, the button will not show up
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
