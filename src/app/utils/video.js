export const video = () => {
  const showVideo = document.querySelector(".play__button-link");
  const videoBlock = document.querySelector(".video");
  const videoShadow = document.querySelector(".shadow");

  console.log(showVideo);
  showVideo.addEventListener("click", (e) => {
    e.preventDefault();
    videoBlock.classList.add("video--show");
  });
  videoShadow.addEventListener("click", () => {
    videoBlock.classList.remove("video--show");
  });
};
