import { Category, Products } from "../database/category";
import { Icon } from "@iconify/react";

export default function DisplayCat() {
  return (
    <div className="item-container">
      {Products?.map((product, index) => (
        <div key={index}>
          {console.log(product)}
          <div className="item-title">{Category[index]}</div>
          <div className="item-box">
            {product.items?.map((item, index) => (
              <div key={index}>
                <div className="item">
                  <img src={item.img} alt="" />
                  <div className="info">{item.item}</div>
                  <div className="info">{item.about}</div>
                  <div className="info">{item.price}</div>
                  <div className="info">Ex Tax: {item.exPrice}</div>
                  <div className="item-btns">
                    <div className="btn">
                      <Icon
                        className="cart-logo"
                        icon="teenyicons:cart-outline"
                      />
                      <div className="add-cart">ADD TO CART</div>
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
      ))}
    </div>
  );
}
