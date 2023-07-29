// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Joel",
  middleName: "",
  lastName: "Brandinger",
  message: " | Engineer | Programmer | Athlete | ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jbrandinger",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/jbrandinger/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/joelbrandinger/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/jbrandinger/",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/joel.jpg"),
  imageSize: 375,
  message:
    "My name is Joel Brandinger. I'm currently a student at Tufts University majoring in data science with a minor in economics. I'm also a dedicated member of the varsity ice hockey team. Outside of academics and sports, you'll find me in the gym, pursuing my love for weight lifting, exploring nature through hiking, or savoring a cup of coffee under the warm sun.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Set project length or display specfic projects i.e ["repos-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jbrandinger",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Talk about leadership roles and opportunities",
  images: [
    { 
      img: require("../editable-stuff/joel.jpg"), 
      label: "First slide label", 
      paragraph: "Talk about leadership 1" 
    },
    { 
      img: require("../editable-stuff/joel.jpg"), 
      label: "Second slide label", 
      paragraph: "Talk about leadership 2" 
    },
  ],
  imageSize: {
    width:"550",
    height:"550"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 90 },
    { name: "C/C++", value: 95 },
    { name: "Java", value: 70 },
    { name: "React", value: 50 },
    { name: "HTML/CSS", value: 60 },
    { name: "JavaScript", value: 60 },
  ],
  softSkills: [
    { name: "Work Ethic", value: 100 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Disicpline", value: 100 },
    { name: "Problem Solving", value: 75 },
    { name: "Time Management", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am currently looking for full-time data science and software engineering roles! If you know of any available positions, have any questions, or just want to say hi, please feel free to email me at",
  email: "jbrandinger99@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Data Engineer Intern',
      companylogo: require('../assets/img/principal.png'),
      date: 'May 2023 – Present',
    },
    {
      role: 'Data Analytics Intern',
      companylogo: require('../assets/img/php.png'),
      date: 'May 2022 – August 2022',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
