export const changeLang = () => {
  const languages = document.querySelectorAll(".nav__language");
  const langArrow = document.querySelector(".nav__lang-arrow");

  langArrow.addEventListener("click", (e) => {
    e.preventDefault();
    languages.forEach((i) => {
      i.classList.toggle("nav__language--open");
      i.innerHTML === "En" ? (i.innerHTML = "Sr") : (i.innerHTML = "En");
    });

    langArrow.classList.toggle("nav__lang-arrow--hide");
  });
};
