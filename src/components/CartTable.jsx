/* eslint-disable no-unused-vars */
import { createSearchParams, useNavigate } from "react-router-dom";
import { useCartInfo } from "../utils/CartProvider";
import { getCart, removeCart } from "./LocalStorage";
import NoCart from "./NoCart";

export default function CartTable() {
  const navigate = useNavigate();
  const { cartQuantity, setCartQuantity } = useCartInfo();

  const cartInfo = useCartInfo();
  const handleDelete = (id, objName) => {
    setCartQuantity((currentItems) => {
      const { [objName]: names, ...rest } = currentItems;
      return rest;
    });
    removeCart(id);
    cartInfo.updateCartCount();
  };

  const navigateItem = (objId) => {
    if (objId) {
      navigate({
        pathname: "/cart/item",
        search: createSearchParams({ id: objId }).toString(),
        path: location.pathname,
      });
    }
  };

  if (getCart().length == 0) return <NoCart />;
  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <td>Image</td>
            <td>Product Name</td>
            <td>Model </td>
            <td>Quantity </td>
            <td>Unit Price</td>
            <td>Total</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {getCart()?.map((item, index) => (
            <tr key={index}>
              <td>
                <div  onClick={() => navigateItem(item.id)} className="image">
                  <img src={item.cart.image} alt="loading" />
                </div>
              </td>
              <td onClick={() => navigateItem(item.id)}>{item.cart.title}</td>
              <td>{item.cart.category}</td>
              <td>{item.count}</td>
              <td>{item.cart.price}$</td>
              <td>{item.cart.price * item.count}$ </td>
              <td>
                <button onClick={() => handleDelete(item.id, `item${item.id}`)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
