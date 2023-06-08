import { useState } from "react";
import BoxExtra from "./BoxExtra";
import BoxTotal from "./BoxTotal";

export default function CartExtra() {
  const [showbox, setShowbox] = useState('');
  const handleShow = (txt) => {
    if (showbox === txt) return setShowbox(null);
    return setShowbox(txt);
  };
  const show = (txt) => showbox === txt ? "show" : "";

  return (
    <div className="cart-extra">
      <div className="header-extra">What would you like to do next?</div>
      <div className="subheader-extra">
        Choose if you have a discount code or reward points you want to use or
        would like to estimate your delivery cost.
      </div>
      <BoxExtra
        handleShow={handleShow}
        show={show}
        msg1={"Use Coupon Code"}
        msg2={"Enter your coupon here"}
      />
      <BoxExtra
        handleShow={handleShow}
        show={show}
        msg1={"Use Gift Voucher"}
        msg2={"Enter your gift voucher code here"}
      />
      <BoxTotal />
    </div>
  );
}
