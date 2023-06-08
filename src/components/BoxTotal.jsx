import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import { getCart } from "./LocalStorage";

export default function BoxTotal() {
  const [total, setTotal] = useState("");
  useEffect(() => {
    function totalFunc() {
      const cart = getCart();
      const sum = cart.reduce((prev, num) => {
        return prev + num.count * num.cart.price;
      }, 0);
      setTotal(Math.round(sum) || 0);
    }
    totalFunc();
  }, []);

  return (
    <div className="box-total">
      {!getCart().length == 0 ? (
        <div className="total-table">
          <table className="table" border="1">
            <tbody className="total-tbody">
              <tr className="total-tr">
                <td className="total-td">Sub-Total:</td>
                <td className="total-td">No</td>
              </tr>
              <tr className="total-tr">
                <td className="total-td">Total:</td>
                <td className="total-td">
                  {/* {total}$ */}
                  <NumericFormat
                    displayType="input"
                    allowLeadingZeros
                    thousandSeparator=","
                    value={total}
                  />
                  $
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}

      <div className="btn-box">
        <Link to="/cart" className="shop-btn">
          Continue Shopping
        </Link>
        {!getCart().length == 0 ? <div className="shop-btn">Checkout</div> : ""}
      </div>
    </div>
  );
}
