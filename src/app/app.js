import { arrow } from "./utils/arrow";
import { changeLang } from "./utils/langs";
import { printNav } from "./utils/print-nav";
import { carousel } from "./utils/carousel";
import { printCarousel } from "./utils/print-carousel";
import { printSocials } from "./utils/print-socials";
import { printArticles } from "./utils/print-articles";
import { navReponsive } from "./utils/nav-responsive";

const app = () => {
  arrow();
  changeLang();
  printNav();
  printCarousel();
  carousel();
  printSocials();
  printArticles();
  navReponsive();
};

export default app;
