import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Bottombar from "./BottomBar/Bottombar";
import { Home } from "./components/Home";
import Item from "./components/Item";
import ShoppingCart from "./components/ShoppingCart";
import NotFoundPage from "./components/NotFoundPage";
import { CartProvider } from "./utils/CartProvider";
import { getCart } from "./components/LocalStorage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { AuthProvider } from "./utils/Auth";
import { DataProvider } from "./utils/DataProvider";
import DisplaySelect from "./components/DisplaySelect";

window.onload = (function () {
  if (!getCart()) return localStorage.setItem("carts", JSON.stringify([]));
})();
function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Home />} />
            <Route path="/cart/item" element={<Item />} />
            <Route path="/cart/p" element={<DisplaySelect />} />
            <Route path="/cart/my-cart" element={<ShoppingCart />} />
            <Route path="/cart/about-us" element={<AboutUs />} />
            <Route path="/cart/contact-us" element={<ContactUs />} />
            <Route path="/cart/sign-in" element={<Signin />} />
            <Route path="/cart/sign-up" element={<Signup />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Bottombar />
        </CartProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
