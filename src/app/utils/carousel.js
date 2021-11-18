import arrow from "../assets/images/angle-left-icon.svg";
export const carousel = () => {

  $(".carousel__images").slick({
    prevArrow:`<img class='a-left control-c prev slick-prev' src="${arrow}">`,
    nextArrow:`<img class='a-right control-c next slick-next' src="${arrow}">`,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    speed:1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });
};
