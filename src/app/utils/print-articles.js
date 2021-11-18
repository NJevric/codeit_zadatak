import "../assets/images/tech.jpg";
import "../assets/images/hub.jpg";
import "../assets/images/explore.jpg";
export const printArticles = () => {
  const articles = [
    {
      link: "#",
      img: {
        src: "tech.jpg",
        alt: "Learn",
      },
      date: "09.05.2021",
      category: "Learn",
      desc: "Read the vision of Hexa and learn about the powerful technology",
      button: "Welcome to hexa",
    },
    {
      link: "#",
      img: {
        src: "hub.jpg",
        alt: "Stake",
      },
      date: "09.05.2021",
      category: "Stake",
      desc: "Grow the economy of your chain by connecting to Hexa Hub",
      button: "Discover hexa",
    },
    {
      link: "#",
      img: {
        src: "explore.jpg",
        alt: "Explore",
      },
      date: "09.05.2021",
      category: "Explore",
      desc: "Browse the ever-expanding, diverse collection of apps",
      button: "Explore ecosystem",
    },
  ];
  const articlesBlock = document.querySelector(".articles");

  articles.forEach((article) => {
    articlesBlock.innerHTML += `
        <article class="news__article">
              <a href="${article.link}">
                <img
                  src="images/${article.img.src}"
                  alt="${article.img.alt}"
                  class="article__img"
                />
              </a>
              <div class="article__date-time">
                <p class="date">${article.date}</p>
                <div class="article__date-time-line"></div>
                <a href="#" class="category">${article.category}</a>
              </div>
              <p class="article__desc">
                ${article.desc}
              </p>
              <div class="article__button">
                <a href="${article.link}" class="article__button-link button"
                  >${article.button}</a
                >
              </div>
            </article>
        `;
  });
};
