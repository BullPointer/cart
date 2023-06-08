/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DisplayCards from "./DisplayCards";
import DisplaySlick from "./DisplaySlick";
import { useCartInfo } from "../utils/CartProvider";
import { setCart } from "./LocalStorage";
import { getCount } from "../utils/getInfo";

export default function DisplayCat({ products, category, navigateItem }) {
  const [categories, setCategories] = useState(null);
  const { updateCartCount, cartQuantity, setCartQuantity } = useCartInfo();

  const filteredCat = () => {
    const result = products?.filter((item) => item.category == category);
    setCategories(result);
  };
  const handleCart = (item) => {
    setCart(item);
    updateCartCount();
    const itemCount = getCount(item.id);
    setCartQuantity({ ...cartQuantity, [`item${item.id}`]: itemCount });
  };

  useEffect(() => {
    filteredCat();
  }, [products]);
  if (categories?.length > 4) {
    return <DisplaySlick navigateItem={navigateItem} categories={categories} />;
  } else {
    return (
      <DisplayCards
        handleCart={handleCart}
        navigateItem={navigateItem}
        categories={categories}
        category={category}
      />
    );
  }

}
