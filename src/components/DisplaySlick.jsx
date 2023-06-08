/* eslint-disable react/prop-types */
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function DisplaySlick({ categories, navigateItem }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  };

  return (
    <>
      <Slider className="slick" {...settings}>
        {categories?.map(({id, image, title, category}, index) => (
          <div onClick={()=> navigateItem(id, category)} key={index} className="slick-div">
            <img src={image} alt="" />
            <div style={{ fontSize: "small" }}>{title}</div>
          </div>
        ))}
      </Slider>
    </>
  );
}
