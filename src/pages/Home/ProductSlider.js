import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { initalState } from "../../components/common/ProductCards/SliderData";

const BackArrow = (props) => {
	return (
	  <button type="button" onClick={props.onClick} class="back-forword-btn bg-white -m-8 absolute z-50	 ext-blue-700 border border-blue-700 hover:bg-[#3491FF] hover:text-white  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 left-[1%] top-[50%]">
		<svg className="stroke-[#3491ff] hover:stroke-[#ffffff]  " width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <path d="M13.168 3.56969L7.46297 9.27469C6.78922 9.94844 6.78922 11.0509 7.46297 11.7247L13.168 17.4297" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	  </button>
	)
  }
  
  const ForwardArrow = (props) => {
	return (
	  <button type="button" onClick={props.onClick} class="back-forword-btn  bg-white -ml-5 z-50 text-blue-700 border border-blue-700 hover:bg-[#3491FF]   hover:text-white focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 absolute right-[-1%] top-[36%]">
		<svg className="stroke-[#3491ff] hover:stroke-[#ffffff]" width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <path d="M7.83203 3.56969L13.537 9.27469C14.2108 9.94844 14.2108 11.0509 13.537 11.7247L7.83203 17.4297" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
  
	  </button>
	)
  }


const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <ForwardArrow />,
		prevArrow: <BackArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
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
                className="  justify-center p-10 w-60 bg-slate-300 md:p-10  md:bg-[#FFFFFF] items-center drop-shadow-md  flex flex-col   rounded-xl slide-content"
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