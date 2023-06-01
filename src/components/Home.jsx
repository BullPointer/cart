import "../assets/home.css";
import "react-slideshow-image/dist/styles.css";
import { SingleSlider } from "./Slider";
import DisplayCat from "./DisplayCat";


export const Home = () => {

  return (
    <>
      <SingleSlider />
      <DisplayCat />
    </>
  );
};
