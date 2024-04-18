const header = {
  //add favicon V
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Vivek Kumar",
  role: "Full Stack Web Developer",
  description:
    "Full-Stack Web Developer with an ability to learn and collaborate in rapidly changing environments and compositions. Worked through 6 months of intensive Bootcamp structure and learned MERN tech stack. Eager to learn new technologies and tackle new web development challenges.",
  resume:
    "https://drive.google.com/file/d/1mMwlIi6nSFBuUGFrXNOTC5I2LUE2uRC2/view",
  social: {
    linkedin: "https://www.linkedin.com/in/vivek-kumar-56a0a81a6/",
    github: "https://github.com/Vivek14kr",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Quiz App",
    image: "/Quiz.png",
    description: "An interactive quiz game with admin Functionality.",
    stack: ["React", "Bootstrap", "Expressjs", "Nodejs", "MongoDB"],
    sourceCode: "https://github.com/Vivek14kr/DigicellFrontend",
    livePreview: "https://digicell-frontend.vercel.app/",
  },
  {
    name: "Car Rental App",
    image: "/rent.png",
    description: "A responsive Car Rental where users can rent a car and Agencies can add their cars",
    stack: ["React", "Bootstrap", "Expressjs", "Nodejs", "MongoDB"],
    sourceCode: "https://github.com/Vivek14kr/Internshala-Frontend",
    livePreview: "https://luxury-hotteok-b481c5.netlify.app/",
  },
  {
    name: "Clone of NordStorm",
    image: "/k.png",
    description: "An E-commerce application to shop all apparels",
    stack: ["React", "Redux", "Expressjs", "Nodejs", "MongoDB"],
    sourceCode: "https://github.com/Vivek14kr/NordStormFrontend",
    livePreview: "https://nordstormclone.netlify.app/",
  },
  {
    name: "Ecommerce Frontend Site",
    image: "/ecom.png",
    description:
      "A Responsive E-commerce application to shop all apparels and add to Cart",
    stack: ["React", "Redux"],
    sourceCode: "https://github.com/Vivek14kr/product",
    livePreview: "https://spectacular-semolina-432503.netlify.app/",
  },
  {
    name: "Crypto Tracker Web App",
    image: "/crypto.png",
    description:
      "A Single page web application to track upto 1000+ cryptocurrency prices",

    stack: ["React", "Ant Design"],
    sourceCode: "https://github.com/Vivek14kr/H3mart",
    livePreview: "https://zingy-phoenix-cafca6.netlify.app/",
  },
  {
    name: "Clone of Lakme",
    image: "/lakme.png",
    description:
      "An e-commerce website to buy cosmetics at affordable prices. This is a clone of the Lakme website. The clone is complete with a Login page, Sign-in page, Shopping Cart, Wishlist and Sorting feature. ",
    stack: ["HTML", "CSS", "Javascript", "Localstorage"],
    sourceCode: "https://github.com/nkil123/lakme_clone",
    livePreview: "https://lakme-clone.vercel.app/",
  },

  {
    name: "Bio Generator",
    image: "/Biogenerator.png",
    description:
      "A Website which will generate your bio Automatically just by providing some information instantly.",
    stack: ["React"],
    sourceCode: "https://github.com/Vivek14kr/BioBuilder",
    livePreview: "https://beamish-travesseiro-7a3517.netlify.app/",
  },

  {
    name: "Onboarding FrontEnd",
    image: "/onboarding.png",
    description:
      "An onboarding Front End App beautifully designed with React and Material-UI",
    stack: ["React", "Material-UI", "Use-State", "Props"],
    sourceCode: "https://github.com/Vivek14kr/Eden-Onboarding",
    livePreview: "https://cutshortonboarding.netlify.app/",
  },

  {
    name: "Weather App",
    image: "/weather.png",
    description:
      "It is an weather app which will let you know temperature of a particular location or place",
    stack: ["React"],
    sourceCode: "https://github.com/Vivek14kr/Weatherapp",
    livePreview: "https://deft-kataifi-c10425.netlify.app/",
  },
  {
    name: "Online School Website",
    image: "/masailms.png",
    description:
      "It is an online classroom website which will let you post assignments and lectures instantly",
    stack: ["React", "MongoDB", "Node.js", "Express.js"],
    sourceCode: "https://github.com/Vivek14kr/masainewlms",
    livePreview: "https://masaiilmss.herokuapp.com/",
  },
  {
    name: "Clone of Porter",
    image: "/porter.png",
    description:
      "A website to Book mini-trucks and intra city logistics. Built the Backend and frontend of porter.in using ejs CSS,Javascript, express js, node js and mongoo db. Major pages include home page, packers and movers page , For Enterprice page , Driver Partners page",
    stack: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "EJS",
      "Expressjs",
      "Nodejs",
      "MongoDB",
    ],
    sourceCode:
      "https://github.com/avinashpanchal123/porterClone_Backend/tree/main/constructweek_porter_clone-main",
    livePreview: "https://porterclone.herokuapp.com/",
  },
  {
    name: "Amazon Clone",
    image: "/Amazon.png",
    description:
      "An complete e-commerce website to buy all your necessary items. Buy range of items from many categories and enjoy shopping",
    stack: ["React", "Redux", "Javascript", "CSS", "Firebase"],
    sourceCode: "https://github.com/Vivek14kr/amazon-clone",
    livePreview: "https://aammaazzoonn.herokuapp.com/",
  },

  {
    name: "Music App",
    image: "/musicapp.png",
    description:
      "It is an songs website where you can listen you favourite songs online",
    stack: ["React", "APIs", "Filtering"],
    sourceCode: "https://github.com/Vivek14kr/musicplayer",
    livePreview: "https://musicccapp.herokuapp.com/",
  },
];

const frontskills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  //{
  {
    image:
      "https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png",
    skillname: "HTML",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/css3.svg",
    skillname: "CSS",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/javascript.svg",
    skillname: "JS",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/react.svg",
    skillname: "REACT",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/redux.svg",
    skillname: "REDUX",
  },
 
  // 'HTML',
  // 'CSS',
  // 'JavaScript',

  // 'React',
  // 'Redux',

  // 'Material UI',
  // 'Git',
  // 'MongoDB',
  // 'Node',
  // 'Express'
];


const backskills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  //{

  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/nodejs.svg",
    skillname: "NODE.js",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/exp.png",
    skillname: "EXPRESS",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/mongodb.svg",
    skillname: "MongoDB",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/heroku.svg",
    skillname: "Heroku",
  },
  {
    image: "https://portfolio-vinayak-pk.vercel.app/svg/git-icon.svg",
    skillname: "GIT",
  },

  // 'HTML',
  // 'CSS',
  // 'JavaScript',

  // 'React',
  // 'Redux',

  // 'Material UI',
  // 'Git',
  // 'MongoDB',
  // 'Node',
  // 'Express'
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "vivekkumarvky13@gmail.com",
};

export { header, about, projects, frontskills, backskills, contact };
