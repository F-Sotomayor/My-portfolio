import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Facundo Sotomayor',
  lang: 'en',
  description: 'Welcome to my portfolio',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Facundo',
  subtitle: `I'm a Frontend Developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `My name is Facundo Sotomayor, i'm 25 years old and i'm currently living on Buenos Aires, Argentina.`,
  paragraphTwo: `I've started coding almost one year ago, a friend of mine introduced me to it and guided me through the whole learning curve.`,
  paragraphThree:
    'If you are looking for a passionate developer and someone willing to grow and learn, check out my resume down below!',
  resume: 'https://www.docdroid.net/hmyBtyo/cv-en-pdf#page=2', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Google Map customized with React',
    info:
      'This app has firebase integrated so whenever you interact with the map you dont lose any valuable data.',
    info2: '',
    url: 'http://reactgooglemap.surge.sh/',
    repo: 'https://github.com/F-Sotomayor/MapReact', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'React DrumKit',
    info:
      'I had a lot of fun creating this, i extracted the idea from javascript30.com. You basically press a key and you play a drum sound.',
    info2: '',
    url: 'http://drumsjs.surge.sh/',
    repo: 'https://github.com/F-Sotomayor/React-Drums', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Guess the Pokemon!',
    info:
      'I havent finished this project because i learnt what i wanted from it. I used it to learn axios and how to deal with async and await; thats the reason why its not mobile friendly.',
    info2: '',
    url: 'http://guesspokemon.surge.sh/',
    repo: 'https://github.com/F-Sotomayor/Whos-that-pokemon-', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Pokedex with React and Chakra UI',
    info:
      'This app is meant to be only mobile, so if you open it on Desktop it will look super bad. This proyect was inspired in a challenge from an organization called DevOff, and the design of the app was inspired by Sapuel Nahwan',
    info2: '',
    url: 'https://pokedexchallenge.netlify.app/',
    repo: 'https://github.com/F-Sotomayor/Pokedex-with-Chakra', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: 'Lets Talk!',
  email: 'facundosotomayor95@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/facundo-sotomayor-a1246016a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/F-Sotomayor',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
