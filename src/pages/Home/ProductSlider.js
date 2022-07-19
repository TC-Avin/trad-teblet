import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { initalState } from "../../components/common/ProductCards/SliderData";

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };


  return (
    <>
      <div className="bg-[#0A2A4A]">
        <div className="title-box text-center">
          <h2 className="title text-lg lg:text-3xl font-semibold sm:text-3xl md:text-3xl pt-8 text-[#ffffff]">
            Our Product
          </h2>
        </div>
        <div className="container flex flex-wrap  justify-between items-center mx-auto mb-10 py-10" id="product-slider-home" >
          <Slider {...settings}>
            {initalState.map((value, index) => (
              <div
                key={index + "_value"}
                className="  justify-center p-10 w-60  bg-white md:p-10  md:bg-[#FFFFFF] items-center drop-shadow-md  flex flex-col   rounded-xl slide-content"
              >
                <div className="items-center justify-self-center ">
                  <img 
                    alt="No Image"
                    src={value.image}
                    className="h-20 w-20 mx-auto"
                  />
                  <p className="  text-normal mb-2 font-medium text-[#0A2A4A] text-center">
                  </p>
                  <div className="  text-sm mt-4 font-small text-[#808D9A] text-justify ">
                    {value.description}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default ProductSlider;
