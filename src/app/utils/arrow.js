export const arrow = () => {
  const arrowDiv = document.querySelector("#arrow_top");

  window.addEventListener("scroll", (e) => {
    window.scrollY >= 200
      ? arrowDiv.classList.add("show")
      : arrowDiv.classList.remove("show");
  });
};
