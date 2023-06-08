import { getCart, createCart } from "../components/LocalStorage";

export function getCount(id) {
  const cartObj = getCart();
  const index = cartObj.findIndex((item) => item.id === id);
  return cartObj[index].count;
}

export function updateCount(product, num) {
  const cartObj = getCart();
  const index = cartObj.findIndex((item) => item.id === product.id);

  if (index == -1) {
    cartObj.push(createCart(product));
    cartObj[cartObj.length - 1].count = Number(num);
    return localStorage.setItem("carts", JSON.stringify(cartObj));
  } else {
    cartObj[index].count = Number(num);
    return localStorage.setItem("carts", JSON.stringify(cartObj));
  }
}