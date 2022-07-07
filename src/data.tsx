import restaurentImg from "./screenshots/restaurent.png";
import ticTacToe from "./screenshots/ticTacToe.png";
import blog from "./screenshots/blog.png";
import receipt from "./screenshots/receipt.png";

interface Project {
  id: number;
  name: string;
  githubFrontRepo: string;
  githubBackRepo: string;
  screenshot: string;
}

const data: readonly Project[] = [
  {
    id: 1,
    name: "Portfolio site (This site)",
    githubFrontRepo: "https://github.com/a-sha0234/Portfolio-website",
    githubBackRepo: "",
    screenshot: "",
  },
  {
    id: 2,
    name: "Noories Blogs",
    githubFrontRepo: "https://github.com/a-sha0234/blog-app-clientSide",
    githubBackRepo: "https://github.com/a-sha0234/blog-app",
    screenshot: blog,
  },
  {
    id: 3,
    name: "Receipt tracker",
    githubFrontRepo: "https://github.com/a-sha0234/reciept-frontend",
    githubBackRepo: "https://github.com/a-sha0234/receipt-backend",
    screenshot: receipt,
  },
  {
    id: 4,
    name: "Pizza4u",
    githubFrontRepo: "https://github.com/a-sha0234/Restaurent-landing-page",
    githubBackRepo: "",
    screenshot: restaurentImg,
  },
  {
    id: 5,
    name: "E-commerce app",
    githubFrontRepo: "https://github.com/a-sha0234/Ecommerc-frontEnd",
    githubBackRepo: "https://github.com/a-sha0234/Ecommerce-backend",
    screenshot: "",
  },

  {
    id: 6,
    name: "Tic Tac Toe",
    githubFrontRepo: "https://github.com/a-sha0234/tic-tac-toe-game",
    githubBackRepo: "",
    screenshot: ticTacToe,
  },
];

export { data };
