/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react';
import Slider from "react-slick";

export const SingleSlider = ({ products, navigateItem }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  };

  return (
    products ?
    <div className="slide-container">
      <>
        <Slider className="slick" {...settings}>
          {products?.slice(0, 2).map(({id, image, title, category}, index) => (
            <div onClick={() => navigateItem(id, category)} key={index} className="slick-div">
              <img src={image} alt="" />
              <div>{title}</div>
            </div>
          ))}
        </Slider>
      </>
    </div> : <Icon className="loading" icon="mingcute:loading-fill" />
  );
};
