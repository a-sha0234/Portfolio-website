//import screenshots
import restaurentImg from "./screenshots/restaurent.png";
import ticTacToe from "./screenshots/ticTacToe.png";
import blog from "./screenshots/blog.png";
import receipt from "./screenshots/receipt.png";
import Portfolio from "./screenshots/portfolio.png";

//import languages
import html from "./languagePics/html.svg.png";
import css from "./languagePics/CSS3.svg.png";
import js from "./languagePics/JavaScript.png";
import sass from "./languagePics/sass.png";
import node from "./languagePics/node.png";
import react from "./languagePics/React.svg.png";
import jest from "./languagePics/jest.png";
import mongo from "./languagePics/mongoDb.jpg";
import ts from "./languagePics/ts.png";

interface Project {
  id: number;
  name: string;
  githubFrontRepo: string;
  githubBackRepo: string;
  screenshot: string;
  description: string;
  languages: string[];
}

const data: readonly Project[] = [
  {
    id: 1,
    name: "Portfolio site (This site)",
    githubFrontRepo: "https://github.com/a-sha0234/Portfolio-website",
    githubBackRepo: "",
    screenshot: Portfolio,
    description:
      "A front end portfolio site, this is used to display information about myself and projects I have made ",
    languages: [html, ts, react, sass],
  },
  {
    id: 2,
    name: "Noories Blogs",
    githubFrontRepo: "https://github.com/a-sha0234/blog-app-clientSide",
    githubBackRepo: "https://github.com/a-sha0234/blog-app",
    screenshot: blog,
    description:
      "This is web application contains one back-end (rest api) and two front-ends (one for the admin to add and delete blogs, the other for    users to read and comment under blogs) using the JAMstack architecture.",
    languages: [html, js, react, sass, node, mongo],
  },
  {
    id: 3,
    name: "Receipt tracker",
    githubFrontRepo: "https://github.com/a-sha0234/reciept-frontend",
    githubBackRepo: "https://github.com/a-sha0234/receipt-backend",
    screenshot: receipt,
    description:
      "This website allows users to utalize the crud operations (create, read, update and delete) to track their receipts. This contains one back-end and one front-end.",
    languages: [html, js, react, sass, node, mongo],
  },
  {
    id: 4,
    name: "Pizza4u",
    githubFrontRepo: "https://github.com/a-sha0234/Restaurent-landing-page",
    githubBackRepo: "",
    screenshot: restaurentImg,
    description:
      "This is a simple landing page for a restaurent that allows potential customers to check out the special dishes and opening times! ",
    languages: [html, js, react, sass, jest],
  },
  // {
  //   id: 5,
  //   name: "E-commerce app",
  //   githubFrontRepo: "https://github.com/a-sha0234/Ecommerc-frontEnd",
  //   githubBackRepo: "https://github.com/a-sha0234/Ecommerce-backend",
  //   screenshot: "",
  //   languages: [html, js, react, sass, node, mongo],
  // },

  {
    id: 6,
    name: "Tic Tac Toe",
    githubFrontRepo: "https://github.com/a-sha0234/tic-tac-toe-game",
    githubBackRepo: "",
    screenshot: ticTacToe,
    description:
      "A fully fledged two player game, with a score tracker and replay ability",
    languages: [html, css, js],
  },
];

export { data };
