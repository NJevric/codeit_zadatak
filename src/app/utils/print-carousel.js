import "../assets/images/partner_logo.jpg";

export const printCarousel = () => {
  const images = [
    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },
    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },

    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },

    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },

    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },
    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },
    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },
    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },

    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },

    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },

    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },

    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },

    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },

    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },

    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },
    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },
    {
      src: "partner_logo.jpg",
      alt: "Partner",
    },
    {
        src: 'partner_logo.jpg',
        alt: 'Partner'
    }
  ];
  const carouselBlock = document.querySelector(".carousel__images");
  images.forEach((image) => {
    carouselBlock.innerHTML += ` <div><img src="images/${image.src}" alt="${image.alt}" class="carousel__img"></div>`;
  });
};
