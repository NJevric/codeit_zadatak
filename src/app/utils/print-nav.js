export const printNav = () => {
  const navLinks = {
    links: [
      {
        text: "Learn",
        href: "#",
      },
      {
        text: "Explore",
        href: "#",
      },
      {
        text: "Build",
        href: "#",
      },
      {
        text: "Careers",
        href: "#",
      },
      {
        text: "Contact",
        href: "#",
      },
      {
        text: "FAQ",
        href: "#",
      },
    ],
    button: {
      href: "#",
      text: "Build",
    },
    langs: ["En"],
  };

  const navBlock = document.querySelector(".nav__links");
  const linksBlock = document.querySelector(".nav__list");
  const navButton = document.querySelector(".nav__button");
  const navLangs = document.querySelector(".nav__languages");
  const footerLinks = document.querySelector(".footer__links-list");

  navLinks.links.forEach((link) => {
    linksBlock.innerHTML += `<li class="nav__list-link"><a href="${link.href}">${link.text}</a></li>`;
    footerLinks.innerHTML += ` <li class="footer__links-list-item">
    <a href="${link.href}" class="footer__links-list-item-link">${link.text}</a>
  </li>`;
  });
  navButton.innerHTML = `<a href="${navLinks.button.href}" class="nav__button-link button">${navLinks.button.text}</a>`;
  navLinks.langs.forEach((lang) => {
    navLangs.innerHTML += `<li class="nav__language">${lang}</li>`;
  });
};
