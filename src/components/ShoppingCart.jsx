import '../assets/cart.css';
import CartExtra from "./CartExtra";
import CartTable from "./CartTable";

export default function ShoppingCart() {
  return (
    <div className="cart-container">
        <div className="title">Shopping Cart</div>
        <CartTable />
        <CartExtra />
    </div>
  )
}
