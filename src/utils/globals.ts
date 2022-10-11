import {
  faComputerMouse,
  faCamera,
  faComputer,
  faGamepad,
  faHeadphonesSimple,
  faMobile,
  faStopwatch,
  faTv,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

export const categoriesTypes = [
  "Accessories",
  "Camera & Videos",
  "Computer & Laptop",
  "Gaming",
  "Headphone",
  "Mobile & Tablets",
  "Smartwatches",
  // "Sports & Outdoors",
  "Television",
];

export const categoriesSections = [
  {
    name: "Accessories",
    icon: faComputerMouse,
    id: 1,
  },
  {
    name: "Camera & Videos",
    icon: faCamera,
    id: 2,
  },
  {
    name: "Computer & Laptop",
    icon: faComputer,
    id: 3,
  },
  {
    name: "Gaming",
    icon: faGamepad,
    id: 4,
  },
  {
    name: "Headphone",
    icon: faHeadphonesSimple,
    id: 5,
  },
  {
    name: "Mobile & Tablets",
    icon: faMobile,
    id: 6,
  },
  {
    name: "Smartwatches",
    icon: faStopwatch,
    id: 7,
  },
  {
    name: "Television",
    icon: faTv,
    id: 8,
  },
  {
    name: "Best Salles",
    icon: faMedal,
    id: 9,
  },
];

export const API_BASE_URL = "http://localhost:8000";
