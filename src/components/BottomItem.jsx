/* eslint-disable react/prop-types */
import { useState } from "react";
import { useCartInfo } from "../utils/CartProvider";
import { getCount, updateCount } from "../utils/getInfo";

export default function BottomBar({ data }) {
  const [error, setError] = useState(null);
  const { updateCartCount, cartQuantity, setCartQuantity } = useCartInfo();
  const [quantity, setQuantity] = useState(cartQuantity[`item${data.id}`]);

  const handleChange = ({ target }) => {
    const { value, validity } = target;
    const errorStr = `Maximum number of stock(${data.rating.count}) available esceeded`;
    setError(target.value > data.rating.count ? errorStr : null);
    setQuantity((v) =>
      validity.valid && value <= data.rating.count ? value : v
    );
  };
  const handleCart = (item) => {
    updateCount(item, quantity || 1);
    updateCartCount();
    const itemCount = getCount(item.id);
    setCartQuantity({ ...cartQuantity, [`item${item.id}`]: itemCount });
  };
  return (
    <div className="bottom-side">
      <div className="left-detail-box">
        <div className="detail-btn">
          <div className="btn">Description</div>
        </div>
        <div className="description">{data.description}</div>
      </div>
      <div className="right-detail-box">
        <div className="detail-option">
          <div className="txt">Available Options</div>
          <div className="qty-input">
            <label>Quantity</label>
            <input
              onChange={handleChange}
              pattern="[0-9]*"
              value={quantity}
              name={"quantity"}
              type="number"
            />
            {error && (
              <div style={{ fontSize: "small", color: "red" }}>{error}</div>
            )}
          </div>
          <div onClick={() => handleCart(data)} className="qty-btn">
            Add to Carts
          </div>
        </div>
      </div>
    </div>
  );
}
