/* eslint-disable no-undef */
export const createCart = (product) => {
  const cartObj = {};
  cartObj["id"] = product.id;
  cartObj["count"] = 1;
  cartObj["cart"] = product;
  return cartObj;
};
export function setCart(product) {
  let checkCart = getCart();
  let newCart = [];
  if (!checkCart) {
    newCart.push(createCart(product));
    return localStorage.setItem("carts", JSON.stringify(newCart));
  } else {
    const index = checkCart.findIndex((obj) => obj.id == product.id);
    if (index == -1) {
      checkCart.push(createCart(product));
      return localStorage.setItem("carts", JSON.stringify(checkCart));
    } else {
      checkCart[index].count += 1;
      return localStorage.setItem("carts", JSON.stringify(checkCart));
    }
  }
}
export function getCart() {
  return JSON.parse(localStorage.getItem("carts"));
}
export function removeCart(id) {
  const cart = getCart();
  const index = cart.findIndex((obj) => obj.id == id);
  if (index > -1) {
    cart.splice(index, 1);
    return localStorage.setItem("carts", JSON.stringify(cart));
  }
}
