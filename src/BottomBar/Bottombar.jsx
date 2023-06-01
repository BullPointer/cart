import "./bottom.css";

export default function Bottombar() {
  return (
    <div className="bottom">
      <div className="top-bottom">
        <div className="list">
          <div className="msg">Information</div>
          <div className="msg">About Us</div>
          <div className="msg">Delivery Information</div>
          <div className="msg">Privacy Policy</div>
          <div className="msg">Terms & Condition</div>
        </div>
        <div className="list">
          <div className="msg">Customer Service</div>
          <div className="msg">Contact Us</div>
          <div className="msg">Returns</div>
          <div className="msg">Site Map</div>
        </div>
        <div className="list">
          <div className="msg">Extras</div>
          <div className="msg">Brands</div>
          <div className="msg">Gift Vouchers</div>
          <div className="msg">Affiliates</div>
          <div className="msg">Specials</div>
        </div>
        <div className="list">
          <div className="msg">My Account</div>
          <div className="msg">Accounts</div>
          <div className="msg">Order History</div>
          <div className="msg">Wish List</div>
          <div className="msg">Newsletter</div>
        </div>
      </div>
      <div className="bottom-bottom">
        <div>Powered By Cart </div>
        <div>Your Store © 2023</div>
      </div>
    </div>
  );
}
