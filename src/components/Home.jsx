/* eslint-disable react-hooks/exhaustive-deps */
import "../assets/home.css";
import "react-slideshow-image/dist/styles.css";
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";
import { SingleSlider } from "./SingleSlider";
import Display from "./Display";
import DisplaySlick from "./DisplaySlick";
import { useData } from "../utils/DataProvider";

export const Home = () => {
  const { products, categories } = useData();
  const location = useLocation();
  const navigate = useNavigate();

  const navigateItem = (objId, cat) => {
    console.log(objId);
    if (objId) {
      navigate({
        pathname: "/cart/item",
        search: createSearchParams({ category: cat, id: objId}).toString(),
        path: location.pathname
      });
    }
  };

  return (
    <>
      <SingleSlider navigateItem={navigateItem} products={products} />
      <DisplaySlick navigateItem={navigateItem} />
      {categories?.map((category) => (
        <>
          <Display
            navigateItem={navigateItem}
            products={products}
            category={category}
          />
        </>
      ))}
      <div className="space"></div>
    </>
  );
};
