import { arrow } from "./utils/arrow";
import { changeLang } from "./utils/langs";
import { video } from "./utils/video";
import { printNav } from "./utils/print-nav";
import { carousel } from "./utils/carousel";
import { printCarousel } from "./utils/print-carousel";
const app = () => {
  arrow();
  changeLang();
  video();
  printNav();
  printCarousel();
  carousel();
  
};

export default app;
