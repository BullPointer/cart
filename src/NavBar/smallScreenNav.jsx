/* eslint-disable react/prop-types */
import "./smallNav.css";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useCartInfo } from "../utils/CartProvider";
import { useAuth } from "../utils/Auth";

export default function SmallScreenNav({
  setActive,
  activeSearch,
  filterItem,
  items,
  category,
  navigateItem,
  handleKeypress,
}) {
  const auth = useAuth();
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebar = openSidebar ? "side-active" : "";

  const handleOpenSidebar = (e) => {
    e.stopPropagation();
    setOpenSidebar(true);
  };
  const allowSidebar = (e) => e.stopPropagation();
  const preventSidebar = () => setOpenSidebar(false);

  useEffect(() => {
    window.addEventListener("click", preventSidebar);

    return () => window.removeEventListener("click", preventSidebar);
  }, []);

  return (
    <nav className="nav">
      <div className="top-nav">
        <NavLink to="/" className="logo-txt">
          Cart
        </NavLink>
        <div className="nav-right">
          <NavLink to="/my-cart" className="nav-cart">
            <Icon className="cart-logo" icon="teenyicons:cart-outline" />
            <div className="cart-num">{useCartInfo().cartCount}</div>
          </NavLink>
          <Icon
            onClick={handleOpenSidebar}
            className="bar-icon"
            icon="fe:bar"
          />
        </div>
      </div>

      <div className="bottom-nav">
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
            <NavLink to="sign-up" className="prof">
              Sign up{" "}
            </NavLink>
            <NavLink to="sign-in" className="prof">
              Sign in
            </NavLink>
          </div>
        )}
      </div>
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
            {items?.map(({ id, title, category }, index) => (
              <div
                onClick={() => navigateItem(id, category)}
                key={index}
                className="item-list"
              >
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul onClick={allowSidebar} className={`${sidebar}`}>
        <div className="close">
          <Icon
            onClick={() => setOpenSidebar(false)}
            className="close-bar"
            icon="icon-park-solid:big-x"
          />
        </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About</NavLink>
        <NavLink to="/contact-us">Contact</NavLink>
      </ul>
    </nav>
  );
}
