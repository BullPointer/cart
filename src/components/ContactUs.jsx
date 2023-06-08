import "../assets/contact.css";
import Img from '../assets/shopping.jpg';

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-main">
        <div className="title">Contact Cart</div>
        <div className="intro">
          Leave a message with us and we will be happy to reply as soon as we can. 
          We could also give you updates about Cart delivered to you.
        </div>
        <div className="content">
          <form action="">
            <label>Enter email</label>
            <input type="email" name="" id="" />
            <label>Enter your Message</label>
            <textarea name=""></textarea>
          </form>
          <div className="contact-bottom">
            Protected by reCAPTCHA. The Google Privacy Policy and Terms of
            Service apply. Amazon Privacy Policy | Opt out anytime
          </div>
        </div>
      </div>
      <div className="contact-img">
        <img src={Img} alt="" />
      </div>
    </div>
  );
}
