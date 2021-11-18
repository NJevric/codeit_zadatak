export const video = () => {
  const play = document.querySelector(".play__button-link");
  const media = document.querySelector('video');


  play.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('aaa');
    playPauseMedia();
  });
  function playPauseMedia() {

    if(media.paused) {
      media.play();
    } else {
      media.pause();
    }
  }
};
