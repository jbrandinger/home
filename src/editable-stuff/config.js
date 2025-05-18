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
      url: "https://www.instagram.com/joel.brandinger/",
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
    "My name is Joel Brandinger. I recently graduated from Tufts University with a major in data science and minors in mathematics and computer science. At Tufts I was also a dedicated member of the varsity ice hockey team. Outside of academics and sports, you'll find me in the gym, pursuing my love for weight lifting, exploring nature through hiking, or savoring a cup of coffee under the warm sun.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Set project length or display specfic projects i.e ["repos-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jbrandinger",
  reposLength: 0,
  specificRepos: ['chimpanzee-size-estimation', 'image_classification', 'song_clustering', 'boston_metro'],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  data: [
    { 
      name: 'Python', 
      logo: require('../assets/img/python.png')
    },
    { 
      name: 'SQL', 
      logo: require('../assets/img/sql.png') 
    },
    { 
      name: 'C++', 
      logo: require('../assets/img/cpp.png') 
    },
    { 
      name: 'Java', 
      logo: require('../assets/img/java.png') 
    },
    { 
      name: 'React', 
      logo: require('../assets/img/react.png') 
    },
    { 
      name: 'HTML', 
      logo: require('../assets/img/html.png') 
    },
    { 
      name: 'JavaScript', 
      logo: require('../assets/img/js.png') 
    },
    { 
      name: 'C#', 
      logo: require('../assets/img/csharp.png') 
    },
  ]
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions or just want to say hi, please feel free to email me at",
  email: "jbrandinger99@gmail.com",
};

// EXPERIENCES
const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/Wayfair_logo.png'),
      date: 'July 2024 – Present',
    },
    {
      role: 'Machine Learning Research Assistant',
      companylogo: require('../assets/img/tufts_logo.png'),
      date: 'November 2023 – May 2024',
    },
    {
      role: 'Software Developer',
      companylogo: require('../assets/img/jumbocode.png'),
      date: 'September 2023 – April 2024',
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/principal.png'),
      date: 'May 2023 – August 2023',
    },
    {
      role: 'Data Analytics Intern',
      companylogo: require('../assets/img/php.png'),
      date: 'May 2022 – August 2022',
    },
    {
      role: 'Grocery Shopper',
      companylogo: require('../assets/img/Shipt_Logo.png'),
      date: 'April 2019 – August 2021',
    }
  ]
}

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
