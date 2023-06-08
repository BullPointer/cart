/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

export default function DisplayCards({
  handleCart,
  categories,
  category,
  navigateItem,
}) {
  return (
    <div className="item-container">
      <div>
        <div className="item-title">{category.toUpperCase()}</div>
        <div className="item-box">
          {categories?.map((item, index) => (
            <div key={index}>
              {console.log(item.category)}
              <div className="item">
                <img
                  onClick={() => navigateItem(item.id, item.category)}
                  src={item.image}
                  alt=""
                />
                <div
                  onClick={() => navigateItem(item.id, item.category)}
                  className="info p"
                >
                  {item.title}
                </div>
                <div className="info">{item.description} </div>
                <div className="info">{item.price}$</div>
                <div className="info">Ex Tax: 123</div>
                <div className="item-btns">
                  <div className="btn">
                    <Icon
                      className="cart-logo"
                      icon="teenyicons:cart-outline"
                    />
                    <div onClick={() => handleCart(item)} className="add-cart">
                      ADD TO CART
                    </div>
                  </div>
                  <div className="btn">
                    <Icon className="cart-logo" icon="ri:heart-fill" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
