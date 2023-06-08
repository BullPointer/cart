/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useCartInfo } from "../utils/CartProvider";
import { useAuth } from "../utils/Auth";

export default function BigScreenNav({
  setActive,
  activeSearch,
  filterItem,
  items,
  category,
  navigateItem,
  handleKeypress,
}) {
  const auth = useAuth();
  let count = useCartInfo().cartCount;
  return (
    <nav>
      <div className="top-nav">
        <NavLink to="/cart" className="logo-txt">
          Cart
        </NavLink>
        <div className="nav-right">
          <ul>
            <NavLink className="li" to="/cart">
              Home
            </NavLink>
            <NavLink className="li" to="/cart/about-us">
              About
            </NavLink>
            <NavLink className="li" to="/cart/contact-us">
              Contact
            </NavLink>
          </ul>
          <NavLink to="/cart/my-cart" className="nav-cart">
            <Icon className="cart-logo" icon="teenyicons:cart-outline" />
            <div className="cart-num">{count}</div>
          </NavLink>
        </div>
      </div>

      <div className="bottom-nav">
        <div>
          <div className="search-box">
            <input
              onChange={filterItem}
              type="search"
              onInput={() => setActive(true)}
              onKeyPress={handleKeypress}
            />
            <Icon
              onClick={() => navigateItem(category)}
              className="search-icon"
              icon="iconamoon:search-fill"
            />
          </div>
          <div className={`search-container ${activeSearch()}`}>
            <div onClick={(e) => e.stopPropagation()} className="search-item">
              {items?.map(({ title, category }, index) => (
                <div
                  onClick={() => navigateItem(category)}
                  key={index}
                  className="item-list"
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="search-num">
          <Icon icon="gg:phone" />
          <div>+1 442-772-2342</div>
        </div>
        {auth.user ? (
          <div className="profile">
            <div style={{ color: "blue" }} className="prof">
              Welcome {auth.user.firstname}{" "}
            </div>
            <div onClick={() => auth.logout()} className="prof">
              Sign Out
            </div>
          </div>
        ) : (
          <div className="profile">
            <NavLink to="/cart/sign-up" className="prof">
              Sign up{" "}
            </NavLink>
            <NavLink to="/cart/sign-in" className="prof">
              Sign in
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
