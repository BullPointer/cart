/* eslint-disable react/prop-types */
import DisplayCards from "./DisplayCards";
import { useCartInfo } from "../utils/CartProvider";
import { setCart } from "./LocalStorage";
import { getCount } from "../utils/getInfo";
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";

export default function DisplaySelect() {
  const {state} = useLocation();
  const navigate = useNavigate();
  const { updateCartCount, cartQuantity, setCartQuantity } = useCartInfo();

  const handleCart = (item) => {
    setCart(item);
    updateCartCount();
    const itemCount = getCount(item.id);
    setCartQuantity({ ...cartQuantity, [`item${item.id}`]: itemCount });
  };
  const navigateItem = (objId, cat) => {
    if (objId) {
      navigate({
        pathname: "/item",
        search: createSearchParams({ category: cat, id: objId }).toString(),
        path: location.pathname
      });
    }
  };
  if (state.searchData.length > 0) {
    return (
      <DisplayCards
        handleCart={handleCart}
        navigateItem={navigateItem}
        categories={state.searchData}
        category={'Results'}
      />
    );
  }
  return(
    <div className="item-not-found">
    Sorry! No result found
  </div>
  )
}
