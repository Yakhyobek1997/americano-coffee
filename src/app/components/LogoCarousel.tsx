import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/img/olive1.jpg",
  "/img/olive2.jfif",
  "/img/olive3.webp",
];

export default function LogoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    cssEase: "ease-in-out",
  };

  return (
    <div style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", overflow: "hidden" ,}}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
