const colors = {
  // Couleurs principales
  primary: "#0E0A2F",
  secondary: "#393E46",
  accent: "#4F5B62",

  // Couleurs neutres
  white: "#F8FAFC",
  gray: "#C0C7D6",
  lightGray: "#E5E9F0",
  darkGray: "#97A0AF",

  // Couleurs d'accentuation
  blue: "#5699FF",
  green: "#77DD77",
  yellow: "#FFCC00",
  red: "#FF4D4F",
};

export default colors;

// const bestCourses

export const bestCourses = [
  {
    title: "Créer un site web professionnel en moins de 24h : Les outils",
    img: "../assets/thumbnails/course_thumbnails/course_thumbnail_default_1.jpg",
    price: "$25",
    level: "Débutant",
    rating: 4,
    comments: 6,
    instructorImg: "https://okademy.africa/uploads/user_image/582d6451c16b227978dbca04be91751d.jpg",
    instructor: "john doe",
    hours: "00:00:00",
    lectures: 7,
  },
  {
    title: "Créer un site web professionnel en moins de 24h : Les outils",
    img: "../assets/thumbnails/course_thumbnails/course_thumbnail_default_10.jpg",
    price: "$25",
    level: "Débutant",
    rating: 4,
    comments: 6,
    instructorImg: "https://okademy.africa/uploads/user_image/582d6451c16b227978dbca04be91751d.jpg",
    instructor: "john doe",
    hours: "00:00:00",
    lectures: 7,
  },
  {
    title: "Créer un site web professionnel en moins de 24h : Les outils",
    img: "../assets/thumbnails/course_thumbnails/course_thumbnail_default_11.jpg",
    price: "$25",
    level: "Débutant",
    rating: 4,
    comments: 6,
    instructorImg: "https://okademy.africa/uploads/user_image/582d6451c16b227978dbca04be91751d.jpg",
    instructor: "john doe",
    hours: "00:00:00",
    lectures: 7,
  },
  {
    title: "Créer un site web professionnel en moins de 24h : Les outils",
    img: "../assets/thumbnails/course_thumbnails/course_thumbnail_default_12.jpg",
    price: "$25",
    level: "Débutant",
    rating: 4,
    comments: 6,
    instructorImg: "https://okademy.africa/uploads/user_image/582d6451c16b227978dbca04be91751d.jpg",
    instructor: "john doe",
    hours: "00:00:00",
    lectures: 7,
  },
  {
    title: "Créer un site web professionnel en moins de 24h : Les outils",
    img: "../assets/thumbnails/course_thumbnails/course_thumbnail_default_13.jpg",
    price: "$25",
    level: "Débutant",
    rating: 4,
    comments: 6,
    instructorImg: "https://okademy.africa/uploads/user_image/582d6451c16b227978dbca04be91751d.jpg",
    instructor: "john doe",
    hours: "00:00:00",
    lectures: 7,
  },
  {
    title: "Créer un site web professionnel en moins de 24h : Les outils",
    img: "../assets/thumbnails/course_thumbnails/course_thumbnail_default_14.jpg",
    price: "$25",
    level: "Débutant",
    rating: 4,
    comments: 6,
    instructorImg: "https://okademy.africa/uploads/user_image/582d6451c16b227978dbca04be91751d.jpg",
    instructor: "john doe",
    hours: "00:00:00",
    lectures: 7,
  },
  {
    title: "Créer un site web professionnel en moins de 24h : Les outils",
    img: "../assets/thumbnails/course_thumbnails/course_thumbnail_default_16.jpg",
    price: "$25",
    level: "Débutant",
    rating: 4,
    comments: 6,
    instructorImg: "https://okademy.africa/uploads/user_image/582d6451c16b227978dbca04be91751d.jpg",
    instructor: "john doe",
    hours: "00:00:00",
    lectures: 7,
  },
  {
    title: "Créer un site web professionnel en moins de 24h : Les outils",
    img: "../assets/thumbnails/course_thumbnails/course_thumbnail_default_17.jpg",
    price: "$25",
    level: "Débutant",
    rating: 4,
    comments: 6,
    instructorImg: "https://okademy.africa/uploads/user_image/582d6451c16b227978dbca04be91751d.jpg",
    instructor: "john doe",
    hours: "00:00:00",
    lectures: 7,
  },
  {
    title: "Créer un site web professionnel en moins de 24h : Les outils",
    img: "../assets/thumbnails/course_thumbnails/course_thumbnail_default_21.jpg",
    price: "$25",
    level: "Débutant",
    rating: 4,
    comments: 6,
    instructorImg: "https://okademy.africa/uploads/user_image/582d6451c16b227978dbca04be91751d.jpg",
    instructor: "john doe",
    hours: "00:00:00",
    lectures: 7,
  },
  {
    title: "Créer un site web professionnel en moins de 24h : Les outils",
    img: "../assets/thumbnails/course_thumbnails/course_thumbnail_default_22.jpg",
    price: "$25",
    level: "Débutant",
    rating: 4,
    comments: 6,
    instructorImg: "https://okademy.africa/uploads/user_image/582d6451c16b227978dbca04be91751d.jpg",
    instructor: "john doe",
    hours: "00:00:00",
    lectures: 7,
  },
];


export const getImage = (imageName) => {
  switch(imageName) {
    case '../assets/thumbnails/course_thumbnails/course_thumbnail_default_1.jpg':
      return require('../assets/thumbnails/course_thumbnails/course_thumbnail_default_1.jpg');
    case '../assets/thumbnails/course_thumbnails/course_thumbnail_default_10.jpg':
      return require('../assets/thumbnails/course_thumbnails/course_thumbnail_default_10.jpg');
    case '../assets/thumbnails/course_thumbnails/course_thumbnail_default_11.jpg':
      return require('../assets/thumbnails/course_thumbnails/course_thumbnail_default_11.jpg');
    case '../assets/thumbnails/course_thumbnails/course_thumbnail_default_12.jpg':
      return require('../assets/thumbnails/course_thumbnails/course_thumbnail_default_12.jpg');
    case '../assets/thumbnails/course_thumbnails/course_thumbnail_default_13.jpg':
      return require('../assets/thumbnails/course_thumbnails/course_thumbnail_default_13.jpg');
    case '../assets/thumbnails/course_thumbnails/course_thumbnail_default_14.jpg':
      return require('../assets/thumbnails/course_thumbnails/course_thumbnail_default_14.jpg');
    case '../assets/thumbnails/course_thumbnails/course_thumbnail_default_16.jpg':
      return require('../assets/thumbnails/course_thumbnails/course_thumbnail_default_16.jpg');
    case '../assets/thumbnails/course_thumbnails/course_thumbnail_default_17.jpg':
      return require('../assets/thumbnails/course_thumbnails/course_thumbnail_default_17.jpg');
    case '../assets/thumbnails/course_thumbnails/course_thumbnail_default_21.jpg':
      return require('../assets/thumbnails/course_thumbnails/course_thumbnail_default_21.jpg');
    case '../assets/thumbnails/course_thumbnails/course_thumbnail_default_22.jpg':
      return require('../assets/thumbnails/course_thumbnails/course_thumbnail_default_22.jpg');
    // Ajoutez d'autres cas pour chaque image
    default:
      return require('../assets/thumbnails/course_thumbnails/course_thumbnail_default_1.jpg'); // Image par défaut si nécessaire
  }
};
